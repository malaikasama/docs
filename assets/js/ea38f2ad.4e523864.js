(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[5623],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return p}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(t),p=i,g=d["".concat(s,".").concat(p)]||d[p]||c[p]||a;return t?r.createElement(g,l(l({ref:n},m),{},{components:t})):r.createElement(g,l({ref:n},m))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87194:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var r=t(22122),i=t(19756),a=(t(67294),t(3905)),l=["components"],o={title:"Roadmap Update 2021 Q2",author:"Philipp P\xe4hler",author_image_url:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png",image:"/img/blog/roadmap.jpg",tags:["Roadmap"]},s=void 0,u={permalink:"/blog/2021/04/01/roadmap-update-2021-q2",editUrl:"https://github.com/qmBase/docs/tree/master/blog/2021-04-01-roadmap-update-2021-q2.md",source:"@site/blog/2021-04-01-roadmap-update-2021-q2.md",title:"Roadmap Update 2021 Q2",description:"Mit jedem viertelj\xe4hrlichen Blog-Update stellen wir Ihnen eine Liste der Verbesserungen vor, die wir in qmBase vornehmen. Unser Ziel ist es eine transparente Entwicklung darzustellen, so dass Sie wissen, auf welche \xc4nderungen Sie sich einstellen k\xf6nnen.",date:"2021-04-01T00:00:00.000Z",formattedDate:"1. April 2021",tags:[{label:"Roadmap",permalink:"/blog/tags/roadmap"}],readingTime:2.26,truncated:!0,prevItem:{title:"Version 1.1.148",permalink:"/blog/version-1_1_148"},nextItem:{title:"Version 1.1.147",permalink:"/blog/version-1_1_147"}},m=[{value:"E-Mail Benachrichtigungen und Notifications \u2714",id:"e-mail-benachrichtigungen-und-notifications-",children:[]},{value:"Zielmanagement",id:"zielmanagement",children:[]},{value:"Workflows &amp; Automatisierung",id:"workflows--automatisierung",children:[]},{value:"Templates &amp; Vorlagen \u2714",id:"templates--vorlagen-",children:[]},{value:"Schlagworte \u2714",id:"schlagworte-",children:[]},{value:"Talentmanager",id:"talentmanager",children:[]}],c={toc:m};function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mit jedem viertelj\xe4hrlichen Blog-Update stellen wir Ihnen eine Liste der Verbesserungen vor, die wir in qmBase vornehmen. Unser Ziel ist es eine transparente Entwicklung darzustellen, so dass Sie wissen, auf welche \xc4nderungen Sie sich einstellen k\xf6nnen."),(0,a.kt)("h2",{id:"e-mail-benachrichtigungen-und-notifications-"},"E-Mail Benachrichtigungen und Notifications \u2714"),(0,a.kt)("p",null,"Unsere E-Mail Benachrichtigungen sind manchmal zu kompliziert und nicht auf den ersten Blick verst\xe4ndlich. Das Ziel muss es sein, dass man mit einem Blick die Frage beantworten kann, was will qmBase mir dieser E-Mail sagen. Daher werden wir sowohl Inhalt als auch Formatierung einiger Benachrichtigungen anpassen, um dieses Ziel schneller zu erreichen."),(0,a.kt)("h2",{id:"zielmanagement"},"Zielmanagement"),(0,a.kt)("p",null,"Bisher kann der Zielfortschritt nur als % Wert erfasst werden. Dies erfordert unn\xf6tig kompliziertes Umrechnen bei der Benutzung der Software. An diese Stelle soll eine flexiblere Erfassung der Fortschritte kommen. Somit k\xf6nnen dann auch einfach absolute Werte wie bspw. Anzahl der Neukunden erfasst werden."),(0,a.kt)("h2",{id:"workflows--automatisierung"},"Workflows & Automatisierung"),(0,a.kt)("p",null,"Wiederkehrende Aufgaben manuell zu erledigen ist eine monotone Aufgabe und fehleranf\xe4llig. Hier setzen wir mit unserer Funktion ",(0,a.kt)("strong",{parentName:"p"},"Workflows")," an, um solche Abl\xe4ufe zu vereinfachen.\nSie k\xf6nnen sich einen Workflow als ein einfaches regelbasiertes Programm innerhalb von qmBase vorstellen.\nEin Workflow besteht aus folgenden Eigenschaften:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ausl\xf6ser")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Bedingungen")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Auszuf\xfchrende Aktion"),(0,a.kt)("p",{parentName:"li"},"Beispiele f\xfcr Workflows k\xf6nnen z.B. sein:")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Schicke eine Mail an die Qualit\xe4tssicherungsabteilung, wenn eine neue Reklamation erfasst wurde")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Blockiere das \xc4ndern des Status einer Reklamation, wenn ein festgelegtes Custom Field nicht ausgef\xfcllt wurde."))),(0,a.kt)("h2",{id:"templates--vorlagen-"},"Templates & Vorlagen \u2714"),(0,a.kt)("p",null,'Die Angst vor einem wei\xdfen Blatt Papier h\xe4lt viele Menschen vom Schreiben ab. Das Problem beobachten wir auch in qmBase. Das Problem tritt z.B. auf bei der Erfassung einer Reklamation. Regelm\xe4\xdfig erhalten wir Anfragen nach dem Muster: "Was soll ich denn jetzt hier alles aufschreiben?"\nUm dieses Problem zu l\xf6sen, f\xfchren wir eine Template-Funktion ein. Was damit m\xf6glich sein soll, wollen wir im folgenden wieder am Beispiel der Reklamationen erkl\xe4ren.'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Sie k\xf6nnen beliebig viele Templates festlegen, um verschiedene Anwendungsf\xe4lle abzubilden:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Template f\xfcr interne Reklamationen"),(0,a.kt)("li",{parentName:"ul"},"Template f\xfcr externe Reklamationen"))),(0,a.kt)("li",{parentName:"ol"},"Wenn der Nutzer jetzt eine neue Reklamation erfassen m\xf6chte, erscheint zu Beginn ein Auswahldialog, wo das Template ausgew\xe4hlt werden kann."),(0,a.kt)("li",{parentName:"ol"},"Nach Auswahl eines Templates kann das Beschreibungsfeld der Reklamation schon vorausgef\xfcllt sein, mit den Informationen, die man erfassen m\xf6chte.")),(0,a.kt)("h2",{id:"schlagworte-"},"Schlagworte \u2714"),(0,a.kt)("p",null,'Bessere Verwaltung der Schlagworte. Zuk\xfcnftig sollen Schlagworte fest vordefiniert werden k\xf6nnen, um Wildwuchs zu verhindern. Zus\xe4tzlich sollen Schlagworte einzelnen Apps als Pflichtauswahl zugeordnet werden k\xf6nnen.\nEin Anwendungsfall hierf\xfcr ist beispielsweise, dass festgelegt wird, dass ein Schlagwort aus dem Pool "Prio1", "Prio2", "Prio3" zwingend mit einer Ma\xdfnahme verbunden werden soll.'),(0,a.kt)("h2",{id:"talentmanager"},"Talentmanager"),(0,a.kt)("p",null,"Verkn\xfcpfung der Bereiche Aufgabe & Qualifikationen und Schulungsmanagement in einer einheitlichen App, die vermutlich den Namen Talentmanager bekommen wird. Detailliertere Definition von Anforderungen an Qualifikationen z.B. durch Formulare oder Dokumente."))}d.isMDXComponent=!0}}]);