(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[93089],{46165:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var n=a(67294),l=a(86010),r=a(5227),s=a(36742);const i="sidebar_2ahu",c="sidebarItemTitle_2hhb",o="sidebarItemList_2xAf",m="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM";var u=a(24973);function p({sidebar:e}){return 0===e.items.length?null:n.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,u.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},e.title),n.createElement("ul",{className:o},e.items.map((e=>n.createElement("li",{key:e.permalink,className:m},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))))))}var E=a(571);const h=function(e){const{sidebar:t,toc:a,children:s,...i}=e,c=t&&t.items.length>0;return n.createElement(r.Z,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},c&&n.createElement("aside",{className:"col col--3"},n.createElement(p,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c})},s),a&&n.createElement("div",{className:"col col--2"},n.createElement(E.Z,{toc:a})))))}},44428:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var n=a(67294),l=a(52263),r=a(46165),s=a(43146),i=a(36742),c=a(24973);const o=function(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(i.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&n.createElement(i.Z,{className:"pagination-nav__link",to:l},n.createElement("div",{className:"pagination-nav__label"},n.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};var m=a(13018);const d=function(e){const{metadata:t,items:a,sidebar:i}=e,{siteConfig:{title:c}}=(0,l.Z)(),{blogDescription:d,blogTitle:g,permalink:u}=t,p="/"===u?c:g;return n.createElement(r.Z,{title:p,description:d,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:i},a.map((({content:e})=>n.createElement(s.Z,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},n.createElement(e,null)))),n.createElement(o,{metadata:t}))}},43146:(e,t,a)=>{"use strict";a.d(t,{Z:()=>E});var n=a(67294),l=a(86010),r=a(3905),s=a(24973),i=a(36742),c=a(13018),o=a(60637),m=a(41217),d=a(86146);const g="blogPostTitle_GeHD",u="blogPostData_291c",p="blogPostDetailsFull_3kfx";const E=function(e){const t=function(){const{selectMessage:e}=(0,c.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:E,metadata:h,truncated:b,isBlogPostPage:v=!1}=e,{date:_,formattedDate:f,permalink:N,tags:Z,readingTime:k,title:T,editUrl:L}=h,{author:w,image:C,keywords:I}=E,x=E.author_url||E.authorURL,y=E.author_title||E.authorTitle,M=E.author_image_url||E.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(m.Z,{keywords:I,image:C}),n.createElement("article",{className:v?void 0:"margin-bottom--xl"},(()=>{const e=v?"h1":"h2";return n.createElement("header",null,n.createElement(e,{className:g},v?T:n.createElement(i.Z,{to:N},T)),n.createElement("div",{className:(0,l.Z)(u,"margin-vert--md")},n.createElement("time",{dateTime:_},f),k&&n.createElement(n.Fragment,null," \xb7 ",t(k))),n.createElement("div",{className:"avatar margin-vert--md"},M&&n.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:x},n.createElement("img",{src:M,alt:w})),n.createElement("div",{className:"avatar__intro"},w&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(i.Z,{href:x},w)),n.createElement("small",{className:"avatar__subtitle"},y)))))})(),n.createElement("div",{className:"markdown"},n.createElement(r.Zo,{components:o.Z},a)),(Z.length>0||b)&&n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",{[p]:v})},Z.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),Z.map((({label:e,permalink:t})=>n.createElement(i.Z,{key:t,className:"margin-horiz--sm",to:t},e)))),v&&L&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:L})),!v&&b&&n.createElement("div",{className:"col text--right"},n.createElement(i.Z,{to:h.permalink,"aria-label":`Read more about ${T}`},n.createElement("b",null,n.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},86146:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(67294),l=a(24973),r=a(22122),s=a(86010);const i="iconEdit_2_ui",c=({className:e,...t})=>n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i,e),"aria-hidden":"true"},t),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));function o({editUrl:e}){return n.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener"},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:(e,t,a)=>{"use strict";a.d(t,{r:()=>c,Z:()=>o});var n=a(67294),l=a(86010);const r=function(e,t,a){const[l,r]=(0,n.useState)(void 0);(0,n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){return e[e.indexOf(t)-1]??t}return t}return e[e.length-1]}();if(n){let a=0,s=!1;const i=document.getElementsByClassName(e);for(;a<i.length&&!s;){const e=i[a],{href:c}=e,o=decodeURIComponent(c.substring(c.indexOf("#")+1));n.id===o&&(l&&l.classList.remove(t),e.classList.add(t),r(e),s=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},s="tableOfContents_35-E",i="table-of-contents__link";function c({toc:e,isChild:t}){return e.length?n.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:i,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(c,{isChild:!0,toc:e.children}))))):null}const o=function({toc:e}){return r(i,"table-of-contents__link--active",100),n.createElement("div",{className:(0,l.Z)(s,"thin-scrollbar")},n.createElement(c,{toc:e}))}}}]);