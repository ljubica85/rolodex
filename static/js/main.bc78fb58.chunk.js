(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),i=(n(14),n(4)),s=n(5),l=n(7),u=n(6),m=n(8),h=(n(15),n(16),n(17),function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set").concat(e.entity,"&size=180x180")}),o.a.createElement("h2",null,e.monster.name),o.a.createElement("p",null,e.monster.email))}),d=function(e){return o.a.createElement("div",{className:"card-list"},e.monsters.map((function(t){return o.a.createElement(h,{key:t.id,monster:t,entity:e.entity})})))},f=(n(18),function(e){var t=e.placeholder,n=e.handleChange;return o.a.createElement("input",{type:"search",className:"search",placeholder:t,onChange:n})}),E=n(1),p=(n(19),function(e){var t=e.handleClick;return o.a.createElement("div",{className:"flex"},o.a.createElement("button",{className:"choice-button",onClick:function(){return t(1)}},o.a.createElement(E.c,{size:50})),o.a.createElement("button",{className:"choice-button",onClick:function(){return t(2)}},o.a.createElement(E.b,{size:50})),o.a.createElement("button",{className:"choice-button",onClick:function(){return t(3)}},o.a.createElement(E.a,{size:50})),o.a.createElement("button",{className:"choice-button",onClick:function(){return t(4)}},o.a.createElement(E.d,{size:50})))}),b=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.handleClick=function(t){var n=["Robo","Monster","Robo-head","Kitty"][t-1];e.setState({entity:t,title:n})},e.state={monsters:[],searchField:"",entity:2,title:"Monsters"},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=e.entity,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLocaleLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,this.state.title," Roloodex"),o.a.createElement(f,{placeholder:"Search Monsters",handleChange:this.handleChange}),o.a.createElement(p,{handleClick:this.handleClick}),o.a.createElement(d,{monsters:c,entity:a}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.bc78fb58.chunk.js.map