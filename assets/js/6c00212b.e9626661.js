"use strict";(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[23658],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>p});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),u=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},o=function(e){var n=u(e.components);return i.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),c=u(t),p=a,h=c["".concat(d,".").concat(p)]||c[p]||m[p]||r;return t?i.createElement(h,l(l({ref:n},o),{},{components:t})):i.createElement(h,l({ref:n},o))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<r;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},25002:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(83117),a=t(67294),r=t(53810);function l(e){let{toc:n,className:t,linkClassName:i,isChild:r}=e;return n.length?a.createElement("ul",{className:r?void 0:t},n.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=i?i:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(l,{isChild:!0,toc:e.children,className:t,linkClassName:i}))))):null}function s(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:d,minHeadingLevel:u,maxHeadingLevel:o,...m}=e;const c=(0,r.LU)(),p=null!=u?u:c.tableOfContents.minHeadingLevel,h=null!=o?o:c.tableOfContents.maxHeadingLevel,k=(0,r.DA)({toc:n,minHeadingLevel:p,maxHeadingLevel:h}),g=(0,a.useMemo)((()=>{if(s&&d)return{linkClassName:s,linkActiveClassName:d,minHeadingLevel:p,maxHeadingLevel:h}}),[s,d,p,h]);return(0,r.Si)(g),a.createElement(l,(0,i.Z)({toc:k,className:t,linkClassName:s},m))}},90658:(e,n,t)=>{t.d(n,{ZP:()=>l});var i=t(83117),a=(t(67294),t(3905));const r={toc:[]};function l(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("span",null,"qmBase"))}l.isMDXComponent=!0},45097:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var i=t(83117),a=(t(67294),t(3905));t(25002);var r=t(90658);const l={id:"admin",title:"Admin"},s=void 0,d={unversionedId:"apps/admin",id:"apps/admin",title:"Admin",description:"t",source:"@site/docs/apps/admin.mdx",sourceDirName:"apps",slug:"/apps/admin",permalink:"/docs/apps/admin",editUrl:"https://github.com/qmBase/docs/tree/master/docs/apps/admin.mdx",tags:[],version:"current",lastUpdatedAt:1642080977,formattedLastUpdatedAt:"13.1.2022",frontMatter:{id:"admin",title:"Admin"},sidebar:"someSidebar",previous:{title:"Externe Logins",permalink:"/docs/account/account-externalLogin"},next:{title:"Abwesenheitsplaner",permalink:"/docs/apps/absence-planner"}},u=[{value:"Individualisierung",id:"individualisierung",children:[],level:2},{value:"Nutzer",id:"nutzer",children:[],level:2},{value:"Berechtigungen",id:"berechtigungen",children:[{value:"Nutzer nur mit Leserechten",id:"nutzer-nur-mit-leserechten",children:[],level:3},{value:"Erlaubte Domains",id:"erlaubte-domains",children:[{value:"Beispiele",id:"beispiele",children:[],level:4}],level:3},{value:"Rollen",id:"rollen",children:[],level:3},{value:"Gruppen",id:"gruppen",children:[],level:3}],level:2},{value:"Import",id:"import",children:[],level:2},{value:"E-Mail",id:"e-mail",children:[],level:2},{value:"Integrationen",id:"integrationen",children:[],level:2},{value:"Abrechnung",id:"abrechnung",children:[],level:2},{value:"Audit Trail",id:"audit-trail",children:[],level:2},{value:"Dateien",id:"dateien",children:[],level:2},{value:"Kosten",id:"kosten",children:[],level:2},{value:"Backup",id:"backup",children:[{value:"Inhalte des Backups",id:"inhalte-des-backups",children:[],level:3}],level:2}],o={toc:u};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/public-screenshots/manual-screenshots/Screenshot%202021-05-24_admin-home.png",alt:"t"})),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Aktuelle Erweiterungen und Verbesserungen dieser App finden Sie ",(0,a.kt)("a",{parentName:"h5",href:"/blog/tags/admin"},"hier"))),(0,a.kt)("div",{parentName:"div",className:"admonition-content"})),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Dieses Dokument ist nur relevant, wenn Sie auch in der Rolle Admin sind.")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"})),(0,a.kt)("h2",{id:"individualisierung"},"Individualisierung"),(0,a.kt)("p",null,"In diesem Bereich haben Sie die M\xf6glichkeit ",(0,a.kt)(r.ZP,{mdxType:"ProductDisplayName"})," zu individualisieren und das Design auf Ihre Organisation anzupassen. Sie k\xf6nnen hier folgende Dinge \xe4ndern:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Logo in der Navigationsleister: Welches Logo soll oben links in der Navigationsleiste statt des ",(0,a.kt)(r.ZP,{mdxType:"ProductDisplayName"})," Logos dargestellt werden."),(0,a.kt)("li",{parentName:"ul"},"Druck Logo: Hier k\xf6nnen Sie das Logo \xe4ndern, dass auf Ausdrucken angezeigt werden soll.")),(0,a.kt)("h2",{id:"nutzer"},"Nutzer"),(0,a.kt)("p",null,"In diesem Bereich befindet sich die Nutzerverwaltung. Sie k\xf6nnen hier einzelne Nutzer verwalten.\nDie Verwaltung der einzelnen Nutzer beinhaltet folgende Funktionen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"E-Mail Adresse best\xe4tigen"),(0,a.kt)("li",{parentName:"ul"},"Login Sperre zur\xfccksetzen"),(0,a.kt)("li",{parentName:"ul"},"Account l\xf6schen")),(0,a.kt)("p",null,"Zus\xe4tzlich k\xf6nnen Sie \xfcber den Bereich Nutzer Mitarbeiter ohne Nutzerkonto direkt in die Mitarbeiter\xfcbersicht springen und sehen hier alle Personen, die kein Nutzerkonto haben."),(0,a.kt)("h2",{id:"berechtigungen"},"Berechtigungen"),(0,a.kt)("p",null,"In diesem Bereich k\xf6nnen Sie alle Funktionen konfigurieren, die etwas mit Zugriffsberechtigungen zu tun haben."),(0,a.kt)("h3",{id:"nutzer-nur-mit-leserechten"},"Nutzer nur mit Leserechten"),(0,a.kt)("p",null,"Sie k\xf6nnen festlegen, dass Nutzer nur Leserechte haben sollen. Damit werden alle Aktionen, die ein Ver\xe4ndern von Datens\xe4tzen ausl\xf6sen, verhindert."),(0,a.kt)("h3",{id:"erlaubte-domains"},"Erlaubte Domains"),(0,a.kt)("p",null,"Um den Zugriff f\xfcr die Registrierung neuer Nutzer einzuschr\xe4nken, k\xf6nnen Sie hier festlegen mit welchen E-Mail Schemata sich neue Nutzer anmelden k\xf6nnen.\nKonkret wird \xfcberpr\xfcft, ob die ",(0,a.kt)("strong",{parentName:"p"},"Endung")," eines neuen Nutzernames (E-Mail Adresse) in der Liste der erlaubten Domains auftaucht."),(0,a.kt)("h4",{id:"beispiele"},"Beispiele"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tragen Sie z.B. ",(0,a.kt)("code",null,"@firma.de")," ein, damit sich ",(0,a.kt)("a",{parentName:"li",href:"mailto:max.mustermann@firma.de"},"max.mustermann@firma.de")," als neuer Nutzer registrieren kann."),(0,a.kt)("li",{parentName:"ul"},"Wenn Sie z.B. nur ",(0,a.kt)("code",null,".de")," eingeben kann sich ",(0,a.kt)("a",{parentName:"li",href:"mailto:mustermann@gmx.de"},"mustermann@gmx.de")," und ",(0,a.kt)("a",{parentName:"li",href:"mailto:mustermann@firma.de"},"mustermann@firma.de")," registrieren."),(0,a.kt)("li",{parentName:"ul"},"Wenn Sie z.B. ",(0,a.kt)("code",null,"'",(0,a.kt)("a",{parentName:"li",href:"mailto:max.mustermann@firma.de"},"max.mustermann@firma.de"),"'")," eintragen kann sich ",(0,a.kt)("a",{parentName:"li",href:"mailto:max.mustermann@firma.de"},"max.mustermann@firma.de")," registrieren. Es k\xf6nnte sich jedoch auch ",(0,a.kt)("a",{parentName:"li",href:"mailto:minimax.mustermann@firma.de"},"minimax.mustermann@firma.de")," registrieren, da nur die enden \xfcberpr\xfcft werden und mini somit in diesem Fall ignoriert wird.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Nicht sinnvoll ist hier das Hinterlegen von \xf6ffentlichen E-Mail Domains z.B. @gmail.com.")),(0,a.kt)("h3",{id:"rollen"},"Rollen"),(0,a.kt)("h3",{id:"gruppen"},"Gruppen"),(0,a.kt)("p",null,"Nutzer werden einer oder mehreren Gruppen zugeordnet. Gruppen erhalten eine Reihe von Berechtigungen, die den verschiedenen Berechtigungen entsprechen, die die Gruppenmitglieder ben\xf6tigen, um ihre Funktion auszuf\xfchren."),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("p",null,"Im Admin-Bereich unter ",(0,a.kt)("em",{parentName:"p"},"Admin -> Import")," finden Sie M\xf6glichkeiten unterschiedliche Daten in das System zu importieren. Dabei kann es sich unter anderem um Mitarbeiterdaten, Kunden- und Lieferantendaten, Inventargegenst\xe4nde, Dokumente und \xe4hnliches handeln.\nBitte beachten Sie die ",(0,a.kt)("strong",{parentName:"p"},"Vorlagen")," und Hinweise im oberen Bereich des Imports. Unser Import kann nur die von uns definierten Datenstrukturen verarbeiten. D.h., dass z.B. bei der Anrede von Personen (Gender) 0 f\xfcr Herrn und 1 f\xfcr Frau steht. Andere Angaben k\xf6nnen zu Fehlern f\xfchren."),(0,a.kt)("p",null,"Wenn Sie einen automatischen Import von Daten aus einem anderen IT-System w\xfcnschen bzw. die automatische Synchronisation mit anderen Systemen, dann sprechen Sie uns bitte direkt an."),(0,a.kt)("p",null,"Beispiele f\xfcr den Import"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/faqs/116"},"Organisationen")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/faqs/import-qualifications"},"Qualifikationen"))),(0,a.kt)("h2",{id:"e-mail"},"E-Mail"),(0,a.kt)("p",null,"Hier finden Sie eine Auflistung aller durch das System verschickten E-Mails. Sie k\xf6nnen hier auch den E-Mail Server deaktivieren, um das Verschicken von Benachrichtigungen zu unterbinden.\nDas kann z.B. hilfreich sein, wenn Sie sich gerade in der Einrichtungsphase befinden und Ihr Team nicht mit einer Vielzahl von E-Mail Benachrichtigungen bel\xe4stigen m\xf6chten."),(0,a.kt)("h2",{id:"integrationen"},"Integrationen"),(0,a.kt)("p",null,"Sind f\xfcr Ihre ",(0,a.kt)(r.ZP,{mdxType:"ProductDisplayName"})," System Schnittstellen zu anderen System erstellt worden, finden Sie hier weitere Informationen dazu."),(0,a.kt)("h2",{id:"abrechnung"},"Abrechnung"),(0,a.kt)("p",null,"Informationen zu Ihrem aktuellen ",(0,a.kt)(r.ZP,{mdxType:"ProductDisplayName"})," Abonnement."),(0,a.kt)("h2",{id:"audit-trail"},"Audit Trail"),(0,a.kt)("p",null,"\xdcbersicht aller Audit Trail Eintr\xe4ge."),(0,a.kt)("h2",{id:"dateien"},"Dateien"),(0,a.kt)("p",null,"\xdcbersicht aller in ",(0,a.kt)(r.ZP,{mdxType:"ProductDisplayName"})," hochgelanden Dateien."),(0,a.kt)("h2",{id:"kosten"},"Kosten"),(0,a.kt)("p",null,"\xdcbersicht aller in ",(0,a.kt)(r.ZP,{mdxType:"ProductDisplayName"})," erfassten Kosten."),(0,a.kt)("h2",{id:"backup"},"Backup"),(0,a.kt)("p",null,"Unter dem Men\xfcpunkt Backup k\xf6nnen Sie ein Backup anfragen. Der Prozess f\xfcr die Erstellung von Backups ist ein langlaufender Prozess.\nSie erhalten eine Benachrichtigung dar\xfcber, wenn das Backup fertigestellt ist.\nDas Ausf\xfchren des Backups erm\xf6glicht es Ihnen den aktuellen Stand Ihres ",(0,a.kt)(r.ZP,{mdxType:"ProductDisplayName"})," Systems lokal auf Ihrer Infrastruktur auszuf\xfchren.\nZur Installation von ",(0,a.kt)(r.ZP,{mdxType:"ProductDisplayName"})," schauen Sie bitte in unsere ",(0,a.kt)("a",{parentName:"p",href:"/docs/technical/installation"},"Hilfe zur Installation")," oder wenden sich an den ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@%3CProductDisplayName/%3E.com"},"Support"),"."),(0,a.kt)("h3",{id:"inhalte-des-backups"},"Inhalte des Backups"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Software"),": Die aktuellste Version von ",(0,a.kt)(r.ZP,{mdxType:"ProductDisplayName"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Datenbank"),": Die komplette Backup Datei Ihrer MS SQL Datenbank"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dateien"),": Eine Zip Datei mit allen Dateien, die von Ihnen hochgeladen wurde")))}m.isMDXComponent=!0}}]);