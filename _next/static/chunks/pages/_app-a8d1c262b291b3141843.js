(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888,179],{7300:function(t){"use strict";t.exports=JSON.parse('{"TN":"Francisco Pizarro Portfolio","v":"Francisco Pizarro","WL":"Personal portfolio and blog for dvaJi","dK":"en-us","or":"https://dvaji.github.io","BH":"/static/images/avatar.jpg","Ao":"/static/images/twitter-card.png","km":"https://twitter.com/dvaji_"}')},6156:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,{Z:function(){return n}})},3558:function(t,e,r){"use strict";r.d(e,{HJ:function(){return o},Is:function(){return c},JV:function(){return s}});var n=r(5893),i=r(2962),a=r(7300),o={title:a.TN,description:a.WL,openGraph:{type:"website",locale:a.dK,url:a.or,title:a.TN,description:a.WL,images:[{url:"".concat(a.or).concat(a.Ao),alt:a.TN,width:1200,height:600}]},twitter:{handle:a.km,site:a.km,cardType:"summary_large_image"},additionalMetaTags:[{name:"author",content:a.v}]},c=function(t){var e=t.title,r=t.description,o=t.url;return(0,n.jsx)(i.PB,{title:"".concat(e," \u2013 ").concat(a.TN),description:r,canonical:o,openGraph:{url:o,title:e,description:r}})},s=function(t){var e=t.title,r=t.summary,o=t.date,c=t.lastmod,s=t.url,l=t.tags,u=t.images,d=void 0===u?[]:u,f=new Date(o).toISOString(),p=new Date(c||o).toISOString(),h=(0===d.length?[a.Ao]:"string"===typeof d?[d]:d).map((function(t){return{url:"".concat(a.or).concat(t),alt:e}}));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.PB,{title:"".concat(e," \u2013 ").concat(a.TN),description:r,canonical:s,openGraph:{type:"article",article:{publishedTime:f,modifiedTime:p,authors:["".concat(a.or,"/about")],tags:l},url:s,title:e,description:r,images:h},additionalMetaTags:[{name:"twitter:image",content:h[0].url}]}),(0,n.jsx)(i.dX,{authorName:a.v,dateModified:p,datePublished:f,description:r,images:h.map((function(t){return t.url})),publisherName:a.v,publisherLogo:a.v,title:e,url:s})]})}},3981:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return f}});var n=r(5893),i=r(6156),a=r(2962),o=r(2821),c=r(1664),s=function(){return(0,n.jsx)("header",{className:"header-nav",children:(0,n.jsxs)("div",{className:"head-cont",children:[(0,n.jsx)(c.default,{href:"/",children:(0,n.jsxs)("a",{children:[" ",(0,n.jsx)("h1",{className:"title",children:"Francisco Pizarro"})]})}),(0,n.jsx)("div",{className:"navs",children:(0,n.jsx)(c.default,{href:"/blog",children:(0,n.jsx)("a",{children:(0,n.jsx)("span",{className:"mono",children:"Blog"})})})})]})})},l=r(3558);r(7297),r(5232),r(3573);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){(0,i.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f=function(t){var e=t.Component,r=t.pageProps;return(0,n.jsxs)("div",{className:"dark",children:[(0,n.jsx)(a.lX,d({},l.HJ)),(0,n.jsx)(s,{}),(0,n.jsxs)("div",{className:"home-layout",children:[(0,n.jsx)("main",{className:"main-content",children:(0,n.jsx)(e,d({},r))}),(0,n.jsx)("footer",{className:"text-sm text-gray-500",children:(0,n.jsxs)("p",{children:["Built by Francisco Pizarro |"," ",(0,n.jsx)("a",{href:"https://github.com/dvaJi",target:"_blank",children:(0,n.jsx)(o.idJ,{})}),(0,n.jsxs)("span",{className:"ml-4 text-xs",children:["based on"," ",(0,n.jsx)("a",{href:"https://github.com/timlrx/tailwind-nextjs-starter-blog",children:"tailwind-nextjs-starter-blog"})]})]})})]})]})}},6363:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3981)}])},7297:function(){},3573:function(){},5232:function(){},4405:function(t,e,r){"use strict";r.d(e,{w_:function(){return l}});var n=r(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(i),o=function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},c=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]])}return r};function s(t){return t&&t.map((function(t,e){return n.createElement(t.tag,o({key:e},t.attr),s(t.child))}))}function l(t){return function(e){return n.createElement(u,o({attr:o({},t.attr)},e),s(t.child))}}function u(t){var e=function(e){var r,i=t.attr,a=t.size,s=t.title,l=c(t,["attr","size","title"]),u=a||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,l,{className:r,style:o(o({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),t.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(t){return e(t)})):e(i)}},4453:function(){}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,617,282,856],(function(){return e(6363),e(2441)}));var r=t.O();_N_E=r}]);