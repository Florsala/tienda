(this["webpackJsonpmi-tienda"]=this["webpackJsonpmi-tienda"]||[]).push([[0],{146:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(50),r=a.n(n),i=a(25),s=a(22),o=(a(146),a(110)),l=a.n(o),d=a(23),j=a(11),b=a(1),x=Object(c.createContext)(),u=function(e){var t=e.children,a=Object(c.useState)([]),n=Object(j.a)(a,2),r=n[0],i=n[1];Object(c.useEffect)((function(){console.log("products",r)}),[r]),Object(c.useEffect)((function(){null!==localStorage.getItem("Cart")&&i(JSON.parse(localStorage.getItem("Cart")))}),[]),Object(c.useEffect)((function(){localStorage.setItem("Cart",JSON.stringify(r))}),[r]);var s=function(){return r.reduce((function(e,t){return e+t.quantity*t.item.price}),0)},o={cart:r,total:r.length,quantity:r.quantity,addTotal:s,addItem:function(e){var t=Object(d.a)(r);t.some((function(t){return t.item.id===e.item.id}))?(t.find((function(t){return t.item.id===e.item.id})).quantity+=e.quantity,i(t)):i([].concat(Object(d.a)(r),[e]))},removeItem:function(e){var t=r.filter((function(t){return t.item.id!==e.item.id}));i(t),s()},clearCart:function(){i([])}};return Object(b.jsx)(x.Provider,{value:o,children:t})},O=x,m=function(){var e=Object(c.useContext)(O).total,t=Object(b.jsx)("span",{className:"cartNumber",children:e});return Object(b.jsx)("div",{className:"MallIcon",children:Object(b.jsxs)(i.b,{to:"/Cart",children:[Object(b.jsx)(l.a,{color:"white"}),0!==e&&t]})})},h=[{id:1,name:"*Navegaciones",address:"/category/Navegaciones"},{id:2,name:"*Terrestres",address:"/category/Terrestres"}],p=a(204),f=a(216),g=a(218),v=a(219),y=a(81),C=a.n(y),N=Object(p.a)({logo:{flexGrow:"1",cursor:"pointer"},NavLinks:{display:"flex",justifyContent:"center",flexGrow:"3",alignItems:"baseline"},link:{textDecoration:"none",color:"white",fontSize:"1.125rem"},category:{display:"flex",fontSize:"1rem",textTransform:"uppercase"}}),T=function(){var e=N();return Object(b.jsx)("nav",{children:Object(b.jsx)("div",{className:"NavBar ",children:Object(b.jsx)(f.a,{children:Object(b.jsxs)(g.a,{children:[Object(b.jsx)(v.a,{variant:"h5",className:e.logo,children:Object(b.jsxs)(i.b,{className:"Logo",to:"/",children:["TurisTienda",Object(b.jsx)("span",{children:Object(b.jsx)(C.a,{className:"snowFlake"})})]})}),Object(b.jsx)(v.a,{className:"NavOptions",children:Object(b.jsxs)("div",{className:e.NavLinks,children:[Object(b.jsx)(i.b,{to:"/Excursiones",className:e.link,children:"Excursiones"}),Object(b.jsx)("div",{className:e.category,children:h.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(i.c,{to:e.address,activeclassname:"active",children:e.name})},e.id)}))})]})}),Object(b.jsx)(m,{})]})})})})},I=a(4),S=a.n(I),k=a(63),z=a(6),w=a(220),A=a(223),E=a(222),q=a(221),B=a(212),F=a(214),D=function(e){var t=e.items;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsx)(F.a,{sx:{display:"flex",flexWrap:"wrap"},m:4,elevation:20,mt:10,children:Object(b.jsxs)(w.a,{sx:{width:380,paddingBottom:2,boxShadow:3},children:[Object(b.jsx)(q.a,{className:"cards",component:"img",height:"200",image:e.img,price:e.price,alt:"Tour"}),Object(b.jsxs)(E.a,{sx:{display:"flex",justifyContent:"center",textAlign:"center",flexDirection:"column"},children:[Object(b.jsx)(v.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.title}),Object(b.jsx)(v.a,{variant:"body2",color:"text.secondary",children:e.description})]}),Object(b.jsx)(A.a,{sx:{display:"flex",justifyContent:"center"},children:Object(b.jsxs)(F.a,{sx:{textAlign:"center"},children:[Object(b.jsx)(i.b,{to:"/tour/".concat(e.id),children:Object(b.jsx)(B.a,{sx:{backgroundColor:"#0893dd",fontWeight:700,color:"#f3e8e8",margin:2},size:"large",variant:"contained",children:"ver actividad"})}),Object(b.jsx)(v.a,{color:"text.primary",children:" Tarifa por pasajero"}),Object(b.jsxs)(v.a,{color:"text.primary",variant:"h6",sx:{fontWeight:700,padding:2},children:["AR$ ",e.price]})]})})]})},e.id)}))})},P=function(e){var t=e.items;return Object(b.jsx)("div",{className:"FlexCards",children:Object(b.jsx)(D,{items:t})})},R=a(208),H=a(215),L=a(113),V=a(30),W=a(122),M=Object(L.a)({apiKey:"AIzaSyADMCC6UxcnTx91TVSg1MHA1HiKR083HpA",authDomain:"mi-tienda-c0bc8.firebaseapp.com",projectId:"mi-tienda-c0bc8",storageBucket:"mi-tienda-c0bc8.appspot.com",messagingSenderId:"1030444476667",appId:"1:1030444476667:web:c411f67fb99b13b44da85e",measurementId:"G-6D22F6XGSH"}),G=Object(V.f)(M),$=(Object(W.a)(M),G),J=a.p+"static/media/andes.0452207c.jpg",K=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{className:"fotoInicio",src:J,loading:"lazy",alt:"Beagle"}),Object(b.jsx)(v.a,{color:"white",variant:"h4",className:"header",children:"Tu tienda de viajes en el Fin del mundo"})]})},U=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(!0),i=Object(j.a)(r,2),o=i[0],l=i[1],d=Object(s.g)().CategoryId;return Object(c.useEffect)(Object(z.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),t=d?Object(V.g)(Object(V.b)($,"products"),Object(V.h)("category","==",d)):Object(V.b)($,"products"),e.prev=2,e.next=5,Object(V.e)(t);case 5:a=e.sent,n(a.docs.map((function(e){return Object(k.a)(Object(k.a)({},e.data()),{},{id:e.id})}))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("error");case 12:l(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])}))),[d]),o?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"cargando..."}),Object(b.jsx)(R.a,{sx:{color:"#e8b610",zIndex:function(e){return e.zIndex.drawer+1}},open:!0,children:Object(b.jsx)(H.a,{color:"inherit"})})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)(K,{}),Object(b.jsx)(P,{items:a})]})},X=function(e){var t=e.Add,a=e.stock,c=e.counter,n=e.setCounter;return Object(b.jsxs)("div",{className:"buttonsBox",children:[Object(b.jsxs)(F.a,{sx:{display:"inline-flex"},m:3,children:[Object(b.jsx)(B.a,{variant:"contained",size:"x-small",className:"button",onClick:function(){c>1&&n(c-1)},children:"-"}),Object(b.jsxs)(v.a,{m:1,children:["cantidad de pasajeros: ",c]}),Object(b.jsx)(B.a,{variant:"contained",size:"small",className:"button",onClick:function(){c<a&&n(c+1)},children:"+"})]}),Object(b.jsx)(B.a,{className:"btnAgregar",variant:"contained",size:"medium",color:"secondary",pb:3,onClick:function(){t(),1===c?console.log("".concat(c," item agregado al carrito")):console.log("".concat(c," items agregados al carrito"))},children:"Comprar"})]})},Q=a(114),Y=a.n(Q),Z=Object(p.a)({boxContainer:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:30,marginBottom:30},boxPrice:{background:"linear-gradient(to right, #006cd4 , #80adc7)",border:"1px solid #00b8d4",padding:20,color:"#f9f4f4",borderRadius:5,margin:25,display:"flex",alignItems:"center",flexDirection:"column",width:"40%"},priceTitle:{display:"flex"},priceIcon:{padding:5}}),_=function(e){var t=e.item,a=Z(),n=Object(c.useState)(!1),r=Object(j.a)(n,2),s=r[0],o=r[1],l=Object(c.useContext)(O),d=l.addItem,x=l.addTotal,u=Object(c.useState)(1),m=Object(j.a)(u,2),h=m[0],p=m[1];return Object(c.useEffect)((function(){console.log(s,"agregado")}),[s]),Object(b.jsxs)(w.a,{sx:{paddingBottom:4},children:[Object(b.jsx)(q.a,{component:"img",height:"450",image:t.img,price:t.price,alt:"".concat(t.id)}),Object(b.jsxs)(E.a,{className:a.boxContainer,children:[Object(b.jsx)(v.a,{gutterBottom:!0,variant:"h4",component:"div",children:t.title}),Object(b.jsxs)(F.a,{sx:{textAlign:"left",backgroundColor:"#ffee58",width:"30%",margin:4,padding:4,borderRadius:2,borderBottom:"7px solid #79a9c7"},children:[Object(b.jsx)(v.a,{variant:"body1",color:"text.secondary",marginTop:2,children:t.description}),Object(b.jsx)(v.a,{variant:"body1",color:"text.secondary",marginTop:2,marginBottom:2,children:t.descripcion2}),Object(b.jsxs)(v.a,{variant:"body2",color:"text.secondary",children:["*",t.include]}),Object(b.jsx)(v.a,{variant:"body1",color:"text.secondary",marginTop:2,children:t.duration})]}),Object(b.jsxs)(F.a,{className:a.boxPrice,children:[Object(b.jsxs)(v.a,{variant:"h6",m:3,className:a.priceTitle,children:[Object(b.jsx)("span",{children:Object(b.jsx)(Y.a,{className:a.priceIcon})}),"Tarifa por pasajero"]}),Object(b.jsxs)(v.a,{variant:"h5",children:["AR$ ",t.price]}),!s&&Object(b.jsx)("div",{className:a.boxContainer,children:Object(b.jsx)(X,{stock:t.pax,Add:function(){o(!0),d({item:t,quantity:h}),x()},counter:h,setCounter:p})}),s&&Object(b.jsxs)("div",{className:a.boxContainer,children:[Object(b.jsx)(i.b,{to:"/cart",children:Object(b.jsx)(B.a,{color:"secondary",variant:"contained",m:5,size:"small",children:"Finalizar Compra"})}),Object(b.jsx)(i.b,{to:"/Excursiones",children:Object(b.jsx)(B.a,{variant:"outlined",color:"secondary",children:"Seguir comprando"})})]})]})]}),Object(b.jsx)(A.a,{className:a.boxContainer,children:Object(b.jsx)(i.b,{to:"/Excursiones",children:Object(b.jsx)(B.a,{color:"secondary",variant:"contained",m:5,size:"small",children:"Volver al inicio"})})})]})},ee=function(){var e=Object(c.useState)({}),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(!0),i=Object(j.a)(r,2),o=i[0],l=i[1],d=Object(s.g)().id;return Object(c.useEffect)((function(){var e=Object(V.c)($,"products",d);l(!0),Object(V.d)(e).then((function(e){n(Object(k.a)(Object(k.a)({},e.data()),{},{id:e.id}))})).catch((function(e){return console.log(e)})).finally((function(){return l(!1)}))}),[d]),o?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"cargando..."}),Object(b.jsx)(R.a,{sx:{color:"#e8b610",zIndex:function(e){return e.zIndex.drawer+1}},open:!0,children:Object(b.jsx)(H.a,{color:"inherit"})})]}):Object(b.jsx)("div",{children:Object(b.jsx)(_,{item:a})})},te=a(228),ae=a(121),ce=Object(ae.a)({palette:{primary:{light:"#62ebff",main:"#00b8d4",dark:"#0088a3",contrastText:"#000000"},secondary:{light:"#ffffcf",main:"#ffee58",dark:"#ffb300",contrastText:"#000000"}},typography:{fontFamily:"Poppins",fontWeightLight:200,fontWeightRegular:300,fontWeightMedium:400}}),ne=a(224),re=a(115),ie=a.n(re),se=a(116),oe=a.n(se),le=a.p+"static/media/pingui.26710e25.png",de=function(){var e="false",t=Object(c.useContext)(O),a=t.cart,n=t.clearCart,r=t.removeItem,s=t.addTotal,o=t.total,l=Object(b.jsxs)("div",{className:"cartContainer",children:[Object(b.jsx)(v.a,{variant:"h6",color:"text.secondary",marginTop:3,marginBottom:4,children:"\xa1Ups! Tu carrito est\xe1 vac\xedo..."}),Object(b.jsx)("img",{className:"cartPhoto",height:330,src:le,loading:"lazy",alt:"Pingui"}),Object(b.jsx)(i.b,{to:"/Excursiones",children:Object(b.jsxs)(B.a,{color:"secondary",variant:"contained",m:5,size:"small",children:["Ir a comprar",Object(b.jsx)(ie.a,{sx:{padding:1}})]})})]});return Object(b.jsxs)(ne.a,{children:[Object(b.jsx)(v.a,{variant:"h4",color:"text.primary",marginTop:12,marginBottom:5,className:"CartHeader",children:"\xa1Arma tus valijas! La Patagonia te espera..."}),0===o?l:Object(b.jsxs)(b.Fragment,{children:[a.map((function(e){return Object(b.jsx)("div",{className:"CartItems",children:Object(b.jsxs)(w.a,{className:"CartContent",children:[Object(b.jsxs)(E.a,{children:[Object(b.jsxs)(v.a,{variant:"h5",children:[e.item.title," "]}),Object(b.jsxs)(v.a,{variant:"h6",children:[" AR$",e.item.price]}),Object(b.jsxs)(v.a,{children:["Cantidad: ",e.quantity]}),Object(b.jsxs)(v.a,{children:["Precio total: $",e.item.price*e.quantity]})]}),Object(b.jsx)(B.a,{variant:"outlined",startIcon:Object(b.jsx)(oe.a,{}),onClick:function(){r(e)},children:"Eliminar"})]},e.item.id)})})),Object(b.jsx)(w.a,{className:"CartItems",children:Object(b.jsx)(E.a,{children:Object(b.jsxs)(v.a,{variant:"h6",children:["Total: AR$ ",s()]})})}),Object(b.jsxs)("div",{className:"CartButtons",children:[Object(b.jsx)(B.a,{onClick:function(){n(e="true")},children:"Vaciar mi carrito"}),e&&Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(i.b,{to:"/Excursiones",children:Object(b.jsx)(B.a,{color:"secondary",variant:"contained",m:5,size:"small",children:"Seguir comprando"})})}),Object(b.jsx)(i.b,{to:"/checkOut",children:Object(b.jsx)(B.a,{color:"primary",variant:"contained",m:5,size:"small",children:"Finalizar compra"})})]})]})]})},je=a(209),be=a(227),xe=a(211),ue=a(205),Oe=a(207);function me(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),i=Object(j.a)(r,2),s=i[0],o=i[1],l=Object(c.useState)(""),x=Object(j.a)(l,2),u=x[0],m=x[1],h=Object(c.useState)(""),p=Object(j.a)(h,2),f=p[0],g=p[1],y=Object(c.useState)(""),C=Object(j.a)(y,2),N=C[0],T=C[1],I=Object(c.useState)(""),S=Object(j.a)(I,2),k=S[0],z=S[1],w=Object(c.useState)(""),A=Object(j.a)(w,2),E=A[0],q=A[1],D=Object(c.useState)(""),P=Object(j.a)(D,2),R=P[0],H=P[1],L=Object(c.useState)(""),W=Object(j.a)(L,2),M=W[0],G=W[1],$=Object(c.useState)(""),J=Object(j.a)($,2),K=J[0],U=J[1],X=Object(c.useState)(!1),Q=Object(j.a)(X,2),Y=Q[0],Z=Q[1],_=Object(c.useContext)(O),ee=_.cart,te=_.addTotal,ae=_.clearCart,ce=te(),ne=new Date;return Object(b.jsxs)(F.a,{m:15,component:"form",sx:{"& .MuiTextField-root":{m:3,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(je.a,{required:!0,id:"standard-required",type:"text",label:"Nombre",autoComplete:"Nombre",variant:"standard",value:a,onChange:function(e){return n(e.target.value)}}),Object(b.jsx)(je.a,{id:"standard-required",type:"text",label:"E-mail",autoComplete:"E-mail",variant:"standard",value:s,onChange:function(e){return o(e.target.value)}}),Object(b.jsx)(je.a,{id:"standard-required",label:"Direccion",type:"address",autoComplete:"Direcci\xf3n",variant:"standard",value:u,onChange:function(e){return m(e.target.value)}}),Object(b.jsx)(je.a,{id:"standard",type:"text",label:"Alojamiento",autoComplete:"Alojamiento",variant:"standard",helperText:"Hotel donde estar\xe1 alojado",title:"Si a\xfan no sabe d\xf3nde estar\xe1 alojado puede informarlo luego",value:N,onChange:function(e){return T(e.target.value)}}),Object(b.jsx)(je.a,{id:"standard-required",type:"tel",label:"Tel\xe9fono",variant:"standard",value:f,pattern:"\\([0-9]{3}\\) [0-9]{3}[ -][0-9]{4}",title:"Inserte su n\xfamero con c\xf3digo de \xe1rea",required:!0,onChange:function(e){return g(e.target.value)}}),Object(b.jsxs)("div",{children:[Object(b.jsxs)(be.a,{sx:{m:3,minWidth:180},children:[Object(b.jsx)(xe.a,{id:"demo-simple-select-label",children:"Tarjeta de cr\xe9dito"}),Object(b.jsxs)(ue.a,{labelId:"demo-simple-select-label",id:"standard-required",value:k,label:"Tarjeta de cr\xe9dito",onChange:function(e){z(e.target.value)},children:[Object(b.jsx)(Oe.a,{value:1,children:"Visa"}),Object(b.jsx)(Oe.a,{value:2,children:"MasterCard"}),Object(b.jsx)(Oe.a,{value:3,children:"American Express"})]})]}),Object(b.jsx)(je.a,{type:"text",label:"n\xfamero de tarjeta",id:"standard",value:E,placeholder:"0000 0000 0000 0000",title:"Inserte su n\xfamero de tarjeta de cr\xe9dito",onChange:function(e){return q(e.target.value)}}),Object(b.jsx)(je.a,{type:"text",label:"Vencimiento",id:"Vencimiento",value:R,placeholder:"00/00/0000",title:"Inserte su n\xfamero de tarjeta de cr\xe9dito",required:!0,onChange:function(e){return H(e.target.value)}}),Object(b.jsx)(je.a,{type:"text",label:"Cod. seguridad",id:"Cod. seguridad",value:M,placeholder:"",title:"Inserte el c\xf3digo de seguridad",required:!0,onChange:function(e){return G(e.target.value)}})]})]}),Object(b.jsx)(B.a,{disabled:!a||!u||!s||!f,onClick:function(){Z(!0),ae();var e={buyer:{nombre:a,email:s,direccion:u,telefono:f},items:{cart:Object(d.a)(ee)},date:{fecha:ne.toLocaleString()},total:{total:ce}},t=Object(V.f)(),c=Object(V.b)(t,"orders");Object(V.a)(c,e).then((function(e){var t=e.id;U(t),n(""),o(""),m(""),g(""),T(""),z(""),H(""),q(""),G("")})).catch((function(e){console.error(e)}))},color:"secondary",variant:"contained",m:5,size:"small",children:"Enviar datos"}),Y&&Object(b.jsxs)(F.a,{m:5,className:"finCompra",children:[Object(b.jsx)(v.a,{p:5,variant:"h5",children:"Gracias por tu compra!"}),Object(b.jsxs)(v.a,{p:3,variant:"body1",children:["Tu iD de compra es ",K]})]})]})}var he=a(117),pe=a.n(he),fe=a(118),ge=a.n(fe),ve=a(119),ye=a.n(ve),Ce=a(120),Ne=a.n(Ce),Te=function(){return Object(b.jsxs)("div",{className:"footer",children:[Object(b.jsxs)("div",{className:"footerHeader",children:[Object(b.jsx)(C.a,{className:"footerLogo"}),Object(b.jsx)("h6",{className:"footerText",children:"TurisTienda"})]}),Object(b.jsxs)("div",{className:"footerIcons",children:[Object(b.jsx)(pe.a,{className:"icon1"}),Object(b.jsx)(ge.a,{className:"icon2"}),Object(b.jsx)(ye.a,{className:"icon3"}),Object(b.jsx)(Ne.a,{className:"icon4"})]}),Object(b.jsx)("div",{className:"footerBottom",children:Object(b.jsx)("p",{children:"\xa9 Turistienda 2022. Amamos viajar!"})})]})};var Ie=function(){return Object(b.jsx)(te.a,{theme:ce,className:"App",children:Object(b.jsx)(i.a,{children:Object(b.jsxs)(u,{children:[Object(b.jsx)(T,{}),Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{path:"/",element:Object(b.jsx)(U,{})}),Object(b.jsx)(s.a,{path:"/Excursiones",element:Object(b.jsx)(U,{})}),Object(b.jsx)(s.a,{path:"/category/:CategoryId",element:Object(b.jsx)(U,{})}),Object(b.jsx)(s.a,{path:"/tour/:id",element:Object(b.jsx)(ee,{})}),Object(b.jsx)(s.a,{path:"/cart",element:Object(b.jsx)(de,{})}),Object(b.jsx)(s.a,{path:"/checkOut",element:Object(b.jsx)(me,{})})]}),Object(b.jsx)(Te,{})]})})})};r.a.render(Object(b.jsx)(Ie,{}),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.6f03d8a5.chunk.js.map