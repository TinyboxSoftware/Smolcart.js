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

export enum ActionType {
  Add = 'ADD',
  Modify = 'MODIFY',
  GetCart = 'GET_CART',
  ClearCart = 'CLEAR_CART',
}
