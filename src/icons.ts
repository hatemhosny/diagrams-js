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
 * Load an icon as a base64 data URI
 * @param path - Path to the icon file
 * @returns Promise resolving to the data URI
 */
export async function loadIcon(path: string): Promise<string | null> {
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
 * Load multiple icons as data URIs
 * @param iconPaths - Map of icon keys to paths
 * @returns Promise resolving to map of icon keys to data URIs
 */
export async function loadIcons(iconPaths: Record<string, string>): Promise<IconData> {
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
 * Inject icons into an SVG string
 * @param svgString - The SVG string to inject icons into
 * @param nodeMap - Map of nodes to their icon keys
 * @param iconData - Map of icon keys to data URIs
 * @returns Modified SVG string with icons injected
 */
export function injectIcons(svgString: string, nodeMap: NodeIconMap[], iconData: IconData): string {
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

    // Try to get position from transform attribute
    const transform = group.getAttribute("transform");

    if (transform && transform !== "null") {
      const match = transform.match(/translate\(\s*([^,\s]+)[,\s]+([^\s)]+)\s*\)/);
      if (!match) return;
      x = parseFloat(match[1]);
      y = parseFloat(match[2]);
    } else {
      const path = group.querySelector("path");
      const ellipse = group.querySelector("ellipse");
      const polygon = group.querySelector("polygon");
      const text = group.querySelector("text");

      if (!path && !ellipse && !polygon && !text) return;

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

        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);

        x = (minX + maxX) / 2;
        y = (minY + maxY) / 2;
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
   * Load all registered icons
   */
  async loadAllIcons(): Promise<void> {
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
