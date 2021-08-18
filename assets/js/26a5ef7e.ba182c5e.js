(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[27882],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>m,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),o=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=o(e.components);return r.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=o(t),h=a,p=c["".concat(s,".").concat(h)]||c[h]||g[h]||i;return t?r.createElement(p,l(l({ref:n},m),{},{components:t})):r.createElement(p,l({ref:n},m))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var o=2;o<i;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},87796:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>u,toc:()=>s,default:()=>m});var r=t(22122),a=(t(67294),t(3905));const i={title:"Version 1.1.155",author:"Philipp P\xe4hler",author_title:"qmBase Development Team",author_image_url:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png",tags:["Allgemein","Abwesenheitsplaner","Blog","Dokumentenmanagement","Instandhaltung","Mitarbeiter","Reklamationsmanagement","Risiken & Chancen","Schulungsmanagement","Wiki"]},l=void 0,u={permalink:"/blog/2021/08/07/Version-1_1_155",editUrl:"https://github.com/qmBase/docs/tree/master/blog/2021-08-07-Version-1_1_155.md",source:"@site/blog/2021-08-07-Version-1_1_155.md",title:"Version 1.1.155",description:"Version 1.1.155 ist mit Fehlerbehebungen und Detailverbesserungen verf\xfcgbar.",date:"2021-08-07T00:00:00.000Z",formattedDate:"7. August 2021",tags:[{label:"Allgemein",permalink:"/blog/tags/allgemein"},{label:"Abwesenheitsplaner",permalink:"/blog/tags/abwesenheitsplaner"},{label:"Blog",permalink:"/blog/tags/blog"},{label:"Dokumentenmanagement",permalink:"/blog/tags/dokumentenmanagement"},{label:"Instandhaltung",permalink:"/blog/tags/instandhaltung"},{label:"Mitarbeiter",permalink:"/blog/tags/mitarbeiter"},{label:"Reklamationsmanagement",permalink:"/blog/tags/reklamationsmanagement"},{label:"Risiken & Chancen",permalink:"/blog/tags/risiken-chancen"},{label:"Schulungsmanagement",permalink:"/blog/tags/schulungsmanagement"},{label:"Wiki",permalink:"/blog/tags/wiki"}],readingTime:.995,truncated:!0,prevItem:{title:"Version 1.1.155",permalink:"/blog/2021/08/18/Version-1_1_156"},nextItem:{title:"Version 1.1.154",permalink:"/blog/2021/07/15/Version-1_1_154"}},s=[{value:"Allgemein",id:"allgemein",children:[]},{value:"Abwesenheitsplaner",id:"abwesenheitsplaner",children:[]},{value:"Blog, Dokumentenmanagement und Wiki",id:"blog-dokumentenmanagement-und-wiki",children:[]},{value:"Instandhaltung",id:"instandhaltung",children:[]},{value:"Mitarbeiter",id:"mitarbeiter",children:[]},{value:"Reklamationsmanagement",id:"reklamationsmanagement",children:[]},{value:"Risiken &amp; Chancen",id:"risiken--chancen",children:[]},{value:"Schulungsmanagement",id:"schulungsmanagement",children:[]}],o={toc:s};function m({components:e,...n}){return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Version 1.1.155 ist mit Fehlerbehebungen und Detailverbesserungen verf\xfcgbar."),(0,a.kt)("h2",{id:"allgemein"},"Allgemein"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bei der Zugriffsanfrage Benachrichtigung wird jetzt standardm\xe4\xdfig auch die anfragende Person mit \xfcbermittelt."),(0,a.kt)("li",{parentName:"ul"},"Die Toast Benachrichtigungen (kleine Pop-ups z.B. beim Speichern von Einstellungen) sind jetzt alle in unserem neuen Design.")),(0,a.kt)("h2",{id:"abwesenheitsplaner"},"Abwesenheitsplaner"),(0,a.kt)("p",null,"Der Kalender im Abwesenheitsplaner wurde in einigen Details verbessert, um Ihre Daten besser anzeigen zu k\xf6nnen."),(0,a.kt)("h2",{id:"blog-dokumentenmanagement-und-wiki"},"Blog, Dokumentenmanagement und Wiki"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Wir haben die Vergleichsansicht f\xfcr Dokumente weiter verbessert. Zus\xe4tzlich k\xf6nnen Sie jetzt auch bestehende Dokumente mit Ihren Dokumentenvorlagen vergleichen.")),(0,a.kt)("h2",{id:"instandhaltung"},"Instandhaltung"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Neue Export Funktionen f\xfcr anstehende Pr\xfcfungen und durchgef\xfchrte Pr\xfcfungen."),(0,a.kt)("li",{parentName:"ul"},"Zahlreiche Filterfunktionen f\xfcr anstehende Pr\xfcfungen hinzugef\xfcgt.")),(0,a.kt)("h2",{id:"mitarbeiter"},"Mitarbeiter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Wir verbessern den Komfort in unseren Tabellen. Die aktuelle Seite wird jetzt nicht mehr bei jedem Filterwechsel zur\xfcckgesetzt."),(0,a.kt)("li",{parentName:"ul"},"In Modalen (Pop-Ups) um Mitarbeiter z.B. als Schulungsteilnehmer hinzuzuf\xfcgen, kann jetzt auch gefiltert werden. Dies ist z.B. hilfreich, wenn man alle Personen aus einer Abteilung in eine Schulung einladen m\xf6chte.")),(0,a.kt)("h2",{id:"reklamationsmanagement"},"Reklamationsmanagement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Spalte in Tabelle "Ist gerechtfertigt" hinzugef\xfcgt.')),(0,a.kt)("h2",{id:"risiken--chancen"},"Risiken & Chancen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sollten Kategorien zur Bewertung noch nicht vollst\xe4ndig definiert sein, wird zuk\xfcnftig deutlicher darauf hingewiesen.")),(0,a.kt)("h2",{id:"schulungsmanagement"},"Schulungsmanagement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kommentare von Schulungsteilnehmern sind jetzt aus der \xdcbersicht der Schulungsteilnehmer sichtbar.")))}m.isMDXComponent=!0}}]);