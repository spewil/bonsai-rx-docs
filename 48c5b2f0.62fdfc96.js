(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{125:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,g=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return a?r.a.createElement(g,i(i({ref:t},l),{},{components:a})):r.a.createElement(g,i({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},192:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/packagemanager-49d137554db1eae05f5e00efb60717bf.png"},83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(125)),c={title:"Package Manager",id:"packages"},i={unversionedId:"concepts/packages",id:"concepts/packages",isDocsHomePage:!1,title:"Package Manager",description:"Bonsai can be extended by installing software packages containing operators designed for specific tasks, such as video processing or OpenGL shaders.",source:"@site/docs/concepts/packages.md",slug:"/concepts/packages",permalink:"/bonsai-rx-docs/docs/concepts/packages",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/main/docs/concepts/packages.md",version:"current",sidebar:"docs",previous:{title:"Operators",permalink:"/bonsai-rx-docs/docs/concepts/operators"},next:{title:"Subjects",permalink:"/bonsai-rx-docs/docs/concepts/subjects"}},s=[{value:"Install dependencies",id:"install-dependencies",children:[]},{value:"Configure package sources",id:"configure-package-sources",children:[]}],l={rightToc:s};function p(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Bonsai can be extended by installing software packages containing operators designed for specific tasks, such as video processing or OpenGL shaders."),Object(o.b)("h2",{id:"install-dependencies"},"Install dependencies"),Object(o.b)("p",null,"When you first run Bonsai, any required packages will be automatically installed and the built-in package manager will be launched so you can further customize your installation:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"The Bonsai package manager",src:a(192).default})),Object(o.b)("p",null,'Packages that are already installed are displayed with a green tick mark to the right of the title. You can install new packages by selecting a package title or description and then clicking on the "Install" button that appears to the right. You can also search for available packages using the text box in the upper-right corner.'),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},'If you want to start playing with Bonsai quickly, just download the "Starter Pack". This will automatically install all major dependencies used in this guide.'))),Object(o.b)("p",null,'In the "Installed packages" tab you can browse currently installed packages and optionally uninstall them. The "Updates" tab will show you which of those packages can be updated to a newer version.'),Object(o.b)("h2",{id:"configure-package-sources"},"Configure package sources"),Object(o.b)("p",null,'The "Settings" button in the lower-left corner will open a new dialog where you can configure the active package sources. This allows you to specify directly where Bonsai should look for new packages, either online or in your local file system.'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Installing custom packages:"),' Most of the available Bonsai packages can be found in the official package source. However, at some point you may want to install your own custom packages, or packages that were shared with you by other means. See the "Extending Bonsai" tutorial section for detailed instructions on how to configure local package sources.'),Object(o.b)("p",null,"When you are done managing your packages, you can click the \u201cClose\u201d button or hit the Escape key to exit the package manager."))}p.isMDXComponent=!0}}]);