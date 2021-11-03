"use strict";(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[89533],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),m=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=m(t),d=a,p=g["".concat(s,".").concat(d)]||g[d]||c[d]||i;return t?r.createElement(p,l(l({ref:n},u),{},{components:t})):r.createElement(p,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},13445:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>o,assets:()=>s,toc:()=>m,default:()=>c});var r=t(83117),a=(t(67294),t(3905));const i={slug:"version-1_1_105",title:"Version 1.1.105",author:"Philipp P\xe4hler",author_title:"qmBase Development Team",author_image_url:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png",tags:["Reklamationsmanagement","Schulungsmanagement","Admin","Allgemein","Changelog"]},l=void 0,o={permalink:"/blog/version-1_1_105",editUrl:"https://github.com/qmBase/docs/tree/master/blog/2019-11-21-version-1_1_105.md",source:"@site/blog/2019-11-21-version-1_1_105.md",title:"Version 1.1.105",description:"Reklamationsmanagement",date:"2019-11-21T00:00:00.000Z",formattedDate:"21. November 2019",tags:[{label:"Reklamationsmanagement",permalink:"/blog/tags/reklamationsmanagement"},{label:"Schulungsmanagement",permalink:"/blog/tags/schulungsmanagement"},{label:"Admin",permalink:"/blog/tags/admin"},{label:"Allgemein",permalink:"/blog/tags/allgemein"},{label:"Changelog",permalink:"/blog/tags/changelog"}],readingTime:.745,truncated:!1,authors:[{name:"Philipp P\xe4hler",title:"qmBase Development Team",imageURL:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png"}],prevItem:{title:"Version 1.1.106",permalink:"/blog/version-1_1_106"},nextItem:{title:"Version 1.1.104",permalink:"/blog/version-1_1_104"}},s={authorsImageUrls:[void 0]},m=[{value:"Reklamationsmanagement",id:"reklamationsmanagement",children:[],level:2},{value:"Schulungsmanagement",id:"schulungsmanagement",children:[],level:2},{value:"Admin",id:"admin",children:[],level:2},{value:"Allgemein",id:"allgemein",children:[],level:2}],u={toc:m};function c({components:e,...n}){return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"reklamationsmanagement"},"Reklamationsmanagement"),(0,a.kt)("p",null,"Custom Fields hinzugef\xfcgt: Individualisieren Sie das Reklamationsformular nach Ihren eigenen Bed\xfcrfnissen und f\xfcgen Sie weitere Felder hinzu, um die Informationen strukturiert zu erfassen, die Sie bisher im Beschreibungstext unterbringen konnten."),(0,a.kt)("h2",{id:"schulungsmanagement"},"Schulungsmanagement"),(0,a.kt)("p",null,'Fehler beseitigt bei dem das Fenster zum Hinzuf\xfcgen von Teilnehmern nach einem Klick auf den "Speichern" Button wieder neu ge\xf6ffent wird.'),(0,a.kt)("h2",{id:"admin"},"Admin"),(0,a.kt)("p",null,"Link zu Mitarbeiterprofilen korrigiert."),(0,a.kt)("h2",{id:"allgemein"},"Allgemein"),(0,a.kt)("p",null,"Wir haben die Art und Weise, wie qmBase zu Ihrem Endger\xe4t kommt verbessert. Die Daten werden jetzt in einem besser komprimierten Format ausgeliefert. Dadurch werden die einzelnen Dateien, die ben\xf6tigt werden, um qmBase zu laden auf ca. 30% der vorherigen Gr\xf6\xdfe reduziert."),(0,a.kt)("p",null,"Was bedeutet das f\xfcr Sie?"),(0,a.kt)("p",null,"Die Seite wird jetzt deutlich schneller geladen. Dieser Effekt verst\xe4rkt sich insbesondere dann, wenn qmBase z.B. \xfcber eine mobile Datenverbindung geladen wird. Die Reduzierung der Ladezeiten ist in dem folgenden Diagramm dargestellt."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/releasenotes/90-images/mceclip0.png",alt:null})),(0,a.kt)("p",null,"x-Achse: Zeitverlauf; y-Achse: Ladezeit in ms"))}c.isMDXComponent=!0}}]);