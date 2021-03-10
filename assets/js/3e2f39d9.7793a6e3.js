(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{205:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),i=t(8),a=(t(0),t(600)),o={slug:"version-1_1_116",title:"Version 1.1.116",author:"Philipp P\xe4hler",author_title:"qmBase Development Team",author_image_url:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png",tags:["Mitarbeiter","Admin","Reklamationsmanagement","Changelog"]},l={permalink:"/blog/version-1_1_116",editUrl:"https://github.com/qmBase/docs/tree/master/blog/2020-03-24-version-1_1_116.md",source:"@site/blog/2020-03-24-version-1_1_116.md",description:"Mitarbeiter",date:"2020-03-24T00:00:00.000Z",formattedDate:"March 24, 2020",tags:[{label:"Mitarbeiter",permalink:"/blog/tags/mitarbeiter"},{label:"Admin",permalink:"/blog/tags/admin"},{label:"Reklamationsmanagement",permalink:"/blog/tags/reklamationsmanagement"},{label:"Changelog",permalink:"/blog/tags/changelog"}],title:"Version 1.1.116",readingTime:.715,truncated:!1,prevItem:{title:"Version 1.1.117",permalink:"/blog/version-1_1_117"},nextItem:{title:"Version 1.1.115",permalink:"/blog/version-1_1_115"}},c=[{value:"Mitarbeiter",id:"mitarbeiter",children:[]},{value:"Admin",id:"admin",children:[]},{value:"Reklamationsmanagement",id:"reklamationsmanagement",children:[]}],s={toc:c};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"mitarbeiter"},"Mitarbeiter"),Object(a.b)("p",null,"Die Darstellung des Organigramms ist jetzt etwas resistenter gegen unlogische Verkn\xfcpfungen und Zirkelbeziehungen in Organigrammen. Zus\xe4tzliche gibt es eine verbesserte \xdcbersicht aller Positionen \xfcber Mitarbeiter -> Abteilungen -> Alle Positionen (Link unterhalb der Tabelle). Hier wird darauf hingewiesen, wenn wir Verkn\xfcpfungen erkennen, die wir so in unserer Software nicht verarbeiten k\xf6nnen oder die Schlicht keinen Sinn ergeben (z.B. Zirkelbeziehungen oder Positionen, die keine Verkn\xfcpfung zu anderen Bereichen haben)"),Object(a.b)("h2",{id:"admin"},"Admin"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Der Bereich Berechtigungen wurde umgestaltet. Es ist jetzt leichter zu sehen, wer worauf Zugriff hat und wie man zus\xe4tzliche Berechtigungen vergeben kann. Der Standardzugriff, also der Zugriff f\xfcr jeden neuen Nutzer, ist jetzt mit dem Zugriff f\xfcr die einzelnen Nutzer kombiniert, so dass auch das leichter zu erkennen ist.")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/releasenotes/102-images/mceclip0.png",alt:null})),Object(a.b)("h2",{id:"reklamationsmanagement"},"Reklamationsmanagement"),Object(a.b)("p",null,"Der Ablauf des Ladens der Darstellung im Reklamationsmanagment wurde optimiert und f\xfchrt zu einem schnelleren Laden der Seite."))}u.isMDXComponent=!0},600:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return g}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),u=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(t),p=r,g=m["".concat(o,".").concat(p)]||m[p]||b[p]||a;return t?i.a.createElement(g,l(l({ref:n},s),{},{components:t})):i.a.createElement(g,l({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);