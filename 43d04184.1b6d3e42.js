(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{125:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(n),s=a,O=m["".concat(b,".").concat(s)]||m[s]||d[s]||i;return n?r.a.createElement(O,c(c({ref:t},p),{},{components:n})):r.a.createElement(O,c({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var p=2;p<i;p++)b[p]=n[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),i=(n(0),n(125)),b={id:"matrix_writer",title:"MatrixWriter"},c={unversionedId:"fundamentals/dsp/matrix_writer",id:"fundamentals/dsp/matrix_writer",isDocsHomePage:!1,title:"MatrixWriter",description:"Prerequisites:",source:"@site/docs/fundamentals/dsp/matrix_writer.md",slug:"/fundamentals/dsp/matrix_writer",permalink:"/bonsai-rx-docs/docs/fundamentals/dsp/matrix_writer",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/main/docs/fundamentals/dsp/matrix_writer.md",version:"current",sidebar:"docs",previous:{title:"FunctionGenerator",permalink:"/bonsai-rx-docs/docs/fundamentals/dsp/function_generator"},next:{title:"CsvWriter",permalink:"/bonsai-rx-docs/docs/fundamentals/io/csv_writer"}},o=[],p={rightToc:o};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Prerequisites"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"bonsai Dsp Library")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Category"),": Sink"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Brief"),": Writes the incoming signal into the specified raw binary output stream"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Input")," (",Object(i.b)("em",{parentName:"p"},"OpenCV.Net.Mat"),") - an array"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Properties"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Layout"),"(",Object(i.b)("em",{parentName:"li"},"Bonsai.Dsp.MatrixLayout"),") - controls how individual buffer matrices are linearised into disk; when input is a ",Object(i.b)("inlineCode",{parentName:"li"},"C x N")," array (where ",Object(i.b)("inlineCode",{parentName:"li"},"C")," is number of channels and ",Object(i.b)("inlineCode",{parentName:"li"},"N")," is number of samples in buffer), as is the case in almost all bonsai data sources, the appropriate layout is ",Object(i.b)("inlineCode",{parentName:"li"},"ColumnMajor")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Path")," (",Object(i.b)("em",{parentName:"li"},"string"),") - name of the output file or full path to the output file if the desired path is different from the current"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Suffix")," (",Object(i.b)("em",{parentName:"li"},"Bonsai.IO.PathSuffix"),") - optional suffix used to generate file names: ",Object(i.b)("inlineCode",{parentName:"li"},"None"),", ",Object(i.b)("inlineCode",{parentName:"li"},"FileCount"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Timestamp"),"; generates new files even if ",Object(i.b)("inlineCode",{parentName:"li"},"Overwrite")," is set to True "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Overwrite")," (",Object(i.b)("em",{parentName:"li"},"bool"),") - indicates whether the output file should be overwritten if it already exists")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Output")," (",Object(i.b)("em",{parentName:"p"},"OpenCV.Net.Mat"),") - the same array"),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"To read a ",Object(i.b)("inlineCode",{parentName:"p"},".bin")," file (written with ",Object(i.b)("inlineCode",{parentName:"p"},"ColumnMajor")," layout) in Python, one can use ",Object(i.b)("inlineCode",{parentName:"p"},"numpy.fromfile(path, dtype).reshape(-1,C)")," where ",Object(i.b)("inlineCode",{parentName:"p"},"C")," is the number of input channels.\n",Object(i.b)("inlineCode",{parentName:"p"},"dtype")," depends on the input signal ",Object(i.b)("inlineCode",{parentName:"p"},"Depth")),Object(i.b)("table",{parentName:"div"},Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"depth"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"dtype"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"U8")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"np.uint8"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"S8")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"np.int8"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"U16")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"np.uint16"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"S16")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"np.int16"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"S32")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"np.int32"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"F32")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"np.single")," or ",Object(i.b)("inlineCode",{parentName:"td"},"np.float32"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"F64")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"np.double")," or ",Object(i.b)("inlineCode",{parentName:"td"},"np.float64"))))))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"Runtime Error: Input array must have the same element type")),Object(i.b)("p",{parentName:"div"},"Element type may refer to the ",Object(i.b)("inlineCode",{parentName:"p"},"Depth")," parameter of input signals (e.g. in ",Object(i.b)("inlineCode",{parentName:"p"},"FunctionGenerator"),"). It must be the same for all input signals fed into a given writer node."))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"Runtime Error: Input array must have the same shape except in the dimension corresponding to axis")),Object(i.b)("p",{parentName:"div"},"Happens when input arrays have different shapes, possibly due to unequal ",Object(i.b)("inlineCode",{parentName:"p"},"BufferSize")))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"Runtime Error: A valid file path must be specified")),Object(i.b)("p",{parentName:"div"},"Occurs when the ",Object(i.b)("inlineCode",{parentName:"p"},"Path")," property is left empty or not specified properly"))))}l.isMDXComponent=!0}}]);