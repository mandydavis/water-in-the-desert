(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var n=a(7),r=a.n(n),i=a(0),s=a.n(i),o=a(158),c=a(160),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return s.a.createElement(o.a,{location:this.props.location,title:e},s.a.createElement(c.a,{title:"404: Not Found"}),s.a.createElement("h1",null,"Not Found"),s.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(s.a.Component);t.default=l;var u="1097489062"},156:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},157:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(156);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(157);t.a=function(e){var t=e.title,a=e.children,n=r.a.useState(!1),s=n[0];n[1];return r.a.createElement("div",{className:"site-wrapper "+(s?"site-head-open":"")},r.a.createElement("header",{className:"site-head"},r.a.createElement("div",{className:"site-head-container"},r.a.createElement("div",{className:"site-head-center"},r.a.createElement(i.a,{className:"site-head-logo",to:"/"},t)),r.a.createElement("div",{className:"site-head-right"}))),r.a.createElement("main",{id:"site-main",className:"site-main"},r.a.createElement("div",{id:"swup",className:"transition-fade"},a)),r.a.createElement("footer",{className:"site-foot"},"© ",(new Date).getFullYear()," ",r.a.createElement(i.a,{to:"/"},t)," — Built with"," ",r.a.createElement("a",{href:"https://gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"Gatsby")))}},159:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(55),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},160:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),s=a(4),o=a.n(s),c=a(162),l=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Desert/Water",description:"A visual essay exploring the contrast between the Phoenix desert and the water that sustains it.",author:"Mandy Davis"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-43c40098e76174aa299e.js.map