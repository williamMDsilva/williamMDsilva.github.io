(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(441)}])},8872:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let r=i(8754),l=i(1757),s=l._(i(7294)),n=i(3935),a=r._(i(2636)),o=i(5471),c=i(3735),d=i(3341);i(4210);let u=i(9955),f=r._(i(7746)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,i,r,l,s){let n=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===n)return;e["data-loaded-src"]=n;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&l(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,l=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}})}function g(e){let[t,i]=s.version.split("."),r=parseInt(t,10),l=parseInt(i,10);return r>18||18===r&&l>=3?{fetchPriority:e}:{fetchpriority:e}}let p=(0,s.forwardRef)((e,t)=>{let{src:i,srcSet:r,sizes:l,height:n,width:a,decoding:o,className:c,style:d,fetchPriority:u,placeholder:f,loading:m,unoptimized:p,fill:x,onLoadRef:v,onLoadingCompleteRef:w,setBlurComplete:b,setShowAltText:j,onLoad:y,onError:_,...N}=e;return s.default.createElement("img",{...N,...g(u),loading:m,width:a,height:n,decoding:o,"data-nimg":x?"fill":"1",className:c,style:d,sizes:l,srcSet:r,src:i,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(_&&(e.src=e.src),e.complete&&h(e,f,v,w,b,p))},[i,f,v,w,b,_,p,t]),onLoad:e=>{let t=e.currentTarget;h(t,f,v,w,b,p)},onError:e=>{j(!0),"empty"!==f&&b(!0),_&&_(e)}})});function x(e){let{isAppRouter:t,imgAttributes:i}=e,r={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...g(i.fetchPriority)};return t&&n.preload?((0,n.preload)(i.src,r),null):s.default.createElement(a.default,null,s.default.createElement("link",{key:"__nimg-"+i.src+i.srcSet+i.sizes,rel:"preload",href:i.srcSet?void 0:i.src,...r}))}let v=(0,s.forwardRef)((e,t)=>{let i=(0,s.useContext)(u.RouterContext),r=(0,s.useContext)(d.ImageConfigContext),l=(0,s.useMemo)(()=>{let e=m||r||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[r]),{onLoad:n,onLoadingComplete:a}=e,h=(0,s.useRef)(n);(0,s.useEffect)(()=>{h.current=n},[n]);let g=(0,s.useRef)(a);(0,s.useEffect)(()=>{g.current=a},[a]);let[v,w]=(0,s.useState)(!1),[b,j]=(0,s.useState)(!1),{props:y,meta:_}=(0,o.getImgProps)(e,{defaultLoader:f.default,imgConf:l,blurComplete:v,showAltText:b});return s.default.createElement(s.default.Fragment,null,s.default.createElement(p,{...y,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:w,setShowAltText:j,ref:t}),_.priority?s.default.createElement(x,{isAppRouter:!i,imgAttributes:y}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5471:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),i(4210);let r=i(7757),l=i(3735);function s(e){return void 0!==e.default}function n(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var i;let a,o,c,{src:d,sizes:u,unoptimized:f=!1,priority:m=!1,loading:h,className:g,quality:p,width:x,height:v,fill:w=!1,style:b,onLoad:j,onLoadingComplete:y,placeholder:_="empty",blurDataURL:N,fetchPriority:S,layout:z,objectFit:C,objectPosition:k,lazyBoundary:E,lazyRoot:M,...P}=e,{imgConf:I,showAltText:O,blurComplete:R,defaultLoader:D}=t,G=I||l.imageConfigDefault;if("allSizes"in G)a=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);a={...G,allSizes:e,deviceSizes:t}}let L=P.loader||D;delete P.loader,delete P.srcSet;let V="__next_img_default"in L;if(V){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:i,...r}=t;return e(r)}}if(z){"fill"===z&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!u&&(u=t)}let B="",A=n(x),F=n(v);if("object"==typeof(i=d)&&(s(i)||void 0!==i.src)){let e=s(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(o=e.blurWidth,c=e.blurHeight,N=N||e.blurDataURL,B=e.src,!w){if(A||F){if(A&&!F){let t=A/e.width;F=Math.round(e.height*t)}else if(!A&&F){let t=F/e.height;A=Math.round(e.width*t)}}else A=e.width,F=e.height}}let W=!m&&("lazy"===h||void 0===h);(!(d="string"==typeof d?d:B)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,W=!1),a.unoptimized&&(f=!0),V&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),m&&(S="high");let H=n(p),X=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:k}:{},O?{}:{color:"transparent"},b),T=R||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:A,heightInt:F,blurWidth:o,blurHeight:c,blurDataURL:N||"",objectFit:X.objectFit})+'")':'url("'+_+'")',U=T?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:T}:{},Y=function(e){let{config:t,src:i,unoptimized:r,width:l,quality:s,sizes:n,loader:a}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,i){let{deviceSizes:r,allSizes:l}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:l.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:l,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let s=[...new Set([t,2*t].map(e=>l.find(t=>t>=e)||l[l.length-1]))];return{widths:s,kind:"x"}}(t,l,n),d=o.length-1;return{sizes:n||"w"!==c?n:"100vw",srcSet:o.map((e,r)=>a({config:t,src:i,quality:s,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:a({config:t,src:i,quality:s,width:o[d]})}}({config:a,src:d,unoptimized:f,width:A,quality:H,sizes:u,loader:L}),q={...P,loading:W?"lazy":h,fetchPriority:S,width:A,height:F,decoding:"async",className:g,style:{...X,...U},sizes:Y.sizes,srcSet:Y.srcSet,src:Y.src},J={unoptimized:f,priority:m,placeholder:_,fill:w};return{props:q,meta:J}}},7757:function(e,t){"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:l,blurDataURL:s,objectFit:n}=e,a=r?40*r:t,o=l?40*l:i,c=a&&o?"viewBox='0 0 "+a+" "+o+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},2555:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return c},unstable_getImgProps:function(){return o}});let r=i(8754),l=i(5471),s=i(4210),n=i(8872),a=r._(i(7746)),o=e=>{(0,s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,l.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}},c=n.Image},7746:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:l}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(l||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},441:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return u}});var r=i(5893),l=i(952),s=i.n(l);i(5675);var n=e=>{let{boxSize:t}=e;return(0,r.jsx)("div",{className:"",children:(0,r.jsxs)("svg",{fill:"#000000",height:t,width:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 310.00 310.00",children:[(0,r.jsx)("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),(0,r.jsx)("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),(0,r.jsx)("g",{id:"SVGRepo_iconCarrier",children:(0,r.jsxs)("g",{id:"XMLID_801_",children:[(0,r.jsx)("path",{id:"XMLID_802_",d:"M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"}),(0,r.jsx)("path",{id:"XMLID_803_",d:"M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"}),(0,r.jsx)("path",{id:"XMLID_804_",d:"M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"})]})})]})})},a=e=>{let{boxSize:t}=e;return(0,r.jsx)("div",{className:"",children:(0,r.jsxs)("svg",{role:"img",height:t,width:t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("title",{children:"GitHub"}),(0,r.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})})},o=e=>{let{boxSize:t}=e;return(0,r.jsx)("div",{className:"",children:(0,r.jsxs)("svg",{role:"img",height:t,width:t,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("title",{children:"Read the Docs"}),(0,r.jsx)("path",{d:"M7.732 0a59.316 59.316 0 0 0-4.977.218V24a62.933 62.933 0 0 1 3.619-.687c.17-.028.34-.053.509-.078.215-.033.43-.066.644-.096l.205-.03zm1.18.003V22.96a61.042 61.042 0 0 1 12.333-.213V1.485A60.859 60.859 0 0 0 8.912.003zm1.707 1.81a.59.59 0 0 1 .015 0c3.06.088 6.125.404 9.167.95a.59.59 0 0 1 .476.686.59.59 0 0 1-.569.484.59.59 0 0 1-.116-.009 60.622 60.622 0 0 0-8.992-.931.59.59 0 0 1-.573-.607.59.59 0 0 1 .592-.572zm-4.212.028a.59.59 0 0 1 .578.565.59.59 0 0 1-.564.614 59.74 59.74 0 0 0-2.355.144.59.59 0 0 1-.04.002.59.59 0 0 1-.595-.542.59.59 0 0 1 .54-.635c.8-.065 1.6-.114 2.401-.148a.59.59 0 0 1 .035 0zm4.202 2.834a.59.59 0 0 1 .015 0 61.6 61.6 0 0 1 9.167.8.59.59 0 0 1 .488.677.59.59 0 0 1-.602.494.59.59 0 0 1-.076-.006 60.376 60.376 0 0 0-8.99-.786.59.59 0 0 1-.584-.596.59.59 0 0 1 .582-.583zm-4.211.097a.59.59 0 0 1 .587.555.59.59 0 0 1-.554.622c-.786.046-1.572.107-2.356.184a.59.59 0 0 1-.04.003.59.59 0 0 1-.603-.533.59.59 0 0 1 .53-.644c.8-.078 1.599-.14 2.4-.187a.59.59 0 0 1 .036 0zM10.6 7.535a.59.59 0 0 1 .015 0c3.06-.013 6.125.204 9.167.65a.59.59 0 0 1 .498.67.59.59 0 0 1-.593.504.59.59 0 0 1-.076-.006 60.142 60.142 0 0 0-8.992-.638.59.59 0 0 1-.592-.588.59.59 0 0 1 .573-.592zm1.153 2.846a61.093 61.093 0 0 1 8.02.515.59.59 0 0 1 .509.66.59.59 0 0 1-.586.514.59.59 0 0 1-.076-.005 59.982 59.982 0 0 0-8.99-.492.59.59 0 0 1-.603-.577.59.59 0 0 1 .578-.603c.382-.008.765-.012 1.148-.012zm1.139 2.832a60.92 60.92 0 0 1 6.871.394.59.59 0 0 1 .52.652.59.59 0 0 1-.577.523.59.59 0 0 1-.076-.004 59.936 59.936 0 0 0-8.991-.344.59.59 0 0 1-.61-.568.59.59 0 0 1 .567-.611c.765-.028 1.53-.042 2.296-.042z"})]})})},c=i(7294),d=e=>{let{children:t,label:i}=e,[l,s]=c.useState(!1);return(0,r.jsxs)("div",{className:"block",onMouseOver:()=>{s(!0)},onMouseOut:()=>{s(!1)},children:[t,l&&(0,r.jsx)("div",{className:"absolute bg-yellow p-3 p text-black font-black font-thin rounded-md",children:i})]})};function u(){return(0,r.jsxs)("main",{className:"bg-gradient-to-b from-blue-dark to-black",style:{overflow:"hidden"},children:[(0,r.jsxs)("div",{className:"container h-screen flex flex-col justify-between p-6 sm:p-24",children:[(0,r.jsxs)("header",{className:"flex items-stretch items-right ",children:[(0,r.jsx)("div",{className:"flex-1 grow"}),(0,r.jsx)("div",{className:"flex-1 grow ",children:(0,r.jsxs)("div",{className:"flex flex-row-reverse items-center",children:[(0,r.jsx)(d,{label:"LinkedIn",children:(0,r.jsx)("a",{href:"https://www.linkedin.com/in/williammdsilva/",className:"flex m-0.5 bg-yellow p-3 text-black font-black rounded-t-lg",target:"blank",children:(0,r.jsx)(n,{boxSize:"20px"})})}),(0,r.jsx)(d,{label:"GitHub",children:(0,r.jsx)("a",{href:"https://github.com/williamMDsilva",target:"blank",className:"flex m-0.5 bg-yellow p-3 text-black font-black rounded-t-lg",children:(0,r.jsx)(a,{boxSize:"20px"})})}),(0,r.jsx)(d,{label:"Resume",children:(0,r.jsx)("a",{href:"./resume.pdf",download:!0,className:"flex m-0.5 bg-yellow p-3 text-black font-black rounded-t-lg",children:(0,r.jsx)("div",{children:(0,r.jsx)(o,{boxSize:"20px"})})})})]})})]}),(0,r.jsxs)("section",{className:"flex flex-col justify-between items-center ".concat(s().className),children:[(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)("h1",{className:"font-bold text-2xl sm:text-7xl",children:"William Moreira da Silva"})}),(0,r.jsx)("div",{className:"flex flex-row items-left",children:(0,r.jsx)("div",{className:"flex-1 flex-grow ",children:(0,r.jsx)("div",{className:"typewriter bg-yellow ",children:(0,r.jsx)("span",{className:"sm:text-2xl font-serif tracking-widest p-2 m-1 text-black font-normal",children:"Software Engineer"})})})})]}),(0,r.jsxs)("section",{className:"space-y-2",children:[(0,r.jsx)("div",{className:"border-solid border-l-4 border-yellow p-3",children:(0,r.jsx)("span",{className:"text-3xl font-black",children:"Contacts"})}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("div",{className:"flex-1 flex-col p-2",children:(0,r.jsxs)("ul",{className:"list-outside divide-y divide-yellow text-md font-thin",children:[(0,r.jsx)("li",{className:"p-1",children:"william.moreirasilva@hotmail"}),(0,r.jsx)("li",{className:"p-1",children:"+55 (45) 9 9835 - 2261"}),(0,r.jsx)("li",{})]})}),(0,r.jsx)("div",{className:"flex-1"}),(0,r.jsx)("div",{className:"flex-1"})]})]})]}),(0,r.jsx)("footer",{className:"flex flex-col items-right",children:(0,r.jsx)("div",{className:"flex flex-col items-center bg-yellow text-black font-thin text-sm",children:(0,r.jsxs)("span",{children:["By William - ",new Date().getFullYear()]})})})]})}},952:function(e){e.exports={style:{fontFamily:"'__Inter_20951f', '__Inter_Fallback_20951f'",fontStyle:"normal"},className:"__className_20951f"}},5675:function(e,t,i){i(2555)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);