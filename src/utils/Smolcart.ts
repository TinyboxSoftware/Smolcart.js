/* eslint-disable no-async-promise-executor */
import { ActionType, NewItem } from '../types/index';
import Action from './Action';
// import ActionQueue from './ActionQueue';

class Smolcart {
  // private queue: ActionQueue;

  constructor() {
    // this.queue = new ActionQueue();
    if (!window.fetch || !window.Promise) {
      // polyfill in fetch and other goodies
      window.SmolPolyLoaded = () => {
        console.info('smolcart.js has loaded some polyfills for you ✨');
      };
      document.write(
        '<script src="https://polyfill.io/v3/polyfill.min.js?callback=smolPolyLoaded"></script>'
      );
    }
  }

  addItems(items: Array<NewItem>): Promise<Response> {
    const action = new Action(items, ActionType.Add);
    return action.execute();
  }

  modifyItems(item: NewItem): Promise<Response> {
    const action = new Action([item], ActionType.Modify);
    return action.execute();
  }

  clearCart(): Promise<Response> {
    const action = new Action(null, ActionType.ClearCart);
    return action.execute();
  }

  getCart(): Promise<Response> {
    const action = new Action(null, ActionType.GetCart);
    return action.execute();
  }
}

export default Smolcart;
