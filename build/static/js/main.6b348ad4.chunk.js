(this["webpackJsonp50-50"]=this["webpackJsonp50-50"]||[]).push([[0],{64:function(e,t,r){},65:function(e,t,r){},78:function(e,t,r){"use strict";r.r(t);var n=r(4),c=r(2),s=r(24),a=r.n(s),d=(r(64),r(65),r(57)),i=r(26),j=r(92);function l(e){var t=e.ticketsNormalized,r=Object(c.useState)([]),s=Object(i.a)(r,2),a=s[0],l=s[1],b=Object(c.useState)("GOOD LUCK G!!!"),o=Object(i.a)(b,2),O=o[0],h=o[1],u=Object(c.useState)(0),x=Object(i.a)(u,2),f=x[0],g=x[1],m=Object(c.useState)([]),p=Object(i.a)(m,2),k=p[0],v=p[1],y=Object(c.useState)(!1),A=Object(i.a)(y,2),C=A[0],E=A[1];Object(c.useEffect)((function(){var e=[];Object.keys(t).map((function(r){for(var n=t[r],c=1;c<=n;c++)e.push(r)})),e.sort((function(){return Math.random()-.5})),v(e),g(e.length)}),[t]);return Object(n.jsxs)("center",{children:[Object(n.jsx)("br",{})," ",Object(n.jsx)("br",{}),Object(n.jsx)("table",{width:"420px",style:{backgroundColor:"rgba(255,255,255,0.7)",border:"1px solid black"},children:Object(n.jsx)("tbody",{children:Object(n.jsx)("tr",{children:Object(n.jsx)("td",{align:"center",children:Object(n.jsx)("h1",{children:O})})})})}),Object(n.jsx)("br",{}),Object(n.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){g(k.length);var e=Math.floor(Math.random()*Math.floor(f));console.log(e);var t=k[e];h(t),l([].concat(Object(d.a)(a),[t])),k.splice(e,1)},children:a.length>0?"DRAW WINNER":"START "}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsxs)("table",{width:"480x",style:{backgroundColor:"rgba(255,255,255,0.7)",border:"1px solid black"},children:[Object(n.jsx)("thead",{children:Object(n.jsx)("tr",{children:Object(n.jsx)("td",{align:"center",children:"WINNERS"})})}),Object(n.jsx)("tbody",{children:Object.values(a).map((function(e,t){return Object(n.jsx)("tr",{children:Object(n.jsxs)("td",{align:"center",children:[t+1," ",e]})},e+t)}))})]}),Object(n.jsx)("br",{})," ",Object(n.jsx)("br",{}),Object(n.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){E(!C)},children:"SHOW ENTRIES"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),C?Object(n.jsxs)("table",{width:"480x",style:{backgroundColor:"rgba(255,255,255,0.7)",border:"1px solid black"},children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{align:"left",children:[Object(n.jsx)("td",{align:"left",children:"Address"}),Object(n.jsx)("td",{align:"right",children:"Tickets"})]})}),Object(n.jsx)("tbody",{children:Object.keys(t).map((function(e,r){return Object(n.jsxs)("tr",{align:"right",children:[Object(n.jsx)("td",{align:"center",children:e}),Object(n.jsx)("td",{children:t[e]})]},e+r)}))})]}):null]})]})}var b=r(20),o=["0xfae4a35305a1dced8303029ac05e51386f667ed8","0xE7408598DB157Cd4A24Bc26B579910AF36a72fad","0x40e39743dBcb30c7Fc4152F57F29Cd22D9fc7932","0x8AE31751A226B0C5357a377E53B6DB12bDF5e64d"];var O=function(){var e={},t=Object(b.useQuery)(Object(b.gql)('{\n  ethereum(network: bsc) {\n    transfers(options: {offset: 0}, amount: {gt: 0}, receiver: {is: "0x93E8A4cd2c98B0667BF2AD9C46f7660F390dF348"}, currency: {is: "0x339550404ca4d831d12b1b2e4768869997390010"}, date: {till: "2021-01-29T00:01:00+00:00"}) {\n      block {\n        timestamp {\n          time(format: "%Y-%m-%d %H:%M:%S")\n        }\n        height\n      }\n      address: sender {\n        address\n      }\n      currency {\n        address\n        symbol\n      }\n      amount\n      transaction {\n        hash\n      }\n      external\n    }\n  }\n}\n\n')),r=t.loading,c=t.error,s=t.data;if(r)return"Loading tx list...";if(c)return"Error! ".concat(c.message);var a=function(e){return!o.includes(e)};return s.ethereum.transfers.filter((function(e){return console.log(a(e.address.address)),a(e.address.address)})).map((function(t){return e[t.address.address]=Math.floor(t.amount)})),Object(n.jsx)("div",{className:"App",children:r?null:Object(n.jsx)(l,{ticketsNormalized:e})})},h=Object(b.createHttpLink)({uri:"https://graphql.bitquery.io"}),u=new b.ApolloClient({link:h,cache:new b.InMemoryCache});a.a.render(Object(n.jsx)(b.ApolloProvider,{client:u,children:Object(n.jsx)(O,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.6b348ad4.chunk.js.map