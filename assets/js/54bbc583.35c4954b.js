"use strict";(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[5758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,k=d(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,g=p["".concat(o,".").concat(s)]||p[s]||m[s]||l;return n?a.createElement(g,i(i({ref:t},k),{},{components:n})):a.createElement(g,i({ref:t},k))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},90298:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>d,metadata:()=>o,toc:()=>u,default:()=>m});var a=n(83117),r=(n(67294),n(3905)),l=n(89583);const i={id:"crm",title:"CRM"},d=void 0,o={unversionedId:"apps/crm",id:"apps/crm",isDocsHomePage:!1,title:"CRM",description:"FaPlus,",source:"@site/docs/apps/crm.md",sourceDirName:"apps",slug:"/apps/crm",permalink:"/docs/apps/crm",editUrl:"https://github.com/qmBase/docs/tree/master/docs/apps/crm.md",tags:[],version:"current",lastUpdatedAt:1638975561,formattedLastUpdatedAt:"8.12.2021",frontMatter:{id:"crm",title:"CRM"},sidebar:"someSidebar",previous:{title:"Blog",permalink:"/docs/apps/blog"},next:{title:"Dokumentenmanagement",permalink:"/docs/apps/document-management"}},u=[{value:"Zus\xe4tzliche Informationen zu Organisationen",id:"zus\xe4tzliche-informationen-zu-organisationen",children:[],level:2},{value:"Zus\xe4tzliche Informationen zu Kontaktpersonen",id:"zus\xe4tzliche-informationen-zu-kontaktpersonen",children:[],level:2},{value:"Ma\xdfnahmen",id:"ma\xdfnahmen",children:[],level:2},{value:"Reklamationen",id:"reklamationen",children:[],level:2},{value:"Bewertungen",id:"bewertungen",children:[],level:2}],k={toc:u};function m({components:e,...t}){return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/public-screenshots/All%20Integration%20Specs/Crm.png",alt:"t"})),(0,r.kt)("p",null,"Das CRM ist die zentrale Kontaktverwaltung innerhalb von qmBase. Weitere Apps wie das ",(0,r.kt)("a",{parentName:"p",href:"claim-management"},"Reklmationsmanagement")," oder das ",(0,r.kt)("a",{parentName:"p",href:"projects-and-tasks"},"Projekt- & Ma\xdfnahmenmanagement")," greifen auf diese Kontakte zu. Kontakte werden als Organisationen mit einer beliebigen Anzahl an Personen erfasst. Die Kontakte k\xf6nnen als Kunden oder Lieferanten klassifiziert werden. Zu den Kontakten k\xf6nnen entsprechend Kundenbewertungen oder Lieferantenbewertungen hinterlegt werden."),(0,r.kt)("h1",{id:"kontakte-anlegen"},"Kontakte anlegen"),(0,r.kt)("p",null,"In der Navigationsleiste auf der linken Seite wird \xfcber den Men\xfcpunkt ",(0,r.kt)("code",null,(0,r.kt)(l.hON,{mdxType:"FaListUl"})," Kontakte")," eine \xdcbersichtstabelle mit allen bestehenden Kontakten aufgerufen. Mit dem Button ",(0,r.kt)("code",null,(0,r.kt)(l.wEH,{mdxType:"FaPlus"})," Neu")," oberhalb der Tabelle werden neue Kontakte erstellt. In dem sich \xf6ffnenden Dialogfenster kann eine ",(0,r.kt)("strong",{parentName:"p"},"Firmen- Organisationsname")," oder der Name einer Kontaktperson eingetragen werden. Werden beide Felder ausgef\xfcllt, wir die Kontaktperson direkt der Organisation zugeordnet."),(0,r.kt)("h2",{id:"zus\xe4tzliche-informationen-zu-organisationen"},"Zus\xe4tzliche Informationen zu Organisationen"),(0,r.kt)("p",null,"Nachdem eine Organistion erstellt wurde k\xf6nnen weitere Informationen dazu erfasst werden. Folgende Felder stehen insgesamt zur Verfugung:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Typ"),(0,r.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Schlagworte")),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Schlagworte bieten die M\xf6glichkeit Kontakte \xfcbergeordnet zu strukturieren")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Verantwortlicher")),(0,r.kt)("td",{parentName:"tr",align:null},"Liste"),(0,r.kt)("td",{parentName:"tr",align:null},"Person, die f\xfcr den Kontakt verantwortlich ist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Name")),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Name der Organisation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Beschreibung")),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Hier k\xf6nnen weitere Informationen zu dem Kontakt hinterlegt werden")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Externe ID")),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Referenz zu dem gleichen Kontakt in einer anderen Software")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"URL")),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Hier kann die Webseite des Kontakts eingetragen werden")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Lieferant")),(0,r.kt)("td",{parentName:"tr",align:null},"Checkbox"),(0,r.kt)("td",{parentName:"tr",align:null},"Markierung des Kontaktes als Lieferant")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Kunde")),(0,r.kt)("td",{parentName:"tr",align:null},"Checkbox"),(0,r.kt)("td",{parentName:"tr",align:null},"Markierung des Kontaktes als Kunde")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"E-Mail")),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"E-Mail-Adresse des Kontakts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Telefon")),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Telefonnummer des Kontakts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Adressen")),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Adressen des Kontakts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Mitarbeiter und Kontaktpersonen")),(0,r.kt)("td",{parentName:"tr",align:null},"Liste"),(0,r.kt)("td",{parentName:"tr",align:null},"Adresse des Kontakts")))),(0,r.kt)("h2",{id:"zus\xe4tzliche-informationen-zu-kontaktpersonen"},"Zus\xe4tzliche Informationen zu Kontaktpersonen"),(0,r.kt)("p",null,"Nachdem eine Kontaktperson erstellt wurde k\xf6nnen weitere Informationen dazu erfasst werden. Folgende Felder stehen insgesamt zur Verf\xfcgung:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Typ"),(0,r.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Schlagworte")),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Schlagworte bieten die M\xf6glichkeit Kontakte \xfcbergeordnet zu strukturieren")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Anrede")),(0,r.kt)("td",{parentName:"tr",align:null},"Liste"),(0,r.kt)("td",{parentName:"tr",align:null},"Wie wird die Kontaktperson angesprochen?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Vorname")),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Vorname der Kontaktperson")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Nachname")),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Nachname der Kontaktperson")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Externe ID")),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Referenz zu der gleichen Kontaktperson in einer anderen Software")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"E-Mail")),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"E-Mail-Adresse des Kontaktperson")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Geburtstag")),(0,r.kt)("td",{parentName:"tr",align:null},"Datum"),(0,r.kt)("td",{parentName:"tr",align:null},"Geburtsdatum der Kontaktperson")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Telefon")),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Telefonnummern des Kontaktperson")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Adressen")),(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Adressen des Kontaktperson")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"Organisationen")),(0,r.kt)("td",{parentName:"tr",align:null},"Liste"),(0,r.kt)("td",{parentName:"tr",align:null},"Organisationen f\xfcr die die Kontaktperson t\xe4tig ist")))),(0,r.kt)("p",null,"TODO: Verweis auf Pflichtfelder"),(0,r.kt)("h1",{id:"verkn\xfcpfungen-mit-weiteren-objekten-und-informationen"},"Verkn\xfcpfungen mit weiteren Objekten und Informationen"),(0,r.kt)("h2",{id:"ma\xdfnahmen"},"Ma\xdfnahmen"),(0,r.kt)("p",null,"Zu jeder Organisation k\xf6nnen in der Ma\xdfnahmentabelle \xfcber den Button ",(0,r.kt)("code",null,(0,r.kt)(l.wEH,{mdxType:"FaPlus"})," Hinzuf\xfcgen")," Ma\xdfnahmen verkn\xfcpft werden. Mehr \xfcber Ma\xdfnahmen erfahren Sie im ",(0,r.kt)("a",{parentName:"p",href:"projects-and-tasks"},"Projekt- Ma\xdfnahmenmanagement")),(0,r.kt)("h2",{id:"reklamationen"},"Reklamationen"),(0,r.kt)("p",null,"Im ",(0,r.kt)("a",{parentName:"p",href:"claim-management"},"Reklamationsmanagement")," k\xf6nnen Sie Ihre Kunden- & Lieferantenreklamationen erfassen und direkt mit den betroffenen Kontakten verkn\xfcpfen. Dazu greift das Reklamationsmanagement auf die Kontaktdaten aus dem CRM zu. Im CRM wiederum werden zu jedem Kontakt direkt die dazugeh\xf6rigen Reklamationen dargestellt."),(0,r.kt)("h2",{id:"bewertungen"},"Bewertungen"),(0,r.kt)("p",null,"Jeder Kontakt in qmBase kann bewertet werden. Dabei kann es sich um Kunden- oder Lieferantenbewertungen handeln. Die Bewertungshistorie zu jedem Kontakt wird immer auf der rechte Seite auf der Karte ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Bewertungen"))," angezeigt. Wollen Sie eine Bewertung hinzuf\xfcgen klicken Sie einfach auf den ",(0,r.kt)(l.wEH,{mdxType:"FaPlus"}),"-Button."),(0,r.kt)("p",null,"Jeder Kontakt wird auf einer Skala von 0-100% bewertet. Ein Kommentarfeld erlaubt die Erfassung zus\xe4tzlicher Informationen."),(0,r.kt)("p",null,"Sobald die Bewertung erstellt wurde, wird sie auch auch in der \xdcbersicht der Bewertungen dargesellt. Die Tabbellenspalte ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ID"))," f\xfchrt zu der Detailansicht der Bewertung. Dort kann die Bewertung bearbeitet werden und es k\xf6nnen weitere Dokumente angef\xfcgt werden."),(0,r.kt)("p",null,"Eine \xdcbersicht \xfcber alle Bewertungen aller Kontakte erreichen Sie \xfcber den Men\xfcpunkt ",(0,r.kt)("code",null,(0,r.kt)(l.TtB,{mdxType:"FaStarHalfAlt"})),". \xdcber den Button ",(0,r.kt)("code",null,(0,r.kt)(l.wEH,{mdxType:"FaPlus"}))," k\xf6nnen Sie dort ebenfalls Bewertungen erfassen. In diesem Fall m\xfcssen aber zus\xe4tzlich den zu bewertenden Kontakt ausw\xe4hlen."),(0,r.kt)("p",null,"Die Men\xfcpunkte ",(0,r.kt)("code",null,(0,r.kt)(l.FdW,{mdxType:"FaChessKing"})," Kundenbewertung")," und ",(0,r.kt)("code",null,(0,r.kt)(l.C5q,{mdxType:"FaShippingFast"})," Lieferantenbewertungen")," zeigen jeweils nur die Bewertungen f\xfcr Kunden bzw. Lieferanten."))}m.isMDXComponent=!0}}]);