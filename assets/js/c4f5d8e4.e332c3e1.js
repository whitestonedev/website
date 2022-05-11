/*! For license information please see c4f5d8e4.e332c3e1.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[195,475],{9294:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=n(7462),r=n(7294),l=n(4184),c=n.n(l),i=n(8277),o=n(9960),m=n(2263),s=n(4996),u=n(9609),d={heroBanner:"heroBanner_qdFl",heroLogo:"heroLogo_U6bI",heroText:"heroText_ryRM",buttons:"buttons_AeoN",button:"button_JGCe",features:"features_cAfv",featuresTitle:"featuresTitle_MgoA",featureImage:"featureImage_wMIZ",homeSubtitle:"homeSubtitle_B4OL"},p=[{title:"Community",imageUrl:"img/undraw/undraw_social.svg",description:r.createElement("ul",null,r.createElement("li",null,"Created for devs to devs."),r.createElement("li",null,"Share development experiences."),r.createElement("li",null,"In a Open Source community."))},{title:"Soft Skill",imageUrl:"img/undraw/undraw_code_review_re_woeb.svg",description:r.createElement("ul",null,r.createElement("li",null,"Community to share topics such as:"),r.createElement("li",null,"Microservices / APIs / Documentation"),r.createElement("li",null,"Full Stack / Back/Front-end Web development"),r.createElement("li",null,"Internet of Things / Cryptocurrencies / Blockchain"))},{title:"Hard Skill",imageUrl:"img/undraw/undraw_programmer_re_owql.svg",description:r.createElement("ul",null,r.createElement("li",null,"Community to share programming languages like:"),r.createElement("li",null,"Go lang / Python / Ruby / JavaScript"),r.createElement("li",null,"Share your code repository with other devs"))}];function E(e){var t=e.imageUrl,n=e.title,a=e.description,l=(0,s.Z)(t);return r.createElement("div",{className:c()("col col--4",d.feature)},l&&r.createElement("div",{className:"text--center"},r.createElement("div",{className:"feature-image-wrapper"},r.createElement("img",{className:d.featureImage,src:l,alt:n}))),r.createElement("h3",{className:"text--center"},n),r.createElement("div",null,a))}var g=function(){var e=(0,m.Z)().siteConfig,t=void 0===e?{}:e;return(0,r.useEffect)((function(){window.fetch("https://api.github.com/repos/whitestonedev/website").then((function(e){return e.json()})).then((function(e){var t=document.getElementsByClassName("navbar__item navbar__link"),n=document.createElement("span");n.innerHTML=e.stargazers_count,n.className="github-counter",t[3].appendChild(n)}))}),[]),r.createElement(i.Z,{description:t.tagline},r.createElement(u.default,null),r.createElement("div",{className:"home-wrapper"},r.createElement("header",{className:c()("hero",d.heroBanner)},r.createElement("div",{className:"container"},r.createElement("div",{className:"hero-inner"},r.createElement("img",{src:(0,s.Z)("/img/logo.png"),alt:"whiteStone_dev logo",className:d.heroLogo}),r.createElement("div",{className:d.heroText},r.createElement("h1",{className:"hero__title"},"white",r.createElement("b",null,"Stone"),"_",r.createElement("i",null,"dev")),r.createElement("p",{className:"hero__subtitle"},t.tagline)),r.createElement("div",{className:d.buttons},r.createElement("a",{className:c()("button button--outline button--secondary button--lg rounded-pill",d.button),href:"https://join.slack.com/t/whitestonedev/shared_invite/zt-18gcudbpg-SeaLx27z4S4jvIZAYmxIAA",target:"_blank"},"Join slack"),r.createElement(o.Z,{className:c()("button button--primary button--lg rounded-pill",d.button),to:(0,s.Z)("/blog")},"About us")))),r.createElement("div",{className:"hero-wave"},r.createElement("div",{className:"hero-wave-inner"}))),r.createElement("main",{className:"home-main"},r.createElement("section",{className:"section-features "+d.features},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col"},r.createElement("h2",{className:d.featuresTitle},r.createElement("span",null,"Open Source.")," ",r.createElement("span",null,"Full Stack.")," ",r.createElement("span",null,"Geek Tips.")," ",r.createElement("span",null,"Community.")))),r.createElement("div",{className:"row"},p.map((function(e,t){return r.createElement(E,(0,a.Z)({key:t},e))}))))),r.createElement("section",null,r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col"},r.createElement("p",{className:"text--center"},r.createElement("a",{href:"https://github.com/whitestonedev",className:"button button--primary button--outline rounded-pill button--lg"},"GitHub Community")))))))))}},9609:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(5742),l=n(2263);t.default=function(){var e=(0,l.Z)().siteConfig,t=void 0===e?{}:e,n=t.title,c=t.tagline,i=t.url;return a.createElement(r.Z,null,a.createElement("meta",{charSet:"utf-8"}),a.createElement("link",{rel:"canonical",href:i}),a.createElement("meta",{property:"og:title",content:n}),a.createElement("meta",{property:"og:description",content:c}),a.createElement("meta",{property:"og:image",content:i+"/img/undraw/social-media-card.png"}),a.createElement("meta",{property:"og:url",content:i}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:n}),a.createElement("meta",{name:"twitter:description",content:c}),a.createElement("meta",{name:"twitter:image",content:i+"/img/undraw/social-media-card.png"}))}},4184:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var c=r.apply(null,n);c&&e.push(c)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var i in n)a.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);