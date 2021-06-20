(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[76738],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return g},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,c=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(c,l(l({ref:n},g),{},{components:t})):r.createElement(c,l({ref:n},g))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47807:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return g},default:function(){return m}});var r=t(22122),i=t(19756),a=(t(67294),t(3905)),l=["components"],o={slug:"version-1_1_133",title:"Version 1.1.133",author:"Philipp P\xe4hler",author_title:"qmBase Development Team",author_image_url:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png",tags:["Der qmBase Bot","Login / Registrierung","Mitarbeiter","Allgemein","Changelog"]},s=void 0,u={permalink:"/blog/version-1_1_133",editUrl:"https://github.com/qmBase/docs/tree/master/blog/2020-09-17-version-1_1_133.md",source:"@site/blog/2020-09-17-version-1_1_133.md",title:"Version 1.1.133",description:"Der qmBase Bot",date:"2020-09-17T00:00:00.000Z",formattedDate:"17. September 2020",tags:[{label:"Der qmBase Bot",permalink:"/blog/tags/der-qm-base-bot"},{label:"Login / Registrierung",permalink:"/blog/tags/login-registrierung"},{label:"Mitarbeiter",permalink:"/blog/tags/mitarbeiter"},{label:"Allgemein",permalink:"/blog/tags/allgemein"},{label:"Changelog",permalink:"/blog/tags/changelog"}],readingTime:1.705,truncated:!1,prevItem:{title:"Version 1.1.134",permalink:"/blog/version-1_1_134"},nextItem:{title:"Version 1.1.132",permalink:"/blog/version-1_1_132"}},g=[{value:"Der qmBase Bot",id:"der-qmbase-bot",children:[]},{value:"Login / Registrierung",id:"login--registrierung",children:[]},{value:"Mitarbeiter",id:"mitarbeiter",children:[]},{value:"Allgemein",id:"allgemein",children:[]}],p={toc:g};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"der-qmbase-bot"},"Der qmBase Bot"),(0,a.kt)("p",null,"Das Highlight dieses Releases ist der qmBase Bot. Mit dem qmBase Bot schaffen wir eine Hilfe f\xfcr Ihre t\xe4gliche Arbeit. Basierend auf Ihren Daten \xfcberpr\xfcft der Bot im Hintergrund f\xfcr Sie, welche Schritte Sie ergreifen sollten, um einen gr\xf6\xdferen Nutzen aus qmBase zu ziehen und potentielle Fehler in Ihren Daten zu eliminieren."),(0,a.kt)("p",null,"Zum leichteren Verst\xe4ndnis hier ein Beispiel f\xfcr Aufgaben, die der Bot erledigt. In der App Mitarbeiter analysieren wir alle Mitarbeiter, um herauszufinden, ob es Mitarbeiter gibt, denen keine Position zugeordnet ist. Wenn das Fall ist, taucht dies als Empfehlung auf. In einem weiteren Schritt unternimmt der Bot die Gegenprobe und \xfcberpr\xfcft, ob alle festgelegte Positionen besetzt sind. Diese Information wird dann ebenfalls ausgegeben. Die Empfehlungen verf\xfcgen Zus\xe4tzlich \xfcber einen Schweregrad, der angibt wie wichtig die Empfehlungen sind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Blau - Information => kleine Auswirkungen")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Orange - Warnung => mittlere Auswirkung sollte zeitnah behoben werden")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Rot - Gefahr => schwere Auswirkungen, die auch die Nutzung von qmBase beeintr\xe4chtigen k\xf6nnen z.B. fehlende Stammdaten. Sollte sofort behoben werden."))),(0,a.kt)("p",null,"In dem unten dargestellten Screenshot sind beispielsweise Empfehlungen f\xfcr die App Mitarbeiter dargestellt."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/releasenotes/121-images/98d6d502-410c-4a41-9505-5b14283b54d6-mceclip0.png",alt:null})),(0,a.kt)("p",null,"Der Bot ist derzeit f\xfcr folgende Apps verf\xfcgbar:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Mitarbeiter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Aufgaben & Qualifikationen"))),(0,a.kt)("h2",{id:"login--registrierung"},"Login / Registrierung"),(0,a.kt)("p",null,"Wir haben die Fehlermeldungen beim Login und der Registrierung verbessert. Da wir den Nutzer zu diesem Zeitpunkt noch nicht so gut kennen, wie wenn er angemeldet ist, ist es immer schwierig ihn in der richtigen Sprache zu begr\xfc\xdfen und evtl. Hinweise korrekt auszugeben. Dieses Verhalten haben wir verbessert."),(0,a.kt)("h2",{id:"mitarbeiter"},"Mitarbeiter"),(0,a.kt)("p",null,"In der \xdcbersicht der Mitarbeiter weisen wir jetzt darauf hin, wenn Informationen fehlen, die zum bestm\xf6glichen Betrieb von qmBase fehlen. Dies betrifft z.B. das Geburtsdatum. Dieses ist z.B. notwendig, damit Ihnen qmBase bei der Nachfolgeregelung f\xfcr einzelne Positionen helfen kann, indem es auf entsprechend hohe Alter hinweist."),(0,a.kt)("h2",{id:"allgemein"},"Allgemein"),(0,a.kt)("p",null,"Unsere neuen Tabellen (zu erkennen an dem kleineren Suchfenster rechts oben) behalten neben den anzuzeigenden Spalten und der Sortierung jetzt auch die Anzahl Zeilen pro Seite. Zus\xe4tzlich k\xf6nnen jetzt bis zu 100 Zeilen pro Seite dargestellt werden."))}m.isMDXComponent=!0}}]);