(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"zack","image":"1.jpg"},{"id":2,"name":"Mr. Krabs","image":"2.jpg"},{"id":3,"name":"Squidward","image":"3.jpg"},{"id":4,"name":"Dexter","image":"4.jpg"},{"id":5,"name":"Courage","image":"5.jpg"},{"id":6,"name":"Doug Funnie","image":"6.jpg"},{"id":7,"name":"Bugs Bunny","image":"7.jpg"},{"id":8,"name":"Johnny Bravo","image":"8.jpg"},{"id":9,"name":"Tommy Pickles","image":"9.jpg"}]')},,,function(e,a,n){e.exports=n(20)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(2),i=n.n(c),l=(n(13),n(3)),o=n(4),s=n(7),m=n(6);n(14),n(15);var u=function(){return r.a.createElement("nav",{className:"navbar navbar-inverse"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Clicky Game")),r.a.createElement("div",{className:"navbar-header"},r.a.createElement("h3",{className:"navbar-brand"},"Click on the image to start")),r.a.createElement("div",{className:"navbar-header"})))};n(16);var d=function(e){return r.a.createElement("div",{className:"col-md-6"}," ",e.children)};n(17);var g=function(e){return r.a.createElement("div",{className:"card col-md-3",key:e.id,onClick:function(){return e.handleClick(e.id,e.clicked)}},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image,id:e.name})))};n(18);var h=function(e){return r.a.createElement("div",{className:"row"}," ",e.children," ")};n(19);var v=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4 text-center"},"Clicky Game"),r.a.createElement("hr",null),r.a.createElement("h2",null,"Score: ",e.score),r.a.createElement("hr",null),r.a.createElement("h2",null,"Top Score: ",e.topScore),r.a.createElement("hr",null),r.a.createElement("h2",{id:"message"},e.message))},f=n(5),p=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={score:0,topScore:0,squares:f,message:"Click on square to start!"},e.handleClick=function(a,n){var t=e.state.squares;if(n)return t.forEach((function(e,a){t[a].clicked=!1})),e.setState({squares:t.sort((function(){return Math.random()-.5})),score:0,message:"Wrong! Please Try again!"});t.forEach((function(e,n){a===e.id&&(t[n].clicked=!0)}));var r=e.state,c=r.topScore,i=r.score+1,l=i>c?i:c;return e.setState({squares:t.sort((function(){return Math.random()-.5})),score:i,topScore:l,message:"Correct! Continue!"})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(h,null,r.a.createElement(d,null,r.a.createElement(h,null,this.state.squares.map((function(a){return r.a.createElement(g,{name:a.name,image:a.image,key:a.id,id:a.id,handleClick:e.handleClick,clicked:a.clicked})})))),r.a.createElement(d,null,r.a.createElement(v,{message:this.state.message,score:this.state.score,topScore:this.state.topScore}))))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.95ddfd93.chunk.js.map