(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{105:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(10),c=t.n(o),i=(t(79),t(32)),l=t(33),s=t(37),m=t(36),u=t(64),d=t(41),p=t.n(d),h=(t(96),t(97),t(144)),f=(t(5),t(147)),v=t(149),E=t(150),b=t(151),g=t(152),w=t(155),y=t(38),j=t(58),O=t.n(j),k=t(59),x=t.n(k),C=t(57),N=t.n(C),S=Object(h.a)((function(e){return{root:{maxWidth:300},media:{height:0,paddingTop:"56.25%"}}}));var A=function(e){var a=S();return r.a.createElement(f.a,{className:a.root},r.a.createElement(v.a,{action:r.a.createElement(w.a,{"aria-label":"settings"},r.a.createElement(N.a,null)),title:e.data}),r.a.createElement(E.a,{className:a.media,image:"https://repository-images.githubusercontent.com/296251555/584a8200-0025-11eb-9dea-38d89d82d5f8",title:"Paella dish"}),r.a.createElement(b.a,null,r.a.createElement(y.a,{variant:"body2",color:"textSecondary",component:"p"},e.desc)),r.a.createElement(g.a,{disableSpacing:!0},r.a.createElement(w.a,{"aria-label":"add to favorites"},r.a.createElement(O.a,null)),r.a.createElement(w.a,{"aria-label":"share"},r.a.createElement(x.a,null))))},B=t(154),W=Object(h.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}));var I=function(){var e=W();return r.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},r.a.createElement(B.a,{id:"standard-basic",label:"Search"}))},J=t(153),M=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={repos:[]},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.github.com/orgs/Block-exchange/repos?ACCEPT=application/vnd.github.v3+json").then((function(a){console.log(a.data);var t=a.data;e.setState({repos:t})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(J.a,{container:!0,spacing:2,direction:"row",justify:"center",alignItems:"center"},this.state.repos.map((function(a){return r.a.createElement(J.a,{item:!0,xs:12,sm:6,md:3,key:e.state.repos.indexOf(a)},r.a.createElement(A,{data:a.name,desc:a.description}))}))))}}]),t}(r.a.Component),P=(new u.a({uri:""}),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"}),r.a.createElement(I,null),r.a.createElement(M,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,a,t){e.exports=t(105)},79:function(e,a,t){},96:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},97:function(e,a,t){}},[[74,1,2]]]);
//# sourceMappingURL=main.36b5d8a2.chunk.js.map