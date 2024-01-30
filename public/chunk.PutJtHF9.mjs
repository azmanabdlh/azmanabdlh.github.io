import{r as p}from"./chunk.068npczX.mjs";var f={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=p,c=Symbol.for("react.element"),u=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,h=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,i){var t,o={},n=null,a=null;i!==void 0&&(n=""+i),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(a=r.ref);for(t in r)x.call(r,t)&&!d.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)o[t]===void 0&&(o[t]=r[t]);return{$$typeof:c,type:e,key:n,ref:a,props:o,_owner:h.current}}s.Fragment=u;s.jsx=l;s.jsxs=l;f.exports=s;var m=f.exports;function y(e){return m.jsx("h1",{className:e.className+" font-high-emphasis font-bold",children:e.text})}function E(e){return m.jsx("p",{className:e.className+" font-low-emphasis",children:e.text})}const j={HighEmphasis:y,LowEmphasis:E};export{j as T,m as j};
