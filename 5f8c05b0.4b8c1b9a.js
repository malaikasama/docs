(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{285:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return s})),r.d(n,"metadata",(function(){return u})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return o}));var t=r(3),i=r(7),a=(r(0),r(607)),s={id:"faq-105",slug:"/faqs/105",title:"Wie wird qmBase entwicklet"},u={unversionedId:"faqs/faq-105",id:"faqs/faq-105",isDocsHomePage:!1,title:"Wie wird qmBase entwicklet",description:"Von Zeit zu Zeit erhalten wir Anfragen dazu, wie wir qmBase entwickeln und welche Technologien und Tools wir einsetzen. Diese Fragen beantworten wir gerne. Insbesondere als Entwicklungsteam freuen wir \xfcber dieses Interesse. Im nachfolgenden wollen in einigen zentralen Punkten erkl\xe4ren, wie unser Entwicklungsprozess abl\xe4uft. F\xfcr R\xfcckfragen hierzu und weitere Details stehen wir gerne zur Verf\xfcgung.",source:"@site/docs/faqs/wie-wird-qmbase-entwicklet.md",slug:"/faqs/105",permalink:"/docs/faqs/105",editUrl:"https://github.com/qmBase/docs/tree/master/docs/faqs/wie-wird-qmbase-entwicklet.md",version:"current",lastUpdatedAt:1612196306,sidebar:"someSidebar",previous:{title:"In welchen Apps kann ich Smart Views nutzen",permalink:"/docs/faqs/104"},next:{title:"Wie schr\xe4nke ich den Zugriff auf Custom Fields ein",permalink:"/docs/faqs/106"}},l=[{value:"Planung",id:"planung",children:[]},{value:"Qualit\xe4tssicherung",id:"qualit\xe4tssicherung",children:[]},{value:"Technische Details",id:"technische-details",children:[]}],d={toc:l};function o(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Von Zeit zu Zeit erhalten wir Anfragen dazu, wie wir qmBase entwickeln und welche Technologien und Tools wir einsetzen. Diese Fragen beantworten wir gerne. Insbesondere als Entwicklungsteam freuen wir \xfcber dieses Interesse. Im nachfolgenden wollen in einigen zentralen Punkten erkl\xe4ren, wie unser Entwicklungsprozess abl\xe4uft. F\xfcr R\xfcckfragen hierzu und weitere Details stehen wir gerne zur Verf\xfcgung."),Object(a.b)("h3",{id:"planung"},"Planung"),Object(a.b)("p",null,"Grunds\xe4tzlich ist unsere gesamte Entwicklung ein agiler Prozess. Kern ist hierbei immer das Interesse und Feedback unserer Nutzer. Mit diesen Informationen entwickeln wir unsere Roadmap. Unsere Roadmap hat jeweils eine G\xfcltigkeitsdauer von ",Object(a.b)("strong",{parentName:"p"},"6 Monaten"),". Auf der Roadmap befinden sich dabei die gr\xf6\xdferen Projekte und Meilensteine, die wir angehen wollen. Gr\xf6\xdfere Projekte sind Arbeitsaufgaben, die vermutlich eine Arbeitszeit von mehr als 20 Arbeitstagen in Anspruch nehmen. Nach Ablauf der G\xfcltigkeitsdauer der Roadmap \xfcberpr\xfcfen wir, ob wir unsere Ziele erreicht haben und entwickeln unter Einbeziehung des Kundenfeedbacks die Roadmap f\xfcr die n\xe4chsten 6 Monate."),Object(a.b)("p",null,"Wichtig ist uns hierbei, dass diese Roadmap ein lebendiges Dokument ist und nicht in Stein gemei\xdfelt ist."),Object(a.b)("h3",{id:"qualit\xe4tssicherung"},"Qualit\xe4tssicherung"),Object(a.b)("p",null,"Die wichtigsten Instrumente f\xfcr unsere interne Qualit\xe4tssicherung sind drei Aspekte:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Automatisierte Tests")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Manuelle Tests in unserer Testabteilung")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Beobachtung der Crashdaten unserer Software und Feedback aus dem Ticketsystem"))),Object(a.b)("h4",{id:"automatisierte-tests"},"Automatisierte Tests"),Object(a.b)("p",null,"F\xfcr zentrale Funktionen innerhalb der Software entwickeln wir automatisierte Tests. Dies kann man sich vereinfacht gesagt so vorstellen. Wir nehmen die Software als eine Blackbox an und geben Daten in die Software ein. Danach warten wir auf die Antwort der Software und vergleichen, ob die Antwort dem entspricht, was wir als Ergebnis erwarten."),Object(a.b)("p",null,"Ein einfaches Beispiel hierf\xfcr ist der Prozess f\xfcr das Erstellen neuer Personen. Wir \xfcbergeben Vor- und Nachnamen an die Software und erwarten dann, dass die Antwort der Software die neu erstellte Person enth\xe4lt. Ein Sonderfall ist hierbei, dass wir den Anwender vor Fehlern bewahren wollen. So \xfcberpr\xfcfen wir beispielsweise beim Erstellen neuer Personen, die auch eine E-Mail Adresse haben, ob diese bereits existiert, um so das Erfassen von Duplikaten zu verhindern. Somit sieht der zweite Testfall so aus, dass zweimal die gleiche Person mit gleicher E-Mail Adresse erstellt werden soll. Die Erwartung ist hierbei, dass dies beim ersten Mal erfolgreich funktioniert und beim zweiten Mal zu einem Fehler f\xfchrt. "),Object(a.b)("h4",{id:"manuelle-tests-in-unserer-testabteilung"},"Manuelle Tests in unserer Testabteilung"),Object(a.b)("p",null,"Wie man in dem ersten Beispiel schon erkennen kann, gibt es grunds\xe4tzlich sehr viele Dinge, die \xfcberpr\xfcft und werden m\xfcssen. Da es immer Sonderf\xe4lle und Kombinationen gibt, die sich nicht so leicht automatisiert testen lassen ist dar\xfcber hinaus das manuelle Testen notwendig. Hierzu haben alle Mitarbeiter bei qmBase Zugriff auf die neueste Version und k\xf6nnen alle Funktionen auf Herz und Nieren testen."),Object(a.b)("h4",{id:"beobachtung-der-crashdaten-unserer-software-und-feedback-aus-dem-ticketsystem"},"Beobachtung der Crashdaten unserer Software und Feedback aus dem Ticketsystem"),Object(a.b)("p",null,"Nachdem wir die Software in mehreren kleinen Schritten an unsere Kunden verteilt haben, folgt der letzte Schritt der Qualit\xe4tssicherung. Hier geht es darum bei der echten Nutzung auftretende Fehler zu identifizieren. Neben Fehlern sind wir hier auch immer auf der Suche nach Performance Problemen. Einige Dinge lassen sich einfach nur mit echten Daten erkennen, da jeder unserer Kunden seine Software auf eine andere Art und Weise nutzt. Jeder Kunde hat in anderen Bereichen der Software mal mehr oder weniger Daten und Verkn\xfcpfungen und dies erfordert somit von Zeit zu Zeit einige Optimierungen."),Object(a.b)("h3",{id:"technische-details"},"Technische Details"),Object(a.b)("p",null,"Wir entwickeln unsere Software mit den modernsten Frameworks und Tools. Grunds\xe4tzlich unterscheiden wir zwei Bereiche der Software. Dies ist zum einen das ",Object(a.b)("strong",{parentName:"p"},"Backend")," und zum anderen das ",Object(a.b)("strong",{parentName:"p"},"Frontend"),". Als Backend bezeichnen wir den Teil der Software, die auf unserem Server l\xe4uft. Das Frontend ist der Teil der Software, der bei Ihnen l\xe4uft. Dies betrifft somit den gesamten Quellcode, den Ihr Browser herunterl\xe4dt und dann ausf\xfchrt."),Object(a.b)("h4",{id:"backend"},"Backend"),Object(a.b)("p",null,"Unser Backend wird mit dem ",Object(a.b)("strong",{parentName:"p"},"ASP.NET Core")," Framework entwickelt. Die zum Einsatz kommende Programmiersprache ist ",Object(a.b)("strong",{parentName:"p"},"C#"),". Hierbei handelt es sich um ein von Microsoft entwickeltes Open-Source Web Framework. Daten werden in einer SQL Datenbank und einem Speicher f\xfcr Dateien gespeichert. Als Entwicklungsumgebung nutzen wir ",Object(a.b)("strong",{parentName:"p"},"Visual Studio"),"."),Object(a.b)("h4",{id:"frontend"},"Frontend"),Object(a.b)("p",null,"Das Frontend besteht zu einem \xfcberwiegenden Teil aus einer ",Object(a.b)("strong",{parentName:"p"},"React")," Applikation. Diese Anwendung wird mit ",Object(a.b)("strong",{parentName:"p"},"TypeScript")," programmiert und dann in ",Object(a.b)("strong",{parentName:"p"},"JavaScript")," \xfcbersetzt, um dann bei Ihnen im Browser zu laufen. Als Entwicklungsumgebung nutzen wir hier ",Object(a.b)("strong",{parentName:"p"},"Visual Studio Code"),"."))}o.isMDXComponent=!0},607:function(e,n,r){"use strict";r.d(n,"a",(function(){return c})),r.d(n,"b",(function(){return h}));var t=r(0),i=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=i.a.createContext({}),o=function(e){var n=i.a.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},c=function(e){var n=o(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=o(r),m=t,h=c["".concat(s,".").concat(m)]||c[m]||b[m]||a;return r?i.a.createElement(h,u(u({ref:n},d),{},{components:r})):i.a.createElement(h,u({ref:n},d))}));function h(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,s=new Array(a);s[0]=m;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:t,s[1]=u;for(var d=2;d<a;d++)s[d]=r[d];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);