(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/remove.95f30ee9.svg"},31:function(e,t,a){e.exports=a.p+"static/media/close.10c581b6.svg"},32:function(e,t,a){e.exports=a.p+"static/media/edit.e6d3868a.svg"},33:function(e,t,a){e.exports=a.p+"static/media/add.04bce1ba.svg"},36:function(e,t,a){e.exports=a(67)},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(28),i=a.n(o),s=a(17),l=a(6),r=a(3),m=a.n(r),d=a(8),u=a(29),p=a.n(u),v=a(30),f=a.n(v),k=(a(58),function(e){var t=e.items,a=e.isRemovable,n=e.onClick,o=e.onRemove,i=e.onClickItem,s=e.activeItem;return c.a.createElement("ul",{onClick:n,className:"list"},t.map((function(e,t){return c.a.createElement("li",{key:t,className:p()(e.className,{active:e.active?e.active:s&&s.id===e.id}),onClick:i?function(){return i(e)}:null},c.a.createElement("i",null,e.icon?e.icon:""),c.a.createElement("span",null,e.name,e.tasks&&" (".concat(e.tasks.length,") ")),a&&c.a.createElement("img",{className:"list__remove-icon",src:f.a,alt:"Remove icon",onClick:function(){return function(e){window.confirm("\u0412\u0438 \u0434\u0456\u0439\u0441\u043d\u043e \u0445\u043e\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0441\u043f\u0438\u0441\u043e\u043a?")&&(m.a.delete("https://my-json-server.typicode.com/swooty18/db/lists/"+e.id).then((function(){o(e.id)})),o(e))}(e)}}))})))}),h=a(31),E=a.n(h),b=(a(59),function(e){var t=e.onAdd,a=Object(n.useState)(!1),o=Object(l.a)(a,2),i=o[0],s=o[1],r=Object(n.useState)(""),d=Object(l.a)(r,2),u=d[0],p=d[1],v=Object(n.useState)(!1),f=Object(l.a)(v,2),h=f[0],b=f[1],C=function(){s(!1),p("")};return c.a.createElement("div",{className:"add-list"},c.a.createElement(k,{onClick:function(){return s(!i)},items:[{className:"list__add-button",icon:c.a.createElement("svg",{width:"13",height:"13",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M8 1V15",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M1 8H15",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),name:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0441\u043f\u0438\u0441\u043e\u043a"}]}),i&&c.a.createElement("div",{className:"add-list__popup"},c.a.createElement("img",{onClick:C,src:E.a,alt:"Close-button",className:"add-list__popup-close-btn"}),c.a.createElement("input",{value:u,onChange:function(e){return p(e.target.value)},type:"text",className:"field",placeholder:"\u041d\u0430\u0437\u0432\u0430 \u0441\u043f\u0438\u0441\u043a\u0443"}),c.a.createElement("button",{onClick:function(){u?(b(!0),m.a.post("https://my-json-server.typicode.com/swooty18/db/lists",{name:u}).then((function(e){var a=e.data;t(a),C()})).catch((function(){alert("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u0456 \u0441\u043f\u0438\u0441\u043a\u0443")})).finally((function(){b(!1)}))):alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0441\u043f\u0438\u0441\u043a\u0443")},className:"button"},h?"\u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f...":"\u0414\u043e\u0434\u0430\u0442\u0438")))}),C=a(32),w=a.n(C),g=(a(60),a(33)),y=a.n(g),j=function(e){var t=e.list,a=e.onAddTask,o=Object(n.useState)(""),i=Object(l.a)(o,2),s=i[0],r=i[1],d=Object(n.useState)(""),u=Object(l.a)(d,2),p=u[0],v=u[1];return c.a.createElement("div",{className:"tasks__form"},c.a.createElement("img",{src:y.a,alt:"Add icon"}),c.a.createElement("input",{value:s,valuetype:"text",className:"field",placeholder:"Start typing here to create a task...",onChange:function(e){return r(e.target.value)}}),c.a.createElement("button",{onClick:function(){var e={listId:t.id,text:s,completed:!1};v(!0),m.a.post("https://my-json-server.typicode.com/swooty18/db/tasks/",e).then((function(e){var n=e.data;a(t.id,n),r("")})).catch((function(){alert("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u0456 \u0437\u0430\u0434\u0430\u0447\u0456")})).finally((function(){v(!1)}))},className:"button"},p?"\u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f":"Add Task"))},T=function(e){var t=e.id,a=e.text,n=e.completed,o=e.onEditTask,i=e.onCompleteTask,s=e.onRemoveTask,l=e.list;return c.a.createElement("div",null,c.a.createElement("div",{key:t,className:"tasks-items"},c.a.createElement("label",{htmlFor:t}),c.a.createElement("div",{className:"checkbox"},c.a.createElement("input",{id:t,onChange:function(e){i(l.id,t,e.target.checked)},type:"checkbox",checked:n})),c.a.createElement("div",{className:"tasks-items-text"},c.a.createElement("p",null,a)),c.a.createElement("div",{className:"tasks-items-actions"},c.a.createElement("div",{onClick:function(){return o(l.id,t,a)}},c.a.createElement("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9337 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.638 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825V3.36825Z",fill:"black"}))),c.a.createElement("div",{onClick:function(){return s(l.id,t)}},c.a.createElement("svg",{width:"11",height:"11",viewBox:"0 0 11 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M6.87215 5.5L10.7129 1.65926C10.8952 1.47731 10.9977 1.23039 10.9979 0.972832C10.9982 0.715276 10.8961 0.468178 10.7141 0.285898C10.5321 0.103617 10.2852 0.00108525 10.0277 0.000857792C9.77011 0.000630336 9.52302 0.102726 9.34074 0.284685L5.5 4.12542L1.65926 0.284685C1.47698 0.102404 1.22976 0 0.971974 0C0.714191 0 0.466965 0.102404 0.284685 0.284685C0.102404 0.466965 0 0.714191 0 0.971974C0 1.22976 0.102404 1.47698 0.284685 1.65926L4.12542 5.5L0.284685 9.34074C0.102404 9.52302 0 9.77024 0 10.028C0 10.2858 0.102404 10.533 0.284685 10.7153C0.466965 10.8976 0.714191 11 0.971974 11C1.22976 11 1.47698 10.8976 1.65926 10.7153L5.5 6.87458L9.34074 10.7153C9.52302 10.8976 9.77024 11 10.028 11C10.2858 11 10.533 10.8976 10.7153 10.7153C10.8976 10.533 11 10.2858 11 10.028C11 9.77024 10.8976 9.52302 10.7153 9.34074L6.87215 5.5Z",fill:"black"}))))))},x=function(e){var t=e.list,a=e.onEditTitle,n=e.onAddTask,o=e.onCompleteTask,i=e.onRemoveTask,s=e.onEditTask,l=e.withoutEmpty;return c.a.createElement("div",{className:"tasks"},c.a.createElement("div",{className:"tasks__title"},c.a.createElement("span",null,t.name),c.a.createElement("img",{onClick:function(){var e=window.prompt("\u041d\u0430\u0437\u0432\u0430 \u0441\u043f\u0438\u0441\u043a\u0443",t.name);e&&(a(t.id,e),m.a.patch("https://my-json-server.typicode.com/swooty18/db/lists/"+t.id,{name:e}).catch((function(){alert("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0438 \u043d\u0430\u0437\u0432\u0443 \u0441\u043f\u0438\u0441\u043a\u0443")})))},src:w.a,alt:"Edit-icon"})),c.a.createElement(j,{list:t,onAddTask:n}),!l&&t.tasks&&!t.tasks.length&&c.a.createElement("h2",null,"\u0417\u0430\u0434\u0430\u0447 \u043d\u0435\u043c\u0430\u0454!"),t.tasks&&t.tasks.map((function(e){return c.a.createElement(T,Object.assign({key:e.id,onRemoveTask:i,list:t,onEditTask:s,onCompleteTask:o},e))})))};var N=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(null),r=Object(l.a)(i,2),u=r[0],p=r[1],v=Object(d.e)();Object(n.useEffect)((function(){m.a.get("https://my-json-server.typicode.com/swooty18/db/lists?_embed=tasks").then((function(e){var t=e.data;o(t)}))}),[]);var f=function(e,t){var n=a.map((function(a){return a.id===e&&(a.tasks=[].concat(Object(s.a)(a.tasks),[t])),a}));o(n)},h=function(e,t,n){var c=window.prompt("\u0422\u0435\u043a\u0442 \u0437\u0430\u0434\u0430\u0447\u0456",n);if(c){var i=a.map((function(a){return a.id===e&&(a.tasks=a.tasks.map((function(e){return e.id===t&&(e.text=c),e}))),a}));o(i),m.a.patch("https://my-json-server.typicode.com/swooty18/db/tasks/"+t,{text:c}).catch((function(){alert("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0438 \u0437\u0430\u0434\u0430\u0447\u0443")}))}},E=function(e,t){if(window.confirm("\u0412\u0438 \u0434\u0456\u0439\u0441\u043d\u043e \u0445\u043e\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0437\u0430\u0434\u0430\u0447\u0443?")){var n=a.map((function(a){return a.id===e&&(a.tasks=a.tasks.filter((function(e){return e.id!==t}))),a}));o(n),m.a.delete("https://my-json-server.typicode.com/swooty18/db/tasks/"+t).catch((function(){alert("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0432\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0437\u0430\u0434\u0430\u0447\u0443")}))}},C=function(e,t,n){var c=a.map((function(a){return a.id===e&&(a.tasks=a.tasks.map((function(e){return e.id===t&&(e.completed=n),e}))),a}));o(c),m.a.patch("https://my-json-server.typicode.com/swooty18/db/tasks/"+t,{completed:n}).catch((function(){alert("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0438 \u0437\u0430\u0434\u0430\u0447\u0443")}))},w=function(e,t){var n=a.map((function(a){return a.id===e&&(a.name=t),a}));o(n)};return Object(n.useEffect)((function(){var e=v.location.pathname.split("lists/")[1];if(a){var t=a.find((function(t){return t.id===Number(e)}));p(t)}}),[a,v.location.pathname]),c.a.createElement("div",{className:"todo"},c.a.createElement("div",{className:"todo__sidebar"},c.a.createElement(k,{onClickItem:function(e){v.push("/react-gh-pages/")},items:[{active:"/"===v.location.pathname,icon:c.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},c.a.createElement("path",{d:"M16.557,4.467h-1.64v-0.82c0-0.225-0.183-0.41-0.409-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H5.901v-0.82c0-0.225-0.185-0.41-0.41-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H3.442c-0.904,0-1.64,0.735-1.64,1.639v9.017c0,0.904,0.736,1.64,1.64,1.64h13.114c0.904,0,1.64-0.735,1.64-1.64V6.106C18.196,5.203,17.461,4.467,16.557,4.467 M17.377,15.123c0,0.453-0.366,0.819-0.82,0.819H3.442c-0.453,0-0.82-0.366-0.82-0.819V8.976h14.754V15.123z M17.377,8.156H2.623V6.106c0-0.453,0.367-0.82,0.82-0.82h1.639v1.23c0,0.225,0.184,0.41,0.41,0.41c0.225,0,0.41-0.185,0.41-0.41v-1.23h8.196v1.23c0,0.225,0.185,0.41,0.41,0.41c0.227,0,0.409-0.185,0.409-0.41v-1.23h1.64c0.454,0,0.82,0.367,0.82,0.82V8.156z"})),name:"\u0412\u0441\u0456 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f"}]}),a?c.a.createElement(k,{items:a,onRemove:function(e){var t=a.filter((function(t){return t.id!==e}));o(t)},onClickItem:function(e){v.push("/react-gh-pages/lists/".concat(e.id))},activeItem:u,isRemovable:!0}):"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",c.a.createElement(b,{onAdd:function(e){var t=[].concat(Object(s.a)(a),[e]);o(t)}})),c.a.createElement("div",{className:"todo__tasks"},c.a.createElement(d.a,{exact:!0,path:"/"},a&&a.map((function(e){return c.a.createElement(x,{key:e.id,list:e,onAddTask:f,onEditTitle:w,onRemoveTask:E,onEditTask:h,onCompleteTask:C,withoutEmpty:!0})}))),c.a.createElement(d.a,{exact:!0,path:"/lists/:id"},a&&u&&c.a.createElement(x,{list:u,onAddTask:f,onEditTitle:w,onRemoveTask:E,onEditTask:h,onCompleteTask:C}))))},O=a(12);a(66);i.a.render(c.a.createElement(O.a,null,c.a.createElement(N,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.b24447d8.chunk.js.map