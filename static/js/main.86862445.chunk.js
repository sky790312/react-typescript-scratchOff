(this["webpackJsonp@sky790312/react-scratch-off"]=this["webpackJsonp@sky790312/react-scratch-off"]||[]).push([[0],{20:function(e,t,n){"use strict";n.r(t);var c,i,r,o,a=n(0),u=n.n(a),l=n(9),s=n.n(l),h=n(2),d=n(3),v=n(4),b=v.a.div(c||(c=Object(d.a)(["\n  position: relative;\n  margin: 0 auto;\n  width: ",";\n  height: ",";\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n"])),(function(e){return"".concat(e.width,"px")}),(function(e){return"".concat(e.height,"px")})),j=v.a.canvas(i||(i=Object(d.a)(["\n  position: absolute;\n  top: 0;\n"]))),f=v.a.div(r||(r=Object(d.a)(["\n  visibility: ",";\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  word-break: break-all;\n"])),(function(e){return e.isCoverImageReady?"visible":"hidden"})),O=v.a.img(o||(o=Object(d.a)(["\n  display: none;\n"]))),m=function(e,t){var n=0,c=0,i=0,r=0;if(t.offsetParent)for(;t=t.offsetParent;)n+=t.offsetLeft,c+=t.offsetTop;return g(e)&&(i=e.pageX-n,r=e.pageY-c),x(e)&&(i=e.touches[0].clientX-n,r=e.touches[0].clientY-c),{x:i,y:r}},x=function(e){return e&&"touches"in e},g=function(e){return e&&"screenX"in e},p=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&"object"!==typeof e[n]&&"function"!==typeof e[n]&&(t[n]=e[n]);return JSON.stringify(t)},y=n(1),w=function(e){var t=e.revealPercentage,n=void 0===t?50:t,c=e.width,i=e.height,r=e.coverImgSrc,o=e.children,u=e.handleReveal,l=Object(a.useRef)(null),s=Object(a.useRef)(null),d=Object(a.useState)(!1),v=Object(h.a)(d,2),x=v[0],g=v[1];return Object(a.useEffect)((function(){l.current.src=r,l.current.onload=function(){g(!0)}}),[r]),Object(a.useEffect)((function(){if(x){var e,t,r=s.current,o=null===r||void 0===r?void 0:r.getContext("2d"),a=new Image;a.src="data:image/jpeg;base64,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",o.drawImage(l.current,0,0,c,i);var h=function(n){e=!0,t=m(n,r)},d=function(l){if(e){l.preventDefault();for(var s,h,d,v,b=m(l,r),j=(s=t,h=b,Math.sqrt(Math.pow(h.x-s.x,2)+Math.pow(h.y-s.y,2))),f=function(e,t){return Math.atan2(t.x-e.x,t.y-e.y)}(t,b),O=0;O<j;O+=1)d=t.x+Math.sin(f)*O-25,v=t.y+Math.cos(f)*O-25,o.globalCompositeOperation="destination-out",o.drawImage(a,d,v);t=b,function(e,t,n,c){for(var i,r,o=!e||e<1?1:e,a=t.getImageData(0,0,n,c),u=null!==(i=null===a||void 0===a?void 0:a.data)&&void 0!==i?i:[],l=null!==(r=null===u||void 0===u?void 0:u.length)&&void 0!==r?r:0,s=l/o,h=0,d=0;d<l;d+=o)0===+u[d]&&h++;return Math.round(h/s*100)}(32,o,c,i)>n&&(null===r||void 0===r?void 0:r.parentNode)&&(u(),null===r||void 0===r||r.parentNode.removeChild(r))}},v=function(){e=!1};return null===r||void 0===r||r.addEventListener("mousedown",h,!1),null===r||void 0===r||r.addEventListener("touchstart",h,!1),null===r||void 0===r||r.addEventListener("mousemove",d,!1),null===r||void 0===r||r.addEventListener("touchmove",d,!1),null===r||void 0===r||r.addEventListener("mouseup",v,!1),null===r||void 0===r||r.addEventListener("touchend",v,!1),function(){null===r||void 0===r||r.removeEventListener("mousedown",h,!1),null===r||void 0===r||r.removeEventListener("touchstart",h,!1),null===r||void 0===r||r.removeEventListener("mousemove",d,!1),null===r||void 0===r||r.removeEventListener("touchmove",d,!1),null===r||void 0===r||r.removeEventListener("mouseup",v,!1),null===r||void 0===r||r.removeEventListener("touchend",v,!1)}}}),[u,n,i,c,x]),Object(y.jsxs)(b,{width:c,height:i,children:[Object(y.jsx)(j,{ref:s,width:c,height:i}),Object(y.jsx)(f,{isCoverImageReady:x,children:o}),Object(y.jsx)(O,{alt:"",ref:l,crossOrigin:"anonymous"})]})},C=function(e,t){return"object"===typeof(null===e||void 0===e?void 0:e.children)?p(null===e||void 0===e?void 0:e.children.props.children)===p(null===t||void 0===t?void 0:t.children.props.children):(null===e||void 0===e?void 0:e.children)===(null===t||void 0===t?void 0:t.children)},k=Object(a.memo)(w,C),A="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",E=737,I=480,L=50,R=function(){var e=A,t=E,n=I,c=L,i=Object(a.useState)(0),r=Object(h.a)(i,2),o=r[0],u=r[1],l=Object(a.useState)(e),s=Object(h.a)(l,2),d=s[0],v=s[1],b=Object(a.useState)(t),j=Object(h.a)(b,2),f=j[0],O=j[1],m=Object(a.useState)(n),x=Object(h.a)(m,2),g=x[0],p=x[1],w=Object(a.useState)(c),C=Object(h.a)(w,2),R=C[0],S=C[1],B=Object(a.useState)(e),X=Object(h.a)(B,2),M=X[0],J=X[1],P=Object(a.useState)(t),F=Object(h.a)(P,2),q=F[0],U=F[1],K=Object(a.useState)(n),V=Object(h.a)(K,2),G=V[0],N=V[1],Y=Object(a.useState)(c),T=Object(h.a)(Y,2),Z=T[0],W=T[1],H=Object(a.useCallback)((function(){console.log("handle function after reveal.")}),[]),Q=function(){J(d),U(f),N(g),W(R),z()},z=function e(){var t=D();o!==t?u(t):e()},D=function(){return Math.floor(100*Math.random())};return Object(y.jsxs)("div",{children:[Object(y.jsx)("h4",{children:"ScratchOff Card"}),Object(y.jsx)("p",{children:"Given the scratch card container's width and height and the cover img url(relative or absolute url), the scratch off card will fit the container automatically. Also, custom the result section you want(HTML dom or just image..etc.)."}),Object(y.jsx)("p",{children:"Setting the fill percentage to reveal(default 50)."}),Object(y.jsxs)("div",{children:["image url:"," ",Object(y.jsx)("input",{type:"text",value:d,size:50,onChange:function(e){return v(e.target.value)}})," ","width:"," ",Object(y.jsx)("input",{type:"text",value:f,onChange:function(e){return O(+e.target.value)}})," ","height:"," ",Object(y.jsx)("input",{type:"text",value:g,onChange:function(e){return p(+e.target.value)}})]}),Object(y.jsxs)("p",{children:["reveal percentage:"," ",Object(y.jsx)("input",{type:"number",min:1,value:R,onChange:function(e){return S(+e.target.value)}})," ",Object(y.jsx)("button",{type:"button",onClick:Q,disabled:!d||!f||!g||!R,children:"generate"})," "]}),Object(y.jsx)("p",{children:Object(y.jsx)("button",{type:"button",onClick:function(){v(e),O(t),p(n),S(c)},children:"reset default setting"})}),Object(y.jsx)(k,{width:q,height:G,coverImgSrc:M,handleReveal:H,revealPercentage:Z,children:Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:"Congratulations!"}),Object(y.jsx)("h1",{children:Object(y.jsx)("code",{children:"Coupon code : 1651613335"})}),Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{type:"button",onClick:Q,children:"replay again"}),Object(y.jsx)("p",{children:"same as generate behavior outside(using changing key to replay.)"})]})]})},o)]})};s.a.render(Object(y.jsx)(u.a.StrictMode,{children:Object(y.jsx)(R,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.86862445.chunk.js.map