(window.webpackJsonp=window.webpackJsonp||[]).push([[501],{571:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(595)),l={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/technical/installation"},o={unversionedId:"technical/installation",id:"technical/installation",isDocsHomePage:!1,title:"Installation",description:"Install on Windows",source:"@site/docs/technical/installation.md",slug:"/technical/installation",permalink:"/docs/technical/installation",editUrl:"https://github.com/qmBase/docs/tree/master/docs/technical/installation.md",version:"current",lastUpdatedAt:1614859014,sidebar_label:"Installation",sidebar:"someSidebar",previous:{title:"Wie wird qmBase entwickelt",permalink:"/docs/technical/wie-wird-qmbase-entwickelt"},next:{title:"Tutorial Template",permalink:"/docs/tutorial-template"}},c=[{value:"Install on Windows",id:"install-on-windows",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"How to install?",id:"how-to-install",children:[]},{value:"How to update?",id:"how-to-update",children:[]}]},{value:"Configure qmBase",id:"configure-qmbase",children:[]},{value:"Install on Linux",id:"install-on-linux",children:[]},{value:"Breaking Changes",id:"breaking-changes",children:[{value:"Deployment Status",id:"deployment-status",children:[]}]},{value:"Tools &amp; Frameworks we use",id:"tools--frameworks-we-use",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"install-on-windows"},"Install on Windows"),Object(i.b)("p",null,"qmBase can be installed on Windows."),Object(i.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"MS SQL 2019 Database"),Object(i.b)("li",{parentName:"ul"},"Windows 10 Pro or higher"),Object(i.b)("li",{parentName:"ul"},"ASP.NET Core Hosting Bundle 5.0.x"),Object(i.b)("li",{parentName:"ul"},"IIS Webserver V 10"),Object(i.b)("li",{parentName:"ul"},"SSL Certificate Public or self signed"),Object(i.b)("li",{parentName:"ul"},"Hardware requirements",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"min 4 GB Ram"),Object(i.b)("li",{parentName:"ul"},"min 10 GB HDD")))),Object(i.b)("h4",{id:"recommended-folder-structure"},"Recommended Folder Structure"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"D:\\qmbase\\",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"builds\\ -> Save old builds here if you need to roll back an update"),Object(i.b)("li",{parentName:"ul"},"uploads","\\","{CustomerId}\\ -> Save user generated uploads here"),Object(i.b)("li",{parentName:"ul"},"app\\ -> Save the app data here")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Use a dedidacted partition (D:","\\",") to store the data."))),Object(i.b)("h3",{id:"how-to-install"},"How to install?"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Download the latest qmBase version from ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://support.qmbase.com/downloads/"}),"here"),". You will get the credentials via mail after you have signed the contract."),Object(i.b)("li",{parentName:"ol"},"Extract the ZIP file to the folder where the IIS is located."),Object(i.b)("li",{parentName:"ol"},"Run the latest database migrations. The SQL scripts will be provided on the download page as well. You will need to create 2 databases."),Object(i.b)("li",{parentName:"ol"},"qmBase requires a SSL connection. So you have to configure the IIS to use either a self signed certificate or use a regular certificate."),Object(i.b)("li",{parentName:"ol"},"Configure qmBase and start running.")),Object(i.b)("h3",{id:"how-to-update"},"How to update?"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Delete all files in ",Object(i.b)("code",null,"app")," folder except ",Object(i.b)("strong",{parentName:"li"},"web.config")," and ",Object(i.b)("strong",{parentName:"li"},"appSettings.Production.json"),"."),Object(i.b)("li",{parentName:"ol"},"Extract the zip file from the update and copy all files except ",Object(i.b)("strong",{parentName:"li"},"web.config")," and ",Object(i.b)("strong",{parentName:"li"},"appSettings.Production.json")," to the ",Object(i.b)("code",null,"app")," folder.")),Object(i.b)("h2",{id:"configure-qmbase"},"Configure qmBase"),Object(i.b)("p",null,"To configure qmBase you have take actions in 2 different places."),Object(i.b)("p",null,"Insert this row in your multi tenant database"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"INSERT INTO [yourDatabase].[dbo].[MultiTenants]\n(\n        ,[DatabaseType]\n        ,[Host]\n        ,[ConnectionString]\n        ,[StorageConnectionString]\n        ,[Name]\n        ,[CustomerId]\n)\nVALUES\n(\n        ,0\n        ,pathToYour.qmbase\n        ,SQL Connection string\n        ,NULL\n        ,yourCustomerName\n        ,yourCustomerId\n)\n")),Object(i.b)("p",null,"Change the appSettings.Production.json file"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// These settings will only be applied if HostingEnvironment is "Production"\n// Use this file to customize the behavior in Production\n{\n  //ApplicationInsights settings omitted for brevity.\n  "ConnectionStrings": {\n    "MultiTenantConnection": "Connection string to multiTenantContext",\n    // These settings are not needed if multiTenant==true\n    "DefaultConnection": "Your Ms SQL ConnectionString -> not needed in MultiTenantScenario"\n  },\n  "AppSettings": {\n    "MultiTenantContext": true,\n    "StorageType": "FileSystem", //"FileSystem" | "AzureBlobStorage"\n    "PhysicalFileProviderRootPath": "D:\\\\qmbase\\\\uploads"\n  }\n}\n')),Object(i.b)("h2",{id:"install-on-linux"},"Install on Linux"),Object(i.b)("p",null,"Possible but not yet documented"),Object(i.b)("h2",{id:"breaking-changes"},"Breaking Changes"),Object(i.b)("h3",{id:"deployment-status"},"Deployment Status"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Status"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Build"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://dev.azure.com/caqio/PBD/_build/latest?definitionId=24"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://dev.azure.com/caqio/PBD/_apis/build/status/qmBase%20Master",alt:"Build status"}))))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Deployment"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("img",Object(a.a)({parentName:"td"},{src:"https://vsrm.dev.azure.com/caqio/_apis/public/Release/badge/40d1313e-3385-464b-a9ed-3cce1c2d470e/3/16",alt:null})))))),Object(i.b)("h2",{id:"tools--frameworks-we-use"},"Tools & Frameworks we use"),Object(i.b)("p",null,"qmBase builds upon modern and popular technologies.\nFor our backend we use"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ASP.NET 5.0")),Object(i.b)("p",null,"For our frontend we use"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"React"),Object(i.b)("li",{parentName:"ul"},"Code is written in TypeScript")))}b.isMDXComponent=!0},595:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);