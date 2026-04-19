import React, { useEffect, useLayoutEffect, useState, useCallback, useRef } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from "lz-string";
import styles from "./styles.module.css";

// State types
interface Cluster {
  id: string;
  label: string;
}

interface Node {
  id: string;
  label: string;
  custom?: boolean;
  iconMode?: "url" | "iconify";
  iconUrl?: string;
  iconName?: string;
  provider?: string;
  type?: string;
  resource?: string;
  clusterId?: string | null;
}

interface Edge {
  id: string;
  from: string;
  to: string;
  direction: "forward" | "reverse" | "both" | "none";
  style?: string;
  color?: string;
  label?: string;
}

interface DiagramState {
  name: string;
  direction: "LR" | "RL" | "TB" | "BT";
  theme: string;
  clusters: Cluster[];
  nodes: Node[];
  edges: Edge[];
}

type Selection = { type: "node" | "cluster" | "edge"; id: string } | null;

// Resource catalog types
interface Resource {
  provider: string;
  type: string;
  resource: string;
}

// Default state
const defaultState: DiagramState = {
  name: "My Architecture",
  direction: "LR",
  theme: "pastel",
  clusters: [],
  nodes: [],
  edges: [],
};

const cdn = "https://esm.sh/";

export default function VisualEditor(): React.JSX.Element {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const isBrowser = useIsBrowser();

  // State
  const [state, setState] = useState<DiagramState>(defaultState);
  const [idCounter, setIdCounter] = useState(1);
  const [selected, setSelected] = useState<Selection>(null);
  const [editingItem, setEditingItem] = useState<Selection>(null);
  const [svgContent, setSvgContent] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [allResources, setAllResources] = useState<Resource[]>([]);

  // Panel collapse states
  const [leftPanelCollapsed, setLeftPanelCollapsed] = useState(false);
  const [rightPanelCollapsed, setRightPanelCollapsed] = useState(false);

  // Refs
  const diagramModuleRef = useRef<any>(null);
  const moduleCacheRef = useRef<Map<string, any>>(new Map());
  const dockerComposePluginRef = useRef<any>(null);
  const kubernetesPluginRef = useRef<any>(null);
  const [isLibraryLoaded, setIsLibraryLoaded] = useState(false);

  // Load diagrams-js module via direct ESM import (BrowserOnly ensures this runs in browser)
  useEffect(() => {
    const loadLibrary = async () => {
      try {
        // Use native dynamic import for ESM modules
        const mod = await import(/* webpackIgnore: true */ cdn + "diagrams-js");
        diagramModuleRef.current = mod;
        setIsLibraryLoaded(true);

        // Also load resources list
        try {
          const resourcesMod = await import(
            /* webpackIgnore: true */ cdn + "diagrams-js/resources-list"
          );
          if (Array.isArray(resourcesMod.allResources)) {
            setAllResources(resourcesMod.allResources);
          }
        } catch (e) {
          console.warn("Failed to load resources list:", e);
        }
      } catch (e) {
        console.error("Failed to load diagrams-js:", e);
        setError("Failed to load diagrams-js library from CDN. Please check your connection.");
      }
    };

    loadLibrary();
  }, []);

  // Generate unique ID
  const nextId = useCallback(
    (prefix: string) => {
      const id = `${prefix}${idCounter}`;
      setIdCounter((c) => c + 1);
      return id;
    },
    [idCounter],
  );

  // Resolve custom icon URL
  const resolveCustomUrl = useCallback((node: Node) => {
    if (node.iconMode === "iconify") {
      const n = (node.iconName || "").trim();
      if (!n) return "";
      const [prefix, ...rest] = n.split(":");
      const name = rest.join(":").replace(/^\/+|\/+$/g, "");
      if (!prefix || !name) return "";
      return `https://api.iconify.design/${encodeURIComponent(prefix)}/${encodeURIComponent(name)}.svg`;
    }
    return (node.iconUrl || "").trim();
  }, []);

  // Load node class dynamically from ESM module (BrowserOnly ensures this runs in browser)
  const loadNodeClass = useCallback(async (provider: string, type: string, resource: string) => {
    const key = `${provider}/${type}`;
    let mod = moduleCacheRef.current.get(key);
    if (!mod) {
      // Use native dynamic import for ESM provider modules
      mod = await import(/* webpackIgnore: true */ cdn + `diagrams-js/${provider}/${type}`);
      if (mod) {
        moduleCacheRef.current.set(key, mod);
      }
    }
    const cls = mod?.[resource];
    if (!cls) throw new Error(`Resource "${resource}" not found in ${key}`);
    return cls;
  }, []);

  const addNode = useCallback(
    (nodeData: Omit<Node, "id">) => {
      const newNode: Node = { ...nodeData, id: nextId("n") };
      setState((prev) => ({ ...prev, nodes: [...prev.nodes, newNode] }));
    },
    [nextId],
  );

  const addCluster = useCallback(
    (label: string) => {
      if (!label.trim()) return;
      const newCluster: Cluster = { id: nextId("c"), label: label.trim() };
      setState((prev) => ({ ...prev, clusters: [...prev.clusters, newCluster] }));
    },
    [nextId],
  );

  const addEdge = useCallback(
    (edgeData: Omit<Edge, "id">) => {
      const newEdge: Edge = { ...edgeData, id: nextId("e") };
      setState((prev) => ({ ...prev, edges: [...prev.edges, newEdge] }));
    },
    [nextId],
  );

  const deleteNode = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      nodes: prev.nodes.filter((n) => n.id !== id),
      edges: prev.edges.filter((e) => e.from !== id && e.to !== id),
    }));
  }, []);

  const deleteCluster = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      clusters: prev.clusters.filter((c) => c.id !== id),
      nodes: prev.nodes.map((n) => (n.clusterId === id ? { ...n, clusterId: null } : n)),
    }));
  }, []);

  const deleteEdge = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      edges: prev.edges.filter((e) => e.id !== id),
    }));
  }, []);

  const updateNode = useCallback((id: string, updates: Partial<Node>) => {
    setState((prev) => ({
      ...prev,
      nodes: prev.nodes.map((n) => (n.id === id ? { ...n, ...updates } : n)),
    }));
  }, []);

  const updateCluster = useCallback((id: string, updates: Partial<Cluster>) => {
    setState((prev) => ({
      ...prev,
      clusters: prev.clusters.map((c) => (c.id === id ? { ...c, ...updates } : c)),
    }));
  }, []);

  const updateEdge = useCallback((id: string, updates: Partial<Edge>) => {
    setState((prev) => ({
      ...prev,
      edges: prev.edges.map((e) => (e.id === id ? { ...e, ...updates } : e)),
    }));
  }, []);

  const clearAll = useCallback(() => {
    if (window.confirm("Clear the diagram?")) {
      setState(defaultState);
      setIdCounter(1);
      setSelected(null);
    }
  }, []);

  const loadExample = useCallback(() => {
    setState({
      name: "Web App Architecture",
      direction: "LR",
      theme: "pastel",
      clusters: [
        { id: "c1", label: "Web Tier" },
        { id: "c2", label: "Data Tier" },
      ],
      nodes: [
        { id: "n1", label: "DNS", provider: "aws", type: "network", resource: "Route53" },
        { id: "n2", label: "LB", provider: "aws", type: "network", resource: "ALB" },
        {
          id: "n3",
          label: "Web 1",
          provider: "aws",
          type: "compute",
          resource: "EC2",
          clusterId: "c1",
        },
        {
          id: "n4",
          label: "Web 2",
          provider: "aws",
          type: "compute",
          resource: "EC2",
          clusterId: "c1",
        },
        { id: "n5", label: "API", provider: "aws", type: "compute", resource: "Lambda" },
        {
          id: "n6",
          label: "Database",
          provider: "aws",
          type: "database",
          resource: "RDS",
          clusterId: "c2",
        },
        {
          id: "n7",
          label: "Cache",
          provider: "aws",
          type: "database",
          resource: "Dynamodb",
          clusterId: "c2",
        },
        { id: "n8", label: "Assets", provider: "aws", type: "storage", resource: "S3" },
        {
          id: "n9",
          label: "K8s",
          custom: true,
          iconMode: "iconify",
          iconName: "mdi:kubernetes",
        },
      ],
      edges: [
        { id: "e1", from: "n1", to: "n2", direction: "forward" },
        { id: "e2", from: "n2", to: "n3", direction: "forward" },
        { id: "e3", from: "n2", to: "n4", direction: "forward" },
        { id: "e4", from: "n3", to: "n5", direction: "forward" },
        { id: "e5", from: "n4", to: "n5", direction: "forward" },
        { id: "e6", from: "n5", to: "n6", direction: "forward", color: "blue", label: "queries" },
        { id: "e7", from: "n5", to: "n7", direction: "forward", style: "dashed", label: "cache" },
        { id: "e8", from: "n5", to: "n8", direction: "forward" },
        {
          id: "e9",
          from: "n5",
          to: "n9",
          direction: "forward",
          style: "dotted",
          label: "orchestrates",
        },
      ],
    });
    setIdCounter(20);
    setSelected(null);
  }, []);

  // Build and render diagram
  const renderDiagram = useCallback(async () => {
    if (!diagramModuleRef.current || state.nodes.length === 0) {
      setSvgContent("");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const { Diagram, Edge, Custom } = diagramModuleRef.current;

      const diagram = Diagram(state.name || "Diagram", {
        direction: state.direction,
        theme: state.theme,
      });

      const clusterMap = new Map<string, any>();
      for (const c of state.clusters) {
        const cluster = diagram.cluster(c.label);
        cluster.clusterAttrs.data_state_id = c.id;
        cluster.clusterAttrs.id = `cluster_${c.id}`;
        clusterMap.set(c.id, cluster);
      }

      const nodeMap = new Map<string, any>();
      for (const n of state.nodes) {
        const parent =
          n.clusterId && clusterMap.has(n.clusterId) ? clusterMap.get(n.clusterId) : diagram;
        let nodeInstance;
        const nodeOptions = {
          nodeId: n.id,
          id: `node_${n.id}`,
          data_state_id: n.id,
        };

        if (n.custom) {
          const url = resolveCustomUrl(n);
          if (!url) throw new Error(`Custom node "${n.label}" has no resolvable icon URL`);
          nodeInstance = parent.add(Custom(n.label, url, nodeOptions));
        } else {
          const Cls = await loadNodeClass(n.provider!, n.type!, n.resource!);
          nodeInstance = parent.add(Cls(n.label, nodeOptions));
        }
        nodeMap.set(n.id, nodeInstance);
      }

      for (const e of state.edges) {
        const from = nodeMap.get(e.from);
        const to = nodeMap.get(e.to);
        if (!from || !to) continue;

        const opts: any = {
          id: `edge_${e.id}`,
          data_state_id: e.id,
        };
        if (e.label) opts.label = e.label;
        if (e.color) opts.color = e.color;
        if (e.style) opts.style = e.style;

        if (e.direction === "reverse") {
          from.from(Edge(opts), to);
        } else if (e.direction === "both") {
          from.to(Edge({ ...opts, forward: true, reverse: true }), to);
        } else if (e.direction === "none") {
          from.with(Edge(opts), to);
        } else {
          from.to(Edge(opts), to);
        }
      }

      const svg = await diagram.render();
      setSvgContent(svg);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to render diagram");
    } finally {
      setIsLoading(false);
    }
  }, [state, loadNodeClass, resolveCustomUrl]);

  // Render on state change (debounced) - only when library is loaded
  useEffect(() => {
    if (!isLibraryLoaded || !diagramModuleRef.current) return;

    const timer = setTimeout(() => {
      renderDiagram();
    }, 150);
    return () => clearTimeout(timer);
  }, [renderDiagram, isLibraryLoaded]);

  // Trigger render when library is first loaded (in case state was already set)
  useEffect(() => {
    if (isLibraryLoaded && diagramModuleRef.current && state.nodes.length > 0 && !svgContent) {
      renderDiagram();
    }
  }, [isLibraryLoaded, state.nodes.length, svgContent, renderDiagram]);

  // Export SVG
  const exportSvg = useCallback(async () => {
    if (!svgContent) return;
    const blob = new Blob([svgContent], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${state.name.replace(/\s+/g, "_")}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  }, [svgContent, state.name]);

  // Export JSON
  const exportJson = useCallback(() => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${state.name.replace(/\s+/g, "_")}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [state]);

  // Load plugins from CDN
  const loadDockerComposePlugin = useCallback(async () => {
    if (dockerComposePluginRef.current) return dockerComposePluginRef.current;
    try {
      const mod = await import(
        /* webpackIgnore: true */ cdn + "@diagrams-js/plugin-docker-compose"
      );
      dockerComposePluginRef.current = mod.dockerComposePlugin || mod.default;
      return dockerComposePluginRef.current;
    } catch (e) {
      console.error("Failed to load Docker Compose plugin:", e);
      throw new Error("Failed to load Docker Compose plugin from CDN");
    }
  }, []);

  const loadKubernetesPlugin = useCallback(async () => {
    if (kubernetesPluginRef.current) return kubernetesPluginRef.current;
    try {
      const mod = await import(/* webpackIgnore: true */ cdn + "@diagrams-js/plugin-kubernetes");
      kubernetesPluginRef.current = mod.kubernetesPlugin || mod.default;
      return kubernetesPluginRef.current;
    } catch (e) {
      console.error("Failed to load Kubernetes plugin:", e);
      throw new Error("Failed to load Kubernetes plugin from CDN");
    }
  }, []);

  // Import from Docker Compose YAML
  const importDockerCompose = useCallback(
    async (content: string) => {
      if (!diagramModuleRef.current) {
        throw new Error("Diagram library not loaded");
      }

      // 1. Clear current diagram immediately
      setState({
        name: "Docker Compose Import",
        direction: state.direction,
        theme: state.theme,
        clusters: [],
        nodes: [],
        edges: [],
      });
      setIdCounter(1);
      setSelected(null);
      setError("");
      setIsLoading(true);

      try {
        const { Diagram } = diagramModuleRef.current;

        // 2. Load plugin if not already loaded
        const plugin = await loadDockerComposePlugin();

        // 3. Create diagram and import
        const diagram = Diagram("Docker Compose Import", {
          direction: state.direction,
          theme: state.theme,
        });

        await diagram.registerPlugins([plugin]);
        await diagram.import(content, "docker-compose");

        // 4. Extract data from diagram using toJSON()
        const diagramJson = diagram.toJSON();

        // Convert to VisualEditor state format
        const importedState: DiagramState = {
          name: diagramJson.name || "Docker Compose Import",
          direction: state.direction,
          theme: state.theme,
          clusters: [],
          nodes: [],
          edges: [],
        };

        // Convert clusters
        if (diagramJson.clusters) {
          for (const cluster of diagramJson.clusters) {
            const clusterId = nextId("c");
            importedState.clusters.push({
              id: clusterId,
              label: cluster.label || "Cluster",
            });

            // Assign cluster to nodes that belong to it
            if (cluster.nodes) {
              for (const nodeId of cluster.nodes) {
                const node = diagramJson.nodes.find((n: any) => n.id === nodeId);
                if (node) {
                  node._clusterId = clusterId;
                }
              }
            }
          }
        }

        // Convert nodes
        let nodeIdCounter = 1;
        const nodeIdMap = new Map<string, string>(); // Map old ID to new ID

        for (const node of diagramJson.nodes) {
          const newId = `n${nodeIdCounter++}`;
          nodeIdMap.set(node.id, newId);

          const nodeData: Node = {
            id: newId,
            label: node.label || "Node",
            clusterId: node._clusterId || null,
          };

          // Check if node has custom icon URL
          if (node.iconUrl) {
            nodeData.custom = true;
            nodeData.iconMode = "url";
            nodeData.iconUrl = node.iconUrl;
          } else if (node.provider && node.service && node.type) {
            // Provider-based icon (service nodes from Docker Compose)
            nodeData.provider = node.provider;
            nodeData.type = node.service;
            nodeData.resource = node.type;
          } else if (node.provider && node.type) {
            // Alternative format
            nodeData.provider = node.provider;
            nodeData.type = node.type;
            nodeData.resource = node.type;
          } else {
            // Network/volume nodes or nodes without provider info - use generic container icon
            nodeData.custom = true;
            nodeData.iconMode = "iconify";
            nodeData.iconName = "mdi:docker";
          }

          importedState.nodes.push(nodeData);
        }

        // Convert edges
        let edgeIdCounter = 1;
        if (diagramJson.edges) {
          for (const edge of diagramJson.edges) {
            const fromId = nodeIdMap.get(edge.from);
            const toId = nodeIdMap.get(edge.to);

            if (fromId && toId) {
              importedState.edges.push({
                id: `e${edgeIdCounter++}`,
                from: fromId,
                to: toId,
                direction: edge.direction || "forward",
                style: edge.style || "",
                color: edge.color || "",
                label: edge.label || "",
              });
            }
          }
        }

        // 5. Update state
        setState(importedState);
        setIdCounter(Math.max(nodeIdCounter, edgeIdCounter, importedState.clusters.length + 1));
        setSelected(null);
      } catch (err: any) {
        console.error("Import failed:", err);
        setError("Failed to import Docker Compose: " + (err.message || "Unknown error"));
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [loadDockerComposePlugin, nextId, state.direction, state.theme],
  );

  // Import from Kubernetes YAML
  const importKubernetes = useCallback(
    async (content: string) => {
      if (!diagramModuleRef.current) {
        throw new Error("Diagram library not loaded");
      }

      // 1. Clear current diagram immediately
      setState({
        name: "Kubernetes Import",
        direction: state.direction,
        theme: state.theme,
        clusters: [],
        nodes: [],
        edges: [],
      });
      setIdCounter(1);
      setSelected(null);
      setError("");
      setIsLoading(true);

      try {
        const { Diagram } = diagramModuleRef.current;

        // 2. Load plugin if not already loaded
        const plugin = await loadKubernetesPlugin();

        // 3. Create diagram and import
        const diagram = Diagram("Kubernetes Import", {
          direction: state.direction,
          theme: state.theme,
        });

        await diagram.registerPlugins([plugin]);
        await diagram.import(content, "kubernetes");

        // 4. Extract data from diagram using toJSON()
        const diagramJson = diagram.toJSON();

        // Convert to VisualEditor state format
        const importedState: DiagramState = {
          name: diagramJson.name || "Kubernetes Import",
          direction: state.direction,
          theme: state.theme,
          clusters: [],
          nodes: [],
          edges: [],
        };

        // Convert clusters
        if (diagramJson.clusters) {
          for (const cluster of diagramJson.clusters) {
            const clusterId = nextId("c");
            importedState.clusters.push({
              id: clusterId,
              label: cluster.label || "Cluster",
            });

            // Assign cluster to nodes that belong to it
            if (cluster.nodes) {
              for (const nodeId of cluster.nodes) {
                const node = diagramJson.nodes.find((n: any) => n.id === nodeId);
                if (node) {
                  node._clusterId = clusterId;
                }
              }
            }
          }
        }

        // Convert nodes
        let nodeIdCounter = 1;
        const nodeIdMap = new Map<string, string>(); // Map old ID to new ID

        for (const node of diagramJson.nodes) {
          const newId = `n${nodeIdCounter++}`;
          nodeIdMap.set(node.id, newId);

          const nodeData: Node = {
            id: newId,
            label: node.label || "Node",
            clusterId: node._clusterId || null,
          };

          // Check if node has custom icon URL
          if (node.iconUrl) {
            nodeData.custom = true;
            nodeData.iconMode = "url";
            nodeData.iconUrl = node.iconUrl;
          } else if (node.provider && node.service && node.type) {
            // Provider-based icon (Kubernetes nodes)
            nodeData.provider = node.provider;
            nodeData.type = node.service;
            nodeData.resource = node.type;
          } else if (node.provider && node.type) {
            // Alternative format
            nodeData.provider = node.provider;
            nodeData.type = node.type;
            nodeData.resource = node.type;
          } else {
            // Nodes without provider info - use generic Kubernetes icon
            nodeData.custom = true;
            nodeData.iconMode = "iconify";
            nodeData.iconName = "logos:kubernetes";
          }

          importedState.nodes.push(nodeData);
        }

        // Convert edges
        let edgeIdCounter = 1;
        if (diagramJson.edges) {
          for (const edge of diagramJson.edges) {
            const fromId = nodeIdMap.get(edge.from);
            const toId = nodeIdMap.get(edge.to);

            if (fromId && toId) {
              importedState.edges.push({
                id: `e${edgeIdCounter++}`,
                from: fromId,
                to: toId,
                direction: edge.direction || "forward",
                style: edge.style || "",
                color: edge.color || "",
                label: edge.label || "",
              });
            }
          }
        }

        // 5. Update state
        setState(importedState);
        setIdCounter(Math.max(nodeIdCounter, edgeIdCounter, importedState.clusters.length + 1));
        setSelected(null);
      } catch (err: any) {
        console.error("Import failed:", err);
        setError("Failed to import Kubernetes: " + (err.message || "Unknown error"));
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [loadKubernetesPlugin, nextId, state.direction, state.theme],
  );

  // Import JSON
  const importJson = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        if (typeof data !== "object" || data === null) throw new Error("Not a JSON object");

        const nodes = (Array.isArray(data.nodes) ? data.nodes : []).map((n: any) => {
          if (n.custom) {
            return {
              id: n.id,
              label: n.label,
              custom: true,
              iconMode: n.iconMode === "iconify" ? "iconify" : "url",
              iconUrl: n.iconUrl || "",
              iconName: n.iconName || "",
              clusterId: n.clusterId || null,
            };
          }
          return {
            id: n.id,
            label: n.label,
            provider: n.provider,
            type: n.type || n.service,
            resource: n.resource || n.type,
            clusterId: n.clusterId || null,
          };
        });

        const clusters = Array.isArray(data.clusters)
          ? data.clusters.map((c: any) => ({ id: c.id, label: c.label }))
          : [];

        const edges = Array.isArray(data.edges)
          ? data.edges.map((e: any) => ({
              id: e.id,
              from: e.from,
              to: e.to,
              direction: e.direction || "forward",
              style: e.style || "",
              color: e.color || "",
              label: e.label || "",
            }))
          : [];

        setState({
          name: data.name || "Imported Diagram",
          direction: ["LR", "RL", "TB", "BT"].includes(data.direction) ? data.direction : "LR",
          theme: data.theme || "pastel",
          clusters,
          nodes,
          edges,
        });

        // Calculate next ID counter
        const allIds = [
          ...clusters.map((c: any) => c.id),
          ...nodes.map((n: any) => n.id),
          ...edges.map((e: any) => e.id),
        ];
        const maxNum = allIds.reduce((m: number, id: string) => {
          const num = parseInt(String(id).replace(/\D/g, ""), 10);
          return isNaN(num) ? m : Math.max(m, num);
        }, 0);
        setIdCounter(maxNum + 1);
        setSelected(null);
      } catch (err: any) {
        alert("Failed to import JSON: " + err.message);
      }
    };
    reader.readAsText(file);
  }, []);

  // Share functionality - export JSON, compress, add to URL hash, copy to clipboard
  const [shareCopied, setShareCopied] = useState(false);
  const handleShare = useCallback(async () => {
    if (!isBrowser) return;

    try {
      const json = JSON.stringify(state);
      const compressed = compressToEncodedURIComponent(json);
      const url = `${window.location.origin}${window.location.pathname}#${compressed}`;

      await navigator.clipboard.writeText(url);
      window.location.hash = compressed;

      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2000);
    } catch (e) {
      console.error("Failed to share:", e);
      alert("Failed to copy URL to clipboard");
    }
  }, [state, isBrowser]);

  // Load from URL hash on mount (browser only)
  useEffect(() => {
    if (!isBrowser) return;

    const hash = window.location.hash;
    if (hash) {
      try {
        const compressed = hash.substring(1); // Remove '#'
        const decompressed = decompressFromEncodedURIComponent(compressed);
        if (decompressed) {
          const data = JSON.parse(decompressed);
          if (typeof data !== "object" || data === null) throw new Error("Not a JSON object");

          const nodes = (Array.isArray(data.nodes) ? data.nodes : []).map((n: any) => {
            if (n.custom) {
              return {
                id: n.id,
                label: n.label,
                custom: true,
                iconMode: n.iconMode === "iconify" ? "iconify" : "url",
                iconUrl: n.iconUrl || "",
                iconName: n.iconName || "",
                clusterId: n.clusterId || null,
              };
            }
            return {
              id: n.id,
              label: n.label,
              provider: n.provider,
              type: n.type || n.service,
              resource: n.resource || n.type,
              clusterId: n.clusterId || null,
            };
          });

          const clusters = Array.isArray(data.clusters)
            ? data.clusters.map((c: any) => ({ id: c.id, label: c.label }))
            : [];

          const edges = Array.isArray(data.edges)
            ? data.edges.map((e: any) => ({
                id: e.id,
                from: e.from,
                to: e.to,
                direction: e.direction || "forward",
                style: e.style || "",
                color: e.color || "",
                label: e.label || "",
              }))
            : [];

          setState({
            name: data.name || "Shared Diagram",
            direction: ["LR", "RL", "TB", "BT"].includes(data.direction) ? data.direction : "LR",
            theme: data.theme || "pastel",
            clusters,
            nodes,
            edges,
          });

          // Calculate next ID counter
          const allIds = [
            ...clusters.map((c: any) => c.id),
            ...nodes.map((n: any) => n.id),
            ...edges.map((e: any) => e.id),
          ];
          const maxNum = allIds.reduce((m: number, id: string) => {
            const num = parseInt(String(id).replace(/\D/g, ""), 10);
            return isNaN(num) ? m : Math.max(m, num);
          }, 0);
          setIdCounter(maxNum + 1);
          setSelected(null);
        }
      } catch (e) {
        console.error("Failed to load from URL hash:", e);
      }
    }
  }, [isBrowser]);

  return (
    <div className={styles.visualEditorContainer} data-theme={colorMode}>
      {/* Toolbar */}
      <Toolbar
        state={state}
        onStateChange={setState}
        onClear={clearAll}
        onLoadExample={loadExample}
        onExportSvg={exportSvg}
        onExportJson={exportJson}
        onImportJson={importJson}
        onImportDockerCompose={importDockerCompose}
        onImportKubernetes={importKubernetes}
        onShare={handleShare}
        shareCopied={shareCopied}
      />

      <div className={styles.editorLayout}>
        {/* Left Panel - Build */}
        <div className={`${styles.leftPanel} ${leftPanelCollapsed ? styles.panelCollapsed : ""}`}>
          <div className={styles.panelHeader}>
            {leftPanelCollapsed ? (
              <button
                className={styles.expandBtn}
                onClick={() => setLeftPanelCollapsed(false)}
                title="Expand Build panel"
              >
                <span className={styles.arrowVertical}>▼</span>
                <span className={styles.expandLabel}>Build</span>
              </button>
            ) : (
              <>
                <span className={styles.panelTitleStatic}>Build</span>
                <button
                  className={styles.collapseBtn}
                  onClick={() => setLeftPanelCollapsed(true)}
                  title="Collapse Build panel"
                >
                  <span className={styles.arrowHorizontal}>◀</span>
                </button>
              </>
            )}
          </div>
          <div className={styles.panelHeaderDivider} />
          {!leftPanelCollapsed && (
            <BuildPanel
              state={state}
              allResources={allResources}
              onAddNode={addNode}
              onAddCluster={addCluster}
              onAddEdge={addEdge}
            />
          )}
        </div>

        {/* Center - Canvas */}
        <div className={styles.canvasPanel}>
          <Canvas
            svgContent={svgContent}
            error={error}
            isLoading={isLoading}
            isLibraryLoaded={isLibraryLoaded}
            selected={selected}
            onSelect={setSelected}
            onOpenNode={(id) => setEditingItem({ type: "node", id })}
            onOpenCluster={(id) => setEditingItem({ type: "cluster", id })}
            onOpenEdge={(id) => setEditingItem({ type: "edge", id })}
          />
        </div>

        {/* Right Panel - List */}
        <div className={`${styles.rightPanel} ${rightPanelCollapsed ? styles.panelCollapsed : ""}`}>
          <div className={`${styles.panelHeader} ${styles.panelHeaderRight}`}>
            {rightPanelCollapsed ? (
              <button
                className={styles.expandBtn}
                onClick={() => setRightPanelCollapsed(false)}
                title="Expand Items panel"
              >
                <span className={styles.arrowVertical}>▼</span>
                <span className={styles.expandLabel}>Items</span>
              </button>
            ) : (
              <>
                <button
                  className={styles.collapseBtn}
                  onClick={() => setRightPanelCollapsed(true)}
                  title="Collapse Items panel"
                >
                  <span className={styles.arrowHorizontal}>▶</span>
                </button>
                <span className={styles.panelTitleStatic}>Items</span>
              </>
            )}
          </div>
          <div className={styles.panelHeaderDivider} />
          {!rightPanelCollapsed && (
            <ItemsList
              state={state}
              selected={selected}
              onSelect={setSelected}
              onDeleteNode={deleteNode}
              onDeleteCluster={deleteCluster}
              onDeleteEdge={deleteEdge}
              onUpdateNode={updateNode}
              onUpdateCluster={updateCluster}
              onUpdateEdge={updateEdge}
              onOpenNode={(id) => setEditingItem({ type: "node", id })}
              onOpenCluster={(id) => setEditingItem({ type: "cluster", id })}
              onOpenEdge={(id) => setEditingItem({ type: "edge", id })}
            />
          )}
        </div>

        {/* Edit Modal */}
        {editingItem && (
          <EditModal
            item={editingItem}
            state={state}
            allResources={allResources}
            onUpdateNode={updateNode}
            onUpdateCluster={updateCluster}
            onUpdateEdge={updateEdge}
            onDeleteNode={deleteNode}
            onDeleteCluster={deleteCluster}
            onDeleteEdge={deleteEdge}
            onClose={() => setEditingItem(null)}
          />
        )}
      </div>
    </div>
  );
}

