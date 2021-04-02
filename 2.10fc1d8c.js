/*! For license information please see 2.10fc1d8c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{132:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(133),c=a(128),l=a(130),i=a(8),s="light",u="dark",d=function(e){return e===u?u:s},m=function(){return i.a.canUseDOM?d(document.documentElement.getAttribute("data-theme")):s},f=function(e){try{localStorage.setItem("theme",d(e))}catch(t){console.error(t)}},h=function(){var e=Object(c.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,a=(t=void 0===t?{}:t).colorMode,r=(a=void 0===a?{}:a).disableSwitch,o=void 0!==r&&r,l=Object(n.useState)(m),i=l[0],h=l[1],v=Object(n.useCallback)((function(){h(s),f(s)}),[]),b=Object(n.useCallback)((function(){h(u),f(u)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",d(i))}),[i]),Object(n.useEffect)((function(){if(!o)try{var e=localStorage.getItem("theme");null!==e&&h(d(e))}catch(t){console.error(t)}}),[h]),Object(n.useEffect)((function(){o||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;h(t?u:s)}))}),[]),{isDarkTheme:i===u,setLightTheme:v,setDarkTheme:b}},v=a(146);var b=function(e){var t=h(),a=t.isDarkTheme,n=t.setLightTheme,o=t.setDarkTheme;return(r.a.createElement(v.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:o}},e.children))},p=function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}},g=function(){var e=Object(c.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,a=(t=void 0===t?{}:t).announcementBar,r=(a=void 0===a?{}:a).id,o=void 0===r?"annoucement-bar":r,l=Object(n.useState)(!0),i=l[0],s=l[1];return Object(n.useEffect)((function(){if(o){var e=localStorage.getItem("docusaurus.announcement.id"),t=o!==e;localStorage.setItem("docusaurus.announcement.id",o),t&&localStorage.setItem("docusaurus.announcement.dismiss","false"),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&s(!1)}}),[]),{isAnnouncementBarClosed:i,closeAnnouncementBar:function(){localStorage.setItem("docusaurus.announcement.dismiss","true"),s(!0)}}},k=a(147);var E=function(e){var t=p(),a=t.tabGroupChoices,n=t.setTabGroupChoices,o=g(),c=o.isAnnouncementBarClosed,l=o.closeAnnouncementBar;return r.a.createElement(k.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n,isAnnouncementBarClosed:c,closeAnnouncementBar:l}},e.children)},O=a(148),j=a(51),y=a.n(j);var C=function(){var e=Object(c.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,a=(t=void 0===t?{}:t).announcementBar,n=void 0===a?{}:a,o=n.content,l=n.backgroundColor,i=n.textColor,s=Object(O.a)(),u=s.isAnnouncementBarClosed,d=s.closeAnnouncementBar;return!o||u?null:r.a.createElement("div",{className:y.a.announcementBar,style:{backgroundColor:l,color:i},role:"banner"},r.a.createElement("div",{className:y.a.announcementBarContent,dangerouslySetInnerHTML:{__html:o}}),r.a.createElement("button",{type:"button",className:y.a.announcementBarClose,onClick:d,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},w=a(1),_=a(131),N=a(129),S=a(22),T=a(135),L=a(149);function x(){return r.a.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.a.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var B=a(150);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(i){r=!0,o=i}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return I(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function D(){return"undefined"==typeof navigator?"Ctrl":/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)}var A=r.a.forwardRef((function(e,t){var a=P(Object(n.useState)((function(){return D()?"\u2318":"Ctrl"})),2),o=a[0],c=a[1];return Object(n.useEffect)((function(){D()&&c("\u2318")}),[]),r.a.createElement("button",M({type:"button",className:"DocSearch DocSearch-Button"},e,{ref:t}),r.a.createElement(B.a,null),r.a.createElement("span",{className:"DocSearch-Button-Placeholder"},"Search"),r.a.createElement("span",{className:"DocSearch-Button-Key"},"Ctrl"===o?r.a.createElement(x,null):o),r.a.createElement("span",{className:"DocSearch-Button-Key"},"K"))})),U=null;function V(e){var t=e.hit,a=e.children;return(r.a.createElement(N.a,{to:t.url},a))}function F(e){var t=e.state,a=e.onClose,n=Object(L.a)().generateSearchPageLink;return r.a.createElement(N.a,{to:n(t.query),onClick:a},"See all ",t.context.nbHits," results")}function R(e){var t=Object(c.a)().siteMetadata,i=Object(l.b)().withBaseUrl,s=Object(T.useHistory)(),u=Object(n.useState)(!1),d=u[0],m=u[1],f=Object(n.useCallback)((function(){return U?Promise.resolve():Promise.all([a.e(67).then(a.bind(null,194)),Promise.all([a.e(0),a.e(68)]).then(a.bind(null,193)),a.e(0).then(a.t.bind(null,126,7))]).then((function(e){var t=e[0].DocSearchModal;U=t}))}),[]),h=Object(n.useCallback)((function(){f().then((function(){m(!0)}))}),[f,m]),v=Object(n.useCallback)((function(){m(!1)}),[m]);return function(e){var t=e.isOpen,a=e.onOpen,n=e.onClose,o=e.onInput,c=e.searchButtonRef;r.a.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||"/"===e.key&&!t)&&(e.preventDefault(),t?n():a()),c&&c.current===document.activeElement&&o&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&o(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,a,n,o,c])}({isOpen:d,onOpen:h,onClose:v}),r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("link",{rel:"preconnect",href:"https://"+e.appId+"-dsn.algolia.net",crossOrigin:!0})),r.a.createElement(A,{onTouchStart:f,onFocus:f,onMouseOver:f,onClick:h,"aria-label":"Search"}),d&&Object(S.createPortal)(r.a.createElement(U,Object(w.a)({onClose:v,initialScrollY:window.scrollY,navigator:{navigate:function(e){var t=e.suggestionUrl;s.push(t)}},transformItems:function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:i(""+t.pathname+t.hash)})}))},hitComponent:V,resultsFooterComponent:function(e){return r.a.createElement(F,Object(w.a)({},e,{onClose:v}))},transformSearchClient:function(e){return e.addAlgoliaAgent("docusaurus",t.docusaurusVersion),e}},e)),document.body))}var X=function(){var e=Object(c.a)().siteConfig;return(r.a.createElement(R,e.themeConfig.algolia))},H=a(169),K=a.n(H),Y=a(52),q=a.n(Y),G=function(){return r.a.createElement("span",{className:Object(_.a)(q.a.toggle,q.a.moon)})},W=function(){return r.a.createElement("span",{className:Object(_.a)(q.a.toggle,q.a.sun)})},z=function(e){var t=Object(c.a)().isClient;return(r.a.createElement(K.a,Object(w.a)({disabled:!t,icons:{checked:r.a.createElement(G,null),unchecked:r.a.createElement(W,null)}},e)))},J=a(140);var Z=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},$=a(152),Q=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],o=Object(n.useState)(!1),c=o[0],l=o[1],i=Object(n.useState)(0),s=i[0],u=i[1],d=Object(n.useState)(0),m=d[0],f=d[1],h=Object(n.useCallback)((function(e){null!==e&&f(e.getBoundingClientRect().height)}),[]),v=Object(T.useLocation)(),b=Z(v.hash),p=b[0],g=b[1];return Object($.a)((function(t){var a=t.scrollY;if(e&&(0===a&&r(!0),!(a<m))){if(c)return l(!1),r(!1),void u(a);var n=document.documentElement.scrollHeight-m,o=window.innerHeight;s&&a>=s?r(!1):a+o<n&&r(!0),u(a)}}),[s,m]),Object(n.useEffect)((function(){e&&(r(!0),g(v.hash))}),[v]),Object(n.useEffect)((function(){e&&p&&l(!0)}),[p]),{navbarRef:h,isNavbarVisible:a}},ee=a(153),te=a(154),ae=a(155),ne=a(53),re=a.n(ne),oe=a(6);function ce(e){var t=e.activeBasePath,a=e.activeBaseRegex,n=e.to,o=e.href,c=e.label,i=e.activeClassName,s=void 0===i?"navbar__link--active":i,u=e.prependBaseUrlToHref,d=Object(oe.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),m=Object(l.a)(n),f=Object(l.a)(t),h=Object(l.a)(o,{forcePrependBaseUrl:!0});return r.a.createElement(N.a,Object(w.a)({},o?{target:"_blank",rel:"noopener noreferrer",href:u?h:o}:Object.assign({isNavLink:!0,activeClassName:s,to:m},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(f)}}:null),d),c)}function le(e){var t=e.items,a=e.position,n=e.className,o=Object(oe.a)(e,["items","position","className"]),c=function(e,t){return void 0===t&&(t=!1),Object(_.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.a.createElement("div",{className:Object(_.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},r.a.createElement(ce,Object(w.a)({className:c(n)},o,{onClick:o.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){function t(){e.target.parentNode.classList.toggle("dropdown--show")}"Enter"!==e.key||o.to||t(),"Tab"===e.key&&t()}}),o.label),r.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){var a=e.className,n=Object(oe.a)(e,["className"]);return(r.a.createElement("li",{key:t},r.a.createElement(ce,Object(w.a)({activeClassName:"dropdown__link--active",className:c(a,!0)},n))))})))):r.a.createElement(ce,Object(w.a)({className:c(n)},o))}function ie(e){var t=e.items,a=(e.position,e.className),n=Object(oe.a)(e,["items","position","className"]),o=function(e,t){return void 0===t&&(t=!1),Object(_.a)("menu__link",{"menu__link--sublist":t},e)};return t?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(ce,Object(w.a)({className:o(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,c=Object(oe.a)(e,["className"]);return(r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(ce,Object(w.a)({activeClassName:"menu__link--active",className:o(a)},c,{onClick:n.onClick}))))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(ce,Object(w.a)({className:o(a)},n)))}var se=function(e){var t=e.mobile,a=void 0!==t&&t,n=Object(oe.a)(e,["mobile"]),o=a?ie:le;return r.a.createElement(o,n)},ue=a(141);var de=function(e,t){return"next"===e.name?t:e.name},me=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};var fe={default:se,docsVersion:function(e){var t=e.label,a=e.to,n=e.docsPluginId,o=e.nextVersionLabel,c=Object(oe.a)(e,["label","to","docsPluginId","nextVersionLabel"]),l=Object(ue.useActiveVersion)(n),i=Object(ue.useLatestVersion)(n),s=null!=l?l:i,u=null!=t?t:function(e,t){return"next"===e.name?t:e.name}(s,o),d=null!=a?a:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(s).path;return r.a.createElement(se,Object(w.a)({},c,{label:u,to:d}))},docsVersionDropdown:function(e){var t,a=e.mobile,n=e.docsPluginId,o=e.nextVersionLabel,c=Object(oe.a)(e,["mobile","docsPluginId","nextVersionLabel"]),l=Object(ue.useActiveDocContext)(n),i=Object(ue.useVersions)(n),s=Object(ue.useLatestVersion)(n),u=i.map((function(e){var t=(null==l?void 0:l.alternateDocVersions[e.name])||me(e);return{isNavLink:!0,label:de(e,o),to:t.path,isActive:function(){return e===(null==l?void 0:l.activeVersion)}}})),d=null!==(t=l.activeVersion)&&void 0!==t?t:s,m=a?"Versions":de(d,o),f=a?void 0:me(d).path;return r.a.createElement(se,Object(w.a)({},c,{mobile:a,label:m,to:f,items:u}))}};function he(e){var t=e.type,a=Object(oe.a)(e,["type"]),n=function(e){void 0===e&&(e="default");var t=fe[e];if(!t)throw new Error("No NavbarItem component found for type="+e+".");return t}(t);return r.a.createElement(n,a)}var ve=function(){var e,t,a=Object(c.a)(),o=a.siteConfig.themeConfig,l=o.navbar,i=(l=void 0===l?{}:l).title,s=void 0===i?"":i,u=l.items,d=void 0===u?[]:u,m=l.hideOnScroll,f=void 0!==m&&m,h=o.colorMode,v=(h=void 0===h?{}:h).disableSwitch,b=void 0!==v&&v,p=a.isClient,g=Object(n.useState)(!1),k=g[0],E=g[1],O=Object(n.useState)(!1),j=O[0],y=O[1],C=Object(J.a)(),S=C.isDarkTheme,T=C.setLightTheme,L=C.setDarkTheme,x=Q(f),B=x.navbarRef,M=x.isNavbarVisible,P=Object(ae.a)(),I=P.logoLink,D=P.logoLinkProps,A=P.logoImageUrl,U=P.logoAlt;Object(ee.a)(k);var V=Object(n.useCallback)((function(){E(!0)}),[E]),F=Object(n.useCallback)((function(){E(!1)}),[E]),R=Object(n.useCallback)((function(e){return e.target.checked?L():T()}),[T,L]),H=Object(te.a)();Object(n.useEffect)((function(){H===te.b.desktop&&E(!1)}),[H]);var K=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:"right")})),rightItems:e.filter((function(e){var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:"right")}))}}(d),Y=K.leftItems,q=K.rightItems;return(r.a.createElement("nav",{ref:B,className:Object(_.a)("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":k},e[re.a.navbarHideable]=f,e[re.a.navbarHidden]=!M,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=d&&0!==d.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:V,onKeyDown:V},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(N.a,Object(w.a)({className:"navbar__brand",to:I},D),null!=A&&r.a.createElement("img",{key:p,className:"navbar__logo",src:A,alt:U}),null!=s&&r.a.createElement("strong",{className:Object(_.a)("navbar__title",(t={},t[re.a.hideLogoText]=j,t))},s)),Y.map((function(e,t){return r.a.createElement(he,Object(w.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},q.map((function(e,t){return r.a.createElement(he,Object(w.a)({},e,{key:t}))})),!b&&r.a.createElement(z,{className:re.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:S,onChange:R}),r.a.createElement(X,{handleSearchBarToggle:y,isSearchBarExpanded:j}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:F}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(N.a,Object(w.a)({className:"navbar__brand",onClick:F,to:I},D),null!=A&&r.a.createElement("img",{key:p,className:"navbar__logo",src:A,alt:U}),null!=s&&r.a.createElement("strong",{className:"navbar__title"},s)),!b&&k&&r.a.createElement(z,{"aria-label":"Dark mode toggle in sidebar",checked:S,onChange:R})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},d.map((function(e,t){return r.a.createElement(he,Object(w.a)({mobile:!0},e,{onClick:F,key:t}))}))))))))},be=a(54),pe=a.n(be);function ge(e){var t=e.to,a=e.href,n=e.label,o=e.prependBaseUrlToHref,c=Object(oe.a)(e,["to","href","label","prependBaseUrlToHref"]),i=Object(l.a)(t),s=Object(l.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(N.a,Object(w.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:o?s:a}:{to:i},c),n)}var ke=function(e){var t=e.url,a=e.alt;return(r.a.createElement("img",{className:"footer__logo",alt:a,src:t}))};var Ee=function(){var e=Object(c.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},o=n.copyright,i=n.links,s=void 0===i?[]:i,u=n.logo,d=void 0===u?{}:u,m=Object(l.a)(d.src);return a?r.a.createElement("footer",{className:Object(_.a)("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(ge,e))}))):null)}))),(d||o)&&r.a.createElement("div",{className:"text--center"},d&&d.src&&r.a.createElement("div",{className:"margin-bottom--sm"},d.href?r.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:pe.a.footerLogoLink},r.a.createElement(ke,{alt:d.alt,url:m})):r.a.createElement(ke,{alt:d.alt,url:m})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}})))):null};a(55);function Oe(e){var t=e.children;return(r.a.createElement(b,null,r.a.createElement(E,null,t)))}t.a=function(e){var t=Object(c.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,i=a.title,s=a.themeConfig.image,u=a.url,d=e.children,m=e.title,f=e.noFooter,h=e.description,v=e.image,b=e.keywords,p=e.permalink,g=e.version,k=m?m+" | "+i:i,E=v||s,O=Object(l.a)(E,{absolute:!0}),j=Object(l.a)(n);return r.a.createElement(Oe,null,r.a.createElement(o.a,null,r.a.createElement("html",{lang:"en"}),k&&r.a.createElement("title",null,k),k&&r.a.createElement("meta",{property:"og:title",content:k}),n&&r.a.createElement("link",{rel:"shortcut icon",href:j}),h&&r.a.createElement("meta",{name:"description",content:h}),h&&r.a.createElement("meta",{property:"og:description",content:h}),g&&r.a.createElement("meta",{name:"docsearch:version",content:g}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),E&&r.a.createElement("meta",{property:"og:image",content:O}),E&&r.a.createElement("meta",{property:"twitter:image",content:O}),E&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k}),p&&r.a.createElement("meta",{property:"og:url",content:u+p}),p&&r.a.createElement("link",{rel:"canonical",href:u+p}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(C,null),r.a.createElement(ve,null),r.a.createElement("div",{className:"main-wrapper"},d),!f&&r.a.createElement(Ee,null))}},140:function(e,t,a){"use strict";var n=a(0),r=a(146);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},146:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(void 0);t.a=r},147:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},148:function(e,t,a){"use strict";var n=a(0),r=a(147);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},149:function(e,t,a){"use strict";var n=a(135),r=a(8),o=a(128);t.a=function(){var e=Object(n.useHistory)(),t=Object(n.useLocation)(),a=Object(o.a)().siteConfig,c=(a=void 0===a?{}:a).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(a){var n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:function(e){return c+"search?q="+encodeURIComponent(e)}}}},150:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n);function o(){return r.a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},151:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===o)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},152:function(e,t,a){"use strict";var n=a(0),r=a(8),o=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(o()),r=a[0],c=a[1],l=function(){var t=o();c(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l,{passive:!0})}}),t),r}},153:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},154:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a(0),r={desktop:"desktop",mobile:"mobile"};t.a=function(){var e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}var a=Object(n.useState)(t),o=a[0],c=a[1];return Object(n.useEffect)((function(){if(e)return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)};function a(){c(t())}}),[]),o}},155:function(e,t,a){"use strict";var n=a(128),r=a(140),o=a(130),c=a(134);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig,a=(t=void 0===t?{}:t).navbar,l=(a=void 0===a?{}:a).logo,i=void 0===l?{}:l,s=Object(r.a)().isDarkTheme,u=Object(o.a)(i.href||"/"),d={};i.target?d={target:i.target}:Object(c.a)(u)||(d={rel:"noopener noreferrer",target:"_blank"});var m=i.srcDark&&s?i.srcDark:i.src;return{logoLink:u,logoLinkProps:d,logoImageUrl:Object(o.a)(m),logoAlt:i.alt}}},169:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(0),c=m(o),l=m(a(151)),i=m(a(9)),s=m(a(170)),u=m(a(171)),d=a(172);function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),o=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return c.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:c.default.createElement(s.default,null),unchecked:c.default.createElement(u.default,null)}},f.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},170:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),o=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("title",null,"switch-check"),o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},171:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),o=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("title",null,"switch-x"),o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},172:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);