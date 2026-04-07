#!/usr/bin/env node
/**
 * Script to generate node reference documentation from provider source files
 * Generates comprehensive MDX files with icons, import paths, and aliases
 */

import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const providersDir = join(__dirname, '..', 'src', 'providers');
const docsDir = join(__dirname, '..', 'docs', 'docs', 'nodes');

// Provider metadata
const providerMeta = {
  alibabacloud: { title: 'Alibaba Cloud', description: 'Node classes for Alibaba Cloud provider' },
  aws: { title: 'AWS', description: 'Node classes for Amazon Web Services provider' },
  azure: { title: 'Azure', description: 'Node classes for Microsoft Azure provider' },
  digitalocean: { title: 'DigitalOcean', description: 'Node classes for DigitalOcean provider' },
  elastic: { title: 'Elastic', description: 'Node classes for Elastic Stack provider' },
  firebase: { title: 'Firebase', description: 'Node classes for Firebase provider' },
  gcp: { title: 'GCP', description: 'Node classes for Google Cloud Platform provider' },
  generic: { title: 'Generic', description: 'Node classes for generic/on-premise resources' },
  gis: { title: 'GIS', description: 'Node classes for GIS (Geographic Information Systems) provider' },
  ibm: { title: 'IBM', description: 'Node classes for IBM Cloud provider' },
  k8s: { title: 'Kubernetes', description: 'Node classes for Kubernetes provider' },
  oci: { title: 'OCI', description: 'Node classes for Oracle Cloud Infrastructure provider' },
  onprem: { title: 'On-Premises', description: 'Node classes for on-premises infrastructure' },
  openstack: { title: 'OpenStack', description: 'Node classes for OpenStack provider' },
  outscale: { title: 'Outscale', description: 'Node classes for Outscale provider' },
  programming: { title: 'Programming', description: 'Node classes for programming languages and frameworks' },
  saas: { title: 'SaaS', description: 'Node classes for Software as a Service providers' },
};

// Parse a provider file and extract exports
function parseProviderFile(filePath, provider, moduleName) {
  const content = readFileSync(filePath, 'utf-8');
  const nodes = [];
  
  // Find all export function declarations
  const exportRegex = /export function (\w+)\(/g;
  let match;
  
  while ((match = exportRegex.exec(content)) !== null) {
    const nodeName = match[1];
    
    // Find icon import for this node
    // Convert CamelCase to snake_case: AmazonOpensearchService -> amazon_opensearch_service
    // Handle consecutive capitals like EMRCluster -> emr_cluster
    // Handle numbers like EC2Ami -> ec2_ami (numbers stay attached to preceding capitals)
    const iconVarName = nodeName
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')  // ABCd -> ABC_d (consecutive capitals before word)
      .replace(/([a-z])([A-Z])/g, '$1_$2')         // aB -> a_B (camelCase)
      .replace(/([0-9])([A-Z])/g, '$1_$2')         // 1A -> 1_A (number before capital)
      .toLowerCase() + 'Icon';
    const iconImportRegex = new RegExp(`import ${iconVarName} from "([^"]+)"`);
    const iconMatch = content.match(iconImportRegex);
    
    let iconPath = null;
    if (iconMatch) {
      // Convert the import path to a web path
      const importPath = iconMatch[1];
      // Extract the relative path from the resources directory
      const resourcesMatch = importPath.match(/\.\.\/\.\.\/\.\.\/(resources\/.*)/);
      if (resourcesMatch) {
        iconPath = '/' + resourcesMatch[1];
      }
    }
    
    nodes.push({
      name: nodeName,
      iconPath,
      module: moduleName,
    });
  }
  
  return nodes;
}

// Generate documentation for a provider
function generateProviderDocs(provider) {
  const providerDir = join(providersDir, provider);
  const meta = providerMeta[provider];
  
  if (!meta) {
    console.log(`Skipping ${provider} - no metadata found`);
    return;
  }
  
  // Get all module files
  const entries = readdirSync(providerDir);
  const modules = [];
  
  for (const entry of entries) {
    const entryPath = join(providerDir, entry);
    const stat = statSync(entryPath);
    
    if (stat.isFile() && entry.endsWith('.ts') && entry !== 'index.ts') {
      const moduleName = entry.replace('.ts', '');
      const nodes = parseProviderFile(entryPath, provider, moduleName);
      if (nodes.length > 0) {
        modules.push({ name: moduleName, nodes });
      }
    }
  }
  
  // Sort modules alphabetically
  modules.sort((a, b) => a.name.localeCompare(b.name));
  
  // Generate the MDX content
  let content = '';
  
  // Frontmatter
  content += `---\n`;
  content += `title: ${meta.title}\n`;
  content += `description: ${meta.description}\n`;
  content += `---\n\n`;
  
  // Title
  content += `# ${meta.title}\n\n`;
  content += `Node classes list for the ${meta.title} provider.\n\n`;
  
  // Example Usage section
  content += '## Example Usage\n\n';
  content += '```typescript\n';
  content += 'import { Diagram } from "diagrams-js";\n';
  
  // Add example imports from first two modules
  for (const module of modules.slice(0, 2)) {
    const nodeNames = module.nodes.slice(0, 3).map(n => n.name).join(', ');
    content += `import { ${nodeNames} } from "diagrams-js/${provider}/${module.name}";\n`;
  }
  
  content += `\nconst diagram = Diagram("${meta.title} Architecture", { direction: "TB" });\n\n`;
  
  // Add example node creation
  const exampleNodes = [];
  for (const module of modules.slice(0, 2)) {
    if (module.nodes.length > 0) {
      exampleNodes.push(module.nodes[0].name);
    }
  }
  
  for (let i = 0; i < exampleNodes.length; i++) {
    content += `const node${i + 1} = diagram.add(${exampleNodes[i]}("Node ${i + 1}"));\n`;
  }
  
  if (exampleNodes.length > 1) {
    content += '\nnode1.to(node2);\n';
  }
  
  content += '\nconst svg = await diagram.render();\n';
  content += 'diagram.destroy();\n';
  content += '```\n\n';
  
  // Note section
  content += ':::note\n';
  content += `All node classes available in the [Python diagrams library](https://diagrams.mingrammer.com/docs/nodes/${provider}) are also available in diagrams-js with the same class names and structure.\n`;
  content += ':::\n\n';
  
  // Node Reference section
  content += '## Node Reference\n\n';
  
  // Add modules and nodes
  for (const module of modules) {
    content += `### ${provider}/${module.name}\n\n`;
    
    for (const node of module.nodes) {
      if (node.iconPath) {
        content += `<img src="${node.iconPath}" width="30" alt="${node.name}" /> `;
      }
      content += `**${node.name}**\n\n`;
      content += '```typescript\n';
      content += `import { ${node.name} } from "diagrams-js/${provider}/${module.name}"\n`;
      content += '```\n\n';
    }
  }

  // Write the file
  const outputPath = join(docsDir, `${provider}.mdx`);
  writeFileSync(outputPath, content);
  console.log(`Generated ${outputPath}`);
}

// Main execution
console.log('Generating node reference documentation...\n');

const providers = readdirSync(providersDir);

for (const provider of providers) {
  const providerPath = join(providersDir, provider);
  const stat = statSync(providerPath);
  
  if (stat.isDirectory()) {
    generateProviderDocs(provider);
  }
}

console.log('\nDone!');
