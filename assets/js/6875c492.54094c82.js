(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[48610],{46165:(e,t,a)=>{"use strict";a.d(t,{Z:()=>E});var r=a(67294),n=a(86010),l=a(46254),s=a(36742);const c="sidebar_2ahu",o="sidebarItemTitle_2hhb",i="sidebarItemList_2xAf",m="sidebarItem_2UVv",u="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM";var g=a(24973);function h({sidebar:e}){return 0===e.items.length?null:r.createElement("nav",{className:(0,n.Z)(c,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},e.title),r.createElement("ul",{className:i},e.items.map((e=>r.createElement("li",{key:e.permalink,className:m},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:d},e.title))))))}var p=a(571);const E=function(e){const{sidebar:t,toc:a,children:s,...c}=e,o=t&&t.items.length>0;return r.createElement(l.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(h,{sidebar:t})),r.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&r.createElement("div",{className:"col col--2"},r.createElement(p.Z,{toc:a})))))}},94884:(e,t,a)=>{"use strict";a.d(t,{Z:()=>_});var r=a(67294),n=a(86010),l=a(3905),s=a(24973),c=a(36742),o=a(44996),i=a(941),m=a(60637),u=a(86146);const d="blogPostTitle_GeHD",g="blogPostData_291c",h="blogPostDetailsFull_3kfx";var p=a(87682);const E="image_1yU8";const f=function({author:e}){const{name:t,title:a,url:n,imageURL:l}=e;return r.createElement("div",{className:"avatar margin-bottom--sm"},l&&r.createElement(c.Z,{className:"avatar__photo-link avatar__photo",href:n},r.createElement("img",{className:E,src:l,alt:t})),t&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(c.Z,{href:n,itemProp:"url"},r.createElement("span",{itemProp:"name"},t))),a&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))},b="authorCol_1R69";function v({authors:e,assets:t}){return 0===e.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},e.map(((e,a)=>r.createElement("div",{className:(0,n.Z)("col col--6",b),key:a},r.createElement(f,{author:{...e,imageURL:t.authorsImageUrls[a]??e.imageURL}})))))}const _=function(e){const t=function(){const{selectMessage:e}=(0,i.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,o.C)(),{children:E,frontMatter:f,assets:b,metadata:_,truncated:N,isBlogPostPage:k=!1}=e,{date:Z,formattedDate:P,permalink:T,tags:w,readingTime:L,title:y,editUrl:C,authors:M}=_,U=b.image??f.image;return r.createElement("article",{className:k?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=k?"h1":"h2";return r.createElement("header",null,r.createElement(e,{className:d,itemProp:"headline"},k?y:r.createElement(c.Z,{itemProp:"url",to:T},y)),r.createElement("div",{className:(0,n.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:Z,itemProp:"datePublished"},P),void 0!==L&&r.createElement(r.Fragment,null," \xb7 ",t(L))),r.createElement(v,{authors:M,assets:b}))})(),U&&r.createElement("meta",{itemProp:"image",content:a(U,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:m.Z},E)),(w.length>0||N)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",{[h]:k})},w.length>0&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":!k})},r.createElement(p.Z,{tags:w})),k&&C&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:C})),!k&&N&&r.createElement("div",{className:"col col--3 text--right"},r.createElement(c.Z,{to:_.permalink,"aria-label":`Read more about ${y}`},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},69404:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var r=a(67294),n=a(36742),l=a(46165),s=a(94884),c=a(24973),o=a(941);function i(e){const{metadata:t,items:a,sidebar:i}=e,{allTagsPath:m,name:u,count:d}=t,g=function(){const{selectMessage:e}=(0,o.c2)();return t=>e(t,(0,c.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),h=(0,c.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:g(d),tagName:u});return r.createElement(l.Z,{title:h,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:i},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,h),r.createElement(n.Z,{href:m},r.createElement(c.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((({content:e})=>r.createElement(s.Z,{key:e.metadata.permalink,frontMatter:e.frontMatter,assets:e.assets,metadata:e.metadata,truncated:!0},r.createElement(e,null)))))}},86146:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var r=a(67294),n=a(24973),l=a(22122),s=a(86010);const c="iconEdit_2_ui",o=({className:e,...t})=>r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(c,e),"aria-hidden":"true"},t),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));var i=a(941);function m({editUrl:e}){return r.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:i.kM.common.editThisPage},r.createElement(o,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:(e,t,a)=>{"use strict";a.d(t,{r:()=>g,Z:()=>h});var r=a(67294),n=a(86010),l=a(941);function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c({anchorTopOffset:e}){const t=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=t.find((t=>s(t).top>=e));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:t[t.indexOf(a)-1]??null}return t[t.length-1]}function o(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.LU)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const i=function(e){const t=(0,r.useRef)(void 0),a=o();(0,r.useEffect)((()=>{const{linkClassName:r,linkActiveClassName:n}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=c({anchorTopOffset:a.current}),s=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){if(a){var r;t.current&&t.current!==e&&(null==(r=t.current)||r.classList.remove(n)),e.classList.add(n),t.current=e}else e.classList.remove(n)}(e,e===s)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_35-E",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function g({toc:e,isChild:t}){return e.length?r.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:u,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(g,{isChild:!0,toc:e.children}))))):null}const h=function({toc:e}){return i(d),r.createElement("div",{className:(0,n.Z)(m,"thin-scrollbar")},r.createElement(g,{toc:e}))}},37211:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(67294),n=a(86010),l=a(36742);const s="tag_1Okp",c="tagRegular_3MiF",o="tagWithCount_1HU1";const i=function(e){const{permalink:t,name:a,count:i}=e;return r.createElement(l.Z,{href:t,className:(0,n.Z)(s,{[c]:!i,[o]:i})},a,i&&r.createElement("span",null,i))}},87682:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(67294),n=a(86010),l=a(24973),s=a(37211);const c="tags_2ga9",o="tag_11ep";function i({tags:e}){return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(c,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>r.createElement("li",{key:t,className:o},r.createElement(s.Z,{name:e,permalink:t}))))))}}}]);