(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(5),r=n.n(s),o=n(1),l=(n(11),n(12),n(13),function(e){var t=e.posts,n=e.onSelectedPost,a=e.selectedPostId;return c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),c.a.createElement("ul",{className:"PostsList__list"},t.map((function(e){return c.a.createElement("li",{className:"PostsList__item",key:e.id},c.a.createElement("div",null,c.a.createElement("b",null,"[User #",e.userId,"]:"," "),e.title),a===e.id?c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){return n(0)}},"Close"):c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){return n(e.id)}},"Open"))}))))}),u=n(2),m=n.n(u),i=n(3),p=(n(15),n(16),function(e){var t=e.addNewComment,n=e.postId,s=Object(a.useState)(""),r=Object(o.a)(s,2),l=r[0],u=r[1],m=Object(a.useState)(""),i=Object(o.a)(m,2),p=i[0],d=i[1],f=Object(a.useState)(""),b=Object(o.a)(f,2),E=b[0],_=b[1],h={postId:n,body:E,email:p,name:l};return c.a.createElement("form",{className:"NewCommentForm"},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:l,onChange:function(e){return u(e.target.value)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:p,onChange:function(e){return d(e.target.value)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:E,onChange:function(e){return _(e.target.value)}})),c.a.createElement("button",{type:"button",className:"NewCommentForm__submit-button button",onClick:function(){t(h),u(""),d(""),_("")}},"Add a comment"))}),d="https://mate-api.herokuapp.com",f=function(e){return fetch("".concat(d).concat(e)).then((function(e){return e.json()})).then((function(e){return e.data}))},b=function(e){return fetch("".concat(d,"/comments/").concat(e),{method:"DELETE"})},E=function(e){var t=e.selectedPostId,n=Object(a.useState)(0),s=Object(o.a)(n,2),r=s[0],l=s[1],u=Object(a.useState)([]),E=Object(o.a)(u,2),_=E[0],h=E[1],N=Object(a.useState)(!0),v=Object(o.a)(N,2),j=v[0],O=v[1];Object(a.useEffect)((function(){var e;(e=t,f("/posts/".concat(e))).then(l),y()}),[t]);var y=function(){var e;(e=t,fetch("".concat(d,"/comments")).then((function(e){return e.json()})).then((function(t){return t.data.filter((function(t){return t.postId===e}))}))).then((function(e){return h(e)}))},P=function(){var e=Object(i.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:y();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(i.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n=t,fetch("".concat(d,"/comments"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(n)});case 2:y();case 3:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"PostDetails"},c.a.createElement("h2",null,"Post details:"),c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,"User #",r.userId),c.a.createElement("p",null,r.title)),c.a.createElement("section",{className:"PostDetails__comments"},c.a.createElement("button",{type:"button",className:"button",onClick:function(){return O(!j)}},j?"Hide ":"Show ",_.length," ","comments"),c.a.createElement("br",null),j?c.a.createElement("ul",{className:"PostDetails__list"},_&&_.map((function(e){return c.a.createElement("li",{className:"PostDetails__list-item",key:e.id},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return P(e.id)}},"X"),c.a.createElement("p",null,e.body?e.body:P(e.id)),c.a.createElement("hr",null),c.a.createElement("b",{className:"comment__name"},e.name))}))):c.a.createElement("p",null," ")),c.a.createElement("section",null,c.a.createElement("br",null),c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(p,{addNewComment:C,postId:t}))))},_=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(0),u=Object(o.a)(r,2),m=u[0],i=u[1],p=Object(a.useState)([]),d=Object(o.a)(p,2),b=d[0],_=d[1],h=Object(a.useState)(0),N=Object(o.a)(h,2),v=N[0],j=N[1];Object(a.useEffect)((function(){0===m?f("/posts").then(s):function(e){return f("/posts?userId=".concat(e))}(m).then(s),f("/users").then(_)}),[m]);return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",value:m,onChange:function(e){return i(+e.target.value)}},c.a.createElement("option",{value:"0"},"All users"),b.map((function(e){return e.id<=10&&c.a.createElement("option",{key:e.id,value:e.id},e.name)}))))),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(l,{posts:n,onSelectedPost:function(e){j(e)},selectedPostId:v})),c.a.createElement("div",{className:"App__content"},0!==v&&c.a.createElement(E,{selectedPostId:v}))))};r.a.render(c.a.createElement(_,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.a6236fdb.chunk.js.map