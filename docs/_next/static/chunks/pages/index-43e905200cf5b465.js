(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6488)}])},6488:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(5893),o=n(7294),i=n(1664),a=n(7),c=n(1749),l=n(2318),s=n(5182),d=n(4051),u=n.n(d),p=n(1033);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t,n,r,o,i,a){try{var c=e[i](a),l=c.value}catch(s){return void n(s)}c.done?t(l):Promise.resolve(l).then(r,o)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||b(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||b(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}var v=(0,a.Z)((function(e){var t={fore:e.palette.text.primary,hide:e.palette.text.primary,back:e.palette.text.secondary};return{container:h({maxWidth:"100%",padding:"32px 0"},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{padding:"24px 0"}),tagLine:{position:"relative",display:"flex",width:"540px",maxWidth:"100%"},tagLineBackground:{flex:1,position:"relative",backgroundColor:"rgb(255, 255, 255)",padding:"16px 24px",zIndex:100},tagLineBorderTop:h({position:"absolute",height:"100%",width:"calc(30% + ".concat(4,"px)"),top:"0",left:"0",borderWidth:[1,0,1,1].map((function(e){return"".concat(4*e,"px")})).join(" "),borderStyle:"solid",borderColor:t.fore},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{borderWidth:[1,0,1,1].map((function(e){return"".concat(4*e*3/4,"px")})).join(" ")}),tagLineBorderRight:h({position:"absolute",height:"60%",width:"70%",bottom:"0",right:"0",overflow:"hidden","&:after, &:before":{content:"''",position:"absolute",width:"100%",left:"0",borderStyle:"solid",borderColor:t.fore,zIndex:-1},"&:before":{height:"16px",bottom:"0",borderWidth:[0,1,1,0].map((function(e){return"".concat(4*e,"px")})).join(" "),transform:"skew(135deg)",transformOrigin:"top left"},"&:after":{height:"calc(100% - 16px)",top:"0",borderWidth:[0,1,0,0].map((function(e){return"".concat(4*e,"px")})).join(" ")}},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{borderWidth:[0,1,1,0].map((function(e){return"".concat(4*e*3/4,"px")})).join(" "),"&:before":{height:"12px",borderWidth:[0,1,1,0].map((function(e){return"".concat(4*e*3/4,"px")})).join(" ")},"&:after":{height:"calc(100% - 12px)",borderWidth:[0,1,0,0].map((function(e){return"".concat(4*e*3/4,"px")})).join(" ")}}),content:{position:"relative",width:"100%",marginBottom:"8px"},tagLineContent:{position:"absolute",left:"0",width:"100%"},placeholderContent:{opacity:0},quoteText:h({position:"absolute",top:"-32px",right:"0",fontWeight:800,fontSize:"80px"},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{top:"-24px",fontSize:"60px"}),tagLineText:h({fontWeight:800,fontSize:"44px"},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{fontSize:"32px"}),secondaryTagLineContainer:{width:"100%",padding:"2px 16px"},secondaryTagLineText:h({textAlign:"right",fontWeight:600,fontSize:"28px"},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{fontSize:"21px"}),secondaryTagLineBackground:h({position:"relative",overflow:"hidden","&:after,&:before":{content:"''",position:"absolute",width:"100%",left:"0",backgroundColor:e.palette.text.primary,zIndex:-1},"&:before":{height:"10px",bottom:"0",transform:"skew(135deg)",transformOrigin:"top left"},"&:after":{height:"calc(100% - 10px)",top:"0"}},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{"&:before":{height:"8px"},"&:after":{height:"calc(100% - 8px)"}}),tagLineLetter:{position:"relative","&:after":{content:"attr(data-txt)",color:e.palette.primary.main.replace(/rgb\((\d*),\s?(\d*),\s?(\d*)\)/,"rgba($1, $2, $3, 0.5)"),position:"absolute",top:0,left:0,opacity:0,willChange:"transform, opacity"}},"@keyframes shuffling":{"0%":{opacity:1,transform:"translateX(10px) scaleX(2)"},"50%":{opacity:0,transform:"translateX(0) scaleX(2)"},"100%":{opacity:1,transform:"translateX(-10px) scaleX(2)"}},shufflingLetter:{opacity:.3,"&:after":{animation:"$shuffling 400ms infinite alternate"}},"@keyframes animateStripeBackground":{from:{backgroundPosition:"0 0"},to:{backgroundPosition:"50.91px 50.91px"}},stripeBackground:h({position:"absolute",height:"100%",width:"100%",left:"-24px",bottom:"-24px",animation:"$animateStripeBackground 10s linear infinite",backgroundImage:"linear-gradient(".concat(["135deg"].concat(y(function(){for(var t=e.palette.primary.main,n="rgba(255, 255, 255, 0)",r=0,o=[],i=25;i<=100;i+=25)o.push("".concat(r%2===0?t:n," ").concat(i,"%"),100!==i?"".concat(r%2===0?n:t," ").concat(i,"%"):void 0),r++;return o.filter((function(e){return!!e}))}())).join(", "),")"),backgroundSize:"50.91px 50.91px"},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{left:"-16px",bottom:"-16px"})}})),j=function(){var e=g(o.useState({active:0,tagline:{primary:[],secondary:[]},placeholder:{primary:"",secondary:""},placeholderHeight:{primary:0,secondary:0}}),2),t=e[0],n=e[1],i=o.useRef(),a=o.useRef(),c=[{primary:"YOUR DIRTY SHOES DESERVES A SECOND CHANCE",secondary:"GET EM CLEANED TODAY"},{primary:"THE FUTURE OF SHOE CARE INDUSTRY",secondary:"TRY IT OUT NOW"}],s=function(){var e,r="!<>-_\\/[]{}\u2014=+*^?#________",o=function(t,i,a){return function(){var c,l=function(e){return e.map((function(e){return t>=e.start&&t<e.end&&(!e.current||Math.random()<.28)?x({},e,{current:r[Math.floor(Math.random()*r.length)]}):e}))},s={primary:l(i.primary),secondary:l(i.secondary)},d=function(e){return e.map((function(e){return t<e.start?{text:e.from,shuffling:!1}:t>=e.end?{text:e.to,shuffling:!1}:{text:null!==(c=e.current)&&void 0!==c?c:" ",shuffling:!0}}))},u={primary:d(s.primary),secondary:d(s.secondary)};n((function(e){return x({},e,{tagline:u})})),i.primary.map((function(e){return e.to})).join("")===u.primary.map((function(e){return e.text})).join("")&&i.secondary.map((function(e){return e.to})).join("")===u.secondary.map((function(e){return e.text})).join("")?a():e=requestAnimationFrame(o(t+1,s,a))}};return function(r){var i,a=t.tagline;e&&cancelAnimationFrame(e);var c=new Promise((function(e){return i=e}));n((function(e){return x({},e,{placeholder:r})}));var l=function(e,t){return Array(Math.max(e.length,t.length)).fill(void 0).map((function(n,r){var o,i,a=Math.floor(40*Math.random());return{from:null!==(o=e[r])&&void 0!==o?o:"",to:null!==(i=t[r])&&void 0!==i?i:"",start:a,end:a+Math.floor(40*Math.random())}}))};return o(0,{primary:l(a.primary.map((function(e){return e.text})).join(""),r.primary),secondary:l(a.secondary.map((function(e){return e.text})).join(""),r.secondary)},i)(),c}}(),d=function(){var e,r=(e=u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.active,e.next=3,s(c[r]);case 3:n((function(e){return x({},e,{active:(r+1)%c.length})}));case 4:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){f(i,r,o,a,c,"next",e)}function c(e){f(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(){return r.apply(this,arguments)}}();o.useEffect((function(){d()}),[]),o.useEffect((function(){var e=setTimeout(d,5e3);return function(){return clearTimeout(e)}}),[t.active]);var m=function(e,t){return o.useEffect((function(){var n=new p.Z((function(e){var n=g(e,1)[0];n&&t(n.contentRect)}));return n.observe(e.current),function(){return n.unobserve(e.current)}}),[e.current])};m(i,(function(e){return n((function(t){return x({},t,{placeholderHeight:x({},t.placeholderHeight,{primary:e.height})})}))})),m(a,(function(e){return n((function(t){return x({},t,{placeholderHeight:x({},t.placeholderHeight,{secondary:e.height})})}))}));var h=t.tagline,b=t.placeholder,j=t.placeholderHeight,w=v({}),C=function(e){return e.reduce((function(e,t){var n=e.slice(-1)[0];return!n||n.shuffling||t.shuffling?y(e).concat([t]):y(e.slice(0,-1)).concat([{text:n.text+t.text,shuffling:!1}])}),[]).map((function(e,t){return(0,r.jsx)("span",{className:[w.tagLineLetter,e.shuffling?w.shufflingLetter:""].join(" "),"data-txt":e.text,children:e.text},t)}))};return(0,r.jsx)("div",{className:w.container,children:(0,r.jsxs)("div",{className:w.tagLine,children:[(0,r.jsxs)("div",{className:w.tagLineBackground,children:[(0,r.jsx)("div",{className:w.tagLineBorderTop}),(0,r.jsx)("div",{className:w.tagLineBorderRight}),(0,r.jsx)(l.Z,{className:w.quoteText,children:"\u201d"}),(0,r.jsxs)("div",{className:w.content,children:[(0,r.jsx)("div",{className:w.tagLineContent,children:(0,r.jsx)(l.Z,{color:"textPrimary",className:w.tagLineText,children:C(h.primary)})}),(0,r.jsx)("div",{ref:i,className:[w.placeholderContent,w.tagLineContent].join(" "),children:(0,r.jsx)(l.Z,{className:w.tagLineText,children:b.primary})}),(0,r.jsx)("div",{style:{height:j.primary,transition:"height 300ms ease-in-out"}})]}),(0,r.jsxs)("div",{className:w.content,children:[(0,r.jsx)("div",{className:[w.tagLineContent,w.secondaryTagLineContainer].join(" "),children:(0,r.jsx)(l.Z,{color:"textSecondary",className:w.secondaryTagLineText,children:C(h.secondary)})}),(0,r.jsx)("div",{ref:a,className:[w.placeholderContent,w.tagLineContent,w.secondaryTagLineContainer].join(" "),children:(0,r.jsx)(l.Z,{className:w.secondaryTagLineText,children:b.secondary})}),(0,r.jsx)("div",{className:w.secondaryTagLineBackground,style:{height:j.secondary+4,transition:"height 300ms ease-in-out"}})]})]}),(0,r.jsx)("div",{className:w.stripeBackground})]})})},w=n(2084);function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var N=(0,a.Z)((function(e){return{container:{width:"100%",maxWidth:"540px",height:"272px",display:"flex",flexDirection:"column",alignItems:"center",overflow:"hidden"},content:{flex:1,display:"flex",flexDirection:"row",alignItems:"center",overflow:"hidden"},text:{color:e.palette.primary.main,whiteSpace:"nowrap",transition:"transform 1800ms ease-in-out"},alternate:{"&$text":{color:"rgb(0, 0, 0)",backgroundColor:e.palette.primary.main,border:"24px solid ".concat(e.palette.primary.main),mixBlendMode:"screen"}}}})),T=function(e){var t=S(o.useState({rotate:0}),2),n=t[0],i=t[1],a=function(){var e=n.rotate;i({rotate:e?0:1})};o.useEffect(a,[]),o.useEffect((function(){var e=setTimeout(a,3200*Math.random()+1800);return function(){return clearTimeout(e)}}),[n.rotate]);var c=e.variant,s=e.words,d=n.rotate,u=N({});return(0,r.jsx)("div",{className:u.container,children:s.map((function(e,t){return(0,r.jsx)("div",{className:u.content,children:(0,r.jsx)(l.Z,{variant:c,classes:{root:[u.text,t%2===0?u.alternate:""].join(" ")},style:{transform:"translateX(".concat(20*(t%2===d?1:-1),"%)")},children:Array(5).fill(e).join(" ")})},e)}))})},k=n(6056),I=n(4370);function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var A=(0,a.Z)((function(e){var t;return{container:{width:"100%",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"},body:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},pageContainer:E({width:"1200px",maxWidth:"100%",minHeight:"100vh",padding:"32px"},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{padding:"24px"}),pageContainerPadding:E({padding:"32px"},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{padding:"24px"}),footerPageContainer:{position:"relative",flexDirection:"column",alignItems:"center","&$pageContainer":{width:"100%",padding:"0"}},headerContent:{flex:1},darkSection:{width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"rgb(51, 51, 51)","& $bordered":{borderColor:e.palette.text.secondary},"& $numberLine:after":{borderColor:e.palette.text.secondary}},link:{color:e.palette.primary.main,textDecoration:"none"},hypegienicLogo:E({width:"180px"},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{width:"140px"}),hypeguardianLogo:E({width:"100px"},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{width:"80px"}),poweredContainer:{position:"relative",display:"flex",flexDirection:"column",marginTop:"8px",padding:"2px",overflow:"hidden","&:after, &:before":{content:"''",position:"absolute",width:"100%",left:"0",backgroundColor:e.palette.text.primary,zIndex:-1},"&:before":{height:"6px",bottom:"0",transform:"skew(135deg)",transformOrigin:"top left"},"&:after":{height:"calc(100% - 6px)",top:"0"}},poweredLabel:E({fontSize:"11px",fontWeight:800,color:e.palette.text.primary,backgroundColor:"rgb(255, 255, 255)",padding:"0 2px"},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{fontSize:"9px"}),hypeguardianLabel:E({fontSize:"18px",fontWeight:800,color:"rgb(255, 255, 255)",padding:"2px 2px 0"},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{fontSize:"9px"}),multiplyLabel:{flex:1,fontSize:"48px"},centeredTitleContainer:E({display:"flex",flexDirection:"column",alignItems:"center",marginTop:"8px",marginBottom:"8px"},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{marginTop:"6px",marginBottom:"6px"}),bordered:{padding:"16px",borderColor:e.palette.text.primary,borderWidth:"2px",borderStyle:"solid"},unbordered:E({padding:"12px 16px"},"& $numberText",E({marginTop:"4px"},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{marginTop:"2px"})),title:{lineHeight:1},titleLine:E({flex:1,width:"19px",borderWidth:"2px",borderColor:e.palette.primary.main,borderStyle:"solid",marginBottom:"6px",backgroundImage:"repeating-linear-gradient(".concat(["135deg","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0) 8px","".concat(e.palette.primary.main," 8px"),"".concat(e.palette.primary.main," 10px")].join(", "),")"),overflow:"hidden"},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{marginBottom:"4px"}),numberColumn:E({display:"flex",flexDirection:"column",marginTop:"8px",marginBottom:"8px",width:"32px"},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{marginTop:"6px",marginBottom:"6px"}),numberText:{fontFamily:"Exan, Monaco, monospace",fontWeight:600,marginBottom:"2px"},numberLine:(t={flex:1,position:"relative",width:"19px",minHeight:"2px",marginBottom:"6px",overflow:"hidden"},E(t,"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{marginBottom:"4px"}),E(t,"&:after",{content:'" "',position:"absolute",top:"0",height:"100%",width:"100%",borderWidth:"2px",borderColor:e.palette.text.primary,borderStyle:"solid"}),t),numberedContent:E({flex:1,display:"flex",flexDirection:"column",marginTop:"8px",marginBottom:"8px"},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{marginTop:"6px",marginBottom:"6px"}),footerBanner:{width:"100%",marginTop:"32px",display:"flex",alignSelf:"end",flexDirection:"column",alignItems:"center"},footer:E({width:"100%",paddingBottom:"12px",display:"flex",alignSelf:"end",flexDirection:"column",alignItems:"center",backgroundColor:"rgb(0, 0, 0)"},"& $hypegienicLogo",E({width:"128px",padding:"12px 0",opacity:.5},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{width:"112px"})),media:{display:"flex",flexDirection:"column",alignItems:"center",padding:"2px 16px",textDecoration:"none"},mediaIcon:E({height:"24px",marginBottom:"6px"},"@media (max-width:".concat(e.breakpoints.values.sm,"px)"),{height:"18px",marginBottom:"4px"}),mediaText:{textAlign:"center",whiteSpace:"pre"},copyright:{display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 0"},copyrightText:{color:"rgb(118, 121, 128)"}}})),Z=function(){var e=L((0,s.j)(),1)[0].type,t=o.useRef(),n=o.useRef();o.useEffect((function(){document.body.style.backgroundColor="white"}),[]);var a=function(e){e.scrollIntoView({behavior:"smooth"})};o.useEffect((function(){"#download"===window.location.hash&&setTimeout((function(){return a(t.current)}),0)}),[t.current]),o.useEffect((function(){"#contact"===window.location.hash&&setTimeout((function(){return a(n.current)}),0)}),[n.current]);var d=A({});return(0,r.jsxs)("div",{className:d.container,children:[(0,r.jsxs)(c.Z,{container:!0,direction:"column",alignItems:"center",classes:{container:d.pageContainer},children:[(0,r.jsx)(c.Z,{container:!0,direction:"row",justifyContent:"flex-end",children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)("img",{className:d.hypegienicLogo,src:"images/hypegienic-logo.svg"}),(0,r.jsxs)(c.Z,{container:!0,direction:"row",justifyContent:"flex-end",alignItems:"center",children:[(0,r.jsx)(l.Z,{color:"textPrimary",align:"center",className:d.multiplyLabel,children:"\xd7"}),(0,r.jsx)("img",{className:d.hypeguardianLogo,src:"images/hypeguardian-logo.svg"})]}),(0,r.jsxs)("div",{className:d.poweredContainer,children:[(0,r.jsx)(l.Z,{className:d.poweredLabel,children:"POWERED BY"}),(0,r.jsx)(l.Z,{color:"textPrimary",className:d.hypeguardianLabel,children:"HYPEGUARDIAN"})]})]})}),(0,r.jsx)(c.Z,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",classes:{container:d.headerContent},children:(0,r.jsx)(j,{})})]}),(0,r.jsx)("div",{className:d.darkSection,children:(0,r.jsx)(c.Z,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",classes:{container:d.pageContainer},children:(0,r.jsxs)("div",{className:d.bordered,children:[(0,r.jsxs)(c.Z,{container:!0,direction:"row",alignItems:"stretch",children:[(0,r.jsx)("div",{className:d.numberColumn,children:(0,r.jsx)("div",{className:d.titleLine})}),(0,r.jsx)("div",{className:d.numberedContent,children:(0,r.jsx)(w.Z,{sentence:"GET STARTED",color:"primary",variant:["xs-phone","sm-tablet"].includes(e)?"h5":"h4",classes:{root:d.title}})})]}),["Download the hypegienic app. Register/login the app following the instructions on the screen.","To deposit an order, open a locker unit through the app.","You will be notified when your items are ready for pick up.","Open the locker unit through the app to pick up your order."].map((function(t,n){return(0,r.jsxs)(c.Z,{container:!0,direction:"row",alignItems:"stretch",children:[(0,r.jsxs)("div",{className:d.numberColumn,children:[(0,r.jsxs)(l.Z,{color:"textSecondary",variant:"body1",classes:{root:d.numberText},children:["0",n+1]}),(0,r.jsx)("div",{className:d.numberLine})]}),(0,r.jsx)("div",{className:d.numberedContent,children:(0,r.jsx)(l.Z,{color:"textSecondary",variant:["xs-phone","sm-tablet"].includes(e)?"h6":"h5",children:t})})]},t)}))]})})}),(0,r.jsx)(c.Z,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",classes:{container:d.pageContainer},children:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:d.bordered,children:[(0,r.jsxs)(c.Z,{container:!0,direction:"row",alignItems:"stretch",children:[(0,r.jsx)("div",{className:d.numberColumn,children:(0,r.jsx)("div",{className:d.titleLine})}),(0,r.jsx)("div",{className:d.numberedContent,children:(0,r.jsx)(w.Z,{sentence:"YOUR SHOES ARE SAFE WITH US",color:"primary",variant:["xs-phone","sm-tablet"].includes(e)?"h5":"h4",classes:{root:d.title}})})]}),["Our app can only be authenticated via OTP sent to your registered device.","The hypelocker can only be unlocked when prompted by your authenticated device.","You will receive real-time updates on the progress of your order."].map((function(t,n){return(0,r.jsxs)(c.Z,{container:!0,direction:"row",alignItems:"stretch",children:[(0,r.jsxs)("div",{className:d.numberColumn,children:[(0,r.jsxs)(l.Z,{color:"textPrimary",variant:"body1",classes:{root:d.numberText},children:["0",n+1]}),(0,r.jsx)("div",{className:d.numberLine})]}),(0,r.jsx)("div",{className:d.numberedContent,children:(0,r.jsx)(l.Z,{color:"textPrimary",variant:["xs-phone","sm-tablet"].includes(e)?"h6":"h5",children:t})})]},t)}))]}),(0,r.jsx)("div",{className:d.unbordered,children:(0,r.jsxs)(c.Z,{container:!0,direction:"row",alignItems:"stretch",children:[(0,r.jsx)("div",{className:d.numberColumn,children:(0,r.jsx)(l.Z,{color:"textPrimary",variant:"body1",classes:{root:d.numberText},children:"//"})}),(0,r.jsx)("div",{className:d.numberedContent,children:(0,r.jsxs)(l.Z,{color:"textPrimary",variant:["xs-phone","sm-tablet"].includes(e)?"h6":"h5",children:["Check our",(0,r.jsx)(i.default,{href:"/terms-of-use",children:(0,r.jsx)("a",{className:d.link,children:" terms of use "})}),"for more details"]})})]})})]})}),(0,r.jsx)("div",{className:d.darkSection,children:(0,r.jsxs)(c.Z,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",classes:{container:d.pageContainer},children:[(0,r.jsx)("div",{className:d.centeredTitleContainer,children:(0,r.jsx)(w.Z,{sentence:"OUR SERVICES",color:"textSecondary",variant:["xs-phone","sm-tablet"].includes(e)?"h4":"h3",classes:{root:d.title},align:"center"})}),(0,r.jsx)(T,{variant:["xs-phone","sm-tablet"].includes(e)?"h4":"h3",words:["CLEANING","PROTECTION","CUSTOMISATION","RESTORATION"]})]})}),(0,r.jsxs)(c.Z,{container:!0,direction:"column",justifyContent:"space-between",alignItems:"center",innerRef:t,classes:{container:[d.pageContainer,d.footerPageContainer].join(" ")},children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{className:d.pageContainerPadding,children:(0,r.jsx)(k.Z,{})}),(0,r.jsx)("div",{className:d.footerBanner,children:(0,r.jsx)(I.Z,{})})]}),(0,r.jsxs)("div",{ref:n,className:d.footer,children:[(0,r.jsxs)("a",{className:d.media,href:"https://www.google.com/maps/place/HypeGuardian/@3.0697401,101.6001784,17z/data=!3m1!4b1!4m5!3m4!1s0x31cc4dbe5360f2c9:0xe0bbcd55f4859d9c!8m2!3d3.0697347!4d101.6023724",children:[(0,r.jsx)("img",{className:d.mediaIcon,src:"images/place.svg"}),(0,r.jsx)(l.Z,{color:"textSecondary",variant:["xs-phone","sm-tablet"].includes(e)?"caption":"body1",classes:{root:d.mediaText},children:["37-1, Jalan PJS 11/7,","Bandar Sunway,","47500 Petaling Jaya,","Selangor"].join("\n")})]}),(0,r.jsxs)("div",{className:d.copyright,children:[(0,r.jsx)("img",{className:d.hypegienicLogo,src:"images/hypegienic-white-logo.svg"}),(0,r.jsx)(l.Z,{variant:"caption",classes:{root:d.copyrightText},children:"\xa9 2022 HYPE X GIENIC SDN. BHD."})]})]})]})}},2084:function(e,t,n){"use strict";var r=n(5893),o=n(7294),i=n(7),a=n(2318);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=(0,i.Z)((function(e){return{text:{overflow:"hidden"},container:{display:"inline-block",position:"relative",overflow:"hidden",color:"transparent"},innerContainer:{position:"absolute",display:"flex",flexDirection:"column",transition:"top 600ms",pointerEvents:"none"}}}));t.Z=function(e){var t=e.sentence,n=d(e,["sentence"]),i=t.split(" "),c=u(o.useState({locations:i.map((function(e){return Math.floor(5*Math.random())}))}),2),l=c[0],m=c[1],f=function(){var e=l.locations;m({locations:e.map((function(e){return Math.random()<=.25?Math.floor(5*Math.random()):e}))})};o.useEffect((function(){var t=e.sentence.split(" ");m({locations:t.map((function(e){return Math.floor(5*Math.random())}))})}),[e.sentence]),o.useEffect(f,[]),o.useEffect((function(){var e=setTimeout(f,1800*Math.random()+600);return function(){return clearTimeout(e)}}),[l.locations]);var h=l.locations,x=p({});return(0,r.jsx)(a.Z,s({},n,{classes:s({},n.classes,{root:[n.classes.root,x.text].join(" ")}),children:i.map((function(e,t){return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsxs)("div",{className:x.container,children:[e,(0,r.jsx)("div",{className:x.innerContainer,style:{top:"-".concat(100*h[t],"%")},children:Array(5).fill(void 0).map((function(t,o){return(0,r.jsx)(a.Z,s({},n,{children:e}),o)}))})]})," "]},e+t)}))}))}}},function(e){e.O(0,[786,591,652,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);