(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{88619:function(e,t,s){Promise.resolve().then(s.bind(s,3251))},3251:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var a=s(57437),l=s(29824),i=s.n(l),n=s(2265),c=s(92789),r=s(71610),m=s(87138),o=s(64781);function d(){let[e,t]=(0,n.useState)(!1);(0,n.useEffect)(()=>{t(!0)},[]);let s=n.useRef(null),[l,d]=(0,n.useState)([]),[h,x]=(0,n.useState)([]),p=async()=>{let e=await fetch("https://api.letterform.app/public/pages/list?project_slug=goodcodeclub-blog"),t=await e.json();d(t.data),x(structuredClone(t.data).reverse())};return(0,n.useEffect)(()=>{p()},[]),(0,a.jsxs)("div",{className:"my-auto0 py-lg-4 py-4 font-neodgm1 text-uppercase1",ref:s,children:[(0,a.jsx)("div",{className:"reveal1 mb-lg-5 mb-4",children:(0,a.jsx)(c.Z,{})}),(0,a.jsx)("div",{className:"px-lg-0 px-3",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row gx-lg-5 align-items-stretch",children:[(0,a.jsxs)("div",{className:"col-xl-8 col-lg-7",children:[(0,a.jsx)("h4",{className:"text-uppercase d-inline-flex bg-white text-primary lh-1 py-2 px-3 fw-normal m-0 mb-2",children:"Blog"}),(0,a.jsx)("div",{className:"mb-0 reveal2 row gy-1",children:h.map((e,t)=>{let s={};try{s=r.ZP.parse(e.metadata)}catch(e){}return(0,a.jsxs)("div",{className:"d-flex1 align-items-center lh-sm",children:[(0,a.jsx)(m.default,{className:"d-block w-100 opacity-15 fs-6",style:{whiteSpace:""},href:"/blog/"+e.slug,children:e.title}),(0,a.jsx)("div",{className:"mt-1",children:(0,a.jsx)("p",{className:"m-0 ms-auto fw-light small",style:{whiteSpace:""},children:(0,a.jsx)("span",{className:"opacity-50",children:new Date(s.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})})})]},"article_"+t)})})]}),(0,a.jsx)("div",{className:"col-xl-4 col-lg-5",children:(0,a.jsx)("div",{className:"row gx-lg-5 h-100",children:(0,a.jsx)("div",{className:"col-xl-12 mt-lg-0 mt-4 h-100",children:(0,a.jsx)("div",{className:"position-sticky",style:{top:"1.5rem"},children:(0,a.jsx)(o.Y,{list:l,noto:i()})})})})})]})})})]})}},92789:function(e,t,s){"use strict";s.d(t,{Z:function(){return n}});var a=s(57437),l=s(87138),i=s(16463);function n(){let e=(0,i.usePathname)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:" text-dark1 sticky-top bg-white1 border-muted px-lg-0 px-md-3 px-2",children:(0,a.jsxs)("div",{className:"container bg-transparent d-lg-flex d-flex align-items-center",children:[(0,a.jsxs)(l.default,{className:"active text-dark d-flex justify-content-center align-items-center text-decoration-none",href:"/",children:[(0,a.jsx)("img",{src:"https://legacy.goodcodeclub.com/images/gcc_alt.png",className:"me-lg-3",style:{height:"2rem",transformOrigin:"center",transform:""}}),(0,a.jsx)("div",{className:"d-lg-block d-none",children:(0,a.jsx)("h4",{className:"mb-0 fw-semibold lh-1 text-white",children:"GoodCodeClub"})})]}),(0,a.jsx)("div",{className:"text-decoration-none ms-lg-4 ms-md-4 ms-3 d-flex justify-content-center mt-lg-0 mt-0 d-none1 text-uppercase fw-semibold small",children:[{name:"Home",path:"/"},{name:"Work",path:"/work"},{name:"Blog",path:"/blog"}].map((t,s)=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("a",{href:t.path,className:"text-decoration-none d-lg-block d-none1 px-0 mx-0 me-0 me-md-3 me-2 "+(e==t.path||t.path.length>1&&0===e.indexOf(t.path)?"border-bottom1 border-21 opacity-100":"opacity-50"),children:t.name})}))}),(0,a.jsx)("div",{className:"ms-auto d-lg-flex d-flex d-none1 text-center mt-lg-0 mt-0 justify-content-center align-items-center",children:(0,a.jsxs)("div",{className:"text-lg-end text-center fs-5 d-lg-flex d-flex align-items-center",children:[(0,a.jsx)("a",{className:"ms-lg-0 ms-0",target:"_blank",href:"https://www.linkedin.com/company/goodcodeclub/",children:(0,a.jsx)("i",{className:"bi bi-linkedin"})}),(0,a.jsx)("a",{className:"ms-lg-2 ms-2",href:"mailto:chris@goodcodeclub.com",children:(0,a.jsx)("i",{className:"bi bi-envelope-fill"})})]})})]})})})}s(2265)},64781:function(e,t,s){"use strict";s.d(t,{Y:function(){return n}});var a=s(57437),l=s(87138),i=s(71610);function n(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{className:"text-uppercase d-inline-flex bg-white text-primary lh-1 py-2 px-3 fw-normal m-0 mb-2",children:"Contact Us"}),(0,a.jsxs)("p",{className:"m-0 lh-sm mb-4 text-truncate",children:[(0,a.jsx)("i",{className:"bi bi-person"})," ",(0,a.jsx)("a",{href:"https://chriskkim.com/",target:"_blank",children:"Chris Kim, PhD"})," ",(0,a.jsx)("br",{}),(0,a.jsx)("i",{className:"bi bi-envelope"})," ",(0,a.jsx)("a",{href:"mailto:chris@goodcodeclub.com",children:"chris@goodcodeclub.com"}),(0,a.jsx)("br",{}),(0,a.jsx)("i",{className:"bi bi-calendar2"})," ",(0,a.jsx)("a",{href:"https://chriskkim.youcanbook.me/",target:"_blank",children:"Book a meeting"})]}),(0,a.jsx)("h4",{className:"text-uppercase d-inline-flex bg-white text-primary lh-1 py-2 px-3 fw-normal m-0 mb-2",children:"Current projects"}),(0,a.jsx)("div",{className:"row gy-1 mb-4 align-items-center",children:[{image:"../../htmlcats.svg",url:"https://htmlcats.com",name:"HTMLCATS",description:"Free web development tutorials"},{image:"https://flexboxtoronto.com/images/logo_white.svg",url:"https://flexboxtoronto.com",name:"Flexbox",description:"Flexible studio rental"},{image:"../../saboten.svg",url:"https://letterform.app",name:"Letterform",description:"Minimalist publishing platform"},{image:"../../kindervillage.svg",url:"https://kindervillage.ca",name:"Kindervillage",description:"Child care resources and solutions"}].map((e,t)=>(0,a.jsx)("div",{className:"col-12",children:(0,a.jsxs)("a",{href:e.url,target:"_blank",className:"d-flex align-items-center text-decoration-none ",children:[(0,a.jsx)("img",{src:e.image,className:"d-block",style:{width:"2rem"}}),(0,a.jsxs)("div",{className:"w-100 ms-2 text-truncate overflow-hidden",children:[(0,a.jsx)("h6",{className:"fw-normal m-0 text-decoration-underline",children:e.name}),(0,a.jsx)("p",{className:"m-0 small ms-auto opacity-50 fw-light w-100 text-truncate overflow-hidden",style:{whiteSpace:"nowrap"},children:e.description})]})]})}))}),(0,a.jsx)("h4",{className:"text-uppercase d-inline-flex bg-white text-primary lh-1 py-2 px-3 fw-normal m-0 mb-2",children:"Latest News"}),(0,a.jsx)("div",{className:"mb-0 reveal2",children:structuredClone(e.list).reverse().map((e,t)=>{if(t>0)return(0,a.jsx)(a.Fragment,{});let s={};try{s=i.ZP.parse(e.metadata)}catch(e){}return(0,a.jsxs)("div",{className:"d-flex1 align-items-center lh-sm",children:[(0,a.jsx)(l.default,{className:"d-block w-100 opacity-15",style:{whiteSpace:""},href:"/blog/"+e.slug,children:e.title}),(0,a.jsx)("div",{className:"small mt-1",children:(0,a.jsxs)("p",{className:"m-0 small ms-auto fw-light",style:{whiteSpace:""},children:[(0,a.jsxs)("span",{className:"opacity-50",children:[new Date(s.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})," - ",s.excerpt]})," ",(0,a.jsx)(l.default,{href:"/blog/"+e.slug,className:"text-white opacity-100",children:"(Read more)"})]})})]},"article_"+t)})})]})}},29824:function(e){e.exports={style:{fontFamily:"'__Noto_Sans_KR_a2fa62', '__Noto_Sans_KR_Fallback_a2fa62'",fontStyle:"normal"},className:"__className_a2fa62"}}},function(e){e.O(0,[275,411,971,23,744],function(){return e(e.s=88619)}),_N_E=e.O()}]);