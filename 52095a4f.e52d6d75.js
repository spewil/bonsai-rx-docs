(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{125:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var o=r(0),a=r.n(o);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(r),h=o,b=u["".concat(i,".").concat(h)]||u[h]||p[h]||n;return r?a.a.createElement(b,s(s({ref:t},l),{},{components:r})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},194:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/concatfile-firstorder-68955fda492c2a63f44322f34fcf31d8.svg"},195:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/concatfile-enumeratefiles-2413894d79e260a70cfd29fd997e0ca3.svg"},196:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/concatfile-higherorder-67f415ad88346062a74cc06598a8ada2.png"},197:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/concatfile-window-07fffefd8c8185c93778a18b5e49d65f.svg"},198:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/concatfile-combine-5ebdb5a3c0b83e09b47ee311ba3e4bfc.svg"},86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return d}));var o=r(3),a=r(7),n=(r(0),r(125)),i={title:"Higher Order Operators",id:"higher_order"},s={unversionedId:"concepts/higher_order",id:"concepts/higher_order",isDocsHomePage:!1,title:"Higher Order Operators",description:"In most cases, when building simple reactive systems, it is enough to place a source for every device or every file you are accessing, as well as a set of transforms, sinks and combinators representing all the operations you need to perform on the data.",source:"@site/docs/concepts/higher_order.md",slug:"/concepts/higher_order",permalink:"/bonsai-rx-docs/docs/concepts/higher_order",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/main/docs/concepts/higher_order.md",version:"current",sidebar:"docs",previous:{title:"Property Mapping",permalink:"/bonsai-rx-docs/docs/concepts/property_mapping"},next:{title:"Operators",permalink:"/bonsai-rx-docs/docs/concepts/operators"}},c=[{value:"A metaphor for higher-order operators",id:"a-metaphor-for-higher-order-operators",children:[]},{value:"Higher-order operators in the Bonsai visual language",id:"higher-order-operators-in-the-bonsai-visual-language",children:[]},{value:"Marble diagrams for higher-order operators",id:"marble-diagrams-for-higher-order-operators",children:[]}],l={rightToc:c};function d(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"In most cases, when building simple reactive systems, it is enough to place a source for every device or every file you are accessing, as well as a set of transforms, sinks and combinators representing all the operations you need to perform on the data."),Object(n.b)("p",null,"However, sometimes you may need to build systems that deal with an unknown number of sources. For example, imagine you wanted to create a workflow to merge together many video files. If you knew beforehand how many files you will need to combine and where they are exactly located, you might use the ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/core/reactive/concat"}),Object(n.b)("inlineCode",{parentName:"a"},"Concat"))," operator to design a workflow like the following:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Concatenate video files using first order operators",src:r(194).default})),Object(n.b)("p",null,"But what if you did not know beforehand how many video files you will need to combine, and you wanted to merge all these videos without having to manually place a source node for every file?"),Object(n.b)("p",null,"Suppose all you had to get started was the ",Object(n.b)("inlineCode",{parentName:"p"},"EnumerateFiles")," source. This operator creates an observable sequence that will emit all the file names in a folder, one after the other."),Object(n.b)("p",null,Object(n.b)("img",{alt:"Enumerate all file names in a folder",src:r(195).default})),Object(n.b)("p",null,"In order to merge all the frames from these files in a single sequence you would need to create a different ",Object(n.b)("inlineCode",{parentName:"p"},"FileCapture")," source for every file name emitted by this sequence, and pass all these sources to the ",Object(n.b)("inlineCode",{parentName:"p"},"Concat")," operator to generate a single sequence of frames. In other words, you want to create a sequence of frames for every file name in the folder, and then combine all these sequences into a single video file."),Object(n.b)("p",null,"Whenever an operator receives or emits a sequence of sequences, we call it a higher order operator. These operators play a particularly powerful role in the Bonsai programming language so it is useful to describe them in some detail."),Object(n.b)("h2",{id:"a-metaphor-for-higher-order-operators"},"A metaphor for higher-order operators"),Object(n.b)("p",null,"The social network metaphor introduced at the beginning of this guide can be extended to describe higher-order operators. If observable sequences are accounts in a social network, and data items are posts published by these accounts, you can describe the video concatenation example in the following steps:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Create an account that sends out a post for every file name in the target folder."),Object(n.b)("li",{parentName:"ol"},"Follow the account from step 1. For every file name sent out by this account, ",Object(n.b)("em",{parentName:"li"},"create an entirely new account"),". Each of these new accounts matches a different file name, and will emit a sequence of posts with every frame in the corresponding video file. The output from this step is the sequence of all these newly created accounts."),Object(n.b)("li",{parentName:"ol"},"Create an account that follows this sequence of accounts. When the first account from the sequence is received, follow it and repost all the frames that it sends out. After it terminates naturally, i.e. the file finishes, follow the second account in the sequence and repost all the frames from that account. Repeat for all the accounts in the sequence of accounts."),Object(n.b)("li",{parentName:"ol"},"Follow the account from step 3. For every post, save the frame into a file.")),Object(n.b)("p",null,"In this metaphor, higher-order operators allow you to create accounts from posts, or combine sequences of accounts into posts. In general, any operator that receives or emits a sequence of accounts can be considered a higher-order operator."),Object(n.b)("h2",{id:"higher-order-operators-in-the-bonsai-visual-language"},"Higher-order operators in the Bonsai visual language"),Object(n.b)("p",null,"Higher-order operators are represented and used as nodes, just like any other operator. However, some higher-order operators allow you to specify their behaviour by using node groups. This allows you to program how the created sequences behave by reusing existing sources, transforms and other nodes."),Object(n.b)("p",null,"For example, the video concatenation workflow can be implemented in Bonsai as follows:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Concatenate video files using higher order operators",src:r(196).default})),Object(n.b)("p",null,"The behaviour of the ",Object(n.b)("inlineCode",{parentName:"p"},"WindowWorkflow")," operator is specified by the floating node group. Each time a new file name is emitted by the ",Object(n.b)("inlineCode",{parentName:"p"},"EnumerateFiles")," source, the ",Object(n.b)("inlineCode",{parentName:"p"},"WindowWorkflow")," operator creates a new observable sequence controlled by the operators inside the group."),Object(n.b)("p",null,"The input to the node group -- represented by the ",Object(n.b)("inlineCode",{parentName:"p"},"Source1")," operator -- is a sequence containing the individual items received by ",Object(n.b)("inlineCode",{parentName:"p"},"WindowWorkflow"),". In this case, it is a sequence with a single item that returns the file name emitted by the ",Object(n.b)("inlineCode",{parentName:"p"},"EnumerateFiles")," source. We use an externalized property to assign this value to the ",Object(n.b)("inlineCode",{parentName:"p"},"FileName")," of the ",Object(n.b)("inlineCode",{parentName:"p"},"FileCapture")," node, so that the correct video is accessed. Finally, the output of the node group determines the type and timing of the items emitted by the created sequence."),Object(n.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(n.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"The ",Object(n.b)("inlineCode",{parentName:"p"},"WindowWorkflow")," operator creates new sequences for every input notification. However, it does not automatically subscribe to them -- they are latent. No data actually flows through the operators in the node group until some other higher-order operator -- in this case ",Object(n.b)("inlineCode",{parentName:"p"},"Concat")," -- actually takes these sequences and subscribes to them."))),Object(n.b)("h2",{id:"marble-diagrams-for-higher-order-operators"},"Marble diagrams for higher-order operators"),Object(n.b)("p",null,"Marble diagrams can also be extended to describe the behaviour of higher-order operators. Emitted sequences are represented by diagonal timelines branching off the main operator timeline. The start of the branching sequence represents the time at which that sequence was emitted."),Object(n.b)("p",null,"For example, the ",Object(n.b)("inlineCode",{parentName:"p"},"WindowWorkflow")," operator used to convert file names into sequences of video frames is described below:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Create sequences of frames from file names",src:r(197).default})),Object(n.b)("p",null,"This marble diagram makes clear that the operator reacts to each file name notification by creating a new observable sequence. In this case, each created sequence will emit all the frames in the specified video. In general, however, this operator can produce all kinds of sequences, determined by the particular combination of operators inside the node group."),Object(n.b)("p",null,"Finally, operators can combine sequences of sequences into a single sequence by collecting all the items from each sequence. There are multiple ways to perform this combination. For example, the ",Object(n.b)("inlineCode",{parentName:"p"},"Concat")," operator subscribes to each emitted sequence one at a time, advancing to the next sequence only when the previous one terminated successfully."),Object(n.b)("p",null,"This behaviour is described by the following marble diagram:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Combine all sequences of frames into a single sequence",src:r(198).default})))}d.isMDXComponent=!0}}]);