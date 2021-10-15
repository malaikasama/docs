(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[76212],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>m,kt:()=>g});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),o=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=o(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),d=o(t),g=r,h=d["".concat(s,".").concat(g)]||d[g]||c[g]||a;return t?i.createElement(h,l(l({ref:n},m),{},{components:t})):i.createElement(h,l({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var o=2;o<a;o++)l[o]=t[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},20609:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>u,assets:()=>s,toc:()=>o,default:()=>c});var i=t(74034),r=(t(67294),t(3905));const a={slug:"version-1_1_83",title:"Version 1.1.83",author:"Philipp P\xe4hler",author_title:"qmBase Development Team",author_image_url:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png",tags:["Funktionen & Qualifikationen","Formulare","Schulungsmanagement","Dokumentenmanagement","Wiki und Blog","Fehlermanagement","Changelog"]},l=void 0,u={permalink:"/blog/version-1_1_83",editUrl:"https://github.com/qmBase/docs/tree/master/blog/2019-05-06-version-1_1_83.md",source:"@site/blog/2019-05-06-version-1_1_83.md",title:"Version 1.1.83",description:"Funktionen & Qualifikationen",date:"2019-05-06T00:00:00.000Z",formattedDate:"6. Mai 2019",tags:[{label:"Funktionen & Qualifikationen",permalink:"/blog/tags/funktionen-qualifikationen"},{label:"Formulare",permalink:"/blog/tags/formulare"},{label:"Schulungsmanagement",permalink:"/blog/tags/schulungsmanagement"},{label:"Dokumentenmanagement",permalink:"/blog/tags/dokumentenmanagement"},{label:"Wiki und Blog",permalink:"/blog/tags/wiki-und-blog"},{label:"Fehlermanagement",permalink:"/blog/tags/fehlermanagement"},{label:"Changelog",permalink:"/blog/tags/changelog"}],readingTime:2.225,truncated:!1,authors:[{name:"Philipp P\xe4hler",title:"qmBase Development Team",imageURL:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png"}],prevItem:{title:"Version 1.1.84",permalink:"/blog/version-1_1_84"},nextItem:{title:"Version 1.1.82",permalink:"/blog/version-1_1_82"}},s={authorsImageUrls:[void 0]},o=[{value:"Funktionen &amp; Qualifikationen",id:"funktionen--qualifikationen",children:[],level:2},{value:"Formulare",id:"formulare",children:[],level:2},{value:"Schulungsmanagement",id:"schulungsmanagement",children:[],level:2},{value:"Dokumentenmanagement, Wiki und Blog",id:"dokumentenmanagement-wiki-und-blog",children:[],level:2},{value:"Fehlermanagement",id:"fehlermanagement",children:[{value:"Wird zuk\xfcnftig entfernt oder ver\xe4ndert",id:"wird-zuk\xfcnftig-entfernt-oder-ver\xe4ndert",children:[],level:3}],level:2}],m={toc:o};function c({components:e,...n}){return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"funktionen--qualifikationen"},"Funktionen & Qualifikationen"),(0,r.kt)("p",null,"Die Qualifikationmatrix wurde in folgenden Bereichen optimiert:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Smart Views - Es lassen sich jetzt eingestellt Filter abspeichern")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Caching - Die geladenen Daten werden im Browser zwischengespeichert, um eine schnellere Navigation zu erm\xf6glichen und werden nur bei Bedarf im Hintergrund aktualisiert")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Filter - Die einzelnen Filter sind jetzt miteinander verkn\xfcpft, um z.B. schnell alle zu einer Position geh\xf6renden Unternehmensfunktionen herausfiltern zu k\xf6nnen"))),(0,r.kt)("p",null,"Der Bereich Stellenbeschreibungen ist jetzt neu aufgebaut. Es gibt jetzt f\xfcr jede Position ein kleines Dashboard, aus dm direkt wichtige Daten und Kennzahlen hervorgehen. Hier werden zuk\xfcnftig noch weitere interessante Einblicke eingebunden."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/releasenotes/68-images/mceclip5.png",alt:null})),(0,r.kt)("p",null,"\xc4hnliche Auswertungen gibt es bereits f\xfcr den Bereich Qualifikationen. F\xfcr den Bereich Unternehmensfunktionen ist ein Dashboard noch in Planung."),(0,r.kt)("p",null,"Zus\xe4tzliche gibt es in diesem Modul zahlreiche kleine Detailverbesserungen, die das verkn\xfcpfen von Informationen und die Navigation innerhalb des Moduls betreffen."),(0,r.kt)("h2",{id:"formulare"},"Formulare"),(0,r.kt)("p",null,"E-Mail Benachrichtigung eingef\xfchrt, wenn Personen dazu eingeladen werden Formulare auszuf\xfcllen."),(0,r.kt)("h2",{id:"schulungsmanagement"},"Schulungsmanagement"),(0,r.kt)("p",null,"Das Modul Schulungsmanagement wurde vollst\xe4ndig \xfcberarbeitet und um viele n\xfctzliche Funktionen erweitert. Beim Klick auf das Modul f\xe4llt auf, dass man nicht mehr auf eine einfache Tabelle kommt. Es gibt jetzt ein vorgeschaltetes Dashboard, aus dem direkt ersichtlich wird, ob gerade Schulungen anstehen oder es ausstehende Zusagen f\xfcr Schulungen gibt. Wurde ich zu einer Schulung eingeladen und habe noch nicht zugesagt?"),(0,r.kt)("p",null,"Diese Zusagen lassen sich jetzt alle zentral \xfcber eine neue Ansicht ausf\xfchren ohne zeitintensives navigieren zwischen verschiedenen Seiten."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/releasenotes/68-images/mceclip3.png",alt:null})),(0,r.kt)("p",null,"Die einzelnene Schulungsdetailansicht wurde um viele n\xfctzliche Funktionen erweitert. So ist es jetzt auch hier m\xf6glich Zusagen f\xfcr mehrer Teilnehmer auf einmal zu durchzuf\xfchren."),(0,r.kt)("p",null,"Der zu dem Bereich geh\xf6rende Teil des Qualit\xe4tsmonitors wurde ebenfalls \xfcberarbeit und bietet jetzt einige erweiterte Auswertungen. Dies beinhaltet z.B. eine so genannte Heatmap, in der ersichtlich ist, wann Schulungen im Zeitverlauf erstellt wurden. Einige Diagramme lassen sich jetzt bereits exportieren, so dass diese z.B. in Pr\xe4sentationen weiter verwendet werden k\xf6nnen."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/releasenotes/68-images/mceclip4.png",alt:null})),(0,r.kt)("h2",{id:"dokumentenmanagement-wiki-und-blog"},"Dokumentenmanagement, Wiki und Blog"),(0,r.kt)("p",null,"Automatisches Indizieren von Dokumenten. Die Dokumente werden jetzt nach \xdcberschriften durchsucht. Aus diesen \xdcberschriften wird dann automatisch ein Inhaltsverzeichnis erstellt, dass dann im rechts neben dem Dokument dargestellt wird. \xdcber dieses Inhaltsverzeichnis kann dann auch zu den verschiedenen \xdcberschriften direkt gescrollt werden (funktioniert nicht mit Internet Explorer)."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/releasenotes/68-images/mceclip1.png",alt:null})),(0,r.kt)("p",null,"Kennzahlen zum Zugriff und zur unternehmensweiten Verbreitung von Dokumenten in der Detailansicht hinzugef\xfcgt."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/releasenotes/68-images/mceclip0.gif",alt:null})),(0,r.kt)("h2",{id:"fehlermanagement"},"Fehlermanagement"),(0,r.kt)("p",null,"Die Detailsansicht f\xfcr Fehler wurde vollst\xe4ndig \xfcberarbeitet und f\xfcgt sich jetzt nahtlos in das allgmeine Design ein. Die Bedienbarkeit wurde verbessert, indem es jetzt z.B. eine mehrfachauswahl f\xfcr das L\xf6schen verkn\xfcpfter Objekte (z.B. Ma\xdfnahmen gibt)"),(0,r.kt)("h3",{id:"wird-zuk\xfcnftig-entfernt-oder-ver\xe4ndert"},"Wird zuk\xfcnftig entfernt oder ver\xe4ndert"),(0,r.kt)("p",null,'Der Bereich "Funktionen" im Modul "Funktionen & Qualifikationen" wird in Aufgaben umbenannt. Basierend auf vielen Kundenr\xfcckmeldungen erscheint der Begriff "Aufgaben" treffender und intuitiver verst\xe4ndlich.'))}c.isMDXComponent=!0}}]);