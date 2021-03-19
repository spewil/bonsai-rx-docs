(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{108:function(e,t,I){"use strict";I.r(t),I.d(t,"frontMatter",(function(){return c})),I.d(t,"metadata",(function(){return n})),I.d(t,"rightToc",(function(){return o})),I.d(t,"default",(function(){return l}));var g=I(3),a=I(7),i=(I(0),I(125)),c={title:"Operators",id:"operators"},n={unversionedId:"concepts/operators",id:"concepts/operators",isDocsHomePage:!1,title:"Operators",description:'{% include toc icon="columns" title="Operators" %}',source:"@site/docs/concepts/operators.md",slug:"/concepts/operators",permalink:"/bonsai-rx-docs/docs/concepts/operators",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/main/docs/concepts/operators.md",version:"current",sidebar:"docs",previous:{title:"Higher Order Operators",permalink:"/bonsai-rx-docs/docs/concepts/higher_order"},next:{title:"Package Manager",permalink:"/bonsai-rx-docs/docs/concepts/packages"}},o=[{value:"Source",id:"source",children:[]},{value:"Transform",id:"transform",children:[]},{value:"Condition",id:"condition",children:[]},{value:"Sink",id:"sink",children:[]},{value:"Combinator",id:"combinator",children:[]},{value:"Combinators by Category",id:"combinators-by-category",children:[{value:"{{ site.data.category-textcategory.name }}",id:"-sitedatacategory-textcategoryname-",children:[]},{value:"{{ category.name }}",id:"-categoryname-",children:[]}]}],C={rightToc:o};function l(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(g.a)({},C,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'{% include toc icon="columns" title="Operators" %}'),Object(i.b)("p",null,"When building a Bonsai program, you chain together reactive operators to create new observable sequences. There are many different operators, which can create all kinds of observable sequences. These operators can be roughly grouped into different categories, depending on their shared characteristics."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(g.a)({parentName:"tr"},{align:"center"}),"Category"),Object(i.b)("th",Object(g.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(g.a)({parentName:"tr"},{align:"center"}),Object(i.b)("img",{alt:"Source",src:I(151).default})),Object(i.b)("td",Object(g.a)({parentName:"tr"},{align:null}),"generate event streams from devices or files")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(g.a)({parentName:"tr"},{align:"center"}),Object(i.b)("img",{alt:"Transform",src:I(152).default})),Object(i.b)("td",Object(g.a)({parentName:"tr"},{align:null}),"convert or process individual data items")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(g.a)({parentName:"tr"},{align:"center"}),Object(i.b)("img",{alt:"Condition",src:I(229).default})),Object(i.b)("td",Object(g.a)({parentName:"tr"},{align:null}),"filter data items matching some specific condition")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(g.a)({parentName:"tr"},{align:"center"}),Object(i.b)("img",{alt:"Sink",src:I(153).default})),Object(i.b)("td",Object(g.a)({parentName:"tr"},{align:null}),"save data or trigger external outputs")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(g.a)({parentName:"tr"},{align:"center"}),Object(i.b)("img",{alt:"Combinator",src:I(154).default})),Object(i.b)("td",Object(g.a)({parentName:"tr"},{align:null}),"manage control flow or synchronize parallel inputs")))),Object(i.b)("h2",{id:"source"},"Source"),Object(i.b)("p",null,"Sources create sequences that generate notifications spontaneously. This means that you can place these nodes without connecting them to any input. Every Bonsai program will contain at least one source. Usually sources represent streams of data which are acquired from devices or files, such as cameras, microphones, accelerometers, WAV files, network sockets, touchpads, etc."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(g.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(g.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(g.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(g.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(g.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Even though all sources can be placed independently, sometimes you can still connect an input to them. For example, if you place a ",Object(i.b)("inlineCode",{parentName:"p"},"FileCapture")," source by itself, it will playback all frames of the movie at the specified frame rate. However, if you connect it to an input, the next frame will now be played only when a new notification arrives, allowing you to precisely control video playback."))),Object(i.b)("h2",{id:"transform"},"Transform"),Object(i.b)("p",null,"Transforms apply an operation to individual data items in a sequence. They always take exactly one input sequence, and generate another sequence which has the same number of elements as the input, but where each item has been modified according to the function specified by the transform."),Object(i.b)("p",null,"In other words, all transforms have a similar style of marble diagram:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Transform operator",src:I(230).default})),Object(i.b)("p",null,"Every transform will always produce exactly one item for every notification generated by the input sequence. Each item that is produced will be the result of applying the transform function on the elements of the input sequence, and is sent out immediately whenever a new notification is received. When the input sequence terminates successfully (or exceptionally), the transformed sequence also terminates."),Object(i.b)("p",null,"The only distinction between different transforms will be in the exact function that is applied to each element (e.g., ",Object(i.b)("inlineCode",{parentName:"p"},"Grayscale")," will convert a sequence of color images to a sequence of grayscale images, while ",Object(i.b)("inlineCode",{parentName:"p"},"FindContours")," will convert a sequence of binary images into a sequence of contours)."),Object(i.b)("h2",{id:"condition"},"Condition"),Object(i.b)("p",null,"Condition operators apply a filter on individual data items in a sequence. Similar to transforms, they always take exactly one input sequence, and generate another sequence where the only emitted elements are items from the original sequence that match the condition criteria."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Condition operator",src:I(231).default})),Object(i.b)("p",null,"The condition function is applied to individual items immediately whenever a new notification is received from the input sequence, and valid items are sent out as soon as they are found to match the criteria. When the input sequence terminates successfully (or exceptionally), the filtered sequence also terminates."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(g.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(g.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(g.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(g.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(g.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"Condition")," operator allows you to specify arbitrary matching criteria using a node group. The input to the nested node group is the unfiltered sequence, and the output must be a sequence of elements of type ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),", i.e. logical values indicating ",Object(i.b)("inlineCode",{parentName:"p"},"true")," or ",Object(i.b)("inlineCode",{parentName:"p"},"false")," depending on whether the current item is considered to match the criteria."))),Object(i.b)("h2",{id:"sink"},"Sink"),Object(i.b)("p",null,"Whenever you need to save data into a file, trigger an external output, move a motor, or otherwise generate some kind of side effect with the data processed in Bonsai, you probably need to use a sink operator. Similar to transforms and conditions, sinks also apply a function to every individual element of an observable sequence. However, the application of the function will not modify or filter the input items in any way, which means the output sequence generated by a sink is identical to the input sequence."),Object(i.b)("p",null,"For this reason, all sinks also share a very similar style of marble diagram:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Sink operator",src:I(232).default})),Object(i.b)("p",null,"Because the output sequence of a sink is exactly the same as the input sequence, sinks can always be placed at any point of the workflow without breaking existing behaviour."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(g.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(g.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(g.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(g.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(g.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can chain multiple sinks sequentially as long as the input is compatible. This can be very convenient when you need to run multiple side effects on a single data stream. A common application is to log data into a file while simultaneously transmitting it to an external device."))),Object(i.b)("h2",{id:"combinator"},"Combinator"),Object(i.b)("p",null,"Although a lot can be done with the right sequence of sources, transforms and sinks, there are many other operators which allow you to express more complex combinations of observables. These operators are grouped together under the ",Object(i.b)("inlineCode",{parentName:"p"},"Combinator")," category, but their behaviour can be extremely diverse."),Object(i.b)("p",null,"Combinators can be used to merge data from multiple sources; control when observable sequences start and stop; or even to create entirely new sequences dynamically. Together, they provide an incredibly flexible toolkit to manipulate asynchronous data streams."),Object(i.b)("h2",{id:"combinators-by-category"},"Combinators by Category"),Object(i.b)("p",null,"{% assign operators-by-category = site.operators | group_by: 'category' %}\n{% for category in operators-by-category %}\n{% if site.data.category-text","[category.name]"," %}"),Object(i.b)("h3",{id:"-sitedatacategory-textcategoryname-"},"{{ site.data.category-text","[category.name]"," }}"),Object(i.b)("p",null,"{% else %}"),Object(i.b)("h3",{id:"-categoryname-"},"{{ category.name }}"),Object(i.b)("p",null,"{% endif %}\n{% for operator in category.items %}"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"[{{ operator.title }}]","({{ operator.url }}) -- {{ operator.excerpt }}\n{% endfor %}\n{% endfor %}")))}l.isMDXComponent=!0},125:function(e,t,I){"use strict";I.d(t,"a",(function(){return r})),I.d(t,"b",(function(){return m}));var g=I(0),a=I.n(g);function i(e,t,I){return t in e?Object.defineProperty(e,t,{value:I,enumerable:!0,configurable:!0,writable:!0}):e[t]=I,e}function c(e,t){var I=Object.keys(e);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);t&&(g=g.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),I.push.apply(I,g)}return I}function n(e){for(var t=1;t<arguments.length;t++){var I=null!=arguments[t]?arguments[t]:{};t%2?c(Object(I),!0).forEach((function(t){i(e,t,I[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(I)):c(Object(I)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(I,t))}))}return e}function o(e,t){if(null==e)return{};var I,g,a=function(e,t){if(null==e)return{};var I,g,a={},i=Object.keys(e);for(g=0;g<i.length;g++)I=i[g],t.indexOf(I)>=0||(a[I]=e[I]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(g=0;g<i.length;g++)I=i[g],t.indexOf(I)>=0||Object.prototype.propertyIsEnumerable.call(e,I)&&(a[I]=e[I])}return a}var C=a.a.createContext({}),l=function(e){var t=a.a.useContext(C),I=t;return e&&(I="function"==typeof e?e(t):n(n({},t),e)),I},r=function(e){var t=l(e.components);return a.a.createElement(C.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},A=a.a.forwardRef((function(e,t){var I=e.components,g=e.mdxType,i=e.originalType,c=e.parentName,C=o(e,["components","mdxType","originalType","parentName"]),r=l(I),A=g,m=r["".concat(c,".").concat(A)]||r[A]||b[A]||i;return I?a.a.createElement(m,n(n({ref:t},C),{},{components:I})):a.a.createElement(m,n({ref:t},C))}));function m(e,t){var I=arguments,g=t&&t.mdxType;if("string"==typeof e||g){var i=I.length,c=new Array(i);c[0]=A;var n={};for(var o in t)hasOwnProperty.call(t,o)&&(n[o]=t[o]);n.originalType=e,n.mdxType="string"==typeof e?e:g,c[1]=n;for(var C=2;C<i;C++)c[C]=I[C];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,I)}A.displayName="MDXCreateElement"},151:function(e,t,I){"use strict";I.r(t),t.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMzhtbSIKICAgaGVpZ2h0PSIxMm1tIgogICB2aWV3Qm94PSIwIDAgMzcuOTk5OTk4IDEyIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc0NTk2IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJzb3VyY2Uuc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzNDU5MCI+CiAgICA8Y2xpcFBhdGgKICAgICAgIGlkPSIxMl90ZXh0X2NsaXBwZXIiPgogICAgICA8cmVjdAogICAgICAgICB4PSI2IgogICAgICAgICB5PSI3NiIKICAgICAgICAgd2lkdGg9IjEyNi4xMyIKICAgICAgICAgaGVpZ2h0PSIyNi4zODk5OTkiCiAgICAgICAgIGlkPSIxMyIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8Y2xpcFBhdGgKICAgICAgIGlkPSI0OF90ZXh0X2NsaXBwZXIiPgogICAgICA8cmVjdAogICAgICAgICB4PSI2IgogICAgICAgICB5PSI1NTYiCiAgICAgICAgIHdpZHRoPSIxNTIuNjAwMDEiCiAgICAgICAgIGhlaWdodD0iMjYuMzg5OTk5IgogICAgICAgICBpZD0iNDkiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iMi45NDA3NjYxIgogICAgIGlua3NjYXBlOmN4PSI0Mi4yNTEzNDgiCiAgICAgaW5rc2NhcGU6Y3k9IjMxLjYxOTM2NCIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTkiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii05IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNDU5MyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDE5LjU5MTgyLDIwOS4zNDIzOCkiPgogICAgPHRleHQKICAgICAgIGNsaXAtcGF0aD0idXJsKCMxMl90ZXh0X2NsaXBwZXIpIgogICAgICAgc3R5bGU9ImZvbnQtc2l6ZToyMXB4O2ZvbnQtZmFtaWx5OidNaWNyb3NvZnQgU2FucyBTZXJpZic7b3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtzdHJva2U6bm9uZTtzaGFwZS1yZW5kZXJpbmc6YXV0byIKICAgICAgIHk9Ijc2IgogICAgICAgeD0iNiIKICAgICAgIGlkPSIxMCIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMTgxODE4MTgsMCwwLDAuMTgxODE4MTgsLTQwMi44NTQyNSwtMjE5LjYxMjE5KSI+CiAgICAgIDx0c3BhbgogICAgICAgICBpZD0iMTQiCiAgICAgICAgIGR5PSIxNS43NXB0Ij5Tb3VyY2U8L3RzcGFuPgogICAgPC90ZXh0PgogICAgPGcKICAgICAgIGlkPSJnMjciCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjkzODUxOTc3LDAsMCwwLjkzODUxOTc3LC01LjY5MTEzOCwxLjYyNjE3OSkiPgogICAgICA8cGF0aAogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgICBpZD0iOTYiCiAgICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDpub25lO3N0cm9rZTojYTlhOWE5O3N0cm9rZS13aWR0aDowLjg1MjQwNjA4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0Ojk7c2hhcGUtcmVuZGVyaW5nOmF1dG8iCiAgICAgICAgIGQ9Im0gLTQyNS45MTQ0MSwtMjIyLjU3MjM1IGMgMS42Mjc4OCwyLjUxMTEgMS42MjA1OSw1Ljc0NjA3IC0wLjAxODUsOC4yNTAwMSIgLz4KICAgICAgPGNpcmNsZQogICAgICAgICByPSI2LjM5MzA0NTkiCiAgICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojNWJiMjdlO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjQyNjIwMzA0O3NoYXBlLXJlbmRlcmluZzphdXRvIgogICAgICAgICBjeD0iLTQzMi44MDk5NCIKICAgICAgICAgY3k9Ii0yMTguMzk1NTciCiAgICAgICAgIGlkPSI5NyIgLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="},152:function(e,t,I){"use strict";I.r(t),t.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMzhtbSIKICAgaGVpZ2h0PSIxMm1tIgogICB2aWV3Qm94PSIwIDAgMzguMDAwMDAxIDEyIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc1MTk4IgogICBzb2RpcG9kaTpkb2NuYW1lPSJ0cmFuc2Zvcm0uc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzNTE5MiI+CiAgICA8Y2xpcFBhdGgKICAgICAgIGlkPSIyNF90ZXh0X2NsaXBwZXIiPgogICAgICA8cmVjdAogICAgICAgICB4PSI2IgogICAgICAgICB5PSIyMzYiCiAgICAgICAgIHdpZHRoPSIxMDMuMyIKICAgICAgICAgaGVpZ2h0PSIyNi4zODk5OTkiCiAgICAgICAgIGlkPSIyNSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSIyLjk0MDc2NjEiCiAgICAgaW5rc2NhcGU6Y3g9IjEyNy41NzczMyIKICAgICBpbmtzY2FwZTpjeT0iMS41MzU3ODE0IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGZpdC1tYXJnaW4tdG9wPSIwIgogICAgIGZpdC1tYXJnaW4tbGVmdD0iMCIKICAgICBmaXQtbWFyZ2luLXJpZ2h0PSIwIgogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDAxIgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOSIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTkiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE1MTk1Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSIKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzQ5Ljk3MzY1LC05MS4xNzc2OTIpIj4KICAgIDx0ZXh0CiAgICAgICBjbGlwLXBhdGg9InVybCgjMjRfdGV4dF9jbGlwcGVyKSIKICAgICAgIHN0eWxlPSJmb250LXNpemU6MjFweDtmb250LWZhbWlseTonTWljcm9zb2Z0IFNhbnMgU2VyaWYnO29wYWNpdHk6MTtmaWxsOiMwMDAwMDA7c3Ryb2tlOm5vbmU7c2hhcGUtcmVuZGVyaW5nOmF1dG8iCiAgICAgICB5PSIyMzYiCiAgICAgICB4PSI2IgogICAgICAgaWQ9IjIyIgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4xODE4MTgxOCwwLDAsMC4xODE4MTgxOCwzNjYuNzk4ODUsNTEuODE2OTg2KSI+CiAgICAgIDx0c3BhbgogICAgICAgICBpZD0iMjYiCiAgICAgICAgIGR5PSIxNS43NXB0Ij5UcmFuc2Zvcm08L3RzcGFuPgogICAgPC90ZXh0PgogICAgPGNpcmNsZQogICAgICAgaWQ9Ijc3IgogICAgICAgY3k9Ijk3LjE3NzY4OSIKICAgICAgIGN4PSIzNTcuNjczNjUiCiAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzQ0OWFkZjtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4zOTk5OTk5ODtzaGFwZS1yZW5kZXJpbmc6YXV0byIKICAgICAgIHI9IjYiIC8+CiAgPC9nPgo8L3N2Zz4K"},153:function(e,t,I){"use strict";I.r(t),t.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMzhtbSIKICAgaGVpZ2h0PSIxNG1tIgogICB2aWV3Qm94PSIwIDAgMzguMDAwMDAxIDE0IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc1ODU2IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJzaW5rLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczU4NTAiPgogICAgPGNsaXBQYXRoCiAgICAgICBpZD0iMzZfdGV4dF9jbGlwcGVyIj4KICAgICAgPHJlY3QKICAgICAgICAgeD0iNiIKICAgICAgICAgeT0iMzk2IgogICAgICAgICB3aWR0aD0iNDkuMjA5OTk5IgogICAgICAgICBoZWlnaHQ9IjI2LjM4OTk5OSIKICAgICAgICAgaWQ9IjM3IiAvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjQuMTU4ODcxMyIKICAgICBpbmtzY2FwZTpjeD0iNi40ODM1NTAxIgogICAgIGlua3NjYXBlOmN5PSIyNS4xODgyMjMiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgZml0LW1hcmdpbi10b3A9IjAiCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwIgogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiCiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMDEiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9Ii05IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOSIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTU4NTMiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzQuOTY1MTgsLTE0Ni42MzAwOCkiPgogICAgPHRleHQKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMTgxODE4MTgsMCwwLDAuMTgxODE4MTgsMTkxLjcwMjc1LDc4LjM0Mjg4KSIKICAgICAgIGNsaXAtcGF0aD0idXJsKCMzNl90ZXh0X2NsaXBwZXIpIgogICAgICAgc3R5bGU9ImZvbnQtc2l6ZToyMXB4O2ZvbnQtZmFtaWx5OidNaWNyb3NvZnQgU2FucyBTZXJpZic7b3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtzdHJva2U6bm9uZTtzaGFwZS1yZW5kZXJpbmc6YXV0byIKICAgICAgIHk9IjM5NiIKICAgICAgIHg9IjYiCiAgICAgICBpZD0iMzQiPgogICAgICA8dHNwYW4KICAgICAgICAgaWQ9IjM4IgogICAgICAgICBkeT0iMTUuNzVwdCI+U2luazwvdHNwYW4+CiAgICA8L3RleHQ+CiAgICA8cGF0aAogICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOm5vbmU7c3Ryb2tlOiNhOWE5YTk7c3Ryb2tlLXdpZHRoOjAuODAwMDAyMTY7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6OTtzaGFwZS1yZW5kZXJpbmc6YXV0byIKICAgICAgIGlkPSI1OSIKICAgICAgIGQ9Im0gMTgwLjcyODM3LDE2MC4wNzQ0OSBjIC0yLjcwMTA1LC0wLjU3NjM1IC00LjgwNzYxLC0yLjY5MjMzIC01LjM3MTYyLC01LjM5NjAxIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgLz4KICAgIDxjaXJjbGUKICAgICAgIGlkPSI2MCIKICAgICAgIGN5PSIxNTIuNzk0NDkiCiAgICAgICBjeD0iMTgyLjY2NTE2IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiM5YjViYjM7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNDAwMDAxMDg7c2hhcGUtcmVuZGVyaW5nOmF1dG8iCiAgICAgICByPSI2LjAwMDAxNjciIC8+CiAgPC9nPgo8L3N2Zz4K"},154:function(e,t,I){"use strict";I.r(t),t.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMzhtbSIKICAgaGVpZ2h0PSIxMm1tIgogICB2aWV3Qm94PSIwIDAgMzggMTIiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzY0OTYiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTIuMyAoMjQwNTU0NiwgMjAxOC0wMy0xMSkiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImNvbWJpbmF0b3Iuc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzNjQ5MCI+CiAgICA8Y2xpcFBhdGgKICAgICAgIGlkPSI0OF90ZXh0X2NsaXBwZXIiPgogICAgICA8cmVjdAogICAgICAgICB4PSI2IgogICAgICAgICB5PSI1NTYiCiAgICAgICAgIHdpZHRoPSIxNTIuNjAwMDEiCiAgICAgICAgIGhlaWdodD0iMjYuMzg5OTk5IgogICAgICAgICBpZD0iNDkiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iMi4wNzk0MzU2IgogICAgIGlua3NjYXBlOmN4PSIxMDQuMjUwMzMiCiAgICAgaW5rc2NhcGU6Y3k9IjIxLjkzODY0MSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAwMSIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTkiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii05IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNjQ5MyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQxLjE1NjQ5NSwtMzUuOTkzMTcpIj4KICAgIDx0ZXh0CiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCgwLjE4MTgxODE4LDAsMCwwLjE4MTgxODE4LDU3Ljg4NjYwOSwtNjEuNTQ5MzU0KSIKICAgICAgIGNsaXAtcGF0aD0idXJsKCM0OF90ZXh0X2NsaXBwZXIpIgogICAgICAgc3R5bGU9ImZvbnQtc2l6ZToyMXB4O2ZvbnQtZmFtaWx5OidNaWNyb3NvZnQgU2FucyBTZXJpZic7b3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtzdHJva2U6bm9uZTtzaGFwZS1yZW5kZXJpbmc6YXV0byIKICAgICAgIHk9IjU1NiIKICAgICAgIHg9IjYiCiAgICAgICBpZD0iNDYiPgogICAgICA8dHNwYW4KICAgICAgICAgaWQ9IjUwIgogICAgICAgICBkeT0iMTUuNzVwdCI+Q29tYmluYXRvcjwvdHNwYW4+CiAgICA8L3RleHQ+CiAgICA8Y2lyY2xlCiAgICAgICBpZD0iNjkiCiAgICAgICBjeT0iNDEuOTkzMTcyIgogICAgICAgY3g9IjQ4Ljg1NjQ5NSIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZWVjMDRiO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjM5OTk5OTk4O3NoYXBlLXJlbmRlcmluZzphdXRvIgogICAgICAgcj0iNiIgLz4KICA8L2c+Cjwvc3ZnPgo="},229:function(e,t,I){"use strict";I.r(t),t.default=I.p+"assets/images/condition-64b33d411800b198faa3c52259202b87.svg"},230:function(e,t,I){"use strict";I.r(t),t.default=I.p+"assets/images/transform-marble-c076df3cbfef6b990c54bdf2de5aa828.svg"},231:function(e,t,I){"use strict";I.r(t),t.default=I.p+"assets/images/condition-marble-80ca6da4ee6c6dd11a29cf00c528778d.svg"},232:function(e,t,I){"use strict";I.r(t),t.default=I.p+"assets/images/sink-marble-0ee720cbd663c8409b5bfc553ebea025.svg"}}]);