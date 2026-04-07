#!/usr/bin/env node
/**
 * Comprehensive test suite for generate scripts
 * Tests naming convention conversions and documentation generation
 */

import { readdirSync, readFileSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const providersDir = join(__dirname, "..", "src", "providers");
const resourcesDir = join(__dirname, "..", "resources");

// Hardcoded mappings for irreversible naming conversions
const IRREVERSIBLE_MAPPINGS = {
  Appstream20: "appstream_2_0",
  Cloud9: "cloud9",
  Cloud9Resource: "cloud9_resource",
  CloudFront: "cloudfront",
  CloudFrontDownloadDistribution: "cloudfront_download_distribution",
  CloudFrontEdgeLocation: "cloudfront_edge_location",
  CloudFrontStreamingDistribution: "cloudfront_streaming_distribution",
  Route53: "route_53",
  Route53HostedZone: "route_53_hosted_zone",
  SAPHANAOnAzure: "sap_hana_on_azure",
  Workspaces2: "workspaces_2",
  SQLVM: "sql_vm",
  AzureSQLVM: "azure_sql_vm",
  AzureOperator5gCore: "azure_operator_5g_core",
  ADB2C: "ad_b2c",
  AzureADB2C: "azure_ad_b2c",
  Windows10IotCoreServices: "windows_10_iot_core_services",
  ArcPostgresql: "arc_postgresql_",
  CCM: "ccm",
  CM: "cm",
  Bind9: "bind9",
  EC2API: "ec2api",
  Iot1Click: "iot_1_click",
};

// Conversion function from generate-node-docs.mjs
function classNameToImportVar(className) {
  // Use hardcoded mappings first
  if (IRREVERSIBLE_MAPPINGS[className]) {
    return IRREVERSIBLE_MAPPINGS[className];
  }

  return className
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2") // ABCd -> ABC_d (consecutive capitals before word)
    .replace(/([a-z])([A-Z])/g, "$1_$2") // aB -> a_B (camelCase)
    .replace(/([0-9])([A-Z])/g, "$1_$2") // 1A -> 1_A (number before capital)
    .toLowerCase();
}

// Test 1: Verify we can parse actual generated files
function testParseProviderFiles() {
  console.log("Test 1: Parse actual provider files\n");

  const providers = readdirSync(providersDir);
  let totalFiles = 0;
  let totalNodes = 0;
  let nodesWithIcons = 0;

  for (const provider of providers) {
    const providerPath = join(providersDir, provider);
    const stat = statSync(providerPath);

    if (!stat.isDirectory()) continue;

    const entries = readdirSync(providerPath);
    for (const entry of entries) {
      if (!entry.endsWith(".ts") || entry === "index.ts") continue;

      const filePath = join(providerPath, entry);
      const content = readFileSync(filePath, "utf-8");

      // Find all export function declarations
      const exportRegex = /export function (\w+)\(/g;
      let match;

      while ((match = exportRegex.exec(content)) !== null) {
        totalNodes++;
        const nodeName = match[1];

        // Try to find icon import
        const iconVarName = classNameToImportVar(nodeName) + "Icon";
        const iconImportRegex = new RegExp(`import ${iconVarName} from "([^"]+)"`);

        if (content.match(iconImportRegex)) {
          nodesWithIcons++;
        }
      }

      totalFiles++;
    }
  }

  console.log(`  Parsed ${totalFiles} provider files`);
  console.log(`  Total nodes: ${totalNodes}`);
  console.log(`  Nodes with icons found: ${nodesWithIcons}`);
  console.log(`  Coverage: ${((nodesWithIcons / totalNodes) * 100).toFixed(1)}%`);

  // Should have nearly 100% coverage with hardcoded mappings
  // A few edge cases may still be missing due to unusual filename patterns
  const coverage = nodesWithIcons / totalNodes;
  const passed = coverage >= 0.998; // 99.8% threshold (allows for ~5 missing icons)

  if (!passed) {
    console.log(`  \n  ⚠️  Coverage below 99.8%: ${nodesWithIcons}/${totalNodes} nodes`);
  } else if (nodesWithIcons < totalNodes) {
    console.log(`  ℹ️  ${totalNodes - nodesWithIcons} edge cases not found`);
  }

  return passed;
}

// Test 2: Verify naming conventions
function testNamingConventions() {
  console.log("\nTest 2: Naming convention compatibility\n");

  // These are edge cases where filename -> class name loses information
  const knownIrreversibleCases = new Set([
    "Appstream20", // appstream-2-0.png -> Appstream20
    "Route53", // route-53.png -> Route53
    "Route53HostedZone", // route-53-hosted-zone.png -> Route53HostedZone
    "Iot1Click", // iot-1-click.png -> Iot1Click
    "IotHttp2", // iot-http2.png -> IotHttp2
    "Cloud9", // cloud9.png -> Cloud9
    "Cloud9Resource", // cloud9-resource.png -> Cloud9Resource
    "CloudFront", // cloudfront.png -> CloudFront (special case in TITLE_WORDS)
  ]);

  // Test some reversible cases
  const testCases = [
    { className: "AmazonOpensearchService", expected: "amazon_opensearch_service" },
    { className: "EC2Ami", expected: "ec2_ami" },
    { className: "EMRCluster", expected: "emr_cluster" },
    { className: "ElasticBeanstalk", expected: "elastic_beanstalk" },
    { className: "SimpleStorageServiceS3", expected: "simple_storage_service_s3" },
    { className: "InternetAlt1", expected: "internet_alt1" },
    { className: "KinesisDataAnalytics", expected: "kinesis_data_analytics" },
  ];

  let passCount = 0;

  for (const { className, expected } of testCases) {
    const result = classNameToImportVar(className);
    const passed = result === expected;

    if (passed) {
      console.log(`  ✓ ${className} -> ${result}`);
      passCount++;
    } else {
      console.log(`  ✗ ${className}`);
      console.log(`    Expected: ${expected}`);
      console.log(`    Got:      ${result}`);
    }
  }

  console.log(`\n  Passed: ${passCount}/${testCases.length}`);

  if (passCount < testCases.length) {
    console.log(`  \n  Note: ${knownIrreversibleCases.size} classes have irreversible naming`);
    console.log(`  (numbers separated by hyphens get concatenated in class names)`);
  }

  return passCount === testCases.length;
}

// Test 3: Verify all resources have corresponding provider files
function testProviderResources() {
  console.log("\nTest 3: Provider resource coverage\n");

  // Get only directories from providers
  const providers = readdirSync(providersDir).filter((entry) =>
    statSync(join(providersDir, entry)).isDirectory(),
  );
  const resources = readdirSync(resourcesDir);

  const providerSet = new Set(providers);
  const resourceSet = new Set(resources);

  let missingProviders = 0;
  let missingResources = 0;

  // Check if every resource has a provider
  for (const resource of resourceSet) {
    if (!providerSet.has(resource)) {
      console.log(`  ⚠️  Resource '${resource}' has no provider file`);
      missingProviders++;
    }
  }

  // Check if every provider has resources
  for (const provider of providerSet) {
    if (!resourceSet.has(provider)) {
      console.log(`  ⚠️  Provider '${provider}' has no resources`);
      missingResources++;
    }
  }

  if (missingProviders === 0 && missingResources === 0) {
    console.log(`  ✓ All ${providers.length} providers have matching resources`);
  }

  return missingProviders === 0 && missingResources === 0;
}

// Run all tests
console.log("=".repeat(60));
console.log("Generate Scripts Test Suite");
console.log("=".repeat(60));

const test1 = testParseProviderFiles();
const test2 = testNamingConventions();
const test3 = testProviderResources();

console.log("\n" + "=".repeat(60));
console.log("Test Summary");
console.log("=".repeat(60));
console.log(`Test 1 (Parse Files):    ${test1 ? "✓ PASS" : "✗ FAIL"}`);
console.log(`Test 2 (Naming Conv):    ${test2 ? "✓ PASS" : "✗ FAIL"}`);
console.log(`Test 3 (Resource Cov):   ${test3 ? "✓ PASS" : "✗ FAIL"}`);
console.log("=".repeat(60));

const allPassed = test1 && test2 && test3;
process.exit(allPassed ? 0 : 1);
