(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[75510],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),m=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(t),d=a,g=c["".concat(s,".").concat(d)]||c[d]||p[d]||i;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},61419:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>o,assets:()=>s,toc:()=>m,default:()=>p});var r=t(22122),a=(t(67294),t(3905));const i={slug:"version-1_1_75",title:"Version 1.1.75",author:"Philipp P\xe4hler",author_title:"qmBase Development Team",author_image_url:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png",tags:["Allgemein","Auditmanagement","Personal","Changelog"]},l=void 0,o={permalink:"/blog/version-1_1_75",editUrl:"https://github.com/qmBase/docs/tree/master/blog/2018-12-03-version-1_1_75.md",source:"@site/blog/2018-12-03-version-1_1_75.md",title:"Version 1.1.75",description:"Allgemein",date:"2018-12-03T00:00:00.000Z",formattedDate:"3. Dezember 2018",tags:[{label:"Allgemein",permalink:"/blog/tags/allgemein"},{label:"Auditmanagement",permalink:"/blog/tags/auditmanagement"},{label:"Personal",permalink:"/blog/tags/personal"},{label:"Changelog",permalink:"/blog/tags/changelog"}],readingTime:.645,truncated:!1,authors:[{name:"Philipp P\xe4hler",title:"qmBase Development Team",imageURL:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png"}],prevItem:{title:"Version 1.1.76",permalink:"/blog/version-1_1_76"},nextItem:{title:"Version 1.1.74",permalink:"/blog/version-1_1_74"}},s={authorsImageUrls:[void 0]},m=[{value:"Allgemein",id:"allgemein",children:[]},{value:"Auditmanagement",id:"auditmanagement",children:[]},{value:"Personal",id:"personal",children:[{value:"Fehler behoben",id:"fehler-behoben",children:[]}]}],u={toc:m};function p({components:e,...n}){return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"allgemein"},"Allgemein"),(0,a.kt)("p",null,"Im Bereich Profil -> ",(0,a.kt)("a",{parentName:"p",href:"https://support.qmbase.com/Account/findworkspace?returnUrl=/profil/profil/usersettings"},"Nutzereinstellungen")," kann die Reihenfolge der Namensanzeige ge\xe4ndert werden. Die betrifft die Sortierung der Namen in den verschiedensten Tabellenansichten. Sollte f\xfcr Sie also die Reihenfolge Nachname, Vorname die gewohnte Darstellung sein, k\xf6nnen Sie das jetzt \xe4ndern."),(0,a.kt)("h2",{id:"auditmanagement"},"Auditmanagement"),(0,a.kt)("p",null,"Erweiterung der Darstellung des Auditplans. Zur besseren \xdcbersicht k\xf6nnen jetzt neben der Tabellenanasicht die Audittermine auch in einer Kalenderansicht dargestellt werden."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/releasenotes/60-images/AudiIndex.gif",alt:null})),(0,a.kt)("h2",{id:"personal"},"Personal"),(0,a.kt)("p",null,"Optimierung des Organigramms. Im Organigramm werden jetzt auch zus\xe4tzlich zu den Positionen die Abteilungen mit angezeigt. In den n\xe4chsten Schritten werden wir hier die Darstellung noch weiter optimieren."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/releasenotes/60-images/Organigramm.gif",alt:null})),(0,a.kt)("h3",{id:"fehler-behoben"},"Fehler behoben"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Das Suchen von Adressen wurde verbessert. Die Gro\xdf/Kleinschreibung wurde hier beachtet, was zu unerwarteten Ergebnissen gef\xfchrt hat.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Best\xe4titung der Kenntnisnahme bei Dokumenten hat unter Umst\xe4nden nicht immer funktioniert."))))}p.isMDXComponent=!0}}]);