(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[45014],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,g=c["".concat(s,".").concat(d)]||c[d]||p[d]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},77773:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>o,assets:()=>s,toc:()=>m,default:()=>p});var r=n(74034),a=(n(67294),n(3905));const l={slug:"version-1_1_81",title:"Version 1.1.81",author:"Philipp P\xe4hler",author_title:"qmBase Development Team",author_image_url:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png",tags:["Dokumentenmanagement","Blog und Wiki","Allgemein","Changelog"]},i=void 0,o={permalink:"/blog/version-1_1_81",editUrl:"https://github.com/qmBase/docs/tree/master/blog/2019-03-25-version-1_1_81.md",source:"@site/blog/2019-03-25-version-1_1_81.md",title:"Version 1.1.81",description:"Dokumentenmanagement, Blog und Wiki",date:"2019-03-25T00:00:00.000Z",formattedDate:"25. M\xe4rz 2019",tags:[{label:"Dokumentenmanagement",permalink:"/blog/tags/dokumentenmanagement"},{label:"Blog und Wiki",permalink:"/blog/tags/blog-und-wiki"},{label:"Allgemein",permalink:"/blog/tags/allgemein"},{label:"Changelog",permalink:"/blog/tags/changelog"}],readingTime:.725,truncated:!1,authors:[{name:"Philipp P\xe4hler",title:"qmBase Development Team",imageURL:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png"}],prevItem:{title:"Version 1.1.82",permalink:"/blog/version-1_1_82"},nextItem:{title:"Version 1.1.80",permalink:"/blog/version-1_1_80"}},s={authorsImageUrls:[void 0]},m=[{value:"Dokumentenmanagement, Blog und Wiki",id:"dokumentenmanagement-blog-und-wiki",children:[],level:2},{value:"Allgemein",id:"allgemein",children:[],level:2}],u={toc:m};function p({components:e,...t}){return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"dokumentenmanagement-blog-und-wiki"},"Dokumentenmanagement, Blog und Wiki"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Das Layout der Artikel wurde \xfcberarbeitet.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Dokumente, die als Datei erstellt sind, lassen sich jetzt leichter herunterladen.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Freigabeprozess \xfcberarbeitet. Die alte Funktion "1 Click Publish" wurde durch ein direktes Ver\xf6ffentlichen durch Nutzer, die \xfcber entsprechende Rollen verf\xfcgen ersetzt.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Beim Erstellen von neuen Revision werden die Freigeber nur noch aus dem alten Revisionen \xfcbernommen, wenn diese auch noch als Mitarbeiter vorhanden sind."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/releasenotes/66-images/publishExample.gif",alt:null})),(0,a.kt)("p",null,"Der Prozess zum erstellen neuer Artikel wurde \xfcberarbeitet. Die Auswahl, ob ein Artikel eine hochgeladene Datei oder ein mit dem Texteditor erstellter Inhalt sein soll, erfolgt jetzt erst nach dem ersten Klick."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/releasenotes/66-images/mceclip1.gif",alt:null})),(0,a.kt)("h2",{id:"allgemein"},"Allgemein"),(0,a.kt)("p",null,"Wir haben unseren Texteditor aktualisiert und verbessert. Die neue Version, des Texteditors, die z.B. im Dokumentenmanagement oder dem Ideenmanagement genutzt wird, passt jetzt besser ins Design und verf\xfcgt \xfcber zahlreiche Optimierungen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Bessere Dialoge zum Dateiupload")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Moderneres Farbauswahlmen\xfc"))))}p.isMDXComponent=!0}}]);