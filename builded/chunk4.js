import{j as e}from"./plugin.js";import{d as g,r as i,u as h}from"./chunk.js";const j=()=>{const l=()=>{c(-"1")},c=g(),[o,u]=i.useState({left:0,top:0}),[s,n]=i.useState(""),p=t=>{n("Cliquez pour revenir en arrière"),a(t)},d=t=>{a(t)},x=()=>{n("")},a=t=>{u({left:t.pageX+10,top:t.pageY+10})},r=h(),m=r.state.from[0],f={__html:r.state.from[1]};return e.jsx("div",{children:e.jsxs("button",{className:"text-blue-500 hover:text-blue-700 focus:outline-none",onMouseEnter:p,onMouseMove:d,onMouseLeave:x,onClick:l,children:[e.jsx("p",{className:"mb-2 text-lg font-bold",children:m}),s&&e.jsx("div",{className:"absolute rounded bg-gray-100 px-2 py-1 shadow",style:{left:o.left,top:o.top},children:s}),e.jsx("p",{className:"mx-16 justify-center text-lg	 font-bold text-gray-700",dangerouslySetInnerHTML:f})]})})};export{j as default};
