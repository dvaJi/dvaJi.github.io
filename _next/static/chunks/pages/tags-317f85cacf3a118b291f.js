(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[165,179],{7300:function(t){"use strict";t.exports=JSON.parse('{"TN":"Francisco Pizarro Portfolio","v":"Francisco Pizarro","WL":"Personal portfolio and blog for dvaJi","dK":"en-us","or":"https://dvaji.github.io","BH":"/static/images/avatar.jpg","Ao":"/static/images/twitter-card.png","km":"https://twitter.com/dvaji_"}')},3558:function(t,e,r){"use strict";r.d(e,{HJ:function(){return s},Is:function(){return c},JV:function(){return o}});var a=r(5893),i=r(2962),n=r(7300),s={title:n.TN,description:n.WL,openGraph:{type:"website",locale:n.dK,url:n.or,title:n.TN,description:n.WL,images:[{url:"".concat(n.or).concat(n.Ao),alt:n.TN,width:1200,height:600}]},twitter:{handle:n.km,site:n.km,cardType:"summary_large_image"},additionalMetaTags:[{name:"author",content:n.v}]},c=function(t){var e=t.title,r=t.description,s=t.url;return(0,a.jsx)(i.PB,{title:"".concat(e," \u2013 ").concat(n.TN),description:r,canonical:s,openGraph:{url:s,title:e,description:r}})},o=function(t){var e=t.title,r=t.summary,s=t.date,c=t.lastmod,o=t.url,d=t.tags,l=t.images,u=void 0===l?[]:l,m=new Date(s).toISOString(),f=new Date(c||s).toISOString(),g=(0===u.length?[n.Ao]:"string"===typeof u?[u]:u).map((function(t){return{url:"".concat(n.or).concat(t),alt:e}}));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.PB,{title:"".concat(e," \u2013 ").concat(n.TN),description:r,canonical:o,openGraph:{type:"article",article:{publishedTime:m,modifiedTime:f,authors:["".concat(n.or,"/about")],tags:d},url:o,title:e,description:r,images:g},additionalMetaTags:[{name:"twitter:image",content:g[0].url}]}),(0,a.jsx)(i.dX,{authorName:n.v,dateModified:f,datePublished:m,description:r,images:g.map((function(t){return t.url})),publisherName:n.v,publisherLogo:n.v,title:e,url:o})]})}},5168:function(t,e,r){"use strict";var a=r(5893),i=r(1664),n=r(9690);e.Z=function(t){var e=t.text;return(0,a.jsx)(i.default,{href:"/tags/".concat((0,n.G)(e)),children:(0,a.jsx)("a",{className:"mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400",children:e.split(" ").join("-")})})}},9690:function(t,e,r){"use strict";r.d(e,{G:function(){return a}});var a=function(t){return t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(t){return t.toLowerCase()})).join("-")}},2579:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return d}});var a=r(5893),i=r(1664),n=r(5168),s=r(3558),c=r(7300),o=r(9690),d=!0;e.default=function(t){var e=t.tags,r=Object.keys(e).sort((function(t,r){return e[r]-e[t]}));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Is,{title:"Tags - ".concat(c.v),description:"Things I blog about",url:"".concat(c.or,"/tags")}),(0,a.jsxs)("div",{className:"flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-24",children:[(0,a.jsx)("div",{className:"pt-6 pb-8 space-x-2 md:space-y-5",children:(0,a.jsx)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:border-r-2 md:px-6",children:"Tags"})}),(0,a.jsxs)("div",{className:"flex flex-wrap max-w-lg",children:[0===Object.keys(e).length&&"No tags found.",r.map((function(t){return(0,a.jsxs)("div",{className:"mt-2 mb-2 mr-5",children:[(0,a.jsx)(n.Z,{text:t}),(0,a.jsx)(i.default,{href:"/tags/".concat((0,o.G)(t)),children:(0,a.jsx)("a",{className:"-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300",children:" (".concat(e[t],")")})})]},t)}))]})]})]})}},454:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags",function(){return r(2579)}])},4453:function(){}},function(t){t.O(0,[774,282,856],(function(){return e=454,t(t.s=e);var e}));var e=t.O();_N_E=e}]);