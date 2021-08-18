(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[6211],{3905:(e,n,r)=>{"use strict";r.d(n,{Zo:()=>c,kt:()=>h});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=t.createContext({}),s=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),h=i,g=d["".concat(o,".").concat(h)]||d[h]||p[h]||a;return r?t.createElement(g,l(l({ref:n},c),{},{components:r})):t.createElement(g,l({ref:n},c))}));function h(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var s=2;s<a;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63193:(e,n,r)=>{"use strict";r.r(n),r.d(n,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>u,toc:()=>o,default:()=>c});var t=r(22122),i=(r(67294),r(3905));const a={slug:"version-1_0_1_52",title:"Version 1.0.1.52",author:"Philipp P\xe4hler",author_title:"qmBase Development Team",author_image_url:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png",tags:[]},l=void 0,u={permalink:"/blog/version-1_0_1_52",editUrl:"https://github.com/qmBase/docs/tree/master/blog/2017-10-18-version-1_0_1_52.md",source:"@site/blog/2017-10-18-version-1_0_1_52.md",title:"Version 1.0.1.52",description:"Neben den gewohnten Funktionserweiterungen und Fehlerbehebungen haben wir uns im vergangen Entwicklungsabschnitt intensiv an Kernkompomenten der Software gearbeitet und hier generelle Verbesserungen erreicht. Diese werden deutlich durch eine deutlich reduzierte Gr\xf6\xdfe der Software (-18%). Dies f\xfchrt zu:",date:"2017-10-18T00:00:00.000Z",formattedDate:"18. Oktober 2017",tags:[],readingTime:.825,truncated:!1,prevItem:{title:"Version 1.0.1.53",permalink:"/blog/version-1_0_1_53"},nextItem:{title:"Version 1.0.1.51",permalink:"/blog/version-1_0_1_51"}},o=[{value:"Hinzugef\xfcgt",id:"hinzugef\xfcgt",children:[]},{value:"Ver\xe4ndert",id:"ver\xe4ndert",children:[]}],s={toc:o};function c({components:e,...n}){return(0,i.kt)("wrapper",(0,t.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Neben den gewohnten Funktionserweiterungen und Fehlerbehebungen haben wir uns im vergangen Entwicklungsabschnitt intensiv an Kernkompomenten der Software gearbeitet und hier generelle Verbesserungen erreicht. Diese werden deutlich durch eine deutlich reduzierte Gr\xf6\xdfe der Software (-18%). Dies f\xfchrt zu:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Geringerem Speicherbedarf in unserem Rechenzetrum oder auf Ihrem Server")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Schnellere Softwareverteilung")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"K\xfcrzere Ausfallzeiten w\xe4hrend der Softwareverteilung"))),(0,i.kt)("p",null,"Dar\xfcberhinaus haben wir durch diverse Anpassungen Geschwindigkeitszuw\xe4chse innerhalb der Software in einer Spanne zwischen 14-23% erreicht.\xa0"),(0,i.kt)("h3",{id:"hinzugef\xfcgt"},"Hinzugef\xfcgt"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Allgmein: Um neue Funktionen vorab auszutesten gibt es ab jetzt die M\xf6glichkeit aktiv einen Preview Modus zu aktivieren. Die M\xf6glichkeit hierzu befindet sich in den pers\xf6nlichen Profileinstellungen.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Chancen- und Risikomanagement: Im Preview Modus ist es m\xf6glich Risikokatgerorien zu erstellen und mit individuellen Bewertungsparametern zu versehen. Dies erm\xf6glich die Bewertung z.B. nach Kriterien einer FMEA (Fehlerm\xf6glichkeits- und -einflussanalyse) oder auch weiterhin nach Kriterien, wie der Eintrittswahrscheinlichkeit und finanziellen Auswirkungen"))),(0,i.kt)("h3",{id:"ver\xe4ndert"},"Ver\xe4ndert"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Einstellungen: Ablauf der Erstellung von Audittypen und Qualifikationen ver\xe4ndert, um eine versehentliche Eingabe ung\xfcltiger Wiederholungsintervalle zu vermeiden")),(0,i.kt)("h3",{id:""}))}c.isMDXComponent=!0}}]);