// Sub-components
function BuildPanel({
  state,
  allResources,
  onAddNode,
  onAddCluster,
  onAddEdge,
}: {
  state: DiagramState;
  allResources: Resource[];
  onAddNode: (node: Omit<Node, "id">) => void;
  onAddCluster: (label: string) => void;
  onAddEdge: (edge: Omit<Edge, "id">) => void;
}) {
  const [nodeLabel, setNodeLabel] = useState("");
  const [useCustom, setUseCustom] = useState(false);
  const [iconMode, setIconMode] = useState<"url" | "iconify">("url");
  const [iconUrl, setIconUrl] = useState("");
  const [iconName, setIconName] = useState("");
  const [clusterId, setClusterId] = useState("");
  const [clusterLabel, setClusterLabel] = useState("");
  const [selectedProvider, setSelectedProvider] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedResource, setSelectedResource] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Resource[]>([]);

  // Set default selection to aws/compute/EC2 when resources are loaded
  useEffect(() => {
    if (allResources.length > 0 && !selectedProvider) {
      const awsResources = allResources.filter((r) => r.provider === "aws" && r.type === "compute");
      if (awsResources.length > 0) {
        setSelectedProvider("aws");
        setSelectedType("compute");
        // Find EC2 specifically, otherwise use first resource
        const ec2Resource = awsResources.find((r) => r.resource === "EC2");
        setSelectedResource(ec2Resource ? "EC2" : awsResources[0].resource);
      }
    }
  }, [allResources]);

  // Validation states
  const [nodeLabelError, setNodeLabelError] = useState(false);
  const [clusterLabelError, setClusterLabelError] = useState(false);
  const [iconUrlError, setIconUrlError] = useState(false);
  const [iconNameError, setIconNameError] = useState(false);

  // Edge form state
  const [fromIds, setFromIds] = useState<string[]>([]);
  const [toIds, setToIds] = useState<string[]>([]);
  const [edgeDirection, setEdgeDirection] = useState<Edge["direction"]>("forward");
  const [edgeStyle, setEdgeStyle] = useState("");
  const [edgeColor, setEdgeColor] = useState("");
  const [edgeLabel, setEdgeLabel] = useState("");

  // Accordion state - only one section open at a time (null = all closed), node section open by default
  const [openBuildSection, setOpenBuildSection] = useState<"node" | "cluster" | "edge" | null>(
    "node",
  );

  // Get unique providers
  const providers = Array.from(new Set(allResources.map((r) => r.provider))).sort();

  // Get types for selected provider
  const types = selectedProvider
    ? Array.from(
        new Set(allResources.filter((r) => r.provider === selectedProvider).map((r) => r.type)),
      ).sort()
    : [];

  // Get resources for selected provider/type
  const resources =
    selectedProvider && selectedType
      ? allResources
          .filter((r) => r.provider === selectedProvider && r.type === selectedType)
          .map((r) => r.resource)
          .sort()
      : [];

  // Search resources
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const q = searchQuery.toLowerCase();
    const results = allResources.filter(
      (r) =>
        r.provider.toLowerCase().includes(q) ||
        r.type.toLowerCase().includes(q) ||
        r.resource.toLowerCase().includes(q),
    );
    setSearchResults(results.slice(0, 60));
  }, [searchQuery, allResources]);

  const handleAddNode = () => {
    let hasError = false;

    // Validate label
    if (!nodeLabel.trim()) {
      setNodeLabelError(true);
      hasError = true;
    } else {
      setNodeLabelError(false);
    }

    // Validate custom icon fields
    if (useCustom) {
      if (iconMode === "url") {
        if (!iconUrl.trim()) {
          setIconUrlError(true);
          hasError = true;
        } else {
          setIconUrlError(false);
        }
      } else if (iconMode === "iconify") {
        if (!iconName.includes(":")) {
          setIconNameError(true);
          hasError = true;
        } else {
          setIconNameError(false);
        }
      }
    } else {
      // Validate resource selection
      if (!selectedProvider || !selectedType || !selectedResource) {
        alert("Please select a Provider, Type, and Resource.");
        hasError = true;
      }
    }

    if (hasError) return;

    // Clear validation and add node
    setNodeLabelError(false);
    setIconUrlError(false);
    setIconNameError(false);

    if (useCustom) {
      onAddNode({
        label: nodeLabel.trim(),
        custom: true,
        iconMode,
        iconUrl: iconMode === "url" ? iconUrl : "",
        iconName: iconMode === "iconify" ? iconName : "",
        clusterId: clusterId || null,
      });
      setIconUrl("");
      setIconName("");
    } else {
      onAddNode({
        label: nodeLabel.trim(),
        provider: selectedProvider,
        type: selectedType,
        resource: selectedResource,
        clusterId: clusterId || null,
      });
    }
    setNodeLabel("");
  };

  const handleAddEdge = () => {
    if (fromIds.length === 0 || toIds.length === 0) {
      alert("Select at least one source and one target node.");
      return;
    }

    let count = 0;
    for (const f of fromIds) {
      for (const t of toIds) {
        if (f === t) continue;
        onAddEdge({
          from: f,
          to: t,
          direction: edgeDirection,
          style: edgeStyle,
          color: edgeColor,
          label: edgeLabel,
        });
        count++;
      }
    }

    if (count === 0) {
      alert("No valid pairs (self-connections are skipped).");
      return;
    }

    setFromIds([]);
    setToIds([]);
    setEdgeColor("");
    setEdgeLabel("");
  };

  return (
    <div className={styles.panel}>
      {/* Add Node Section - Open by default */}
      <h3
        className={styles.panelTitle}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={() => setOpenBuildSection(openBuildSection === "node" ? null : "node")}
      >
        <span>Add Node</span>
        <span
          style={{
            fontSize: "0.75rem",
            color: "var(--ve-text-secondary)",
            transform: openBuildSection === "node" ? "rotate(0deg)" : "rotate(-90deg)",
            transition: "transform 0.2s ease",
            display: "inline-block",
          }}
        >
          ▼
        </span>
      </h3>

      {openBuildSection === "node" && (
        <>
          <label className={styles.toggleRow}>
            <input
              type="checkbox"
              checked={useCustom}
              onChange={(e) => setUseCustom(e.target.checked)}
            />
            <span>Use custom icon (URL or Iconify)</span>
          </label>

          {!useCustom ? (
            <>
              <div className={styles.row3}>
                <div className={styles.field}>
                  <label>Provider</label>
                  <select
                    value={selectedProvider}
                    onChange={(e) => {
                      setSelectedProvider(e.target.value);
                      setSelectedType("");
                      setSelectedResource("");
                    }}
                  >
                    <option value="">—</option>
                    {providers.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.field}>
                  <label>Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => {
                      setSelectedType(e.target.value);
                      setSelectedResource("");
                    }}
                    disabled={!selectedProvider}
                  >
                    <option value="">—</option>
                    {types.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.field}>
                  <label>Resource</label>
                  <select
                    value={selectedResource}
                    onChange={(e) => setSelectedResource(e.target.value)}
                    disabled={!selectedType}
                  >
                    <option value="">—</option>
                    {resources.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label>Or search</label>
                <input
                  type="text"
                  placeholder="e.g. ec2, redis, lambda..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchResults.length > 0 && (
                  <div className={styles.resourceList}>
                    {searchResults.map((r) => (
                      <div
                        key={`${r.provider}-${r.type}-${r.resource}`}
                        className={styles.resourceItem}
                        onClick={() => {
                          setSelectedProvider(r.provider);
                          setSelectedType(r.type);
                          setSelectedResource(r.resource);
                          setSearchQuery("");
                          setSearchResults([]);
                        }}
                      >
                        <div className={styles.resourceName}>{r.resource}</div>
                        <div className={styles.resourceMeta}>
                          {r.provider} · {r.type}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <div className={styles.radioRow}>
                <label>
                  <input
                    type="radio"
                    value="url"
                    checked={iconMode === "url"}
                    onChange={() => setIconMode("url")}
                  />
                  URL
                </label>
                <label>
                  <input
                    type="radio"
                    value="iconify"
                    checked={iconMode === "iconify"}
                    onChange={() => setIconMode("iconify")}
                  />
                  Iconify
                </label>
              </div>
              {iconMode === "url" ? (
                <div className={`${styles.field} ${iconUrlError ? styles.fieldError : ""}`}>
                  <label>
                    Image URL
                    {iconUrlError && <span className={styles.requiredError}> (required)</span>}
                  </label>
                  <input
                    type="text"
                    placeholder="https://example.com/icon.svg"
                    value={iconUrl}
                    onChange={(e) => {
                      setIconUrl(e.target.value);
                      if (e.target.value.trim()) setIconUrlError(false);
                    }}
                    className={iconUrlError ? styles.inputError : ""}
                  />
                </div>
              ) : (
                <div className={`${styles.field} ${iconNameError ? styles.fieldError : ""}`}>
                  <label>
                    Iconify name (e.g. mdi:kubernetes)
                    {iconNameError && <span className={styles.requiredError}> (required)</span>}
                  </label>
                  <input
                    type="text"
                    placeholder="prefix:name"
                    value={iconName}
                    onChange={(e) => {
                      setIconName(e.target.value);
                      if (e.target.value.includes(":")) setIconNameError(false);
                    }}
                    className={iconNameError ? styles.inputError : ""}
                  />
                </div>
              )}
            </>
          )}

          <div className={`${styles.field} ${nodeLabelError ? styles.fieldError : ""}`}>
            <label>
              Label
              {nodeLabelError && <span className={styles.requiredError}> (required)</span>}
            </label>
            <input
              type="text"
              placeholder="e.g. Web Server"
              value={nodeLabel}
              onChange={(e) => {
                setNodeLabel(e.target.value);
                if (e.target.value.trim()) setNodeLabelError(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddNode();
                }
              }}
              className={nodeLabelError ? styles.inputError : ""}
            />
          </div>

          <div className={styles.field}>
            <label>Cluster (optional)</label>
            <select value={clusterId} onChange={(e) => setClusterId(e.target.value)}>
              <option value="">— None —</option>
              {state.clusters.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          <button className={styles.btnAdd} onClick={handleAddNode}>
            Add Node
          </button>
        </>
      )}

      {/* Add Cluster Section */}
      <h3
        className={styles.panelTitle}
        style={{
          marginTop: "1.5rem",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={() => setOpenBuildSection(openBuildSection === "cluster" ? null : "cluster")}
      >
        <span>Add Cluster</span>
        <span style={{ fontSize: "0.75rem", color: "var(--ve-text-secondary)" }}>
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--ve-text-secondary)",
              transform: openBuildSection === "cluster" ? "rotate(0deg)" : "rotate(-90deg)",
              transition: "transform 0.2s ease",
              display: "inline-block",
            }}
          >
            ▼
          </span>
        </span>
      </h3>
      {openBuildSection === "cluster" && (
        <>
          <div className={`${styles.field} ${clusterLabelError ? styles.fieldError : ""}`}>
            <label>
              Label
              {clusterLabelError && <span className={styles.requiredError}> (required)</span>}
            </label>
            <input
              type="text"
              placeholder="e.g. VPC"
              value={clusterLabel}
              onChange={(e) => {
                setClusterLabel(e.target.value);
                if (e.target.value.trim()) setClusterLabelError(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  if (!clusterLabel.trim()) {
                    setClusterLabelError(true);
                    return;
                  }
                  setClusterLabelError(false);
                  onAddCluster(clusterLabel);
                  setClusterLabel("");
                }
              }}
              className={clusterLabelError ? styles.inputError : ""}
            />
          </div>
          <button
            className={styles.btnAdd}
            onClick={() => {
              if (!clusterLabel.trim()) {
                setClusterLabelError(true);
                return;
              }
              setClusterLabelError(false);
              onAddCluster(clusterLabel);
              setClusterLabel("");
            }}
          >
            Add Cluster
          </button>
        </>
      )}

      {/* Add Connection Section */}
      <h3
        className={styles.panelTitle}
        style={{
          marginTop: "1.5rem",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={() => setOpenBuildSection(openBuildSection === "edge" ? null : "edge")}
      >
        <span>Add Connection(s)</span>
        <span style={{ fontSize: "0.75rem", color: "var(--ve-text-secondary)" }}>
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--ve-text-secondary)",
              transform: openBuildSection === "edge" ? "rotate(0deg)" : "rotate(-90deg)",
              transition: "transform 0.2s ease",
              display: "inline-block",
            }}
          >
            ▼
          </span>
        </span>
      </h3>
      {openBuildSection === "edge" && (
        <>
          <div className={styles.field}>
            <label>From (select one or more)</label>
            <div className={styles.multiSelect}>
              {state.nodes.length === 0 ? (
                <div className={styles.multiSelectEmpty}>No nodes available</div>
              ) : (
                state.nodes.map((n) => {
                  const cl = n.clusterId ? state.clusters.find((c) => c.id === n.clusterId) : null;
                  const meta =
                    (cl ? "📦 " + cl.label + " · " : "") + (n.custom ? "custom" : n.resource);
                  return (
                    <label key={n.id} className={styles.multiOpt}>
                      <input
                        type="checkbox"
                        checked={fromIds.includes(n.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFromIds([...fromIds, n.id]);
                          } else {
                            setFromIds(fromIds.filter((id) => id !== n.id));
                          }
                        }}
                      />
                      <span className={styles.moLabel}>{n.label}</span>
                      <span className={styles.moType}>{meta}</span>
                    </label>
                  );
                })
              )}
            </div>
            <div className={styles.multiActions}>
              <button onClick={() => setFromIds(state.nodes.map((n) => n.id))}>All</button>
              <button onClick={() => setFromIds([])}>None</button>
            </div>
          </div>

          <div className={styles.field}>
            <label>To (select one or more)</label>
            <div className={styles.multiSelect}>
              {state.nodes.length === 0 ? (
                <div className={styles.multiSelectEmpty}>No nodes available</div>
              ) : (
                state.nodes.map((n) => {
                  const cl = n.clusterId ? state.clusters.find((c) => c.id === n.clusterId) : null;
                  const meta =
                    (cl ? "📦 " + cl.label + " · " : "") + (n.custom ? "custom" : n.resource);
                  return (
                    <label key={n.id} className={styles.multiOpt}>
                      <input
                        type="checkbox"
                        checked={toIds.includes(n.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setToIds([...toIds, n.id]);
                          } else {
                            setToIds(toIds.filter((id) => id !== n.id));
                          }
                        }}
                      />
                      <span className={styles.moLabel}>{n.label}</span>
                      <span className={styles.moType}>{meta}</span>
                    </label>
                  );
                })
              )}
            </div>
            <div className={styles.multiActions}>
              <button onClick={() => setToIds(state.nodes.map((n) => n.id))}>All</button>
              <button onClick={() => setToIds([])}>None</button>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Direction</label>
              <select
                value={edgeDirection}
                onChange={(e) => setEdgeDirection(e.target.value as Edge["direction"])}
              >
                <option value="forward">→</option>
                <option value="reverse">←</option>
                <option value="both">↔</option>
                <option value="none">—</option>
              </select>
            </div>
            <div className={styles.field}>
              <label>Style</label>
              <select value={edgeStyle} onChange={(e) => setEdgeStyle(e.target.value)}>
                <option value="">solid</option>
                <option value="dashed">dashed</option>
                <option value="dotted">dotted</option>
                <option value="bold">bold</option>
              </select>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Color</label>
              <input
                type="text"
                placeholder="e.g. red"
                value={edgeColor}
                onChange={(e) => setEdgeColor(e.target.value)}
              />
            </div>
            <div className={styles.field}>
              <label>Label</label>
              <input
                type="text"
                placeholder="optional"
                value={edgeLabel}
                onChange={(e) => setEdgeLabel(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleAddEdge();
                  }
                }}
              />
            </div>
          </div>

          <button className={styles.btnAdd} onClick={handleAddEdge}>
            Add Connection(s)
          </button>
        </>
      )}
    </div>
  );
}

