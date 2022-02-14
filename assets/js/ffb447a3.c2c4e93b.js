"use strict";(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[25730],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=i,g=c["".concat(o,".").concat(u)]||c[u]||m[u]||a;return t?r.createElement(g,s(s({ref:n},d),{},{components:t})):r.createElement(g,s({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=c;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},65819:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>s,metadata:()=>l,assets:()=>o,toc:()=>p,default:()=>m});var r=t(83117),i=(t(67294),t(3905));const a={slug:"version-1_1_134",title:"Version 1.1.134",author:"Philipp P\xe4hler",author_title:"qmBase Development Team",author_image_url:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png",tags:["Allgemein - App Startseiten","Dashboard & Reportings","Changelog"]},s=void 0,l={permalink:"/blog/version-1_1_134",editUrl:"https://github.com/qmBase/docs/tree/master/blog/2020/09-25-version-1_1_134.md",source:"@site/blog/2020/09-25-version-1_1_134.md",title:"Version 1.1.134",description:"Allgemein - App Startseiten",date:"2020-09-25T00:00:00.000Z",formattedDate:"25. September 2020",tags:[{label:"Allgemein - App Startseiten",permalink:"/blog/tags/allgemein-app-startseiten"},{label:"Dashboard & Reportings",permalink:"/blog/tags/dashboard-reportings"},{label:"Changelog",permalink:"/blog/tags/changelog"}],readingTime:1.22,truncated:!1,authors:[{name:"Philipp P\xe4hler",title:"qmBase Development Team",imageURL:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png"}],frontMatter:{slug:"version-1_1_134",title:"Version 1.1.134",author:"Philipp P\xe4hler",author_title:"qmBase Development Team",author_image_url:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png",tags:["Allgemein - App Startseiten","Dashboard & Reportings","Changelog"]},prevItem:{title:"Version 1.1.135",permalink:"/blog/version-1_1_135"},nextItem:{title:"Version 1.1.133",permalink:"/blog/version-1_1_133"}},o={authorsImageUrls:[void 0]},p=[{value:"Allgemein - App Startseiten",id:"allgemein---app-startseiten",children:[],level:2},{value:"Dashboard &amp; Reportings",id:"dashboard--reportings",children:[],level:2}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"allgemein---app-startseiten"},"Allgemein - App Startseiten"),(0,i.kt)("p",null,"Im Zuge der Verfeinerungen unserer Apps haben wir die App Startseiten \xfcberarbeitet. Folgendes ist jetzt neu und verbessert.",(0,i.kt)("br",{parentName:"p"}),"\n","Eines unserer \xfcbergeordneten Ziele ist es, unsere Software dynamischer zu gestalten. Hierbei gehen wir mehr und mehr dazu \xfcber die dargestellten Daten regelm\xe4\xdfig im Hintergrund nachzuladen, so dass Sie keine \xc4nderungen verpassen und auch beim gleichzeitigen Zugriff mehrerer Nutzer immer direkt \xc4nderungen erkennen k\xf6nnen. Ein Beispiel hierf\xfcr ist der Kommentarfeed auf den App Startseiten. Sobald Sie die Startseite im Fokus Ihrer Arbeit haben, wird im Hintergrund \xfcberpr\xfcft, ob es neue Kommentare gibt und diese Dann anschlie\xdfend dargestellt."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/releasenotes/122-images/68a9617e-37cc-4f53-9bef-a7b7cef6f0a2-commentUpdate.gif",alt:null}),(0,i.kt)("br",{parentName:"p"}),"\n","Wir zeigen jetzt auf den Startseiten der Apps an, welche Ma\xdfnahmen insgesamt mit der jeweiligen App verkn\xfcpft sind und wie deren Status ist. Da die Ma\xdfnahmen innerhalb von qmBase eine zentrale und verkn\xfcpfende Rolle besitzen, haben Sie so leichter und schneller die M\xf6glichkeit zu erkennen, ob in einem bestimmten Bereich Handlungsbedarf besteht oder bereits Fristen abgelaufen sind. Mit einem Klick kommen Sie dann direkt zu den jeweiligen Ma\xdfnahmen."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/releasenotes/122-images/10c21151-2295-4db8-9a88-eee668aa8661-mceclip1.png",alt:null})),(0,i.kt)("h2",{id:"dashboard--reportings"},"Dashboard & Reportings"),(0,i.kt)("p",null,"Wenn Sie wissen m\xf6chten, wie die Altersverteilung innerhalb Ihrer Organisation ist, k\xf6nnen sich sich das jetzt jederzeit anschauen. Wir haben eine neue Analyse zu dem Bereich Mitarbeiter hinzugef\xfcgt, wo Sie hier jederzeit einen Einblick in Ihre Daten haben."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://caqadmin.blob.core.windows.net/releasenotes/122-images/2b72acc8-dcc0-44e5-894a-3dbc8c946dde-mceclip0.png",alt:null}),(0,i.kt)("br",{parentName:"p"}),"\n","Eine \xe4hnliche Analyse bieten wir Ihnen dar\xfcber hinaus auch f\xfcr Ihre Inventargegenst\xe4nde. Wenn Sie diese mit dem Kaufdatum erfassen, zeigen wir Ihnen auch hier die Altersverteilung Ihrer Maschinen und Anlagen an."))}m.isMDXComponent=!0}}]);