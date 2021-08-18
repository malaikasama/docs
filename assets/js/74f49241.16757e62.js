(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[93954],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),s=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(t),d=a,h=c["".concat(m,".").concat(d)]||c[d]||p[d]||i;return t?r.createElement(h,l(l({ref:n},u),{},{components:t})):r.createElement(h,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},56690:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>o,toc:()=>m,default:()=>u});var r=t(22122),a=(t(67294),t(3905));const i={slug:"version-1_1_85",title:"Version 1.1.85",author:"Philipp P\xe4hler",author_title:"qmBase Development Team",author_image_url:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png",tags:["Admin / Import","Kontakte","Instandhaltungsmanagement","Projekte & Ma\xdfnahmen","Dokumentenmanagement - Der Graph","Qualit\xe4tsmonitor","Risiken & Chancen","Changelog"]},l=void 0,o={permalink:"/blog/version-1_1_85",editUrl:"https://github.com/qmBase/docs/tree/master/blog/2019-05-17-version-1_1_85.md",source:"@site/blog/2019-05-17-version-1_1_85.md",title:"Version 1.1.85",description:"Admin / Import",date:"2019-05-17T00:00:00.000Z",formattedDate:"17. Mai 2019",tags:[{label:"Admin / Import",permalink:"/blog/tags/admin-import"},{label:"Kontakte",permalink:"/blog/tags/kontakte"},{label:"Instandhaltungsmanagement",permalink:"/blog/tags/instandhaltungsmanagement"},{label:"Projekte & Ma\xdfnahmen",permalink:"/blog/tags/projekte-massnahmen"},{label:"Dokumentenmanagement - Der Graph",permalink:"/blog/tags/dokumentenmanagement-der-graph"},{label:"Qualit\xe4tsmonitor",permalink:"/blog/tags/qualitatsmonitor"},{label:"Risiken & Chancen",permalink:"/blog/tags/risiken-chancen"},{label:"Changelog",permalink:"/blog/tags/changelog"}],readingTime:1.09,truncated:!1,prevItem:{title:"Version 1.1.86",permalink:"/blog/version-1_1_86"},nextItem:{title:"Version 1.1.84",permalink:"/blog/version-1_1_84"}},m=[{value:"Admin / Import",id:"admin--import",children:[]},{value:"Kontakte",id:"kontakte",children:[]},{value:"Instandhaltungsmanagement",id:"instandhaltungsmanagement",children:[]},{value:"Projekte &amp; Ma\xdfnahmen",id:"projekte--ma\xdfnahmen",children:[]},{value:"Dokumentenmanagement - Der Graph",id:"dokumentenmanagement---der-graph",children:[]},{value:"Qualit\xe4tsmonitor",id:"qualit\xe4tsmonitor",children:[]},{value:"Risiken &amp; Chancen",id:"risiken--chancen",children:[]}],s={toc:m};function u({components:e,...n}){return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"admin--import"},"Admin / Import"),(0,a.kt)("p",null,'Der Import von Organisationen wurde verbessert, um jetzt auch Informationen wie z.B. "Ist Kunde?", Url usw. direkt w\xe4hrend des Imports erfassen zu k\xf6nnen.'),(0,a.kt)("h2",{id:"kontakte"},"Kontakte"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Anzeigen von Datum zur letzten \xc4nderung Organisationen und Personen")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"E-Mail war f\xe4lschlicherweise Pflichfeld bei Abspeichern von Personen"))),(0,a.kt)("h2",{id:"instandhaltungsmanagement"},"Instandhaltungsmanagement"),(0,a.kt)("p",null,"Das Responsive Design der Filterbox wurde optimiert, um eine bessere Bedienung auf verschiedenen Bildschirmgr\xf6\xdfen zu erlauben"),(0,a.kt)("h2",{id:"projekte--ma\xdfnahmen"},"Projekte & Ma\xdfnahmen"),(0,a.kt)("p",null,"Die Seiten zum Erstellen von Projekten und Ma\xdfnahmen wurden \xfcberarbeitet und lassen sich jetzt besser bedienen."),(0,a.kt)("h2",{id:"dokumentenmanagement---der-graph"},"Dokumentenmanagement - Der Graph"),(0,a.kt)("p",null,'Unser Ziel ist es jedem Mitarbeiter in Ihrem Unternehmen einen besseren \xdcberblick \xfcber Zusammenh\xe4nge und Abl\xe4ufe innerhalb der eigenen Organisation zu erm\xf6glichen. Um dies auch automatisiert zu erm\xf6glichen, gibt es jetzt die Funktion des "Document Graph" als ein experimentelles Feature. Diese Funktion durchsucht die Inhalte aller Ihrer Dokumente und stellt vorhandene Verlinkungen innerhalb der Dokumente in einem Diagramm zusammen. Sie k\xf6nnen in dieses Diagramm hinein- und herauszoomen, um auch bei umfangreicheren Dokumentenlandschaften einfach den \xdcberblick zu behalten.'),(0,a.kt)("p",null,"Hinweis: Es werden nur Dokumente indiziert, die als Texte mit dem integrierten Texteditor erstellt sind."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/releasenotes/70-images/mceclip1.png",alt:null})),(0,a.kt)("h2",{id:"qualit\xe4tsmonitor"},"Qualit\xe4tsmonitor"),(0,a.kt)("p",null,"Diverse Bereiche des Qualit\xe4tsmonitors verbessert. Dies betrifft insbesondere die Bereiche:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Reklamationen")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Projekte & Ma\xdfnahmen")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Schulungen"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/releasenotes/70-images/mceclip0.png",alt:null})),(0,a.kt)("h2",{id:"risiken--chancen"},"Risiken & Chancen"),(0,a.kt)("p",null,"Fehler behoben, der das Abspeichern von \xc4nderungen verhindert hat."))}u.isMDXComponent=!0}}]);