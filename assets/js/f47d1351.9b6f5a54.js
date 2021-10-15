(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[63824],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>o,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),d=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},o=function(e){var n=d(e.components);return i.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),h=d(t),m=r,w=h["".concat(u,".").concat(m)]||h[m]||c[m]||a;return t?i.createElement(w,s(s({ref:n},o),{},{components:t})):i.createElement(w,s({ref:n},o))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=h;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var d=2;d<a;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},70059:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>s,metadata:()=>l,toc:()=>u,default:()=>o});var i=t(74034),r=(t(67294),t(3905));const a={id:"wie-wird-qmbase-entwickelt",slug:"/technical/wie-wird-qmbase-entwickelt",title:"Wie wird qmBase entwickelt"},s=void 0,l={unversionedId:"technical/wie-wird-qmbase-entwickelt",id:"technical/wie-wird-qmbase-entwickelt",isDocsHomePage:!1,title:"Wie wird qmBase entwickelt",description:"Wie wir qmBase entwickeln und welche Technologien und Tools wir einsetzen, beantworten wir gerne. Insbesondere als Entwicklungsteam freuen wir \xfcber das Interesse.",source:"@site/docs/technical/wie-wird-qmbase-entwickelt.md",sourceDirName:"technical",slug:"/technical/wie-wird-qmbase-entwickelt",permalink:"/docs/technical/wie-wird-qmbase-entwickelt",editUrl:"https://github.com/qmBase/docs/tree/master/docs/technical/wie-wird-qmbase-entwickelt.md",tags:[],version:"current",lastUpdatedAt:1634329422,formattedLastUpdatedAt:"15.10.2021",frontMatter:{id:"wie-wird-qmbase-entwickelt",slug:"/technical/wie-wird-qmbase-entwickelt",title:"Wie wird qmBase entwickelt"},sidebar:"someSidebar",previous:{title:"Mehrere Standorte - Ideenmanagement",permalink:"/docs/usescases/multi-site"},next:{title:"Installation",permalink:"/docs/technical/installation"}},u=[{value:"Planung",id:"planung",children:[],level:2},{value:"Qualit\xe4tssicherung und Validierung",id:"qualit\xe4tssicherung-und-validierung",children:[{value:"Automatisierte Tests",id:"automatisierte-tests",children:[{value:"Warum werden nicht einfach alle Funktionen automatisch getestet, um alle Fehler auszuschlie\xdfen?",id:"warum-werden-nicht-einfach-alle-funktionen-automatisch-getestet-um-alle-fehler-auszuschlie\xdfen",children:[],level:4}],level:3},{value:"Manuelle Tests in unserer Testabteilung",id:"manuelle-tests-in-unserer-testabteilung",children:[],level:3},{value:"Beobachtung der Telemetriedaten unserer Software und Feedback aus dem Ticketsystem",id:"beobachtung-der-telemetriedaten-unserer-software-und-feedback-aus-dem-ticketsystem",children:[],level:3}],level:2},{value:"Technische Details",id:"technische-details",children:[{value:"Backend",id:"backend",children:[],level:3},{value:"Frontend",id:"frontend",children:[],level:3}],level:2}],d={toc:u};function o({components:e,...n}){return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Wie wir qmBase entwickeln und welche Technologien und Tools wir einsetzen, beantworten wir gerne. Insbesondere als Entwicklungsteam freuen wir \xfcber das Interesse.\nIm nachfolgenden wollen in einigen zentralen Punkten erkl\xe4ren, wie unser Entwicklungsprozess abl\xe4uft. F\xfcr R\xfcckfragen hierzu und weitere Details stehen wir gerne zur Verf\xfcgung."),(0,r.kt)("h2",{id:"planung"},"Planung"),(0,r.kt)("p",null,"Grunds\xe4tzlich ist unsere gesamte Entwicklung ein agiler Prozess. Kern ist hierbei immer das Interesse und Feedback unserer Nutzer. Mit diesen Informationen entwickeln wir unsere Roadmap. Unsere Roadmap hat jeweils eine G\xfcltigkeitsdauer von ",(0,r.kt)("strong",{parentName:"p"},"3 Monaten"),". Auf der Roadmap befinden sich dabei die gr\xf6\xdferen Projekte und Meilensteine, die wir angehen wollen. Gr\xf6\xdfere Projekte sind Arbeitsaufgaben, die vermutlich eine Arbeitszeit von mehr als 20 Arbeitstagen in Anspruch nehmen. Nach Ablauf der G\xfcltigkeitsdauer der Roadmap \xfcberpr\xfcfen wir, ob wir unsere Ziele erreicht haben und entwickeln unter Einbeziehung des Kundenfeedbacks die Roadmap f\xfcr die n\xe4chsten 3 Monate."),(0,r.kt)("p",null,"Wichtig ist uns hierbei, dass diese Roadmap ein lebendiges Dokument ist und nicht in Stein gemei\xdfelt ist."),(0,r.kt)("h2",{id:"qualit\xe4tssicherung-und-validierung"},"Qualit\xe4tssicherung und Validierung"),(0,r.kt)("p",null,"Die wichtigsten Instrumente f\xfcr unsere interne Qualit\xe4tssicherung sind drei Aspekte:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Automatisierte Tests"),(0,r.kt)("li",{parentName:"ol"},"Manuelle Tests in unserer Testabteilung"),(0,r.kt)("li",{parentName:"ol"},"Beobachtung der Telemetriedaten unserer Software und Feedback aus dem Ticketsystem")),(0,r.kt)("h3",{id:"automatisierte-tests"},"Automatisierte Tests"),(0,r.kt)("p",null,"F\xfcr zentrale Funktionen innerhalb der Software entwickeln wir automatisierte Tests. Dies kann man sich vereinfacht gesagt so vorstellen. Wir nehmen die Software als eine Blackbox an und geben Daten in die Software ein. Danach warten wir auf die Antwort der Software und vergleichen, ob die Antwort dem entspricht, was wir als Ergebnis erwarten."),(0,r.kt)("p",null,"Ein einfaches Beispiel hierf\xfcr ist der Prozess f\xfcr das Erstellen neuer Personen. Wir \xfcbergeben Vor- und Nachnamen an die Software und erwarten dann, dass die Antwort der Software die neu erstellte Person enth\xe4lt. Ein Sonderfall ist hierbei, dass wir den Anwender vor Fehlern bewahren wollen. So \xfcberpr\xfcfen wir beispielsweise beim Erstellen neuer Personen, die auch eine E-Mail Adresse haben, ob diese bereits existiert, um so das Erfassen von Duplikaten zu verhindern. Somit sieht der zweite Testfall so aus, dass zweimal die gleiche Person mit gleicher E-Mail Adresse erstellt werden soll. Die Erwartung ist hierbei, dass dies beim ersten Mal erfolgreich funktioniert und beim zweiten Mal zu einem Fehler f\xfchrt."),(0,r.kt)("p",null,"Unsere automatisierten Tests unterscheiden sich in zwei Bereiche (Frontend und Backend), die jeweils in drei Ebenen getestet werden. Diese Ebenen sind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"End-to-End (E2E) Tests Testen des User Interface (UI) und aller Abl\xe4ufe."),(0,r.kt)("li",{parentName:"ul"},"Integration Tests hier werden mehrere kleine Einheiten im Verbund und Zusammenspiel getestet."),(0,r.kt)("li",{parentName:"ul"},"Unit Tests hierbei handelt es sich um Tests der kleinstm\xf6glichen Einheiten der Software.")),(0,r.kt)("h4",{id:"warum-werden-nicht-einfach-alle-funktionen-automatisch-getestet-um-alle-fehler-auszuschlie\xdfen"},"Warum werden nicht einfach alle Funktionen automatisch getestet, um alle Fehler auszuschlie\xdfen?"),(0,r.kt)("p",null,"Das Design und die Ausf\xfchrung der automatisierten Tests ist h\xe4ufig nicht trivial. Software kann eine Vielzahl an verschiedene Eingaben (Inputs) zulassen. Diese sind unter Umst\xe4nden isoliert betrachtet schon problematisch oder nur in verschiedenen Kombinationen. Diese Randf\xe4lle vorab zu identifizieren, ist vermutlich der anspruchsvollste Teil der Arbeit. Daher ist unser Vorgehen hier wie folgt:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Wir identifizieren die Funktionen, die Querschnittsfunktionen innerhalb der Software sind und testen diese priorit\xe4r."),(0,r.kt)("li",{parentName:"ol"},"Basierend auf den Nutzungsdaten identifizieren wir Fehler, die bei unseren Nutzern auftauchen und probieren diese mit automatischen Tests nachzustellen und dann zu beseitigen, so dass wir dadurch Wiederholfehler vermeiden.")),(0,r.kt)("h3",{id:"manuelle-tests-in-unserer-testabteilung"},"Manuelle Tests in unserer Testabteilung"),(0,r.kt)("p",null,"Wie man in dem ersten Beispiel schon erkennen kann, gibt es grunds\xe4tzlich sehr viele Dinge, die \xfcberpr\xfcft und werden m\xfcssen. Da es immer Sonderf\xe4lle und Kombinationen gibt, die sich nicht so leicht automatisiert testen lassen ist dar\xfcber hinaus das manuelle Testen notwendig. Hierzu haben alle Mitarbeiter bei qmBase Zugriff auf die neueste Version und k\xf6nnen alle Funktionen auf Herz und Nieren testen. Von unserem Entwicklungsteam wird in regelm\xe4\xdfigen Meetings auf aktuelle \xc4nderungen hingewiesen, so dass f\xfcr jeden deutlich wird, auf welche Dinge besonders zu achten ist."),(0,r.kt)("h3",{id:"beobachtung-der-telemetriedaten-unserer-software-und-feedback-aus-dem-ticketsystem"},"Beobachtung der Telemetriedaten unserer Software und Feedback aus dem Ticketsystem"),(0,r.kt)("p",null,"Nachdem wir die Software in mehreren kleinen Schritten an unsere Kunden verteilt haben, folgt der letzte Schritt der Qualit\xe4tssicherung. Hier geht es darum bei der echten Nutzung auftretende Fehler zu identifizieren. Neben Fehlern sind wir hier auch immer auf der Suche nach Performance Problemen. Einige Dinge lassen sich nur mit echten Daten erkennen, da jeder unserer Kunden seine Software auf eine andere Art und Weise nutzt. Jeder Kunde hat in anderen Bereichen der Software mal mehr oder weniger Daten und Verkn\xfcpfungen und dies erfordert somit von Zeit zu Zeit einige Optimierungen. Auch Optimierungen der Nutzeroberfl\xe4che ergeben sich regelm\xe4\xdfig auch aus den echten Nutzerdaten."),(0,r.kt)("h2",{id:"technische-details"},"Technische Details"),(0,r.kt)("p",null,"Wir entwickeln unsere Software mit den modernsten Frameworks und Tools. Grunds\xe4tzlich unterscheiden wir zwei Bereiche der Software. Dies ist zum einen das ",(0,r.kt)("strong",{parentName:"p"},"Backend")," und zum anderen das ",(0,r.kt)("strong",{parentName:"p"},"Frontend"),". Als Backend bezeichnen wir den Teil der Software, die auf unserem Server l\xe4uft. Das Frontend ist der Teil der Software, der bei Ihnen l\xe4uft. Dies betrifft somit den gesamten Quellcode, den Ihr Browser herunterl\xe4dt und dann ausf\xfchrt."),(0,r.kt)("h3",{id:"backend"},"Backend"),(0,r.kt)("p",null,"Unser Backend wird mit dem ",(0,r.kt)("strong",{parentName:"p"},"ASP.NET Core")," Framework entwickelt. Die zum Einsatz kommende Programmiersprache ist ",(0,r.kt)("strong",{parentName:"p"},"C#"),". Hierbei handelt es sich um ein von Microsoft entwickeltes Open-Source Web Framework. Daten werden in einer SQL Datenbank und einem Speicher f\xfcr Dateien gespeichert. Als Entwicklungsumgebung nutzen wir ",(0,r.kt)("strong",{parentName:"p"},"Visual Studio"),"."),(0,r.kt)("h3",{id:"frontend"},"Frontend"),(0,r.kt)("p",null,"Das Frontend besteht zu einem \xfcberwiegenden Teil aus einer ",(0,r.kt)("strong",{parentName:"p"},"React")," Applikation. Diese Anwendung wird mit ",(0,r.kt)("strong",{parentName:"p"},"TypeScript")," programmiert und dann in ",(0,r.kt)("strong",{parentName:"p"},"JavaScript")," \xfcbersetzt, um dann bei Ihnen im Browser zu laufen. Als Entwicklungsumgebung nutzen wir hier ",(0,r.kt)("strong",{parentName:"p"},"Visual Studio Code"),"."))}o.isMDXComponent=!0}}]);