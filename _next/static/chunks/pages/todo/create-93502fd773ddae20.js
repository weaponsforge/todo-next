(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520],{3606:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/todo/create",function(){return c(3691)}])},8072:function(a,b,c){"use strict";var d=c(6242),e=c(948),f=(0,e.ZP)(d.Z)(function(a){var b=a.theme;return{width:"100%",padding:b.spacing(2),borderRadius:b.spacing(1),marginTop:b.spacing(3),boxShadow:"\n    rgb(255 255 255) 0px 0px 0px 0px,\n    rgb(0 0 0 / 5%) 0px 0px 0px 1px,\n    rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%)\n    0px 4px 6px -2px !important"}});b.Z=f},6922:function(a,b,c){"use strict";var d=c(3156),e=c(948),f=(0,e.ZP)(d.Z)(function(a){return{marginTop:a.theme.spacing(2),textAlign:"center"}});b.Z=f},4613:function(a,b,c){"use strict";var d=c(5893),e=c(7294),f=c(1057),g=c(657),h=c(1425),i=c(6580),j=c(8951),k=c(7645);b.Z=function(a){var b=a.isOpen,c=void 0!==b&&b,l=a.titleText,m=a.contentText,n=a.loading,o=void 0!==n&&n,p=a.handleCancelCB,q=a.handleConfirmCB,r=(0,e.useState)(!1),s=r[0],t=r[1];(0,e.useEffect)(function(){t(c)},[c]);var u=function(a,b){(!b||"backdropClick"!==b)&&(p?p():t(!1))},v=function(){q?q():t(!1)};return(0,d.jsx)("div",{children:(0,d.jsxs)(g.Z,{maxWidth:"xs",fullWidth:!0,open:s,onClose:u,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,d.jsx)(k.Z,{id:"alert-dialog-title",children:void 0===l?"Window Title":l}),(0,d.jsx)(i.Z,{children:(0,d.jsx)(j.Z,{id:"alert-dialog-description",children:void 0===m?"":m})}),(0,d.jsxs)(h.Z,{children:[(0,d.jsx)(f.Z,{disabled:o,onClick:u,children:"Cancel"}),(0,d.jsx)(f.Z,{onClick:v,disabled:o,autoFocus:!0,variant:"contained",children:"Ok"})]})]})})}},4909:function(a,b,c){"use strict";var d=c(7357),e=c(948),f=(0,e.ZP)(d.Z)(function(a){return{marginTop:a.theme.spacing(2)}});b.Z=f},9213:function(a,b,c){"use strict";var d=c(5893),e=c(7294),f=c(1664),g=c.n(f),h=c(9473),i=c(7357),j=c(1057),k=c(6863),l=c(2023),m=c(1903),n=c(5861),o=c(4680),p=c(6922),q=c(8072),r=c(4613),s=c(4909);b.Z=function(a){var b=a.state,c=a.inputStatus,f=a.processFinished,t=a.content,u=a.onTextChange,v=a.onTextClick,w=a.onSaveClick,x=a.onResetClick,y=a.onCancelClick,z=a.onRedirectClick,A=(0,e.useState)(!1),B=A[0],C=A[1],D=(0,h.v9)(function(a){return a.todos}),E=D.todo,F=D.loading,G=D.error;return(0,e.useEffect)(function(){f&&C(!0)},[f]),(0,d.jsxs)(p.Z,{maxWidth:"sm",children:[(0,d.jsx)(r.Z,{isOpen:B,titleText:"Success!",contentText:"Successfully saved the Todo data.",handleCancelCB:function(){return C(!1)},handleConfirmCB:function(){return z(E._id)}}),(0,d.jsxs)(q.Z,{children:[(0,d.jsx)("h1",{children:(null==t?void 0:t.title)||"Create a Todo"}),(0,d.jsxs)(i.Z,{sx:o.Z.inputContainer,children:[(0,d.jsx)(m.Z,{id:"title",label:"Title",placeholder:"Enter a title",variant:"outlined",disabled:"pending"===F,value:b.title,onChange:u,onClick:v}),(0,d.jsx)(m.Z,{id:"description",label:"Description",placeholder:"Enter a description",variant:"outlined",disabled:"pending"===F,value:b.description,onChange:u,onClick:v}),(0,d.jsx)(m.Z,{id:"content",label:"Content",placeholder:"Enter content",variant:"outlined",disabled:"pending"===F,value:b.content,onChange:u,onClick:v,multiline:!0,rows:9})]}),(0,d.jsx)(i.Z,{sx:{textAlign:"left",color:"red"},children:(0,d.jsx)(n.Z,{variant:"caption",children:G||c||(0,d.jsx)("br",{})})}),(0,d.jsx)(l.Z,{sx:o.Z.buttons,children:(0,d.jsxs)(k.Z,{variant:"outlined",disabled:"pending"===F,children:[(0,d.jsx)(j.Z,{onClick:y,children:"Cancel"}),(0,d.jsx)(j.Z,{onClick:x,children:"Clear"}),(0,d.jsx)(j.Z,{variant:"contained",onClick:w,children:"Save"})]})})]}),(0,d.jsxs)(s.Z,{children:[(0,d.jsx)(g(),{href:"/",children:"Home"}),"\xa0 | \xa0",(0,d.jsx)(g(),{href:"/todo",children:"Todos"})]})]})}},4680:function(a,b){"use strict";b.Z={inputContainer:{minHeight:400,width:"100%",textAlign:"left","& .MuiTextField-root":{width:"100%",marginBottom:"16px !important"}},buttons:{float:"right","& button":{width:"80px"}}}},3691:function(a,b,c){"use strict";c.r(b);var d=c(4924),e=c(6042),f=c(9396),g=c(5893),h=c(7294),i=c(9473),j=c(9498),k=c(1163),l=c(2685),m=c(9213),n={title:"",description:"",content:""};b.default=function(){var a=(0,h.useState)(n),b=a[0],c=a[1],o=(0,h.useState)(""),p=o[0],q=o[1],r=(0,h.useState)(!1),s=r[0],t=r[1],u=(0,i.I0)(),v=(0,k.useRouter)(),w=(0,i.v9)(function(a){return a.todos.error}),x=function(){""!==w&&u((0,l.todosReset)()),""!==p&&q("")},y=function(a){var g=a.target,h=g.id,i=g.value;c((0,f.Z)((0,e.Z)({},b),(0,d.Z)({},h,i))),x()},z=function(){if(!Object.values(b).every(function(a){return""!==a})){q("Please check your input.");return}u((0,l.s_)(b)).then(j.SI).then(function(){t(!0)})},A=function(){v.push("/todo")},B=function(){u((0,l.todosReset)()),c(n)},C=function(a){var g=a.target.id;c((0,f.Z)((0,e.Z)({},b),(0,d.Z)({},g,""))),x()},D=function(a){v.push("/todo/".concat(a))};return(0,g.jsx)(m.Z,{state:b,inputStatus:p,processFinished:s,content:{title:"Create a Todo",mode:"create"},onTextChange:y,onTextClick:C,onSaveClick:z,onResetClick:B,onCancelClick:A,onRedirectClick:D})}}},function(a){a.O(0,[664,461,962,912,868,774,888,179],function(){var b;return a(a.s=3606)}),_N_E=a.O()}])