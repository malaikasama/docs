"use strict";(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[15350],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),m=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(t),p=i,d=c["".concat(s,".").concat(p)]||c[p]||g[p]||a;return t?r.createElement(d,l(l({ref:n},u),{},{components:t})):r.createElement(d,l({ref:n},u))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<a;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},32621:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>o,assets:()=>s,toc:()=>m,default:()=>g});var r=t(83117),i=(t(67294),t(3905));const a={slug:"version-1_1_132",title:"Version 1.1.132",author:"Philipp P\xe4hler",author_title:"qmBase Development Team",author_image_url:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png",tags:["Allgemein","Audits","Blog","Dokumentenmanagmenet","WIKI","Schulungen","Reklamationsmanagement","Changelog"]},l=void 0,o={permalink:"/blog/version-1_1_132",editUrl:"https://github.com/qmBase/docs/tree/master/blog/2020/09-02-version-1_1_132.md",source:"@site/blog/2020/09-02-version-1_1_132.md",title:"Version 1.1.132",description:"Allgemein",date:"2020-09-02T00:00:00.000Z",formattedDate:"2. September 2020",tags:[{label:"Allgemein",permalink:"/blog/tags/allgemein"},{label:"Audits",permalink:"/blog/tags/audits"},{label:"Blog",permalink:"/blog/tags/blog"},{label:"Dokumentenmanagmenet",permalink:"/blog/tags/dokumentenmanagmenet"},{label:"WIKI",permalink:"/blog/tags/wiki"},{label:"Schulungen",permalink:"/blog/tags/schulungen"},{label:"Reklamationsmanagement",permalink:"/blog/tags/reklamationsmanagement"},{label:"Changelog",permalink:"/blog/tags/changelog"}],readingTime:.915,truncated:!1,authors:[{name:"Philipp P\xe4hler",title:"qmBase Development Team",imageURL:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png"}],frontMatter:{slug:"version-1_1_132",title:"Version 1.1.132",author:"Philipp P\xe4hler",author_title:"qmBase Development Team",author_image_url:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png",tags:["Allgemein","Audits","Blog","Dokumentenmanagmenet","WIKI","Schulungen","Reklamationsmanagement","Changelog"]},prevItem:{title:"Version 1.1.133",permalink:"/blog/version-1_1_133"},nextItem:{title:"Version 1.1.131",permalink:"/blog/version-1_1_131"}},s={authorsImageUrls:[void 0]},m=[{value:"Allgemein",id:"allgemein",children:[],level:2},{value:"Audits",id:"audits",children:[],level:2},{value:"Blog, Dokumentenmanagmenet, WIKI",id:"blog-dokumentenmanagmenet-wiki",children:[],level:2},{value:"Schulungen",id:"schulungen",children:[],level:2},{value:"Reklamationsmanagement",id:"reklamationsmanagement",children:[],level:2}],u={toc:m};function g(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"allgemein"},"Allgemein"),(0,i.kt)("p",null,"Bevor wir wie angek\xfcndigt die Unterst\xfctzung f\xfcr alte Browser, wie den Internet Explorer 11 einstellen haben wir noch mal ein paar Kleinigkeiten behoben, um die Kompatibilit\xe4t zu verbessern. Trotzdem bleiben wir dabei, dass wie die Unterst\xfctzung ab jetzt nicht mehr aktiv weiter entwickeln."),(0,i.kt)("h2",{id:"audits"},"Audits"),(0,i.kt)("p",null,"Die Druckansicht der Teilnehmer wurde \xfcberarbeitet."),(0,i.kt)("h2",{id:"blog-dokumentenmanagmenet-wiki"},"Blog, Dokumentenmanagmenet, WIKI"),(0,i.kt)("p",null,"Die Druckansicht und die Darstellung der erweiterten Details wurden optimiert, so dass das Laden jetzt deutlich fl\xfcssiger "),(0,i.kt)("p",null,"Wir haben die \xdcbersicht der unver\xf6ffentlichten Revisionen aufger\xe4umt und leichter lesbar gemacht."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/releasenotes/120-images/fa065d63-6461-4a62-8e6c-a783f89319f9-mceclip0.png",alt:null})),(0,i.kt)("p",null,"Zus\xe4tzlich sehen Sie jetzt nur die unver\xf6ffentlichten Artikel, mit denen Sie etwas zu tun haben. Also Artikel, f\xfcr die Sie entweder vertantwortlich sind oder die sie freigben m\xfcssen. Unver\xf6ffentlichte Artikel von anderen sehen Sie nur noch, wenn Sie z.B. Administrator sind."),(0,i.kt)("h2",{id:"schulungen"},"Schulungen"),(0,i.kt)("p",null,"Die Druckansicht der Teilnehmer wurde \xfcberarbeitet."),(0,i.kt)("h2",{id:"reklamationsmanagement"},"Reklamationsmanagement"),(0,i.kt)("p",null,'Die Custom Fields im Reklamationsmanagement k\xf6nnen jetzt so festgelegt werden, dass sie nur noch durch Mitglieder von speziellen Rollen ausgef\xfcllt werden k\xf6nnen. Wie Sie diese Funktion nutzen haben wir in unseren FAQs unter der Frage "Wie schr\xe4nke ich den Zugriff auf Custom Fields ein?" erkl\xe4rt.'))}g.isMDXComponent=!0}}]);