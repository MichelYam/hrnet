"use strict";(self.webpackChunkhrnet=self.webpackChunkhrnet||[]).push([[224],{7224:function(e,n,a){a.r(n),a.d(n,{default:function(){return B}});var t,r,s,i,l,o,c,d,u,g,p,x,h,A,Z,m,f,b=a(168),P=a(1413),j=a(885),v=a(390),w=a(2105),N=a(8747),y=a(188),S=a.n(y),E=a(2559),k=function(e){var n=e.columns,a=e.data,t=(0,w.useTable)({columns:n,data:a,initialState:{pageIndex:0}},w.useGlobalFilter,w.useSortBy,w.usePagination),r=t.getTableProps,s=t.getTableBodyProps,i=t.headerGroups,l=t.page,o=t.rows,c=t.state,d=t.prepareRow,u=t.canPreviousPage,g=t.canNextPage,p=t.pageCount,x=t.gotoPage,h=t.nextPage,A=t.previousPage,Z=t.setPageSize,m=t.setGlobalFilter,f=t.state,b=f.pageIndex,N=f.pageSize,y=v.useState(c.globalFilter),S=(0,j.Z)(y,2),k=S[0],B=S[1],q=(0,v.useState)(1),H=(0,j.Z)(q,2),K=H[0],W=H[1],X=(0,v.useState)(0),$=(0,j.Z)(X,2),_=$[0],ee=$[1],ne=(0,v.useState)([]),ae=(0,j.Z)(ne,2),te=ae[0],re=ae[1];(0,v.useEffect)((function(){re(function(e,n){if(n<=7){for(var a=[],t=0;t<n;t++)a.push(t+1);return a}return e%5>=0&&e>4&&e+2<n?[1,"...",e-1,e,e+1,"...",n]:e%5>=0&&e>4&&e+2>=n?[1,"...",n-3,n-2,n-1,n]:[1,2,3,4,5,"...",n]}(K,p))}),[p,K]),(0,v.useEffect)((function(){!function(e){for(var n=0,a=1;a<=e;a++)n+=a===e?l.length:N;ee(n)}(K)}),[K,_,l.length,N]);var se=(0,w.useAsyncDebounce)((function(e){m(e||void 0)}),200);return(0,E.jsxs)(G,{children:[(0,E.jsxs)("div",{className:"d-flex d-flex justify-content-between",children:[(0,E.jsxs)(D,{className:"d-flex form-group align-items-center",children:[(0,E.jsx)(Q,{className:"mr-2",htmlFor:"search",children:"Search:"}),(0,E.jsx)(U,{id:"search",className:"form-control",type:"search",value:k||"",placeholder:"Search employee",onChange:function(e){B(e.target.value),se(e.target.value)}})]}),(0,E.jsx)(C,{children:(0,E.jsxs)("label",{className:"d-flex align-items-center",children:["Show"," ",(0,E.jsx)(F,{className:"form-select form-select-sm",value:N,onChange:function(e){Z(Number(e.target.value))},children:[10,25,30,50,100].map((function(e){return(0,E.jsx)("option",{value:e,children:e},e)}))})," "," entries"]})})]}),(0,E.jsxs)(I,(0,P.Z)((0,P.Z)({className:"table"},r()),{},{children:[(0,E.jsx)(M,{children:i.map((function(e){return(0,E.jsx)(R,(0,P.Z)((0,P.Z)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return(0,E.jsxs)(T,(0,P.Z)((0,P.Z)({scope:"col"},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),(0,E.jsx)("span",{children:e.isSorted?e.isSortedDesc?(0,E.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZUlEQVQ4y2NgGAWjYBSggaqGu5FA/BOIv2PBIPFEUgxjB+IdQPwfC94HxLykus4GiD+hGfQOiB3J8SojEE9EM2wuSJzcsFMG4ttQgx4DsRalkZENxL+AuJQaMcsGxBOAmGvopk8AVz1sLZgg0bsAAAAASUVORK5CYII=",alt:""}):(0,E.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZ0lEQVQ4y2NgGLKgquEuFxBPAGI2ahhWCsS/gDibUoO0gPgxEP8H4ttArEyuQYxAPBdqEAxPBImTY5gjEL9DM+wTENuQahAvEO9DMwiGdwAxOymGJQLxTyD+jgWDxCMZRsEoGAVoAADeemwtPcZI2wAAAABJRU5ErkJggg==",alt:""}):null})]}))}))}))}))}),(0,E.jsx)(O,(0,P.Z)((0,P.Z)({},s()),{},{children:l.map((function(e){return d(e),(0,E.jsx)(R,(0,P.Z)((0,P.Z)({},e.getRowProps()),{},{children:e.cells.map((function(e){return(0,E.jsx)(V,(0,P.Z)((0,P.Z)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]})),(0,E.jsxs)(Y,{children:[(0,E.jsx)(z,{children:" ".concat(_?b*N+1:0,"-").concat(_," of ").concat(o.length," entries")}),(0,E.jsx)(J,{children:(0,E.jsx)("nav",{"aria-label":"Page navigation example",children:(0,E.jsxs)("ul",{className:"pagination",children:[(0,E.jsx)("li",{className:"page-item",children:(0,E.jsx)("button",{className:"page-link",onClick:function(){A(),W((function(e){return e-1}))},disabled:!u,children:"Previous"})}),te.map((function(e,n,a){return(0,E.jsx)("li",{className:"page-item",children:K===e?(0,E.jsx)(L,{className:"page-link ".concat(K===e?"active":""," "),disabled:!0,children:e}):"..."===e?(0,E.jsx)(L,{className:"page-link",disabled:!0,children:e},n):(0,E.jsx)(L,{className:"page-link",onClick:function(){x(e-1),W(e)},children:e},n)},n)})),(0,E.jsx)("li",{className:"page-item",children:(0,E.jsx)("button",{className:"page-link",onClick:function(){h(),W((function(e){return e+1}))},disabled:!g,children:"Next"})})]})})})]})]})},B=k,G=N.ZP.div(t||(t=(0,b.Z)(["\n    position: relative;\n    width: 95%;\n"]))),C=N.ZP.div(r||(r=(0,b.Z)(["\n"]))),F=N.ZP.select(s||(s=(0,b.Z)(["\n    margin: 0 5px;\n"]))),D=N.ZP.div(i||(i=(0,b.Z)(["\n"]))),Q=N.ZP.label(l||(l=(0,b.Z)(["\n    margin: 10px 10px 10px 0;\n"]))),U=N.ZP.input(o||(o=(0,b.Z)(["\n    height: 40px;\n"]))),I=N.ZP.table(c||(c=(0,b.Z)(["\n    border-spacing: 0 15px;\n    border-collapse: separate;\n    vertical-align: middle;\n    border: none;\n    background-color: transparent;\n"]))),M=N.ZP.thead(d||(d=(0,b.Z)(["\n\n"]))),R=N.ZP.tr(u||(u=(0,b.Z)(["\n    height: 65px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    font-size: 15px;\n"]))),O=N.ZP.tbody(g||(g=(0,b.Z)(["\n    ","{\n        box-shadow: 0 2px 10px rgb(0 0 0 / 10%);\n        border-radius: 5px;\n        background-color: #FFFFFF;\n    }\n"])),R),T=N.ZP.th(p||(p=(0,b.Z)(["\n    width: 70px;\n    border: none;\n    font-size: 18px;\n"]))),V=N.ZP.td(x||(x=(0,b.Z)(["\n    width: calc(100% / 9);\n    border: none;\n"]))),z=N.ZP.div(h||(h=(0,b.Z)(["\n    padding-top: 0.755em;\n"]))),J=N.ZP.div(A||(A=(0,b.Z)(["\n    text-align: right;\n    padding-top: 0.25em;\n"]))),L=N.ZP.button(Z||(Z=(0,b.Z)(["\n    ","\n"])),(function(e){return"true"===e.bgColor&&(0,N.iv)(m||(m=(0,b.Z)(["\n    border: 1px solid #979797;\n    background: linear-gradient(to bottom, #fff 0%, #dcdcdc 100%);\n"])))})),Y=N.ZP.div(f||(f=(0,b.Z)(["\n    display: flex;\n    justify-content: space-between;\n"])));k.prototype={columns:S().array.isRequired,data:S().array.isRequired}}}]);
//# sourceMappingURL=224.9704f660.chunk.js.map