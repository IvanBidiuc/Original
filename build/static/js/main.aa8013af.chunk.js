(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(3),r=n.n(l),i=(n(9),n(1)),c=o.a.createContext(),u={li:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:".100rem 1rem",border:"3px solid black",borderRadius:"15px",marginBottom:".9rem"},input:{marginRight:"4rem"}};var m=function(e){var t=e.todo,n=e.index,l=e.onChange,r=Object(a.useContext)(c).removeTodo,i=[];return t.completed&&i.push("done"),o.a.createElement("li",{style:u.li},o.a.createElement("span",{className:i.join(" ")},o.a.createElement("input",{type:"checkbox",checked:t.completed,style:u.input,onChange:function(){return l(t.id)}}),o.a.createElement("strong",null,n+1),"\xa0",t.title),o.a.createElement("button",{className:"rm",onClick:r.bind(null,t.id)},"Delete"))},d={ul:{listStyle:"none",margin:0,padding:0}};var s=function(e){return o.a.createElement("ul",{style:d.ul},e.todos.map(function(t,n){return o.a.createElement(m,{todo:t,key:t.id,index:n,onChange:e.onToggle})}))},p=function(){return o.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:".5rem"}},o.a.createElement("div",{className:"lds-ring"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)))},f=o.a.lazy(function(){return new Promise(function(e){setTimeout(function(){e(n.e(3).then(n.bind(null,11)))},3e3)})});var E=function(){var e=o.a.useState([]),t=Object(i.a)(e,2),n=t[0],l=t[1],r=o.a.useState(!0),u=Object(i.a)(r,2),m=u[0],d=u[1];return Object(a.useEffect)(function(){fetch("https://jsonplaceholder.typicode.com/todos?_limit=2").then(function(e){return e.json()}).then(function(e){setTimeout(function(){l(e),d(!1)},0)})},[]),o.a.createElement(c.Provider,{value:{removeTodo:function(e){l(n.filter(function(t){return t.id!==e}))}}},o.a.createElement("div",{className:"wrapper"},o.a.createElement("h1",null,"Todo-App"),o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(p,null)},o.a.createElement(f,{onCreate:function(e){l(n.concat([{title:e,id:Date.now(),completed:!1}]))}})),n.length?o.a.createElement(s,{todos:n,onToggle:function(e){l(n.map(function(t){return t.id===e&&(t.completed=!t.completed),t}))}}):m?null:o.a.createElement("p",null,"None todos!")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.aa8013af.chunk.js.map