(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{54:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e(0),o=e(12),i=e.n(o),c=e(30),s=e(31),p=e(40),u=e(38),b=e(21),x=e(5),f=e(6);function m(){var n=Object(x.a)(["\nfont-size: 38px;\ntext-align: center;\n"]);return m=function(){return n},n}var d=f.b.h2(m()),l=function(n){var t=n.title,e=n.children;return Object(r.jsxs)("div",{children:[Object(r.jsx)(d,{children:t}),e]})},j=e(9),g=e(18);function h(){var n=Object(x.a)(["\nborder: 1px solid black;\nwidth: 500px;\npadding: 50px;\nmargin: 0 auto;\n"]);return h=function(){return n},n}function O(){var n=Object(x.a)(["\nfont-size: 36px;\n    font-weight: 900;\n"]);return O=function(){return n},n}function v(){var n=Object(x.a)(["\nwidth: 300px;\n    height: 25px;\n    padding: 10px;\n    font-size: 28px;\n    box-shadow: 2px 2px white, 4px 4px rgb(71, 71, 255);\n    &:hover{\n        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n    }\n    &:focus{\n        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n    }\n\n"]);return v=function(){return n},n}function y(){var n=Object(x.a)(["\n    outline: none;\n    border: 1px solid black;\n    cursor: pointer;\n    padding: 10px 20px;\n    background: rgb(71, 71, 255);\n    box-shadow: 2px 2px white, 4px 4px rgb(71, 71, 255);\n    margin: 15px;\n    padding: 20px 30px;\n    cursor: pointer;\n    border-radius: 10px;\n    color: white;\n    transition: .2s linear;\n    &:hover{\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n    }\n    &:focus{\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n    }\n"]);return y=function(){return n},n}var w=f.b.button(y()),k=f.b.input(v()),z=f.b.p(O()),N=f.b.form(h()),E={name:"",number:""},X=function(n){var t=n.addTask,e=Object(a.useState)(Object(g.a)({},E)),o=Object(b.a)(e,2),i=o[0],c=i.name,s=i.number,p=o[1],u=function(n){var t=n.target,e=t.value,r=t.name;p((function(n){return Object(g.a)(Object(g.a)({},n),{},Object(j.a)({},r,e))}))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(N,{autoComplete:"on",onSubmit:function(n){n.preventDefault(),t(c,s),p(Object(g.a)({},E))},children:[Object(r.jsx)(z,{className:"form__text",children:"Name / Surname"}),Object(r.jsx)(k,{className:"input__form",placeholder:"Name",type:"text",name:"name",value:c,onChange:u}),Object(r.jsx)(z,{className:"form__text",children:"Number"}),Object(r.jsx)(k,{className:"input__form",placeholder:"Number",type:"tel",name:"number",onChange:u,value:s}),Object(r.jsx)(w,{type:"submit",className:"form__btn",children:"Add contact"})]})})},_=e(11),C=e(8),S="todoList/add",L="todoList/delete",T="todoList/filter",I="todoList/setItem",J=Object(C.b)(T),A=e(15);function F(){var n=Object(x.a)(["\n    width: 300px;\n    height: 25px;\n    padding: 10px;\n    font-size: 28px;\n    box-shadow: 2px 2px white, 4px 4px rgb(71, 71, 255);\n    margin: 0 auto;\n    display: block;\n    &:hover{\n        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n    }\n    &:focus{\n        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n    }\n    &:appear{\n        animation: task 800ms ease-in alternate-reverse;\n    }\n      &:appear-active {\n        animation: task 800ms ease-in alternate-reverse;\n      }\n      &:appear-done {\n        animation-duration: 800ms;\n        animation-name: hinge;\n    }\n    @keyframes task {\n        0% {\n          opacity: 0;\n          transform: translateX(0);\n        }\n        30% {\n          opacity: 0.7;\n          transform: translateX(30px);\n        }\n        100% {\n          opacity: 0;\n          transform: translateX(-200px);\n        }\n      }\n      @keyframes hinge {\n        0% {\n          transform-origin: top left;\n          animation-timing-function: ease-in-out;\n        }\n        20%,\n        60% {\n          transform: rotate3d(0, 0, 1, 80deg);\n          transform-origin: top left;\n          animation-timing-function: ease-in-out;\n        }\n        40%,\n        80% {\n          transform: rotate3d(0, 0, 1, 60deg);\n          transform-origin: top left;\n          animation-timing-function: ease-in-out;\n          opacity: 1;\n        }\n        to {\n          transform: translate3d(0, 700px, 0);\n          opacity: 0;\n        }\n      }\n\n"]);return F=function(){return n},n}var D=A.a.input.attrs({unmountOnExit:!0,mountOnEntry:!0,timeout:800})(F()),Z=function(){var n=Object(_.c)((function(n){return n.filter})),t=Object(_.b)();return Object(r.jsx)("div",{children:Object(r.jsx)(D,{in:!0,appear:!0,type:"text",placeholder:"Search",name:"filter",value:n,onChange:function(n){var e=n.target.value;t(J(e))}})})};function B(){var n=Object(x.a)(["\nfont-size: 48px;\nfont-weight: 900;\nmargin: 0;\npadding-right: 30px;\n"]);return B=function(){return n},n}function P(){var n=Object(x.a)(["\n    outline: none;\n    border: 1px solid black;\n    cursor: pointer;\n    padding: 20px 50px;\n    font-size: 20px;\n    font-weight: 800;\n    background: rgb(71, 71, 255);\n    box-shadow: 2px 2px white, 4px 4px rgb(71, 71, 255);\n    margin: 5px;\n    cursor: pointer;\n    border-radius: 10px;\n    color: white;\n    transition: .2s linear;\n    &:hover{\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n    }\n    &:focus{\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n    }\n"]);return P=function(){return n},n}function q(){var n=Object(x.a)(["\ndisplay: flex;\n    padding: 3px 60px;\n    border: 1px solid;\n    width: 700px;\n    justify-content: space-between;\n    align-items: center;\n    margin: 0 auto;\n    margin-bottom: 15px;\n    &:hover{\n        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n    }\n    &:focus{\n        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n    }\n    &:enter{\n        animation: task 800ms ease-in alternate-reverse;\n    }\n      &:enter-active {\n        animation: task 800ms ease-in alternate-reverse;\n      }\n      &:exit-active {\n        animation-duration: 800ms;\n        animation-name: hinge;\n    }\n    @keyframes task {\n        0% {\n          opacity: 0;\n          transform: translateX(0);\n        }\n        30% {\n          opacity: 0.7;\n          transform: translateX(30px);\n        }\n        100% {\n          opacity: 0;\n          transform: translateX(-200px);\n        }\n      }\n      @keyframes hinge {\n        0% {\n          transform-origin: top left;\n          animation-timing-function: ease-in-out;\n        }\n        20%,\n        60% {\n          transform: rotate3d(0, 0, 1, 80deg);\n          transform-origin: top left;\n          animation-timing-function: ease-in-out;\n        }\n        40%,\n        80% {\n          transform: rotate3d(0, 0, 1, 60deg);\n          transform-origin: top left;\n          animation-timing-function: ease-in-out;\n          opacity: 1;\n        }\n        to {\n          transform: translate3d(0, 700px, 0);\n          opacity: 0;\n        }\n      }\n"]);return q=function(){return n},n}function G(){var n=Object(x.a)(["\nlist-style: none;\nmargin: 30px auto;\n"]);return G=function(){return n},n}var H=f.b.ul(G()),K=A.a.li.attrs({unmountOnExit:!0,mountOnEntry:!0,timeout:800})(q()),M=f.b.button(P()),Q=f.b.p(B()),R=e(58),U=function(n){var t=n.deleteTask,e=n.contacts;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(R.a,{component:H,children:e.map((function(n){return Object(r.jsxs)(K,{in:!0,appear:!0,children:[Object(r.jsxs)(Q,{children:[n.name,": ",n.number]}),Object(r.jsx)(M,{onClick:function(){return t(n.id)},children:"Delete"})]},n.id)}))})})},V=Object(C.b)(S),W=Object(C.b)(L),Y=Object(C.b)(I),$=e(57);function nn(){var n=Object(x.a)(["\nfont-size: 38px;\ntext-align: center;\n&:appear{\n    animation: focus-in-contract-bck 1000ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n}\n  &:appearActive {\n    animation: focus-in-contract-bck 1000ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n  }\n  @keyframes focus-in-contract-bck {\n    0% {\n      letter-spacing: 1em;\n              transform: translateZ(300px);\n              filter: blur(12px);\n      opacity: 0;\n    }\n    100% {\n              transform: translateZ(12px);\n              filter: blur(0);\n      opacity: 1;\n    }\n  }\n"]);return nn=function(){return n},n}function tn(){var n=Object(x.a)(["\nposition: absolute;\nwidth: 300px;\ntop: 10px;\nleft: 10px;\npadding: 10px 20px;\nbackground: rgb(71, 71, 255);\nbox-shadow: 2px 2px white, 4px 4px rgb(71, 71, 255);\nborder-radius: 8px;\ntext-align: center;\ncolor: white;\n  &:enter { opacity: 0; \n    transform: translateX(-100%); }\n  &:enter-active {\n    opacity: 1;\n    transform: translateX(0);\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  &:exit { opacity: 1;\n  transform: translateX(0); }\n  &:exit-active {\n    opacity: 0;\n    transform: translateX(-100%);\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]);return tn=function(){return n},n}var en,rn=A.a.div.attrs({unmountOnExit:!0,mountOnEntry:!0,timeout:250})(tn()),an=A.a.h1.attrs({timeout:500})(nn()),on=function(){var n=Object(a.useState)(""),t=Object(b.a)(n,2),e=t[0],o=t[1],i=Object(_.c)((function(n){return n.filter})),c=Object(_.c)((function(n){return n.todoList})),s=Object(_.b)();Object(a.useEffect)((function(){var n=localStorage.getItem("contacts");n&&s(Y(JSON.parse(n)))}),[s]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(c))})),Object(a.useEffect)((function(){e&&setTimeout((function(){o(!1)}),1e3)}),[e]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(rn,{in:!!e,children:Object(r.jsx)("p",{children:e})}),Object(r.jsx)(an,{in:!0,appear:!0,children:"Phonebook"}),Object(r.jsx)(X,{addTask:function(n,t){var e={name:n,number:t,id:Object($.a)()};n&&(c.every((function(t){return!t.name.includes(n)}))?s(V(e)):o("".concat(n," is already in contacts")))},contacts:c}),Object(r.jsxs)(l,{title:"Contacts:",children:[c.length>1&&Object(r.jsx)(Z,{}),Object(r.jsx)(U,{deleteTask:function(n){s(W(n))},contacts:c.length>0?c.filter((function(n){return n.name.toLowerCase().includes(i.toLowerCase())})):c})]})]})},cn=function(n){Object(p.a)(e,n);var t=Object(u.a)(e);function e(){return Object(c.a)(this,e),t.apply(this,arguments)}return Object(s.a)(e,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(on,{})})}}]),e}(a.Component),sn=e(37),pn=e(7),un=Object(C.c)("",Object(j.a)({},T,(function(n,t){return t.payload}))),bn=e(39),xn=Object(C.c)([],(en={},Object(j.a)(en,S,(function(n,t){return[].concat(Object(bn.a)(n),[t.payload])})),Object(j.a)(en,L,(function(n,t){return n.filter((function(n){return n.id!==t.payload}))})),Object(j.a)(en,I,(function(n,t){return t.payload})),en)),fn=Object(pn.c)({filter:un,todoList:xn}),mn=Object(C.a)({reducer:fn});i.a.render(Object(r.jsx)(_.a,{store:mn,children:Object(r.jsx)(sn.a,{children:Object(r.jsx)(cn,{})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.356720e9.chunk.js.map