(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520],{3606:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/todo/create",function(){return c(4870)}])},8072:function(a,b,c){"use strict";var d=c(6242),e=c(948),f=(0,e.ZP)(d.Z)(function(a){var b=a.theme;return{width:"100%",padding:b.spacing(2),borderRadius:b.spacing(1),marginTop:b.spacing(3),boxShadow:"\n    rgb(255 255 255) 0px 0px 0px 0px,\n    rgb(0 0 0 / 5%) 0px 0px 0px 1px,\n    rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%)\n    0px 4px 6px -2px !important"}});b.Z=f},6922:function(a,b,c){"use strict";var d=c(3156),e=c(948),f=(0,e.ZP)(d.Z)(function(a){return{marginTop:a.theme.spacing(2),textAlign:"center"}});b.Z=f},4909:function(a,b,c){"use strict";var d=c(7357),e=c(948),f=(0,e.ZP)(d.Z)(function(a){return{marginTop:a.theme.spacing(2)}});b.Z=f},4870:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return Y}});var d=c(4924),e=c(6042),f=c(9396),g=c(5893),h=c(7294),i=c(9473),j=c(9498),k=c(1163),l=c(8931),m=c(1664),n=c.n(m),o=c(7357),p=c(1057),q=c(3366),r=c(7462),s=c(6010),t=c(4780),u=c(1796),v=c(8216),w=c(948),x=c(1657),y=c(5677),z=c(1588);function A(a){return(0,y.Z)("MuiButtonGroup",a)}let B=(0,z.Z)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]);var C=B,D=c(8363);let E=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],F=(a,b)=>{let{ownerState:c}=a;return[{[`& .${C.grouped}`]:b.grouped},{[`& .${C.grouped}`]:b[`grouped${(0,v.Z)(c.orientation)}`]},{[`& .${C.grouped}`]:b[`grouped${(0,v.Z)(c.variant)}`]},{[`& .${C.grouped}`]:b[`grouped${(0,v.Z)(c.variant)}${(0,v.Z)(c.orientation)}`]},{[`& .${C.grouped}`]:b[`grouped${(0,v.Z)(c.variant)}${(0,v.Z)(c.color)}`]},b.root,b[c.variant],!0===c.disableElevation&&b.disableElevation,c.fullWidth&&b.fullWidth,"vertical"===c.orientation&&b.vertical]},G=a=>{let{classes:b,color:c,disabled:d,disableElevation:e,fullWidth:f,orientation:g,variant:h}=a,i={root:["root",h,"vertical"===g&&"vertical",f&&"fullWidth",e&&"disableElevation"],grouped:["grouped",`grouped${(0,v.Z)(g)}`,`grouped${(0,v.Z)(h)}`,`grouped${(0,v.Z)(h)}${(0,v.Z)(g)}`,`grouped${(0,v.Z)(h)}${(0,v.Z)(c)}`,d&&"disabled"]};return(0,t.Z)(i,A,b)},H=(0,w.ZP)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:F})(({theme:a,ownerState:b})=>(0,r.Z)({display:"inline-flex",borderRadius:(a.vars||a).shape.borderRadius},"contained"===b.variant&&{boxShadow:(a.vars||a).shadows[2]},b.disableElevation&&{boxShadow:"none"},b.fullWidth&&{width:"100%"},"vertical"===b.orientation&&{flexDirection:"column"},{[`& .${C.grouped}`]:(0,r.Z)({minWidth:40,"&:not(:first-of-type)":(0,r.Z)({},"horizontal"===b.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===b.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===b.variant&&"horizontal"===b.orientation&&{marginLeft:-1},"outlined"===b.variant&&"vertical"===b.orientation&&{marginTop:-1}),"&:not(:last-of-type)":(0,r.Z)({},"horizontal"===b.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===b.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===b.variant&&"horizontal"===b.orientation&&{borderRight:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${"light"===a.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},"text"===b.variant&&"vertical"===b.orientation&&{borderBottom:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${"light"===a.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`},"text"===b.variant&&"inherit"!==b.color&&{borderColor:a.vars?`rgba(${a.vars.palette[b.color].mainChannel} / 0.5)`:(0,u.Fq)(a.palette[b.color].main,.5)},"outlined"===b.variant&&"horizontal"===b.orientation&&{borderRightColor:"transparent"},"outlined"===b.variant&&"vertical"===b.orientation&&{borderBottomColor:"transparent"},"contained"===b.variant&&"horizontal"===b.orientation&&{borderRight:`1px solid ${(a.vars||a).palette.grey[400]}`,[`&.${C.disabled}`]:{borderRight:`1px solid ${(a.vars||a).palette.action.disabled}`}},"contained"===b.variant&&"vertical"===b.orientation&&{borderBottom:`1px solid ${(a.vars||a).palette.grey[400]}`,[`&.${C.disabled}`]:{borderBottom:`1px solid ${(a.vars||a).palette.action.disabled}`}},"contained"===b.variant&&"inherit"!==b.color&&{borderColor:(a.vars||a).palette[b.color].dark},{"&:hover":(0,r.Z)({},"outlined"===b.variant&&"horizontal"===b.orientation&&{borderRightColor:"currentColor"},"outlined"===b.variant&&"vertical"===b.orientation&&{borderBottomColor:"currentColor"})}),"&:hover":(0,r.Z)({},"contained"===b.variant&&{boxShadow:"none"})},"contained"===b.variant&&{boxShadow:"none"})})),I=h.forwardRef(function(a,b){let c=(0,x.Z)({props:a,name:"MuiButtonGroup"}),{children:d,className:e,color:f="primary",component:i="div",disabled:j=!1,disableElevation:k=!1,disableFocusRipple:l=!1,disableRipple:m=!1,fullWidth:n=!1,orientation:o="horizontal",size:p="medium",variant:t="outlined"}=c,u=(0,q.Z)(c,E),v=(0,r.Z)({},c,{color:f,component:i,disabled:j,disableElevation:k,disableFocusRipple:l,disableRipple:m,fullWidth:n,orientation:o,size:p,variant:t}),w=G(v),y=h.useMemo(()=>({className:w.grouped,color:f,disabled:j,disableElevation:k,disableFocusRipple:l,disableRipple:m,fullWidth:n,size:p,variant:t}),[f,j,k,l,m,n,p,t,w.grouped]);return(0,g.jsx)(H,(0,r.Z)({as:i,role:"group",className:(0,s.Z)(w.root,e),ref:b,ownerState:v},u,{children:(0,g.jsx)(D.Z.Provider,{value:y,children:d})}))});var J=I;function K(a){return(0,y.Z)("MuiCardActions",a)}(0,z.Z)("MuiCardActions",["root","spacing"]);let L=["disableSpacing","className"],M=a=>{let{classes:b,disableSpacing:c}=a;return(0,t.Z)({root:["root",!c&&"spacing"]},K,b)},N=(0,w.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[b.root,!c.disableSpacing&&b.spacing]}})(({ownerState:a})=>(0,r.Z)({display:"flex",alignItems:"center",padding:8},!a.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),O=h.forwardRef(function(a,b){let c=(0,x.Z)({props:a,name:"MuiCardActions"}),{disableSpacing:d=!1,className:e}=c,f=(0,q.Z)(c,L),h=(0,r.Z)({},c,{disableSpacing:d}),i=M(h);return(0,g.jsx)(N,(0,r.Z)({className:(0,s.Z)(i.root,e),ownerState:h,ref:b},f))});var P=O,Q=c(1903),R=c(5861),S={inputContainer:{minHeight:400,width:"100%",textAlign:"left","& .MuiTextField-root":{width:"100%",marginBottom:"16px !important"}},buttons:{float:"right","& button":{width:"80px"}}},T=c(6922),U=c(8072),V=c(4909),W=function(a){var b=a.state,c=a.inputStatus,d=a.onTextChange,e=a.onTextClick,f=a.onSaveClick,h=a.onResetClick,j=a.onCancelClick,k=(0,i.v9)(function(a){return a.todos}),l=k.loading,m=k.error;return(0,g.jsxs)(T.Z,{maxWidth:"sm",children:[(0,g.jsxs)(U.Z,{children:[(0,g.jsx)("h1",{children:"Create a Todo"}),(0,g.jsxs)(o.Z,{sx:S.inputContainer,children:[(0,g.jsx)(Q.Z,{id:"title",label:"Title",placeholder:"Enter a title",variant:"outlined",disabled:"pending"===l,value:b.title,onChange:d,onClick:e}),(0,g.jsx)(Q.Z,{id:"description",label:"Description",placeholder:"Enter a description",variant:"outlined",disabled:"pending"===l,value:b.description,onChange:d,onClick:e}),(0,g.jsx)(Q.Z,{id:"content",label:"Content",placeholder:"Enter content",variant:"outlined",disabled:"pending"===l,value:b.content,onChange:d,onClick:e,multiline:!0,rows:9})]}),(0,g.jsx)(o.Z,{sx:{textAlign:"left",color:"red"},children:(0,g.jsx)(R.Z,{variant:"caption",children:m||c||(0,g.jsx)("br",{})})}),(0,g.jsx)(P,{sx:S.buttons,children:(0,g.jsxs)(J,{variant:"outlined",disabled:"pending"===l,children:[(0,g.jsx)(p.Z,{onClick:j,children:"Cancel"}),(0,g.jsx)(p.Z,{onClick:h,children:"Clear"}),(0,g.jsx)(p.Z,{variant:"contained",onClick:f,children:"Save"})]})})]}),(0,g.jsxs)(V.Z,{children:[(0,g.jsx)(n(),{href:"/",children:"Home"}),"\xa0 | \xa0",(0,g.jsx)(n(),{href:"/todo",children:"Todos"})]})]})},X={title:"",description:"",content:""},Y=function(){var a=(0,h.useState)(X),b=a[0],c=a[1],m=(0,h.useState)(""),n=m[0],o=m[1],p=(0,i.I0)(),q=(0,k.useRouter)(),r=(0,i.v9)(function(a){return a.todos.error}),s=function(){""!==r&&p((0,l.In)()),""!==n&&o("")},t=function(a){var g=a.target,h=g.id,i=g.value;c((0,f.Z)((0,e.Z)({},b),(0,d.Z)({},h,i))),s()},u=function(){if(!Object.values(b).every(function(a){return""!==a})){o("Please check your input.");return}p((0,l.s_)(b)).then(j.SI).then(function(a){q.push("/todo/".concat(a._id))})},v=function(){q.push("/todo")},w=function(){s(),c(X)},x=function(a){var g=a.target.id;c((0,f.Z)((0,e.Z)({},b),(0,d.Z)({},g,""))),s()};return(0,g.jsx)(W,{state:b,inputStatus:n,onTextChange:t,onTextClick:x,onSaveClick:u,onResetClick:w,onCancelClick:v})}}},function(a){a.O(0,[664,556,468,583,774,888,179],function(){var b;return a(a.s=3606)}),_N_E=a.O()}])