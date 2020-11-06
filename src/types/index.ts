declare global {
  interface Window {
    SmolCart: unknown;
    SmolPolyLoaded: unknown;
  }
}

export interface NewItem {
  id: string;
  quantity?: number;
  properties?: Record<string, string>;
}
