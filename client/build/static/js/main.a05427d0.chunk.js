(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{59:function(e,t,r){},60:function(e,t,r){},67:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r.n(n),c=r(45),s=r.n(c),i=(r(59),r(60),r(17)),l=r(5),o=r(77),d=r(79),b=r(76),j=r(2),h=function(){return Object(j.jsxs)("div",{className:"bg-red-300",children:["hhsdhs",Object(j.jsx)("nav",{className:"bg-red px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600",children:Object(j.jsxs)("div",{className:"container flex flex-wrap justify-between items-center mx-auto",children:[Object(j.jsxs)("a",{href:"https://flowbite.com/",className:"flex items-center",children:[Object(j.jsx)("img",{src:"https://flowbite.com/docs/images/logo.svg",className:"mr-3 h-6 sm:h-9",alt:"Flowbite Logo"}),Object(j.jsx)("span",{className:"self-center text-xl font-semibold whitespace-nowrap dark:text-white",children:"Flowbite"})]}),Object(j.jsxs)("div",{className:"flex md:order-2",children:[Object(j.jsx)("button",{type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Get started"}),Object(j.jsxs)("button",{"data-collapse-toggle":"navbar-sticky",type:"button",className:"inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-sticky","aria-expanded":"false",children:[Object(j.jsx)("span",{className:"sr-only",children:"Open main menu"}),Object(j.jsx)("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})})]})]}),Object(j.jsx)("div",{className:"hidden justify-between items-center w-full md:flex md:w-auto md:order-1",id:"navbar-sticky",children:Object(j.jsxs)("ul",{className:"flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",className:"block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white","aria-current":"page",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",className:"block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",className:"block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",children:"Services"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",className:"block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",children:"Contact"})})]})})]})})]})},m=r(46),g=r(47),u=r(48),x=new(function(){function e(){Object(m.a)(this,e)}return Object(g.a)(e,[{key:"getProfile",value:function(){return Object(u.a)(this.getToken())}},{key:"loggedIn",value:function(){return!!this.getToken()}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.reload()}}]),e}()),p=r(13),O=r(49),f=r.n(O),v=[{name:"Richard Hendricks",url:"./img/richard.jpg"},{name:"Erlich Bachman",url:"./img/erlich.jpg"},{name:"Monica Hall",url:"./img/monica.jpg"},{name:"Jared Dunn",url:"./img/jared.jpg"},{name:"Dinesh Chugtai",url:"./img/dinesh.jpg"}];var y,w,k,N=function(){var e=v,t=Object(n.useState)(),r=Object(p.a)(t,2),a=r[0],c=r[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Damion&display=swap",rel:"stylesheet"}),Object(j.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Alatsi&display=swap",rel:"stylesheet"}),Object(j.jsx)("h1",{children:"React Tinder Card"}),Object(j.jsx)("div",{className:"cardContainer",children:e.map((function(e){return Object(j.jsx)(f.a,{className:"swipe",onSwipe:function(t){return r=t,n=e.name,console.log("removing: "+n),void c(r);var r,n},onCardLeftScreen:function(){return t=e.name,void console.log(t+" left the screen!");var t},children:Object(j.jsx)("div",{style:{backgroundImage:"url("+e.url+")"},className:"card",children:Object(j.jsx)("h3",{children:e.name})})},e.name)}))}),a?Object(j.jsxs)("h2",{className:"infoText",children:["You swiped ",a]}):Object(j.jsx)("h2",{className:"infoText"})]})},$=function(){return console.log("seeing home"),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(N,{})}),x.loggedIn()?Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"This is the Home page"})}):console.log("no")]})},S=r(40),I=r(50),C=r(27),T=r(32),H=r(80),L=r(33),_=r(78),M=(Object(_.a)(y||(y=Object(L.a)(["\n  mutation createOwner($name: String!, $username: String!,$password: String!, $age: Int, $interests: String!, $pet: [Pet]) {\n    createMatchup(name: $name, username: $username,password: $password, age: $age, interests: $interests, pet: $pet) {\n      _id\n      name\n      username\n      password\n      age\n      interests\n      pet\n    }\n  }\n"]))),Object(_.a)(w||(w=Object(L.a)(["\n  mutation createVote($petname: String!,$breed: String!, $age: Int, $nature: String!, $Gender: String!) {\n    createVote(petname:$petname, breed: $breed, age: $age, nature:$nature, gender:$ge) {\n      _id\n      pet_name\n      breed\n      age\n     nature\n      gender\n    }\n  }\n"]))),Object(_.a)(k||(k=Object(L.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"])))),D=function(e){var t=Object(l.g)(),r=Object(n.useState)({email:"",password:""}),a=Object(p.a)(r,2),c=a[0],s=a[1],i=Object(H.a)(M),o=Object(p.a)(i,2),d=o[0],b=o[1],h=b.error,m=b.data,g=function(e){var t=e.target,r=t.name,n=t.value;s(Object(T.a)(Object(T.a)({},c),{},Object(C.a)({},r,n)))},u=function(){var e=Object(I.a)(Object(S.a)().mark((function e(r){var n,a;return Object(S.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),console.log(c),e.prev=2,e.next=5,d({variables:Object(T.a)({},c)});case 5:n=e.sent,a=n.data,x.login(a.login.token),t("/Home"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0);case 14:s({email:"",password:""});case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("main",{className:"flex-row justify-center mb-4",children:Object(j.jsx)("div",{className:"col-12 col-lg-10",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("h4",{className:"card-header bg-dark text-light p-2",children:"Login"}),Object(j.jsxs)("div",{className:"card-body",children:[m?Object(j.jsx)("p",{children:"Successfully Logged in!"}):Object(j.jsxs)("form",{onSubmit:u,children:[Object(j.jsx)("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",value:c.email,onChange:g}),Object(j.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",value:c.password,onChange:g}),Object(j.jsx)("button",{className:"btn btn-block btn-info",style:{cursor:"pointer"},type:"submit",children:"Submit"})]}),h&&Object(j.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:h.message})]})]})})})},z=function(){return Object(j.jsx)("div",{children:x.loggedIn()?Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"This is the Chat Home page"})}):Object(l.a)("/Login")})},B=function(){return Object(j.jsx)("div",{children:x.loggedIn()?Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"This is the Chat page"})}):Object(l.a)("/Login")})},J=function(){return Object(j.jsx)("div",{children:x.loggedIn()?Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"This is the Profile page"}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"",onClick:function(e){e.preventDefault(),x.logout()},children:"Logout"})})]}):Object(l.a)("/Login")})},P=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(N,{})})},A=new o.a({uri:"/graphql",cache:new d.a});var E=function(){return Object(j.jsx)(b.a,{client:A,children:Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"flex-column justify-center align-center min-100-vh bg-primary",children:["/login"!==window.location.pathname?Object(j.jsx)(h,{}):null,Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{path:"/",element:Object(j.jsx)($,{})}),Object(j.jsx)(l.b,{path:"/login",element:Object(j.jsx)(D,{})}),Object(j.jsx)(l.b,{path:"/swipe",element:Object(j.jsx)(P,{})}),Object(j.jsx)(l.b,{path:"/chats",element:Object(j.jsx)(z,{})}),Object(j.jsx)(l.b,{path:"/chat/:ownerid",element:Object(j.jsx)(B,{})}),Object(j.jsx)(l.b,{path:"/profile/:ownerId",element:Object(j.jsx)(J,{})})]})})]})})})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(E,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.a05427d0.chunk.js.map