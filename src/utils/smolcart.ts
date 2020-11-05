import { newItem } from '../types/index';

class Smolcart {
  public isInit: boolean;

  constructor() {
    if (!window.fetch || !window.Promise) {
      // polyfill in fetch and other goodies
      window.SmolPolyLoaded = () => {
        console.info('smolcart.js has loaded some polyfills for you ✨');
        this.isInit = true;
      };
      document.write(
        '<script src="https://polyfill.io/v3/polyfill.min.js?callback=smolPolyLoaded"></script>'
      );
    } else {
      this.isInit = true;
    }
  }

  addToCart(items: Array<newItem>): Promise<Response> {
    return new Promise(async (resolve, reject) => {
      try {
        if (!this.isInit)
          throw new Error(
            `Smolcart.js hasn't been initialized... please wait.`
          ); // TODO make a queue to handle waiting requests
        const res = await fetch(`/cart/add.js`, {
          method: 'POST',
          body: JSON.stringify({
            items: items.map((item) => ({
              id: item.id,
              quantity: item.quantity || 1,
              properties: item.properties ? { ...item.properties } : undefined,
            })),
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (res.status >= 400 && res.status < 600) {
          throw new Error(res.toString());
        } else {
          return resolve(res);
        }
      } catch (e) {
        return reject(e);
      }
    });
  }

  clearCart(): Promise<Response> {
    // TODO clear cart items
    return new Promise(async (resolve, reject) => {
      try {
        if (!this.isInit)
          throw new Error(
            `Smolcart.js hasn't been initialized... please wait.`
          ); // TODO make a queue to handle waiting requests
        const data = await fetch(`/cart/clear.js`, { method: 'POST' });
        const res = await data.json();
        return resolve(res);
      } catch (err) {
        return reject(err);
      }
    });
  }

  getCart(): Promise<Response> {
    // TODO return a cart object for user reference
    return new Promise(async (resolve, reject) => {
      try {
        if (!this.isInit)
          throw new Error(
            `Smolcart.js hasn't been initialized... please wait.`
          ); // TODO make a queue to handle waiting requests
        const data = await fetch(`/cart.js`);
        const res = await data.json();
        return resolve(res);
      } catch (err) {
        return reject(err);
      }
    });
  }
}

export default Smolcart;
