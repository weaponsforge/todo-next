(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[234],{1216:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/todo/edit/[...id]",function(){return c(9165)}])},8072:function(a,b,c){"use strict";var d=c(6242),e=c(948),f=(0,e.ZP)(d.Z)(function(a){var b=a.theme;return{width:"100%",padding:b.spacing(2),borderRadius:b.spacing(1),marginTop:b.spacing(3),boxShadow:"\n    rgb(255 255 255) 0px 0px 0px 0px,\n    rgb(0 0 0 / 5%) 0px 0px 0px 1px,\n    rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%)\n    0px 4px 6px -2px !important"}});b.Z=f},6922:function(a,b,c){"use strict";var d=c(3156),e=c(948),f=(0,e.ZP)(d.Z)(function(a){return{marginTop:a.theme.spacing(2),textAlign:"center"}});b.Z=f},556:function(a,b,c){"use strict";var d=c(5893),e=c(1664),f=c.n(e),g=c(5697),h=c.n(g),i=c(6922),j=c(8072),k=c(4909);function l(a){var b=a.children,c=a.navigation,e=void 0===c?[]:c,g=a.maxWidth;return(0,d.jsxs)(i.Z,{maxWidth:void 0===g?"sm":g,children:[(0,d.jsx)(j.Z,{children:b}),e.length>0&&(0,d.jsx)(k.Z,{children:e.map(function(a,b){return b<e.length-1?(0,d.jsxs)("span",{children:[(0,d.jsx)(f(),{href:a.href,children:a.name})," \xa0 | \xa0"]},b):(0,d.jsx)(f(),{href:a.href,children:a.name},b)})})]})}l.propTypes={children:h().node,navigation:h().array,maxWidth:h().string},b.Z=l},4613:function(a,b,c){"use strict";var d=c(5893),e=c(5697),f=c.n(e),g=c(7294),h=c(1057),i=c(657),j=c(1425),k=c(6580),l=c(8951),m=c(7645);function n(a){var b=a.isOpen,c=void 0!==b&&b,e=a.titleText,f=a.contentText,n=a.loading,o=void 0!==n&&n,p=a.handleCancelCB,q=a.handleConfirmCB,r=(0,g.useState)(!1),s=r[0],t=r[1];(0,g.useEffect)(function(){t(c)},[c]);var u=function(a,b){(!b||"backdropClick"!==b)&&(p?p():t(!1))},v=function(){q?q():t(!1)};return(0,d.jsx)("div",{children:(0,d.jsxs)(i.Z,{maxWidth:"xs",fullWidth:!0,open:s,onClose:u,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,d.jsx)(m.Z,{id:"alert-dialog-title",children:void 0===e?"Window Title":e}),(0,d.jsx)(k.Z,{children:(0,d.jsx)(l.Z,{id:"alert-dialog-description",children:void 0===f?"":f})}),(0,d.jsxs)(j.Z,{children:[(0,d.jsx)(h.Z,{disabled:o,onClick:u,children:"Cancel"}),(0,d.jsx)(h.Z,{onClick:v,disabled:o,autoFocus:!0,variant:"contained",children:"Ok"})]})]})})}n.propTypes={isOpen:f().bool,titleText:f().string,contentText:f().string,loading:f().bool,handleCancelCB:f().func,handleConfirmCB:f().func},b.Z=n},4909:function(a,b,c){"use strict";var d=c(7357),e=c(948),f=(0,e.ZP)(d.Z)(function(a){return{marginTop:a.theme.spacing(2)}});b.Z=f},9213:function(a,b,c){"use strict";var d=c(5893),e=c(5697),f=c.n(e),g=c(7294),h=c(9473),i=c(7357),j=c(1057),k=c(6863),l=c(2023),m=c(1903),n=c(5861),o=c(4680),p=c(4613),q=c(556);function r(a){var b=a.state,c=a.inputStatus,e=a.processFinished,f=a.title,r=a.onTextChange,s=a.onTextClick,t=a.onSaveClick,u=a.onResetClick,v=a.onCancelClick,w=a.onRedirectClick,x=(0,g.useState)(!1),y=x[0],z=x[1],A=(0,h.v9)(function(a){return a.todos}),B=A.todo,C=A.loading,D=A.error;return(0,g.useEffect)(function(){e&&z(!0)},[e]),(0,d.jsxs)(q.Z,{maxWidth:"sm",navigation:[{href:"/",name:"Home"},{href:"/todo",name:"Todos"},],children:[(0,d.jsx)(p.Z,{isOpen:y,titleText:"Success!",contentText:"Successfully saved the Todo data.",handleCancelCB:function(){return z(!1)},handleConfirmCB:function(){return w(B._id)}}),(0,d.jsx)("h1",{children:f||"Create a Todo"}),(0,d.jsxs)(i.Z,{sx:o.Z.inputContainer,children:[(0,d.jsx)(m.Z,{id:"title",label:"Title",placeholder:"Enter a title",variant:"outlined",disabled:"pending"===C,value:b.title,onChange:r,onClick:s}),(0,d.jsx)(m.Z,{id:"description",label:"Description",placeholder:"Enter a description",variant:"outlined",disabled:"pending"===C,value:b.description,onChange:r,onClick:s}),(0,d.jsx)(m.Z,{id:"content",label:"Content",placeholder:"Enter content",variant:"outlined",disabled:"pending"===C,value:b.content,onChange:r,onClick:s,multiline:!0,rows:9})]}),(0,d.jsx)(i.Z,{sx:{textAlign:"left",color:"red"},children:(0,d.jsx)(n.Z,{variant:"caption",children:D||c||(0,d.jsx)("br",{})})}),(0,d.jsx)(l.Z,{sx:o.Z.buttons,children:(0,d.jsxs)(k.Z,{variant:"outlined",disabled:"pending"===C,children:[(0,d.jsx)(j.Z,{onClick:v,children:"Cancel"}),(0,d.jsx)(j.Z,{onClick:u,children:"Clear"}),(0,d.jsx)(j.Z,{variant:"contained",onClick:t,children:"Save"})]})})]})}r.propTypes={state:f().object,inputStatus:f().string,processFinished:f().bool,title:f().string,onTextChange:f().func,onTextClick:f().func,onSaveClick:f().func,onResetClick:f().func,onCancelClick:f().func,onRedirectClick:f().func},b.Z=r},4680:function(a,b){"use strict";b.Z={inputContainer:{minHeight:400,width:"100%",textAlign:"left","& .MuiTextField-root":{width:"100%",marginBottom:"16px !important"}},buttons:{float:"right","& button":{width:"80px"}}}},9165:function(a,b,c){"use strict";c.r(b);var d=c(4924),e=c(6042),f=c(9396),g=c(5893),h=c(7294),i=c(9473),j=c(9498),k=c(1163),l=c(2685),m=c(2574),n=c(9213),o={title:"",description:"",content:""};b.default=function(){var a=(0,h.useState)(o),b=a[0],c=a[1],p=(0,h.useState)(""),q=p[0],r=p[1],s=(0,h.useState)(!1),t=s[0],u=s[1],v=(0,i.I0)(),w=(0,h.useRef)(null),x=(0,k.useRouter)(),y=(0,i.v9)(function(a){return a.todos}),z=y.todo,A=y.error;(0,h.useEffect)(function(){Object.keys(z).length>0&&c((0,f.Z)((0,e.Z)({},z),{id:z._id}))},[z]),(0,h.useEffect)(function(){null===w.current&& void 0!==x.query.id&&0===Object.keys(z).length&&(w.current=!0,v((0,l.yN)(x.query.id[0])))},[v,x.query.id,z]);var B=function(){""!==A&&v((0,m.In)()),""!==q&&r("")},C=function(a){var g=a.target,h=g.id,i=g.value;c((0,f.Z)((0,e.Z)({},b),(0,d.Z)({},h,i))),B()},D=function(){if(!Object.values(b).every(function(a){return""!==a})){r("Please check your input.");return}v((0,l.B1)(b)).then(j.SI).then(function(){u(!0)})},E=function(){x.push("/todo")},F=function(){c(o)},G=function(a){var g=a.target.id;c((0,f.Z)((0,e.Z)({},b),(0,d.Z)({},g,""))),B()},H=function(a){x.push("/todo/".concat(a))};return(0,g.jsx)(n.Z,{state:b,inputStatus:q,processFinished:t,title:"Edit Todo",onTextChange:C,onTextClick:G,onSaveClick:D,onResetClick:F,onCancelClick:E,onRedirectClick:H})}}},function(a){a.O(0,[664,461,962,912,868,774,888,179],function(){var b;return a(a.s=1216)}),_N_E=a.O()}])