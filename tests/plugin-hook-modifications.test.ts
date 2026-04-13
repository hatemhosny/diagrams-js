import { describe, it, expect } from "vite-plus/test";
import { Diagram, Node, HookEvent } from "../src/index.js";
import type { DiagramsPlugin, HookContext } from "../src/plugins/types.js";
import type { Node as NodeType } from "../src/Node.js";
import type { Edge } from "../src/Edge.js";
import type { Cluster } from "../src/Cluster.js";

describe("Plugin Hook Modification Tests", () => {
  describe("Node attribute modifications", () => {
    it("should allow modifying node label in hook", async () => {
      const labelPlugin = (): DiagramsPlugin => ({
        name: "label-modifier",
        version: "1.0.0",
        apiVersion: "1.0",
        runtimeSupport: { node: true, browser: true, deno: true, bun: true },
        capabilities: [
          {
            type: "hook",
            hooks: [
              {
                event: HookEvent.NODE_CREATE,
                handler: async (data: unknown, _context: HookContext) => {
                  const nodeData = data as { node: NodeType };
                  nodeData.node.label = "[AWS] " + nodeData.node.label;
                  return nodeData;
                },
              },
            ],
          },
        ],
      });

      const diagram = Diagram("Test");
      await diagram.registerPlugins([labelPlugin()]);

      const node = diagram.add(Node("Server"));
      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(node.label).toBe("[AWS] Server");
      const dot = diagram.toString();
      expect(dot).toContain("[AWS] Server");
    });

    it("should allow modifying node width via nodeAttrs", async () => {
      const widthPlugin = (): DiagramsPlugin => ({
        name: "width-modifier",
        version: "1.0.0",
        apiVersion: "1.0",
        runtimeSupport: { node: true, browser: true, deno: true, bun: true },
        capabilities: [
          {
            type: "hook",
            hooks: [
              {
                event: HookEvent.NODE_CREATE,
                handler: async (data: unknown, _context: HookContext) => {
                  const nodeData = data as { node: NodeType };
                  nodeData.node.nodeAttrs.width = "1.5";
                  return nodeData;
                },
              },
            ],
          },
        ],
      });

      const diagram = Diagram("Test");
      await diagram.registerPlugins([widthPlugin()]);

      const node = diagram.add(Node("Server"));
      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(node.nodeAttrs.width).toBe("1.5");
      const dot = diagram.toString();
      expect(dot).toContain('width="1.5"');
    });

    it("should allow modifying node style and fillcolor via nodeAttrs", async () => {
      const stylePlugin = (): DiagramsPlugin => ({
        name: "style-modifier",
        version: "1.0.0",
        apiVersion: "1.0",
        runtimeSupport: { node: true, browser: true, deno: true, bun: true },
        capabilities: [
          {
            type: "hook",
            hooks: [
              {
                event: HookEvent.NODE_CREATE,
                handler: async (data: unknown, _context: HookContext) => {
                  const nodeData = data as { node: NodeType };
                  nodeData.node.nodeAttrs.style = "filled";
                  nodeData.node.nodeAttrs.fillcolor = "lightblue";
                  return nodeData;
                },
              },
            ],
          },
        ],
      });

      const diagram = Diagram("Test");
      await diagram.registerPlugins([stylePlugin()]);

      const node = diagram.add(Node("Server"));
      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(node.nodeAttrs.style).toBe("filled");
      expect(node.nodeAttrs.fillcolor).toBe("lightblue");
      const dot = diagram.toString();
      expect(dot).toContain('style="filled"');
      expect(dot).toContain('fillcolor="lightblue"');
    });

    it("should allow modifying provider, type, and resource", async () => {
      const metadataPlugin = (): DiagramsPlugin => ({
        name: "metadata-modifier",
        version: "1.0.0",
        apiVersion: "1.0",
        runtimeSupport: { node: true, browser: true, deno: true, bun: true },
        capabilities: [
          {
            type: "hook",
            hooks: [
              {
                event: HookEvent.NODE_CREATE,
                handler: async (data: unknown, _context: HookContext) => {
                  const nodeData = data as { node: NodeType };
                  nodeData.node.provider = "aws";
                  nodeData.node.type = "compute";
                  nodeData.node.resource = "ALB";
                  return nodeData;
                },
              },
            ],
          },
        ],
      });

      const diagram = Diagram("Test");
      await diagram.registerPlugins([metadataPlugin()]);

      const node = diagram.add(Node("Load Balancer"));
      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(node.provider).toBe("aws");
      expect(node.type).toBe("compute");
      expect(node.resource).toBe("ALB");
    });

    it("should allow modifying provider metadata on nodes from provider factories", async () => {
      // This test verifies that hooks can modify provider metadata
      // that was set by provider factory functions
      const metadataPlugin = (): DiagramsPlugin => ({
        name: "metadata-modifier",
        version: "1.0.0",
        apiVersion: "1.0",
        runtimeSupport: { node: true, browser: true, deno: true, bun: true },
        capabilities: [
          {
            type: "hook",
            hooks: [
              {
                event: HookEvent.NODE_CREATE,
                handler: async (data: unknown, _context: HookContext) => {
                  const nodeData = data as { node: NodeType };
                  // Modify existing provider metadata
                  nodeData.node.resource = "ModifiedResource";
                  return nodeData;
                },
              },
            ],
          },
        ],
      });

      const diagram = Diagram("Test");
      await diagram.registerPlugins([metadataPlugin()]);

      // Create a node that simulates a provider factory node
      // Provider factories set metadata via internal ~prefixed properties
      // The public provider/type/resource getters/setters access these same properties
      const node = Node("Test Node");

      // Simulate provider factory setting metadata via internal properties
      // This happens BEFORE the node is registered and the hook fires
      (node as unknown as Record<string, string>)["~provider"] = "aws";
      (node as unknown as Record<string, string>)["~type"] = "network";
      (node as unknown as Record<string, string>)["~resource"] = "OriginalResource";

      // Now add the node to the diagram - this triggers the hook
      diagram.add(node);

      // Wait for the hook to fire and complete
      await new Promise((resolve) => setTimeout(resolve, 50));

      // The hook should have modified the resource
      // The public getter reads from ~resource, which the hook modified
      expect(node.resource).toBe("ModifiedResource");
      // Original provider and type should still be accessible
      expect(node.provider).toBe("aws");
      expect(node.type).toBe("network");
    });

    it("should reflect provider metadata changes in JSON serialization", async () => {
      const metadataPlugin = (): DiagramsPlugin => ({
        name: "metadata-modifier",
        version: "1.0.0",
        apiVersion: "1.0",
        runtimeSupport: { node: true, browser: true, deno: true, bun: true },
        capabilities: [
          {
            type: "hook",
            hooks: [
              {
                event: HookEvent.NODE_CREATE,
                handler: async (data: unknown, _context: HookContext) => {
                  const nodeData = data as { node: NodeType };
                  nodeData.node.provider = "azure";
                  nodeData.node.type = "storage";
                  nodeData.node.resource = "BlobStorage";
                  return nodeData;
                },
              },
            ],
          },
        ],
      });

      const diagram = Diagram("Test");
      await diagram.registerPlugins([metadataPlugin()]);

      const node = diagram.add(Node("Storage"));
      await new Promise((resolve) => setTimeout(resolve, 50));

      const json = diagram.toJSON();
      const nodeData = json.nodes.find((n) => n.id === node.nodeId);

      // JSON structure: provider -> ~provider, service -> ~type, type -> ~resource
      expect(nodeData?.provider).toBe("azure");
      expect(nodeData?.service).toBe("storage");
      expect(nodeData?.type).toBe("BlobStorage");
    });

    it("should apply node attribute modifications to DOT output for nodes in clusters", async () => {
      const stylePlugin = (): DiagramsPlugin => ({
        name: "cluster-node-style",
        version: "1.0.0",
        apiVersion: "1.0",
        runtimeSupport: { node: true, browser: true, deno: true, bun: true },
        capabilities: [
          {
            type: "hook",
            hooks: [
              {
                event: HookEvent.NODE_CREATE,
                handler: async (data: unknown, _context: HookContext) => {
                  const nodeData = data as { node: NodeType };
                  nodeData.node.nodeAttrs.fillcolor = "red";
                  nodeData.node.nodeAttrs.style = "filled";
                  return nodeData;
                },
              },
            ],
          },
        ],
      });

      const diagram = Diagram("Test");
      await diagram.registerPlugins([stylePlugin()]);

      const cluster = diagram.cluster("My Cluster");
      const node = cluster.add(Node("Server"));
      await new Promise((resolve) => setTimeout(resolve, 50));

      // Verify the node object has the modified attributes
      expect(node.nodeAttrs.fillcolor).toBe("red");
      expect(node.nodeAttrs.style).toBe("filled");

      // Verify the DOT output contains the modified attributes
      const dot = diagram.toString();
      console.log("DOT output with attrs:");
      console.log(dot);
      expect(dot).toContain('fillcolor="red"');
      expect(dot).toContain('style="filled"');
    });

    it("should apply node label modifications to DOT output for nodes in clusters", async () => {
      const labelPlugin = (): DiagramsPlugin => ({
        name: "cluster-node-label",
        version: "1.0.0",
        apiVersion: "1.0",
        runtimeSupport: { node: true, browser: true, deno: true, bun: true },
        capabilities: [
          {
            type: "hook",
            hooks: [
              {
                event: HookEvent.NODE_CREATE,
                handler: async (data: unknown, _context: HookContext) => {
                  const nodeData = data as { node: NodeType };
                  nodeData.node.label = "[MODIFIED] " + nodeData.node.label;
                  return nodeData;
                },
              },
            ],
          },
        ],
      });

      const diagram = Diagram("Test");
      await diagram.registerPlugins([labelPlugin()]);

      const cluster = diagram.cluster("My Cluster");
      const node = cluster.add(Node("Server"));
      await new Promise((resolve) => setTimeout(resolve, 50));

      // Verify the node object has the modified label
      expect(node.label).toBe("[MODIFIED] Server");

      // Verify the DOT output contains the modified label
      const dot = diagram.toString();
      console.log("DOT output with label:");
      console.log(dot);
      expect(dot).toContain("[MODIFIED] Server");
    });
  });

  describe("Edge attribute modifications", () => {
    it("should allow modifying edge color via edgeAttrs", async () => {
      const colorPlugin = (): DiagramsPlugin => ({
        name: "edge-color-modifier",
        version: "1.0.0",
        apiVersion: "1.0",
        runtimeSupport: { node: true, browser: true, deno: true, bun: true },
        capabilities: [
          {
            type: "hook",
            hooks: [
              {
                event: HookEvent.EDGE_CREATE,
                handler: async (data: unknown, _context: HookContext) => {
                  const edgeData = data as { edge: Edge };
                  edgeData.edge.edgeAttrs.color = "blue";
                  edgeData.edge.edgeAttrs.penwidth = "2";
                  return edgeData;
                },
              },
            ],
          },
        ],
      });

      const diagram = Diagram("Test");
      await diagram.registerPlugins([colorPlugin()]);

      const node1 = diagram.add(Node("A"));
      const node2 = diagram.add(Node("B"));
      node1.to(node2);
      await new Promise((resolve) => setTimeout(resolve, 50));

      const dot = diagram.toString();
      expect(dot).toContain('color="blue"');
      expect(dot).toContain('penwidth="2"');
    });

    it("should allow modifying both edges in chained connections", async () => {
      const colorPlugin = (): DiagramsPlugin => ({
        name: "edge-color-modifier",
        version: "1.0.0",
        apiVersion: "1.0",
        runtimeSupport: { node: true, browser: true, deno: true, bun: true },
        capabilities: [
          {
            type: "hook",
            hooks: [
              {
                event: HookEvent.EDGE_CREATE,
                handler: async (data: unknown, _context: HookContext) => {
                  const edgeData = data as { edge: Edge };
                  edgeData.edge.edgeAttrs.color = "red";
                  return edgeData;
                },
              },
            ],
          },
        ],
      });

      const diagram = Diagram("Test");
      await diagram.registerPlugins([colorPlugin()]);

      const node1 = diagram.add(Node("A"));
      const node2 = diagram.add(Node("B"));
      const node3 = diagram.add(Node("C"));
      node1.to(node2).to(node3);
      await new Promise((resolve) => setTimeout(resolve, 50));

      const dot = diagram.toString();
      // Should have two edges with color="red"
      const matches = dot.match(/color="red"/g);
      expect(matches).toHaveLength(2);
    });
  });

  describe("Cluster attribute modifications", () => {
    it("should allow modifying cluster attributes via clusterAttrs", async () => {
      const clusterPlugin = (): DiagramsPlugin => ({
        name: "cluster-modifier",
        version: "1.0.0",
        apiVersion: "1.0",
        runtimeSupport: { node: true, browser: true, deno: true, bun: true },
        capabilities: [
          {
            type: "hook",
            hooks: [
              {
                event: HookEvent.CLUSTER_CREATE,
                handler: async (data: unknown, _context: HookContext) => {
                  const clusterData = data as { cluster: Cluster };
                  clusterData.cluster.clusterAttrs.bgcolor = "red";
                  clusterData.cluster.clusterAttrs.pencolor = "blue";
                  return clusterData;
                },
              },
            ],
          },
        ],
      });

      const diagram = Diagram("Test");
      await diagram.registerPlugins([clusterPlugin()]);

      const cluster = diagram.cluster("My Cluster");
      await new Promise((resolve) => setTimeout(resolve, 50));

      expect(cluster.clusterAttrs.bgcolor).toBe("red");
      expect(cluster.clusterAttrs.pencolor).toBe("blue");
    });
  });
});
