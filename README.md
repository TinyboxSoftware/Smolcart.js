<h1 align="center">
  <img src="https://res.cloudinary.com/tinbyox/image/upload/v1606434862/Smolcart.js/sc_logo_lightbg_withtext_kullbm.png" width="164px" alt="smolcart.js logo: a dog in a shopping cart" /><br />
</h1>
<p align="center">A 5.5kb, 0-dependency cart management library for Shopify Themes.</p>
<p align="center">
  <a href="https://www.npmjs.com/package/smolcart.js">
    <img alt="npm" src="https://img.shields.io/npm/v/smolcart.js?color=%23e3e300&style=for-the-badge" />
  </a>
  <a href="https://www.npmjs.com/package/smolcart.js">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/smolcart.js?color=%23e3e300&style=for-the-badge" />
  </a>                                                           
</p>



## Features
1. extremely lightweight (~5.5kb) ⚡
2. a simple, promise-based API for interfacing with the cart 😀
3. an optional queue system for chaining requests (WIP and will be optional) 🔗
3. automatic polyfill loading where needed thanks to [pollyfill.io](pollyfill.io) 🔮

## Getting started

Smolcart.js can be used with NPM or through a CDN; whichever best fits your workflow.   

### Install using NPM

1. open your project and run
```bash 
npm install --save smolcart.js
```
2. in the file where you'd like to use smolcart: 
```js
import { init } from 'smolcart.js'

// initialize smolcart.js, this will load polyfills if they're needed.
const cart = init();

// now you can dynamically interact with your cart!  
await cart.addItems([{id: '1234', quantity: 1]);
const cartdata = await cart.getCart();
```
3. you're good to go! more docs coming soon 

### Install using a CDN

1. open the template you'd like to add smolcart.js to
2. create a script tag that has `src` attribute pointing to the newest version of smolcart.js on a CDN (we recommend unpkg)
```html 
<script src="https://unpkg.com/smolcart.js@latest/dist/smolcart.umd.min.js" defer></script> 
``` 
3. after the script has loaded, you should be able to initialize smolcart.js: 
```js
// initialize smolcart.js, this will load polyfills if they're needed.
const cart = window.smolcart.init();

// now you can dynamically interact with your cart!  
await cart.addItems([{id: '1234', quantity: 1]);
const cartdata = await cart.getCart();
```
4. you're good to go! more docs coming soon

