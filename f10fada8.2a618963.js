(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),a=(n(0),n(125)),o={id:"csv_writer",title:"CsvWriter"},l={unversionedId:"fundamentals/io/csv_writer",id:"fundamentals/io/csv_writer",isDocsHomePage:!1,title:"CsvWriter",description:"Prerequisites:",source:"@site/docs/fundamentals/io/csv_writer.md",slug:"/fundamentals/io/csv_writer",permalink:"/bonsai-rx-docs/docs/fundamentals/io/csv_writer",editUrl:"https://github.com/spewil/bonsai-rx-docs/edit/main/docs/fundamentals/io/csv_writer.md",version:"current",sidebar:"docs",previous:{title:"MatrixWriter",permalink:"/bonsai-rx-docs/docs/fundamentals/dsp/matrix_writer"},next:{title:"PylonCapture",permalink:"/bonsai-rx-docs/docs/fundamentals/pylon/pylon_capture"}},c=[],p={rightToc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Prerequisites"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"bonsai IO Library")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Category"),": Sink"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Brief"),": Sinks individual elements of the input sequuence to a text file."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Input")," - Accepts several input types (single elements, tuples, arrays) as long as it comes from a single source node"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Properties"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Append")," (",Object(a.b)("em",{parentName:"li"},"bool"),") - indicates whether data should be appended to the output file if it already exists"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Delimiter")," (",Object(a.b)("em",{parentName:"li"},"string"),") - separator of columns in the output file; if not specified, comma is used"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"FileName")," (",Object(a.b)("em",{parentName:"li"},"ListSeparator"),") - name of the output file or full path to the output file if the desired path is different from the current working directory"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"IncludeHeader")," (",Object(a.b)("em",{parentName:"li"},"bool"),") - indicates whether to include a text header with column names"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ListSeparator")," (",Object(a.b)("em",{parentName:"li"},"string"),") - separator of elements in variable length rows (optional)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Overwrite")," (",Object(a.b)("em",{parentName:"li"},"bool"),") - indicates whether the output file should be overwritten if it already exists"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Selector")," (",Object(a.b)("em",{parentName:"li"},"string"),") - selects a subset of the input's inner properties that will be written to file"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Suffix")," (",Object(a.b)("em",{parentName:"li"},"Bonsai.IO.PathSuffix"),") - optional suffix used to generate file names: ",Object(a.b)("inlineCode",{parentName:"li"},"None"),", ",Object(a.b)("inlineCode",{parentName:"li"},"FileCount"),", ",Object(a.b)("inlineCode",{parentName:"li"},"Timestamp"),"; generates new files even if ",Object(a.b)("inlineCode",{parentName:"li"},"Overwrite")," is set to True")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Output")," - same type as the input"),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Common errors"),":"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Runtime Error: A valid file path must be specified"),"\nOccurs when the ",Object(a.b)("inlineCode",{parentName:"p"},"FileName")," property is left empty or not specified properly"))}s.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||a;return n?i.a.createElement(d,l(l({ref:t},p),{},{components:n})):i.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);