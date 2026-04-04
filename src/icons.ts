import type { Node } from "./Node.js";

export interface NodeIconMap {
  node: Node;
  icon: string;
  iconPath?: string;
}

export type { Node };

export interface IconData {
  [key: string]: string;
}

/**
 * Detect if running in browser environment
 */
function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

/**
 * Load an icon as a base64 data URI (browser only)
 * @param path - Path to the icon file
 * @returns Promise resolving to the data URI
 */
export async function loadIcon(path: string): Promise<string | null> {
  if (!isBrowser()) {
    console.warn("loadIcon is only available in browser environments");
    return null;
  }

  try {
    const response = await fetch(path);
    if (!response.ok) {
      console.warn(`Failed to load icon: ${path} (HTTP ${response.status})`);
      return null;
    }
    const blob = await response.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = () => {
        reject(new Error(`Failed to read icon: ${path}`));
      };
      reader.readAsDataURL(blob);
    });
  } catch (e) {
    console.warn(`Failed to load icon: ${path}`, e);
    return null;
  }
}

/**
 * Load multiple icons as data URIs (browser only)
 * @param iconPaths - Map of icon keys to paths
 * @returns Promise resolving to map of icon keys to data URIs
 */
export async function loadIcons(iconPaths: Record<string, string>): Promise<IconData> {
  if (!isBrowser()) {
    return {};
  }

  const iconData: IconData = {};

  await Promise.all(
    Object.entries(iconPaths).map(async ([key, path]) => {
      const dataUri = await loadIcon(path);
      if (dataUri) {
        iconData[key] = dataUri;
      }
    }),
  );

  return iconData;
}

/**
 * Parse transform attribute to extract translate values
 */
function parseTransform(transform: string): { x: number; y: number } | null {
  const match = transform.match(/translate\(\s*([^,\s]+)[,\s]+([^\s)]+)\s*\)/);
  if (!match) return null;
  return {
    x: parseFloat(match[1]),
    y: parseFloat(match[2]),
  };
}

/**
 * Extract position from SVG element attributes using regex
 */
function extractPosition(groupHtml: string): { x: number; y: number } | null {
  // Try transform first
  const transformMatch = groupHtml.match(/transform="([^"]+)"/);
  if (transformMatch) {
    const pos = parseTransform(transformMatch[1]);
    if (pos) return pos;
  }

  // Try ellipse
  const ellipseMatch = groupHtml.match(/<ellipse[^>]+cx="([^"]+)"[^>]+cy="([^"]+)"/);
  if (ellipseMatch) {
    return {
      x: parseFloat(ellipseMatch[1]),
      y: parseFloat(ellipseMatch[2]),
    };
  }

  // Try polygon center
  const polygonMatch = groupHtml.match(/<polygon[^>]+points="([^"]+)"/);
  if (polygonMatch) {
    const coords = polygonMatch[1].match(/[-\d.]+/g);
    if (coords && coords.length >= 4) {
      let totalX = 0;
      let totalY = 0;
      let count = 0;
      for (let i = 0; i < coords.length; i += 2) {
        totalX += parseFloat(coords[i]);
        totalY += parseFloat(coords[i + 1]);
        count++;
      }
      return { x: totalX / count, y: totalY / count };
    }
  }

  // Try path center
  const pathMatch = groupHtml.match(/<path[^>]+d="([^"]+)"/);
  if (pathMatch) {
    const coords = pathMatch[1].match(/[-\d.]+/g);
    if (coords && coords.length >= 4) {
      const xs: number[] = [];
      const ys: number[] = [];

      for (let i = 0; i < coords.length; i += 2) {
        const xCoord = parseFloat(coords[i]);
        const yCoord = parseFloat(coords[i + 1]);
        if (!isNaN(xCoord) && !isNaN(yCoord)) {
          xs.push(xCoord);
          ys.push(yCoord);
        }
      }

      if (xs.length > 0 && ys.length > 0) {
        return {
          x: (Math.min(...xs) + Math.max(...xs)) / 2,
          y: (Math.min(...ys) + Math.max(...ys)) / 2,
        };
      }
    }
  }

  // Try text position - handle attributes in any order
  const xMatch = groupHtml.match(/<text[^>]*\sx="([^"]+)"/);
  const yMatch = groupHtml.match(/<text[^>]*\sy="([^"]+)"/);
  if (xMatch && yMatch) {
    const fontSizeMatch = groupHtml.match(/font-size="([^"]+)"/);
    const textHeight = fontSizeMatch ? parseFloat(fontSizeMatch[1]) : 13;
    return {
      x: parseFloat(xMatch[1]),
      y: parseFloat(yMatch[1]) - textHeight - 32,
    };
  }

  return null;
}

