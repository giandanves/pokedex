(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{58:function(e,t,s){},88:function(e,t,s){"use strict";s.r(t);var r=s(7),a=s.n(r),n=s(12),c=s(1),i=s.n(c),l=s(41),o=s.n(l),d=(s(58),s.p+"static/media/next.5029795c.svg"),b=s.p+"static/media/previous.cd70e9a3.svg",j=s(0),x=function(e){var t=e.options,s=e.selectFunction,r=e.loading;return Object(j.jsx)("select",{className:"w-10 appearance-none text-center text-primary  bg-white bg-expand bg-no-repeat bg-right",disabled:r,onChange:function(e){return s(e)},children:t.map((function(e){return Object(j.jsx)("option",{value:e.value,children:e.label},e.value)}))})},u=s(4),m=s.n(u),h=function(e){var t=e.limit,s=e.setLimit,r=e.setOffset,a=e.offset,n=e.loading,c=e.count,i=function(e,s){e.preventDefault();var n=a/t;r((n+=s)*t)};return Object(j.jsxs)("div",{className:m()("flex w-full max-w-fullscreen mx-auto px-10 justify-between",{hidden:n}),children:[Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)(x,{options:[{value:12,label:"12"},{value:24,label:"24"},{value:48,label:"48"},{value:96,label:"96"}],selectFunction:function(e){s(parseInt(e.target.value)),r(0)},loading:n}),Object(j.jsx)("p",{className:"mx-2",children:"per page"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{disabled:a/t===0||n,onClick:function(e){return i(e,-1)},children:Object(j.jsx)("img",{src:b,alt:"previous page",className:"h-4 mr-2"})}),Object(j.jsx)("button",{disabled:n||t+a>=c,onClick:function(e){return i(e,1)},children:Object(j.jsx)("img",{src:d,alt:"previous page",className:"h-4"})})]})]})},f=s.p+"static/media/add-icon.a3662be3.svg",p=s.p+"static/media/favorite-icon.4cc76d4b.svg";var O=function(e){return m()({"border-fire":"fire"===e,"border-water":"water"===e,"border-dragon":"dragon"===e,"border-fairy":"fairy"===e,"border-ghost":"ghost"===e,"border-ground":"ground"===e,"border-normal":"normal"===e,"border-bug":"bug"===e,"border-psychic":"psychic"===e,"border-steel":"steel"===e,"border-dark":"dark"===e,"border-electric":"electric"===e,"border-fighting":"fighting"===e,"border-flying":"flying"===e,"border-grass":"grass"===e,"border-ice":"ice"===e,"border-poison":"poison"===e,"border-rock":"rock"===e})};var g=function(e){return m()({"bg-fire from-fire":"fire"===e,"bg-water from-water":"water"===e,"bg-dragon from-dragon":"dragon"===e,"bg-fairy from-fairy":"fairy"===e,"bg-ghost from-ghost":"ghost"===e,"bg-ground from-ground":"ground"===e,"bg-normal from-normal":"normal"===e,"bg-bug from-bug":"bug"===e,"bg-psychic from-psychic":"psychic"===e,"bg-steel from-steel":"steel"===e,"bg-dark from-dark":"dark"===e,"bg-electric from-electric":"electric"===e,"bg-fighting from-fighting":"fighting"===e,"bg-flying from-flying":"flying"===e,"bg-grass from-grass":"grass"===e,"bg-ice from-ice":"ice"===e,"bg-poison from-poison":"poison"===e,"bg-rock from-rock":"rock"===e})},v=s(10),y=s(31),w=s.n(y);function N(e){var t=e.pokemons,s=e.renderEmpty;return t?0===t.length?Object(j.jsxs)(j.Fragment,{children:[" ",s()," "]}):Object(j.jsx)("div",{className:"flex flex-wrap -mx-2 max-w-fullscreen min-h-full overflow-auto pr-2",children:t.map((function(e,t){var s,r=e.picture,a=e.name,n=e.id,c=e.type;return Object(j.jsx)("div",{className:"w-6/12 p-2  sm:w-4/12 md:w-3/12 lg:w-2/12",children:Object(j.jsxs)("li",{className:m()("border rounded-md overflow-hidden",O(c[0])),children:[Object(j.jsxs)("div",{className:m()(g(c[0]),"to-transparent w-full bg-opacity-20 bg-gradient-to-br rounded-br-2xl flex flex-col items-center p-3"),children:[Object(j.jsxs)("div",{className:"flex justify-between items-center w-full",children:[Object(j.jsx)("p",{className:"text-subtitle font-bold text-black",children:"#"+(s=n,s<10?"00"+s:s<100?"0"+s:s)}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("button",{children:Object(j.jsx)("img",{className:"mx-3",src:f,alt:"add Pokemon"})}),Object(j.jsx)("button",{children:Object(j.jsx)("img",{src:p,alt:"favorite Pokemon"})})]})]}),Object(j.jsx)("div",{className:"aspect-w-1 aspect-h-1 w-full",children:Object(j.jsx)(v.b,{to:"pokemon/".concat(a),children:Object(j.jsx)("img",{className:"p-2",src:r,alt:a})})}),Object(j.jsx)("h2",{className:"font-nunito text-xs capitalize font-bold sm:text-body-02 sm:leading-body-02 xl:text-base",children:a})]}),Object(j.jsx)("div",{className:"bg-white w-full py-2",children:Object(j.jsx)("div",{className:"flex px-2",children:c.map((function(e){return Object(j.jsx)("p",{className:m()("capitalize flex text-subtitle leading-subtitle px-1 mx-1  text-black font-bold items-center self-center rounded border lg:py-px",O(e)),children:e},w()())}))})})]})},n)}))}):Object(j.jsx)(j.Fragment,{})}var k=s(18),C=s(17),S=Object(c.createContext)(),F=function(e){var t=Object(c.useState)("http://pokedex.jhonnymichel.com/pokemon"),s=Object(C.a)(t,2),r=s[0],a=s[1],n=Object(c.useState)(12),i=Object(C.a)(n,2),l=i[0],o=i[1],d=Object(c.useState)(0),b=Object(C.a)(d,2),x=b[0],u=b[1],m=Object(c.useState)(!1),h=Object(C.a)(m,2),f=h[0],p=h[1],O=Object(c.useState)({height:[],weight:[],search:"",type:[],ability:[],move:[]}),g=Object(C.a)(O,2),v=g[0],y=g[1];return Object(j.jsx)(S.Provider,{value:{url:r,setUrl:a,limit:l,setLimit:o,offset:x,setOffset:u,filter:v,setFilter:y,filterModalIsOpen:f,setFilterModalIsOpen:p},children:e.children})},L=function(){var e=Object(c.useContext)(S),t=e.filter,s=e.setFilter;return Object(j.jsxs)("div",{className:"pb-3 md:flex justify-between px-2 pt-2 w-full min-w-full",children:[Object(j.jsx)("h1",{className:" text-2xl font-nunito font-bold pb-3 lg: pt-2",children:"Pokedex"}),Object(j.jsxs)("div",{className:"w-full md:max-w-1/3 border border-gray rounded pl-2 pr-4",children:[Object(j.jsx)("input",{name:"search",className:"text-body-02 w-full h-12 px-2 bg-search bg-no-repeat bg-right",type:"text",onChange:function(e){return s(Object(k.a)(Object(k.a)({},t),{},{search:e.target.value.toLowerCase()}))},placeholder:"Search..."}),t.search.length<3&&t.search.length>0&&Object(j.jsx)("p",{className:"text-danger text-xs",children:"Type at least 2 characters to search"})]})]})},E=s.p+"static/media/errorpicture.785d0658.svg",T=s.p+"static/media/digivirus.3d534ee2.svg",A=s(22),I=function(e){var t=e.textColor,s=e.bg,r=e.type,a=e.onClick,n=e.addClass;return Object(j.jsx)("button",{type:r,className:m()("bg-".concat(s," rounded"),Object(A.a)({},n,n)),onClick:a,children:Object(j.jsx)("p",{className:"text-".concat(t," font-bold text-sm whitespace-nowrap"),children:e.children})})},M=function(e){var t=e.error,s=e.refetch,r=e.message,a=e.renderDigimons;if(t){console.log(t);var n=function(e,t){return"XXX"===e?{title:"Unknown error",subtitle:t,img:T}:e>=500?{title:"Internal Server Error",subtitle:"Please Try again later",img:E}:e>=400?{title:"Bad Request",subtitle:"Something went wrong with your request",img:E}:void 0}(t,r),c=n.title,i=n.subtitle,l=n.img;return Object(j.jsxs)("div",{className:"flex flex-col items-center py-[16px]",children:[Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("img",{src:l,alt:c,className:"mr-2"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"text-7xl text-center font-bold text-black",children:t}),Object(j.jsx)("h3",{className:"text-base text-center font-bold text-black",children:c})]})]}),Object(j.jsx)("p",{className:"p-2 text-sm text-black-500 font-normal",children:i}),"XXX"===t?Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)(I,{children:Object(j.jsx)("p",{children:"Try again"}),textColor:"primary",bg:"white",onClick:s,addClass:"button-try-again"}),Object(j.jsx)(I,{children:Object(j.jsx)("p",{children:"See Digimons"}),textColor:"white",bg:"primary",onClick:a,addClass:"button-try-again"})]}):Object(j.jsx)(I,{children:Object(j.jsx)("p",{children:"Try again"}),textColor:"white",bg:"primary",onClick:s,addClass:"button-try-again"})]})}},P=function(){return Object(j.jsx)("div",{className:"flex h-full items-center",children:Object(j.jsx)("div",{className:"loading-container mx-auto",children:Object(j.jsx)("svg",{className:"circular-loader",viewBox:"25 25 50 50",children:Object(j.jsx)("circle",{className:"loader-path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"#70c542",strokeWidth:"2"})})})})},z=s.p+"static/media/empty-state-icon.1c47a9c8.svg",D=function(){return Object(j.jsxs)("div",{className:"mx-auto items-center min-h-full",children:[Object(j.jsx)("img",{src:z,className:"mx-auto",alt:"Empty search"}),Object(j.jsxs)("div",{className:"py-6",children:[Object(j.jsx)("h2",{className:"text-base font-bold text-center",children:"Your search returned 0 results"}),Object(j.jsx)("p",{className:"py-2 text-center",children:"Try to be less specific and try again"})]})]})},X=function(e){var t=e.loading,s=e.renderLoading,r=e.error,a=e.renderError,n=e.render,c=e.message,i=e.renderDigivirusState;return t?s():r?a():c?i():n()},q=s.p+"static/media/filter.044b496c.svg",U=function(){var e=Object(c.useContext)(S),t=e.filter,s=e.setFilterModalIsOpen,r=["Extra Small","Small","Medium","Tall","Extra Tall"],a=["Extra Light","Light","Medium","Large","Extra Large"],n={type:t.type,ability:t.ability,move:t.move,height:t.height.map((function(e){return r[e-1]})),weight:t.weight.map((function(e){return a[e-1]}))},i=Object.values(n).flat();return Object(j.jsxs)("div",{className:"flex w-full py-2 pl-2 overflow-x-auto",children:[Object(j.jsxs)("button",{className:m()("flex border border-shade rounded h-8 items-center px-3 bg-white",{"bg-lightblue":i.length>0}),onClick:function(){return s(!0)},children:[Object(j.jsx)("div",{className:"flex h-4 items-center",children:Object(j.jsx)("img",{src:q,alt:"filter",className:"h-3"})}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("p",{className:"flex text-black font-bold text-xs pl-1",children:"Filters"}),i.length>0&&Object(j.jsx)("p",{className:"flex ml-1 items-center justify-center bg-primary text-white text-subtitle font-bold px-1 rounded-full h-4 w-4",children:i.length})]})]}),Object(j.jsx)("div",{className:"flex overflow-x-auto",children:i.map((function(e){return Object(j.jsx)("div",{className:"flex mx-1 border border-shade rounded h-8 items-center px-3",children:Object(j.jsx)("p",{className:"flex capitalize whitespace-nowrap text-black font-bold text-xs pl-1",children:e},e)},e)}))})]})},H=s(6),_=function(e,t,s){return e?"loading":!!t&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:"An error occurred while loading data."}),Object(j.jsx)("button",{onClick:function(){return s()},children:"Try Again"})]})},W=s(91),B=s.p+"static/media/checked.57f3a1bc.svg",J=function(e){var t=e.label,s=e.name,r=e.value,a=e.values.includes(r.toString()),n=!isNaN(r);return Object(j.jsxs)("label",{className:m()("flex whitespace-nowrap capitalize h-6 py-1 px-2 mr-2 mb-2  text-black font-bold text-subtitle leading-subtitle border border-black-300 rounded",{"sm:text-xs":n},{"bg-lightblue border-primary":a}),children:[Object(j.jsx)("img",{src:B,alt:"checked",className:m()("opacity-0",{"opacity-100":a})}),Object(j.jsx)(H.a,{type:"checkbox",name:s,className:"appearance-none",value:r},t),t]})},Q=function(){var e=Object(H.d)().values,t=Object(W.a)("http://pokedex.jhonnymichel.com/type",{retryDelay:1e3});return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"pt-6 pb-4 w-full",children:[Object(j.jsx)("p",{className:"pb-4 text-base font-bold text-black",children:"Type"}),_(t.isLoading,t.isError,t.refetch)||Object(j.jsx)("div",{className:"flex flex-wrap",children:t.data.results.map((function(t){return Object(j.jsx)(J,{label:t.name,name:"type",value:t.name,values:e.type})}))})]})})},R=function(e){var t,s=e.filter,r=Object(H.d)().values,a=Object(W.a)("http://pokedex.jhonnymichel.com/move",{retryDelay:1e3}),n=Object(c.useState)(""),i=Object(C.a)(n,2),l=i[0],o=i[1];null===(t=a.data)||void 0===t||t.results.sort((function(e){var t=0;return s.move.map((function(s){return s===e.name&&(t=-1),t}))?t:0}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"pb-4 pt-6 text-base font-bold text-black",children:"Moves"}),Object(j.jsx)(H.a,{name:"searchMove",type:"text",placeholder:"Search...",className:"text-sm border h-12 w-full pl-4 border-gray rounded-lg mb-6",onChange:function(e){return o(e.target.value)}}),_(a.isLoading,a.error,a.refetch)||Object(j.jsx)("section",{className:"ability-container flex flex-wrap border border-gray rounded p-px",children:a.data.results.map((function(e){return e.name.startsWith(l)&&Object(j.jsx)(J,{label:e.name,name:"move",value:e.name,values:r.move})}))})]})})},V=function(){var e=["Extra Light","Light","Medium","Large","Extra Large"],t=Object(H.d)().values;return Object(j.jsxs)("div",{className:"py-6",children:[Object(j.jsx)("p",{className:"pb-4 text-base font-bold text-black",children:"Weight"}),Object(j.jsx)("div",{className:"flex",children:[1,2,3,4,5].map((function(s){return Object(j.jsx)(J,{label:e[s-1],name:"weight",value:s,values:t.weight})}))})]})},G=function(){var e=["Extra Small","Small","Medium","Tall","Extra Tall"],t=Object(H.d)().values;return Object(j.jsxs)("div",{className:"pt-9",children:[Object(j.jsx)("p",{className:"pb-4 text-base font-bold text-black",children:"Height"}),Object(j.jsx)("div",{className:"flex pb-6",children:[1,2,3,4,5].map((function(s){return Object(j.jsx)(J,{label:e[s-1],name:"height",value:s,values:t.height})}))})]})},K=function(e){var t,s=e.filter,r=Object(H.d)().values,a=Object(W.a)("http://pokedex.jhonnymichel.com/ability",{retryDelay:1e3}),n=Object(c.useState)(""),i=Object(C.a)(n,2),l=i[0],o=i[1];null===(t=a.data)||void 0===t||t.results.sort((function(e){var t=0;return s.ability.map((function(s){return s===e.name&&(t=-1),t}))?t:0}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("p",{className:"pb-4 pt-6 text-base font-bold text-black",children:"Abilities"}),Object(j.jsx)(H.a,{name:"searchAbility",type:"text",placeholder:"Search...",className:"text-sm border h-12 w-full pl-4 border-gray rounded-lg mb-6",onChange:function(e){return o(e.target.value)}}),_(a.isLoading,a.error,a.refetch)||Object(j.jsx)("section",{className:"ability-container flex flex-wrap border border-gray rounded p-px",children:a.data.results.map((function(e){return e.name.startsWith(l)&&Object(j.jsx)(J,{label:e.name,name:"ability",value:e.name,values:r.ability})}))})]})})},Y=s(51),Z=s.n(Y),$=function(){return Object(j.jsx)("div",{className:"border border-dashed border-lightgrey w-full"})},ee=function(){var e=Object(c.useContext)(S),t=e.setOffset,s=e.setFilter,r=function(e){var t=e.text;return Object(j.jsx)("p",{children:t})};return Object(j.jsx)("div",{className:"flex flex-col w-full h-navbarmodal bg-white items-end",children:Object(j.jsxs)("div",{className:"flex h-full items-center px-4",children:[Object(j.jsx)(I,{children:Object(j.jsx)(r,{text:"Clear Filters"}),textColor:"primary",bg:"white",type:"reset",onClick:function(){s({height:[],weight:[],type:[],ability:[],move:[],search:""}),t(0)},addClass:"px-4 py-3"}),Object(j.jsx)(I,{children:Object(j.jsx)(r,{text:"Show Results"}),textColor:"white",bg:"primary",type:"submit",addClass:"px-4 py-3"})]})})},te=s.p+"static/media/close.9a8260c6.svg",se=function(){var e=Object(c.useContext)(S).setFilterModalIsOpen;return Object(j.jsxs)("div",{className:"flex justify-between",children:[Object(j.jsx)("p",{className:"text-2xl font-normal text-black pt-5 px-8",children:"Filters"}),Object(j.jsx)("img",{src:te,alt:"close",className:"px-5",onClick:function(){return e(!1)}})]})},re=function(){var e=Object(c.useContext)(S),t=e.setOffset,s=e.filter,r=e.setFilter,a=e.filterModalIsOpen,n=e.setFilterModalIsOpen;return Object(j.jsx)(Z.a,{isOpen:a,bodyOpenClassName:"body-open",className:"Modal",overlayClassName:"Overlay",children:Object(j.jsxs)("div",{className:"h-full w-full  bg-white bg-opacity-1",children:[Object(j.jsx)(se,{}),Object(j.jsx)(H.c,{enableReinitialize:!0,onSubmit:function(e){t(0),r((function(t){return e})),n(!1)},initialValues:s,children:Object(j.jsxs)(H.b,{children:[Object(j.jsxs)("div",{className:"px-8  w-full overflow-y-auto",children:[Object(j.jsx)(G,{}),Object(j.jsx)($,{}),Object(j.jsx)(V,{}),Object(j.jsx)($,{}),Object(j.jsx)(Q,{}),Object(j.jsx)($,{}),Object(j.jsx)(R,{filter:s}),Object(j.jsx)($,{className:"mt-6"}),Object(j.jsx)(K,{filter:s})]}),Object(j.jsx)("div",{className:"border border-black-50 w-full"}),Object(j.jsx)(ee,{})]})})]})})},ae=s(52),ne=s.n(ae),ce=s(30);var ie=function(){var e=Object(c.useContext)(S),t=e.url,s=e.setUrl,r=e.filter,a=e.limit,n=e.setLimit,i=e.offset,l=e.setOffset,o=Object(ce.debounce)((function(){s(function(e,t){return ne.a.stringifyUrl({url:t,query:e})}(r,"http://pokedex.jhonnymichel.com/pokemon"))}),300);Object(c.useEffect)((function(){(r.search.length>2||0===r.search.length)&&o()}),[r,o]);var d=Object(W.a)("".concat(t).concat("&limit=".concat(a)).concat("&offset=".concat(i)),{retry:!1}),b=d.isLoading,x=d.error,u=d.data,m=d.refetch;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"mx-auto min-h-4/5 px-8 pt-8 pb-4 max-w-fullscreen w-full",children:[Object(j.jsx)(L,{}),Object(j.jsx)(U,{}),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(re,{}),Object(j.jsx)(X,{loading:b,renderLoading:function(){return Object(j.jsx)(P,{})},error:x,message:null===u||void 0===u?void 0:u.message,pokemons:null===u||void 0===u?void 0:u.results,renderDigivirusState:function(){return Object(j.jsx)(M,{error:"XXX",refetch:m,message:null===u||void 0===u?void 0:u.message,renderDigimons:function(){return Object(j.jsx)(N,{pokemons:u.results})}})},renderError:function(){return Object(j.jsx)(M,{error:x,refetch:m})},render:function(){return Object(j.jsx)(N,{pokemons:u.results,renderEmpty:function(){return Object(j.jsx)(D,{})}})}})]})]}),Object(j.jsx)(h,{limit:a,setLimit:n,setOffset:l,offset:i,loading:b,count:null===u||void 0===u?void 0:u.count})]})};function le(){return(le=Object(n.a)(a.a.mark((function e(){var t,s,r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),(s=new Headers).append("Authorization","Bearer ".concat(t)),r={method:"GET",headers:s,redirect:"follow"},e.next=6,fetch("http://pokedex.jhonnymichel.com/profile",r);case 6:if((n=e.sent).ok){e.next=10;break}throw n.status;case 10:return e.abrupt("return",n.json());case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(e){return de.apply(this,arguments)}function de(){return(de=Object(n.a)(a.a.mark((function e(t){var s,r,n,c,i,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.email,r=t.password,(n=new Headers).append("Content-Type","application/json"),c=JSON.stringify({email:s,password:r}),i={method:"POST",headers:n,body:c,redirect:"follow"},e.next=7,fetch("http://pokedex.jhonnymichel.com/signin",i).then((function(e){return e.json()})).then((function(e){if(!e.token)throw e;localStorage.setItem("token",e.token)}));case 7:return l=e.sent,e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var be=function(){var e=Object(n.a)(a.a.mark((function e(t){var s,r,n,c,i,l,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.email,r=t.name,n=t.password,(c=new Headers).append("Content-Type","application/json"),i=JSON.stringify({email:s,password:n,name:r}),l={method:"POST",headers:c,body:i,redirect:"follow"},e.next=7,fetch("http://pokedex.jhonnymichel.com/signup",l).then((function(e){return e.json()})).then((function(e){if(console.dir(e),!e.token)throw e;localStorage.setItem("token",e.token)}));case 7:return o=e.sent,e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),je=function(){var e=Object(n.a)(a.a.mark((function e(){var t,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new Headers,s=localStorage.getItem("token"),t.append("Content-Type","application/json"),t.append("Authorization","Bearer ".concat(s)),fetch("http://pokedex.jhonnymichel.com/signout",{method:"POST",headers:t,redirect:"follow"}).then((function(e){return e.text()})).then((function(e){console.log(e),"User signed out"===JSON.parse(e).message&&localStorage.removeItem("token")})).catch((function(e){return console.log("error",e)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xe=function(){return le.apply(this,arguments)},ue=s(34),me=s(92),he=Object(c.createContext)(),fe=function(e){var t=Object(ue.b)(),s=Object(W.a)({queryKey:"user",queryFn:xe}).data,r=null===s||void 0===s?void 0:s.user,c=r,i=Object(me.a)(oe,{onSuccess:function(){t.invalidateQueries("user")}}).mutateAsync,l=Object(me.a)(be,{onSuccess:function(){var e=Object(n.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.invalidateQueries("user");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}).mutateAsync,o=Object(me.a)(je,{onSuccess:function(){var e=Object(n.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.invalidateQueries("user"),t.resetQueries("user");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}).mutateAsync;return Object(j.jsx)(he.Provider,{value:{userSignIn:i,isLogged:c,user:r,signUp:l,userSignOut:o},children:e.children})},pe=function(e){var t=e.setStep,s=Object(c.useContext)(he).userSignIn;return Object(j.jsxs)("div",{className:"py-6",children:[Object(j.jsx)("h2",{className:"text-base font-bold text-center",children:"Sign in"}),Object(j.jsx)(H.c,{initialValues:{email:"",password:""},onSubmit:function(){var e=Object(n.a)(a.a.mark((function e(t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),e.t0.message?r.setStatus("Incorrect email address or password"):r.setStatus("Something went wrong, try again");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,s){return e.apply(this,arguments)}}(),children:function(e){var s=e.status;return Object(j.jsxs)(H.b,{children:[Object(j.jsx)(H.a,{name:"email",children:function(e){var t=e.field;e.form,e.meta;return Object(j.jsx)("input",Object(k.a)({type:"email",className:"text-body-02 w-full h-12 px-2 border border-gray rounded-lg my-2",placeholder:"Email"},t))}}),Object(j.jsx)(H.a,{name:"password",children:function(e){var t=e.field;e.form,e.meta;return Object(j.jsx)("input",Object(k.a)({type:"password",className:"text-body-02 w-full h-12 px-2 mt-6 border border-gray rounded-lg",placeholder:"Password"},t))}}),s&&Object(j.jsx)("p",{className:"text-danger text-xs my-2",children:s}),Object(j.jsxs)("div",{className:"w-full flex flex-col space-y-2",children:[Object(j.jsx)(I,{textColor:"white",bg:"primary",type:"submit",addClass:"h-11",children:"Sign in"}),Object(j.jsx)(I,{textColor:"primary",bg:"white",addClass:"h-11",onClick:function(){return t(1)},children:"Sign up"})]})]})}})]})},Oe=function(e){var t=e.setStep,s=Object(c.useContext)(he).signUp;return Object(j.jsxs)("div",{className:"py-6",children:[Object(j.jsx)("h2",{className:"text-base font-bold text-center",children:"Sign Up"}),Object(j.jsx)(H.c,{initialValues:{name:"",email:"",password:""},onSubmit:function(){var e=Object(n.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(t);case 3:e.next=10;break;case 5:e.prev=5,e.t0=e.catch(0),n={},e.t0.data.issues.forEach((function(e){n[e.path[0]]=e.message})),r.setErrors(n);case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,s){return e.apply(this,arguments)}}(),children:function(e){var s=e.errors;return Object(j.jsxs)(H.b,{children:[Object(j.jsx)(H.a,{name:"name",children:function(e){var t=e.field;e.form,e.meta;return Object(j.jsx)("input",Object(k.a)({type:"text",className:"text-body-02 w-full h-12 px-2 border border-gray rounded-lg my-2",placeholder:"Name"},t))}}),s.name&&Object(j.jsx)("p",{className:"text-danger text-xs my-2",children:s.name}),Object(j.jsx)(H.a,{name:"email",children:function(e){var t=e.field;e.form,e.meta;return Object(j.jsx)("input",Object(k.a)({type:"text",className:"text-body-02 w-full h-12 px-2 border border-gray rounded-lg my-2",placeholder:"Email"},t))}}),s.email&&Object(j.jsx)("p",{className:"text-danger text-xs my-2",children:s.email}),Object(j.jsx)(H.a,{name:"password",children:function(e){var t=e.field;e.form,e.meta;return Object(j.jsx)("input",Object(k.a)({type:"text",className:"text-body-02 w-full h-12 px-2 my-6 border border-gray rounded-lg",placeholder:"Password"},t))}}),s.password&&Object(j.jsx)("p",{className:"text-danger text-xs my-2",children:s.password}),Object(j.jsxs)("div",{className:"w-full flex flex-col space-y-2",children:[Object(j.jsx)(I,{textColor:"white",bg:"primary",type:"submit",addClass:"h-11",children:"Sign up"}),Object(j.jsx)(I,{textColor:"primary",bg:"white",addClass:"h-11",onClick:function(){return t(0)},children:"Sign in"})]})]})}})]})},ge=s(8),ve=function(){var e=Object(c.useState)(0),t=Object(C.a)(e,2),s=t[0],r=t[1],a=Object(c.useContext)(he).isLogged,n=Object(ge.f)();return Object(c.useEffect)((function(){a&&n.push("/")}),[a,n]),Object(j.jsx)("div",{className:m()("mx-auto items-center min-h-full",{hidden:a}),children:function(){switch(s){case 0:return Object(j.jsx)(pe,{setStep:r});case 1:return Object(j.jsx)(Oe,{setStep:r});default:return Object(j.jsx)(pe,{setStep:r})}}()})},ye=function(e){return function(){return Object(c.useContext)(he).isLogged?Object(j.jsx)(e,{}):Object(j.jsx)(ve,{})}},we=ye((function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"h-20 text-center",children:"TEAMS"}),Object(j.jsx)("p",{children:"Team page content"})]})})),Ne=ye((function(){return Object(j.jsx)("div",{children:Object(j.jsx)("p",{className:"h-20 text-center",children:"FAVORITES"})})})),ke=s(90),Ce=s.p+"static/media/pokedex.73d4428b.svg",Se=s.p+"static/media/favpage.4cc76d4b.svg",Fe=s.p+"static/media/teams.f4b6a485.svg",Le=s.p+"static/media/signin.4c3fcc40.svg",Ee=function(e){var t=e.img,s=e.title,r=e.path,a=Object(ge.g)().pathname===r;return Object(j.jsx)("div",{className:"flex h-12 pr-3",children:Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("img",{src:t,alt:s,className:m()("self-end mr-2",{"filter-primary":a})}),Object(j.jsxs)("div",{className:"self-end",children:[Object(j.jsx)("h2",{className:m()("text-base text-black font-bold",{"text-primary":a}),children:s}),a&&Object(j.jsx)("div",{className:"h-0.5 w-full bg-primary rounded-lg"})]})]})})},Te=function(e){var t=e.img,s=e.title,r=e.path,a=Object(ge.g)().pathname===r;return Object(j.jsxs)("div",{className:"flex flex-col h-full items-center justify-between",children:[Object(j.jsx)("div",{className:"h-full flex flex-col justify-center",children:Object(j.jsx)("img",{src:t,alt:s,className:m()({"filter-primary":a})})}),Object(j.jsx)("div",{className:m()("h-1 w-10 rounded-lg bg-white",{"bg-primary":a})})]})},Ae=function(){var e=Object(c.useContext)(he),t=e.isLogged,s=e.user,r=e.userSignOut;return Object(j.jsx)("div",{className:"hidden sm:flex border-b  border-lightgrey h-16 w-full pb-6 px-6",children:Object(j.jsxs)("div",{className:"flex justify-between w-full max-w-fullscreen mx-auto",children:[Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)(v.b,{to:"/",children:Object(j.jsx)(Ee,{img:Ce,title:"Pokedex",path:"/"})}),Object(j.jsx)(v.b,{to:"/teams",children:Object(j.jsx)(Ee,{img:Fe,title:"Teams",path:"/teams"})}),Object(j.jsx)(v.b,{to:"/favorites",children:Object(j.jsx)(Ee,{img:Se,title:"Favorites",path:"/favorites"})})]}),t?Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)(Ee,{img:Le,title:null===s||void 0===s?void 0:s.name,path:"/signin"}),Object(j.jsx)("button",{className:"text-xs text-danger w-full mt-7",onClick:Object(n.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r());case 1:case"end":return e.stop()}}),e)}))),children:"Logout"})]}):Object(j.jsx)(v.b,{to:"/signin",children:Object(j.jsx)(Ee,{img:Le,title:"Sign in",path:"/signin"})})]})})},Ie=function(){return Object(ge.g)().pathname.startsWith("/pokemon/")?Object(j.jsx)(j.Fragment,{children:" "}):Object(j.jsxs)("div",{className:"fixed bottom-0 sm:hidden shadow-shadow flex w-full h-14 justify-between bg-white px-10 rounded-t-2xl",children:[Object(j.jsx)(v.b,{to:"/",children:Object(j.jsx)(Te,{img:Ce,title:"Pokedex",path:"/"})}),Object(j.jsx)(v.b,{to:"/teams",children:Object(j.jsx)(Te,{img:Fe,title:"Teams",path:"/teams"})}),Object(j.jsx)(v.b,{to:"/favorites",children:Object(j.jsx)(Te,{img:Se,title:"Favorites",path:"/favorites"})}),Object(j.jsx)(v.b,{to:"/signin",children:Object(j.jsx)(Te,{img:Le,title:"Sign in",path:"/signin"})})]})};var Me=function(){return Object(j.jsxs)("div",{className:"flex justify-between w-full sm:hidden",children:[Object(j.jsx)(v.b,{to:"/",children:Object(j.jsx)("img",{className:"ml-5 mt-4",src:b,alt:"back to home"})}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("div",{className:"py-2",children:Object(j.jsx)(I,{textColor:"white",bg:"primary",children:"+ Add to team",addClass:"py-2 px-3"})}),Object(j.jsx)("img",{className:"h-5 mr-5 ml-4 mt-4",src:p,alt:"add to favorite"})]})]})},Pe=function(e){var t=e.type,s=e.picture;return Object(j.jsxs)("div",{className:m()(g(t),"to-transparent w-full aspect-w-1 aspect-h-1  sm:aspect-none sm:w-5/12 bg-opacity-20 bg-gradient-to-br flex items-center justify-center sm:p-2"),children:[Object(j.jsx)(Me,{}),Object(j.jsx)("div",{className:"w-full  flex items-center sm:max-w-sm",children:Object(j.jsx)("img",{className:"h-1/2 w-1/2 relative z-10 sm:h-full sm:w-full mx-auto",src:s,alt:"name"})})]})};var ze=function(e){return e<10?"00"+e:e<100?"0"+e:e},De=function(e){var t=e.name,s=e.id;return Object(j.jsxs)("div",{className:"flex justify-between items-center w-full sm:block",children:[Object(j.jsx)("h1",{className:"capitalize font-bold text-black text-2xl",children:t}),Object(j.jsx)("p",{className:"text-black-500 font-bold text-sm",children:"#"+ze(s)})]})},Xe=function(e){var t=e.title,s=e.value,r=e.addClass,a=e.textAlign;return Object(j.jsxs)("div",{className:m()("h-17 border border-black-100 rounded py-4 sm:p-4 mr-2 sm:mr-4",Object(A.a)({},r,r)),children:[Object(j.jsx)("p",{className:m()("font-bold text-subtitle leading-subtitle text-black-500",Object(A.a)({},a,a)),children:t}),Object(j.jsx)("h3",{className:m()("font-black text-sm text-primary pt-1 whitespace-nowrap",Object(A.a)({},a,a)),children:s})]})},qe=function(e){var t="";return e.forEach((function(e){0===t.length?t+=Object(ce.capitalize)(e.ability.name):t+=", "+Object(ce.capitalize)(e.ability.name)})),t},Ue=function(e){var t=e.height,s=e.weight,r=e.abilities;return Object(j.jsxs)("div",{className:"sm:flex",children:[Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)(Xe,{title:"Height",value:t/10+"m",addClass:"w-cardinfo sm:w-21",textAlign:"text-center"}),Object(j.jsx)(Xe,{title:"Category",value:"no data",addClass:"w-cardinfo sm:w-21",textAlign:"text-center"}),Object(j.jsx)(Xe,{title:"Weight",value:s/10+"kg",addClass:"w-cardinfo sm:w-21",textAlign:"text-center"}),Object(j.jsx)(Xe,{title:"Gender",value:"no data",addClass:"w-cardinfo sm:w-21",textAlign:"text-center"})]}),Object(j.jsx)(Xe,{title:"Abilities",value:qe(r),addClass:"w-full mt-2 px-4 sm:mt-0",textAlign:"text-left"})]})},He=function(e){return"".concat(parseInt(e/255*100,10),"%")},_e=function(e){var t=e.title,s=e.stat;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:"text-dark text-xs font-bold pb-1",children:t}),Object(j.jsx)("div",{className:"h-2 bg-black-50 w-full rounded mb-4",children:Object(j.jsx)("div",{className:"h-2 bg-primary rounded",style:{width:He(s)}})})]})};var We=function(e){var t=e.pokemon,s=t.stats.find((function(e){return"hp"===e.stat.name})),r=t.stats.find((function(e){return"attack"===e.stat.name})),a=t.stats.find((function(e){return"defense"===e.stat.name})),n=t.stats.find((function(e){return"special-attack"===e.stat.name})),c=t.stats.find((function(e){return"special-defense"===e.stat.name})),i=t.stats.find((function(e){return"speed"===e.stat.name}));return Object(j.jsxs)("article",{className:"sm:w-5/12",children:[Object(j.jsx)("h2",{className:"pt-6 pb-4 text-base font-bold text-black",children:"Stats"}),Object(j.jsx)(_e,{title:"HP",stat:s.base_stat}),Object(j.jsx)(_e,{title:"Attack",stat:r.base_stat}),Object(j.jsx)(_e,{title:"Defense",stat:a.base_stat}),Object(j.jsx)(_e,{title:"Special attack",stat:n.base_stat}),Object(j.jsx)(_e,{title:"Special defense",stat:c.base_stat}),Object(j.jsx)(_e,{title:"Speed",stat:i.base_stat})]})};var Be=function(e){var t=e.pokemon,s="loading",r="loading",a=Object(W.a)("http://pokedex.jhonnymichel.com/pokemon?&limit=3&offset=".concat(t?t.id-2:0),{retry:!1}).data;return a&&(s=a.results.find((function(e){return e.id===t.id-1})),r=a.results.find((function(e){return e.id===t.id+1}))),Object(j.jsxs)("div",{className:"fixed flex bottom-0 left-0 w-full  self-center justify-between p-4  bg-white h-16 rounded-tl-3xl rounded-tr-3xl border border-black-50",children:[Object(j.jsxs)("div",{className:"flex",children:[s&&Object(j.jsx)(v.b,{to:"".concat(s.name),children:Object(j.jsx)("img",{className:"pt-1",src:b,alt:"see previous pokemon"})}),s&&Object(j.jsxs)("div",{className:"px-4",children:[Object(j.jsx)("p",{className:"text-subtitle leading-subtitle text-black-500 font-bold",children:s.id?"#"+ze(s.id):"Loading..."}),Object(j.jsx)("h3",{className:"capitalize text-sm text-black font-bold",children:s.name||"Loading..."})]})]}),r&&Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsxs)("div",{className:"px-4",children:[Object(j.jsx)("p",{className:"text-subtitle leading-subtitle text-black-500 font-bold text-right",children:r.id?"#"+ze(r.id):"Loading..."}),Object(j.jsx)("h3",{className:"capitalize text-sm text-black font-bold",children:r.name||"Loading..."})]}),Object(j.jsx)(v.b,{to:"".concat(r.name),children:Object(j.jsx)("img",{className:"pt-1",src:d,alt:"see next pokemon"})})]})]})};var Je=function(e){var t=e.pokemon;return Object(j.jsxs)("div",{className:"py-6",children:[Object(j.jsx)("h2",{className:"pb-2 font-bold text-xs text-black-500",children:"Type"}),Object(j.jsx)("div",{className:"flex",children:t.types.map((function(e){return Object(j.jsx)("p",{className:m()("capitalize flex text-xs p-2 mr-1  text-black font-bold items-center self-center rounded border",O(e.type.name)),children:e.type.name},w()())}))})]})};var Qe=function(){return Object(j.jsxs)("div",{className:"hidden sm:flex items-center",children:[Object(j.jsx)(I,{textColor:"white",bg:"primary",children:"+ Add to team",addClass:"py-2 px-3"}),Object(j.jsx)("img",{className:"h-5 mr-2 ml-4",src:p,alt:"add to favorite"})]})},Re=s.p+"static/media/expand.1d477ad9.svg";var Ve=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"pt-8 flex justify-between",children:[Object(j.jsx)("h2",{className:"text-black font-bold text-base",children:"About"}),Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("p",{className:"text-base text-primary font-bold",children:"Gen 8"}),Object(j.jsx)("img",{className:"filter-primary ml-2",src:Re,alt:"more generations"})]})]}),Object(j.jsx)("p",{className:"py-4 text-sm text-black-700 font-normal",children:"That's the area where pokemon description will be showed."})]})};var Ge=function(){return Object(j.jsx)("div",{className:"border border-dashed border-black-100"})};var Ke=function(){return Object(j.jsxs)("article",{className:"sm:pl-8 sm:w-7/12",children:[Object(j.jsx)("h2",{className:"pt-6 pb-4 text-base font-bold text-black",children:"Evolutions"}),Object(j.jsx)("div",{className:"w-full",children:Object(j.jsx)("p",{className:"w-full sm:text-center pt-10 pb-4",children:"Placeholder"})})]})};var Ye=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"pt-4 pb-2 text-base font-bold text-black",children:"Teams"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{className:"text-sm text-black-700 font-normal",children:"No teams yet"}),Object(j.jsx)("p",{className:"text-sm text-primary font-normal",children:"Add to team"})]})]})},Ze=function(e){var t=e.pokemon,s=e.name,r=t.sprites.other["official-artwork"].front_default,a=t.types[0].type.name;return Object(j.jsxs)("section",{className:"block sm:flex sm:flex-1  w-full self-center max-w-screen-2-x-l -mx-2 relative",children:[Object(j.jsx)(Pe,{type:a,picture:r}),Object(j.jsxs)("div",{className:"w-full sm:w-6/12 pb-20 p-6 rounded-t-2xl relative -mt-28 sm:-mt-0 bg-white sm:rounded-none sm:p-8",children:[Object(j.jsxs)("div",{className:"flex justify-between",children:[Object(j.jsx)(De,{name:s,id:t.id}),Object(j.jsx)(Qe,{})]}),Object(j.jsx)(Ve,{}),Object(j.jsx)(Ue,{height:t.height,weight:t.weight,abilities:t.abilities}),Object(j.jsx)(Je,{pokemon:t}),Object(j.jsx)(Ge,{}),Object(j.jsxs)("div",{className:"block sm:flex",children:[Object(j.jsx)(We,{pokemon:t}),Object(j.jsx)(Ke,{})]}),Object(j.jsx)(Ge,{}),Object(j.jsx)(Ye,{})]}),Object(j.jsx)("div",{className:"hidden sm:flex flex-1 w-1/12 bg-white"}),Object(j.jsx)(Be,{pokemon:t})]})},$e=function(){var e=Object(ge.h)().name,t=Object(W.a)("http://pokedex.jhonnymichel.com/pokemon/".concat(e),{retry:!1}),s=t.isLoading,r=t.error,a=t.data,n=t.refetch;return Object(j.jsx)(X,{loading:s,renderLoading:function(){return Object(j.jsx)(P,{})},error:r,message:null===a||void 0===a?void 0:a.message,pokemons:null===a||void 0===a?void 0:a.results,renderDigivirusState:function(){return Object(j.jsx)(M,{error:"XXX",refetch:n,message:null===a||void 0===a?void 0:a.message,renderDigimons:function(){return Object(j.jsx)(N,{pokemons:a.results})}})},renderError:function(){return Object(j.jsx)(M,{error:r,refetch:n})},render:function(){return Object(j.jsx)(Ze,{pokemon:a,name:e})}})},et=s(13),tt=Object(et.a)({basename:"/pokedex"});function st(){return(st=Object(n.a)(a.a.mark((function e(t){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.queryKey);case 2:if((s=e.sent).ok){e.next=6;break}throw s.status;case 6:return e.abrupt("return",s.json());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var rt=new ke.a({defaultOptions:{queries:{queryFn:function(e){return st.apply(this,arguments)}}}});o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(ue.a,{client:rt,children:Object(j.jsx)(v.a,{history:tt,children:Object(j.jsx)(ge.c,{children:Object(j.jsx)(fe,{children:Object(j.jsxs)(F,{children:[Object(j.jsx)(Ae,{}),Object(j.jsx)(ge.a,{path:"/",exact:!0,children:Object(j.jsx)(ie,{})}),Object(j.jsx)(ge.a,{path:"/teams",exact:!0,children:Object(j.jsx)(we,{})}),Object(j.jsx)(ge.a,{path:"/favorites",exact:!0,children:Object(j.jsx)(Ne,{})}),Object(j.jsx)(ge.a,{path:"/signin",exact:!0,children:Object(j.jsx)(ve,{})}),Object(j.jsx)(ge.a,{path:"/pokemon/:name",children:Object(j.jsx)($e,{})}),Object(j.jsx)(Ie,{})]})})})})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.d02243ac.chunk.js.map