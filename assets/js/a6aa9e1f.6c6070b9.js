(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[93089],{46165:(e,t,a)=>{"use strict";a.d(t,{Z:()=>E});var n=a(67294),r=a(86010),l=a(46254),s=a(36742);const i="sidebar_2ahu",o="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",m="sidebarItem_2UVv",d="sidebarItemLink_1RT6",u="sidebarItemLinkActive_12pM";var g=a(24973);function p({sidebar:e}){return 0===e.items.length?null:n.createElement("nav",{className:(0,r.Z)(i,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(o,"margin-bottom--md")},e.title),n.createElement("ul",{className:c},e.items.map((e=>n.createElement("li",{key:e.permalink,className:m},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:u},e.title))))))}var h=a(571);const E=function(e){const{sidebar:t,toc:a,children:s,...i}=e,o=t&&t.items.length>0;return n.createElement(l.Z,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(p,{sidebar:t})),n.createElement("main",{className:(0,r.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},n.createElement(h.Z,{toc:a})))))}},44428:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var n=a(67294),r=a(52263),l=a(46165),s=a(94884),i=a(36742),o=a(24973);const c=function(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,o.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(i.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(o.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(i.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(o.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};var m=a(941);const d=function(e){const{metadata:t,items:a,sidebar:i}=e,{siteConfig:{title:o}}=(0,r.Z)(),{blogDescription:d,blogTitle:u,permalink:g}=t,p="/"===g?o:u;return n.createElement(l.Z,{title:p,description:d,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:i},a.map((({content:e})=>n.createElement(s.Z,{key:e.metadata.permalink,frontMatter:e.frontMatter,assets:e.assets,metadata:e.metadata,truncated:e.metadata.truncated},n.createElement(e,null)))),n.createElement(c,{metadata:t}))}},94884:(e,t,a)=>{"use strict";a.d(t,{Z:()=>_});var n=a(67294),r=a(86010),l=a(3905),s=a(24973),i=a(36742),o=a(44996),c=a(941),m=a(60637),d=a(86146);const u="blogPostTitle_GeHD",g="blogPostData_291c",p="blogPostDetailsFull_3kfx";var h=a(87682);const E="image_1yU8";const v=function({author:e}){const{name:t,title:a,url:r,imageURL:l}=e;return n.createElement("div",{className:"avatar margin-bottom--sm"},l&&n.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:r},n.createElement("img",{className:E,src:l,alt:t})),t&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(i.Z,{href:r,itemProp:"url"},n.createElement("span",{itemProp:"name"},t))),a&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))},b="authorCol_1R69";function f({authors:e,assets:t}){return 0===e.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},e.map(((e,a)=>n.createElement("div",{className:(0,r.Z)("col col--6",b),key:a},n.createElement(v,{author:{...e,imageURL:t.authorsImageUrls[a]??e.imageURL}})))))}const _=function(e){const t=function(){const{selectMessage:e}=(0,c.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,o.C)(),{children:E,frontMatter:v,assets:b,metadata:_,truncated:N,isBlogPostPage:Z=!1}=e,{date:k,formattedDate:P,permalink:T,tags:L,readingTime:C,title:w,editUrl:y,authors:M}=_,R=b.image??v.image;return n.createElement("article",{className:Z?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=Z?"h1":"h2";return n.createElement("header",null,n.createElement(e,{className:u,itemProp:"headline"},Z?w:n.createElement(i.Z,{itemProp:"url",to:T},w)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:k,itemProp:"datePublished"},P),void 0!==C&&n.createElement(n.Fragment,null," \xb7 ",t(C))),n.createElement(f,{authors:M,assets:b}))})(),R&&n.createElement("meta",{itemProp:"image",content:a(R,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:m.Z},E)),(L.length>0||N)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",{[p]:Z})},L.length>0&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":!Z})},n.createElement(h.Z,{tags:L})),Z&&y&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:y})),!Z&&N&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(i.Z,{to:_.permalink,"aria-label":`Read more about ${w}`},n.createElement("b",null,n.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},86146:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(67294),r=a(24973),l=a(22122),s=a(86010);const i="iconEdit_2_ui",o=({className:e,...t})=>n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i,e),"aria-hidden":"true"},t),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));var c=a(941);function m({editUrl:e}){return n.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:c.kM.common.editThisPage},n.createElement(o,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:(e,t,a)=>{"use strict";a.d(t,{r:()=>g,Z:()=>p});var n=a(67294),r=a(86010),l=a(941);function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function i({anchorTopOffset:e}){const t=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=t.find((t=>s(t).top>=e));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:t[t.indexOf(a)-1]??null}return t[t.length-1]}function o(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.LU)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const c=function(e){const t=(0,n.useRef)(void 0),a=o();(0,n.useEffect)((()=>{const{linkClassName:n,linkActiveClassName:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=i({anchorTopOffset:a.current}),s=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_35-E",d="table-of-contents__link",u={linkClassName:d,linkActiveClassName:"table-of-contents__link--active"};function g({toc:e,isChild:t}){return e.length?n.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:d,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(g,{isChild:!0,toc:e.children}))))):null}const p=function({toc:e}){return c(u),n.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar")},n.createElement(g,{toc:e}))}},37211:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(67294),r=a(86010),l=a(36742);const s="tag_1Okp",i="tagRegular_3MiF",o="tagWithCount_1HU1";const c=function(e){const{permalink:t,name:a,count:c}=e;return n.createElement(l.Z,{href:t,className:(0,r.Z)(s,{[i]:!c,[o]:c})},a,c&&n.createElement("span",null,c))}},87682:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(67294),r=a(86010),l=a(24973),s=a(37211);const i="tags_2ga9",o="tag_11ep";function c({tags:e}){return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(i,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>n.createElement("li",{key:t,className:o},n.createElement(s.Z,{name:e,permalink:t}))))))}}}]);