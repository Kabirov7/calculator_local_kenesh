(this.webpackJsonpcalculator_jogorku_kenesh=this.webpackJsonpcalculator_jogorku_kenesh||[]).push([[0],{58:function(e,t,n){},59:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a,i=n(0),c=n.n(i),r=n(9),o=n.n(r),s=(n(58),n(59),n(14)),j=n(13),d=n(104),l=n(108),u=n(106),x=n(109),p=n(101),b=n(5),m=Object(p.a)((function(e){var t;return{formControl:Object(j.a)({marginTop:"30px",margin:"0 auto",width:"90%"},"@media (max-width:780px)",{width:"100%"}),header:(t={margin:"0 0 5px 0 ",padding:0,fontFamily:"PT Serif",fontWeight:900,fontSize:"22px"},Object(j.a)(t,"@media (max-width:780px)",{fontSize:19}),Object(j.a)(t,"@media (max-width:500px)",{fontSize:17}),Object(j.a)(t,"@media (max-width:350px)",{fontSize:15}),t),item:{fontFamily:"PT Serif",padding:0,margin:0}}})),f=function(e){var t=c.a.useState(""),n=Object(s.a)(t,2),a=n[0],i=n[1],r=c.a.useState(!1),o=Object(s.a)(r,2),j=o[0],p=o[1],f=m(),h=e.title,O=e.answers,g=(e.index,e.values,e.returnAnswer);return Object(b.jsxs)("div",{className:f.formControl,children:[Object(b.jsx)("p",{className:f.header,children:h}),Object(b.jsx)("div",{style:{paddingTop:15},children:Object(b.jsx)(d.a,{style:{width:"40%"},children:Object(b.jsx)(l.a,{open:j,value:a,onChange:function(e){i(e.target.value);var t=O.map((function(t,n){if(t.region===e.target.value)return t.count}));g(t.filter(Boolean)[0])},onClose:function(){p(!1)},onOpen:function(){p(!0)},input:Object(b.jsx)(u.a,{id:"grouped-select"}),children:O.map((function(e,t){return Object(b.jsx)(x.a,{value:e.region,children:Object(b.jsx)("p",{className:f.item,children:e.region})})}))})})})]})},h=n(107),O=n(110),g=Object(p.a)({root:{paddingTop:"25px"},typography:(a={margin:"0 0 5px 0 ",padding:0,fontFamily:"PT Serif",fontSize:"22px",fontWeight:700},Object(j.a)(a,"@media (max-width:780px)",{fontSize:19}),Object(j.a)(a,"@media (max-width:500px)",{fontSize:17}),Object(j.a)(a,"@media (max-width:350px)",{fontSize:15}),a)});function S(e){var t=Object(i.useState)(50),n=Object(s.a)(t,2),a=n[0],c=n[1],r=g(),o=e.title,j=e.returnAnswer;return Object(b.jsxs)("div",{className:r.root,style:{fontFamily:"Roboto"},children:[Object(b.jsx)("p",{className:r.typography,variant:"h6",component:"p",children:o}),Object(b.jsx)(h.a,{container:!0,spacing:2,alignItems:"center",children:Object(b.jsx)(h.a,{item:!0,xs:!0,children:Object(b.jsx)(O.a,{style:{marginTop:30},valueLabelDisplay:"on","aria-label":"pretto slider",value:"number"===typeof a?a:0,onChange:function(e,t){c(t),j(t)}})})})]})}var v=Object(p.a)((function(e){var t,n;return{paragraph:(t={margin:"20px 0 5px 0 ",padding:0,fontFamily:"PT Serif",fontWeight:500,fontSize:"19px"},Object(j.a)(t,"@media (max-width:780px)",{fontSize:17}),Object(j.a)(t,"@media (max-width:500px)",{fontSize:15}),Object(j.a)(t,"@media (max-width:350px)",{fontSize:13}),t),largerText:(n={margin:"5px 0 5px 0 ",padding:0,fontFamily:"PT Serif",fontWeight:900,fontSize:"24px"},Object(j.a)(n,"@media (max-width:780px)",{fontSize:22}),Object(j.a)(n,"@media (max-width:500px)",{fontSize:20}),Object(j.a)(n,"@media (max-width:350px)",{fontSize:19}),n)}})),w=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(50),r=Object(s.a)(c,2),o=r[0],j=r[1],d=Object(i.useState)(0),l=Object(s.a)(d,2),u=l[0],x=l[1],p=Object(i.useState)(0),m=Object(s.a)(p,2),h=m[0],O=m[1],g=Object(i.useState)(0),w=Object(s.a)(g,2),y=w[0],z=w[1],T=v();Object(i.useEffect)((function(){a([{region:"\u0411\u0430\u043b\u044b\u043a\u0447\u044b",count:29740},{region:"\u0411\u0430\u0442\u043a\u0435\u043d",count:15514},{region:"\u0411\u0438\u0448\u043a\u0435\u043a",count:417570},{region:"\u0414\u0436\u0430\u043b\u0430\u043b-\u0410\u0431\u0430\u0434",count:49603},{region:"\u041a\u0430\u0440\u0430\u043a\u043e\u043b",count:38985},{region:"\u041a\u0430\u0440\u0430-\u041a\u0443\u043b\u044c",count:15624},{region:"\u041a\u044b\u0437\u044b\u043b-\u041a\u0438\u044f",count:30436},{region:"\u041c\u0430\u0439\u043b\u0443\u0443-\u0421\u0443\u0443",count:12765},{region:"\u041d\u0430\u0440\u044b\u043d",count:30955},{region:"\u041e\u0448",count:151239},{region:"\u0421\u0443\u043b\u044e\u043a\u0442\u0430",count:10804},{region:"\u0422\u0430\u043b\u0430\u0441",count:21926},{region:"\u0422\u043e\u043a\u043c\u043e\u043a",count:38578}])}),[]),Object(i.useEffect)((function(){O(u/100*o),z(Math.ceil(Math.ceil(u*o/100)/2+1))}),[u,o]);return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{title:"\u0412 \u043a\u0430\u043a\u043e\u043c \u0433\u043e\u0440\u043e\u0434\u0435 \u0432\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u0442\u044c?",answers:n,returnAnswer:function(e){x(e)}}),0!==u&&Object(b.jsxs)("div",{children:[Object(b.jsx)(S,{returnAnswer:function(e){j(e)},title:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u044f\u0432\u043a\u0443"}),Object(b.jsxs)("div",{style:{margin:30},children:[Object(b.jsxs)("p",{className:T.paragraph,children:["\u0421\u0442\u043e\u043b\u044c\u043a\u043e \u043b\u044e\u0434\u0435\u0439 \u043f\u0440\u043e\u0433\u043e\u043b\u043e\u0441\u0443\u0435\u0442 \u0432 \u044d\u0442\u043e\u043c \u0433\u043e\u0440\u043e\u0434\u0435 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432\u0430\u043c\u0438 \u044f\u0432\u043a\u043e\u0439:",Object(b.jsx)("br",{}),Object(b.jsx)("h3",{className:T.largerText,children:Math.ceil(h)})]}),Object(b.jsxs)("p",{className:T.paragraph,children:["\u0421\u0442\u043e\u043b\u044c\u043a\u043e \u0433\u043e\u043b\u043e\u0441\u043e\u0432 \u043d\u0430\u0434\u043e \u043d\u0430\u0431\u0440\u0430\u0442\u044c \u043e\u0434\u043d\u043e\u0439 \u043f\u0430\u0440\u0442\u0438\u0438, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0439\u0442\u0438 \u0432 \u043a\u0435\u043d\u0435\u0448 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u0432\u0430\u043c\u0438 \u0433\u043e\u0440\u043e\u0434\u0430:",Object(b.jsx)("br",{}),Object(b.jsx)("h3",{className:T.largerText,children:y})]})]})]})]})};var y=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(w,{})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,111)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),z()}},[[66,1,2]]]);
//# sourceMappingURL=main.52135b68.chunk.js.map