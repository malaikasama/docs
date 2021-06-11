(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[81142],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return p}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(t),p=i,h=d["".concat(l,".").concat(p)]||d[p]||g[p]||a;return t?r.createElement(h,o(o({ref:n},s),{},{components:t})):r.createElement(h,o({ref:n},s))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61556:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return g}});var r=t(22122),i=t(19756),a=(t(67294),t(3905)),o=["components"],u={slug:"version-1_1_141",title:"Version 1.1.141",author:"Philipp P\xe4hler",author_title:"qmBase Development Team",author_image_url:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png",tags:["Instandhaltung - wichtige \xc4nderung","Nutzer Account","CRM","Changelog"]},l={permalink:"/blog/version-1_1_141",editUrl:"https://github.com/qmBase/docs/tree/master/blog/2020-12-22-version-1_1_141.md",source:"@site/blog/2020-12-22-version-1_1_141.md",title:"Version 1.1.141",description:"Instandhaltung - wichtige \xc4nderung",date:"2020-12-22T00:00:00.000Z",formattedDate:"22. Dezember 2020",tags:[{label:"Instandhaltung - wichtige \xc4nderung",permalink:"/blog/tags/instandhaltung-wichtige-anderung"},{label:"Nutzer Account",permalink:"/blog/tags/nutzer-account"},{label:"CRM",permalink:"/blog/tags/crm"},{label:"Changelog",permalink:"/blog/tags/changelog"}],readingTime:.925,truncated:!1,prevItem:{title:"Version 1.1.142",permalink:"/blog/version-1_1_142"},nextItem:{title:"Version 1.1.140",permalink:"/blog/version-1_1_140"}},c=[{value:"Instandhaltung - wichtige \xc4nderung",id:"instandhaltung---wichtige-\xe4nderung",children:[]},{value:"Nutzer Account",id:"nutzer-account",children:[]},{value:"CRM",id:"crm",children:[]}],s={toc:c};function g(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"instandhaltung---wichtige-\xe4nderung"},"Instandhaltung - wichtige \xc4nderung"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Achtung: Logik zur Berechnung der Vorwarnzeit angepasst")),(0,a.kt)("p",null,"Wir haben die Berechnung der Darstellung der Vorwarnzeit angepasst. In der Vergangenheit wurde die Vorwarnzeit berechnet als Ergebnis von Pr\xfcfdatum + Zeitspanne Vorwarnzeit. Dieses Verhalten hat f\xfcr viele Irritationen gesorgt und ist auch nicht besonders initiutiv gewesen. Die neue Berechnung der Vorwarnzeit erfolgt, wie man es erwarten w\xfcrde. D.h f\xfcr ein Beispiel bei dem eine Pr\xfcfunintervall 1 Jahr und die Vorwarnzeit 1 Monat betr\xe4gt ist das Ergebnis jetzt folgender Ma\xdfnahmen:"),(0,a.kt)("p",null,"Pr\xfcfdatum: 24.12.2020 => N\xe4chste Pr\xfcfung: 24.12.2021 => Vorwarnzeit 24.11.2021"),(0,a.kt)("p",null,"Je nachdem zu welchem Zeitpunkt Sie die Pr\xfcftypen erfasst haben, kann es notwendig sein, die Pr\xfcftypen einmal neu zu speichern, da dabei im Hintergrund einige Daten aktualisiert werden. Die Benachrichtigung hierzu erhalten Sie durch den qmBase Bot."),(0,a.kt)("p",null,"In der App Instandhaltung haben wir den qmBase Bot hinzugef\xfcgt. Dieser weist Sie auf notwendige Handlungen hin, damit Sie leichter alles im \xdcberblick behalten k\xf6nnen. "),(0,a.kt)("h2",{id:"nutzer-account"},"Nutzer Account"),(0,a.kt)("p",null,"Nutzer k\xf6nnen jetzt die E-Mail Adresse, die Sie zur Anmeldung nutzen selbst\xe4ndig \xe4ndern."),(0,a.kt)("h2",{id:"crm"},"CRM"),(0,a.kt)("p",null,"Es ist jetzt m\xf6glich verantwortliche Personen f\xfcr die Kontakte in der App CRM anzulegen."))}g.isMDXComponent=!0}}]);