function Canvas({
  svgContent,
  error,
  isLoading,
  isLibraryLoaded,
  selected,
  onSelect,
  onOpenNode,
  onOpenCluster,
  onOpenEdge,
}: {
  svgContent: string;
  error: string;
  isLoading: boolean;
  isLibraryLoaded: boolean;
  selected: Selection;
  onSelect: (sel: Selection) => void;
  onOpenNode: (id: string) => void;
  onOpenCluster: (id: string) => void;
  onOpenEdge: (id: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const callbacksRef = useRef({ onSelect, onOpenNode, onOpenCluster, onOpenEdge });
  const elementsRef = useRef<Map<string, Element>>(new Map());
  const wiredRef = useRef(false);

  // Keep callbacks ref up to date
  useEffect(() => {
    callbacksRef.current = { onSelect, onOpenNode, onOpenCluster, onOpenEdge };
  }, [onSelect, onOpenNode, onOpenCluster, onOpenEdge]);

  // Wire up click interactions using event delegation
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Re-find elements and update refs when SVG content changes
    const updateElements = () => {
      elementsRef.current.clear();
      const svg = container.querySelector("svg");
      if (!svg) return;

      const getStateId = (el: Element) => {
        const idAttr = el.getAttribute("id");
        if (idAttr) {
          const match = idAttr.match(/^(node|cluster|edge)_(.+)$/);
          if (match) return match[2];
        }
        return null;
      };

      svg.querySelectorAll("g.node").forEach((el) => {
        const id = getStateId(el);
        if (id) elementsRef.current.set(`node:${id}`, el);
      });

      svg.querySelectorAll("g.cluster").forEach((el) => {
        const id = getStateId(el);
        if (id) elementsRef.current.set(`cluster:${id}`, el);
      });

      svg.querySelectorAll("g.edge").forEach((el) => {
        const id = getStateId(el);
        if (id) elementsRef.current.set(`edge:${id}`, el);
      });
    };

    // Initial update
    updateElements();

    // Single delegated click handler on container
    const handleClick = (e: Event) => {
      const target = e.target as Element;
      const gElement = target.closest("g.node, g.cluster, g.edge") as Element | null;

      if (!gElement) {
        // Clicked on empty space
        if (target.tagName === "svg" || target.closest("svg")) {
          callbacksRef.current.onSelect(null);
        }
        return;
      }

      const idAttr = gElement.getAttribute("id");
      if (!idAttr) return;

      const match = idAttr.match(/^(node|cluster|edge)_(.+)$/);
      if (!match) return;

      const type = match[1] as "node" | "cluster" | "edge";
      const id = match[2];

      e.stopPropagation();
      e.preventDefault();

      callbacksRef.current.onSelect({ type, id });
      if (type === "node") callbacksRef.current.onOpenNode(id);
      else if (type === "cluster") callbacksRef.current.onOpenCluster(id);
      else if (type === "edge") callbacksRef.current.onOpenEdge(id);
    };

    container.addEventListener("click", handleClick);

    return () => {
      container.removeEventListener("click", handleClick);
    };
  }, [svgContent]); // Re-run when SVG content changes

  // Apply highlight when selection changes
  useEffect(() => {
    if (!containerRef.current) return;

    // Delay to ensure any SVG re-rendering is complete
    const timer = setTimeout(() => {
      const svg = containerRef.current?.querySelector("svg");
      if (!svg) return;

      // Clear all previous highlights
      svg.querySelectorAll("g.node, g.cluster, g.edge").forEach((el) => {
        (el as HTMLElement).style.filter = "";
      });

      // Apply highlight to selected element by ID
      if (selected) {
        const selector =
          selected.type === "node"
            ? "g.node"
            : selected.type === "cluster"
              ? "g.cluster"
              : "g.edge";
        const el = svg.querySelector(`${selector}[id^="${selected.type}_${selected.id}"]`);

        if (el) {
          (el as HTMLElement).style.filter =
            "drop-shadow(0 0 4px #f59e0b) drop-shadow(0 0 10px #f59e0b)";
          // Scroll element into view
          try {
            el.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
          } catch {}
        }
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [selected]);

  return (
    <div className={styles.canvas}>
      {/* Global styles for SVG highlight */}
      <style>{`
        .canvasInner svg .ds-highlight {
          filter: drop-shadow(0 0 3px #f59e0b) drop-shadow(0 0 8px #f59e0b) !important;
        }
      `}</style>
      {!isLibraryLoaded && (
        <div className={styles.canvasLoading}>Loading diagrams-js library...</div>
      )}
      {isLibraryLoaded && isLoading && <div className={styles.canvasLoading}>Rendering...</div>}
      {error && (
        <div className={styles.canvasError}>
          <strong>Render error:</strong>
          <pre>{error}</pre>
        </div>
      )}
      {isLibraryLoaded && !svgContent && !error && !isLoading && (
        <div className={styles.canvasEmpty}>
          Add nodes from the Build panel to start,
          <br />
          or load an example from the Import menu.
        </div>
      )}
      {svgContent && (
        <div
          ref={containerRef}
          className={styles.canvasInner}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      )}
    </div>
  );
}

function ItemsList({
  state,
  selected,
  onSelect,
  onDeleteNode,
  onDeleteCluster,
  onDeleteEdge,
  onOpenNode,
  onOpenCluster,
  onOpenEdge,
}: {
  state: DiagramState;
  selected: Selection;
  onSelect: (sel: Selection) => void;
  onDeleteNode: (id: string) => void;
  onDeleteCluster: (id: string) => void;
  onDeleteEdge: (id: string) => void;
  onUpdateNode: (id: string, updates: Partial<Node>) => void;
  onUpdateCluster: (id: string, updates: Partial<Cluster>) => void;
  onUpdateEdge: (id: string, updates: Partial<Edge>) => void;
  onOpenNode: (id: string) => void;
  onOpenCluster: (id: string) => void;
  onOpenEdge: (id: string) => void;
}) {
  const arrow = { forward: "→", reverse: "←", both: "↔", none: "—" };

  // Accordion state - nodes open by default
  // Accordion state - only one section open at a time (null = all closed), nodes open by default
  const [openListSection, setOpenListSection] = useState<"nodes" | "clusters" | "edges" | null>(
    "nodes",
  );

  return (
    <div className={styles.panel}>
      {/* Nodes Section - First and open by default */}
      <h3
        className={styles.panelTitle}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={() => setOpenListSection(openListSection === "nodes" ? null : "nodes")}
      >
        <span>
          Nodes <span className={styles.badge}>{state.nodes.length}</span>
        </span>
        <span style={{ fontSize: "0.75rem", color: "var(--ve-text-secondary)" }}>
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--ve-text-secondary)",
              transform: openListSection === "nodes" ? "rotate(0deg)" : "rotate(-90deg)",
              transition: "transform 0.2s ease",
              display: "inline-block",
            }}
          >
            ▼
          </span>
        </span>
      </h3>
      {openListSection === "nodes" &&
        (state.nodes.length === 0 ? (
          <div className={styles.empty}>No nodes yet</div>
        ) : (
          state.nodes.map((n) => {
            const cl = n.clusterId ? state.clusters.find((c) => c.id === n.clusterId) : null;
            const meta = n.custom
              ? `custom (${n.iconMode === "iconify" ? n.iconName : n.iconUrl || "—"})`
              : `${n.provider}/${n.type}/${n.resource}`;
            const isSelected = selected?.type === "node" && selected.id === n.id;
            return (
              <div
                key={n.id}
                className={`${styles.listItem} ${isSelected ? styles.selected : ""}`}
                onClick={() => onSelect({ type: "node", id: n.id })}
              >
                <div className={styles.listItemInfo}>
                  <strong>{n.label}</strong>
                  <div className={styles.listItemMeta}>
                    {meta}
                    {cl ? ` · 📦 ${cl.label}` : ""}
                  </div>
                </div>
                <div className={styles.listActions}>
                  <button
                    className={styles.btnEdit}
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenNode(n.id);
                    }}
                    title="Edit node"
                  >
                    ✎
                  </button>
                  <button
                    className={styles.btnDel}
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteNode(n.id);
                    }}
                    title="Delete node"
                  >
                    ✕
                  </button>
                </div>
              </div>
            );
          })
        ))}

      {/* Clusters Section - Collapsed by default */}
      <h3
        className={styles.panelTitle}
        style={{
          marginTop: "1rem",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={() => setOpenListSection(openListSection === "clusters" ? null : "clusters")}
      >
        <span>
          Clusters <span className={styles.badge}>{state.clusters.length}</span>
        </span>
        <span style={{ fontSize: "0.75rem", color: "var(--ve-text-secondary)" }}>
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--ve-text-secondary)",
              transform: openListSection === "clusters" ? "rotate(0deg)" : "rotate(-90deg)",
              transition: "transform 0.2s ease",
              display: "inline-block",
            }}
          >
            ▼
          </span>
        </span>
      </h3>
      {openListSection === "clusters" &&
        (state.clusters.length === 0 ? (
          <div className={styles.empty}>No clusters yet</div>
        ) : (
          state.clusters.map((c) => {
            const kids = state.nodes.filter((n) => n.clusterId === c.id).length;
            const isSelected = selected?.type === "cluster" && selected.id === c.id;
            return (
              <div
                key={c.id}
                className={`${styles.listItem} ${isSelected ? styles.selected : ""}`}
                onClick={() => onSelect({ type: "cluster", id: c.id })}
              >
                <div className={styles.listItemInfo}>
                  <strong>{c.label}</strong>
                  <div className={styles.listItemMeta}>{kids} node(s)</div>
                </div>
                <div className={styles.listActions}>
                  <button
                    className={styles.btnEdit}
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenCluster(c.id);
                    }}
                    title="Edit cluster"
                  >
                    ✎
                  </button>
                  <button
                    className={styles.btnDel}
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteCluster(c.id);
                    }}
                    title="Delete cluster"
                  >
                    ✕
                  </button>
                </div>
              </div>
            );
          })
        ))}

      {/* Connections Section - Collapsed by default */}
      <h3
        className={styles.panelTitle}
        style={{
          marginTop: "1rem",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={() => setOpenListSection(openListSection === "edges" ? null : "edges")}
      >
        <span>
          Connections <span className={styles.badge}>{state.edges.length}</span>
        </span>
        <span style={{ fontSize: "0.75rem", color: "var(--ve-text-secondary)" }}>
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--ve-text-secondary)",
              transform: openListSection === "edges" ? "rotate(0deg)" : "rotate(-90deg)",
              transition: "transform 0.2s ease",
              display: "inline-block",
            }}
          >
            ▼
          </span>
        </span>
      </h3>
      {openListSection === "edges" &&
        (state.edges.length === 0 ? (
          <div className={styles.empty}>No connections yet</div>
        ) : (
          state.edges.map((e) => {
            const f = state.nodes.find((n) => n.id === e.from);
            const t = state.nodes.find((n) => n.id === e.to);
            if (!f || !t) return null;
            const isSelected = selected?.type === "edge" && selected.id === e.id;
            return (
              <div
                key={e.id}
                className={`${styles.listItem} ${isSelected ? styles.selected : ""}`}
                onClick={() => onSelect({ type: "edge", id: e.id })}
              >
                <div className={styles.listItemInfo}>
                  <strong>
                    {f.label} {arrow[e.direction]} {t.label}
                  </strong>
                  <div className={styles.listItemMeta}>
                    {e.label ? `"${e.label}" · ` : ""}
                    {e.style || "solid"}
                    {e.color ? ` · ${e.color}` : ""}
                  </div>
                </div>
                <div className={styles.listActions}>
                  <button
                    className={styles.btnEdit}
                    onClick={(ev) => {
                      ev.stopPropagation();
                      onOpenEdge(e.id);
                    }}
                    title="Edit connection"
                  >
                    ✎
                  </button>
                  <button
                    className={styles.btnDel}
                    onClick={(ev) => {
                      ev.stopPropagation();
                      onDeleteEdge(e.id);
                    }}
                    title="Delete connection"
                  >
                    ✕
                  </button>
                </div>
              </div>
            );
          })
        ))}
    </div>
  );
}

