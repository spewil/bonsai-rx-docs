(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(125)),i={id:"subscribe_when",title:"SubscribeWhen"},o={unversionedId:"core/reactive/subscribe_when",id:"core/reactive/subscribe_when",isDocsHomePage:!1,title:"SubscribeWhen",description:"Category: Combinator (filtering)",source:"@site/docs/core/reactive/subscribe_when.md",slug:"/core/reactive/subscribe_when",permalink:"/bonsai-rx-docs/docs/core/reactive/subscribe_when",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/main/docs/core/reactive/subscribe_when.md",version:"current",sidebar:"docs",previous:{title:"SkipUntil",permalink:"/bonsai-rx-docs/docs/core/reactive/skip_until"},next:{title:"Take",permalink:"/bonsai-rx-docs/docs/core/reactive/take"}},s=[],p={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Category"),": Combinator (filtering)"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Brief"),": Subscribes to the first observable sequence only after the second sequence produces an element."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Input"),": Accepts many input types (single elements, tuples, arrays) as long as exactly two inputs are supplied"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Output"),": Same type as the first input sequence"),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},Object(c.b)("strong",{parentName:"p"},"Tip"),": Use ",Object(c.b)("inlineCode",{parentName:"p"},"SubscribeWhen")," -> ",Object(c.b)("inlineCode",{parentName:"p"},"Take")," -> ",Object(c.b)("inlineCode",{parentName:"p"},"Repeat")," to subscribe to the first observable sequence and take the specified number of inputs multiple times."))))}b.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||l[m]||c;return n?a.a.createElement(d,o(o({ref:t},p),{},{components:n})):a.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);