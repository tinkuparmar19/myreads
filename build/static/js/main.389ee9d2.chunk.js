(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(36)},27:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(20),c=n.n(o),l=n(6),i=n(7),s=n(9),u=n(8),h=n(10),f=n(17),m="https://reactnd-books-api.udacity.com",b=localStorage.token;b||(b=localStorage.token=Math.random().toString(36).substr(-8));var d={Accept:"application/json",Authorization:b},p=function(e,t){return fetch("".concat(m,"/books/").concat(e.id),{method:"PUT",headers:Object(f.a)({},d,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},k=function(e){return fetch("".concat(m,"/search"),{method:"POST",headers:Object(f.a)({},d,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},y=(n(27),n(0)),v=n(12);function g(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).updateShelf=function(e){n.props.changeShelf(n.props.book,e.target.value)},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this.props,n=t.book,a=t.books,o=n.title?n.title:"no title",c="none",l=g(a);try{for(l.s();!(e=l.n()).done;){var i=e.value;if(i.id===n.id){c=i.shelf;break}}}catch(s){l.e(s)}finally{l.f()}return r.a.createElement("div",{className:"book"},r.a.createElement("div",{className:"book-top"},r.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(n.imageLinks.thumbnail,")")}}),r.a.createElement("div",{className:"book-shelf-changer"},r.a.createElement("select",{onChange:this.updateShelf,defaultValue:c},r.a.createElement("option",{value:"move",disabled:!0},"Move to..."),r.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),r.a.createElement("option",{value:"wantToRead"},"Want to Read"),r.a.createElement("option",{value:"read"},"Read"),r.a.createElement("option",{value:"none"},"None")))),r.a.createElement("div",{className:"book-title"},o),n.authors.map(function(e,t){return r.a.createElement("div",{className:"book-authors",key:t},e)}))}}]),t}(r.a.Component),S=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",Books:[],err:!1},n.updataQuery=function(e){n.setState({query:e}),e?k(e.trim(),20).then(function(e){e.length>0?n.setState({Books:e,err:!1}):n.setState({Books:[],err:!0})}):n.setState({Books:[],err:!1})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.Books,a=t.query,o=t.err,c=this.props,l=c.changeShelf,i=c.books;return r.a.createElement("div",{className:"search-books"},r.a.createElement("div",{className:"search-books-bar"},r.a.createElement(v.b,{to:"/",className:"close-search"}," close"),r.a.createElement("div",{className:"search-books-input-wrapper"},r.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:a,onChange:function(t){return e.updataQuery(t.target.value)}}))),r.a.createElement("div",{className:"search-books-results"},n.length>0&&r.a.createElement("div",null,r.a.createElement("p",null,n.length," items"),r.a.createElement("ol",{className:"books-grid"},n.map(function(e){return r.a.createElement(j,{book:e,key:e.id,changeShelf:l,books:i})}))),o&&r.a.createElement("p",null,"try again")))}}]),t}(r.a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.books,n=e.changeShelf;return r.a.createElement("ol",{className:"books-grid"},t.map(function(e){return r.a.createElement(j,{book:e,key:e.id,changeShelf:n,books:t})}))}}]),t}(r.a.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.books,n=e.changeShelf;return r.a.createElement("div",{className:"list-books-content"},[{type:"currentlyReading",title:"Currently Reading"},{type:"wantToRead",title:"Want To Read"},{type:"read",title:"Read"}].map(function(e,a){var o=t.filter(function(t){return t.shelf===e.type});return r.a.createElement("div",{className:"bookshelf",key:a},r.a.createElement("h2",{className:"bookshelf-title"},e.title),r.a.createElement("div",{className:"bookshelf-books"},r.a.createElement(O,{books:o,changeShelf:n})))}))}}]),t}(r.a.Component),w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={books:[]},n.changeShelf=function(e,t){p(e,t).then(function(a){e.shelf=t,n.setState(function(t){return{books:t.books.filter(function(t){return t.id!==e.id}).concat(e)}})})},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(m,"/books"),{headers:d}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){e.setState(function(){return{books:t}})})}},{key:"render",value:function(){var e=this,t=this.state.books;return r.a.createElement("div",{className:"app"},r.a.createElement(y.a,{path:"/search",render:function(){return r.a.createElement(S,{changeShelf:e.changeShelf,books:t})}}),r.a.createElement(y.a,{exact:!0,path:"/",render:function(){return r.a.createElement("div",{className:"list-books"},r.a.createElement("div",{className:"list-books-title"},r.a.createElement("h1",null,"MyReads")),r.a.createElement(N,{books:t,changeShelf:e.changeShelf}),r.a.createElement("div",{className:"open-search"},r.a.createElement(v.b,{to:"/search"}," Add a book")))}}))}}]),t}(r.a.Component);n(34);c.a.render(r.a.createElement(v.a,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[22,2,1]]]);
//# sourceMappingURL=main.389ee9d2.chunk.js.map