(this.webpackJsonpFCTBCT=this.webpackJsonpFCTBCT||[]).push([[0],{242:function(e,t){},265:function(e,t){},267:function(e,t){},345:function(e,t){},347:function(e,t){},380:function(e,t){},385:function(e,t){},387:function(e,t){},394:function(e,t){},407:function(e,t){},430:function(e,t){},439:function(e,t){},441:function(e,t){},511:function(e,t,a){},512:function(e,t,a){"use strict";a.r(t);var n,o,i,r,s,c,l,h,d,b,u,j,p,g,f,m,x,O=a(2),w=a(84),y=a.n(w),v=a(16),T=a.n(v),k=a(42),A=a(68),E=a(13),C=a(57),S=a(67),I=a.n(S),N=a(216),_=a.n(N),D=a(69),L=a(217),M=a(18),R={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(M.a)(Object(M.a)({},R),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(M.a)(Object(M.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(M.a)(Object(M.a)({},R),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(M.a)(Object(M.a)({},e),{},{account:t.payload.account});default:return e}},P={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(M.a)(Object(M.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(M.a)(Object(M.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(M.a)(Object(M.a)({},P),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},B=Object(D.b)({blockchain:W,data:F}),H=[L.a],G=Object(D.c)(D.a.apply(void 0,H)),U=Object(D.d)(B,G),z=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},K=function(){return function(){var e=Object(k.a)(T.a.mark((function e(t){var a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,U.getState().blockchain.smartContract.methods.totalSupply().call();case 4:a=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:a}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(z("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},Y=function(e){return{type:"CONNECTION_FAILED",payload:e}},q=function(e){return function(){var t=Object(k.a)(T.a.mark((function t(a){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"UPDATE_ACCOUNT",payload:{account:e}}),a(K());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},V=a(14),J=V.a.div(n||(n=Object(E.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),Q=V.a.div(o||(o=Object(E.a)(["\n  height: 8px;\n  width: 8px;\n"]))),X=V.a.div(i||(i=Object(E.a)(["\n  height: 16px;\n  width: 16px;\n"]))),Z=V.a.div(r||(r=Object(E.a)(["\n  height: 24px;\n  width: 24px;\n"]))),$=V.a.div(s||(s=Object(E.a)(["\n  height: 32px;\n  width: 32px;\n"]))),ee=V.a.div(c||(c=Object(E.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),te=V.a.p(l||(l=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),ae=(V.a.p(h||(h=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),V.a.p(d||(d=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 33px;\n  line-height: 1.15;\n  text-align: left;\n"])))),ne=(V.a.div(b||(b=Object(E.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),a(0)),oe=V.a.button(u||(u=Object(E.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ie=V.a.button(j||(j=Object(E.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),re=V.a.div(p||(p=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),se=V.a.img(g||(g=Object(E.a)(["\n  width: 100%;\n  @media (min-width: 767px) {\n    width: 800px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),ce=V.a.img(f||(f=Object(E.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px solid var(--secondary);\n  background-color: var(--accent);\n  border-radius: 0%;\n  width: 300px;\n  @media (min-width: 900px) {\n    width: 300px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),le=V.a.img(m||(m=Object(E.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  background-color: var(--accent);\n  width: 100%;\n  @media (min-width: 900px) {\n    width: 100%;\n  }\n  @media (min-width: 1000px) {\n    width: 100%;\n  }\n  transition: width 0.5s;\n"]))),he=V.a.a(x||(x=Object(E.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var de=function(){var e,t,a=Object(C.b)(),n=Object(C.c)((function(e){return e.blockchain})),o=Object(C.c)((function(e){return e.data})),i=Object(O.useState)(!1),r=Object(A.a)(i,2),s=r[0],c=r[1],l=Object(O.useState)("Click buy and mint that shit."),h=Object(A.a)(l,2),d=h[0],b=h[1],u=Object(O.useState)(1),j=Object(A.a)(u,2),p=j[0],g=j[1],f=Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),m=Object(A.a)(f,2),x=m[0],w=m[1],y=function(){""!==n.account&&null!==n.smartContract&&a(K(n.account))},v=function(){var e=Object(k.a)(T.a.mark((function e(){var t,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,w(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.useEffect)((function(){v()}),[]),Object(O.useEffect)((function(){y()}),[n.account]),Object(ne.jsx)(J,{children:Object(ne.jsxs)(ee,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:x.SHOW_BACKGROUND?"/config/images/bg__.png":null,children:[Object(ne.jsxs)(ae,{style:{textAlign:"center",color:"var(--primary-text)",width:"88%"},children:[" ",Object(ne.jsx)("a",{href:"https://discord.gg/ajrvGfCA",target:"_blank",children:"DISCORD"})," | ",Object(ne.jsx)("a",{href:"https://twitter.com/fctbct",target:"_blank",children:"TWITTER"})]}),Object(ne.jsx)($,{}),Object(ne.jsx)(se,{alt:"logo",src:"/config/images/logo.png"}),Object(ne.jsx)(X,{}),Object(ne.jsx)(ee,{jc:"center",ai:"center",style:{width:"88%"},children:Object(ne.jsx)(le,{alt:"tldr",src:"/config/images/degens.jpg"})}),Object(ne.jsxs)(ae,{style:{textAlign:"left",color:"var(--primary-text)",width:"88%"},children:["Blow the trumpets and bang the drums.",Object(ne.jsx)($,{}),"Rejoice, for DEEP STATE DEGENS, VOLUME 1 is here. The inaugural release from FCTBCT.",Object(ne.jsx)($,{}),"A PFP collection of 11,111 with a max mint of 11 at 0.01111 ETH each. The first photographic punks-style generative avatar project that we're aware of, too.",Object(ne.jsx)($,{}),"We've got a loooooong ass manifesto explaining everything below.",Object(ne.jsx)($,{}),"But you don't read--So the tl;dr is basically:",Object(ne.jsx)($,{}),"we have a big vision and the shit knocks.",Object(ne.jsx)($,{}),"Mint and prosper, anon.",Object(ne.jsx)($,{})]}),Object(ne.jsxs)(re,{flex:1,style:{padding:24},test:!0,children:[Object(ne.jsx)(ee,{flex:1,jc:"center",ai:"center",children:Object(ne.jsx)(ce,{alt:"example",src:"/config/images/3.gif"})}),Object(ne.jsx)($,{}),Object(ne.jsx)(ee,{flex:1,jc:"center",ai:"center",children:Object(ne.jsx)(ce,{alt:"example",src:"/config/images/2.gif"})}),Object(ne.jsx)(ee,{flex:1,jc:"center",ai:"center",children:Object(ne.jsx)(ce,{alt:"example",src:"/config/images/1.gif"})}),Object(ne.jsx)(ee,{flex:1,jc:"center",ai:"center",children:Object(ne.jsx)(ce,{alt:"example",src:"/config/images/4.gif"})})]}),Object(ne.jsxs)(re,{flex:1,style:{padding:24},test:!0,children:[Object(ne.jsx)(ee,{flex:1,jc:"center",ai:"center",children:Object(ne.jsx)(ce,{alt:"example",src:"/config/images/release.gif"})}),Object(ne.jsx)($,{}),Object(ne.jsxs)(ee,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:0,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(ne.jsxs)(te,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[o.totalSupply," / ",x.MAX_SUPPLY]}),Object(ne.jsx)(ae,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(ne.jsx)(he,{target:"_blank",href:x.SCAN_LINK,children:(e=x.CONTRACT_ADDRESS,t=15,e.length>t?"".concat(e.substring(0,t),"..."):e)})}),Object(ne.jsx)(X,{}),Number(o.totalSupply)>=x.MAX_SUPPLY?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(ne.jsxs)(ae,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",x.NFT_NAME," on"]}),Object(ne.jsx)(X,{}),Object(ne.jsx)(he,{target:"_blank",href:x.MARKETPLACE_LINK,children:x.MARKETPLACE})]}):Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",x.SYMBOL," IS ",x.DISPLAY_COST," ",x.NETWORK.SYMBOL,"."]}),Object(ne.jsx)(X,{}),""===n.account||null===n.smartContract?Object(ne.jsxs)(ee,{ai:"center",jc:"center",children:[Object(ne.jsx)(ae,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Cough up teh bread."}),Object(ne.jsx)(Q,{}),Object(ne.jsxs)(ae,{style:{textAlign:"center",color:"var(--accent-text)"},children:["11 MINTS MAX, ANON.",Object(ne.jsx)(X,{})]}),Object(ne.jsx)(oe,{onClick:function(e){e.preventDefault(),a(function(){var e=Object(k.a)(T.a.mark((function e(t){var a,n,o,i,r,s,c,l,h;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return o=e.sent,e.next=12,o.json();case 12:if(i=e.sent,r=window,!(s=r.ethereum)||!s.isMetaMask){e.next=33;break}return I.a.setProvider(s),c=new _.a(s),e.prev=18,e.next=21,s.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,s.request({method:"net_version"});case 24:e.sent==i.NETWORK.ID?(h=new I.a(n,i.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:h,web3:c}}),s.on("accountsChanged",(function(e){t(q(e[0]))})),s.on("chainChanged",(function(){window.location.reload()}))):t(Y("Change network to ".concat(i.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(Y("Something went wrong."));case 31:e.next=34;break;case 33:t(Y("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()),y()},children:"CONNECT"}),""!==n.errorMsg?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(X,{}),Object(ne.jsx)(ae,{style:{textAlign:"center",color:"var(--accent-text)"},children:n.errorMsg})]}):null]}):Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(ae,{style:{textAlign:"center",color:"var(--accent-text)"},children:d}),Object(ne.jsx)(Z,{}),Object(ne.jsxs)(ee,{ai:"center",jc:"center",fd:"row",children:[Object(ne.jsx)(ie,{style:{lineHeight:.4},disabled:s?1:0,onClick:function(e){e.preventDefault(),function(){var e=p-1;e<1&&(e=1),g(e)}()},children:"-"}),Object(ne.jsx)(Z,{}),Object(ne.jsx)(ae,{style:{textAlign:"center",color:"var(--accent-text)"},children:p}),Object(ne.jsx)(Z,{}),Object(ne.jsx)(ie,{disabled:s?1:0,onClick:function(e){e.preventDefault(),function(){var e=p+1;e>11&&(e=11),g(e)}()},children:"+"})]}),Object(ne.jsx)(X,{}),Object(ne.jsx)(ee,{ai:"center",jc:"center",fd:"row",children:Object(ne.jsx)(oe,{disabled:s?1:0,onClick:function(e){e.preventDefault(),function(){var e=x.WEI_COST,t=x.GAS_LIMIT,o=String(e*p),i=String(t*p);console.log("Cost: ",o),console.log("Gas limit: ",i),b("Minting ur ".concat(x.NFT_NAME,"...")),c(!0),n.smartContract.methods.mint(n.account,p).send({gasLimit:String(i),to:x.CONTRACT_ADDRESS,from:n.account,value:o}).once("error",(function(e){console.log(e),b("yo somethin's buggin. try try again."),c(!1)})).then((function(e){console.log(e),b("WOW, the ".concat(x.NFT_NAME," is yours! go visit Opensea.io to view it.")),c(!1),a(K(n.account))}))}(),y()},children:s?"BUSY":"BUY"})})]})]}),Object(ne.jsx)(Z,{})]}),Object(ne.jsx)($,{}),Object(ne.jsx)(ee,{flex:1,jc:"center",ai:"center",children:Object(ne.jsx)(ce,{alt:"example",src:"/config/images/release.gif",style:{transform:"scaleX(-1)"}})})]}),Object(ne.jsx)($,{}),Object(ne.jsx)(le,{alt:"MANIFESTO",src:"/config/images/manifesto.jpg"}),Object(ne.jsxs)(ae,{style:{textAlign:"left",color:"var(--primary-text)",width:"88%"},children:[Object(ne.jsx)($,{}),"IT'S ALL SUCH FUCKING BULLSHIT. THAT'S THE FOUNDING PRINCIPLE. IT'S. ALL. SUCH. FUCKING. BULLSHIT.",Object(ne.jsx)($,{}),"AND YET.",Object(ne.jsx)($,{}),"AND YET.",Object(ne.jsx)($,{}),"WE MAY FINALLY HAVE A WAY OUT.",Object(ne.jsx)($,{}),"BALAJI CALLS IT ",Object(ne.jsx)("a",{href:"https://twitter.com/balajis/status/1451289071402184740",target:"_blank",children:"THE LEDGER OF RECORD"}),". GIGACHAD ",Object(ne.jsx)("a",{href:"https://twitter.com/saylor/status/1408972697619550211",target:"_blank",children:"THE HIGHEST QUALITY ASSET"}),". 6529 ",Object(ne.jsx)("a",{href:"https://twitter.com/punk6529/status/1445468399656595456",target:"_blank",children:"THE OPEN METAVERSE"}),". MLK CALLED IT ",Object(ne.jsx)("a",{href:"https://www.youtube.com/watch?v=Oehry1JC9Rk",target:"_blank",children:"THE PROMISED LAND"}),". SCOTT ADAMS CALLS IT ",Object(ne.jsx)("a",{href:"https://youtu.be/fMBBy7jHLkU?t=390",target:"_blank",children:"THE GOLDEN AGE"})," AND ECKHART TOLLE ",Object(ne.jsx)("a",{href:"https://www.amazon.com/New-Earth-Awakening-Purpose-Selection/dp/0452289963/",target:"_blank",children:"THE NEW EARTH"}),".",Object(ne.jsx)($,{}),"WE CALL IT ESCAPE FROM THE MATRIX TO A FUTURE THAT'S WORTH LIVING IN.",Object(ne.jsx)($,{}),"THERE COMES A TIME WHERE WE REALIZE THAT WE ARE COLLECTIVELY BEHOLDEN TO DUMBASS LEGACY MORONS AND THAT IT IS OUR DUTY TO TELL THEM TO KICK ROCKS. GTFO AND GO BACK THROUGH THE DEMON PORTAL YOU CAME FROM SO WE CAN GET BACK TO BUILDING A GOOD, TRUE, AND BEAUTIFUL WORLD. NOT SOME DAVOS LIZARD-VISION NEW NORMAL.",Object(ne.jsx)($,{}),Object(ne.jsx)("a",{href:"https://www.youtube.com/watch?v=5qOpoZXxbBQ",target:"_blank",children:"VAINGLORIOUS ASS SISSIES."}),Object(ne.jsx)($,{}),"DETAILS FOLLOW.",Object(ne.jsx)($,{}),Object(ne.jsx)(le,{alt:"IT'S DIFFERENT",src:"/config/images/different.jpg"}),Object(ne.jsx)($,{}),"We're well aware that most PFP projects have a perfunctory write-up with a bullshit roadmap with a lot of shit about donating to save the baby seals once they hit 50% mint. but we're built different. We made it all the way through ",Object(ne.jsx)("a",{href:"https://youtu.be/eYpKIWVe3As?t=3211",target:"_blank",children:"Mook's 3rd"}),". We really bout that life.",Object(ne.jsx)($,{}),"Our inaugural collection is DEEP STATE DEGENS, A Bespoke Collection for the Discerning Degen. It is a PFP collection of 11,111 generative avatars built from 6 categories with thousands of variations for a total number of image combinations that can only be measured with exponential notation.",Object(ne.jsx)($,{}),"The initial inspiration for the collection was twofold.",Object(ne.jsx)($,{}),"First was the mind-numbing similarity in this lame ass fiverr aesthetic of most existing PFP collections. Second and more importantly was the lack of CONTENT, the lack of MEANING.",Object(ne.jsx)($,{}),"We dare you to spend time at the Borghese staring at Caravaggio's depiction of David holding the decapitated head of Goliath or be subsumed by Monet's Water Lilies at MOMA and not wonder if maybe we could be collectively aiming the bar a bit higher than endless cartoon animals.",Object(ne.jsx)($,{}),"A bespectacled Indian once said, be the change you wish to see in the world.",Object(ne.jsx)($,{}),"We like the quote.",Object(ne.jsx)($,{}),Object(ne.jsx)(le,{alt:"RARITY",src:"/config/images/rarity.jpg"}),Object(ne.jsx)($,{}),"We have worked hard to make our rarities well balanced like so many Protoss, Terrans, and Zergs. We are long-time minters ourselves, and know well the joy of minting an ultra-rare or ",Object(ne.jsx)("a",{href:"https://youtu.be/XI3xRzUjjFE?t=608",target:"_blank",children:"ripping open a Jordan rookie"}),". So we know how important it is for the long term success of the project that these traits are well thought out.",Object(ne.jsx)($,{}),"In general, for each of the six categories we have four rarities: common, unique, rare, and holy shit.",Object(ne.jsx)($,{}),"We got your back so sweep that floor with vigor and abandon.",Object(ne.jsx)($,{}),"In addition, we have worked to give these rarities relevance to how rare they are in real life. Rather than arbitrarily making 1% of the backgrounds green, maybe you'll win a golden ticket Charlie Bucket.",Object(ne.jsx)($,{}),Object(ne.jsx)(le,{alt:"ORIGINS & OVERVIEW",src:"/config/images/origins.jpg"}),Object(ne.jsx)($,{}),"For Conspiracy Theorists, By Conspiracy Theorists (FCTBCT) is an educational DAO sitting at the intersection of hip-hop, conspiracy, and spirituality.",Object(ne.jsx)($,{}),"What connects these cultures is RABBIT HOLES.",Object(ne.jsx)($,{}),'Whether it\'s the Podesta emails or the Tuskegee experiments, wordplay from Daylyt or the decades-to-discover Angela Davis vocal sample Primo used on the "Mathematics" chorus, the relationship betweeen the Pyramids at Giza and the Orion constellation, or Taproot and EIP-1559, each of these involves diving down deep and deeply rewarding rabbit holes.',Object(ne.jsx)($,{}),"Interestingly, we have noted that hip hop is built on tech, and that hip-hop\u2014whether Dead Prez, Jay-Z, Public Enemy, Immortal Technique, or Capital Steez\u2014leads many to conspiracy and as both Sam Tripoli and the Blastmaster have noted, conspiracy eventually leads to spirituality.",Object(ne.jsx)($,{}),"We fully plan to be a major player at this intersection. Consider this a planting of the flag.",Object(ne.jsx)($,{}),"gm.",Object(ne.jsx)($,{}),Object(ne.jsx)(le,{alt:"DISTRIBUTION",src:"/config/images/distribution.jpg"}),Object(ne.jsx)($,{}),"The contract was launched on the Ethereum mainnet on November 11, 2021 with a reveal date set for December 21, 2021. Both 11/11 and 21/12 are highly symbolic dates that were intentionally chosen, as was the 40 day gap between the two.",Object(ne.jsx)($,{}),"The same 40 days that Siddartha Gautama spent fasting under a bodhi tree and Yeshua of Nazareth spent fasting in the desert, both with firm determination to see beyond the veil.",Object(ne.jsx)($,{}),"We make these notes to say that we have tried to be as intentional as possible with every aspect of this collection, from content to contract.",Object(ne.jsx)($,{}),"Thus we have been drawn again and again to the stealth mint. Stealth is the cloth we are cut from. Before \"street art,\" your props were about getting up in a spot you weren't supposed to--or weren't even supposed ",Object(ne.jsx)("a",{href:"https://www.youtube.com/watch?v=OwHbZ1lRGNY",target:"_blank",children:"to be able to"}),". Hood fame is something you can't put a price on no matter how much $USTT you collect. It's the stuff of legends and it's what our OG's taught us.",Object(ne.jsx)($,{}),"For the edumucated, stealth and secrecy apply to the finer arts as well, whether it's the modern superstar Banksy or the triple OG anons Caravaggio and the Bront\xeb sisters.",Object(ne.jsx)($,{}),"Through the stealth mint we also sneakily offer the street cred of catching the mint and HODLing, proof-of-being-up-on-game, made visible to everyone with your public address. On some how you like that ",Object(ne.jsx)("a",{href:"https://shinhyungchoi.medium.com/proof-of-provenance-why-nfts-can-be-valuable-1489ed1395fd",target:"_blank",children:"provenance"}),".",Object(ne.jsx)($,{}),Object(ne.jsx)(le,{alt:"VISION",src:"/config/images/vision.jpg"}),Object(ne.jsx)($,{}),Object(ne.jsx)("a",{href:"https://twitter.com/then_there_was/status/1460677714831024131",target:"_blank",children:"Warren Buffet says"})," the market system does a great job rewarding entertainers, but not educators, even though their work might be more valuable in the long run.",Object(ne.jsx)($,{}),"If we trace this back to first principles, this is as much a problem of incentives as anything else. There's no inherent reason for people--or at least our people--to prefer entertainment to education.",Object(ne.jsx)($,{}),"So as a way to incentivize the production of best-in-class educational material, we plan to utilize giveaways in a very different way than other projects. Rather than contributing to more spam of tagging and retweeting, we will reward those who are able to create the very dopest educational threads, memes, and videos.",Object(ne.jsx)($,{}),"Our contract minted 11 giveaway NFTs, held publicly in ",Object(ne.jsx)("a",{href:"https://unstoppabledomains.com/d/fctbct.nft",target:"_blank",children:"FCTBCT.nft"}),". We will mint or purchase up to 9% of the initial supply for the sole purpose of giveaways. We intend to be the leader and innovator in the giveaway space, utilizing NFT giveaways to crowdsource intelligence for the betterment of all.",Object(ne.jsx)($,{}),"Through these giveaways, we will incentivize the steel-manning of information outside the Overton window, lost to the sands of time, or too far down the rabbit hole and thus overlooked and improperly understood. Dissident scholars that we are, we will also reward the steel-manning of mainstream positions, always with the aim of being ",Object(ne.jsx)("a",{href:"https://www.lesswrong.com/posts/9KvefburLia7ptEE3/the-correct-contrarian-cluster",target:"_blank",children:"contrarian but correct"}),", not simply the flipside of the NPC.",Object(ne.jsx)($,{}),"As this knowledge spreads, so too does the collective intelligence of humanity and the value of the collection. WGMI, anon.",Object(ne.jsx)($,{}),"Examples would include:",Object(ne.jsxs)("ul",{children:[Object(ne.jsx)($,{}),Object(ne.jsx)("li",{children:"1\ufe0f\u20e3st tier (officially declassified and sanctioned): Gulf of Tonkin, Reichstag fire, Operation Northwoods, Project Paperclip, Epstein, UFOs, Heart rate variability, Dogon tribe, illegal drone strikes"}),Object(ne.jsx)($,{}),Object(ne.jsx)("li",{children:"2\ufe0f\u20e3nd tier (verifiable and robust circumstantial evidence): Dr. Sebi, Building 7, Pedogate, thermite, Atlantis, non-local consciousness, telepathine & DMT & ayahuasca, heart-brain, remote viewing, area 51, human trafficking for organ harvesting"}),Object(ne.jsx)($,{}),Object(ne.jsx)("li",{children:"3\ufe0f\u20e3rd tier (anecdotal and circumstantial evidence): the Annunaki, the Secret Space Program, ET races such as the Zetas, Pleiaidians, Arcturians, Sirians, and Lyrans, the DMT realm, interdimensional entities, mantids, animal human hybrids, Flat Earth, moon landing hoax, Mark of the Beast, telepathy and psychic phenomena, energy healing, divination systems such as gematria, astrology, and the I Ching, adrenochrome"}),Object(ne.jsx)($,{}),Object(ne.jsx)("li",{children:"\ud83d\udcdc Information lost to the sands of time: Gobekli Tepe, Nazca lines, worldwide Pyramids, underwater coastal ruins, empires from the Merovingians to the Tartarians, monetary history, artistic innovations from the rediscovery of linear perspective to Escher's tilings of the plane"}),Object(ne.jsx)($,{}),Object(ne.jsx)("li",{children:"\u274c Information improperly understood: Bitcoin, 432hz tuning, Permaculture, Earthships, Fasting, natural healing, cymatics, power of intention, linguistic innovation in hip hop through lyricism and wordplay"}),Object(ne.jsx)($,{})]}),"At the very beginning of this journey, HODLers will have access to both highly moderated, high IQ, high signal-to-noise discussion forums on topics of interest, as well as governance forums where the direction of future launches and overall project direction will be debated and voted upon.",Object(ne.jsx)($,{}),Object(ne.jsx)(le,{alt:"PRINCIPLES",src:"/config/images/principles.jpg"}),Object(ne.jsx)($,{}),"1\ufe0f\u20e3 Everything we do, in the words of our favorite mensch garyvee, is about our legacy that we will leave to the ",Object(ne.jsx)("a",{href:"https://www.dailymail.co.uk/news/article-3408500/It-super-primal-sexual-experience-Group-women-make-extraordinary-claim-hybrid-children-fathered-ALIENS-live-giant-spaceships-say-best-sex-ever.html",target:"_blank",children:"hybrid children"})," that are to follow. Most importantly we must teach the children to be legit.",Object(ne.jsx)($,{}),"2\ufe0f\u20e3 We are believers in ",Object(ne.jsx)("a",{href:"https://www.youtube.com/watch?v=PuhlvJ__9GE",target:"_blank",children:"low time preference"})," and ",Object(ne.jsx)("a",{href:"https://bitcointalk.org/index.php?topic=375643.0",target:"_blank",children:"HODLing"})," and want to reward this behavior with unexpected delightful gifts that will come with no notice whatsoever on some good things come to those who wait shit.",Object(ne.jsx)($,{}),"3\ufe0f\u20e3 We want to bring a deeper level of truth and integrity to the world and are attracted to Web 3 and to DAO's for this reason. We all know by now that it's high time to ",Object(ne.jsx)("a",{href:"https://medium.com/@georgealexpopescu/internet-3-0-decentralizing-everything-b463897b0e10",target:"_blank",children:"decentralize everything"})," and as Julian Assange said, sunshine is the best disinfectant.",Object(ne.jsx)($,{}),"4\ufe0f\u20e3 We're playing the longest game. The game of ",Object(ne.jsx)("a",{href:"https://www.youtube.com/watch?v=AhE2tGJ-YiI",target:"_blank",children:"Caz"}),", of ",Object(ne.jsx)("a",{href:"https://youtu.be/C5KOIijlMiU",target:"_blank",children:"Kane"}),", of ",Object(ne.jsx)("a",{href:"https://youtu.be/kCBzFV54msE",target:"_blank",children:"Jay"}),". And ",Object(ne.jsx)("a",{href:"https://twitter.com/beaniemaxi/status/1443216534877388802",target:"_blank",children:"Beanie taught us well"}),".",Object(ne.jsx)($,{}),Object(ne.jsx)(le,{alt:"MISSION",src:"/config/images/mission.jpg"}),Object(ne.jsx)($,{}),"Before Bill Gates set out to become the Antichrist and enslave humanity, he had a far more admirable, yet still quite ambitious goal: a computer on every desk.",Object(ne.jsx)($,{}),"With this as our inspiration, we will set out an equally audacious goal: a wide and fully open Overton Window.",Object(ne.jsx)($,{}),"As Graham Hancock so eloquently stated, ",Object(ne.jsx)("a",{href:"https://youtu.be/pDmP8WQ2IYw?t=203",target:"_blank",children:"we are like a species with amnesia"}),". As our amnesia recedes, we can enter a new flourishing, a cultural and artistic Renaissance that appropriates every culture in all of our histories to create something new as we head into inner/outer space to rejoin our galactic family.",Object(ne.jsx)($,{}),"We dream that one day, children will know as much about Gobekli Tepe and MK Ultra and the Annunaki as they do about the American Revolution and the Magna Carta and the Great Wall of China. We imagine all the people doing Wim Hof breathing and knowledge of the power of intention becoming as commonplace as Coca Cola and canola oil.",Object(ne.jsx)($,{}),"Really we just wanna find the others who can see and who care.",Object(ne.jsx)($,{}),Object(ne.jsx)(le,{alt:"PLAN",src:"/config/images/plan.jpg"}),Object(ne.jsx)($,{}),"To ",Object(ne.jsx)("a",{href:"https://quotefancy.com/quote/1635337/Ben-Horowitz-Planning-is-valuable-tho-the-plan-is-usually-useless",target:"_blank",children:"paraphrase MC Tic Toc"}),", there's zero chance our plan will happen but there's zero chance we'll succeed without one. So here goes nothing.",Object(ne.jsx)($,{}),'Let\'s get one thing abundantly clear at the outset. One thing you will never, ever find in any of our plans is a "roadmap." We hate roadmaps and the midwits who create them.',Object(ne.jsx)($,{}),'[come for the Creator stay for the economy link. three step process] [coopah DAO def\'n "Members work together to create, distribute and capture value relative to a shared mission."]',Object(ne.jsx)($,{}),"So in the conract, we have pre-mined the first 111 NFTs which will serve as the basis for a DAO treasury. These will not once, not ever be sold or transferred and will always be publicly and visibly held in the wallet at ",Object(ne.jsx)("a",{href:"https://unstoppabledomains.com/d/fctbct.nft",target:"_blank",children:"FCTBCT.nft"}),".",Object(ne.jsx)($,{}),"As the value of the collection grows, we could either stake the NFTs to provide the community yield or issue an NFT-backed governance token to steer the very profound governance decisions we will face as the project evolves.",Object(ne.jsx)($,{}),'For instance, pause and take note of the fact that the original homemade internet-born viral documentaries were "Loose Change" and "Zeitgeist." You can make a case that conspiracies are the porn of knowledge. Always at the leading edge, hugely popular, and yet nevertheless completely unacknowledged.',Object(ne.jsx)($,{}),"It is possible that in the same way that the ",Object(ne.jsx)("a",{href:"https://twitter.com/cdixon/status/865424180816224256",target:"_blank",children:"token is the native business model"})," of open source software, so can the NFT bring a sustainable funding model for the production of Overton-unfriendly educational content that would receive neither proper production nor promotion from mainstream distributors. Not only can more of this content thus be producted, but the profits can go into the hands of both creators as well as incentivize the early adopters and distributors--aka anons.",Object(ne.jsx)($,{}),"In general, we believe the conspiracy ecosystem is significantly undervalued due to its current unpalatability and once well-funded could be a major source of both innovation and human freedom, helping us stay far far away from the gulags, be they physical, digital, or mental.",Object(ne.jsx)($,{}),"Another possible direction, while seemingly outlandish--the ",Object(ne.jsx)("a",{href:"https://medium.learningbyshipping.com/is-a-toy-21312a5c8aea#.16gu092mt",target:"_blank",children:"next next thing begins as a toy"}),"--is that FCTBCT could become a hybrid hedge fund/venture capital firm. We could perhaps call it Vendetta Capital.",Object(ne.jsx)($,{}),"The reason for this is that we may need to invest in or create a parallel economy Opensea competitor. It is clear with the delisting of ",Object(ne.jsx)("a",{href:"https://phunks.medium.com/the-cryptophunks-manifesto-785c7348e558",target:"_blank",children:"CryptoPHUNKS"})," and ",Object(ne.jsx)("a",{href:"https://www.breitbart.com/tech/2021/11/22/crypto-censorship-nft-marketplaces-opensea-rarible-ban-works-from-political-cartoonist-stonetoss/",target:"_blank",children:"Flurks"})," that Opensea and Rarible may not be utopian, decentralized web 3 entities but instead just wack ass big tech 2.0. If so, we will necessarily have to see what our open protocols are really made of and rugpull these virtue signallers to build a first-amendment compatible NFT platform.",Object(ne.jsx)($,{}),"On a lighter note, FCTBCT could just as easily end up being a content studio that pays dividends to hodlers. Roy Price, founder of Amazon Video ",Object(ne.jsx)("a",{href:"https://twitter.com/RoyPrice/status/1462553874888151044",target:"_blank",children:"wrote"})," about how such a tokenized crowdfunding model could succeed.",Object(ne.jsx)($,{}),"To give examples, we could imagine funding:",Object(ne.jsx)($,{}),"\u2705 NFT'd Documentaries by people with already proven track records like Jon du Toit, Amanda Milius, Sean Stone, Amazing Polly, Mouthy Buddha, or James O'Keefe.",Object(ne.jsx)($,{}),"\u2705 NFT'd Music compilations on uplifting themes like Hollywood Child Sex Trafficking by artists such as Jedi Mind Tricks, RA the Rugged Man, Aesop Rock, Bryson Gray, Killah Priest, Goodie Mobb, Tom MacDonald, Bone Thugs, Loza Alexander, Dead Prez, Hi-Rez, Daylyt, and Immortal Technique.",Object(ne.jsx)($,{}),"\u2705 Virtual summits with NFT ticketing of speakers like David Icke, Alex Jones, Billy Carson, Jordan Maxwell, Michael Tellinger, Steven Greer, Robert Edward Grant, Graham Hancock, and Clif High.",Object(ne.jsx)($,{}),"\u2705 Permanent, unstoppable websites built on ENS, stored permanently on ARWeave with the best evidence--perhaps even compilations of award-winning threads--for subjects they bring out the BanHammer 9000 for: Pedogate, Thelema, Satanic Pedophiles, and Interdimensional Demons.",Object(ne.jsx)($,{}),"The floor is lava and the sky is the limit.",Object(ne.jsx)($,{}),"With that said and to revisit the wisdom of MC Tic Toc, most likely we end up doing none of these and instead do something that no one can yet imagine because it doesn't even exist yet.",Object(ne.jsx)($,{}),Object(ne.jsx)(le,{alt:"TEAM",src:"/config/images/team.jpg"}),Object(ne.jsx)($,{}),"We are a group of 11: an activist, an AI, an Asian, an alien, an acrobat, an actuary, an asshole, an artist, an aristocrat, an assassin, and an apple farmer who have chosen to let the ",Object(ne.jsx)("a",{href:"https://www.goodreads.com/quotes/48531-make-your-ego-porous-will-is-of-little-importance-complaining",target:"_blank",children:"work speak for itself"}),".",Object(ne.jsx)($,{}),"We're all beautiful in the metaverse, anon.",Object(ne.jsx)($,{}),Object(ne.jsx)(le,{alt:"RISKS",src:"/config/images/risks.jpg"}),Object(ne.jsx)($,{}),"You might catch Daylyt in the quiet room. Yikes",Object(ne.jsx)($,{}),"Seriously though, we would be remiss to not mention the risk inherent in a project like this, namely that they will come after us with the full force of their virtue signalling.",Object(ne.jsx)($,{}),"As cosmic beings, we love the generativity of programatically mixing and matching the symbols that man has created over millenia, across uncountable cultures. ",Object(ne.jsx)("a",{href:"https://en.wikipedia.org/wiki/Man_and_His_Symbols",target:"_blank",children:"Man and His Symbols"})," has been a source of endless fascination for many of the greatest minds that humanity has managed to produce across ages and epochs.",Object(ne.jsx)($,{}),'The lizards though. Yes, the lizards seem steadfastly determined to miss forest for trees, myopically scanning the horizon for any "bad symbols" that they have solemnly vowed to disappear like so many kulaks. Never ones for laughter and mirth or nuance and context, the lizards may very well try to ban us and everything we hold dear.',Object(ne.jsx)($,{}),"We accept this possibility and to be honest, we kind of want to see what these decentralized technologies are really made of. Can truth, beauty, and transparency really shine or will the ",Object(ne.jsx)("a",{href:"https://twitter.com/bitstein",target:"_blank",children:"toxic"})," ",Object(ne.jsx)("a",{href:"https://twitter.com/pierre_rochard",target:"_blank",children:"Bitcoin"})," ",Object(ne.jsx)("a",{href:"https://twitter.com/saifedean",target:"_blank",children:"maxis"})," be right again and this whole web 3 revolution is just be a clever ploy for ",Object(ne.jsx)("a",{href:"https://dealbook.nytimes.com/2014/01/21/why-bitcoin-matters/",target:"_blank",children:"Marc"})," & ",Object(ne.jsx)("a",{href:"https://techcrunch.com/2012/06/14/the-struggle/",target:"_blank",children:"Ben"})," and ",Object(ne.jsx)("a",{href:"https://onezero.medium.com/why-decentralization-matters-5e3f79f7638e",target:"_blank",children:"Chris"})," & ",Object(ne.jsx)("a",{href:"https://www.nytimes.com/2021/10/15/opinion/ezra-klein-podcast-katie-haun.html",target:"_blank",children:"Katie"})," and ",Object(ne.jsx)("a",{href:"https://www.usv.com/writing/2018/03/cryptokitties-2/",target:"_blank",children:"Fred"})," & ",Object(ne.jsx)("a",{href:"https://www.usv.com/writing/2017/05/protocol-labs/",target:"_blank",children:"Brad"})," & ",Object(ne.jsx)("a",{href:"https://worldaftercapital.org/",target:"_blank",children:"Albert"})," and ",Object(ne.jsx)("a",{href:"https://twitter.com/search?q=fuck%20jason%20calacanis&src=typed_query",target:"_blank",children:"Jason"})," & ",Object(ne.jsx)("a",{href:"https://davidsacks.medium.com/the-speech-cartel-b3f5555f7787",target:"_blank",children:"David"})," & ",Object(ne.jsx)("a",{href:"https://twitter.com/amitranjan/status/1248559196628381696",target:"_blank",children:"Chamath"})," and ",Object(ne.jsx)("a",{href:"https://tokenist.com/funding-rounds-in-focus-ftx-valuation-rises-to-25-billion/",target:"_blank",children:"Alfred"})," & ",Object(ne.jsx)("a",{href:"https://www.youtube.com/watch?v=GRCjazKSSjo",target:"_blank",children:"Roelof"})," to make another few billion as we descend into a digital hell of pop star-hosted VR struggle sessions.",Object(ne.jsx)($,{}),"We're long humanity, long the Streisand Effect, and long you anon. So we hope we're right but we can't lie. We might be wrong. Maybe our destiny is cartoon animals and crickets for breakfast with a daily health checkup via anal swab. Either way, this is not investment advice, and just remember that ",Object(ne.jsx)("a",{href:"https://youtu.be/tzOOCnkUlnA?t=16",target:"_blank",children:"them stakes is high"}),".",Object(ne.jsx)($,{})]})]})})},be=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,516)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),o(e),i(e),r(e)}))};a(511);y.a.render(Object(ne.jsx)(C.a,{store:U,children:Object(ne.jsx)(de,{})}),document.getElementById("root")),be()}},[[512,1,2]]]);
//# sourceMappingURL=main.85694862.chunk.js.map