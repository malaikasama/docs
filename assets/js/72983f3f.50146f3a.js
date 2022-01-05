"use strict";(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[81892],{47966:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(57273),r=t(67294);i.Z.initialize({startOnLoad:!0});const a=e=>{let{chart:n}=e;return(0,r.useEffect)((()=>{i.Z.contentLoaded()}),[]),r.createElement("div",{className:"mermaid"},n)}},8211:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>g,default:()=>h,frontMatter:()=>s,metadata:()=>f,toc:()=>o});var i=t(83117),r=(t(67294),t(3905)),a=t(14578),l=t(47966);const u={toc:[]};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{chart:"sequenceDiagram\n        1. Berechtigungen->>2. Zugriff App: Nutzer hat<br/> Zugriff App\n        2. Zugriff App->>3. Zugriff auf Element: Nutzer hat Zugriff<br/> auf einzelnes Element\n            3. Zugriff auf Element->>4. Zugriff auf Bereiche: Nutzer kann ganzes Element \xe4ndern\n            3. Zugriff auf Element->>4. Zugriff auf Bereiche: Nutzer kann Custom Fields \xe4ndern\n            3. Zugriff auf Element->>4. Zugriff auf Bereiche: Nutzer kann Fortschrittsbereich \xe4ndern\n            4. Zugriff auf Bereiche->>5.Zugriff auf Custom Fields: Custom Fields<br/> eingeschr\xe4nkt bearbeitbar;",mdxType:"Mermaid"}))}d.isMDXComponent=!0;const s={id:"faq-56",slug:"/faqs/56",title:"Rollen, Berechtigungen und Zugriff"},g=void 0,f={unversionedId:"faqs/faq-56",id:"faqs/faq-56",title:"Rollen, Berechtigungen und Zugriff",description:"\xdcbersicht",source:"@site/docs/faqs/rollen-und-berechtigungen.mdx",sourceDirName:"faqs",slug:"/faqs/56",permalink:"/docs/faqs/56",editUrl:"https://github.com/qmBase/docs/tree/master/docs/faqs/rollen-und-berechtigungen.mdx",tags:[],version:"current",lastUpdatedAt:1641379212,formattedLastUpdatedAt:"5.1.2022",frontMatter:{id:"faq-56",slug:"/faqs/56",title:"Rollen, Berechtigungen und Zugriff"},sidebar:"someSidebar",previous:{title:"Ich habe versehentlich den falschen Nutzer Account gel\xf6scht. Wie kann ich das r\xfcckg\xe4ngig machen",permalink:"/docs/faqs/55"},next:{title:"Ich habe ein Dokument zur\xfcckgezogen und finde es nicht wieder. Wo ist es",permalink:"/docs/faqs/61"}},o=[{value:"\xdcbersicht",id:"\xfcbersicht",children:[{value:"Beispiel Zugriff f\xfcr Ziele &amp; Kennzahlen",id:"beispiel-zugriff-f\xfcr-ziele--kennzahlen",children:[{value:"2. Zugriff Auf App",id:"2-zugriff-auf-app",children:[],level:4},{value:"3. Zugriff auf Elemente",id:"3-zugriff-auf-elemente",children:[],level:4},{value:"4. Zugriff auf Bereiche",id:"4-zugriff-auf-bereiche",children:[],level:4},{value:"5. Zugriff auf Custom Fields",id:"5-zugriff-auf-custom-fields",children:[],level:4}],level:3}],level:2},{value:"Standard Rollen",id:"standard-rollen",children:[{value:"Standard",id:"standard",children:[],level:3},{value:"Einstellungen",id:"einstellungen",children:[],level:3},{value:"Freigeber",id:"freigeber",children:[],level:3},{value:"Modul Administrator",id:"modul-administrator",children:[],level:3},{value:"Administrator",id:"administrator",children:[],level:3}],level:2},{value:"Lesende Nutzer",id:"lesende-nutzer",children:[],level:2},{value:"Feingliedrigerer Zugriff",id:"feingliedrigerer-zugriff",children:[{value:"Zugriff verwalten",id:"zugriff-verwalten",children:[],level:3},{value:"Todos &amp; Roadmap f\xfcr die Zugriffssteuerung",id:"todos--roadmap-f\xfcr-die-zugriffssteuerung",children:[],level:3}],level:2}],m={toc:o};function h(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\xfcbersicht"},"\xdcbersicht"),(0,r.kt)("p",null,"Sie k\xf6nnen jedem Nutzer individuelle Zugriffsrechte auf die Plattform geben. Somit k\xf6nnen Sie sicherstellen, dass nicht jeder alles sehen kann. Die Vergabe der Rollen und Berechtigungen erfolgt \xfcber:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://support.qmbase.com/Account/findworkspace?returnUrl=/_admin/permissions"},"Angemeldet -> Admin -> Berechtigungen")),(0,r.kt)("p",null,"Zugriff und Berechtigungen k\xf6nnen in unendlichen vielen M\xf6glichkeiten kombiniert werden. Damit Sie das gew\xfcnschte Ergebnis erhalten, ist es notwendig, den generellen Ablauf, das ",(0,r.kt)("em",{parentName:"p"},"Big Picture"),", zu verstehen."),(0,r.kt)(d,{mdxType:"AccessFlow"}),(0,r.kt)("p",null,"Um die Anforderungen gro\xdfe Flexibilit\xe4t auf der einen Seite und \xfcbersichtliche Konfiguration auf der anderen Seite zu erf\xfcllen, funktionieren unsere Zugriffsrechte wie nacheinander geschaltete Filter. Diese Filter sind im obigen Bild dargestellt."),(0,r.kt)("h3",{id:"beispiel-zugriff-f\xfcr-ziele--kennzahlen"},"Beispiel Zugriff f\xfcr Ziele & Kennzahlen"),(0,r.kt)("p",null,"Zum besseren Verst\xe4ndnis wenden wir dieses Konzept der Filter einmal beispielhaft auf die App ",(0,r.kt)("strong",{parentName:"p"},"Ziele & Kennzahlen")," an.\nAngenommen wir haben zwei Nutzer mit unterschiedlichen Zielen, die in qmBase erfasst werden sollen:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Position"),(0,r.kt)("th",{parentName:"tr",align:null},"Ziel"),(0,r.kt)("th",{parentName:"tr",align:null},"Notwendige Berechtigungen im Adminbereich"),(0,r.kt)("th",{parentName:"tr",align:null},"Zugriffseinstellungen des Ziels"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bodo Boss"),(0,r.kt)("td",{parentName:"tr",align:null},"Chef des Unternehmens und Administrator"),(0,r.kt)("td",{parentName:"tr",align:null},"#1 Mitarbeiter durch Roboter ersetzen"),(0,r.kt)("td",{parentName:"tr",align:null},"Admin"),(0,r.kt)("td",{parentName:"tr",align:null},"Als privat markieren")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max Mustermann"),(0,r.kt)("td",{parentName:"tr",align:null},"Mitarbeiter Produktion"),(0,r.kt)("td",{parentName:"tr",align:null},"#2 Reduzierung der Fehlteilquote um 10%"),(0,r.kt)("td",{parentName:"tr",align:null},"Standardzugriff Ziele & Kennzahlen"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Erika Musterfrau"),(0,r.kt)("td",{parentName:"tr",align:null},"Vertriebsleiterin"),(0,r.kt)("td",{parentName:"tr",align:null},"#3 Akquisition von 10 Neukunden"),(0,r.kt)("td",{parentName:"tr",align:null},"Standardzugriff Ziele & Kennzahlen"),(0,r.kt)("td",{parentName:"tr",align:null},"Zugriff auf Fortschrittsbereich f\xfcr John Doe")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"John Doe"),(0,r.kt)("td",{parentName:"tr",align:null},"Mitarbeiter im Vertrieb"),(0,r.kt)("td",{parentName:"tr",align:null},"Soll bei Ziel #3 zuarbeiten"),(0,r.kt)("td",{parentName:"tr",align:null},"Standardzugriff Ziele & Kennzahlen"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"In diesem Beispiel wird sofort offensichtlich, dass jedes der Ziele andere Zugriffsm\xf6glichkeiten erfordert."),(0,r.kt)("h4",{id:"2-zugriff-auf-app"},"2. Zugriff Auf App"),(0,r.kt)("p",null,"Damit alle Personen Zugriff haben, muss zun\xe4chst im Admin Bereich festgelegt werden, dass:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bodo Boss ist Administrator und hat Zugriff auf alles"),(0,r.kt)("li",{parentName:"ul"},"Alle \xfcbrigen Personen erhalten f\xfcr die App Ziele und Kennzahlen den Standardzugriff. D.h. Sie k\xf6nnen auf die App zugreifen, Inhalte selbst erstellen und Dinge, f\xfcr die sie verantwortlich sind bearbeiten.")),(0,r.kt)("h4",{id:"3-zugriff-auf-elemente"},"3. Zugriff auf Elemente"),(0,r.kt)("p",null,"Danach m\xfcssen Einstellungen bei den einzelnen Zielen selbst vorgenommen werden. Bodo Boss markiert sein Ziel als privat, da er annimmt, dass es sich negativ auf die Motivation der Mitarbeiter auswirke.\nF\xfcr das Ziel von Max Mustermann m\xfcssen keine weiteren Einstellungen vorgenommen werden. Er ist f\xfcr das Ziel verantwortlich. D.h. er kann es bearbeiten. Zus\xe4tzlich ist es gew\xfcnscht, dass jeder dieses Ziel und den Fortschritt der Erf\xfcllung sehen kann."),(0,r.kt)("h4",{id:"4-zugriff-auf-bereiche"},"4. Zugriff auf Bereiche"),(0,r.kt)("p",null,"Das dritte Ziel zur Akquisition ist ein Sonderthema. Erika Musterfrau hat als Vertriebsleiterin viele Aufgaben.\nSie ist zwar verantwortlich f\xfcr das Ziel, aber hat die Umsetzung an Ihren Kollegen John Doe delegiert.\nDaf\xfcr hat Sie dem Kollegen John Doe Zugriff auf den Bereich ",(0,r.kt)("strong",{parentName:"p"},"Fortschritt bearbeiten")," gegeben.\nDamit kann der Kollege die operative Umsetzung dokumentieren, aber nicht die Inhalte des Ziels bearbeiten."),(0,r.kt)("h4",{id:"5-zugriff-auf-custom-fields"},"5. Zugriff auf Custom Fields"),(0,r.kt)("p",null,"Zur Erkl\xe4rung des Zugriffs auf einzelne ",(0,r.kt)("strong",{parentName:"p"},"Custom Fields")," gibt es eine weitere Besonderheit. In der App wurde das Custom Field ",(0,r.kt)("em",{parentName:"p"},"Vorhandenes Budget")," festgelegt. Das Budget soll ausschlie\xdflich durch den Chef, Bodo Boss, festgelegt werden.\nDazu legt Bodo Boss f\xfcr das Custom Field fest, dass nur durch Personen, die in der Rolle Chef sind, bearbeitet werden kann.\nDa er sich selbst nicht f\xfcr unersetzlich h\xe4lt, wird hier der Zugriff nicht auf Ebene der einzelnen Personen, sondern \xfcber eine Rolle festgelegt.\nDurch diese Einstellung wird sichergestellt, dass dieses Feld nur noch durch ihn bearbeitet werden kann."),(0,r.kt)("h2",{id:"standard-rollen"},"Standard Rollen"),(0,r.kt)("p",null,"In den unterschiedlichen Apps gibt es teils unterschiedliche Konfigurationsm\xf6glichkeiten f\xfcr Berechtigungen. Die g\xe4ngigen Konfigurationsm\xf6glichkeiten sind nachfolgend aufgef\xfchrt. F\xfcr weitere Details lesen Sie bitte den Eintrag zur entsprechenden Rolle:"),(0,r.kt)("h3",{id:"standard"},"Standard"),(0,r.kt)("p",null,"Mit dem Standard Zugriff kann der Nutzer folgende Aktionen ausf\xfchren:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Auf das Modul zugreifen"),(0,r.kt)("li",{parentName:"ul"},"Neue Eintr\xe4ge erstellen"),(0,r.kt)("li",{parentName:"ul"},"Seine eigenen Eintr\xe4ge editieren"),(0,r.kt)("li",{parentName:"ul"},"\xc4ndern von Eigenschaften, die auf den Status des Eintrags bezogen sind")),(0,r.kt)("h3",{id:"einstellungen"},"Einstellungen"),(0,r.kt)("p",null,"Durch den Zugriff auf die Einstellungen k\xf6nnen Nutzer alle zu dem Modul geh\xf6rigen Einstellungen ver\xe4ndern."),(0,r.kt)("h3",{id:"freigeber"},"Freigeber"),(0,r.kt)("p",null,"Freigeber sind berechtigt Inhalte freizugeben, z.B. Dokumente oder Formulare. Diese Rolle ist nicht in jeder App verf\xfcgbar."),(0,r.kt)("h3",{id:"modul-administrator"},"Modul Administrator"),(0,r.kt)("p",null,"Der Modul Admin ist das \xc4quivalent zum normalen Admin auf Modulebene. Er kann alles erstellen, \xe4ndern und l\xf6schen, was er m\xf6chte."),(0,r.kt)("h3",{id:"administrator"},"Administrator"),(0,r.kt)("p",null,"Administratoren haben Zugriff auf alle Funktionen und unterliegen keinen Einschr\xe4nkungen."),(0,r.kt)("h2",{id:"lesende-nutzer"},"Lesende Nutzer"),(0,r.kt)("p",null,"Sie k\xf6nnen einstellen, dass Nutzer nur Leserechte haben. Diese Einstellung ist global und bezieht sich somit auf die gesamte Software und alle Module. Nutzer, die nur Lesenrechte haben k\xf6nnen keine Daten editieren. Dies beinhaltet z.B. auch, dass diese Nutzer keine Lesebest\xe4tigung f\xfcr Dokumente ausf\xfchren k\xf6nnen."),(0,r.kt)("h2",{id:"feingliedrigerer-zugriff"},"Feingliedrigerer Zugriff"),(0,r.kt)("p",null,"Wenn diese Zugriffssteuerungen auf App Ebene nicht ausreichen, haben Sie zus\xe4tzlich die M\xf6glichkeit eine Zugriffssteuerung auf der Ebene der einzelnen Eintr\xe4ge vorzunehmen."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Hierbei handelt es sich um ein neues Feature. Wir haben haben noch viele Erweiterungen zu dieser Funktion geplant. Diese finden Sie am Ende dieser Seite. Derzeit betreffen die Einschr\xe4nkungen lediglich die ",(0,r.kt)("strong",{parentName:"p"},"Sichtbarkeit")," von Eintr\xe4gen."))),(0,r.kt)("p",null,"Diese Funktion ist in folgenden Apps von qmBase verf\xfcgbar:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"App"),(0,r.kt)("th",{parentName:"tr",align:null},"Index"),(0,r.kt)("th",{parentName:"tr",align:null},"Details"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Abwesenheitsplaner"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Audits"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Aufgaben & Qualifikationen"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Schulungen"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Formulare"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dokumentenmanagement, WIKI, Blog"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Instandhaltung"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reklamationen"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ma\xdfnahmen"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ziele"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Legende:\nIndex - \xdcbersichtstabelle zur App;\nDetails - Detailsansicht des entsprechenden Eintrags")),(0,r.kt)("p",null,"Die Steuerung des Zugriffs kann durch die folgenden Personen erfolgen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verantwortlicher"),(0,r.kt)("li",{parentName:"ul"},"Owner"),(0,r.kt)("li",{parentName:"ul"},"(Modul) Administrator")),(0,r.kt)("p",null,"Um den Zugriff festzulegen, gehen Sie wie folgt vor:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Klicken Sie auf den Eintrag z.B. ein Audit."),(0,r.kt)("li",{parentName:"ol"},"W\xe4hlen Sie den Tab ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("code",null,(0,r.kt)(a.MhP,{mdxType:"VscKey"})," Zugriff"))," aus."),(0,r.kt)("li",{parentName:"ol"},"Markieren Sie den Eintrag als Privat.")),(0,r.kt)("p",null,"Ab diesem Zeitpunkt ist der Eintrag nur noch f\xfcr die Personen sichtbar, die unter ",(0,r.kt)("strong",{parentName:"p"},"Zugriff verwalten")," bzw. in der Karte ",(0,r.kt)("strong",{parentName:"p"},"Standardzugriff")," aufgef\xfchrt sind."),(0,r.kt)("h3",{id:"zugriff-verwalten"},"Zugriff verwalten"),(0,r.kt)("p",null,"In diesem Bereich haben Sie die M\xf6glichkeit einzelnen Nutzern oder Gruppen Zugriff zu einem privaten Eintrag zu erteilen. Mit dem Zugriff an dieser Stelle \xfcberschreiben Sie die Einstellungen, die \xfcber Rollen festgelegt wurden."),(0,r.kt)("p",null,"Bitte beachten Sie hierbei, dass es sich nur um den Zugriff auf einen einzelnen Eintrag (z.B. Audit) handelt. Geben Sie einen Eintrag (z.B. Audit) aus einer App (z.B. Auditmanagement) f\xfcr einen Nutzer oder eine Gruppe frei, der sonst keinen Zugriff auf dieses App hat, bleibt der Zugriff auf den einzelnen Eintrag beschr\xe4nkt."),(0,r.kt)("h3",{id:"todos--roadmap-f\xfcr-die-zugriffssteuerung"},"Todos & Roadmap f\xfcr die Zugriffssteuerung"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xc4nderungen des Zugriffs f\xfcr mehrere Elemente in einem Schritt"),(0,r.kt)("li",{parentName:"ul"},"Zugriffe basierend auf Gruppen"),(0,r.kt)("li",{parentName:"ul"},"Zugriffe basierend auf individuellen Rollen"),(0,r.kt)("li",{parentName:"ul"},"Sichtbarkeit der Eintr\xe4ge aus Verkn\xfcpfungen. Wenn Sie z.B. ein privates Audit erstellt haben ist es trotzdem f\xfcr alle Personen sichtbar, die Zugriff auf eine verkn\xfcpfte Ma\xdfnahme haben. Der Klick auf das Audit funktioniert allerdings nicht."),(0,r.kt)("li",{parentName:"ul"},"Kommentare auf den App Startseiten sind unbeeinflusst von eventuellen Sichtbarkeitseinstellugen"),(0,r.kt)("li",{parentName:"ul"},"Zugriffsarten festlegen lesend vs. schreibend")))}h.isMDXComponent=!0}}]);