(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{1028:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/todo",function(){return c(8784)}])},8072:function(a,b,c){"use strict";var d=c(6242),e=c(948),f=(0,e.ZP)(d.Z)(function(a){var b=a.theme;return{width:"100%",padding:b.spacing(2),borderRadius:b.spacing(1),marginTop:b.spacing(3),boxShadow:"\n    rgb(255 255 255) 0px 0px 0px 0px,\n    rgb(0 0 0 / 5%) 0px 0px 0px 1px,\n    rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%)\n    0px 4px 6px -2px !important"}});b.Z=f},6922:function(a,b,c){"use strict";var d=c(3156),e=c(948),f=(0,e.ZP)(d.Z)(function(a){return{marginTop:a.theme.spacing(2),textAlign:"center"}});b.Z=f},4909:function(a,b,c){"use strict";var d=c(7357),e=c(948),f=(0,e.ZP)(d.Z)(function(a){return{marginTop:a.theme.spacing(2)}});b.Z=f},8784:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return t}});var d=c(5893),e=c(7294),f=c(1799),g=c(9396),h=c(9473),i=c(1664),j=c.n(i),k=c(1163),l=c(7357),m=c(5861),n=c(831),o=c(6922),p=c(8072),q=c(4909),r=function(){var a=(0,h.v9)(function(a){return a.todos}),b=(0,k.useRouter)();return(0,d.jsxs)(o.Z,{maxWidth:"md",children:[(0,d.jsxs)(p.Z,{children:[(0,d.jsx)("h1",{children:"Todo List"}),(0,d.jsx)(l.Z,{sx:{height:400,width:"100%"},children:(0,d.jsx)(n._,{rows:Object.values(a.entities).map(function(a){return(0,g.Z)((0,f.Z)({},a),{createdAt:new Date(a.createdAt).toDateString(),updatedAt:new Date(a.updatedAt).toDateString()})}),columns:[{field:"_id",headerName:"ID",width:200},{field:"title",headerName:"Title",width:280},{field:"createdAt",headerName:"Created",width:180},{field:"updatedAt",headerName:"Updated",width:180}],getRowId:function(a){return a._id},pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!0,disableSelectionOnClick:!0,loading:"pending"===a.loading,rowHeight:48,initialState:{columns:{columnVisibilityModel:{_id:!1}}},components:{NoRowsOverlay:function(){return(0,d.jsx)(l.Z,{sx:{display:"grid",width:"100%",height:"100%",placeContent:"center"},style:{color:""!==a.error?"red":"#000"},children:""!==a.error?(0,d.jsx)(m.Z,{variant:"caption",children:a.error}):(0,d.jsx)(m.Z,{variant:"caption",children:"No rows available"})})}},onRowClick:function(a){var c=a.id;b.push("/todo/".concat(c))}})})]}),(0,d.jsx)(q.Z,{children:(0,d.jsx)(j(),{href:"/",children:"Home"})})]})},s=c(8931),t=function(){var a=(0,h.I0)(),b=(0,h.v9)(function(a){return a.todos.ids}),c=(0,e.useRef)(null);(0,e.useEffect)(function(){null===c.current&&0===b.length&&(c.current=!0,a((0,s.zB)()))},[a,b.length]);var f=function(b){a((0,s.yN)(b))};return(0,d.jsx)(r,{getTodo:f})}}},function(a){a.O(0,[664,556,524,701,774,888,179],function(){var b;return a(a.s=1028)}),_N_E=a.O()}])