// Edit Modal Component
function EditModal({
  item,
  state,
  allResources,
  onUpdateNode,
  onUpdateCluster,
  onUpdateEdge,
  onDeleteNode,
  onDeleteCluster,
  onDeleteEdge,
  onClose,
}: {
  item: Selection;
  state: DiagramState;
  allResources: Resource[];
  onUpdateNode: (id: string, updates: Partial<Node>) => void;
  onUpdateCluster: (id: string, updates: Partial<Cluster>) => void;
  onUpdateEdge: (id: string, updates: Partial<Edge>) => void;
  onDeleteNode: (id: string) => void;
  onDeleteCluster: (id: string) => void;
  onDeleteEdge: (id: string) => void;
  onClose: () => void;
}) {
  if (!item) return null;

  const node = item.type === "node" ? state.nodes.find((n) => n.id === item.id) : null;
  const cluster = item.type === "cluster" ? state.clusters.find((c) => c.id === item.id) : null;
  const edge = item.type === "edge" ? state.edges.find((e) => e.id === item.id) : null;

  // Node edit state
  const [nodeLabel, setNodeLabel] = useState(node?.label || "");
  const [useCustom, setUseCustom] = useState(node?.custom || false);
  const [iconMode, setIconMode] = useState<"url" | "iconify">(node?.iconMode || "url");
  const [iconUrl, setIconUrl] = useState(node?.iconUrl || "");
  const [iconName, setIconName] = useState(node?.iconName || "");
  const [clusterId, setClusterId] = useState(node?.clusterId || "");
  const [selectedProvider, setSelectedProvider] = useState(node?.provider || "");
  const [selectedType, setSelectedType] = useState(node?.type || "");
  const [selectedResource, setSelectedResource] = useState(node?.resource || "");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Resource[]>([]);

  // Cluster edit state
  const [clusterLabel, setClusterLabel] = useState(cluster?.label || "");

  // Edge edit state
  const [edgeFrom, setEdgeFrom] = useState(edge?.from || "");
  const [edgeTo, setEdgeTo] = useState(edge?.to || "");
  const [edgeDirection, setEdgeDirection] = useState<Edge["direction"]>(
    edge?.direction || "forward",
  );
  const [edgeStyle, setEdgeStyle] = useState(edge?.style || "");
  const [edgeColor, setEdgeColor] = useState(edge?.color || "");
  const [edgeLabel, setEdgeLabel] = useState(edge?.label || "");

  // Resource picker for node
  const providers = Array.from(new Set(allResources.map((r) => r.provider))).sort();
  const types = selectedProvider
    ? Array.from(
        new Set(allResources.filter((r) => r.provider === selectedProvider).map((r) => r.type)),
      ).sort()
    : [];
  const resources =
    selectedProvider && selectedType
      ? allResources
          .filter((r) => r.provider === selectedProvider && r.type === selectedType)
          .map((r) => r.resource)
          .sort()
      : [];

  // Search for resources
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const q = searchQuery.toLowerCase();
    const results = allResources.filter(
      (r) =>
        r.provider.toLowerCase().includes(q) ||
        r.type.toLowerCase().includes(q) ||
        r.resource.toLowerCase().includes(q),
    );
    setSearchResults(results.slice(0, 60));
  }, [searchQuery, allResources]);

  const handleSave = () => {
    if (item.type === "node" && node) {
      if (!nodeLabel.trim()) {
        alert("Label is required");
        return;
      }
      if (useCustom) {
        if (iconMode === "url" && !iconUrl.trim()) {
          alert("Please provide an image URL.");
          return;
        }
        if (iconMode === "iconify" && !iconName.includes(":")) {
          alert('Iconify name must be like "prefix:name".');
          return;
        }
        onUpdateNode(item.id, {
          label: nodeLabel.trim(),
          custom: true,
          iconMode,
          iconUrl: iconMode === "url" ? iconUrl : "",
          iconName: iconMode === "iconify" ? iconName : "",
          clusterId: clusterId || null,
          provider: undefined,
          type: undefined,
          resource: undefined,
        });
      } else {
        if (!selectedProvider || !selectedType || !selectedResource) {
          alert("Please select a Provider, Type, and Resource.");
          return;
        }
        onUpdateNode(item.id, {
          label: nodeLabel.trim(),
          provider: selectedProvider,
          type: selectedType,
          resource: selectedResource,
          clusterId: clusterId || null,
          custom: undefined,
          iconMode: undefined,
          iconUrl: undefined,
          iconName: undefined,
        });
      }
    } else if (item.type === "cluster" && cluster) {
      if (!clusterLabel.trim()) {
        alert("Label is required");
        return;
      }
      onUpdateCluster(item.id, { label: clusterLabel.trim() });
    } else if (item.type === "edge" && edge) {
      if (edgeFrom === edgeTo) {
        alert("Source and target must differ.");
        return;
      }
      onUpdateEdge(item.id, {
        from: edgeFrom,
        to: edgeTo,
        direction: edgeDirection,
        style: edgeStyle,
        color: edgeColor,
        label: edgeLabel,
      });
    }
    onClose();
  };

  // Keyboard shortcuts: Enter to save, Escape to cancel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSave();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleSave, onClose]);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3>Edit {item.type}</h3>
          <button className={styles.modalClose} onClick={onClose}>
            ✕
          </button>
        </div>

        <div className={styles.modalBody}>
          {item.type === "node" && node && (
            <>
              <div className={styles.field}>
                <label>Label</label>
                <input
                  type="text"
                  value={nodeLabel}
                  onChange={(e) => setNodeLabel(e.target.value)}
                  autoFocus
                />
              </div>

              <label className={styles.toggleRow}>
                <input
                  type="checkbox"
                  checked={useCustom}
                  onChange={(e) => setUseCustom(e.target.checked)}
                />
                <span>Use custom icon (URL or Iconify)</span>
              </label>

              {!useCustom ? (
                <>
                  <div className={styles.row3}>
                    <div className={styles.field}>
                      <label>Provider</label>
                      <select
                        value={selectedProvider}
                        onChange={(e) => {
                          setSelectedProvider(e.target.value);
                          setSelectedType("");
                          setSelectedResource("");
                        }}
                      >
                        <option value="">—</option>
                        {providers.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.field}>
                      <label>Type</label>
                      <select
                        value={selectedType}
                        onChange={(e) => {
                          setSelectedType(e.target.value);
                          setSelectedResource("");
                        }}
                        disabled={!selectedProvider}
                      >
                        <option value="">—</option>
                        {types.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.field}>
                      <label>Resource</label>
                      <select
                        value={selectedResource}
                        onChange={(e) => setSelectedResource(e.target.value)}
                        disabled={!selectedType}
                      >
                        <option value="">—</option>
                        {resources.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label>Or search</label>
                    <input
                      type="text"
                      placeholder="e.g. ec2, redis, lambda..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchResults.length > 0 && (
                      <div className={styles.resourceList}>
                        {searchResults.map((r) => (
                          <div
                            key={`${r.provider}-${r.type}-${r.resource}`}
                            className={styles.resourceItem}
                            onClick={() => {
                              setSelectedProvider(r.provider);
                              setSelectedType(r.type);
                              setSelectedResource(r.resource);
                              setSearchQuery("");
                              setSearchResults([]);
                            }}
                          >
                            <div className={styles.resourceName}>{r.resource}</div>
                            <div className={styles.resourceMeta}>
                              {r.provider} · {r.type}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.radioRow}>
                    <label>
                      <input
                        type="radio"
                        value="url"
                        checked={iconMode === "url"}
                        onChange={() => setIconMode("url")}
                      />{" "}
                      URL
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="iconify"
                        checked={iconMode === "iconify"}
                        onChange={() => setIconMode("iconify")}
                      />{" "}
                      Iconify
                    </label>
                  </div>
                  {iconMode === "url" ? (
                    <div className={styles.field}>
                      <label>Image URL</label>
                      <input
                        type="text"
                        placeholder="https://example.com/icon.svg"
                        value={iconUrl}
                        onChange={(e) => setIconUrl(e.target.value)}
                      />
                    </div>
                  ) : (
                    <div className={styles.field}>
                      <label>Iconify name (e.g. mdi:kubernetes)</label>
                      <input
                        type="text"
                        placeholder="prefix:name"
                        value={iconName}
                        onChange={(e) => setIconName(e.target.value)}
                      />
                    </div>
                  )}
                </>
              )}

              <div className={styles.field}>
                <label>Cluster</label>
                <select value={clusterId} onChange={(e) => setClusterId(e.target.value)}>
                  <option value="">— None —</option>
                  {state.clusters.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}

          {item.type === "cluster" && cluster && (
            <>
              <div className={styles.field}>
                <label>Label</label>
                <input
                  type="text"
                  value={clusterLabel}
                  onChange={(e) => setClusterLabel(e.target.value)}
                  autoFocus
                />
              </div>
              <div className={styles.field}>
                <label style={{ color: "var(--ve-text-secondary)" }}>
                  Contains {state.nodes.filter((n) => n.clusterId === cluster.id).length} node(s)
                </label>
              </div>
            </>
          )}

          {item.type === "edge" && edge && (
            <>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>From</label>
                  <select value={edgeFrom} onChange={(e) => setEdgeFrom(e.target.value)}>
                    {state.nodes.map((n) => (
                      <option key={n.id} value={n.id}>
                        {n.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.field}>
                  <label>To</label>
                  <select value={edgeTo} onChange={(e) => setEdgeTo(e.target.value)}>
                    {state.nodes.map((n) => (
                      <option key={n.id} value={n.id}>
                        {n.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Direction</label>
                  <select
                    value={edgeDirection}
                    onChange={(e) => setEdgeDirection(e.target.value as Edge["direction"])}
                  >
                    <option value="forward">→</option>
                    <option value="reverse">←</option>
                    <option value="both">↔</option>
                    <option value="none">—</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label>Style</label>
                  <select value={edgeStyle} onChange={(e) => setEdgeStyle(e.target.value)}>
                    <option value="">solid</option>
                    <option value="dashed">dashed</option>
                    <option value="dotted">dotted</option>
                    <option value="bold">bold</option>
                  </select>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Color</label>
                  <input
                    type="text"
                    value={edgeColor}
                    onChange={(e) => setEdgeColor(e.target.value)}
                    placeholder="e.g. red, blue, #ff0000"
                  />
                </div>
                <div className={styles.field}>
                  <label>Label</label>
                  <input
                    type="text"
                    value={edgeLabel}
                    onChange={(e) => setEdgeLabel(e.target.value)}
                    placeholder="Optional"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        <div className={styles.modalFooter}>
          <button
            className={styles.btnDanger}
            onClick={() => {
              if (item.type === "node") onDeleteNode(item.id);
              else if (item.type === "cluster") onDeleteCluster(item.id);
              else if (item.type === "edge") onDeleteEdge(item.id);
              onClose();
            }}
          >
            Delete
          </button>
          <div style={{ flex: 1 }} />
          <button className={styles.btnSecondary} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.btnPrimary} onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

function Toolbar({
  state,
  onStateChange,
  onClear,
  onLoadExample,
  onExportSvg,
  onExportJson,
  onImportJson,
  onImportDockerCompose,
  onImportKubernetes,
  onShare,
  shareCopied,
}: {
  state: DiagramState;
  onStateChange: (s: DiagramState) => void;
  onClear: () => void;
  onLoadExample: () => void;
  onExportSvg: () => void;
  onExportJson: () => void;
  onImportJson: (file: File) => void;
  onImportDockerCompose: (content: string) => Promise<void>;
  onImportKubernetes: (content: string) => Promise<void>;
  onShare: () => void;
  shareCopied: boolean;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dockerComposeInputRef = useRef<HTMLInputElement>(null);
  const kubernetesInputRef = useRef<HTMLInputElement>(null);

  const handleDockerComposeImport = async (file: File) => {
    try {
      const content = await file.text();
      await onImportDockerCompose(content);
    } catch (err: any) {
      alert("Failed to import Docker Compose: " + err.message);
    }
  };

  const handleKubernetesImport = async (file: File) => {
    try {
      const content = await file.text();
      await onImportKubernetes(content);
    } catch (err: any) {
      alert("Failed to import Kubernetes: " + err.message);
    }
  };

  return (
    <div className={styles.toolbar}>
      <div className={styles.toolbarLeft}>
        <div className={styles.toolbarField}>
          <label>Title</label>
          <input
            type="text"
            value={state.name}
            onChange={(e) => onStateChange({ ...state, name: e.target.value })}
            className={styles.toolbarInput}
          />
        </div>

        <div className={styles.toolbarField}>
          <label>Direction</label>
          <select
            value={state.direction}
            onChange={(e) =>
              onStateChange({ ...state, direction: e.target.value as DiagramState["direction"] })
            }
            className={`${styles.toolbarSelect} ${styles.directionSelect}`}
          >
            <option value="LR">→</option>
            <option value="RL">←</option>
            <option value="TB">↓</option>
            <option value="BT">↑</option>
          </select>
        </div>

        <div className={styles.toolbarField}>
          <label>Theme</label>
          <select
            value={state.theme}
            onChange={(e) => onStateChange({ ...state, theme: e.target.value })}
            className={`${styles.toolbarSelect} ${styles.themeSelect}`}
          >
            <option value="pastel">Pastel</option>
            <option value="neutral">Neutral</option>
            <option value="blues">Blues</option>
            <option value="greens">Greens</option>
            <option value="orange">Orange</option>
          </select>
        </div>
      </div>

      <div className={styles.toolbarRight}>
        <select
          className={`${styles.toolbarSelect} ${styles.fileSelect}`}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "example") onLoadExample();
            else if (value === "import-docker-compose") dockerComposeInputRef.current?.click();
            else if (value === "import-kubernetes") kubernetesInputRef.current?.click();
            else if (value === "import") fileInputRef.current?.click();
            else if (value === "export") onExportJson();
            e.target.value = "";
          }}
          value=""
        >
          <option value="" disabled>
            Import...
          </option>
          <option value="example">Load Example</option>
          <option value="" disabled>
            ──────────
          </option>
          <option value="import-docker-compose">Import Docker Compose...</option>
          <option value="import-kubernetes">Import Kubernetes...</option>
          <option value="import">Import JSON...</option>
          <option value="export">Export JSON...</option>
        </select>
        <input
          ref={fileInputRef}
          type="file"
          accept=".json,application/json"
          style={{ display: "none" }}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) onImportJson(file);
            e.target.value = "";
          }}
        />
        <input
          ref={dockerComposeInputRef}
          type="file"
          accept=".yml,.yaml"
          style={{ display: "none" }}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) void handleDockerComposeImport(file);
            e.target.value = "";
          }}
        />
        <input
          ref={kubernetesInputRef}
          type="file"
          accept=".yml,.yaml"
          style={{ display: "none" }}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) void handleKubernetesImport(file);
            e.target.value = "";
          }}
        />
        <button className={styles.toolbarBtn} onClick={onClear}>
          Clear
        </button>
        <button
          className={`${styles.toolbarBtn} ${styles.toolbarBtnShare} ${shareCopied ? styles.toolbarBtnSuccess : ""}`}
          onClick={onShare}
        >
          {shareCopied ? "Copied!" : "Share"}
        </button>
        <button
          className={`${styles.toolbarBtn} ${styles.toolbarBtnPrimary}`}
          onClick={onExportSvg}
        >
          Export SVG
        </button>
      </div>
    </div>
  );
}
