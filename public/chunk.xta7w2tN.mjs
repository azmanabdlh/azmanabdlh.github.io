import{a as p}from"./chunk.GuJJCt3W.mjs";var f={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=p(),_=Symbol.for("react.element"),c=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,h=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,i){var t,o={},n=null,a=null;i!==void 0&&(n=""+i),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(a=r.ref);for(t in r)x.call(r,t)&&!d.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)o[t]===void 0&&(o[t]=r[t]);return{$$typeof:_,type:e,key:n,ref:a,props:o,_owner:h.current}}s.Fragment=c;s.jsx=l;s.jsxs=l;f.exports=s;var m=f.exports;function y(e){return m.jsx("h1",{className:e.className+" font-high-emphasis font-bold",children:e.text})}function v(e){return m.jsx("p",{className:e.className+" font-low-emphasis",children:e.text})}const R={HighEmphasis:y,LowEmphasis:v};export{R as T,m as j};
