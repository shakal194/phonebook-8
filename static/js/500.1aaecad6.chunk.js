"use strict";(self.webpackChunkphonebook_8=self.webpackChunkphonebook_8||[]).push([[500],{4100:function(t,n,e){e.r(n),e.d(n,{default:function(){return V}});var c="ViewContact_formPage__3PJyP",r="ViewContact_title__dnTrt",a="ViewContact_button__MdN+m",s="ViewContact_massage__mXcuQ",i="ViewContact_wrapper__vWQHt",o=(e(3158),e(6373)),l="ContactsList_contactsList__ZQI1L",u="Contact_contactsListItem__fd6WW",d="Contact_contactsListName__qtXbK",f="Contact_contactsListBtn__QuzOb",_=e(9434),m=e(5036),h=e(184);var v=function(t){var n=t.contact,e=t.key,c=n.id,r=(0,_.I0)();return(0,h.jsxs)("li",{className:u,children:[(0,h.jsx)("p",{className:d,children:n.name}),(0,h.jsx)("p",{className:d,children:n.number}),(0,h.jsx)("button",{className:f,onClick:function(){return r(m.deleteContact(c))},children:"Delete"})]},e)},x=e(4141);function j(){var t=(0,_.v9)(x.Jr);return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("ul",{className:l,children:t.map((function(t){return(0,h.jsx)(v,{contact:t},t.id)}))})})}var C="Filter_form__wVnxJ",p="Filter_label__vEd1E",N="Filter_input__N7T3z",b=e(5984),L=e(4443);function g(){var t=(0,b.x0)(),n=(0,_.v9)((function(t){return t.filter})),e=(0,_.I0)();return(0,h.jsxs)("div",{className:C,children:[(0,h.jsx)("label",{className:p,htmlFor:t}),"Find contact by name:",(0,h.jsx)("input",{id:t,className:N,type:"text",value:n,onChange:function(t){return e(L.M6(t.target.value))}})]})}var w=e(2791),k=e(24),y=e(3504);function V(){var t=(0,_.I0)();(0,w.useEffect)((function(){t(k.m.fetchContacts())}),[t]);var n=(0,_.v9)(k.l.mk),e=(0,_.v9)(k.l.Wu),l=(0,_.v9)(k.l.HL);return(0,h.jsxs)("div",{className:c,children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("button",{className:a,children:(0,h.jsx)(y.OL,{to:"/addcontact",children:"Add Contact"})}),(0,h.jsx)("h1",{className:r,children:"View Contact"}),(0,h.jsxs)("div",{className:s,children:[0===n.length&&(0,h.jsx)("p",{children:"No contacts saved yet"}),l&&(0,h.jsx)("p",{children:l.message})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)(g,{}),(0,h.jsx)("div",{className:i,children:0!==n.length?(0,h.jsx)(j,{}):""}),e&&(0,h.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,h.jsx)(o.p2,{height:"100",width:"100",color:"green",ariaLabel:"loading"})})]})]})}},4141:function(t,n,e){e.d(n,{HL:function(){return s},Jr:function(){return i},Wu:function(){return a},mk:function(){return r}});var c=e(6916),r=function(t){return t.contacts.items},a=function(t){return t.contacts.loading},s=function(t){return t.contacts.error},i=(0,c.P1)([r,function(t){return t.contacts.filter}],(function(t,n){var e=n.toLocaleLowerCase();return t.filter((function(t){return t.name.toLocaleLowerCase().includes(e)}))}))},24:function(t,n,e){e.d(n,{l:function(){return r},m:function(){return c}});var c=e(5036),r=e(4141)}}]);
//# sourceMappingURL=500.1aaecad6.chunk.js.map