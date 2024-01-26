import{j as f,T as w}from"./chunk.MUL3Jpvz.mjs";import{a as wt,r as T}from"./chunk.BcG1iDGa.mjs";var jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ot(O){return O&&O.__esModule&&Object.prototype.hasOwnProperty.call(O,"default")?O.default:O}var ct={exports:{}};(function(O,N){(function(E,j){O.exports=j(wt())})(typeof self<"u"?self:jt,function(E){return function(j){var P={};function v(l){if(P[l])return P[l].exports;var t=P[l]={i:l,l:!1,exports:{}};return j[l].call(t.exports,t,t.exports,v),t.l=!0,t.exports}return v.m=j,v.c=P,v.d=function(l,t,e){v.o(l,t)||Object.defineProperty(l,t,{enumerable:!0,get:e})},v.r=function(l){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},v.t=function(l,t){if(1&t&&(l=v(l)),8&t||4&t&&typeof l=="object"&&l&&l.__esModule)return l;var e=Object.create(null);if(v.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:l}),2&t&&typeof l!="string")for(var c in l)v.d(e,c,function(a){return l[a]}.bind(null,c));return e},v.n=function(l){var t=l&&l.__esModule?function(){return l.default}:function(){return l};return v.d(t,"a",t),t},v.o=function(l,t){return Object.prototype.hasOwnProperty.call(l,t)},v.p="",v(v.s=2)}([function(j,P){j.exports=E},function(j,P,v){var l={linear:function(t,e,c,a){return(c-e)*t/a+e},easeInQuad:function(t,e,c,a){return(c-e)*(t/=a)*t+e},easeOutQuad:function(t,e,c,a){return-(c-e)*(t/=a)*(t-2)+e},easeInOutQuad:function(t,e,c,a){var s=c-e;return(t/=a/2)<1?s/2*t*t+e:-s/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,c,a){return(c-e)*(t/=a)*t*t+e},easeOutCubic:function(t,e,c,a){return(c-e)*((t=t/a-1)*t*t+1)+e},easeInOutCubic:function(t,e,c,a){var s=c-e;return(t/=a/2)<1?s/2*t*t*t+e:s/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,c,a){return(c-e)*(t/=a)*t*t*t+e},easeOutQuart:function(t,e,c,a){return-(c-e)*((t=t/a-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,c,a){var s=c-e;return(t/=a/2)<1?s/2*t*t*t*t+e:-s/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,c,a){return(c-e)*(t/=a)*t*t*t*t+e},easeOutQuint:function(t,e,c,a){return(c-e)*((t=t/a-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,c,a){var s=c-e;return(t/=a/2)<1?s/2*t*t*t*t*t+e:s/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,c,a){var s=c-e;return-s*Math.cos(t/a*(Math.PI/2))+s+e},easeOutSine:function(t,e,c,a){return(c-e)*Math.sin(t/a*(Math.PI/2))+e},easeInOutSine:function(t,e,c,a){return-(c-e)/2*(Math.cos(Math.PI*t/a)-1)+e},easeInExpo:function(t,e,c,a){return t==0?e:(c-e)*Math.pow(2,10*(t/a-1))+e},easeOutExpo:function(t,e,c,a){var s=c-e;return t==a?e+s:s*(1-Math.pow(2,-10*t/a))+e},easeInOutExpo:function(t,e,c,a){var s=c-e;return t===0?e:t===a?e+s:(t/=a/2)<1?s/2*Math.pow(2,10*(t-1))+e:s/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,c,a){return-(c-e)*(Math.sqrt(1-(t/=a)*t)-1)+e},easeOutCirc:function(t,e,c,a){return(c-e)*Math.sqrt(1-(t=t/a-1)*t)+e},easeInOutCirc:function(t,e,c,a){var s=c-e;return(t/=a/2)<1?-s/2*(Math.sqrt(1-t*t)-1)+e:s/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,c,a){var s,p,g,d=c-e;return g=1.70158,t===0?e:(t/=a)==1?e+d:((p=0)||(p=.3*a),(s=d)<Math.abs(d)?(s=d,g=p/4):g=p/(2*Math.PI)*Math.asin(d/s),-s*Math.pow(2,10*(t-=1))*Math.sin((t*a-g)*(2*Math.PI)/p)+e)},easeOutElastic:function(t,e,c,a){var s,p,g,d=c-e;return g=1.70158,t===0?e:(t/=a)==1?e+d:((p=0)||(p=.3*a),(s=d)<Math.abs(d)?(s=d,g=p/4):g=p/(2*Math.PI)*Math.asin(d/s),s*Math.pow(2,-10*t)*Math.sin((t*a-g)*(2*Math.PI)/p)+d+e)},easeInOutElastic:function(t,e,c,a){var s,p,g,d=c-e;return g=1.70158,t===0?e:(t/=a/2)==2?e+d:((p=0)||(p=a*.44999999999999996),(s=d)<Math.abs(d)?(s=d,g=p/4):g=p/(2*Math.PI)*Math.asin(d/s),t<1?s*Math.pow(2,10*(t-=1))*Math.sin((t*a-g)*(2*Math.PI)/p)*-.5+e:s*Math.pow(2,-10*(t-=1))*Math.sin((t*a-g)*(2*Math.PI)/p)*.5+d+e)},easeInBack:function(t,e,c,a,s){return s===void 0&&(s=1.70158),(c-e)*(t/=a)*t*((s+1)*t-s)+e},easeOutBack:function(t,e,c,a,s){return s===void 0&&(s=1.70158),(c-e)*((t=t/a-1)*t*((s+1)*t+s)+1)+e},easeInOutBack:function(t,e,c,a,s){var p=c-e;return s===void 0&&(s=1.70158),(t/=a/2)<1?p/2*(t*t*((1+(s*=1.525))*t-s))+e:p/2*((t-=2)*t*((1+(s*=1.525))*t+s)+2)+e},easeInBounce:function(t,e,c,a){var s=c-e;return s-l.easeOutBounce(a-t,0,s,a)+e},easeOutBounce:function(t,e,c,a){var s=c-e;return(t/=a)<.36363636363636365?s*(7.5625*t*t)+e:t<.7272727272727273?s*(7.5625*(t-=.5454545454545454)*t+.75)+e:t<.9090909090909091?s*(7.5625*(t-=.8181818181818182)*t+.9375)+e:s*(7.5625*(t-=.9545454545454546)*t+.984375)+e},easeInOutBounce:function(t,e,c,a){var s=c-e;return t<a/2?.5*l.easeInBounce(2*t,0,s,a)+e:.5*l.easeOutBounce(2*t-a,0,s,a)+.5*s+e}};j.exports=l},function(j,P,v){j.exports=v(3)},function(j,P,v){v.r(P),v.d(P,"ReactConfetti",function(){return rt});var l,t,e=v(0),c=v.n(e),a=v(1),s=v.n(a);function p(n,i){return n+Math.random()*(i-n)}function g(n,i){for(var o=0;o<i.length;o++){var r=i[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function d(n,i,o){return i in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o,n}(function(n){n[n.Circle=0]="Circle",n[n.Square=1]="Square",n[n.Strip=2]="Strip"})(l||(l={})),function(n){n[n.Positive=1]="Positive",n[n.Negative=-1]="Negative"}(t||(t={}));var ut=function(){function n(r,m,u,h){(function(Y,Z){if(!(Y instanceof Z))throw new TypeError("Cannot call a class as a function")})(this,n),d(this,"context",void 0),d(this,"radius",void 0),d(this,"x",void 0),d(this,"y",void 0),d(this,"w",void 0),d(this,"h",void 0),d(this,"vx",void 0),d(this,"vy",void 0),d(this,"shape",void 0),d(this,"angle",void 0),d(this,"angularSpin",void 0),d(this,"color",void 0),d(this,"rotateY",void 0),d(this,"rotationDirection",void 0),d(this,"getOptions",void 0),this.getOptions=m;var b,y,x=this.getOptions(),I=x.colors,S=x.initialVelocityX,M=x.initialVelocityY;this.context=r,this.x=u,this.y=h,this.w=p(5,20),this.h=p(5,20),this.radius=p(5,10),this.vx=typeof S=="number"?p(-S,S):p(S.min,S.max),this.vy=typeof M=="number"?p(-M,0):p(M.min,M.max),this.shape=(b=0,y=2,Math.floor(b+Math.random()*(y-b+1))),this.angle=p(0,360)*Math.PI/180,this.angularSpin=p(-.2,.2),this.color=I[Math.floor(Math.random()*I.length)],this.rotateY=p(0,1),this.rotationDirection=p(0,1)?t.Positive:t.Negative}var i,o;return i=n,(o=[{key:"update",value:function(){var r=this.getOptions(),m=r.gravity,u=r.wind,h=r.friction,b=r.opacity,y=r.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=m,this.vx+=u,this.vx*=h,this.vy*=h,this.rotateY>=1&&this.rotationDirection===t.Positive?this.rotationDirection=t.Negative:this.rotateY<=-1&&this.rotationDirection===t.Negative&&(this.rotationDirection=t.Positive);var x=.1*this.rotationDirection;if(this.rotateY+=x,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=b,this.context.lineCap="round",this.context.lineWidth=2,y&&typeof y=="function")y.call(this,this.context);else switch(this.shape){case l.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case l.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case l.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}])&&g(i.prototype,o),n}();function C(n,i,o){return i in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o,n}var lt=function n(i,o){var r=this;(function(u,h){if(!(u instanceof h))throw new TypeError("Cannot call a class as a function")})(this,n),C(this,"canvas",void 0),C(this,"context",void 0),C(this,"getOptions",void 0),C(this,"x",0),C(this,"y",0),C(this,"w",0),C(this,"h",0),C(this,"lastNumberOfPieces",0),C(this,"tweenInitTime",Date.now()),C(this,"particles",[]),C(this,"particlesGenerated",0),C(this,"removeParticleAt",function(u){r.particles.splice(u,1)}),C(this,"getParticle",function(){var u=p(r.x,r.w+r.x),h=p(r.y,r.h+r.y);return new ut(r.context,r.getOptions,u,h)}),C(this,"animate",function(){var u=r.canvas,h=r.context,b=r.particlesGenerated,y=r.lastNumberOfPieces,x=r.getOptions(),I=x.run,S=x.recycle,M=x.numberOfPieces,Y=x.debug,Z=x.tweenFunction,z=x.tweenDuration;if(!I)return!1;var W=r.particles.length,D=S?W:b,K=Date.now();if(D<M){y!==M&&(r.tweenInitTime=K,r.lastNumberOfPieces=M);for(var it=r.tweenInitTime,gt=Z(K-it>z?z:Math.max(0,K-it),D,M,z),ot=Math.round(gt-D),at=0;at<ot;at++)r.particles.push(r.getParticle());r.particlesGenerated+=ot}return Y&&(h.font="12px sans-serif",h.fillStyle="#333",h.textAlign="right",h.fillText("Particles: ".concat(W),u.width-10,u.height-20)),r.particles.forEach(function(_,st){_.update(),(_.y>u.height||_.y<-100||_.x>u.width+100||_.x<-100)&&(S&&D<=M?r.particles[st]=r.getParticle():r.removeParticleAt(st))}),W>0||D<M}),this.canvas=i;var m=this.canvas.getContext("2d");if(!m)throw new Error("Could not get canvas context");this.context=m,this.getOptions=o};function J(n,i){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);i&&(r=r.filter(function(m){return Object.getOwnPropertyDescriptor(n,m).enumerable})),o.push.apply(o,r)}return o}function A(n){for(var i=1;i<arguments.length;i++){var o=arguments[i]!=null?arguments[i]:{};i%2?J(Object(o),!0).forEach(function(r){k(n,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):J(Object(o)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(o,r))})}return n}function ft(n,i){for(var o=0;o<i.length;o++){var r=i[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function k(n,i,o){return i in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o,n}var R={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:s.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},ht=function(){function n(r,m){var u=this;(function(b,y){if(!(b instanceof y))throw new TypeError("Cannot call a class as a function")})(this,n),k(this,"canvas",void 0),k(this,"context",void 0),k(this,"_options",void 0),k(this,"generator",void 0),k(this,"rafId",void 0),k(this,"setOptionsWithDefaults",function(b){var y={confettiSource:{x:0,y:0,w:u.canvas.width,h:0}};u._options=A(A(A({},y),R),b),Object.assign(u,b.confettiSource)}),k(this,"update",function(){var b=u.options,y=b.run,x=b.onConfettiComplete,I=u.canvas,S=u.context;y&&(S.fillStyle="white",S.clearRect(0,0,I.width,I.height)),u.generator.animate()?u.rafId=requestAnimationFrame(u.update):(x&&typeof x=="function"&&u.generator.particlesGenerated>0&&x.call(u,u),u._options.run=!1)}),k(this,"reset",function(){u.generator&&u.generator.particlesGenerated>0&&(u.generator.particlesGenerated=0,u.generator.particles=[],u.generator.lastNumberOfPieces=0)}),k(this,"stop",function(){u.options={run:!1},u.rafId&&(cancelAnimationFrame(u.rafId),u.rafId=void 0)}),this.canvas=r;var h=this.canvas.getContext("2d");if(!h)throw new Error("Could not get canvas context");this.context=h,this.generator=new lt(this.canvas,function(){return u.options}),this.options=m,this.update()}var i,o;return i=n,(o=[{key:"options",get:function(){return this._options},set:function(r){var m=this._options&&this._options.run,u=this._options&&this._options.recycle;this.setOptionsWithDefaults(r),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof r.recycle=="boolean"&&r.recycle&&u===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof r.run=="boolean"&&r.run&&m===!1&&this.update()}}])&&ft(i.prototype,o),n}();function pt(n){return function(i){if(Array.isArray(i))return F(i)}(n)||function(i){if(typeof Symbol<"u"&&Symbol.iterator in Object(i))return Array.from(i)}(n)||et(n)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function X(n){return(X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(n)}function B(){return(B=Object.assign||function(n){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n[r]=o[r])}return n}).apply(this,arguments)}function $(n,i){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);i&&(r=r.filter(function(m){return Object.getOwnPropertyDescriptor(n,m).enumerable})),o.push.apply(o,r)}return o}function tt(n){for(var i=1;i<arguments.length;i++){var o=arguments[i]!=null?arguments[i]:{};i%2?$(Object(o),!0).forEach(function(r){L(n,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):$(Object(o)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(o,r))})}return n}function dt(n,i){return function(o){if(Array.isArray(o))return o}(n)||function(o,r){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(o)))){var m=[],u=!0,h=!1,b=void 0;try{for(var y,x=o[Symbol.iterator]();!(u=(y=x.next()).done)&&(m.push(y.value),!r||m.length!==r);u=!0);}catch(I){h=!0,b=I}finally{try{u||x.return==null||x.return()}finally{if(h)throw b}}return m}}(n,i)||et(n,i)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function et(n,i){if(n){if(typeof n=="string")return F(n,i);var o=Object.prototype.toString.call(n).slice(8,-1);return o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set"?Array.from(n):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?F(n,i):void 0}}function F(n,i){(i==null||i>n.length)&&(i=n.length);for(var o=0,r=new Array(i);o<i;o++)r[o]=n[o];return r}function mt(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function vt(n,i){for(var o=0;o<i.length;o++){var r=i[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function nt(n,i){return(nt=Object.setPrototypeOf||function(o,r){return o.__proto__=r,o})(n,i)}function bt(n){var i=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var o,r=q(n);if(i){var m=q(this).constructor;o=Reflect.construct(r,arguments,m)}else o=r.apply(this,arguments);return xt(this,o)}}function xt(n,i){return!i||X(i)!=="object"&&typeof i!="function"?Q(n):i}function Q(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function q(n){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)})(n)}function L(n,i,o){return i in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o,n}var yt=c.a.createRef(),G=function(n){(function(u,h){if(typeof h!="function"&&h!==null)throw new TypeError("Super expression must either be null or a function");u.prototype=Object.create(h&&h.prototype,{constructor:{value:u,writable:!0,configurable:!0}}),h&&nt(u,h)})(m,n);var i,o,r=bt(m);function m(u){var h;mt(this,m);for(var b=arguments.length,y=new Array(b>1?b-1:0),x=1;x<b;x++)y[x-1]=arguments[x];return L(Q(h=r.call.apply(r,[this,u].concat(y))),"canvas",c.a.createRef()),L(Q(h),"confetti",void 0),h.canvas=u.canvasRef||yt,h}return i=m,(o=[{key:"componentDidMount",value:function(){if(this.canvas.current){var u=V(this.props)[0];this.confetti=new ht(this.canvas.current,u)}}},{key:"componentDidUpdate",value:function(){var u=V(this.props)[0];this.confetti&&(this.confetti.options=u)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var u=dt(V(this.props),2),h=u[0],b=u[1],y=tt({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},b.style);return c.a.createElement("canvas",B({width:h.width,height:h.height,ref:this.canvas},b,{style:y}))}}])&&vt(i.prototype,o),m}(e.Component);function V(n){var i={},o={},r=[].concat(pt(Object.keys(R)),["confettiSource","drawShape","onConfettiComplete"]),m=["canvasRef"];for(var u in n){var h=n[u];r.includes(u)?i[u]=h:m.includes(u)?m[u]=h:o[u]=h}return[i,o,{}]}L(G,"defaultProps",tt({},R)),L(G,"displayName","ReactConfetti");var rt=c.a.forwardRef(function(n,i){return c.a.createElement(G,B({canvasRef:i},n))});P.default=rt}]).default})})(ct);var Pt=ct.exports;const Ct=Ot(Pt),St="/public/asset.N9N-NnzQ.mp4",Mt="/public/asset.WllUv9eb.mp4",kt="/public/asset.DOcANFy0.mp4",It={src:"/public/asset.P1lEkLu3.webp",width:2048,height:1500,format:"webp"},U=["Dompet Kartu","ToteBag Lipat","Hijab","Taplak Meja"];function Nt(O){const[N,E]=T.useState("?"),[j,P]=T.useState(!1),v=()=>{const t=setInterval(()=>{const e=Math.floor(Math.random()*U.length);E(U[e]),setTimeout(()=>{P(!0),clearInterval(t)},5e3)},100)};T.useEffect(()=>{if(j){const t={value:N,completed:!0};localStorage.setItem("gift",JSON.stringify(t))}},[j]),T.useEffect(()=>{const t=localStorage.getItem("gift");if(t!=""){const e=JSON.parse(t);e?.completed&&E(e.value)}},[]);const l=N!=""&&N!="?";return O.isShow?f.jsxs("div",{className:"fixed bg-white top-0 bottom-0 left-0 right-0 z-40 flex flex-col justify-center items-center transition-all",children:[f.jsx("button",{onClick:O.onClose,className:"fixed top-10 right-10 md:right-20 bg-gray-200 rounded-full p-2 hover:bg-gray-400",children:f.jsx("svg",{className:"h-7 w-7",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"})})}),j?f.jsx(Ct,{onConfettiComplete:()=>P(!1),width:1200,height:1e3}):null,f.jsxs("div",{className:"bg-white w-full h-1/2 p-10 md:rounded-md flex flex-col justify-center items-center",children:[f.jsx(w.LowEmphasis,{text:"Dapatkan Souvenir Pernikahan",className:"!font-lexend !font-semibold text-orange-950 text-xl"}),f.jsx(w.LowEmphasis,{text:"1/"+U.length,className:"!font-lexend mb-1 mt-5"}),f.jsx(w.LowEmphasis,{text:N,className:"!font-lexend !font-semibold text-orange-900 text-2xl"}),f.jsx(w.LowEmphasis,{className:"my-5 text-sm",text:"Hadiah akan dipilih secara acak"}),f.jsxs("button",{onClick:v,disabled:l,className:l?"bg-gray-400 cursor-not-allowed flex justify-center items-center border-b-gray-500 text-white px-5 py-2 rounded-md !font-lexend border-b-4":"bg-orange-400 flex justify-center items-center border-b-orange-500 text-white px-5 py-2 rounded-md !font-lexend border-b-4 hover:bg-orange-500",children:[f.jsx("span",{className:"block",children:"Pilih acak"}),f.jsx("span",{className:"ml-1 block",children:f.jsx("svg",{className:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",children:f.jsx("path",{d:"M11.9995 2C12.5518 2 12.9995 2.44772 12.9995 3V6C12.9995 6.55228 12.5518 7 11.9995 7C11.4472 7 10.9995 6.55228 10.9995 6V3C10.9995 2.44772 11.4472 2 11.9995 2ZM11.9995 17C12.5518 17 12.9995 17.4477 12.9995 18V21C12.9995 21.5523 12.5518 22 11.9995 22C11.4472 22 10.9995 21.5523 10.9995 21V18C10.9995 17.4477 11.4472 17 11.9995 17ZM20.6597 7C20.9359 7.47829 20.772 8.08988 20.2937 8.36602L17.6956 9.86602C17.2173 10.1422 16.6057 9.97829 16.3296 9.5C16.0535 9.02171 16.2173 8.41012 16.6956 8.13398L19.2937 6.63397C19.772 6.35783 20.3836 6.52171 20.6597 7ZM7.66935 14.5C7.94549 14.9783 7.78161 15.5899 7.30332 15.866L4.70525 17.366C4.22695 17.6422 3.61536 17.4783 3.33922 17C3.06308 16.5217 3.22695 15.9101 3.70525 15.634L6.30332 14.134C6.78161 13.8578 7.3932 14.0217 7.66935 14.5ZM20.6597 17C20.3836 17.4783 19.772 17.6422 19.2937 17.366L16.6956 15.866C16.2173 15.5899 16.0535 14.9783 16.3296 14.5C16.6057 14.0217 17.2173 13.8578 17.6956 14.134L20.2937 15.634C20.772 15.9101 20.9359 16.5217 20.6597 17ZM7.66935 9.5C7.3932 9.97829 6.78161 10.1422 6.30332 9.86602L3.70525 8.36602C3.22695 8.08988 3.06308 7.47829 3.33922 7C3.61536 6.52171 4.22695 6.35783 4.70525 6.63397L7.30332 8.13398C7.78161 8.41012 7.94549 9.02171 7.66935 9.5Z"})})})]})]})]}):""}function Dt(){const[O,N]=T.useState(!1);return f.jsxs("section",{className:"bg-orange-50 px-5 py-10 md:px-0 relative",children:[f.jsx(Nt,{isShow:O,onClose:()=>N(!1)}),f.jsx("div",{className:"bg-no-repeat bg-cover blur-sm absolute top-0 bottom-0 left-0 right-0 z-0",style:{backgroundImage:`url(${It.src})`}}),f.jsxs("div",{className:"md:w-3/4 md:mx-auto w-full mx-auto text-center relative z-20",children:[f.jsx(w.LowEmphasis,{className:"!font-lexend !font-semibold text-center text-orange-950 text-2xl",text:"Dapatkan Souvenir Pernikahan"}),f.jsx(w.LowEmphasis,{className:"text-indigo-950 mt-2 mb-5",text:"Terimakasih telah berkenan menerima souvenir pernikahan kami"}),f.jsx("button",{onClick:()=>N(!0),type:"submit",className:"bg-orange-500 border-b-2 border-b-orange-600 hover:border-b-orange-800 text-white px-5 py-2 font-lexend rounded-md hover:bg-orange-600 shadow-sm",children:"Klaim Souvenir"})]}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 mt-10 w-3/4 mx-auto relative z-20",children:[f.jsxs(H,{children:[f.jsx("video",{loop:!0,autoPlay:!0,className:"w-52",muted:!0,children:f.jsx("source",{type:"video/mp4",src:St})}),f.jsx(w.LowEmphasis,{className:"text-2xl !font-semibold mb-1 !font-lexend",text:"1"}),f.jsx(w.LowEmphasis,{className:"text-gray-800 !font-lexend",text:"Klaim Souvenir"}),f.jsx(w.LowEmphasis,{className:"text-gray-800 text-center text-sm",text:"Tekan Klaim Souvenir"})]}),f.jsxs(H,{children:[f.jsx("video",{loop:!0,autoPlay:!0,className:"w-52",muted:!0,children:f.jsx("source",{type:"video/mp4",src:Mt})}),f.jsx(w.LowEmphasis,{className:"text-2xl !font-semibold mb-1 !font-lexend",text:"2"}),f.jsx(w.LowEmphasis,{className:"text-gray-800 !font-lexend",text:"Memerika Souvenir Anda"}),f.jsx(w.LowEmphasis,{className:"text-gray-800 text-center text-sm",text:"Tunggu sebentar kami menyiapkan souvenir menarik untuk kamu"})]}),f.jsxs(H,{children:[f.jsx("video",{loop:!0,autoPlay:!0,className:"w-52",muted:!0,children:f.jsx("source",{type:"video/mp4",src:kt})}),f.jsx(w.LowEmphasis,{className:"text-2xl !font-semibold mb-1 !font-lexend",text:"3"}),f.jsx(w.LowEmphasis,{className:"text-gray-800 !font-lexend",text:"Dapatkan Souvenir"}),f.jsx(w.LowEmphasis,{className:"text-gray-800 text-center text-sm",text:"Terimakasih, jangan lupa screenshot souvenir untuk ditunjukan saat kamu tiba di tempat"})]})]}),f.jsx("div",{className:"mt-5",children:f.jsx(w.LowEmphasis,{className:"text-center text-xs text-gray-600",text:"Mohon maaf jika terjadi ketidaksengajaan kerusakan produk yang kamu terima."})})]})}function H(O){return f.jsx("div",{className:"bg-white flex flex-col p-5 items-center rounded-md shadow-sm border border-gray-200",children:O.children})}export{Dt as default};
