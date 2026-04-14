import { describe, it, expect } from "vite-plus/test";
import { allResources, findResource } from "../src/providers/resources-list.js";

describe("resources-list module", () => {
  describe("allResources", () => {
    it("should export all resources array", () => {
      expect(Array.isArray(allResources)).toBe(true);
      expect(allResources.length).toBeGreaterThan(0);
    });

    it("should have proper resource structure", () => {
      const resource = allResources[0];
      expect(resource).toHaveProperty("provider");
      expect(resource).toHaveProperty("type");
      expect(resource).toHaveProperty("resource");
      expect(typeof resource.provider).toBe("string");
      expect(typeof resource.type).toBe("string");
      expect(typeof resource.resource).toBe("string");
    });

    it("should have thousands of resources", () => {
      expect(allResources.length).toBeGreaterThan(2000);
    });
  });

  describe("findResource", () => {
    it("should return empty array for no match", () => {
      const results = findResource("xyznonexistent");
      expect(results).toEqual([]);
    });

    it("should find resources by exact name match", () => {
      const results = findResource("Lambda");
      expect(results.length).toBeGreaterThan(0);
      expect(results.every((r) => r.resource.toLowerCase().includes("lambda"))).toBe(true);
    });

    it("should find resources by partial name match", () => {
      // Search for "Ami" - matches "EC2Ami", "AMI" (AWS compute), etc.
      const results = findResource("Ami");
      expect(results.length).toBeGreaterThan(0);
      expect(results.every((r) => r.resource.toLowerCase().includes("ami"))).toBe(true);
    });

    it("should be case-insensitive", () => {
      const lowerCase = findResource("lambda");
      const upperCase = findResource("LAMBDA");
      const mixedCase = findResource("Lambda");

      expect(lowerCase.length).toBeGreaterThan(0);
      expect(upperCase.length).toBe(lowerCase.length);
      expect(mixedCase.length).toBe(lowerCase.length);
    });

    it("should search only in resource field (not provider)", () => {
      // Search for "gcp" which is a provider name but should NOT appear in resource names
      const providerSearch = findResource("gcp");
      const resourceSearch = findResource("Lambda");

      // Searching "gcp" should NOT return all GCP resources
      // because we only search in resource names
      expect(providerSearch.length).toBe(0);

      // But searching for Lambda should work
      expect(resourceSearch.length).toBeGreaterThan(0);
    });

    it("should search only in resource field (not type)", () => {
      // Search for "analytics" which is a type name
      const results = findResource("analytics");
      const resourceSearch = findResource("EC2");

      // Results should only include resources with "analytics" in the name
      // not all resources in the analytics type
      if (results.length > 0) {
        expect(results.every((r) => r.resource.toLowerCase().includes("analytics"))).toBe(true);
      }

      // But searching for EC2 should work
      expect(resourceSearch.length).toBeGreaterThan(0);
    });

    it("should return all matching resources", () => {
      const results = findResource("S3");
      expect(results.length).toBeGreaterThan(0);

      // Check that results have the right structure
      for (const result of results) {
        expect(result).toHaveProperty("provider");
        expect(result).toHaveProperty("type");
        expect(result).toHaveProperty("resource");
        expect(result.resource.toLowerCase()).toContain("s3");
      }
    });

    it("should handle empty string query", () => {
      const results = findResource("");
      // Empty string matches all resources
      expect(results.length).toBe(allResources.length);
    });

    it("should find Kubernetes resources", () => {
      const results = findResource("Pod");
      expect(results.length).toBeGreaterThan(0);
      expect(results.some((r) => r.resource.includes("Pod"))).toBe(true);
    });

    it("should find Azure resources", () => {
      const results = findResource("VirtualMachine");
      expect(results.length).toBeGreaterThan(0);
    });

    it("should find GCP resources", () => {
      const results = findResource("Run");
      expect(results.length).toBeGreaterThan(0);
      expect(results.some((r) => r.provider === "gcp" && r.resource === "Run")).toBe(true);
    });

    it("should return only exact match when one exists", () => {
      // Search for "Run" - should return only the exact "Run" match
      const results = findResource("Run");
      expect(results.length).toBe(1);
      expect(results[0].resource).toBe("Run");
    });

    it("should return partial matches when no exact match exists", () => {
      // Search for "Lamb" - no exact "Lamb" resource, should return partial matches
      const results = findResource("Lamb");
      expect(results.length).toBeGreaterThan(1);
      expect(results.every((r) => r.resource.toLowerCase().includes("lamb"))).toBe(true);
    });

    it("should handle exact match case-insensitively", () => {
      // Search for "lambda" (lowercase) - should find "Lambda"
      const results = findResource("lambda");
      expect(results.length).toBe(1);
      expect(results[0].resource).toBe("Lambda");
    });

    it("should return partial matches when searching partial term", () => {
      const results = findResource("S3");
      expect(results.length).toBeGreaterThan(1);

      // All results should contain "S3" in their name
      expect(results.every((r) => r.resource.toLowerCase().includes("s3"))).toBe(true);
    });
  });
});
