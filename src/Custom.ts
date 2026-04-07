import { Node } from "./Node.js";

/**
 * Custom node with an external icon
 * Allows using icons from URLs or local file paths
 *
 * @example
 * ```typescript
 * // With URL (browser)
 * const custom = Custom("My Service", "https://example.com/icon.png");
 *
 * // With local path (Node.js with file system access)
 * const local = Custom("Local Service", "./icons/my-icon.png");
 *
 * // In a diagram
 * const diagram = Diagram("Custom Nodes");
 * const node = diagram.add(Custom("Custom", "https://example.com/icon.png"));
 * ```
 */
export interface CustomNode {
  ["~iconUrl"]: string;
  getIconUrl(): string;
  loadIcon(): Promise<string | null>;
}

export function Custom(
  label: string,
  iconUrl: string,
  options?: {
    nodeId?: string;
    shape?: string;
    height?: string;
    width?: string;
    fixedsize?: string;
    margin?: string;
    labelloc?: string;
    imagescale?: string;
  },
): ReturnType<typeof Node> & CustomNode {
  // Create base node with icon data URL if it's already a data URL
  const isDataUrl = iconUrl.startsWith("data:");
  const baseNode = Node(label, {
    // Apply defaults first
    shape: "none",
    height: "0.9",
    width: "0.8",
    fixedsize: "true",
    margin: "0,0",
    labelloc: "b",
    imagescale: "true",
    // Then apply user options (which will override defaults)
    ...options,
    // If it's a data URL, set it as ~iconDataUrl so Node.~register tracks it
    ...(isDataUrl ? { ["~iconDataUrl"]: iconUrl } : {}),
  });

  const customNode = {
    ...baseNode,
    ["~iconUrl"]: iconUrl,
    // Override ~iconDataUrl getter/setter to ensure custom icons are tracked
    get ["~iconDataUrl"](): string | null {
      // Return the iconUrl if it's a data URL, otherwise null (will be loaded async)
      return iconUrl.startsWith("data:") ? iconUrl : null;
    },
    set ["~iconDataUrl"](_value: string | null) {
      // No-op: Custom nodes manage their own icon data
    },

    /**
     * Get the icon URL/path for this node
     * @internal
     */
    getIconUrl(): string {
      return iconUrl;
    },

    /**
     * Load the icon and return as data URL
     * In browser: fetches from URL
     * In Node.js: reads from file system or fetches from URL
     */
    async loadIcon(): Promise<string | null> {
      // Already a data URL, return as-is
      if (_isDataUrl(iconUrl)) {
        return iconUrl;
      }

      // Remote URL - fetch it
      if (_isRemoteUrl(iconUrl)) {
        return _fetchRemoteIcon(iconUrl);
      }

      // Local file path
      return _loadLocalIcon(iconUrl);
    },
  };

  return customNode;
}

/**
 * Check if the icon is a data URL (already embedded)
 */
function _isDataUrl(url: string): boolean {
  return url.startsWith("data:");
}

/**
 * Check if the icon is a remote URL
 */
function _isRemoteUrl(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://");
}

/**
 * Fetch icon from remote URL
 */
async function _fetchRemoteIcon(iconUrl: string): Promise<string | null> {
  try {
    // Use global fetch (available in browser and Node.js 18+)
    const response = await globalThis.fetch(iconUrl);
    if (!response.ok) {
      console.warn(`Failed to fetch icon: ${iconUrl}`);
      return null;
    }

    // Browser environment (has both Blob and FileReader)
    if (typeof Blob !== "undefined" && typeof FileReader !== "undefined") {
      const blob = await response.blob();
      return _blobToDataUrl(blob);
    }

    // Node.js environment (Blob may exist but FileReader doesn't)
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const contentType = response.headers.get("content-type") || "image/png";
    return `data:${contentType};base64,${buffer.toString("base64")}`;
  } catch (error) {
    console.warn(`Error fetching icon: ${iconUrl}`, error);
    return null;
  }
}

/**
 * Load icon from local file path (Node.js only)
 */
async function _loadLocalIcon(iconUrl: string): Promise<string | null> {
  try {
    // Dynamic import to avoid issues in browser
    const fs = await import("node:fs/promises");
    const path = await import("node:path");

    const buffer = await fs.readFile(iconUrl);
    const ext = path.extname(iconUrl).toLowerCase();

    // Determine content type from extension
    let contentType = "image/png";
    if (ext === ".svg") contentType = "image/svg+xml";
    else if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";
    else if (ext === ".gif") contentType = "image/gif";
    else if (ext === ".webp") contentType = "image/webp";

    return `data:${contentType};base64,${buffer.toString("base64")}`;
  } catch (error) {
    console.warn(`Error loading local icon: ${iconUrl}`, error);
    return null;
  }
}

/**
 * Convert Blob to data URL (browser only)
 */
function _blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
