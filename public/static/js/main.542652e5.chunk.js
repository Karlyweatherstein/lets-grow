(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{74:function(e,t,n){},76:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),r=n(59),s=n.n(r),i=(n(74),n(6)),o=n(12),l=n(5),j=n(62),d=n(90),b=n(92),u=n(89),h=n(60),O=n(11),p=n(63),m=n(31),x="ADD_TO_CART",g="UPDATE_CART_QUANTITY",v=function(e,t){switch(t.type){case"UPDATE_PRODUCTS":return Object(i.a)(Object(i.a)({},e),{},{products:Object(m.a)(t.products)});case"UPDATE_CATEGORIES":return Object(i.a)(Object(i.a)({},e),{},{categories:Object(m.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(i.a)(Object(i.a)({},e),{},{currentCategory:t.currentCategory});case x:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(m.a)(e.cart),[t.product])});case"ADD_MULTIPLE_TO_CART":return Object(i.a)(Object(i.a)({},e),{},{cart:[].concat(Object(m.a)(e.cart),Object(m.a)(t.products))});case"REMOVE_FROM_CART":var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(i.a)(Object(i.a)({},e),{},{cartOpen:n.length>0,cart:n});case g:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"CLEAR_CART":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!e.cartOpen});default:return e}};var y,f,N,w=n(1),k=["value"],_=Object(a.createContext)(),S=_.Provider,C=function(e){e.value;var t,n=Object(p.a)(e,k),c=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(a.useReducer)(v,t)),r=Object(O.a)(c,2),s=r[0],o=r[1];return Object(w.jsx)(S,Object(i.a)({value:[s,o]},n))},T=(n(76),n(26)),P=n(28),E=n(41),F=n(86),A=n(14),D=n(91),I=Object(D.a)(y||(y=Object(A.a)(["\n  mutation login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),L=(Object(D.a)(f||(f=Object(A.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),Object(D.a)(N||(N=Object(A.a)(["\n  mutation addUser(\n    $email: String!\n    $username: String!\n    $password: String!\n  ) {\n    addUser(\n      email: $email\n      username: $username\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])))),$=n(36),Q=n(37),R=n(46),U=n.n(R),H=new(function(){function e(){Object($.a)(this,e)}return Object(Q.a)(e,[{key:"getProfile",value:function(){return U()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpire(e)}},{key:"isTokenExpire",value:function(e){try{return U()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}());var M,q,B,W,G,Y,J,z,K=function(e){var t=Object(a.useState)({username:"",password:""}),n=Object(O.a)(t,2),c=n[0],r=n[1],s=Object(F.a)(I),l=Object(O.a)(s,2),j=l[0],d=(l[1].error,function(){var e=Object(E.a)(Object(P.a)().mark((function e(t){var n,a;return Object(P.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j({variables:{username:c.username,password:c.password}});case 4:n=e.sent,a=n.data.login.token,H.login(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()),b=function(e){var t=e.target,n=t.name,a=t.value;r(Object(i.a)(Object(i.a)({},c),{},Object(T.a)({},n,a)))};return Object(w.jsxs)("div",{className:"login",children:[Object(w.jsx)("div",{className:"login-title",children:Object(w.jsx)("h1",{className:"titleFonts",children:"Login"})}),Object(w.jsx)("div",{className:"signup-box mx-auto paragraphFonts",children:Object(w.jsxs)("form",{onSubmit:d,children:[Object(w.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"Enter your username!",onChange:b}),Object(w.jsx)("input",{type:"text",name:"password",id:"password",placeholder:"Enter your password!",onChange:b}),Object(w.jsx)("button",{type:"submit",id:"submit-btn",class:"submit-btn",children:"Submit"})]})}),Object(w.jsx)("div",{className:"community paragraphFonts",children:Object(w.jsxs)("h2",{children:["Not part of the community?",Object(w.jsx)(o.b,{to:"/Signup",children:" Join now!"})]})})]})},V=n(94),X=(Object(D.a)(M||(M=Object(A.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),Object(D.a)(q||(q=Object(A.a)(["\n {\n  trainers {\n    name\n    description\n    image\n  }\n}\n"])))),Z=Object(D.a)(B||(B=Object(A.a)(["\nquery Query($id: ID!) {\n  trainer(_id: ID) {\n    name\n    description\n    image\n    products {\n      name\n      description\n      quantity\n      price\n      image\n    }\n  }\n}\n"])));Object(D.a)(W||(W=Object(A.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),Object(D.a)(G||(G=Object(A.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(D.a)(Y||(Y=Object(A.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"]))),Object(D.a)(J||(J=Object(A.a)(["\n  {\n    user {\n      username\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),Object(D.a)(z||(z=Object(A.a)(["\n  {\n    categories {\n      _id\n      name\n      trainer {\n        name\n        description\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"])));function ee(e,t,n){return new Promise((function(a,c){var r,s,i,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(c){switch(r=o.result,s=r.transaction(e,"readwrite"),i=s.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":i.put(n),a(n);break;case"get":var l=i.getAll();l.onsuccess=function(){a(l.result)};break;case"delete":i.delete(n._id);break;default:console.log("No valid method")}s.oncomplete=function(){r.close()}}}))}var te=function(e){var t=Object(V.a)(Z),n=t.data,c=t.loading,r=t.error;console.log({error:r,loading:c,data:n});var s=Object(a.useContext)(_),o=Object(O.a)(s,2),l=o[0],j=o[1],d=(e.name,e.image,e._id),b=(e.quantity,e.price,e.description,l.cart),u=function(){var t=b.find((function(e){return e._id===d}));t?(j({type:g,_id:d,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),ee("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(j({type:x,product:Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})}),ee("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})))};return H.loggedIn()?Object(w.jsx)("div",{className:"shop",children:Object(w.jsxs)("div",{className:"trainers",children:[Object(w.jsx)("div",{class:"trainers-title",children:Object(w.jsx)("h2",{className:"titleFonts",children:"Shop!"})}),Object(w.jsxs)("div",{className:"trainer-container paragraphFonts",children:[Object(w.jsxs)("div",{className:"trainers-card-shop mx-3",children:[Object(w.jsx)("div",{className:"img-container",children:Object(w.jsx)("img",{alt:"product",src:"https://picsum.photos/id/24/269/194"})}),Object(w.jsx)("h3",{children:"My E-Book"}),Object(w.jsx)("p",{children:"Come read up on all of the magical ways you can be more like me!`(Possible tips on underwater basket weaving included)`"}),Object(w.jsx)("p",{children:"Price: 2000.00"}),Object(w.jsx)("p",{children:"Quantity: THE ONLY ONE`(or is it)`"}),Object(w.jsx)("button",{onClick:u,id:"cart-btn-1",className:"cart-btn",children:"Add to cart"})]}),Object(w.jsxs)("div",{className:"trainers-card-shop mx-3",children:[Object(w.jsx)("div",{className:"img-container",children:Object(w.jsx)("img",{alt:"product",src:"https://picsum.photos/id/129/269/194"})}),Object(w.jsx)("h3",{children:"Book a Session With Me!"}),Object(w.jsx)("p",{children:"Lets hangout! What else do you need?!`(Possible tips on underwater basket weaving included)`"}),Object(w.jsx)("p",{children:"Price: 2.00"}),Object(w.jsx)("p",{children:"Quantity: Unlimited"}),Object(w.jsx)("button",{onClick:u,id:"cart-btn-2",className:"cart-btn",children:"Add to cart"})]}),Object(w.jsxs)("div",{className:"trainers-card-shop mx-3",children:[Object(w.jsx)("div",{className:"img-container",children:Object(w.jsx)("img",{alt:"product",src:"https://picsum.photos/id/1025/269/194"})}),Object(w.jsx)("h3",{children:"Pictures of My Dog!"}),Object(w.jsx)("p",{children:"She is a small beagle with one ear... come on you know you want the picture of a one eared beagle"}),Object(w.jsx)("p",{children:"Price: Priceless"}),Object(w.jsx)("p",{children:"Quantity: Unlimited"}),Object(w.jsx)("button",{onClick:u,id:"cart-btn-3",className:"cart-btn",children:"Add to cart"})]})]})]})}):Object(w.jsx)("div",{className:"shop",children:Object(w.jsxs)("div",{className:"trainers",children:[Object(w.jsx)("div",{class:"trainers-title",children:Object(w.jsx)("h2",{className:"titleFonts",children:"Shop!"})}),Object(w.jsxs)("div",{className:"trainer-container paragraphFonts",children:[Object(w.jsxs)("div",{className:"trainers-card-shop mx-3",children:[Object(w.jsx)("div",{className:"img-container",children:Object(w.jsx)("img",{alt:"product",src:"https://picsum.photos/id/24/269/194"})}),Object(w.jsx)("h3",{children:"My E-Book"}),Object(w.jsx)("p",{children:"Come read up on all of the magical ways you can be more like me!`(Possible tips on underwater basket weaving included)`"}),Object(w.jsx)("p",{children:"Price: 2000.00"}),Object(w.jsx)("p",{children:"Quantity: THE ONLY ONE`(or is it)`"})]}),Object(w.jsxs)("div",{className:"trainers-card-shop mx-3",children:[Object(w.jsx)("div",{className:"img-container",children:Object(w.jsx)("img",{alt:"product",src:"https://picsum.photos/id/129/269/194"})}),Object(w.jsx)("h3",{children:"Book a Session With Me!"}),Object(w.jsx)("p",{children:"Lets hangout! What else do you need?!`(Possible tips on underwater basket weaving included)`"}),Object(w.jsx)("p",{children:"Price: 2.00"}),Object(w.jsx)("p",{children:"Quantity: Unlimited"})]}),Object(w.jsxs)("div",{className:"trainers-card-shop mx-3",children:[Object(w.jsx)("div",{className:"img-container",children:Object(w.jsx)("img",{alt:"product",src:"https://picsum.photos/id/1025/269/194"})}),Object(w.jsx)("h3",{children:"Pictures of My Dog!"}),Object(w.jsx)("p",{children:"She is a small beagle with one ear... come on you know you want the picture of a one eared beagle"}),Object(w.jsx)("p",{children:"Price: Priceless"}),Object(w.jsx)("p",{children:"Quantity: Unlimited"})]})]})]})})};var ne=function(){var e=Object(a.useState)({email:"",username:"",password:""}),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(F.a)(L),s=Object(O.a)(r,1)[0],l=function(){var e=Object(E.a)(Object(P.a)().mark((function e(t){var a,c;return Object(P.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s({variables:{email:n.email,username:n.username,password:n.password}});case 3:a=e.sent,c=a.data.addUser.token,H.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,a=t.name,r=t.value;c(Object(i.a)(Object(i.a)({},n),{},Object(T.a)({},a,r)))};return Object(w.jsxs)("div",{className:"signup",children:[Object(w.jsx)("div",{className:"signup-title",children:Object(w.jsx)("h1",{className:"titleFonts",children:"Signup"})}),Object(w.jsx)("div",{className:"signup-box mx-auto paragraphFonts",children:Object(w.jsxs)("form",{onSubmit:l,children:[Object(w.jsx)("input",{type:"text",name:"email",id:"email",placeholder:"Enter your email!",onChange:j}),Object(w.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"Enter your username!",onChange:j}),Object(w.jsx)("input",{type:"text",name:"password",id:"password",placeholder:"Enter your password!",onChange:j}),Object(w.jsx)("button",{type:"submit",id:"submit-btn",className:"submit-btn",children:"Submit"})]})}),Object(w.jsx)("div",{className:"community paragraphFonts",children:Object(w.jsxs)("h2",{children:["Already part of the community?",Object(w.jsx)(o.b,{to:"/login",children:" Login!"})]})})]})};var ae=function(e){Object(V.a)(X).data;var t=e.image,n=e.name,a=(e._id,e.description),c=e.key;return Object(w.jsxs)("li",{children:[Object(w.jsx)(o.b,{to:"/shop",children:Object(w.jsx)("div",{className:"trainers",children:Object(w.jsx)("div",{className:"trainer-container paragraphFonts",children:Object(w.jsxs)("div",{className:"trainers-card mx-3",children:[Object(w.jsx)("div",{className:"img-container",children:Object(w.jsx)("img",{alt:n,src:"".concat(t)})}),Object(w.jsx)("p",{children:n}),Object(w.jsx)("p",{children:a})]})})})}),Object(w.jsx)("div",{})]},c)};var ce=function(e){var t=Object(V.a)(X),n=t.loading,a=t.data;return console.log("hello world",a),Object(w.jsxs)("div",{className:"trainers",children:[Object(w.jsx)("div",{className:"trainers-title",children:Object(w.jsx)("h2",{className:"titleFonts",children:"Meet the Trainers!"})}),a?Object(w.jsx)("div",{className:"trainer-container paragraphFonts",children:a.trainers.map((function(e){return Object(w.jsx)(ae,{_id:e._id,image:e.image,name:e.name,description:e.description},e._id)}))}):Object(w.jsx)("h3",{children:"You haven't added any trainer yet!"}),n?Object(w.jsx)("img",{src:"",alt:"loading"}):null]})};var re=function(){return Object(w.jsxs)("div",{className:"hero",children:[Object(w.jsx)("h1",{className:"titleFonts heroTitle",children:"Let's Grow!"}),Object(w.jsx)("div",{className:"subjectSelect",children:Object(w.jsx)("div",{className:"subjectBtn",children:Object(w.jsx)(o.b,{to:"/trainers",children:Object(w.jsx)("button",{className:"submit-button paragraphFonts",children:"Meet the Trainers!"})})})}),Object(w.jsx)("p",{className:"paragraphFonts heroParagraph",children:'Which community are you wanting to grow in? Select the "About" tab to learn more about us or select the button above to meet our trainers!'})]})},se=n.p+"static/media/email-icon.72609bca.png",ie=n.p+"static/media/insta-icon.d76cc387.png";var oe=function(){return Object(w.jsx)("footer",{className:"paragraphFonts",children:Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:"Find us online!"}),Object(w.jsx)("li",{children:Object(w.jsxs)("a",{href:"https://github.com/Karlyweatherstein",children:[Object(w.jsx)("i",{"aria-hidden":"true"}),Object(w.jsx)("img",{className:"icons",src:ie,alt:"insta"})]})}),Object(w.jsx)("li",{children:Object(w.jsxs)("a",{href:"mailto: karlyweatherstein@gmail.com",children:[Object(w.jsx)("i",{"aria-hidden":"true"}),Object(w.jsx)("img",{className:"icons",src:se,alt:"Email"})]})})]})})};var le=function(){return Object(w.jsxs)("div",{className:"about",children:[Object(w.jsx)("h1",{className:"titleFonts",children:"About Us"}),Object(w.jsx)("div",{className:"about-box",children:Object(w.jsx)("p",{className:"paragraphFonts",children:"Welcome! Lets Grow is about helping people, like you, grow their knowledge by providing materials and trainers for whatever kind of help you may need! We allow you to control how much or how little guidance you will need to grow; whether that be a few guides, tips, or a 1 on 1 with a trainer - it is all up to you! So lets grow together!"})})]})},je=n(53),de=n(51),be=n.p+"static/media/lg-logo.fd5e1f11.png";var ue=function(){var e=function(e){Object(je.a)(a,e);var n=Object(de.a)(a);function a(){var e;return Object($.a)(this,a),(e=n.call(this)).state={isHidden:!0},e}return Object(Q.a)(a,[{key:"toggleHidden",value:function(){this.setState({isHidden:!this.state.isHidden})}},{key:"render",value:function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("button",{onClick:this.toggleHidden.bind(this),className:"shoppingIcon",children:Object(w.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})}),!this.state.isHidden&&Object(w.jsx)(t,{})]})}}]),a}(c.a.Component),t=function(e){Object(je.a)(n,e);var t=Object(de.a)(n);function n(){var e;return Object($.a)(this,n),(e=t.call(this)).state={isHidden:!0},e}return Object(Q.a)(n,[{key:"toggleHidden",value:function(){this.setState({isHidden:!this.state.isHidden})}},{key:"render",value:function(){return Object(w.jsx)("div",{className:"shoppingModal",children:Object(w.jsx)("h1",{children:"Nothing in your shopping cart!"})})}}]),n}(c.a.Component);return Object(w.jsx)("header",{children:Object(w.jsx)("nav",{children:H.loggedIn()?Object(w.jsxs)("nav",{className:"paragraphFonts",children:[Object(w.jsx)("img",{className:"logo",src:be,alt:"logo"}),Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{className:"navLinks",children:Object(w.jsx)(o.b,{to:"/",children:"Home"})}),Object(w.jsx)("li",{className:"navLinks",children:Object(w.jsx)(o.b,{to:"/about",children:"About"})}),Object(w.jsx)("li",{className:"navLinks",children:Object(w.jsx)(o.b,{to:"/",onClick:function(){return H.logout()},children:"Logout"})}),Object(w.jsx)("li",{className:"navLinks",children:Object(w.jsx)("div",{className:"cart-closed cart",children:Object(w.jsx)(e,{})})})]})]}):Object(w.jsxs)("nav",{className:"paragraphFonts",children:[Object(w.jsx)("img",{className:"logo",src:be,alt:"logo"}),Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:Object(w.jsx)(o.b,{to:"/",children:"Home"})}),Object(w.jsx)("li",{children:Object(w.jsx)(o.b,{to:"/about",children:"About"})}),Object(w.jsx)("li",{children:Object(w.jsx)(o.b,{to:"/login",children:"Login"})})]})]})})})},he=Object(j.a)({uri:"http://localhost:3001/graphql"}),Oe=Object(h.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),pe=new d.a({link:Oe.concat(he),cache:new b.a});var me=function(){return Object(w.jsx)(u.a,{client:pe,children:Object(w.jsx)(o.a,{children:Object(w.jsx)("div",{className:"App background",children:Object(w.jsxs)(C,{children:[Object(w.jsx)(ue,{}),Object(w.jsxs)(l.c,{children:[Object(w.jsx)(l.a,{path:"/",element:Object(w.jsx)(re,{})}),Object(w.jsx)(l.a,{path:"/about",element:Object(w.jsx)(le,{})}),Object(w.jsx)(l.a,{path:"/login",element:Object(w.jsx)(K,{})}),Object(w.jsx)(l.a,{path:"/signup",element:Object(w.jsx)(ne,{})}),Object(w.jsx)(l.a,{path:"/trainers",element:Object(w.jsx)(ce,{})}),Object(w.jsx)(l.a,{path:"/shop",element:Object(w.jsx)(te,{})})]}),Object(w.jsx)(oe,{})]})})})})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,95)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(me,{})})),xe()}},[[79,1,2]]]);
//# sourceMappingURL=main.542652e5.chunk.js.map