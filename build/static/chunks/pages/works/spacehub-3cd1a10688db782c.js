(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[893],{4651:function(a,b,c){"use strict";c.d(b,{Ee:function(){return m}});var d=c(6052),e=c(5031),f=c(7294),g=c(7375);function h(){return(h=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function i(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}var j=["htmlWidth","htmlHeight","alt"],k=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],l=f.forwardRef(function(a,b){var c=a.htmlWidth,d=a.htmlHeight,e=a.alt,g=i(a,j);return f.createElement("img",h({width:c,height:d,ref:b,alt:e},g))}),m=(0,d.Gp)(function(a,b){var c,j,m,n,o,p,q,r,s,t,u,v,w,x,y,z=a.fallbackSrc,A=a.fallback,B=a.src,C=a.srcSet,D=a.align,E=a.fit,F=a.loading,G=a.ignoreFallback,H=a.crossOrigin,I=i(a,k),J=null!=F||G|| void 0===z&& void 0===A,K=(j=(c=h({},a,{ignoreFallback:J})).loading,m=c.src,n=c.srcSet,o=c.onLoad,p=c.onError,q=c.crossOrigin,r=c.sizes,s=c.ignoreFallback,t=(0,f.useState)("pending"),u=t[0],v=t[1],(0,f.useEffect)(function(){v(m?"loading":"pending")},[m]),w=(0,f.useRef)(),x=(0,f.useCallback)(function(){if(m){y();var a=new Image();a.src=m,q&&(a.crossOrigin=q),n&&(a.srcset=n),r&&(a.sizes=r),j&&(a.loading=j),a.onload=function(a){y(),v("loaded"),null==o||o(a)},a.onerror=function(a){y(),v("failed"),null==p||p(a)},w.current=a}},[m,q,n,r,o,p,j]),y=function(){w.current&&(w.current.onload=null,w.current.onerror=null,w.current=null)},(0,g.Gw)(function(){if(!s)return"loading"===u&&x(),function(){y()}},[u,x,s]),s?"loaded":u),L=h({ref:b,objectFit:E,objectPosition:D},J?I:(0,e.CE)(I,["onError","onLoad"]));return"loaded"!==K?A||f.createElement(d.m$.img,h({as:l,className:"chakra-image__placeholder",src:z},L)):f.createElement(d.m$.img,h({as:l,src:B,srcSet:C,crossOrigin:H,loading:F,className:"chakra-image"},L))});e.Ts&&(m.displayName="Image")},6944:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/spacehub",function(){return c(9877)}])},603:function(a,b,c){"use strict";c.d(b,{P4:function(){return i},Et:function(){return j},Pg:function(){return k}});var d=c(5893),e=c(1664),f=c(5675),g=c(8527),h=c(917),i=function(a){var b=a.children,c=a.href,e=a.title,h=a.thumbnail;return(0,d.jsx)(g.xu,{w:"100%",textAlign:"center",children:(0,d.jsxs)(g.fG,{cursor:"pointer",children:[(0,d.jsx)(f.default,{src:h,alt:e,className:"grid-item-thumbnail",placeholder:"blur",loading:"lazy"}),(0,d.jsx)(g.AB,{href:c,target:"_blank",children:(0,d.jsx)(g.xv,{mt:2,children:e})}),(0,d.jsx)(g.xv,{fontSize:14,children:b})]})})},j=function(a){var b=a.children,c=a.id,h=a.title,i=a.thumbnail;return(0,d.jsx)(g.xu,{w:"100%",textAlign:"center",children:(0,d.jsx)(e.default,{href:"/works/".concat(c),children:(0,d.jsxs)(g.fG,{cursor:"pointer",children:[(0,d.jsx)(f.default,{src:i,alt:h,className:"grid-item-thumbnail",layout:"responsive",placeholder:"blur"}),(0,d.jsx)(g.AB,{href:"/works/".concat(c),children:(0,d.jsx)(g.xv,{mt:2,fontSize:20,children:h})}),(0,d.jsx)(g.xv,{fontSize:14,children:b})]})})})},k=function(){return(0,d.jsx)(h.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},2857:function(a,b,c){"use strict";var d=c(5893),e=c(3319),f=c(9008),g=c(603),h={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:20}};b.Z=function(a){var b=a.children,c=a.title;return(0,d.jsx)(e.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:h,transition:{duration:0.4,type:"easeInOut"},style:{position:"relative"},children:(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsx)(f.default,{children:(0,d.jsxs)("title",{children:[c," - Essohanam TAMBANA"]})}),b,(0,d.jsx)(g.Pg,{})]})})}},3562:function(a,b,c){"use strict";var d=c(5934);function e(){var a,b,c=(a=["\n    text-align: justify;\n    \n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return e=function(){return c},c}var f=d.Z.p(e());b.Z=f},3922:function(a,b,c){"use strict";c.d(b,{Dx:function(){return i},WZ:function(){return j},h_:function(){return k}});var d=c(5893),e=c(1664),f=c(8527),g=c(4651),h=c(8485),i=function(a){var b=a.children;return(0,d.jsxs)(f.xu,{children:[(0,d.jsx)(e.default,{href:"/works",children:(0,d.jsx)(f.rU,{children:"Works"})}),(0,d.jsxs)("span",{children:["\xa0",(0,d.jsx)(h.XC,{}),"\xa0"]}),(0,d.jsx)(f.X6,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:b})]})},j=function(a){var b=a.src,c=a.alt;return(0,d.jsx)(g.Ee,{borderRadius:"lg",w:"full",src:b,alt:c,mb:4})},k=function(a){var b=a.children;return(0,d.jsx)(f.Ct,{colorScheme:"green",mr:2,children:b})}},9877:function(a,b,c){"use strict";c.r(b);var d=c(5893),e=c(8527),f=c(8485),g=c(3922),h=c(3562),i=c(2857);b.default=function(){return(0,d.jsxs)(i.Z,{title:"Space Hub",children:[(0,d.jsx)(e.W2,{children:(0,d.jsxs)(g.Dx,{children:["Space Hub ",(0,d.jsx)(e.Ct,{children:"2023"})]})}),(0,d.jsxs)(h.Z,{children:["Space Travelers Hub is a web application that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. In collboration with",(0,d.jsxs)("a",{href:"https://github.com/Errytagedesign",target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"#fff",transition:"color 0.3s ease",cursor:"pointer"},onMouseOver:function(a){a.target.style.color="#fff",a.target.style.textDecoration="underline"},onMouseOut:function(a){a.target.style.color="#fff",a.target.style.textDecoration="none"},children:[(0,d.jsx)("br",{}),"Sodeeq Olaide Awoyemi"]})]}),(0,d.jsxs)(e.aV,{ml:4,my:4,children:[(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(g.h_,{children:" Website "}),(0,d.jsxs)(e.rU,{href:"https://space-travelers-qg24.onrender.com/",children:["Website ",(0,d.jsx)(f.h0,{mr:2})]})]}),(0,d.jsxs)(e.HC,{children:[(0,d.jsx)(g.h_,{children:" Stack "}),(0,d.jsx)("span",{children:"Ruby on Rails"})]})]}),(0,d.jsx)(g.WZ,{src:"/images/works/spacehub.png",alt:"spacehub"})]})}}},function(a){a.O(0,[774,888,179],function(){return a(a.s=6944)}),_N_E=a.O()}])