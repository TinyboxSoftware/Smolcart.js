declare global {
  interface Window {
    SmolCart: unknown;
    SmolPolyLoaded: unknown;
  }
}

export interface newItem {
  id: string;
  quantity?: number;
  properties?: Record<string, string>;
}
