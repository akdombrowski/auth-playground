(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2zww":function(e,t,a){"use strict";var o=a("kOwS"),r=a("vYYK"),n=a("qNsG"),i=a("q1tI"),l=a.n(i),c=a("TSYQ"),s=a.n(c),d=a("R/WZ"),p=a("3hv6"),m={cardHeader:{borderRadius:"3px",padding:"1rem 15px",marginLeft:"15px",marginRight:"15px",marginTop:"-30px",border:"0",marginBottom:"0"},cardHeaderPlain:{marginLeft:"0px",marginRight:"0px"},warningCardHeader:p.y,successCardHeader:p.t,dangerCardHeader:p.f,infoCardHeader:p.l,primaryCardHeader:p.o};a.d(t,"a",function(){return h});var g=l.a.createElement,u=Object(d.a)(m);function h(e){var t,a=u(),i=e.className,l=e.children,c=e.color,d=e.plain,p=Object(n.a)(e,["className","children","color","plain"]),m=s()((t={},Object(r.a)(t,a.cardHeader,!0),Object(r.a)(t,a[c+"CardHeader"],c),Object(r.a)(t,a.cardHeaderPlain,d),Object(r.a)(t,i,void 0!==i),t));return g("div",Object(o.a)({className:m},p),l)}},"7SZd":function(e,t,a){"use strict";var o=a("wx14"),r=a("Ff2n"),n=a("q1tI"),i=a.n(n),l=(a("17x9"),a("iuhU")),c=(a("2W6z"),a("ofer")),s=a("H2TA"),d=a("4hqb"),p=i.a.forwardRef(function(e,t){var a=e.children,n=e.classes,s=e.className,p=e.component,m=void 0===p?"div":p,g=e.disablePointerEvents,u=void 0!==g&&g,h=e.disableTypography,f=void 0!==h&&h,b=e.position,y=e.variant,v=Object(r.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),x=Object(d.b)()||{},w=y;return y&&x.variant,x&&!w&&(w=x.variant),i.a.createElement(d.a.Provider,{value:null},i.a.createElement(m,Object(o.a)({className:Object(l.a)(n.root,s,u&&n.disablePointerEvents,x.hiddenLabel&&n.hiddenLabel,{filled:n.filled}[w],{start:n.positionStart,end:n.positionEnd}[b],{dense:n.marginDense}[x.margin]),ref:t},v),"string"!==typeof a||f?a:i.a.createElement(c.a,{color:"textSecondary"},a)))});t.a=Object(s.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(p)},DIHg:function(e,t,a){"use strict";a.r(t);var o=a("kOwS"),r=a("doui"),n=a("q1tI"),i=a.n(n),l=a("R/WZ"),c=a("7SZd"),s=a("AqyA"),d=a("y9eO"),p=a.n(d),m=a("y9ZN"),g=a.n(m),u=a("8x5e"),h=a("8E12"),f=a("HXcA"),b=a("mtPR"),y=a("i4t8"),v=a("Kg+a"),x=a("A2So"),w=a("UsYt"),j=a("2zww"),O=a("5LSk"),N=a("um8N"),H=a("zrwo"),T=a("3hv6"),I={container:Object(H.a)({},T.d,{zIndex:"2",position:"relative",paddingTop:"20vh",color:"#FFFFFF",paddingBottom:"200px"}),cardHidden:{opacity:"0",transform:"translate3d(0, -60px, 0)"},pageHeader:{minHeight:"100vh",height:"auto",display:"inherit",position:"relative",margin:"0",padding:"0",border:"0",alignItems:"center","&:before":{background:"rgba(0, 0, 0, 0.5)"},"&:before,&:after":{position:"absolute",zIndex:"1",width:"100%",height:"100%",display:"block",left:"0",top:"0",content:'""'},"& footer li a,& footer li a:hover,& footer li a:active":{color:"#FFFFFF"},"& footer":{position:"absolute",bottom:"0",width:"100%"}},form:{margin:"0"},cardHeader:{width:"auto",textAlign:"center",marginLeft:"20px",marginRight:"20px",marginTop:"-40px",padding:"20px 0",marginBottom:"15px"},socialIcons:{maxWidth:"24px",marginTop:"0",width:"100%",transform:"none",left:"0",top:"0",height:"100%",lineHeight:"41px",fontSize:"20px"},divider:{marginTop:"30px",marginBottom:"0px",textAlign:"center"},cardFooter:{paddingTop:"0rem",border:"0",borderRadius:"6px",justifyContent:"center !important"},socialLine:{marginTop:"1rem",textAlign:"center",padding:"0"},inputIconsColor:{color:"#495057"}},P=a("l4Ax"),k=a.n(P);a.d(t,"default",function(){return S});var C=i.a.createElement,E=Object(l.a)(I);function S(e){var t=i.a.useState("cardHidden"),a=Object(r.a)(t,2),n=a[0],l=a[1];setTimeout(function(){l("")},700);var d=E(),m=Object(o.a)({},e);return C("div",null,C(u.a,Object(o.a)({absolute:!0,color:"transparent",brand:"Material Kit React",rightLinks:C(h.a,null)},m)),C("div",{className:d.pageHeader,style:{backgroundImage:"url("+k.a+")",backgroundSize:"cover",backgroundPosition:"top center"}},C("div",{className:d.container},C(b.a,{justify:"center"},C(y.a,{xs:12,sm:12,md:4},C(x.a,{className:d[n]},C("form",{className:d.form},C(j.a,{color:"primary",className:d.cardHeader},C("h4",null,"Login"),C("div",{className:d.socialLine},C(v.a,{justIcon:!0,href:"#pablo",target:"_blank",color:"transparent",onClick:function(e){return e.preventDefault()}},C("i",{className:"fab fa-twitter"})),C(v.a,{justIcon:!0,href:"#pablo",target:"_blank",color:"transparent",onClick:function(e){return e.preventDefault()}},C("i",{className:"fab fa-facebook"})),C(v.a,{justIcon:!0,href:"#pablo",target:"_blank",color:"transparent",onClick:function(e){return e.preventDefault()}},C("i",{className:"fab fa-google-plus-g"})))),C("p",{className:d.divider},"Or Be Classical"),C(w.a,null,C(N.a,{labelText:"First Name...",id:"first",formControlProps:{fullWidth:!0},inputProps:{type:"text",endAdornment:C(c.a,{position:"end"},C(g.a,{className:d.inputIconsColor}))}}),C(N.a,{labelText:"Email...",id:"email",formControlProps:{fullWidth:!0},inputProps:{type:"email",endAdornment:C(c.a,{position:"end"},C(p.a,{className:d.inputIconsColor}))}}),C(N.a,{labelText:"Password",id:"pass",formControlProps:{fullWidth:!0},inputProps:{type:"password",endAdornment:C(c.a,{position:"end"},C(s.a,{className:d.inputIconsColor},"lock_outline")),autoComplete:"off"}})),C(O.a,{className:d.cardFooter},C(v.a,{simple:!0,color:"primary",size:"lg"},"Get started"))))))),C(f.a,{whiteFont:!0})))}},SZcW:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/loginpage",function(){var e=a("DIHg");return{page:e.default||e}}])},l4Ax:function(e,t){e.exports="/next-material-kit/_next/static/images/bg7-b08234a2b7e8e4fb2e3c4e713252021c.jpg"},ofer:function(e,t,a){"use strict";var o=a("wx14"),r=a("Ff2n"),n=a("q1tI"),i=a.n(n),l=(a("17x9"),a("iuhU")),c=a("H2TA"),s=a("mVKy"),d={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},p=i.a.forwardRef(function(e,t){var a=e.align,n=void 0===a?"inherit":a,c=e.classes,p=e.className,m=e.color,g=void 0===m?"initial":m,u=e.component,h=e.display,f=void 0===h?"initial":h,b=e.gutterBottom,y=void 0!==b&&b,v=e.noWrap,x=void 0!==v&&v,w=e.paragraph,j=void 0!==w&&w,O=(e.theme,e.variant),N=void 0===O?"body1":O,H=e.variantMapping,T=void 0===H?d:H,I=Object(r.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","theme","variant","variantMapping"]),P=u||(j?"p":T[N]||d[N])||"span";return i.a.createElement(P,Object(o.a)({className:Object(l.a)(c.root,p,"inherit"!==N&&c[N],"initial"!==g&&c["color".concat(Object(s.a)(g))],x&&c.noWrap,y&&c.gutterBottom,j&&c.paragraph,"inherit"!==n&&c["align".concat(Object(s.a)(n))],"initial"!==f&&c["display".concat(Object(s.a)(f))]),ref:t},I))});t.a=Object(c.a)(function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}},{name:"MuiTypography",withTheme:!0})(p)},y9ZN:function(e,t,a){"use strict";var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("q1tI")),n=(0,o(a("8/g6")).default)(r.default.createElement("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}),"People");t.default=n},y9eO:function(e,t,a){"use strict";var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("q1tI")),n=(0,o(a("8/g6")).default)(r.default.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Email");t.default=n}},[["SZcW",1,0]]]);