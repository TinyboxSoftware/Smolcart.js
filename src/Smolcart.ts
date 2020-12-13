/* eslint-disable no-async-promise-executor */
import { ActionType, NewItem } from './types/index';
import Action from './Action';

export const loadPolyfills = (): void => {
  document.write(
    '<script src="https://polyfill.io/v3/polyfill.min.js?callback=smolPolyLoaded"></script>'
  );
};

export const addItems = (items: Array<NewItem>): Promise<Response> => {
  const action = new Action(items, ActionType.Add);
  return action.execute();
};

export const modifyItem = (item: NewItem): Promise<Response> => {
  const action = new Action([item], ActionType.Modify);
  return action.execute();
};

export const clearCart = (): Promise<Response> => {
  const action = new Action(null, ActionType.ClearCart);
  return action.execute();
};

export const getCart = (): Promise<Response> => {
  const action = new Action(null, ActionType.GetCart);
  return action.execute();
};
