(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{116:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),h=o,b=d["".concat(i,".").concat(h)]||d[h]||p[h]||a;return r?n.a.createElement(b,s(s({ref:t},l),{},{components:r})):n.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},171:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/concatfile-firstorder-2024eb0704b3e330f77518835df58f68.svg"},172:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/concatfile-enumeratefiles-8431e6d3dd6c1cbd2c16c20742954b14.svg"},173:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/concatfile-higherorder-67f415ad88346062a74cc06598a8ada2.png"},174:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/concatfile-window-8dd354d3971ce72042fd3378d3a55501.svg"},175:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/concatfile-combine-cde0227b72129305a356069342be1c9c.svg"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var o=r(3),n=r(7),a=(r(0),r(116)),i={title:"Higher Order Operators",id:"higher_order"},s={unversionedId:"concepts/higher_order",id:"concepts/higher_order",isDocsHomePage:!1,title:"Higher Order Operators",description:"In most cases, when building simple reactive systems, it is enough to place a source for every device or every file you are accessing, as well as a set of transforms, sinks and combinators representing all the operations you need to perform on the data.",source:"@site/docs\\concepts\\higher-order.md",slug:"/concepts/higher_order",permalink:"/bonsai-rx-docs/docs/concepts/higher_order",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/master/website/docs/concepts/higher-order.md",version:"current",sidebar:"docs",previous:{title:"Property Mapping",permalink:"/bonsai-rx-docs/docs/concepts/property_mapping"},next:{title:"Operators",permalink:"/bonsai-rx-docs/docs/concepts/operators"}},c=[{value:"A metaphor for higher-order operators",id:"a-metaphor-for-higher-order-operators",children:[]},{value:"Higher-order operators in the Bonsai visual language",id:"higher-order-operators-in-the-bonsai-visual-language",children:[]},{value:"Marble diagrams for higher-order operators",id:"marble-diagrams-for-higher-order-operators",children:[]}],l={rightToc:c};function u(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In most cases, when building simple reactive systems, it is enough to place a source for every device or every file you are accessing, as well as a set of transforms, sinks and combinators representing all the operations you need to perform on the data."),Object(a.b)("p",null,"However, sometimes you may need to build systems that deal with an unknown number of sources. For example, imagine you wanted to create a workflow to merge together many video files. If you knew beforehand how many files you will need to combine and where they are exactly located, you might use the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/core/reactive/concat"}),Object(a.b)("inlineCode",{parentName:"a"},"Concat"))," operator to design a workflow like the following:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Concatenate video files using first order operators",src:r(171).default})),Object(a.b)("p",null,"But what if you did not know beforehand how many video files you will need to combine, and you wanted to merge all these videos without having to manually place a source node for every file?"),Object(a.b)("p",null,"Suppose all you had to get started was the ",Object(a.b)("inlineCode",{parentName:"p"},"EnumerateFiles")," source. This operator creates an observable sequence that will emit all the file names in a folder, one after the other."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Enumerate all file names in a folder",src:r(172).default})),Object(a.b)("p",null,"In order to merge all the frames from these files in a single sequence you would need to create a different ",Object(a.b)("inlineCode",{parentName:"p"},"FileCapture")," source for every file name emitted by this sequence, and pass all these sources to the ",Object(a.b)("inlineCode",{parentName:"p"},"Concat")," operator to generate a single sequence of frames. In other words, you want to create a sequence of frames for every file name in the folder, and then combine all these sequences into a single video file."),Object(a.b)("p",null,"Whenever an operator receives or emits a sequence of sequences, we call it a higher order operator. These operators play a particularly powerful role in the Bonsai programming language so it is useful to describe them in some detail."),Object(a.b)("h2",{id:"a-metaphor-for-higher-order-operators"},"A metaphor for higher-order operators"),Object(a.b)("p",null,"The social network metaphor introduced at the beginning of this guide can be extended to describe higher-order operators. If observable sequences are accounts in a social network, and data items are posts published by these accounts, you can describe the video concatenation example in the following steps:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create an account that sends out a post for every file name in the target folder."),Object(a.b)("li",{parentName:"ol"},"Follow the account from step 1. For every file name sent out by this account, ",Object(a.b)("em",{parentName:"li"},"create an entirely new account"),". Each of these new accounts matches a different file name, and will emit a sequence of posts with every frame in the corresponding video file. The output from this step is the sequence of all these newly created accounts."),Object(a.b)("li",{parentName:"ol"},"Create an account that follows this sequence of accounts. When the first account from the sequence is received, follow it and repost all the frames that it sends out. After it terminates naturally, i.e. the file finishes, follow the second account in the sequence and repost all the frames from that account. Repeat for all the accounts in the sequence of accounts."),Object(a.b)("li",{parentName:"ol"},"Follow the account from step 3. For every post, save the frame into a file.")),Object(a.b)("p",null,"In this metaphor, higher-order operators allow you to create accounts from posts, or combine sequences of accounts into posts. In general, any operator that receives or emits a sequence of accounts can be considered a higher-order operator."),Object(a.b)("h2",{id:"higher-order-operators-in-the-bonsai-visual-language"},"Higher-order operators in the Bonsai visual language"),Object(a.b)("p",null,"Higher-order operators are represented and used as nodes, just like any other operator. However, some higher-order operators allow you to specify their behaviour by using node groups. This allows you to program how the created sequences behave by reusing existing sources, transforms and other nodes."),Object(a.b)("p",null,"For example, the video concatenation workflow can be implemented in Bonsai as follows:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Concatenate video files using higher order operators",src:r(173).default})),Object(a.b)("p",null,"The behaviour of the ",Object(a.b)("inlineCode",{parentName:"p"},"WindowWorkflow")," operator is specified by the floating node group. Each time a new file name is emitted by the ",Object(a.b)("inlineCode",{parentName:"p"},"EnumerateFiles")," source, the ",Object(a.b)("inlineCode",{parentName:"p"},"WindowWorkflow")," operator creates a new observable sequence controlled by the operators inside the group."),Object(a.b)("p",null,"The input to the node group -- represented by the ",Object(a.b)("inlineCode",{parentName:"p"},"Source1")," operator -- is a sequence containing the individual items received by ",Object(a.b)("inlineCode",{parentName:"p"},"WindowWorkflow"),". In this case, it is a sequence with a single item that returns the file name emitted by the ",Object(a.b)("inlineCode",{parentName:"p"},"EnumerateFiles")," source. We use an externalized property to assign this value to the ",Object(a.b)("inlineCode",{parentName:"p"},"FileName")," of the ",Object(a.b)("inlineCode",{parentName:"p"},"FileCapture")," node, so that the correct video is accessed. Finally, the output of the node group determines the type and timing of the items emitted by the created sequence."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"ProTip:")," The ",Object(a.b)("inlineCode",{parentName:"p"},"WindowWorkflow")," operator creates new sequences for every input notification. However, it does not automatically subscribe to them -- they are latent. No data actually flows through the operators in the node group until some other higher-order operator -- in this case ",Object(a.b)("inlineCode",{parentName:"p"},"Concat")," -- actually takes these sequences and subscribes to them.\n{: .notice--info}"),Object(a.b)("h2",{id:"marble-diagrams-for-higher-order-operators"},"Marble diagrams for higher-order operators"),Object(a.b)("p",null,"Marble diagrams can also be extended to describe the behaviour of higher-order operators. Emitted sequences are represented by diagonal timelines branching off the main operator timeline. The start of the branching sequence represents the time at which that sequence was emitted."),Object(a.b)("p",null,"For example, the ",Object(a.b)("inlineCode",{parentName:"p"},"WindowWorkflow")," operator used to convert file names into sequences of video frames is described below:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Create sequences of frames from file names",src:r(174).default})),Object(a.b)("p",null,"This marble diagram makes clear that the operator reacts to each file name notification by creating a new observable sequence. In this case, each created sequence will emit all the frames in the specified video. In general, however, this operator can produce all kinds of sequences, determined by the particular combination of operators inside the node group."),Object(a.b)("p",null,"Finally, operators can combine sequences of sequences into a single sequence by collecting all the items from each sequence. There are multiple ways to perform this combination. For example, the ",Object(a.b)("inlineCode",{parentName:"p"},"Concat")," operator subscribes to each emitted sequence one at a time, advancing to the next sequence only when the previous one terminated successfully."),Object(a.b)("p",null,"This behaviour is described by the following marble diagram:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Combine all sequences of frames into a single sequence",src:r(175).default})))}u.isMDXComponent=!0}}]);