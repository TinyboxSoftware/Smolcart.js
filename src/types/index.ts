declare global {
  interface Window {
    SmolPolyLoaded: unknown;
  }
}

export interface newItem {
  id: string;
  quantity?: number;
  properties?: Record<string, string>;
}
