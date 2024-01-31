import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './public/chunk.KUEV7I4Y.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"const c=window.AudioContext||window.webkitAudioContext,t=new c,n=document.getElementById(\"btn-play-pause\"),s=document.getElementById(\"btn-play-pause__container\"),i=document.getElementById(\"btn-open\"),a=document.getElementById(\"btn-open__container\"),e=document.getElementById(\"my-player\"),d=t.createMediaElementSource(e);d.connect(t.destination);const u=document.getElementsByTagName(\"body\"),l=u[0];l.style.overflow=\"hidden\";i.addEventListener(\"click\",()=>{a.style.opacity=\"0\",a.style.zIndex=\"-10\",s.style.opacity=\"1\",s.style.zIndex=\"40\",t.state===\"suspended\"&&t.resume(),e.play(),window.scroll({top:document.getElementById(\"about\").getBoundingClientRect().top+120,behavior:\"smooth\"}),l.style.overflow=\"scroll\"});const r='<svg class=\"h-5 w-5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z\"></path></svg><span class=\"font-low-emphasis text-sm\">Play</span>',p='<svg class=\"h-5 w-5\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M6 5H8V19H6V5ZM16 5H18V19H16V5Z\"></path></svg><span class=\"font-low-emphasis text-sm\">Pause<span/>';let o=!1;n.addEventListener(\"click\",()=>{if(t.state===\"suspended\"&&t.resume(),o){o=!1,e.play(),n.innerHTML=p;return}o=!0,e.pause(),n.innerHTML=r});\n"}],"styles":[{"type":"external","src":"/public/asset.PzoAbReT.css"}],"routeData":{"route":"/wedding/[id]","type":"page","pattern":"^\\/wedding\\/([^/]+?)\\/?$","segments":[[{"content":"wedding","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/wedding/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://azmanabdlh.github.io","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/azman.abdullah/Repositories/astro/azman-wedding/src/pages/wedding/[id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:src/pages/wedding/[id]@_@astro":"pages/wedding/_id_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","/src/pages/wedding/[id].astro":"public/chunk.NLoXXJbu.mjs","\u0000@astrojs-manifest":"manifest_feVcfZY2.mjs","/Users/azman.abdullah/Repositories/astro/azman-wedding/node_modules/@astrojs/react/vnode-children.js":"public/chunk.3wEZly-Z.mjs","@templates/JumbotronInvitation":"public/entry.0Cp_TcKo.mjs","@templates/About":"public/entry.uKvVTl9q.mjs","@templates/Gift":"public/entry.OlPFqDuY.mjs","@templates/Gallery":"public/entry.IpV8PvGk.mjs","/astro/hoisted.js?q=0":"public/entry.XXh7FghX.mjs","@astrojs/react/client.js":"public/entry.VSNSeugX.mjs","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
