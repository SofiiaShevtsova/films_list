!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var t={},i={},n=e.parcelRequire7b2f;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequire7b2f=n),n.register("7rQOT",(function(t,i){var n,a;n=void 0!==e?e:"undefined"!=typeof window?window:t.exports,a=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,i="Standard",n="Hourglass",a="Circle",o="Arrows",s="Dots",r="Pulse",l="Custom",c="Notiflix",m={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},f=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},d=function(t){return t||(t="head"),null!==e.document[t]||(f('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},g=function(){var e={},t=!1,i=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],i++);for(var n=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t&&"[object Object]"===Object.prototype.toString.call(i[n])?e[n]=g(e[n],i[n]):e[n]=i[n])};i<arguments.length;i++)n(arguments[i]);return e},u=function(t){var i=e.document.createElement("div");return i.innerHTML=t,i.textContent||i.innerText||""},h=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},p=function(c,h,p,k,w){if(!d("body"))return!1;t||b.Loading.init({});var y=g(!0,t,{});if("object"==typeof h&&!Array.isArray(h)||"object"==typeof p&&!Array.isArray(p)){var x={};"object"==typeof h?x=h:"object"==typeof p&&(x=p),t=g(!0,t,x)}var v,L,N="";if("string"==typeof h&&h.length>0&&(N=h),k){var S="";(N=N.length>t.messageMaxLength?u(N).toString().substring(0,t.messageMaxLength)+"...":u(N).toString()).length>0&&(S='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+N+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var C="";if(c===i)v=t.svgSize,L=t.svgColor,v||(v="60px"),L||(L="#32c682"),C='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+L+'" width="'+v+'" height="'+v+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(c===n)C=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(t.svgSize,t.svgColor);else if(c===a)C=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(t.svgSize,t.svgColor);else if(c===o)C=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(t.svgSize,t.svgColor);else if(c===s)C=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===r)C=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===l&&null!==t.customSvgCode&&null===t.customSvgUrl)C=t.customSvgCode||"";else if(c===l&&null!==t.customSvgUrl&&null===t.customSvgCode)C='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(c===l&&(null===t.customSvgUrl||null===t.customSvgCode))return f('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;C=function(e,t,i){return e||(e="60px"),t||(t="#f8f8f8"),i||(i="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+i+'" stroke="'+i+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(t.svgSize,"#f8f8f8","#32c682")}var T=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),z=e.innerWidth,A=T>=z?z-40+"px":T+"px",M='<div style="width:'+A+"; height:"+A+';" class="'+t.className+"-icon"+(N.length>0?" nx-with-message":"")+'">'+C+"</div>",E=e.document.createElement("div");E.id=m.ID,E.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),E.style.zIndex=t.zindex,E.style.background=t.backgroundColor,E.style.animationDuration=t.cssAnimationDuration+"ms",E.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',E.style.display="flex",E.style.flexWrap="wrap",E.style.flexDirection="column",E.style.alignItems="center",E.style.justifyContent="center",t.rtl&&(E.setAttribute("dir","rtl"),E.classList.add("nx-rtl-on")),E.innerHTML=M+S,e.document.getElementById(E.id)||(e.document.body.appendChild(E),t.clickToClose&&e.document.getElementById(E.id).addEventListener("click",(function(){E.classList.add("nx-remove");var e=setTimeout((function(){null!==E.parentNode&&(E.parentNode.removeChild(E),clearTimeout(e))}),t.cssAnimationDuration)})))}else if(e.document.getElementById(m.ID))var I=e.document.getElementById(m.ID),O=setTimeout((function(){I.classList.add("nx-remove");var e=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(O)}),w);t=g(!0,t,y)},b={Loading:{init:function(i){t=g(!0,m,i),function(t,i){if(!d("head"))return!1;if(null!==t()&&!e.document.getElementById(i)){var n=e.document.createElement("style");n.id=i,n.innerHTML=t(),e.document.head.appendChild(n)}}(h,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return f("You have to initialize the Loading module before call Merge function."),!1;t=g(!0,t,e)},standard:function(e,t){p(i,e,t,!0,0)},hourglass:function(e,t){p(n,e,t,!0,0)},circle:function(e,t){p(a,e,t,!0,0)},arrows:function(e,t){p(o,e,t,!0,0)},dots:function(e,t){p(s,e,t,!0,0)},pulse:function(e,t){p(r,e,t,!0,0)},custom:function(e,t){p(l,e,t,!0,0)},notiflix:function(e,t){p(c,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),p(null,null,null,!1,e)},change:function(i){!function(i){"string"!=typeof i&&(i="");var n=e.document.getElementById(m.ID);if(n)if(i.length>0){i=i.length>t.messageMaxLength?u(i).substring(0,t.messageMaxLength)+"...":u(i);var a=n.getElementsByTagName("p")[0];if(a)a.innerHTML=i;else{var o=e.document.createElement("p");o.id=t.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=t.messageColor,o.style.fontSize=t.messageFontSize,o.innerHTML=i,n.appendChild(o)}}else f("Where is the new message?")}(i)}}};return"object"==typeof e.Notiflix?g(!0,e.Notiflix,{Loading:b.Loading}):{Loading:b.Loading}},"function"==typeof define&&define.amd?define([],(function(){return a(n)})):"object"==typeof t.exports?t.exports=a(n):n.Notiflix=a(n)})),n.register("Ur9Nn",(function(e,t){var i,n,a,o;i=e.exports,n="localStorageServise",a=function(){return s},Object.defineProperty(i,n,{get:a,set:o,enumerable:!0,configurable:!0});const s={elementsWatched:[],elementsQueue:[],WATCHED_LOCAL:"list-of-films-watched",QUEUE_LOCAL:"list-of-films-queue",watchedList(e,t){const i=e.parentNode.parentNode;localStorage.getItem(this.WATCHED_LOCAL)&&0===this.elementsWatched.length&&this.elementsWatched.push(...JSON.parse(localStorage.getItem(this.WATCHED_LOCAL)));const n=`<li class="gallery__item" data-id="${i.dataset.id}">${i.innerHTML}</li>`;t.target.textContent="Added to Watched",this.elementsWatched.includes(n)||(this.elementsWatched.push(n),localStorage.setItem(this.WATCHED_LOCAL,JSON.stringify(this.elementsWatched)))},queueList(e,t){const i=e.parentNode.parentNode;localStorage.getItem(this.QUEUE_LOCAL)&&0===this.elementsQueue.length&&this.elementsQueue.push(...JSON.parse(localStorage.getItem(this.QUEUE_LOCAL)));const n=`<li class="gallery__item" data-id="${i.dataset.id}">${i.innerHTML}</li>`;t.target.textContent="Added to Queue",this.elementsQueue.includes(n)||(this.elementsQueue.push(n),localStorage.setItem(this.QUEUE_LOCAL,JSON.stringify(this.elementsQueue)))},checkLocalWatched(e){localStorage.getItem(this.WATCHED_LOCAL)?e.innerHTML=JSON.parse(localStorage.getItem(this.WATCHED_LOCAL)).join(""):e.innerHTML=""},checkLocalQueue(e){JSON.parse(localStorage.getItem(this.QUEUE_LOCAL))?e.innerHTML=JSON.parse(localStorage.getItem(this.QUEUE_LOCAL)).join(""):e.innerHTML=""}}}))}();
//# sourceMappingURL=index.177852a0.js.map