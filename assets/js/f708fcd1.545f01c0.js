(window.webpackJsonp=window.webpackJsonp||[]).push([[506],{577:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),l=(n(0),n(601)),i={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/technical/installation"},o={unversionedId:"technical/installation",id:"technical/installation",isDocsHomePage:!1,title:"Installation",description:"Install on Windows",source:"@site/docs/technical/installation.md",slug:"/technical/installation",permalink:"/docs/technical/installation",editUrl:"https://github.com/qmBase/docs/tree/master/docs/technical/installation.md",version:"current",lastUpdatedAt:1617886331,formattedLastUpdatedAt:"4/8/2021",sidebar_label:"Installation",sidebar:"someSidebar",previous:{title:"Wie wird qmBase entwickelt",permalink:"/docs/technical/wie-wird-qmbase-entwickelt"},next:{title:"Tutorial Template",permalink:"/docs/tutorial-template"}},c=[{value:"Install on Windows",id:"install-on-windows",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"How to install?",id:"how-to-install",children:[]},{value:"How to update?",id:"how-to-update",children:[]}]},{value:"Install on Linux",id:"install-on-linux",children:[]},{value:"Breaking Changes",id:"breaking-changes",children:[{value:"Deployment Status",id:"deployment-status",children:[]}]},{value:"Tools &amp; Frameworks we use",id:"tools--frameworks-we-use",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"install-on-windows"},"Install on Windows"),Object(l.b)("p",null,"qmBase can be installed on Windows."),Object(l.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"MS SQL 2019 Database"),Object(l.b)("li",{parentName:"ul"},"Windows 10 Pro or higher"),Object(l.b)("li",{parentName:"ul"},"ASP.NET Core Hosting Bundle 5.0.x"),Object(l.b)("li",{parentName:"ul"},"IIS Webserver V 10"),Object(l.b)("li",{parentName:"ul"},"SSL Certificate Public or self signed"),Object(l.b)("li",{parentName:"ul"},"Hardware requirements",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"min 4 GB Ram"),Object(l.b)("li",{parentName:"ul"},"min 10 GB HDD")))),Object(l.b)("h4",{id:"recommended-folder-structure"},"Recommended Folder Structure"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"D:\\qmbase\\",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"app\\ -> Save the app data here"),Object(l.b)("li",{parentName:"ul"},"builds\\ -> Save old builds here if you need to roll back an update"),Object(l.b)("li",{parentName:"ul"},"databases\\ -> Store databases here"),Object(l.b)("li",{parentName:"ul"},"uploads","\\","{CustomerId}\\ -> Save user generated uploads here")))),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Use a dedidacted partition (D:","\\",") to store the data."))),Object(l.b)("h3",{id:"how-to-install"},"How to install?"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Download the latest qmBase version from ",Object(l.b)("a",{parentName:"p",href:"https://support.qmbase.com/downloads/"},"here"),". You will get the credentials via mail after you have signed the contract.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Extract the ZIP file to the folder where the IIS is located.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Run the latest database migrations. The SQL scripts will be provided on the download page as well. You will need to create 2 databases. Use the following name schema"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"multi-tenant"),Object(l.b)("li",{parentName:"ul"},"qmbase{CustomerId}"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"qmBase requires a SSL connection. So you have to configure the IIS to use either a self signed certificate or use a regular certificate.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Configure qmBase and start running."))),Object(l.b)("h4",{id:"configure-qmbase"},"Configure qmBase"),Object(l.b)("p",null,"To configure qmBase you have take actions in 2 different places."),Object(l.b)("p",null,"Insert this row in your multi tenant database"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [yourDatabase].[dbo].[MultiTenants]\n(\n        ,[DatabaseType]\n        ,[Host]\n        ,[ConnectionString]\n        ,[StorageConnectionString]\n        ,[Name]\n        ,[CustomerId]\n)\nVALUES\n(\n        ,0\n        ,pathToYour.qmbase\n        ,SQL Connection string\n        ,NULL\n        ,yourCustomerName\n        ,yourCustomerId\n)\n")),Object(l.b)("p",null,"Change the appSettings.Production.json file"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'// These settings will only be applied if HostingEnvironment is "Production"\n// Use this file to customize the behavior in Production\n{\n  //ApplicationInsights settings omitted for brevity.\n  "ConnectionStrings": {\n    "MultiTenantConnection": "Connection string to multiTenantContext",\n    // These settings are not needed if multiTenant==true\n    "DefaultConnection": "Your Ms SQL ConnectionString -> not needed in MultiTenantScenario"\n  },\n  "AppSettings": {\n    "MultiTenantContext": true,\n    "StorageType": "FileSystem", //"FileSystem" | "AzureBlobStorage"\n    "PhysicalFileProviderRootPath": "D:\\\\qmbase\\\\uploads"\n  }\n}\n')),Object(l.b)("h3",{id:"how-to-update"},"How to update?"),Object(l.b)("p",null,"We are improving qmBase continuously. That means that we are releasing multiple Updates per Day. So if you are experiencing any bugs you can always try to download the latest release."),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Delete all files in ",Object(l.b)("code",null,"app")," folder except ",Object(l.b)("strong",{parentName:"li"},"web.config")," and ",Object(l.b)("strong",{parentName:"li"},"appSettings.Production.json"),"."),Object(l.b)("li",{parentName:"ol"},"Extract the zip file from the update and copy all files except ",Object(l.b)("strong",{parentName:"li"},"web.config")," and ",Object(l.b)("strong",{parentName:"li"},"appSettings.Production.json")," to the ",Object(l.b)("code",null,"app")," folder.")),Object(l.b)("h4",{id:"qmbaseinstaller"},"qmBase.Installer"),Object(l.b)("p",null,"Alternatively you can use the qmBase.Installer.exe. If you use the default configuration you can do 9 out of 10 updates automatically. Please note that the qmBase.Installer is part of the Enterprise subscription."),Object(l.b)("h2",{id:"install-on-linux"},"Install on Linux"),Object(l.b)("p",null,"Possible but not yet documented"),Object(l.b)("h2",{id:"breaking-changes"},"Breaking Changes"),Object(l.b)("h3",{id:"deployment-status"},"Deployment Status"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null},"Status"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Build"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://dev.azure.com/caqio/PBD/_build/latest?definitionId=24"},Object(l.b)("img",{parentName:"a",src:"https://dev.azure.com/caqio/PBD/_apis/build/status/qmBase%20Master",alt:"Build status"})))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Deployment"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("img",{parentName:"td",src:"https://vsrm.dev.azure.com/caqio/_apis/public/Release/badge/40d1313e-3385-464b-a9ed-3cce1c2d470e/3/16",alt:null}))))),Object(l.b)("h2",{id:"tools--frameworks-we-use"},"Tools & Frameworks we use"),Object(l.b)("p",null,"qmBase builds upon modern and popular technologies.\nFor our backend we use"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"ASP.NET 5.0")),Object(l.b)("p",null,"For our frontend we use"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"React"),Object(l.b)("li",{parentName:"ul"},"Code is written in TypeScript")))}b.isMDXComponent=!0},601:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||l;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);