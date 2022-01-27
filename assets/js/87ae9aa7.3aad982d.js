"use strict";(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[67173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(n),g=i,d=c["".concat(s,".").concat(g)]||c[g]||p[g]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<a;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},32287:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>o,metadata:()=>l,assets:()=>s,toc:()=>m,default:()=>p});var r=n(83117),i=(n(67294),n(3905));const a={slug:"version-1_1_116",title:"Version 1.1.116",author:"Philipp P\xe4hler",author_title:"qmBase Development Team",author_image_url:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png",tags:["Mitarbeiter","Admin","Reklamationsmanagement","Changelog"]},o=void 0,l={permalink:"/blog/version-1_1_116",editUrl:"https://github.com/qmBase/docs/tree/master/blog/2020/03-24-version-1_1_116.md",source:"@site/blog/2020/03-24-version-1_1_116.md",title:"Version 1.1.116",description:"Mitarbeiter",date:"2020-03-24T00:00:00.000Z",formattedDate:"24. M\xe4rz 2020",tags:[{label:"Mitarbeiter",permalink:"/blog/tags/mitarbeiter"},{label:"Admin",permalink:"/blog/tags/admin"},{label:"Reklamationsmanagement",permalink:"/blog/tags/reklamationsmanagement"},{label:"Changelog",permalink:"/blog/tags/changelog"}],readingTime:.715,truncated:!1,authors:[{name:"Philipp P\xe4hler",title:"qmBase Development Team",imageURL:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png"}],frontMatter:{slug:"version-1_1_116",title:"Version 1.1.116",author:"Philipp P\xe4hler",author_title:"qmBase Development Team",author_image_url:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png",tags:["Mitarbeiter","Admin","Reklamationsmanagement","Changelog"]},prevItem:{title:"Version 1.1.117",permalink:"/blog/version-1_1_117"},nextItem:{title:"Version 1.1.115",permalink:"/blog/version-1_1_115"}},s={authorsImageUrls:[void 0]},m=[{value:"Mitarbeiter",id:"mitarbeiter",children:[],level:2},{value:"Admin",id:"admin",children:[],level:2},{value:"Reklamationsmanagement",id:"reklamationsmanagement",children:[],level:2}],u={toc:m};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"mitarbeiter"},"Mitarbeiter"),(0,i.kt)("p",null,"Die Darstellung des Organigramms ist jetzt etwas resistenter gegen unlogische Verkn\xfcpfungen und Zirkelbeziehungen in Organigrammen. Zus\xe4tzliche gibt es eine verbesserte \xdcbersicht aller Positionen \xfcber Mitarbeiter -> Abteilungen -> Alle Positionen (Link unterhalb der Tabelle). Hier wird darauf hingewiesen, wenn wir Verkn\xfcpfungen erkennen, die wir so in unserer Software nicht verarbeiten k\xf6nnen oder die Schlicht keinen Sinn ergeben (z.B. Zirkelbeziehungen oder Positionen, die keine Verkn\xfcpfung zu anderen Bereichen haben)"),(0,i.kt)("h2",{id:"admin"},"Admin"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Der Bereich Berechtigungen wurde umgestaltet. Es ist jetzt leichter zu sehen, wer worauf Zugriff hat und wie man zus\xe4tzliche Berechtigungen vergeben kann. Der Standardzugriff, also der Zugriff f\xfcr jeden neuen Nutzer, ist jetzt mit dem Zugriff f\xfcr die einzelnen Nutzer kombiniert, so dass auch das leichter zu erkennen ist.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/releasenotes/102-images/mceclip0.png",alt:null})),(0,i.kt)("h2",{id:"reklamationsmanagement"},"Reklamationsmanagement"),(0,i.kt)("p",null,"Der Ablauf des Ladens der Darstellung im Reklamationsmanagment wurde optimiert und f\xfchrt zu einem schnelleren Laden der Seite."))}p.isMDXComponent=!0}}]);