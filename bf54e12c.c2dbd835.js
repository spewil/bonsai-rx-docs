(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{105:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),i=(r(0),r(125)),a={id:"skip",title:"Skip"},c={unversionedId:"core/reactive/skip",id:"core/reactive/skip",isDocsHomePage:!1,title:"Skip",description:"Category: Combinator (filtering)",source:"@site/docs/core/reactive/skip.md",slug:"/core/reactive/skip",permalink:"/bonsai-rx-docs/docs/core/reactive/skip",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/main/docs/core/reactive/skip.md",version:"current",sidebar:"docs",previous:{title:"Merge",permalink:"/bonsai-rx-docs/docs/core/reactive/merge"},next:{title:"SkipUntil",permalink:"/bonsai-rx-docs/docs/core/reactive/skip_until"}},p=[],s={rightToc:p};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Category"),": Combinator (filtering)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Brief"),": Bypasses the specified number of contiguous elements at the start of the sequence."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Input"),": Accepts many input types (single elements, tuples, arrays)"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Output"),": Same type as input"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Properties"),":\n",Object(i.b)("inlineCode",{parentName:"p"},"Count")," (",Object(i.b)("em",{parentName:"p"},"int"),") - the number of elements to skip"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Skip")," operator allows you to discard a specified number of notifications from the beginning of an observable sequence. After the specified number of notifications is received, ",Object(i.b)("inlineCode",{parentName:"p"},"Skip")," will forward all remaining notifications."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Skip operator",src:r(228).default})))}u.isMDXComponent=!0},125:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(r),f=n,m=l["".concat(a,".").concat(f)]||l[f]||b[f]||i;return r?o.a.createElement(m,c(c({ref:t},s),{},{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},228:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/skip-adb140d38cb5575b7ba5a18280564fc8.svg"}}]);