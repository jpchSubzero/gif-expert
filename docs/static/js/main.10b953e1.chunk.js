(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=(n(15),n(2)),s=n(9),o=n(0),u=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],u=c[1];return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("Submit"),r.trim()&&(t((function(e){return[r].concat(Object(s.a)(e))})),u(""))},children:[Object(o.jsx)("h1",{children:r}),Object(o.jsx)("input",{type:"text",value:r,onChange:function(e){u(e.target.value)},placeholder:"Ingrese una categor\xeda"})]})},d=n(10),j=n(6),l=n.n(j),f=n(8),b=function(){var e=Object(f.a)(l.a.mark((function e(t){var n,a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&offset=5&rating=g&lang=en&random_id=e826c9fc5c929e0d6c6d423841a282aa&api_key=WzZmmeMbM2fIoV97Bv3ZDXYM6pE1MDa6"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){e.id;var t=e.title,n=e.url;return console.log(t),Object(o.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(o.jsx)("img",{src:n,alt:t}),Object(o.jsx)("p",{children:t})]})},p=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){b(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.loading,r=n.data;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),c&&Object(o.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando..."}),Object(o.jsx)("div",{className:"card-grid",children:r.map((function(e){return e.title?Object(o.jsx)(m,Object(d.a)({},e),e.id):""}))})]})},h=function(){var e=Object(a.useState)(["Saint Seiya"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(u,{setCategories:c}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(e){return Object(o.jsx)(p,{category:e},e)}))})]})};r.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.10b953e1.chunk.js.map