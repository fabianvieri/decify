(this.webpackJsonpdecify=this.webpackJsonpdecify||[]).push([[0],{259:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(69),l=a.n(c),s=a(70),m=a(71),i=a(78),o=a(77),u=(a(84),a(72)),f=a.n(u),h=a(25),d=a(73),E=function(e){var t=e.onSearch,a=e.onChange;return r.a.createElement("div",{className:"flex justify-center search-bar br2"},r.a.createElement("input",{type:"text",className:"pa1 w-70 br3 outline-0 mr1",onChange:a}),r.a.createElement("button",{type:"button",className:"pa2 w-10 white bg-orange f4-l f3-ns tc ba",onClick:t},r.a.createElement(h.a,{icon:d.a})))},p=(a(89),function(e){var t=e.def,a=t.type,c=t.definition,l=t.example,s=t.image_url,m=t.emoji;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"mt3 ".concat(s?"tl":"tc"," justify-center items-center sub__def")},r.a.createElement("div",{className:"w-70 sub__detail"},r.a.createElement("h3",{className:"fw7"},"".concat(a," ").concat(m||"")),r.a.createElement("p",{className:"f5"},r.a.createElement("i",null,"'".concat(c,"'"))),r.a.createElement("p",{className:"f5 mt2 white-70",dangerouslySetInnerHTML:{__html:l||""}})),s&&r.a.createElement("img",{alt:"word",className:"br3 ml1 sub__img",src:s})),r.a.createElement("hr",{className:"bg-white dim mt1"}))}),b=function(e){var t=e.result;if("error"===t)return r.a.createElement("div",{className:"pa3"},r.a.createElement("h2",{className:"white"},"sorry, system can't found your words"));var a=t.word,c=t.pronunciation,l=t.definitions;return r.a.createElement("div",{className:"mr2 br3 ml-auto mr-auto mw7 mt2 white"},"error"===t?r.a.createElement("h2",null,"sorry, system can't found your words"):r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"mb0 mt1"},a),r.a.createElement("p",null,c?"\\".concat(c,"\\"):""),r.a.createElement("hr",{className:"bg-white dim mt1"}),l?l.map((function(e,t){return r.a.createElement(p,{def:e,key:t})})):""))},w=a(74),g=function(){return r.a.createElement("footer",{className:"pa2"},r.a.createElement("a",{href:"https://github.com/fabianvieri/decify",className:"link"},r.a.createElement(h.a,{icon:w.a,className:"f2 white"})))},y=a(75),N=a.n(y),v=a(76),_=a.n(v),k={particles:{number:{value:70,density:{enable:!0,value_area:800}}}},S=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onSearch=function(){var t=e.state.word;t&&e.client.define(t).then((function(t){e.setState({result:t})})).catch((function(){e.setState({result:"error"})}))},e.onChangeInput=function(t){e.setState({word:t.target.value})},e.state={word:"",result:{}},e.client=_()("6ece4df46b4e016cf8fb8e08758d7db27ee10f11"),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.client.define("owl").then((function(t){e.setState({result:t})}))}},{key:"componentDidCatch",value:function(){console.log("error")}},{key:"render",value:function(){var e=this.state.result;return r.a.createElement("main",{className:"mw8 w-100 ml-auto mr-auto"},r.a.createElement(N.a,{className:"particles",params:k}),r.a.createElement("header",{className:"white br2"},r.a.createElement("h1",{className:"f1"},"Decify"),r.a.createElement("img",{src:f.a,alt:"logo",className:"w4"}),r.a.createElement("h2",null,"find any english word you like, and get detailed information about it")),r.a.createElement(E,{onSearch:this.onSearch,onChange:this.onChangeInput}),r.a.createElement(b,{result:e}),r.a.createElement(g,null))}}]),a}(r.a.Component);a(258);l.a.render(r.a.createElement(S,null),document.getElementById("root"))},72:function(e,t,a){e.exports=a.p+"static/media/logo.57439860.png"},79:function(e,t,a){e.exports=a(259)},84:function(e,t,a){},89:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.f0c53576.chunk.js.map