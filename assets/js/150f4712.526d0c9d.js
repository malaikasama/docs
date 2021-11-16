"use strict";(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[79599],{47966:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(57273),r=n(67294);a.Z.initialize({startOnLoad:!0});const i=({chart:e})=>((0,r.useEffect)((()=>{a.Z.contentLoaded()}),[]),r.createElement("div",{className:"mermaid"},e))},53976:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(83117),r=(n(67294),n(3905)),i=n(47966);const l={toc:[]};function s({components:e,...t}){return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{chart:"graph TD\n    A[Idee erstellen oder \xfcberarbeiten] --\x3e B[Ideenkoordinator ausw\xe4hlen];\n    B --\x3e C[Idee abschicken];\n    C --\x3e D{Annahme durch Koordinator?};\n    D -- Ja --\x3e E[Bearbeitung durch Manager / Owner];\n    D -- Nein --\x3e A;\n    E --\x3e F{Optionale Gutachtenphase};\n    F -- Gutachten angefordert --\x3e F2[Warten auf Reaktion der Gutachter];\n    F2 --\x3e G;\n    F -- Keine Gutachten --\x3e G[Abschluss der Gutachtenphase];\n    G --\x3e H[Umsetzungsphase];\n    H --\x3e I[Abschluss der Idee];",mdxType:"Mermaid"}))}s.isMDXComponent=!0},15599:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>u,default:()=>o});var a=n(83117),r=(n(67294),n(3905)),i=n(53976);const l={id:"multi-site",title:"Mehrere Standorte - Ideenmanagement",slug:"/usescases/multi-site"},s=void 0,d={unversionedId:"usecases/multi-site",id:"usecases/multi-site",isDocsHomePage:!1,title:"Mehrere Standorte - Ideenmanagement",description:"qmBase l\xe4sst sich auch in gro\xdfen Organisationen mit mehreren Standorten nutzen. Wie Sie hier optimale Ergebnisse erzielen und was am besten konfiguriert wird, zeigen wir Ihnen hier am Beispiel des Ideenmanagements.",source:"@site/docs/usecases/multi-site.mdx",sourceDirName:"usecases",slug:"/usescases/multi-site",permalink:"/docs/usescases/multi-site",editUrl:"https://github.com/qmBase/docs/tree/master/docs/usecases/multi-site.mdx",tags:[],version:"current",lastUpdatedAt:1637099299,formattedLastUpdatedAt:"16.11.2021",frontMatter:{id:"multi-site",title:"Mehrere Standorte - Ideenmanagement",slug:"/usescases/multi-site"},sidebar:"someSidebar",previous:{title:"Vorlagen zur einfachen Datenerfassung (Reklamationen)",permalink:"/docs/faqs/create-page-templates"},next:{title:"Wie wird qmBase entwickelt",permalink:"/docs/technical/wie-wird-qmbase-entwickelt"}},u=[{value:"Zur Erinnerung: Prozess und Ablauf Ideenmanagement",id:"zur-erinnerung-prozess-und-ablauf-ideenmanagement",children:[],level:4}],m={toc:u};function o({components:e,...t}){return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"qmBase l\xe4sst sich auch in gro\xdfen Organisationen mit mehreren Standorten nutzen. Wie Sie hier optimale Ergebnisse erzielen und was am besten konfiguriert wird, zeigen wir Ihnen hier am Beispiel des Ideenmanagements."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"F\xfcr die Standorte legen wir unter Admin > Berechtigungen > Gruppen eine Gruppe pro Standort an."),(0,r.kt)("li",{parentName:"ol"},"Die vorhanden Nutzer werden den Gruppen zugeordnet."),(0,r.kt)("li",{parentName:"ol"},"F\xfcr unserer Beispiel w\xe4hlen wir die Konfiguration wie in der folgenden Tabelle sichtbar."),(0,r.kt)("li",{parentName:"ol"},"Die erstellten Gruppen sollten am besten als ",(0,r.kt)("code",null,"Selbst einchecken")," markiert werden. Damit werden neue Nutzer dazu aufgefordert sich einer Gruppe zuzuordnen und sind sofort richtig eingeordnet.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nutzer"),(0,r.kt)("th",{parentName:"tr",align:null},"Rolle(n)"),(0,r.kt)("th",{parentName:"tr",align:null},"Gruppe Dortmund"),(0,r.kt)("th",{parentName:"tr",align:null},"Gruppe Hawaii"),(0,r.kt)("th",{parentName:"tr",align:null},"Gruppe New York"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"M\xfcller"),(0,r.kt)("td",{parentName:"tr",align:null},"Admin"),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Meier"),(0,r.kt)("td",{parentName:"tr",align:null},"Ideenkoordinator"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Schmidt"),(0,r.kt)("td",{parentName:"tr",align:null},"Nutzer"),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Schulze"),(0,r.kt)("td",{parentName:"tr",align:null},"Nutzer"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"x")))),(0,r.kt)("h4",{id:"zur-erinnerung-prozess-und-ablauf-ideenmanagement"},"Zur Erinnerung: Prozess und Ablauf Ideenmanagement"),(0,r.kt)(i.ZP,{mdxType:"IdeaProcess"}))}o.isMDXComponent=!0}}]);