/**
 * Extract title from node group
 */
function extractTitle(groupHtml: string): string | null {
  const titleMatch = groupHtml.match(/<title>([^<]*)<\/title>/);
  return titleMatch ? titleMatch[1] : null;
}

/**
 * Inject icons into an SVG string
 * Works in both browser and Node.js environments
 * @param svgString - The SVG string to inject icons into
 * @param nodeMap - Map of nodes to their icon keys
 * @param iconData - Map of icon keys to data URIs
 * @returns Modified SVG string with icons injected
 */
export function injectIcons(svgString: string, nodeMap: NodeIconMap[], iconData: IconData): string {
  if (!iconData || Object.keys(iconData).length === 0 || nodeMap.length === 0) {
    return svgString;
  }

  // Use browser DOM APIs if available
  if (isBrowser()) {
    return injectIconsBrowser(svgString, nodeMap, iconData);
  }

  // Use regex-based approach for Node.js
  return injectIconsNode(svgString, nodeMap, iconData);
}

/**
 * Browser version using DOM APIs
 */
function injectIconsBrowser(svgString: string, nodeMap: NodeIconMap[], iconData: IconData): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, "image/svg+xml");
  const svg = doc.querySelector("svg");

  if (!svg) {
    console.warn("No SVG element found");
    return svgString;
  }

  const nodeGroups = svg.querySelectorAll("g.node");

  nodeGroups.forEach((group) => {
    const titleEl = group.querySelector("title");
    if (!titleEl) return;

    const nodeId = titleEl.textContent;
    const nodeInfo = nodeMap.find((nm) => nm.node.nodeId === nodeId);

    if (!nodeInfo || !iconData[nodeInfo.icon]) return;

    let x: number;
    let y: number;

    const transform = group.getAttribute("transform");
    if (transform && transform !== "null") {
      const match = transform.match(/translate\(\s*([^,\s]+)[,\s]+([^\s)]+)\s*\)/);
      if (!match) return;
      x = parseFloat(match[1]);
      y = parseFloat(match[2]);
    } else {
      const ellipse = group.querySelector("ellipse");
      const polygon = group.querySelector("polygon");
      const path = group.querySelector("path");
      const text = group.querySelector("text");

      if (ellipse) {
        const cx = ellipse.getAttribute("cx");
        const cy = ellipse.getAttribute("cy");
        if (!cx || !cy) return;
        x = parseFloat(cx);
        y = parseFloat(cy);
      } else if (polygon) {
        const points = polygon.getAttribute("points");
        if (!points) return;
        const coords = points.match(/[-\d.]+/g);
        if (!coords || coords.length < 4) return;
        let totalX = 0;
        let totalY = 0;
        let count = 0;
        for (let i = 0; i < coords.length; i += 2) {
          totalX += parseFloat(coords[i]);
          totalY += parseFloat(coords[i + 1]);
          count++;
        }
        x = totalX / count;
        y = totalY / count;
      } else if (path) {
        const d = path.getAttribute("d");
        if (!d) return;
        const coords = d.match(/[-\d.]+/g);
        if (!coords || coords.length < 4) return;

        const xs: number[] = [];
        const ys: number[] = [];

        for (let i = 0; i < coords.length; i += 2) {
          const xCoord = parseFloat(coords[i]);
          const yCoord = parseFloat(coords[i + 1]);
          if (!isNaN(xCoord) && !isNaN(yCoord)) {
            xs.push(xCoord);
            ys.push(yCoord);
          }
        }

        if (xs.length === 0 || ys.length === 0) return;
        x = (Math.min(...xs) + Math.max(...xs)) / 2;
        y = (Math.min(...ys) + Math.max(...ys)) / 2;
      } else if (text) {
        const xAttr = text.getAttribute("x");
        const yAttr = text.getAttribute("y");
        const fontSize = text.getAttribute("font-size");
        if (!xAttr || !yAttr) return;
        x = parseFloat(xAttr);
        const textHeight = fontSize ? parseFloat(fontSize) : 13;
        y = parseFloat(yAttr) - textHeight - 32;
      } else {
        return;
      }
    }

    const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
    image.setAttribute("x", String(x - 24));
    image.setAttribute("y", String(y - 24));
    image.setAttribute("width", "48");
    image.setAttribute("height", "48");
    image.setAttribute("href", iconData[nodeInfo.icon]);
    image.setAttribute("preserveAspectRatio", "xMidYMid meet");

    group.appendChild(image);
  });

  const serializer = new XMLSerializer();
  return serializer.serializeToString(svg);
}

