(this["webpackJsonpgame-central"]=this["webpackJsonpgame-central"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(19),r=c.n(s),i=(c(25),c.p+"static/media/background.b734dc21.jpeg"),o=(c(26),c(10)),u=c(0),l=function(){return Object(u.jsxs)("aside",{className:"sidebar",children:[Object(u.jsx)("p",{className:"logo-box",children:"GC"}),Object(u.jsx)("h5",{className:"trademark",children:"Game Central \xa9"}),Object(u.jsxs)("ul",{className:"link-list",children:[Object(u.jsx)(o.b,{id:"home-link",className:"link-link",to:"/",children:"Home"}),Object(u.jsx)(o.b,{id:"products-link",className:"link-link",to:"/products",children:"Productos"}),Object(u.jsx)(o.b,{id:"users-link",className:"link-link",to:"/users",children:"Usuarios"})]}),Object(u.jsx)("ul",{id:"back-to-web-page",className:"link-list",children:Object(u.jsx)("a",{className:"link-link",href:"https://g6-game-central.herokuapp.com/",target:"_blank",rel:"noreferrer",children:"Volver"})})]})},j=c(6),b=c.n(j),h=c(17),f=c(9),O=c(4),d=(c(34),c(35),c(36),function(e){return Object(u.jsxs)("article",{className:"count-item",children:[Object(u.jsx)("p",{className:"count-item-title",children:e.title}),Object(u.jsx)("p",{className:"count-item-number",children:e.number})]})}),m=function(){return Object(u.jsx)("p",{children:"Cargando..."})},p=function(){var e=window.location.origin;return e.includes("localhost")?"http://localhost:3001":"https://g6-game-central.herokuapp.com/"},x=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){var e=p();fetch("".concat(e,"/api")).then((function(e){return e.json()})).then((function(e){a([{item:"JUEGOS",total:e.totals.gameCount},{item:"CATEGOR\xcdAS",total:e.totals.categoryCount},{item:"PLATAFORMAS",total:e.totals.platformCount},{item:"USUARIOS",total:e.totals.userCount},{item:"VENTAS",total:e.totals.saleCount}])}),[]).catch((function(e){return console.log(e)}))}),[]),Object(u.jsxs)("section",{className:"main-count-panel",children:[0===c.length&&Object(u.jsx)(m,{}),c.length>0&&c.map((function(e,t){return Object(u.jsx)(d,{title:e.item,number:e.total},e+t)}))]})},g=(c(37),function(e){return Object(n.useEffect)((function(){for(var e=document.querySelectorAll(".panel"),t=0;t<e.length;t++)"header"!==e[t].firstChild.localName?e[t].classList.add("panel-thinner"):e[t].classList.add("panel-wide")}),[]),Object(u.jsxs)("section",{className:"panel",children:[e.children,Object(u.jsxs)("article",{className:"panel-article",children:[Object(u.jsx)("p",{className:"panel-title",children:e.title}),Object(u.jsx)("div",{className:"panel-img",children:Object(u.jsx)("a",{target:"_blank",href:e.img,rel:"noreferrer",children:Object(u.jsx)("img",{src:e.img,alt:"img".concat(e.title)})})})]})]})}),N=(c(38),function(e){return Object(u.jsxs)("div",{className:"article-one-fourth",children:[Object(u.jsx)("p",{className:"count-title",children:e.title}),Object(u.jsx)("p",{className:"count-number",children:e.number})]})}),k=function(){var e=p();Object(n.useEffect)((function(){document.querySelector("#home-link").classList.add("active-link")}),[]);var t=Object(n.useState)([]),c=Object(O.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)([]),i=Object(O.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)([]),d=Object(O.a)(j,2),k=d[0],v=d[1],S=Object(n.useState)([]),y=Object(O.a)(S,2),E=y[0],C=y[1],w=Object(n.useState)([]),A=Object(O.a)(w,2),q=A[0],L=A[1];return Object(n.useEffect)((function(){(function(){var t=Object(f.a)(b.a.mark((function t(){var c,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e,"/api/users/last")).then((function(e){return e.json()}));case 2:return c=t.sent,t.next=5,fetch("".concat(e,"/api/products/last")).then((function(e){return e.json()}));case 5:n=t.sent;try{s([Object(h.a)({},c.user),Object(h.a)({},n.game)])}catch(a){console.log(a)}case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(n.useEffect)((function(){fetch("".concat(e,"/api/products")).then((function(e){return e.json()})).then((function(e){l(e.countByCategory),v(e.countByPlatform),C(e.bestBuyers),L(e.bestSellers)})).catch((function(e){return console.log(e)}))}),[e]),Object(n.useEffect)((function(){var e=document.querySelector("#home-link");return function(){e.classList.remove("active-link")}}),[]),Object(u.jsxs)("main",{className:"main-main",children:[Object(u.jsx)(x,{}),Object(u.jsxs)("div",{className:"panel-container",children:[0===o.length&&Object(u.jsx)(m,{}),o&&Object(u.jsxs)("section",{className:"count-panel",children:[Object(u.jsxs)("header",{className:"count-header",children:[Object(u.jsx)("p",{children:"Ocurrencias"}),Object(u.jsx)("p",{children:"CATEGOR\xcdAS"})]}),Object(u.jsx)("article",{className:"count-article",children:o.map((function(e,t){return Object(u.jsx)(N,{title:e.title,number:e.quantity},e.title+t)}))})]}),0===k.length&&Object(u.jsx)(m,{}),k&&Object(u.jsxs)("section",{className:"count-panel",children:[Object(u.jsxs)("header",{className:"count-header",children:[Object(u.jsx)("p",{children:"Ocurrencias"}),Object(u.jsx)("p",{children:"PLATAFORMAS"})]}),Object(u.jsx)("article",{className:"count-article",children:k.map((function(e,t){return Object(u.jsx)(N,{title:e.title,number:e.quantity},e.title+t)}))})]}),0===E.length&&Object(u.jsx)(m,{}),E&&Object(u.jsxs)("section",{className:"count-panel",children:[Object(u.jsxs)("header",{className:"count-header",children:[Object(u.jsx)("p",{children:"Ocurrencias"}),Object(u.jsx)("p",{children:"COMPRADORES"})]}),Object(u.jsx)("article",{className:"count-article",children:E.map((function(e,t){return Object(u.jsx)(N,{title:e.name+" "+e.surname,number:e.quantity},e.surname+t)}))})]}),0===E.length&&Object(u.jsx)(m,{}),q&&Object(u.jsxs)("section",{className:"count-panel",children:[Object(u.jsxs)("header",{className:"count-header",children:[Object(u.jsx)("p",{children:"Ocurrencias"}),Object(u.jsx)("p",{children:"VENDIDOS"})]}),Object(u.jsx)("article",{className:"count-article",children:q.map((function(e,t){return Object(u.jsx)(N,{title:e.title,number:e.quantity},e.title+t)}))})]}),0===a.length&&Object(u.jsx)(m,{}),a&&a.map((function(e,t){return Object(u.jsx)(g,{title:e.title,img:e.img,children:Object(u.jsxs)("header",{className:"panel-header",children:[Object(u.jsx)("p",{children:"\xdaLTIMO"}),Object(u.jsx)("p",{children:e.identity})]})},e.title+t)}))]})]})},v=(c(39),function(){var e=p(),t=Object(n.useState)([]),c=Object(O.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(0),i=Object(O.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)(1),h=Object(O.a)(j,2),d=h[0],x=h[1];Object(n.useEffect)((function(){fetch("".concat(e,"/api")).then((function(e){return e.json()})).then((function(e){l(e.totals.gameCount)})).catch((function(e){return console.log(e)}))}),[e]),Object(n.useEffect)((function(){fetch("".concat(e,"/api/products/").concat(d)).then((function(e){return e.json()})).then((function(e){s(e.games)})).catch((function(e){return console.log(e)}))}),[d,e]);var N=function(){var t=Object(f.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(d+1);case 2:fetch("".concat(e,"/api/products/").concat(d)).then((function(e){return e.json()})).then((function(e){s(e.games)})).catch((function(e){return console.log(e)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(f.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(d-1);case 2:fetch("".concat(e,"/api/products/").concat(d)).then((function(e){return e.json()})).then((function(e){s(e.games)})).catch((function(e){return console.log(e)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(e){e.preventDefault()};return Object(n.useEffect)((function(){document.querySelector("#products-link").classList.add("active-link")}),[]),Object(n.useEffect)((function(){var e=document.querySelector("#products-link");return function(){e.classList.remove("active-link")}}),[]),Object(u.jsx)("main",{className:"main-main",children:Object(u.jsxs)("div",{className:"panel-container",children:[0===a.length&&Object(u.jsx)(m,{}),a&&a.map((function(e,t){return Object(u.jsx)(g,{title:e.title,img:e.img},e.title+t)})),a&&Object(u.jsxs)("div",{className:"paging-button-box",children:[Object(u.jsx)("button",{className:"paging-button",onClick:1===d?v:k,children:Object(u.jsx)("h2",{children:Object(u.jsx)("i",{className:"fas fa-caret-left"})})}),Object(u.jsx)("h2",{className:"current-page",children:d}),Object(u.jsx)("button",{className:"paging-button",onClick:Math.ceil(o/9)===d?v:N,children:Object(u.jsx)("h2",{children:Object(u.jsx)("i",{className:"fas fa-caret-right"})})})]})]})})}),S=function(){var e=p(),t=Object(n.useState)([]),c=Object(O.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(0),i=Object(O.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)(1),h=Object(O.a)(j,2),d=h[0],x=h[1];Object(n.useEffect)((function(){fetch("".concat(e,"/api")).then((function(e){return e.json()})).then((function(e){l(e.totals.userCount)})).catch((function(e){return console.log(e)}))}),[e]),Object(n.useEffect)((function(){fetch("".concat(e,"/api/users/").concat(d)).then((function(e){return e.json()})).then((function(e){s(e.users)})).catch((function(e){return console.log(e)}))}),[d,e]);var N=function(){var t=Object(f.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(d+1);case 2:fetch("".concat(e,"/api/users/").concat(d)).then((function(e){return e.json()})).then((function(e){s(e.users)})).catch((function(e){return console.log(e)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(f.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(d-1);case 2:fetch("".concat(e,"/api/users/").concat(d)).then((function(e){return e.json()})).then((function(e){s(e.users)})).catch((function(e){return console.log(e)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(e){e.preventDefault()};return Object(n.useEffect)((function(){document.querySelector("#users-link").classList.add("active-link")}),[]),Object(n.useEffect)((function(){var e=document.querySelector("#users-link");return function(){e.classList.remove("active-link")}}),[]),Object(u.jsx)("main",{className:"main-main",children:Object(u.jsxs)("div",{className:"panel-container",children:[0===a.length&&Object(u.jsx)(m,{}),a&&a.map((function(e,t){return Object(u.jsx)(g,{title:e.name+" "+e.surname,img:e.avatar},e.name+t)})),a&&Object(u.jsxs)("div",{className:"paging-button-box",children:[Object(u.jsx)("button",{className:"paging-button",onClick:1===d?v:k,children:Object(u.jsx)("h2",{children:Object(u.jsx)("i",{className:"fas fa-caret-left"})})}),Object(u.jsx)("h2",{className:"current-page",children:d}),Object(u.jsx)("button",{className:"paging-button",onClick:Math.ceil(o/6)===d?v:N,children:Object(u.jsx)("h2",{children:Object(u.jsx)("i",{className:"fas fa-caret-right"})})})]})]})})},y=(c(40),function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"error-text",children:"ERROR 404"}),Object(u.jsx)("p",{className:"error-detail",children:"Page not found"})]})}),E=c(2),C={backgroundImage:"url(".concat(i,")"),backgroundPosition:"center center",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",backgroundSize:"cover"},w=function(){return Object(u.jsxs)("div",{className:"container",style:C,children:[Object(u.jsx)(l,{}),Object(u.jsxs)(E.c,{children:[Object(u.jsx)(E.a,{path:"/",exact:!0,component:k}),Object(u.jsx)(E.a,{path:"/products",exact:!0,component:v}),Object(u.jsx)(E.a,{path:"/users",exact:!0,component:S}),Object(u.jsx)(E.a,{component:y})]})]})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(w,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d0d8e6bb.chunk.js.map