import { Node } from "./Node.js";

/**
 * Cache for icon loading promises to prevent duplicate fetches
 * Key: icon URL, Value: Promise resolving to data URL
 */
const iconLoadingCache = new Map<string, Promise<string | null>>();

/**
 * Timeout for fetching remote icons (10 seconds)
 */
const ICON_FETCH_TIMEOUT = 10000;

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
export interface Custom extends Node {
  /** @internal */
  ["~iconUrl"]: string;

  /**
   * Get the icon URL/path for this node
   * @returns The icon URL or file path
   * @internal
   */
  ["~getIconUrl"](): string;

  /**
   * Load the icon and return as data URL
   * @returns Promise resolving to the icon data URL, or null if loading failed
   */
  loadIcon(): Promise<string | null>;
}

/**
 * Create a custom node with an external icon
 * @param label - The display label for the node
 * @param iconUrl - URL or file path to the icon image (supports PNG, JPG, SVG)
 * @param options - Optional configuration for the node
 * @returns A new Custom node instance
 * @example
 * ```typescript
 * // Using a remote URL
 * const node = Custom("My Service", "https://example.com/icon.png");
 * diagram.add(node);
 *
 * // Using a local file (Node.js)
 * const local = Custom("Local Service", "./assets/icon.svg");
 * diagram.add(local);
 *
 * // With custom options
 * const styled = Custom("Service", "icon.png", {
 *   shape: "box",
 *   width: "1.2",
 *   height: "1.2"
 * });
 * ```
 */
export function Custom(
  label: string,
  iconUrl: string,
  options?: {
    /** Custom node ID */
    nodeId?: string;
    /** Graphviz shape attribute */
    shape?: string;
    /** Graphviz height attribute */
    height?: string;
    /** Graphviz width attribute */
    width?: string;
    /** Graphviz fixedsize attribute */
    fixedsize?: string;
    /** Graphviz margin attribute */
    margin?: string;
    /** Graphviz labelloc attribute */
    labelloc?: string;
    /** Graphviz imagescale attribute */
    imagescale?: string;
  },
): Custom {
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
    ["~getIconUrl"](): string {
      return iconUrl;
    },

    /**
     * Load the icon and return as data URL
     * In browser: fetches from URL
     * In Node.js: reads from file system or fetches from URL
     * Uses caching to prevent duplicate fetches for the same URL
     */
    async loadIcon(): Promise<string | null> {
      // Already a data URL, return as-is
      if (_isDataUrl(iconUrl)) {
        return iconUrl;
      }

      // Check cache first to prevent duplicate loading
      if (iconLoadingCache.has(iconUrl)) {
        return iconLoadingCache.get(iconUrl)!;
      }

      // Create loading promise
      let loadingPromise: Promise<string | null>;

      // Remote URL - fetch it
      if (_isRemoteUrl(iconUrl)) {
        loadingPromise = _fetchRemoteIcon(iconUrl);
      } else {
        // Local file path
        loadingPromise = _loadLocalIcon(iconUrl);
      }

      // Cache the promise
      iconLoadingCache.set(iconUrl, loadingPromise);

      // Clean up cache after loading (success or failure)
      loadingPromise
        .then(() => {
          // Keep in cache on success for potential reuse
        })
        .catch(() => {
          // Remove from cache on failure so it can be retried
          iconLoadingCache.delete(iconUrl);
        });

      return loadingPromise;
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
 * Fetch icon from remote URL with timeout
 */
async function _fetchRemoteIcon(iconUrl: string): Promise<string | null> {
  try {
    // Create abort controller for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), ICON_FETCH_TIMEOUT);

    // Use global fetch (available in browser and Node.js 18+)
    const response = await globalThis.fetch(iconUrl, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

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

/**
 * Create a custom node with an Iconify icon
 * Uses the Iconify API (https://iconify.design/) to fetch icons
 *
 * @param label - The display label for the node
 * @param iconName - Icon name in "prefix:name" format (e.g., "mdi:home", "logos:aws")
 * @returns A new Custom node instance with the Iconify icon
 *
 * @example
 * ```typescript
 * // Material Design icon
 * const home = Iconify("Home", "mdi:home");
 *
 * // Technology logos
 * const aws = Iconify("AWS", "logos:aws");
 * const docker = Iconify("Docker", "logos:docker");
 *
 * // In a diagram
 * const diagram = Diagram("Architecture");
 * diagram.add(Iconify("Web Server", "mdi:server"));
 * ```
 *
 * @see https://iconify.design/ - Browse icons at https://icon-sets.iconify.design/
 *
 * The implementation is simple:
 * ```typescript
 * const Iconify = (name, image) => Custom(name, `https://api.iconify.design/${image}.svg`)
 * ```
 */
export function Iconify(label: string, iconName: string): Custom {
  return Custom(label, `https://api.iconify.design/${iconName}.svg`);
}