/**
 * Node.js version using regex
 */
function injectIconsNode(svgString: string, nodeMap: NodeIconMap[], iconData: IconData): string {
  // Find all node groups
  const nodeGroupRegex = /<g[^>]*class="node"[^>]*>([\s\S]*?)<\/g>/g;
  let result = svgString;
  let match;

  while ((match = nodeGroupRegex.exec(svgString)) !== null) {
    const groupHtml = match[0];
    const title = extractTitle(groupHtml);

    if (!title) continue;

    const nodeInfo = nodeMap.find((nm) => nm.node.nodeId === title);
    if (!nodeInfo || !iconData[nodeInfo.icon]) continue;

    const pos = extractPosition(groupHtml);
    if (!pos) continue;

    // Create image element
    const imageElement = `<image x="${pos.x - 24}" y="${pos.y - 24}" width="48" height="48" href="${iconData[nodeInfo.icon]}" preserveAspectRatio="xMidYMid meet"/>`;

    // Insert image before closing </g>
    const newGroupHtml = groupHtml.replace(/<\/g>$/, `${imageElement}</g>`);
    result = result.replace(groupHtml, newGroupHtml);
  }

  return result;
}

/**
 * Helper class to manage icon loading and injection
 */
export class IconManager {
  private nodeMap: NodeIconMap[] = [];
  private iconData: IconData = {};
  private iconBaseDir: string = "";

  constructor(iconBaseDir = "") {
    this.iconBaseDir = iconBaseDir;
  }

  /**
   * Register a node with its icon
   * @param node - The node to register
   * @param iconKey - Key for the icon (used in iconData)
   * @param iconPath - Optional specific path to the icon
   */
  register(node: Node, iconKey: string, iconPath?: string): void {
    this.nodeMap.push({
      node,
      icon: iconKey,
      iconPath,
    });
  }

  /**
   * Load all registered icons (browser only)
   */
  async loadAllIcons(): Promise<void> {
    if (!isBrowser()) {
      return;
    }

    const pathsToLoad: Record<string, string> = {};

    for (const item of this.nodeMap) {
      if (!this.iconData[item.icon]) {
        const path = item.iconPath || `${this.iconBaseDir}/${item.icon}.png`;
        pathsToLoad[item.icon] = path;
      }
    }

    const loaded = await loadIcons(pathsToLoad);
    Object.assign(this.iconData, loaded);
  }

  /**
   * Inject icons into an SVG string
   * @param svgString - The SVG string to modify
   * @returns Modified SVG string with icons
   */
  inject(svgString: string): string {
    return injectIcons(svgString, this.nodeMap, this.iconData);
  }

  /**
   * Get all loaded icon data
   */
  getIconData(): IconData {
    return { ...this.iconData };
  }

  /**
   * Get the node map
   */
  getNodeMap(): NodeIconMap[] {
    return [...this.nodeMap];
  }

  /**
   * Clear all registered nodes and loaded icons
   */
  clear(): void {
    this.nodeMap = [];
    this.iconData = {};
  }
}
