import{j as e,T as a}from"./chunk.xta7w2tN.mjs";import{r as d}from"./chunk.GuJJCt3W.mjs";/* empty css               */function E(t){const[s,n]=d.useState({days:0,hours:0,min:0,sec:0}),[o,c]=d.useState(!1),m=r=>{const u=new Date().getTime(),l=r.getTime()-u;if(!(l<=0)){const h=Math.floor(l/864e5),f=Math.floor(l%(1e3*60*60*24)/(1e3*60*60)),w=Math.floor(l%(1e3*60*60)/(1e3*60)),j=Math.floor(l%(1e3*60)/1e3);n({days:h,hours:f,min:w,sec:j});return}c(!0)};return d.useEffect(()=>{const r=setInterval(()=>{m(t)},1e3);return()=>clearInterval(r)}),{countdown:s,isEnded:o}}const x="Hari",N="Rahasia",p=new Date({BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:"https://azmanabdlh.github.io",ASSETS_PREFIX:void 0}.PUBILC_INVITATION_DATE??"2024-02-05 07:00:00");function C(t){return e.jsxs("section",{className:"relative overflow-hidden",children:[e.jsx("div",{className:"placeholder_flower-ltr"}),e.jsx("div",{className:"placeholder_flower-rtl"}),e.jsxs("div",{className:"jumbotron min-h-screen bg-gray-200 flex-col flex items-center justify-evenly",children:[e.jsx("div",{className:"placeholder_brid"}),e.jsxs("div",{className:"z-10",children:[e.jsx(a.HighEmphasis,{className:"text-yellow-100 text-xl drop-shadow-md",text:"The Wedding Of"}),e.jsxs("div",{className:"mb-5 mt-3 relative",children:[e.jsx(a.HighEmphasis,{className:"text-yellow-500  font-bold text-5xl md:text-8xl drop-shadow-lg text-border-white md:drop-shadow-sm",text:"Mutia"}),e.jsx(a.HighEmphasis,{className:"text-xl text-right text-yellow-100 block absolute left-10 drop-shadow-md",text:"and"}),e.jsx(a.HighEmphasis,{className:"text-yellow-500  font-bold text-7xl md:text-8xl text-right text-border-white ml-20 drop-shadow-lg",text:"Azman"})]})]}),e.jsx(g,{name:t.name})]})]})}function g(t){const[s,n]=d.useState(!1),o=()=>{n(!0)};return e.jsxs("div",{className:"flex w-full justify-between items-center z-10 flex-col",children:[e.jsxs("div",{className:"md:w-1/2 lg:w-1/3 mx-5 md:mr-0",children:[e.jsx(a.LowEmphasis,{className:"block text-sm text-center md:text-left !font-lexend !font-medium text-indigo-950",text:"Turut Mengundang"}),e.jsx(a.LowEmphasis,{className:"text-3xl text-center md:text-left my-3 text-indigo-900 font-bold !font-lexend",text:t.name}),e.jsx(a.LowEmphasis,{className:"leading-7 text-center md:text-left text-md md:text-lg text-indigo-950",text:"Merupakan kehormatan bapak/ibu dapat hadir dalam pernikahan putra-putri kami yang akan berlangsung pada."})]}),s?e.jsx(v,{className:"mt-5"}):e.jsx(S,{className:"flex mt-5",onCountdownEnded:o,endAt:p})]})}function v(t){return e.jsxs("div",{className:"mouse_scroll "+t.className,children:[e.jsx("div",{className:"mouse",children:e.jsx("div",{className:"wheel"})}),e.jsxs("div",{children:[e.jsx("span",{className:"m_scroll_arrows unu"}),e.jsx("span",{className:"m_scroll_arrows doi"}),e.jsx("span",{className:"m_scroll_arrows trei"})]})]})}function S(t){const{countdown:s,isEnded:n}=E(t.endAt);return d.useEffect(()=>{n&&t.onCountdownEnded()},[n]),e.jsxs("div",{className:"countdown flex flex-row "+t?.className,children:[e.jsx(i,{value:s.days,labelText:"Hari"}),e.jsx(i,{value:s.hours,labelText:"Jam"}),e.jsx(i,{value:s.min,labelText:"Menit"}),e.jsx(i,{value:s.sec,labelText:"Detik"})]})}function i({value:t,labelText:s}){let n=t>0?t.toString():"0"+t.toString();const o={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,SITE:"https://azmanabdlh.github.io",ASSETS_PREFIX:void 0}.PUBLIC_IS_TEST??!1;return o&&s==x&&(n=N),e.jsxs("div",{className:"flex flex-col justify-center items-center",children:[e.jsx("div",{className:"bg-yellow-500 rounded-md m-2  h-16 flex justify-center items-center shadow-sm "+(o&&s==x?"px-5":"w-16"),children:e.jsx(a.LowEmphasis,{className:"text-white text-2xl !font-lexend",text:n})}),e.jsx(a.LowEmphasis,{className:"text-gray-800 text-lg",text:s})]})}export{C as default};
