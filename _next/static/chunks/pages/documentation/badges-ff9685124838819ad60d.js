_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{Iglp:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/badges",function(){return n("lRcr")}])},XY9v:function(e,r,n){"use strict";n.d(r,"a",(function(){return i}));var o=n("nKUr"),t=(n("q1tI"),n("R/WZ")),c=n("jyBA"),s={badge:{marginRight:"3px",borderRadius:"12px",padding:"5px 12px",textTransform:"uppercase",fontSize:"10px",fontWeight:"500",lineHeight:"1",color:"#fff",textAlign:"center",whiteSpace:"nowrap",verticalAlign:"baseline",display:"inline-block"},primary:{backgroundColor:c.s},warning:{backgroundColor:c.C},danger:{backgroundColor:c.i},success:{backgroundColor:c.x},info:{backgroundColor:c.p},rose:{backgroundColor:c.u},gray:{backgroundColor:"#6c757d"}},a=Object(t.a)(s);function i(e){var r=a(),n=e.color,t=e.children;return Object(o.jsx)("span",{className:r.badge+" "+r[n],children:t})}i.defaultProps={color:"gray"}},lRcr:function(e,r,n){"use strict";n.r(r),n.d(r,"default",(function(){return b}));var o=n("cpVT"),t=n("nKUr"),c=(n("q1tI"),n("pzeu")),s=n("zR9M"),a=n("R/WZ"),i=n("Kg+a"),l=n("XY9v"),d=n("Oref");function j(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function g(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?j(Object(n),!0).forEach((function(r){Object(o.a)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var p=Object(a.a)({bdExample:{padding:"1.5rem",margin:"1rem -15px",position:"relative",marginRight:"0",marginBottom:"-8px",marginLeft:"0",borderWidth:".2rem",border:"solid rgb(245, 242, 240)"}});function b(e){var r=p();return Object(t.jsx)(d.a,g(g({},e),{},{children:Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"Badges"}),Object(t.jsx)("h2",{children:"Styles"}),Object(t.jsxs)("p",{children:["You will find the styles for this component in",Object(t.jsx)("br",{})," ",Object(t.jsx)("code",{children:"src/assets/jss/nextjs-material-kit/components/badgeStyle.js"}),"."]}),Object(t.jsx)("h2",{children:"Imports"}),Object(t.jsx)("p",{children:"If you want to use our predefined components:"}),Object(t.jsx)(c.a,{language:"jsx",style:s.prism,children:"import Badge from 'components/Badge/Badge.js';"}),Object(t.jsx)("p",{children:"If you want to use our styles on something else:"}),Object(t.jsx)(c.a,{language:"jsx",style:s.prism,children:'import badgeStyle from "styles/jss/nextjs-material-kit/components/badgeStyle.js"'}),Object(t.jsx)("h2",{children:"Example"}),Object(t.jsx)("p",{children:"Badges can be used as part of links or buttons to provide a counter."}),Object(t.jsx)("div",{className:r.bdExample,children:Object(t.jsxs)(i.a,{color:"primary",children:["Notifications ",Object(t.jsx)(l.a,{children:"4"})]})}),Object(t.jsx)(c.a,{language:"jsx",style:s.prism,children:'<Button color="primary">Notifications{" "}<Badge>4</Badge></Button>'}),Object(t.jsx)("h2",{children:"Contextual variations"}),Object(t.jsxs)("div",{className:r.bdExample,children:[Object(t.jsx)(l.a,{color:"primary",children:"primary"}),Object(t.jsx)(l.a,{color:"info",children:"info"}),Object(t.jsx)(l.a,{color:"success",children:"success"}),Object(t.jsx)(l.a,{color:"danger",children:"danger"}),Object(t.jsx)(l.a,{color:"warning",children:"warning"}),Object(t.jsx)(l.a,{color:"rose",children:"rose"})]}),Object(t.jsx)(c.a,{language:"jsx",style:s.prism,children:'<Badge color="primary">primary</Badge>\n<Badge color="info">info</Badge>\n<Badge color="success">success</Badge>\n<Badge color="danger">danger</Badge>\n<Badge color="warning">warning</Badge>\n<Badge color="rose">rose</Badge>'}),Object(t.jsx)("h2",{children:"Props"}),Object(t.jsx)(c.a,{language:"jsx",style:s.prism,children:'Badge.defaultProps = {\n  color: "gray"\n};\n\nBadge.propTypes = {\n  classes: PropTypes.object.isRequired,\n  color: PropTypes.oneOf([\n    "primary",\n    "warning",\n    "danger",\n    "success",\n    "info",\n    "rose",\n    "gray"\n  ])\n};'})]})}))}}},[["Iglp",0,2,1,3,4,5,6]]]);