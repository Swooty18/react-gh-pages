(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{30:function(t,e,a){t.exports=a.p+"static/media/remove.95f30ee9.svg"},31:function(t,e,a){t.exports=a.p+"static/media/close.10c581b6.svg"},32:function(t,e,a){t.exports=a.p+"static/media/edit.e6d3868a.svg"},33:function(t,e,a){t.exports=a.p+"static/media/add.04bce1ba.svg"},36:function(t,e,a){t.exports=a(67)},58:function(t,e,a){},59:function(t,e,a){},60:function(t,e,a){},66:function(t,e,a){},67:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(28),s=a.n(o),i=a(17),l=a(6),r=a(3),m=a.n(r),u=a(8),d=a(29),p=a.n(d),k=a(30),v=a.n(k),f=(a(58),function(t){var e=t.items,a=t.isRemovable,n=t.onClick,o=t.onRemove,s=t.onClickItem,i=t.activeItem;return c.a.createElement("ul",{onClick:n,className:"list"},e.map((function(t,e){return c.a.createElement("li",{key:e,className:p()(t.className,{active:t.active?t.active:i&&i.id===t.id}),onClick:s?function(){return s(t)}:null},c.a.createElement("i",null,t.icon?t.icon:""),c.a.createElement("span",null,t.name,t.tasks&&" (".concat(t.tasks.length,") ")),a&&c.a.createElement("img",{className:"list__remove-icon",src:v.a,alt:"Remove icon",onClick:function(){return function(t){window.confirm("Are you sure you want to delete the list?")&&(m.a.delete("https://my-project-matss.herokuapp.com/lists/"+t.id).then((function(){o(t.id)})),o(t))}(t)}}))})))}),h=a(31),E=a.n(h),C=(a(59),function(t){var e=t.onAdd,a=Object(n.useState)(!1),o=Object(l.a)(a,2),s=o[0],i=o[1],r=Object(n.useState)(""),u=Object(l.a)(r,2),d=u[0],p=u[1],k=Object(n.useState)(!1),v=Object(l.a)(k,2),h=v[0],C=v[1],g=function(){i(!1),p("")};return c.a.createElement("div",{className:"add-list"},c.a.createElement(f,{onClick:function(){return i(!s)},items:[{className:"list__add-button",icon:c.a.createElement("svg",{width:"13",height:"13",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M8 1V15",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M1 8H15",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),name:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0441\u043f\u0438\u0441\u043e\u043a"}]}),s&&c.a.createElement("div",{className:"add-list__popup"},c.a.createElement("img",{onClick:g,src:E.a,alt:"Close-button",className:"add-list__popup-close-btn"}),c.a.createElement("input",{value:d,onChange:function(t){return p(t.target.value)},type:"text",className:"field",placeholder:"List name"}),c.a.createElement("button",{onClick:function(){d?(C(!0),m.a.post("https://my-project-matss.herokuapp.com/lists",{name:d}).then((function(t){var a=t.data;e(a),g()})).catch((function(){alert("Error adding list")})).finally((function(){C(!1)}))):alert("Enter a name for the list")},className:"button"},h?"Adding...":"Add")))}),g=a(32),b=a.n(g),w=(a(60),a(33)),j=a.n(w),y=function(t){var e=t.list,a=t.onAddTask,o=Object(n.useState)(""),s=Object(l.a)(o,2),i=s[0],r=s[1],u=Object(n.useState)(""),d=Object(l.a)(u,2),p=d[0],k=d[1];return c.a.createElement("div",{className:"tasks__form"},c.a.createElement("img",{src:j.a,alt:"Add icon"}),c.a.createElement("input",{value:i,valuetype:"text",className:"field",placeholder:"Start typing here to create a task...",onChange:function(t){return r(t.target.value)}}),c.a.createElement("button",{onClick:function(){var t={listId:e.id,text:i,completed:!1};k(!0),m.a.post("https://my-project-matss.herokuapp.com/tasks/",t).then((function(t){var e=t.data;console.log(e),a(e.listId,e),console.log(e.listId),r("")})).catch((function(){alert("Error adding task")})).finally((function(){k(!1)}))},className:"button"},p?"\u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f":"Add Task"))},T=function(t){var e=t.id,a=t.text,n=t.completed,o=t.onEditTask,s=t.onCompleteTask,i=t.onRemoveTask,l=t.list;return c.a.createElement("div",null,c.a.createElement("div",{key:e,className:"tasks-items"},c.a.createElement("label",{htmlFor:e}),c.a.createElement("div",{className:"checkbox"},c.a.createElement("input",{id:e,onChange:function(t){s(l.id,e,t.target.checked)},type:"checkbox",checked:n})),c.a.createElement("div",{className:"tasks-items-text"},c.a.createElement("p",null,a)),c.a.createElement("div",{className:"tasks-items-actions"},c.a.createElement("div",{onClick:function(){return o(l.id,e,a)}},c.a.createElement("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9337 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.638 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825V3.36825Z",fill:"black"}))),c.a.createElement("div",{onClick:function(){return i(l.id,e)}},c.a.createElement("svg",{width:"11",height:"11",viewBox:"0 0 11 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M6.87215 5.5L10.7129 1.65926C10.8952 1.47731 10.9977 1.23039 10.9979 0.972832C10.9982 0.715276 10.8961 0.468178 10.7141 0.285898C10.5321 0.103617 10.2852 0.00108525 10.0277 0.000857792C9.77011 0.000630336 9.52302 0.102726 9.34074 0.284685L5.5 4.12542L1.65926 0.284685C1.47698 0.102404 1.22976 0 0.971974 0C0.714191 0 0.466965 0.102404 0.284685 0.284685C0.102404 0.466965 0 0.714191 0 0.971974C0 1.22976 0.102404 1.47698 0.284685 1.65926L4.12542 5.5L0.284685 9.34074C0.102404 9.52302 0 9.77024 0 10.028C0 10.2858 0.102404 10.533 0.284685 10.7153C0.466965 10.8976 0.714191 11 0.971974 11C1.22976 11 1.47698 10.8976 1.65926 10.7153L5.5 6.87458L9.34074 10.7153C9.52302 10.8976 9.77024 11 10.028 11C10.2858 11 10.533 10.8976 10.7153 10.7153C10.8976 10.533 11 10.2858 11 10.028C11 9.77024 10.8976 9.52302 10.7153 9.34074L6.87215 5.5Z",fill:"black"}))))))},N=function(t){var e=t.list,a=t.onEditTitle,n=t.onAddTask,o=t.onCompleteTask,s=t.onRemoveTask,i=t.onEditTask,l=t.withoutEmpty;return c.a.createElement("div",{className:"tasks"},c.a.createElement("div",{className:"tasks__title"},c.a.createElement("span",null,e.name),c.a.createElement("img",{onClick:function(){var t=window.prompt("List name",e.name);t&&(a(e.id,t),m.a.patch("https://my-project-matss.herokuapp.com/lists/"+e.id,{name:t}).catch((function(){alert("Failed to update list name")})))},src:b.a,alt:"Edit-icon"})),c.a.createElement(y,{list:e,onAddTask:n}),!l&&e.tasks&&!e.tasks.length&&c.a.createElement("h2",null,"No tasks!"),e.tasks&&e.tasks.map((function(t){return c.a.createElement(T,Object.assign({key:t.id,onRemoveTask:s,list:e,onEditTask:i,onCompleteTask:o},t))})))};var x=function(){var t=Object(n.useState)(null),e=Object(l.a)(t,2),a=e[0],o=e[1],s=Object(n.useState)(null),r=Object(l.a)(s,2),d=r[0],p=r[1],k=Object(u.d)();Object(n.useEffect)((function(){m.a.get("https://my-project-matss.herokuapp.com/lists?_embed=tasks").then((function(t){var e=t.data;o(e)}))}),[]);var v=function(t,e){var n=a.map((function(a){return a.id===t&&(a.tasks=[].concat(Object(i.a)(a.tasks),[e])),a}));o(n)},h=function(t,e,n){var c=window.prompt("Task text",n),s=d;if(console.log(d),c){var i=a.map((function(a){return a.id===t&&(a.tasks=a.tasks.map((function(t){return t.id===e&&(t.text=c),t}))),a}));o(i),m.a.patch("https://my-project-matss.herokuapp.com/tasks/"+e,{text:c}).then(console.log(e)).catch((function(){alert("Failed to update task")})),console.log(d),p(s),console.log(d)}},E=function(t,e){if(window.confirm("You really want to delete the task?")){var n=a.map((function(a){return a.id===t&&(a.tasks=a.tasks.filter((function(t){return t.id!==e}))),a}));o(n),m.a.delete("https://my-project-matss.herokuapp.com/tasks/"+e).catch((function(){alert("Failed to delete task")}))}},g=function(t,e,n){var c=a.map((function(a){return a.id===t&&(a.tasks=a.tasks.map((function(t){return t.id===e&&(t.completed=n),t}))),a}));o(c),m.a.patch("https://my-project-matss.herokuapp.com/tasks/"+e,{completed:n}).catch((function(){alert("Failed to update task")}))},b=function(t,e){var n=a.map((function(a){return a.id===t&&(a.name=e),a}));o(n)};return c.a.createElement("div",{className:"todo"},c.a.createElement("div",{className:"todo__sidebar"},c.a.createElement(f,{onClickItem:function(t){k.push("/react-gh-pages/"),p()},items:[{active:null==d,icon:c.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},c.a.createElement("path",{d:"M16.557,4.467h-1.64v-0.82c0-0.225-0.183-0.41-0.409-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H5.901v-0.82c0-0.225-0.185-0.41-0.41-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H3.442c-0.904,0-1.64,0.735-1.64,1.639v9.017c0,0.904,0.736,1.64,1.64,1.64h13.114c0.904,0,1.64-0.735,1.64-1.64V6.106C18.196,5.203,17.461,4.467,16.557,4.467 M17.377,15.123c0,0.453-0.366,0.819-0.82,0.819H3.442c-0.453,0-0.82-0.366-0.82-0.819V8.976h14.754V15.123z M17.377,8.156H2.623V6.106c0-0.453,0.367-0.82,0.82-0.82h1.639v1.23c0,0.225,0.184,0.41,0.41,0.41c0.225,0,0.41-0.185,0.41-0.41v-1.23h8.196v1.23c0,0.225,0.185,0.41,0.41,0.41c0.227,0,0.409-0.185,0.409-0.41v-1.23h1.64c0.454,0,0.82,0.367,0.82,0.82V8.156z"})),name:"All tasks"}]}),a?c.a.createElement(f,{items:a,onRemove:function(t){var e=a.filter((function(e){return e.id!==t}));o(e)},onClickItem:function(t){p(t)},activeItem:d,isRemovable:!0}):"Loading...",c.a.createElement(C,{onAdd:function(t){var e=[].concat(Object(i.a)(a),[t]);o(e)}})),c.a.createElement("div",{className:"todo__tasks"},a&&!d&&a.map((function(t){return c.a.createElement(N,{key:t.id,list:t,onAddTask:v,onEditTitle:b,onRemoveTask:E,onEditTask:h,onCompleteTask:g,withoutEmpty:!0})})),a&&d&&c.a.createElement(N,{list:d,onAddTask:v,onEditTitle:b,onRemoveTask:E,onEditTask:h,onCompleteTask:g,withoutEmpty:!0})))},L=a(12);a(66);s.a.render(c.a.createElement(L.a,null,c.a.createElement(x,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.586ddc1e.chunk.js.map