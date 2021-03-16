(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{154:function(A,e,a){"use strict";a.r(e);a(34);var t=a(169),i=a(0),n=a.n(i),r=a(156),s=a(157),d=a(159),o=function(A){return n.a.createElement("article",{className:"post-card "+(A.count%3==0&&"post-card-large")+" "+A.postClass+" "+(A.node.frontmatter.thumbnail?"with-image":"no-image"),style:A.node.frontmatter.thumbnail&&{backgroundImage:"url("+A.node.frontmatter.thumbnail.childImageSharp.fluid.src+")"}},n.a.createElement(r.a,{to:A.node.fields.slug,className:"post-card-link"},n.a.createElement("div",{className:"post-card-content"},n.a.createElement("h2",{className:"post-card-title"},A.node.frontmatter.title||A.node.fields.slug))))},c=(a(151),a(152),function(A,e){var a=A.data,t=a.site.siteMetadata.title,i=a.allMarkdownRemark.edges,r=0;return n.a.createElement(s.a,{title:t},n.a.createElement(d.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),a.site.siteMetadata.description&&n.a.createElement("header",{className:"page-head"},n.a.createElement("h2",{className:"page-head-title"},a.site.siteMetadata.description)),n.a.createElement("div",{className:"post-feed"},i.map(function(A){var e=A.node;return r++,n.a.createElement(o,{key:e.fields.slug,count:r,node:e,postClass:"post"})})))});e.default=function(A){return n.a.createElement(r.b,{query:"3399224544",render:function(e){return n.a.createElement(c,Object.assign({location:A.location,props:!0,data:e},A))},data:t})}},155:function(A,e,a){var t;A.exports=(t=a(158))&&t.default||t},156:function(A,e,a){"use strict";a.d(e,"b",function(){return c});var t=a(0),i=a.n(t),n=a(4),r=a.n(n),s=a(33),d=a.n(s);a.d(e,"a",function(){return d.a});a(155);var o=i.a.createContext({}),c=function(A){return i.a.createElement(o.Consumer,null,function(e){return A.data||e[A.query]&&e[A.query].data?(A.render||A.children)(A.data?A.data.data:e[A.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},157:function(A,e,a){"use strict";var t=a(0),i=a.n(t),n=a(156);e.a=function(A){var e=A.title,a=A.children,t=i.a.useState(!1),r=t[0];t[1];return i.a.createElement("div",{className:"site-wrapper "+(r?"site-head-open":"")},i.a.createElement("header",{className:"site-head"},i.a.createElement("div",{className:"site-head-container"},i.a.createElement("div",{className:"site-head-center"},i.a.createElement(n.a,{className:"site-head-logo",to:"/"},e)),i.a.createElement("div",{className:"site-head-right"}))),i.a.createElement("main",{id:"site-main",className:"site-main"},i.a.createElement("div",{id:"swup",className:"transition-fade"},a)),i.a.createElement("footer",{className:"site-foot"},"© ",(new Date).getFullYear()," ",i.a.createElement(n.a,{to:"/"},e)," — Built with"," ",i.a.createElement("a",{href:"https://gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"Gatsby")))}},158:function(A,e,a){"use strict";a.r(e);a(34);var t=a(0),i=a.n(t),n=a(4),r=a.n(n),s=a(55),d=a(2),o=function(A){var e=A.location,a=d.default.getResourcesForPathnameSync(e.pathname);return a?i.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json)):null};o.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=o},159:function(A,e,a){"use strict";var t=a(160),i=a(0),n=a.n(i),r=a(4),s=a.n(r),d=a(161),o=a.n(d);function c(A){var e=A.description,a=A.lang,i=A.meta,r=A.keywords,s=A.title,d=t.data.site,c=e||d.siteMetadata.description;return n.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+d.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(i)})}c.defaultProps={lang:"en",meta:[],keywords:[],description:""},c.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=c},160:function(A){A.exports={data:{site:{siteMetadata:{title:"Desert/Water",description:"A visual essay exploring the contrast between the Phoenix desert and the water that sustains it.",author:"Mandy Davis"}}}}},169:function(A){A.exports={data:{site:{siteMetadata:{title:"Desert/Water",description:"A visual essay exploring the contrast between the Phoenix desert and the water that sustains it."}},allMarkdownRemark:{edges:[{node:{excerpt:"{A view of the desert landscaping in my front yard in suburban Phoenix}This visual essay is meant to be an exploration of water in Arizona…",fields:{slug:"/preface/"},frontmatter:{date:"May 08, 2019",title:"Preface",description:null,thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAXYYvCjsFf/EABsQAQACAgMAAAAAAAAAAAAAAAEAAgMREhMh/9oACAEBAAEFAu7VK5PXJdebKK2An//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABsQAAEEAwAAAAAAAAAAAAAAAAABESExAhAi/9oACAEBAAY/AusVYh0aidWUf//EABsQAQACAgMAAAAAAAAAAAAAAAEAESFBMWFx/9oACAEBAAE/IaOYjeLjclVlMtXyMwlUXcq5v2s//9oADAMBAAIAAwAAABDcD//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/EIf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPxCI/8QAGxABAAIDAQEAAAAAAAAAAAAAAQARIUFhMVH/2gAIAQEAAT8QRNAgYuI7JMLe/Ds8M7tBCBSFcl6pcg18mzF5QrP/2Q==",aspectRatio:1.5318690783807063,src:"/water-in-the-desert/static/a6f81b18c381144ba3ff1f19714d9966/10fb1/front_yard.jpg",srcSet:"/water-in-the-desert/static/a6f81b18c381144ba3ff1f19714d9966/467b3/front_yard.jpg 340w,\n/water-in-the-desert/static/a6f81b18c381144ba3ff1f19714d9966/e1ddd/front_yard.jpg 680w,\n/water-in-the-desert/static/a6f81b18c381144ba3ff1f19714d9966/10fb1/front_yard.jpg 1360w,\n/water-in-the-desert/static/a6f81b18c381144ba3ff1f19714d9966/fda29/front_yard.jpg 2040w,\n/water-in-the-desert/static/a6f81b18c381144ba3ff1f19714d9966/823a4/front_yard.jpg 2720w,\n/water-in-the-desert/static/a6f81b18c381144ba3ff1f19714d9966/f0c5a/front_yard.jpg 3557w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"{Google Maps screenshot of a few streets near my house in which every backyard has a pool}PoolsEveryone in my immediate neighborhood has a…",fields:{slug:"/pools-ponds-lawns/"},frontmatter:{date:"May 07, 2019",title:"Ch 1: Pools, Ponds, Lawns",description:null,thumbnail:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABcSAAAXEgFnn9JSAAAC0UlEQVQozx2TWXMaRxSF59/kMVVOWU7iKHIkS8ISm1hmGBiY0cAwLAOYxSxilUBCCAzasIPshLhSSVx+SCWP+XVf2n7oqn64de75Tp+WinaID/dd5KgPJbDL6qLMelIhk4hiqDK2qVG0YmQTCvmkymnDwkzImGqIhqOwuKxy6HdRzGiYihspn/KymjdJFnLcTpusplVOShbJaJjT2jGDeg73wS4xNUAk5P0iVM5aaEqIH7Y22Nl5zLtpg27dJODf/izo4+28TciIYB97+OWuQzTsR4u5+e+fO27GNUYtm04lzvurCrfDIsuLKp2SzqRbxTI0hvUM836Wjw9DpNlZkXE/w1HMQ7+R5M2sJTDj+FUvlqMT0MK88P5IS7idzU4Y9BzKAvXv9ZC7cYWzZg4jFqX9MsVlz0YqZMMszou4Qi6WAn06KuOkDer1PDlLYWv7Wzb3vsHMHxPUgqjiuMIHxCyVm9cdbi+KBAM76DGZzWcbSCnTy8OijS/iZS42/rbsk9SjLEYlfhf3j6tTlldVxgK1/crk15sW/a6Dk42z7XqKGnVxd1khHvNRclJIjbLO2YlNSH6BnVM57+axzAStsiUGDLqtgkCMEzf8ZNICrZrij2WXcdfm0LNJWPMLmiyfHgasr0+QmiLszw4C8h5XA1s8QgVF8RHXFEr5NEf+Q5IieF2TyadNMqljscDCsRU+vR+SsiM83f2OWinK9LyCNBLurs9fsufZotguCRdB5oMCq1md9W2bZjnxJZL5IMfPonOVnC7EErh9+yICg7/uOzhFHdWQ0UX20qRfYDmp8fXjr3i0s4lTyzBoG1xO2hipAJrmoVM1+bAa0R3U+PPdiGEvTVz0NKEdcd3Lidkek4um6K2JVM7GkCMe9o+eIxthghE33uA+HoHqF81/9NMGT/a+JyMwM6U0I7HorJ0mK/LcP3jOvfhZC2Ho9cDh3/WY/wHZbPDkoEWATAAAAABJRU5ErkJggg==",aspectRatio:1.7795555555555556,src:"/water-in-the-desert/static/5368dc3c19f765dcca3ea70082d4414e/41d74/birds_eye_pools.png",srcSet:"/water-in-the-desert/static/5368dc3c19f765dcca3ea70082d4414e/fa754/birds_eye_pools.png 340w,\n/water-in-the-desert/static/5368dc3c19f765dcca3ea70082d4414e/1bf7a/birds_eye_pools.png 680w,\n/water-in-the-desert/static/5368dc3c19f765dcca3ea70082d4414e/41d74/birds_eye_pools.png 1360w,\n/water-in-the-desert/static/5368dc3c19f765dcca3ea70082d4414e/1e4b5/birds_eye_pools.png 2002w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"{A topographic map of Phoenix, 1914, showing the Salt River, the Gila River, and multiple canals}{Havasupai Falls}(User:Moondigger, CC BY-SA…",fields:{slug:"/back-in-time/"},frontmatter:{date:"May 06, 2019",title:"Ch 2: Back in Time",description:"All the way back to when Arizona was an ocean",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAYABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDBP/EABYBAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAB7oqMr0BMBsD/xAAZEAEAAgMAAAAAAAAAAAAAAAAAARECEDH/2gAIAQEAAQUCWjVwx4pD/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAFBABAAAAAAAAAAAAAAAAAAAAMP/aAAgBAQAGPwIf/8QAGRABAQADAQAAAAAAAAAAAAAAAQARITEQ/9oACAEBAAE/IXso5ltp7PgOVdMLOUjq/9oADAMBAAIAAwAAABAzD77/xAAWEQEBAQAAAAAAAAAAAAAAAAAQESH/2gAIAQMBAT8QhdP/xAAXEQEBAQEAAAAAAAAAAAAAAAABABAh/9oACAECAQE/EMThBf/EABsQAAMBAQEBAQAAAAAAAAAAAAABETEhQWFx/9oACAEBAAE/EHdRvRwklnq8Eismq/RL7+DWpOiMFtM0oMlOU10//9k=",aspectRatio:.8216697360343769,src:"/water-in-the-desert/static/95ce5e6672da0083a9901372c92a43fc/10fb1/topo-az-phoenix-1914.jpg",srcSet:"/water-in-the-desert/static/95ce5e6672da0083a9901372c92a43fc/467b3/topo-az-phoenix-1914.jpg 340w,\n/water-in-the-desert/static/95ce5e6672da0083a9901372c92a43fc/e1ddd/topo-az-phoenix-1914.jpg 680w,\n/water-in-the-desert/static/95ce5e6672da0083a9901372c92a43fc/10fb1/topo-az-phoenix-1914.jpg 1360w,\n/water-in-the-desert/static/95ce5e6672da0083a9901372c92a43fc/fda29/topo-az-phoenix-1914.jpg 2040w,\n/water-in-the-desert/static/95ce5e6672da0083a9901372c92a43fc/01c67/topo-az-phoenix-1914.jpg 2677w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"{A Central Arizona Project canal transporting water from the Colorado River elsewhere in Arizona}(This photograph is in the public domain…",fields:{slug:"/sources-canals-dams/"},frontmatter:{date:"May 05, 2019",title:"Ch 3: Sources, Canals, Dams",description:null,thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAZABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAZulI0wWFeeuNUEI/8QAGhAAAQUBAAAAAAAAAAAAAAAAAQACEBFBEv/aAAgBAQABBQLooOJVuWzcaY//xAAXEQADAQAAAAAAAAAAAAAAAAAAARIQ/9oACAEDAQE/AZJW/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAASABD/2gAIAQIBAT8Bc9//xAAaEAACAgMAAAAAAAAAAAAAAAAAEAExICFB/9oACAEBAAY/ArOl47cL/8QAHhAAAgEDBQAAAAAAAAAAAAAAAAExECFhEUFRcZH/2gAIAQEAAT8hzDek7M30QiNaIsfBwObCqf/aAAwDAQACAAMAAAAQJMkD/8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQMBAT8QMX//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAECAQE/EKKHn//EAB4QAAICAgIDAAAAAAAAAAAAAAERACExcVFhEEHB/9oACAEBAAE/EAO26uCqbhUA0ZohsRvkeCJZtN8iIM121OM9giyZYmK6uYtzLc/PH//Z",aspectRatio:.8,src:"/water-in-the-desert/static/6d40b6fe3abb45cd810a36dade242103/c3847/central_arizona_project_canal.jpg",srcSet:"/water-in-the-desert/static/6d40b6fe3abb45cd810a36dade242103/467b3/central_arizona_project_canal.jpg 340w,\n/water-in-the-desert/static/6d40b6fe3abb45cd810a36dade242103/c3847/central_arizona_project_canal.jpg 664w",sizes:"(max-width: 664px) 100vw, 664px"}}}}}},{node:{excerpt:"I took all of these videos in the immediate proximity of my house on January 20th, 2017 on a very rainy desert day. Note: This page will…",fields:{slug:"/interlude/"},frontmatter:{date:"May 04, 2019",title:"Interlude",description:"(a teenager's fascination caught on camera)",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAYBAgT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAB3XWZrNmFoP/EABkQAQACAwAAAAAAAAAAAAAAAAAREgECIf/aAAgBAQABBQK+riEpWy//xAAWEQEBAQAAAAAAAAAAAAAAAAAAERL/2gAIAQMBAT8Byj//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEv/aAAgBAgEBPwGlP//EABcQAAMBAAAAAAAAAAAAAAAAAAABMSD/2gAIAQEABj8CpVis/8QAHBAAAgAHAAAAAAAAAAAAAAAAAAEQETFBcZHR/9oACAEBAAE/IUy0TfsZqLKpsP/aAAwDAQACAAMAAAAQe+//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPxCj/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAFx/9oACAECAQE/ELDT/8QAGhABAQEBAQEBAAAAAAAAAAAAAREAMSFh0f/aAAgBAQABPxCQHrz3uB8vyIul/Q0HXUNrcCgj4t//2Q==",aspectRatio:1.3333333333333333,src:"/water-in-the-desert/static/2b7ee71d0dce2178e3d80ce169678fd6/10fb1/cloud_thumbnail.jpg",srcSet:"/water-in-the-desert/static/2b7ee71d0dce2178e3d80ce169678fd6/467b3/cloud_thumbnail.jpg 340w,\n/water-in-the-desert/static/2b7ee71d0dce2178e3d80ce169678fd6/e1ddd/cloud_thumbnail.jpg 680w,\n/water-in-the-desert/static/2b7ee71d0dce2178e3d80ce169678fd6/10fb1/cloud_thumbnail.jpg 1360w,\n/water-in-the-desert/static/2b7ee71d0dce2178e3d80ce169678fd6/fda29/cloud_thumbnail.jpg 2040w,\n/water-in-the-desert/static/2b7ee71d0dce2178e3d80ce169678fd6/823a4/cloud_thumbnail.jpg 2720w,\n/water-in-the-desert/static/2b7ee71d0dce2178e3d80ce169678fd6/f4afe/cloud_thumbnail.jpg 4000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"{Aerial view of the Gila River running through the Gila River Indian Reservation. Upon closer examination, canals are also visible…",fields:{slug:"/gila-river/"},frontmatter:{date:"May 03, 2019",title:"Ch 4: Gila River Case Study",description:null,thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAiABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAMBBAUC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgED/9oADAMBAAIQAxAAAAHotKdPQc5ZjV9Sy0u1ilJgURoP/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAECERIQIf/aAAgBAQABBQKy0biaNlEmN+pjkM0Pv//EABcRAAMBAAAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8Bwwcc/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPwHTUKKf/8QAGBAAAwEBAAAAAAAAAAAAAAAAECAxASH/2gAIAQEABj8CPNFaJ//EABwQAAICAwEBAAAAAAAAAAAAAAABETEhQWGh0f/aAAgBAQABPyGI1XB0Q3S8BaszoJfDKMHwYXkUbRlBbHZ//9oADAMBAAIAAwAAABAH/jyIH//EABgRAAIDAAAAAAAAAAAAAAAAAAABESBR/9oACAEDAQE/EGpPBaP/xAAYEQADAQEAAAAAAAAAAAAAAAAAARAxYf/aAAgBAgEBPxBHsPMT/8QAHhABAAICAwADAAAAAAAAAAAAAQARITFBUWEQkeH/2gAIAQEAAT8QpMhB7oPWH7MQqVpXEoVMX9RSvC9TZFuE4i59jVRMgUh13kPJdRMOF6ZSpbt+cabT/9k=",aspectRatio:.582395498392283,src:"/water-in-the-desert/static/914455f0dcb449dde08fb040771d38e8/10fb1/Gila_River_at_Komatke_Arizona.jpg",srcSet:"/water-in-the-desert/static/914455f0dcb449dde08fb040771d38e8/467b3/Gila_River_at_Komatke_Arizona.jpg 340w,\n/water-in-the-desert/static/914455f0dcb449dde08fb040771d38e8/e1ddd/Gila_River_at_Komatke_Arizona.jpg 680w,\n/water-in-the-desert/static/914455f0dcb449dde08fb040771d38e8/10fb1/Gila_River_at_Komatke_Arizona.jpg 1360w,\n/water-in-the-desert/static/914455f0dcb449dde08fb040771d38e8/0e8f2/Gila_River_at_Komatke_Arizona.jpg 1449w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"{The epitome of the desert/water contrast: snow-ladden cacti on the way from Phoenix to Flagstaff, AZ}Going through my personal archives…",fields:{slug:"/epilogue/"},frontmatter:{date:"May 02, 2019",title:"Epilogue",description:null,thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAB/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAABUwbazWi4f//EABoQAAICAwAAAAAAAAAAAAAAAAABAgMQERP/2gAIAQEAAQUCy7GK177SP//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/AYf/xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwGn/8QAFhABAQEAAAAAAAAAAAAAAAAAEDEA/9oACAEBAAY/Am6n/8QAGxABAQABBQAAAAAAAAAAAAAAAQARIUFhgaH/2gAIAQEAAT8hGWzbh2hD7uby/9oADAMBAAIAAwAAABB0z//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/ECP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8QNj//xAAaEAADAQADAAAAAAAAAAAAAAAAASERMVGR/9oACAEBAAE/ENkYodDSrucui9f02j0ceT//2Q==",aspectRatio:1.3333333333333333,src:"/water-in-the-desert/static/9af97112484a86683a11e92a21bad7de/10fb1/epilogue_thumbnail.jpg",srcSet:"/water-in-the-desert/static/9af97112484a86683a11e92a21bad7de/467b3/epilogue_thumbnail.jpg 340w,\n/water-in-the-desert/static/9af97112484a86683a11e92a21bad7de/e1ddd/epilogue_thumbnail.jpg 680w,\n/water-in-the-desert/static/9af97112484a86683a11e92a21bad7de/10fb1/epilogue_thumbnail.jpg 1360w,\n/water-in-the-desert/static/9af97112484a86683a11e92a21bad7de/fda29/epilogue_thumbnail.jpg 2040w,\n/water-in-the-desert/static/9af97112484a86683a11e92a21bad7de/823a4/epilogue_thumbnail.jpg 2720w,\n/water-in-the-desert/static/9af97112484a86683a11e92a21bad7de/a8d59/epilogue_thumbnail.jpg 4032w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-09513dd2d7d61c04f4a8.js.map