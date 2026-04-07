// Type declarations for diagrams-js
// This is a stub since diagrams-js is loaded dynamically from CDN in the docs

declare module "diagrams-js" {
  export interface Diagram {
    add(node: any): any;
    cluster(label: string): any;
    render(): Promise<string>;
    destroy(): void;
  }

  export function Diagram(name: string, options?: any): Diagram;
  export function Node(label: string, options?: any): any;
  export function Custom(label: string, icon: string): any;
  export function Edge(options?: any): any;
}
