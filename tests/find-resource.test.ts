import { describe, it, expect } from "vite-plus/test";
import { allResources, findResource } from "../src/providers/find-resource.js";

describe("find-resource module", () => {
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
      const results = findResource("EC2");
      expect(results.length).toBeGreaterThan(0);
      expect(results.every((r) => r.resource.toLowerCase().includes("ec2"))).toBe(true);
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

    it("should prioritize exact matches (case-insensitive)", () => {
      // Search for "Run" - should return exact "Run" match first
      const results = findResource("Run");
      expect(results.length).toBeGreaterThan(1);
      // First result should be the exact match "Run"
      expect(results[0].resource).toBe("Run");
    });

    it("should prioritize exact matches over partial matches", () => {
      // Search for "EC2" - "EC2" should come before "EC2Ami", "EC2AutoScaling", etc.
      const results = findResource("EC2");
      expect(results.length).toBeGreaterThan(1);

      // Find the position of exact match
      const exactMatchIndex = results.findIndex((r) => r.resource === "EC2");
      expect(exactMatchIndex).toBe(0); // Should be first

      // Find position of partial match
      const partialMatchIndex = results.findIndex((r) => r.resource === "EC2Ami");
      expect(partialMatchIndex).toBeGreaterThan(exactMatchIndex);
    });

    it("should handle exact match case-insensitively", () => {
      // Search for "lambda" (lowercase) - "Lambda" should be prioritized
      const results = findResource("lambda");
      expect(results.length).toBeGreaterThan(0);

      // First result should be the exact case-insensitive match
      const firstResult = results[0];
      expect(firstResult.resource.toLowerCase()).toBe("lambda");
    });

    it("should sort partial matches after exact matches", () => {
      const results = findResource("S3");
      expect(results.length).toBeGreaterThan(1);

      // Split results into exact and partial matches
      const exactMatches = results.filter((r) => r.resource.toLowerCase() === "s3");
      const partialMatches = results.filter(
        (r) => r.resource.toLowerCase() !== "s3" && r.resource.toLowerCase().includes("s3"),
      );

      // All exact matches should come before partial matches
      if (exactMatches.length > 0 && partialMatches.length > 0) {
        const lastExactIndex = results.lastIndexOf(exactMatches[exactMatches.length - 1]);
        const firstPartialIndex = results.indexOf(partialMatches[0]);
        expect(lastExactIndex).toBeLessThan(firstPartialIndex);
      }
    });
  });
});
