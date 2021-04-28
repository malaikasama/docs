(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{484:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(8),i=(t(0),t(599)),l={slug:"version-1_1_149",title:"Version 1.1.149",author:"Philipp P\xe4hler",author_title:"qmBase Development Team",author_image_url:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png",tags:["Blog","Dokumentenmanagement","Wiki","Dashboard & Reportings","Formulare","Ideenmanagement","Instandhaltung","Produkte","Projekte & Ma\xdfnahmen","Reklamationsmanagement","Zielmanagement"]},o={permalink:"/blog/version-1_1_149",editUrl:"https://github.com/qmBase/docs/tree/master/blog/2021-04-27-Version-1_1_149.md",source:"@site/blog/2021-04-27-Version-1_1_149.md",description:"Dieser Release beinhaltet einige Fehlerbehebungen und Detailverbesserungen.",date:"2021-04-27T00:00:00.000Z",formattedDate:"27. April 2021",tags:[{label:"Blog",permalink:"/blog/tags/blog"},{label:"Dokumentenmanagement",permalink:"/blog/tags/dokumentenmanagement"},{label:"Wiki",permalink:"/blog/tags/wiki"},{label:"Dashboard & Reportings",permalink:"/blog/tags/dashboard-reportings"},{label:"Formulare",permalink:"/blog/tags/formulare"},{label:"Ideenmanagement",permalink:"/blog/tags/ideenmanagement"},{label:"Instandhaltung",permalink:"/blog/tags/instandhaltung"},{label:"Produkte",permalink:"/blog/tags/produkte"},{label:"Projekte & Ma\xdfnahmen",permalink:"/blog/tags/projekte-massnahmen"},{label:"Reklamationsmanagement",permalink:"/blog/tags/reklamationsmanagement"},{label:"Zielmanagement",permalink:"/blog/tags/zielmanagement"}],title:"Version 1.1.149",readingTime:2.41,truncated:!0,nextItem:{title:"Version 1.1.148",permalink:"/blog/version-1_1_148"}},u=[{value:"Allgemein",id:"allgemein",children:[]},{value:"Blog, Dokumentenmanagement und Wiki",id:"blog-dokumentenmanagement-und-wiki",children:[]},{value:"Dashboard &amp; Reportings",id:"dashboard--reportings",children:[]},{value:"Formulare",id:"formulare",children:[]},{value:"Ideenmanagement",id:"ideenmanagement",children:[]},{value:"Instandhaltung",id:"instandhaltung",children:[]},{value:"Produkte",id:"produkte",children:[]},{value:"Projekte &amp; Ma\xdfnahmen",id:"projekte--ma\xdfnahmen",children:[]},{value:"Reklamationsmanagement",id:"reklamationsmanagement",children:[]},{value:"Zielmanagement",id:"zielmanagement",children:[]}],s={toc:u};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Dieser Release beinhaltet einige Fehlerbehebungen und Detailverbesserungen."),Object(i.b)("h2",{id:"allgemein"},"Allgemein"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Dropdown Felder f\xfcr die Auswahl von Personnen und Mitarbeitern vereinheitlicht")),Object(i.b)("h2",{id:"blog-dokumentenmanagement-und-wiki"},"Blog, Dokumentenmanagement und Wiki"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Die Logik des letzten Aufrufs eines Dokuments wurde \xfcberarbeitet. In der Vergangenheit war es so, dass pro 5 Minuten und Person nur eine Aufruf gespeichert wurde. Diese Verhalten bleibt grunds\xe4tzlich gleich. Wenn innerhalb der 5 Minuten allerdings ein weiterer Aufruf erfolgt, wird der Zeitstempel des Aufrufs innerhalb der 5 Minunten aktualisiert. Dies hat den Vorteil, dass in der \xdcbersicht der zuletzt aufgerufenen Dokumente dann auch tats\xe4chlich immer das aktuellste Dokument sichtbar ist."),Object(i.b)("li",{parentName:"ul"},"Wir haben einen Fehler behoben, wo in dem Auswahldialog f\xfcr die n\xe4chste Revision eine falsche Versionsnummer angezeigt wurde."),Object(i.b)("li",{parentName:"ul"},"Ein Fehler wurde behoben, bei dem das Feedback zu einzelnen Dokumenten manchmal nicht korrekt gespeichert wurde.")),Object(i.b)("h2",{id:"dashboard--reportings"},"Dashboard & Reportings"),Object(i.b)("p",null,"Bisher hatten wir keine Unterseite f\xfcr die App Blog. Das haben wir jetzt nachgeholt und auch f\xfcr den Blog eine separate Seite mit Auswertungen erstellt, so dass Sie jederzeit sehen k\xf6nnen, wie intensiv Ihr Blog genutzt wird."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Wir haben einen Fehler behoben, der dazu gef\xfchrt hat, dass \xfcber den Link "Zur Auswahl gehen" auf der Seite Reklamationen die Filter auf der Seite der Reklamations\xfcbersicht nicht korrekt \xfcbernommen worden sind.')),Object(i.b)("h2",{id:"formulare"},"Formulare"),Object(i.b)("p",null,"Die Auswertungen zu den Forumlarantworten lassen sich jetzt individuell anpassen. Somit es z.B. auch m\xf6glich Textfelder als Kuchendiagramm darzustellen. Basierend auf der Variationsvielfalt der Antworten kann man so sehr n\xfctzliche Auswertungen erhalten."),Object(i.b)("h2",{id:"ideenmanagement"},"Ideenmanagement"),Object(i.b)("p",null,"Wir haben den Kommentar-Feed auf der Startseite \xfcberarbeitet. Ab sofort werden Ihnen hier standardm\xe4\xdfig nur noch relevante Kommentare angezeigt. Das hei\xdft also, dass Ihnen hier nur noch die Kommentare angezeigt werden, von Ideen, mit denen Sie etwas zu tun haben. Das sind insbesondere die Ideen, wo Sie z.B. als Ideenmanager oder Freigeber eine Idee verantwortlich sind. Zus\xe4tzlich befindet sich im unteren Bereich jetzt ein Link, mit dem Sie nicht nur die letzten 10 Kommentare, sondern alle Kommentare von Ideen, auf die Sie zugriff haben, sehen und durchsuchen k\xf6nnen."),Object(i.b)("p",null,"Diese Erweiterung werden wir in K\xfcrze auch in anderen Bereichen einbringen."),Object(i.b)("h2",{id:"instandhaltung"},"Instandhaltung"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Wir haben einen Fehler behoben, der dazu gef\xfchrt hat, dass das \xe4ndern Standorten in einigen F\xe4llen nicht wie erwartet funktioniert hat."),Object(i.b)("li",{parentName:"ul"},"Der Filter in der Instandhaltung wurde verbessert und zeigt jetzt direkt auch die gefilterten Standorte an.")),Object(i.b)("h2",{id:"produkte"},"Produkte"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Wir haben einen Fehler behoben, der es blockiert hat Reklamationen und Fehler zu Produkten hinzuzuf\xfcgen.")),Object(i.b)("h2",{id:"projekte--ma\xdfnahmen"},"Projekte & Ma\xdfnahmen"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Das Formular zur Bearbeitung von Projekte wurde verbessert und enth\xe4lt jetzt bessere Validierungen bei Fehleingaben.")),Object(i.b)("h2",{id:"reklamationsmanagement"},"Reklamationsmanagement"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fehler behoben bei dem es nicht m\xf6glich war einen 8D-Report zu speichern, wenn kein Teamleiter festgelegt wurde. Hier wird jetzt standardm\xe4\xdfig die erste Person in der Liste der beteiligten Personen ausgew\xe4hlt.")),Object(i.b)("h2",{id:"zielmanagement"},"Zielmanagement"),Object(i.b)("p",null,'Auf der Seite "Graph" im Zielmanagement wird jetzt zus\xe4tzlich auch der Status der einzelnen Ziele dargestellt. Damit lassen sich Zusammenh\xe4nge noch leichter erkennen.'))}d.isMDXComponent=!0},599:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return h}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),d=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=d(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},c=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=d(t),c=r,h=m["".concat(l,".").concat(c)]||m[c]||b[c]||i;return t?a.a.createElement(h,o(o({ref:n},s),{},{components:t})):a.a.createElement(h,o({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);