(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492,179],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},1506:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},9754:function(e){function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(r)}e.exports=t},2205:function(e,t,r){var n=r(9489);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},8585:function(e,t,r){var n=r(8),a=r(1506);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?a(e):t}},319:function(e,t,r){var n=r(3646),a=r(6860),o=r(379),i=r(8206);e.exports=function(e){return n(e)||a(e)||o(e)||i()}},6071:function(e,t,r){"use strict";var n=r(3038),a=r(862);t.default=void 0;var o=a(r(7294)),i=r(1689),s=r(2441),c=r(5749),l={};function u(e,t,r,n){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,r=(0,s.useRouter)(),a=r&&r.pathname||"/",d=o.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),r=n(t,2),o=r[0],s=r[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):s||o}}),[a,e.href,e.as]),f=d.href,p=d.as,h=e.children,x=e.replace,v=e.shallow,y=e.scroll,m=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var g=o.Children.only(h),b=g&&"object"===typeof g&&g.ref,j=(0,c.useIntersection)({rootMargin:"200px"}),w=n(j,2),k=w[0],_=w[1],M=o.default.useCallback((function(e){k(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,k]);(0,o.useEffect)((function(){var e=_&&t&&(0,i.isLocalURL)(f),n="undefined"!==typeof m?m:r&&r.locale,a=l[f+"%"+p+(n?"%"+n:"")];e&&!a&&u(r,f,p,{locale:n})}),[p,f,_,m,t,r]);var O={ref:M,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==s&&(s=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:o,locale:c,scroll:s}))}(e,r,f,p,x,v,y,m)},onMouseEnter:function(e){(0,i.isLocalURL)(f)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(r,f,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var N="undefined"!==typeof m?m:r&&r.locale,C=r&&r.isLocaleDomain&&(0,i.getDomainLocale)(p,N,r&&r.locales,r&&r.domainLocales);O.href=C||(0,i.addBasePath)((0,i.addLocale)(p,N,r&&r.defaultLocale))}return o.default.cloneElement(g,O)};t.default=d},5749:function(e,t,r){"use strict";var n=r(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,c=(0,a.useRef)(),l=(0,a.useState)(!1),u=n(l,2),d=u[0],f=u[1],p=(0,a.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),r||d||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,d]);return(0,a.useEffect)((function(){if(!i&&!d){var e=(0,o.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[d]),[p,d]};var a=r(7294),o=r(8391),i="undefined"!==typeof IntersectionObserver;var s=new Map},3367:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},7845:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,i=void 0!==o&&o;return r||a&&i}},4287:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=a},7947:function(e,t,r){"use strict";var n=r(9713);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r(7294)),s=(o=r(617))&&o.__esModule?o:{default:o},c=r(3367),l=r(4287),u=r(7845);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function x(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,l=h.length;c<l;c++){var u=h[c];if(a.props.hasOwnProperty(u))if("charSet"===u)r.has(u)?o=!1:r.add(u);else{var d=a.props[u],f=n[u]||new Set;"name"===u&&i||!f.has(d)?(f.add(d),n[u]=f):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:o})}))}function v(e){var t=e.children,r=(0,i.useContext)(c.AmpStateContext),n=(0,i.useContext)(l.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:x,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},t)}v.rewind=function(){};var y=v;t.default=y},617:function(e,t,r){"use strict";var n=r(319),a=r(4575),o=r(3913),i=(r(1506),r(2205)),s=r(8585),c=r(9754);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var a=c(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return s(this,r)}}t.__esModule=!0,t.default=void 0;var u=r(7294),d=function(e){i(r,e);var t=l(r);function r(e){var o;return a(this,r),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=d},8121:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return i}});var n=r(5893),a=r(9008),o=r(1664),i=!0;t.default=function(e){var t=e.post,r=e.next,i=e.prev,s=t.date,c=t.title,l=t.content,u=t.tags;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)("div",{children:(0,n.jsx)("article",{children:(0,n.jsxs)("div",{className:"xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700",children:[(0,n.jsx)("header",{className:"pt-6 xl:pb-6",children:(0,n.jsxs)("div",{className:"space-y-1 text-center",children:[(0,n.jsx)("dl",{className:"space-y-10",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("dt",{className:"sr-only",children:"Published on"}),(0,n.jsx)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,n.jsx)("time",{dateTime:s,children:new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})})]})}),(0,n.jsx)("div",{children:(0,n.jsx)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",children:c})})]})}),(0,n.jsxs)("div",{className:"pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6",style:{gridTemplateRows:"auto 1fr"},children:[(0,n.jsxs)("dl",{className:"pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700",children:[(0,n.jsx)("dt",{className:"sr-only",children:"Authors"}),(0,n.jsx)("dd",{children:(0,n.jsx)("ul",{className:"flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8",children:(0,n.jsx)("li",{className:"flex items-center space-x-2",children:(0,n.jsxs)("dl",{className:"text-sm font-medium leading-5 whitespace-nowrap",children:[(0,n.jsx)("dt",{className:"sr-only",children:"Name"}),(0,n.jsx)("dd",{className:"text-gray-900 dark:text-gray-100",children:"ola"}),(0,n.jsx)("dt",{className:"sr-only",children:"Twitter"}),(0,n.jsx)("dd",{})]})})})})]}),(0,n.jsx)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2",children:(0,n.jsx)("div",{className:"pt-10 pb-8 prose dark:prose-dark max-w-none",dangerouslySetInnerHTML:{__html:l}})}),(0,n.jsxs)("footer",{children:[(0,n.jsxs)("div",{className:"text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2",children:[u&&(0,n.jsxs)("div",{className:"py-4 xl:py-8",children:[(0,n.jsx)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Tags"}),(0,n.jsx)("div",{className:"flex flex-wrap"})]}),(r||i)&&(0,n.jsxs)("div",{className:"flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",children:[i&&(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Previous Article"}),(0,n.jsx)("div",{className:"text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",children:(0,n.jsx)(o.default,{href:"/blog/".concat(i.slug),children:i.title})})]}),r&&(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",children:"Next Article"}),(0,n.jsx)("div",{className:"text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",children:(0,n.jsx)(o.default,{href:"/blog/".concat(r.slug),children:r.title})})]})]})]}),(0,n.jsx)("div",{className:"pt-4 xl:pt-8",children:(0,n.jsx)(o.default,{href:"/blog",children:(0,n.jsx)("a",{className:"text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",children:"\u2190 Back to the blog"})})})]})]})]})})})]})}},3214:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return r(8121)}])},9008:function(e,t,r){e.exports=r(7947)},1664:function(e,t,r){e.exports=r(6071)},4453:function(){}},function(e){e.O(0,[774,597],(function(){return t=3214,e(e.s=t);var t}));var t=e.O();_N_E=t}]);