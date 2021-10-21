(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[94728],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>u,kt:()=>p});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),o=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=o(e.components);return i.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=o(t),p=r,m=g["".concat(c,".").concat(p)]||g[p]||d[p]||l;return t?i.createElement(m,a(a({ref:n},u),{},{components:t})):i.createElement(m,a({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var o=2;o<l;o++)a[o]=t[o];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},46341:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>a,metadata:()=>s,toc:()=>c,default:()=>u});var i=t(74034),r=(t(67294),t(3905));const l={id:"integrations",title:"Integrationen / Schnittstellen",sidebar_label:"Integrations / Schnittstellen",slug:"/technical/integrations"},a=void 0,s={unversionedId:"technical/integrations",id:"technical/integrations",isDocsHomePage:!1,title:"Integrationen / Schnittstellen",description:"Schnittstellen zu anderen Systemen",source:"@site/docs/technical/integrations.mdx",sourceDirName:"technical",slug:"/technical/integrations",permalink:"/docs/technical/integrations",editUrl:"https://github.com/qmBase/docs/tree/master/docs/technical/integrations.mdx",tags:[],version:"current",lastUpdatedAt:1634822283,formattedLastUpdatedAt:"21.10.2021",frontMatter:{id:"integrations",title:"Integrationen / Schnittstellen",sidebar_label:"Integrations / Schnittstellen",slug:"/technical/integrations"},sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/technical/installation"},next:{title:"Tutorial Template",permalink:"/docs/tutorial-template"}},c=[{value:"Schnittstellen zu anderen Systemen",id:"schnittstellen-zu-anderen-systemen",children:[{value:"Ablauf der Synchronisierung mit anderen Systemen",id:"ablauf-der-synchronisierung-mit-anderen-systemen",children:[],level:3},{value:"Authentifizierung mit externen Systemen",id:"authentifizierung-mit-externen-systemen",children:[],level:3},{value:"Wie oft sollten die Daten synchronisiert werden?",id:"wie-oft-sollten-die-daten-synchronisiert-werden",children:[],level:3},{value:"M\xf6gliche Daten f\xfcr Schnittstellen",id:"m\xf6gliche-daten-f\xfcr-schnittstellen",children:[{value:"Beispiel - Schnittstelle f\xfcr Organisationen",id:"beispiel---schnittstelle-f\xfcr-organisationen",children:[],level:4},{value:"Schnittstelle f\xfcr Produkte",id:"schnittstelle-f\xfcr-produkte",children:[],level:4}],level:3}],level:2}],o={toc:c};function u({components:e,...n}){return(0,r.kt)("wrapper",(0,i.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"schnittstellen-zu-anderen-systemen"},"Schnittstellen zu anderen Systemen"),(0,r.kt)("p",null,"Die Daten Ihrer Organisation werden m\xf6glicherweise in mehreren Software Systemen innerhalb Ihrer Organisation ben\xf6tigt.\nH\xe4ufig gibt es bereits ein ERP-System, das als f\xfchrendes System die Stammdaten verwaltet.\nRedundante Datenerfassung ist i.d.R. keine L\xf6sung f\xfcr dieses Herausforderung. Die Probleme liegen auf der Hand wie z.B."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Zeitintensiv durch mehrfache Arbeit"),(0,r.kt)("li",{parentName:"ul"},"Fehleranf\xe4llig durch fehlerhafte Eingaben"),(0,r.kt)("li",{parentName:"ul"},"Fehlende Synchronit\xe4t der Daten durch verz\xf6gerte Dateneingabe.")),(0,r.kt)("p",null,"Zur L\xf6sung dieser Herausforderung bieten wir Schnittstellen zu anderen Systemen an. Diese Schnittstellen lassen sich h\xe4ufig schnell einrichten. Sprechen Sie uns darauf an, wir machen es m\xf6glich!"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Dieses Dokument beschreibt lediglich M\xf6glichkeiten und Ablauf der Synchronisierung. Synchronisierungen lassen sich nicht durch die Nutzer selbst einrichten."))),(0,r.kt)("h3",{id:"ablauf-der-synchronisierung-mit-anderen-systemen"},"Ablauf der Synchronisierung mit anderen Systemen"),(0,r.kt)("p",null,"Die Synchronisation mit anderen Systemen erfolgt f\xfcr verschiedene Entit\xe4ten immer nach dem gleichen Schema. Es wird eine Update Frequenz definiert und dann k\xf6nnen die Daten Synchronisiert werden.\nDer Erste Abgleich dauert meistens etwas l\xe4nger da alle Daten \xfcbertragen werden. Die weiteren Aktualisierungen versuchen dann jeweils nur die \xc4nderungen seit dem letzten Update abzufragen.\nFolgende grunds\xe4tzliche Regeln gelten f\xfcr unsere Schnittstellen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Beim Abgleich mit anderen Systemen werden in qmBase nur Daten ",(0,r.kt)("strong",{parentName:"li"},"hinzugef\xfcgt"),"."),(0,r.kt)("li",{parentName:"ul"},"Es werden keine bestehenden Daten gel\xf6scht."),(0,r.kt)("li",{parentName:"ul"},"Wir ben\xf6tigen ein Identifikationsmerkmal (ID) f\xfcr unsere Synchronisation. Diese ID wird dann in unserer Datenbank als Externe ID gef\xfchrt, um diese dann im weiteren Verlauf f\xfcr Updates zu nutzen."),(0,r.kt)("li",{parentName:"ul"},"Sollten in dem externen System doppelte IDs vorkommen schl\xe4gt die Synchronisation fehl.")),(0,r.kt)("h3",{id:"authentifizierung-mit-externen-systemen"},"Authentifizierung mit externen Systemen"),(0,r.kt)("p",null,"Die Authentifizierung mit externen Systemen kann entweder \xfcber besondere Query Parameter oder f\xfcr festgelegte Header Werte, die w\xe4hrend der Abfrage \xfcbermittelt werden erfolgen."),(0,r.kt)("h3",{id:"wie-oft-sollten-die-daten-synchronisiert-werden"},"Wie oft sollten die Daten synchronisiert werden?"),(0,r.kt)("p",null,"Hier kommt es darauf an, wie h\xe4ufig sich Ihre Stammdaten \xe4ndern. \xdcblicherweise sollte es aber ausreichen, wenn pro Schicht also etwa alle 8h ein Abgleich stattfindet. Dies schont die Ressourcen aller beteiligten Systeme."),(0,r.kt)("h3",{id:"m\xf6gliche-daten-f\xfcr-schnittstellen"},"M\xf6gliche Daten f\xfcr Schnittstellen"),(0,r.kt)("p",null,"Zus\xe4tzlich zu individuellen L\xf6sungen bieten sich die folgenden Daten f\xfcr eine Synchronisation an:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Organisationen"),(0,r.kt)("li",{parentName:"ul"},"Mitarbeiter"),(0,r.kt)("li",{parentName:"ul"},"Produkte"),(0,r.kt)("li",{parentName:"ul"},"Auftr\xe4ge"),(0,r.kt)("li",{parentName:"ul"},"Kennzahlen und Kpis, die im Zielmanagement dargestellt werden k\xf6nnen")),(0,r.kt)("h4",{id:"beispiel---schnittstelle-f\xfcr-organisationen"},"Beispiel - Schnittstelle f\xfcr Organisationen"),(0,r.kt)("p",null,"Bei Organisation werden folgende Informationen \xfcbernommen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"}," public class Organisation\n    {\n        public Organisation();\n\n        public string OrganisationId { get; set; }\n        public string Name { get; set; }\n        public string Description { get; set; }\n        public string ContactPerson { get; set; }\n        public bool IsSupplier { get; set; }\n        public bool IsCustomer { get; set; }\n        public string Telephone { get; set; }\n        public string Email { get; set; }\n        public string Url { get; set; }\n        public Address Address { get; set; }\n        public List<Person> ContactPersons { get; set; }\n    }\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"}," public class Address\n    {\n        public Address();\n\n        public string CountryCode { get; set; }\n        public string Country { get; set; }\n        public string Street { get; set; }\n        public string StreetNumber { get; set; }\n        public string ZipCode { get; set; }\n        public string City { get; set; }\n    }\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Person\n    {\n        public Person();\n\n        public string PersonId { get; set; }\n        public Gender Gender { get; set; }\n        public string FirstName { get; set; }\n        public string LastName { get; set; }\n        public string Email { get; set; }\n        public string Telephone { get; set; }\n    }\n")),(0,r.kt)("h4",{id:"schnittstelle-f\xfcr-produkte"},"Schnittstelle f\xfcr Produkte"),(0,r.kt)("p",null,"Bei Produkten werden folgende Informationen \xfcbernommen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Product\n    {\n        public Product();\n\n        public string ProductId { get; set; }\n        public string Name { get; set; }\n        public string Description { get; set; }\n    }\n")))}u.isMDXComponent=!0}}]);