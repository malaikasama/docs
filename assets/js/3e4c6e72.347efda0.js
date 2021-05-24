(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[42538],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return g}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),l=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return i.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(t),g=r,p=m["".concat(u,".").concat(g)]||m[g]||s[g]||o;return t?i.createElement(p,a(a({ref:n},d),{},{components:t})):i.createElement(p,a({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},23921:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var i=t(22122),r=t(19756),o=(t(67294),t(3905)),a={id:"account-externalLogin",title:"Externe Logins"},c={unversionedId:"account/account-externalLogin",id:"account/account-externalLogin",isDocsHomePage:!1,title:"Externe Logins",description:'Als premium Feature bieten wir die M\xf6glichkeit an, dass Sie die Anmeldung bei qmBase mit einem externen Login Provider durchf\xfchren. Auf der Anmeldeseite erscheint dann der Button "Anmelden mit...".',source:"@site/docs/account/account-externalLogin.md",sourceDirName:"account",slug:"/account/account-externalLogin",permalink:"/docs/account/account-externalLogin",editUrl:"https://github.com/qmBase/docs/tree/master/docs/account/account-externalLogin.md",version:"current",lastUpdatedAt:1621846716,formattedLastUpdatedAt:"24.5.2021",frontMatter:{id:"account-externalLogin",title:"Externe Logins"},sidebar:"someSidebar",previous:{title:"Profil",permalink:"/docs/account/profile"},next:{title:"Admin",permalink:"/docs/admin"}},u=[{value:"Konfiguration der externen Logins als Admin",id:"konfiguration-der-externen-logins-als-admin",children:[]},{value:"Einstellungen f\xfcr den Nutzer",id:"einstellungen-f\xfcr-den-nutzer",children:[{value:"Sie haben bereits einen Account",id:"sie-haben-bereits-einen-account",children:[]},{value:"Sie haben noch keinen Account",id:"sie-haben-noch-keinen-account",children:[]},{value:"L\xf6sungen f\xfcr Probleme bei der Anmeldung mit externen Login Providern",id:"l\xf6sungen-f\xfcr-probleme-bei-der-anmeldung-mit-externen-login-providern",children:[]}]}],l={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Als premium Feature bieten wir die M\xf6glichkeit an, dass Sie die Anmeldung bei qmBase mit einem externen Login Provider durchf\xfchren. Auf der Anmeldeseite erscheint dann der Button "Anmelden mit...".\nDerzeit bieten wir folgende externe Login Provider an:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Azure Active Directory"),(0,o.kt)("li",{parentName:"ul"},"Google")),(0,o.kt)("p",null,"Die Vorteile der Anmeldung hier\xfcber sind."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Merken Sie sich nur einen Login"),(0,o.kt)("li",{parentName:"ul"},"Nutzen Sie die gleichen Features und Richtlininen, wie bei Ihrem Login Provider"),(0,o.kt)("li",{parentName:"ul"},"Zentrale Steuerung aller Benutzerkonten")),(0,o.kt)("h2",{id:"konfiguration-der-externen-logins-als-admin"},"Konfiguration der externen Logins als Admin"),(0,o.kt)("p",null,"Wenn die externen Login Provider f\xfcr Ihr Abonnement freigeschaltet sind, wechseln Sie in die Admin App > Berechtigungen."),(0,o.kt)("p",null,"In der Karte ",(0,o.kt)("strong",{parentName:"p"},"Externer Login")," aktivieren Sie die externen Login Provider. Gleichzeitig k\xf6nnen Sie die lokalen Konten deaktivieren. Es ist dann nur noch die Anmeldung mit dem externen Login Provider m\xf6glich."),(0,o.kt)("h2",{id:"einstellungen-f\xfcr-den-nutzer"},"Einstellungen f\xfcr den Nutzer"),(0,o.kt)("p",null,"Als normaler Nutzer gibt es zwei M\xf6glichkeiten, wie Sie die Anmeldung nutzen k\xf6nnen."),(0,o.kt)("h3",{id:"sie-haben-bereits-einen-account"},"Sie haben bereits einen Account"),(0,o.kt)("p",null,"Wenn Sie bereits einen Account haben, k\xf6nnen Sie die zus\xe4tzliche Anmeldem\xf6glichkeit in Ihrem Profil hinzuf\xfcgen. Gehen Sie daf\xfcr in Ihr Profil und verkn\xfcpfen Sie hier den gew\xfcnschten Login. Wenn Sie sich jetzt das n\xe4chste Mal anmelden, w\xe4hlen Sie auf der Anmeldeseite den entsprechnenden Login aus."),(0,o.kt)("h3",{id:"sie-haben-noch-keinen-account"},"Sie haben noch keinen Account"),(0,o.kt)("p",null,"Wenn Sie noch keinen qmBase Account haben, k\xf6nnen Sie sich auch mit einem externen Login direkt registrieren. W\xe4hlen Sie daf\xfcr einfach den gew\xfcnschten Login aus und folgen Sie den Anweisungen."),(0,o.kt)("h3",{id:"l\xf6sungen-f\xfcr-probleme-bei-der-anmeldung-mit-externen-login-providern"},"L\xf6sungen f\xfcr Probleme bei der Anmeldung mit externen Login Providern"),(0,o.kt)("p",null,"H\xe4ufig gestellte Fragen im Zusammenhang mit der Anmeldung mit externen Login Providern beantworten wir hier."),(0,o.kt)("h4",{id:"warum-sehe-ich-die-optionen-f\xfcr-den-externen-login-nicht"},"Warum sehe ich die Optionen f\xfcr den externen Login nicht?"),(0,o.kt)("p",null,"Der Login mit externen Anbietern ist derzeit ein Spezial Feature, das standardm\xe4\xdfig nicht aktiviert ist. Wenn Sie hieran interessiert sind, wenden Sie sich bitte an ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@qmbase.com"},"support@qmbase.com")),(0,o.kt)("h4",{id:"was-muss-ich-beim-azure-active-directory-beachten"},"Was muss ich beim Azure Active Directory beachten?"),(0,o.kt)("p",null,"Je nach Einstellung muss der Admin im Azure Active Directory unter Umst\xe4nden die Anmeldung bei fremden Apps aktivieren."))}d.isMDXComponent=!0}}]);