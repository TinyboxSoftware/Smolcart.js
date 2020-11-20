# smolcart.js 🛒
A teeny tiny ajax cart library for Shopify themes. 

![npm](https://img.shields.io/npm/v/smolcart.js?label=smolcart.js)  ![npm](https://img.shields.io/npm/dm/smolcart.js?label=downloads%2Fmonth)

## Features
1. extremely lightweight (~4.2kb - 5.5kb) ⚡
2. a simple, promise-based API for interfacing with the cart 😀
3. an optional queue system for chaining requests (WIP) 🔗
3. automatic polyfill loading where needed thanks to [pollyfill.io](pollyfill.io) 🔮

## Getting started

You can use smolcart.js through NPM or as a script tag in your Shopify theme; whichever method better fits your workflow.  

### Starting with NPM

1. open your project and run `npm i smolcart.js`
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

### Starting with `<script />` tags

1. open the template you'd like to add smolcart.js to
2. create a script tag that has src attribute set to the UMD version of smolcart.js
```html 
<script src="https://unpkg.com/smolcart.js@latest/dist/smolcart.umd.min.js" defer></script> 
``` 
3. after the script has loaded, you should be able to initialize smolcart: 
```js
// initialize smolcart.js, this will load polyfills if they're needed.
const cart = window.smolcart.init();

// now you can dynamically interact with your cart!  
await cart.addItems([{id: '1234', quantity: 1]);
const cartdata = await cart.getCart();
```
4. you're good to go! more docs coming soon

## Goals
A functional javascript wrapper for Shopify's cart API that is lightweight, and has no dependencies (besides fetch, and other es6 polyfills)

