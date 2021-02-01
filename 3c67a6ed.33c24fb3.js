(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{209:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),i=t(7),a=(t(0),t(607)),l={slug:"version-1_0_1_16",title:"Version 1.0.1.16",author:"Philipp P\xe4hler",author_title:"qmBase Development Team",author_image_url:"https://qmbasesupport.blob.core.windows.net/static-assets/img/persons/paehler_round.png",tags:[]},o={permalink:"/blog/version-1_0_1_16",editUrl:"https://github.com/qmBase/docs/tree/master/blog/2017-01-04-version-1_0_1_16.md",source:"@site/blog/2017-01-04-version-1_0_1_16.md",description:"Verbesserungen",date:"2017-01-04T00:00:00.000Z",tags:[],title:"Version 1.0.1.16",readingTime:.785,truncated:!1,prevItem:{title:"Version 1.0.1.17",permalink:"/blog/version-1_0_1_17"},nextItem:{title:"Version 1.0.1.10",permalink:"/blog/version-1_0_1_10"}},c=[{value:"Verbesserungen",id:"verbesserungen",children:[]},{value:"Fehlerbehebungen",id:"fehlerbehebungen",children:[]},{value:"Bekannte Fehler",id:"bekannte-fehler",children:[]}],u={toc:c};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"verbesserungen"},"Verbesserungen"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Prozess der Ideengenehmigung und Registrierung wird deutlicher im rechten Bereich der Detailansicht dargestellt.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Ideen m\xfcssen durch einen Ideenkoordinator angenommen oder abgelehnt werden.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Status der Ideen wird in den einzelnen Ansichten durch Registerkarten vorgefiltet.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Ideen k\xf6nnen abgelehnt werden")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Der Button zum editieren der Ideen befindet sich jetzt - so lange das m\xf6glich ist - oben rechts im Bereich des Buttons zum L\xf6schen.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Der Admin Bereich wurde bereinigt."))),Object(a.b)("h3",{id:"fehlerbehebungen"},"Fehlerbehebungen"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"E-Mail Benachrichtigungen werden jetzt bei allen Bearbeitungsstatus verschickt")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Diverse \xdcbersetzungen und Formatierungsprobleme"))),Object(a.b)("h3",{id:"bekannte-fehler"},"Bekannte Fehler"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'Alle bereits eingereichten und registrierten\xa0Ideen wurden jetzt durch eine Person mit dem heutigen Datum als angenommen gekennzeichnet, um die "leere Spalte" zu f\xfcllen.')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Unter Umst\xe4nden wird der Status bereits erstellten Ideen auf den Registerkarten nicht richtig dargestellt oder doppelt dargestellt. Das kann bei neuen Ideen nicht mehr passieren und liegt an der Einf\xfchrung des zus\xe4tzlichen Unterscheidungsmerkmals des Ideenkoordinators zur Genehmigung von Ideen."))))}s.isMDXComponent=!0},607:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),s=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=s(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(t),d=r,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||a;return t?i.a.createElement(m,o(o({ref:n},u),{},{components:t})):i.a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);