(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,,,,,,,function(t,e,o){t.exports=o(21)},,,,,function(t,e,o){},,function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(9),c=o.n(r),s=(o(16),o(6)),i=o.n(s),u=o(10),d=o(7),l=o(1),p=o(2),m=o(4),f=o(3),h=o(5),v=(o(18),function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(m.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(a)))).toggleTodo=function(){o.props.updateTodoFn(o.props.todo)},o}return Object(h.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this.props.todo;return a.a.createElement("div",{className:"todoItem"+(t.completed?" completed":""),onClick:this.toggleTodo},t.text)}}]),e}(a.a.Component)),b=function(t){function e(){var t,o;Object(l.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(m.a)(this,(t=Object(f.a)(e)).call.apply(t,[this].concat(a)))).updateTodo=function(t){o.props.updateTodoFn(t)},o}return Object(h.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this,e=this.props.todos;return a.a.createElement("div",{className:"ListContainer"},e.map((function(e,o){return a.a.createElement(v,{updateTodoFn:t.updateTodo,key:o,todo:e})})))}}]),e}(a.a.Component),O=(o(19),function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(m.a)(this,Object(f.a)(e).call(this))).updateInput=function(e){t.setState({todo:e.target.value})},t.submitTodo=function(e){e.preventDefault(),t.props.addTodoFn(t.state.todo),document.getElementById("addTodoInput").value=""},t.state={todo:""},t}return Object(h.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"TodoContainer"},a.a.createElement("form",{onSubmit:function(e){return t.submitTodo(e)}},a.a.createElement("input",{id:"addTodoInput",onChange:function(e){return t.updateInput(e)},type:"text",required:!0}),a.a.createElement("button",{class:"button",type:"text"},"Add To Do")))}}]),e}(a.a.Component)),j=(o(20),function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(m.a)(this,Object(f.a)(e).call(this))).componentDidMount=function(){var e=localStorage.getItem("todos");if(e){var o=JSON.parse(e);t.setState({todos:o})}else console.log("no todos")},t.addTodo=function(){var e=Object(d.a)(i.a.mark((function e(o){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setState({todos:[].concat(Object(u.a)(t.state.todos),[{text:o,completed:!1}])});case 2:localStorage.setItem("todos",JSON.stringify(t.state.todos));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.updateTodo=function(){var e=Object(d.a)(i.a.mark((function e(o){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state.todos.map((function(t){return o===t?{text:o.text,completed:!o.completed}:t})),console.log(n),e.next=4,t.setState({todos:n});case 4:localStorage.setItem("todos",JSON.stringify(t.state.todos));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.state={todos:[]},t}return Object(h.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"wrap"},a.a.createElement(O,{addTodoFn:this.addTodo}),a.a.createElement(b,{updateTodoFn:this.updateTodo,todos:this.state.todos})))}}]),e}(a.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[11,1,2]]]);
//# sourceMappingURL=main.50344649.chunk.js.map