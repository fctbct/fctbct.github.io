(this.webpackJsonpFCTBCT=this.webpackJsonpFCTBCT||[]).push([[0],{242:function(e,t){},265:function(e,t){},267:function(e,t){},345:function(e,t){},347:function(e,t){},380:function(e,t){},385:function(e,t){},387:function(e,t){},394:function(e,t){},407:function(e,t){},430:function(e,t){},439:function(e,t){},441:function(e,t){},511:function(e,t,n){},512:function(e,t,n){"use strict";n.r(t);var a,r,o,i,c,s,l,h,d,u,p,j,b,x,g,f,m,O=n(2),w=n(84),y=n.n(w),v=n(16),C=n.n(v),T=n(42),A=n(68),k=n(13),S=n(57),E=n(67),N=n.n(E),_=n(216),D=n.n(_),M=n(69),I=n(217),F=n(18),L={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(F.a)(Object(F.a)({},L),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(F.a)(Object(F.a)({},L),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(F.a)(Object(F.a)({},e),{},{account:t.payload.account});default:return e}},R={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(F.a)(Object(F.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(F.a)(Object(F.a)({},R),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},W=Object(M.b)({blockchain:P,data:B}),z=[I.a],K=Object(M.c)(M.a.apply(void 0,z)),U=Object(M.d)(W,K),H=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},Y=function(){return function(){var e=Object(T.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,U.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(H("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},q=function(e){return{type:"CONNECTION_FAILED",payload:e}},G=function(e){return function(){var t=Object(T.a)(C.a.mark((function t(n){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(Y());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},J=n(14),Q=J.a.div(a||(a=Object(k.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),X=J.a.div(r||(r=Object(k.a)(["\n  height: 8px;\n  width: 8px;\n"]))),Z=J.a.div(o||(o=Object(k.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=J.a.div(i||(i=Object(k.a)(["\n  height: 24px;\n  width: 24px;\n"]))),$=J.a.div(c||(c=Object(k.a)(["\n  height: 32px;\n  width: 32px;\n"]))),ee=J.a.div(s||(s=Object(k.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),te=J.a.p(l||(l=Object(k.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),ne=(J.a.p(h||(h=Object(k.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),J.a.p(d||(d=Object(k.a)(["\n  color: var(--primary-text);\n  font-size: 33px;\n  line-height: 1.15;\n  text-align: left;\n"])))),ae=(J.a.div(u||(u=Object(k.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(1)),re=J.a.button(p||(p=Object(k.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),oe=J.a.button(j||(j=Object(k.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ie=J.a.div(b||(b=Object(k.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ce=J.a.img(x||(x=Object(k.a)(["\n  width: 100%;\n  @media (min-width: 767px) {\n    width: 800px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),se=J.a.img(g||(g=Object(k.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px solid var(--secondary);\n  background-color: var(--accent);\n  border-radius: 0%;\n  width: 300px;\n  @media (min-width: 900px) {\n    width: 300px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),le=J.a.img(f||(f=Object(k.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  background-color: var(--accent);\n  width: 100%;\n  @media (min-width: 900px) {\n    width: 100%;\n  }\n  @media (min-width: 1000px) {\n    width: 100%;\n  }\n  transition: width 0.5s;\n"]))),he=J.a.a(m||(m=Object(k.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var de=function(){var e,t,n=Object(S.b)(),a=Object(S.c)((function(e){return e.blockchain})),r=Object(S.c)((function(e){return e.data})),o=Object(O.useState)(!1),i=Object(A.a)(o,2),c=i[0],s=i[1],l=Object(O.useState)("Click buy to mint your NFT."),h=Object(A.a)(l,2),d=h[0],u=h[1],p=Object(O.useState)(1),j=Object(A.a)(p,2),b=j[0],x=j[1],g=Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),f=Object(A.a)(g,2),m=f[0],w=f[1],y=function(){""!==a.account&&null!==a.smartContract&&n(Y(a.account))},v=function(){var e=Object(T.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,w(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.useEffect)((function(){v()}),[]),Object(O.useEffect)((function(){y()}),[a.account]),Object(ae.jsx)(Q,{children:Object(ae.jsxs)(ee,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:m.SHOW_BACKGROUND?"/config/images/bg__.png":null,children:[Object(ae.jsx)(ce,{alt:"logo",src:"/config/images/logo.png"}),Object(ae.jsx)(Z,{}),Object(ae.jsx)(ee,{jc:"center",ai:"center",style:{width:"88%"},children:Object(ae.jsx)(le,{alt:"example",src:"/config/images/degens.jpg"})}),Object(ae.jsxs)(ne,{style:{textAlign:"left",color:"var(--primary-text)",width:"88%"},children:["Deep State Degenerates, Volume 1 is the first PFP avatar collection from FCTBCT.",Object(ae.jsx)($,{}),"It is a collection of 11,111 avatars, for sale at .01111 ETH.             "]}),Object(ae.jsxs)(ie,{flex:1,style:{padding:24},test:!0,children:[Object(ae.jsx)(ee,{flex:1,jc:"center",ai:"center",children:Object(ae.jsx)(se,{alt:"example",src:"/config/images/example.gif"})}),Object(ae.jsx)($,{}),Object(ae.jsx)(ee,{flex:1,jc:"center",ai:"center",children:Object(ae.jsx)(se,{alt:"example",src:"/config/images/example.gif"})}),Object(ae.jsx)(ee,{flex:1,jc:"center",ai:"center",children:Object(ae.jsx)(se,{alt:"example",src:"/config/images/example.gif"})}),Object(ae.jsx)(ee,{flex:1,jc:"center",ai:"center",children:Object(ae.jsx)(se,{alt:"example",src:"/config/images/example.gif"})})]}),Object(ae.jsxs)(ie,{flex:1,style:{padding:24},test:!0,children:[Object(ae.jsx)(ee,{flex:1,jc:"center",ai:"center",children:Object(ae.jsx)(se,{alt:"example",src:"/config/images/example.gif"})}),Object(ae.jsx)($,{}),Object(ae.jsxs)(ee,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:0,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(ae.jsxs)(te,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",m.MAX_SUPPLY]}),Object(ae.jsx)(ne,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(ae.jsx)(he,{target:"_blank",href:m.SCAN_LINK,children:(e=m.CONTRACT_ADDRESS,t=15,e.length>t?"".concat(e.substring(0,t),"..."):e)})}),Object(ae.jsx)(Z,{}),Number(r.totalSupply)>=m.MAX_SUPPLY?Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(ae.jsxs)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",m.NFT_NAME," on"]}),Object(ae.jsx)(Z,{}),Object(ae.jsx)(he,{target:"_blank",href:m.MARKETPLACE_LINK,children:m.MARKETPLACE})]}):Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsxs)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",m.SYMBOL," costs ",m.DISPLAY_COST," ",m.NETWORK.SYMBOL,"."]}),Object(ae.jsx)(X,{}),Object(ae.jsx)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(ae.jsx)(Z,{}),""===a.account||null===a.smartContract?Object(ae.jsxs)(ee,{ai:"center",jc:"center",children:[Object(ae.jsxs)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",m.NETWORK.NAME," network"]}),Object(ae.jsx)(Z,{}),Object(ae.jsx)(re,{onClick:function(e){e.preventDefault(),n(function(){var e=Object(T.a)(C.a.mark((function e(t){var n,a,r,o,i,c,s,l,h;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=e.sent,e.next=12,r.json();case 12:if(o=e.sent,i=window,!(c=i.ethereum)||!c.isMetaMask){e.next=33;break}return N.a.setProvider(c),s=new D.a(c),e.prev=18,e.next=21,c.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,c.request({method:"net_version"});case 24:e.sent==o.NETWORK.ID?(h=new N.a(a,o.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:h,web3:s}}),c.on("accountsChanged",(function(e){t(G(e[0]))})),c.on("chainChanged",(function(){window.location.reload()}))):t(q("Change network to ".concat(o.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(q("Something went wrong."));case 31:e.next=34;break;case 33:t(q("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()),y()},children:"CONNECT"}),""!==a.errorMsg?Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(Z,{}),Object(ae.jsx)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:a.errorMsg})]}):null]}):Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:d}),Object(ae.jsx)(V,{}),Object(ae.jsxs)(ee,{ai:"center",jc:"center",fd:"row",children:[Object(ae.jsx)(oe,{style:{lineHeight:.4},disabled:c?1:0,onClick:function(e){e.preventDefault(),function(){var e=b-1;e<1&&(e=1),x(e)}()},children:"-"}),Object(ae.jsx)(V,{}),Object(ae.jsx)(ne,{style:{textAlign:"center",color:"var(--accent-text)"},children:b}),Object(ae.jsx)(V,{}),Object(ae.jsx)(oe,{disabled:c?1:0,onClick:function(e){e.preventDefault(),function(){var e=b+1;e>10&&(e=10),x(e)}()},children:"+"})]}),Object(ae.jsx)(Z,{}),Object(ae.jsx)(ee,{ai:"center",jc:"center",fd:"row",children:Object(ae.jsx)(re,{disabled:c?1:0,onClick:function(e){e.preventDefault(),function(){var e=m.WEI_COST,t=m.GAS_LIMIT,r=String(e*b),o=String(t*b);console.log("Cost: ",r),console.log("Gas limit: ",o),u("Minting your ".concat(m.NFT_NAME,"...")),s(!0),a.smartContract.methods.mint(b).send({gasLimit:String(o),to:m.CONTRACT_ADDRESS,from:a.account,value:r}).once("error",(function(e){console.log(e),u("Sorry, something went wrong please try again later."),s(!1)})).then((function(e){console.log(e),u("WOW, the ".concat(m.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),n(Y(a.account))}))}(),y()},children:c?"BUSY":"BUY"})})]})]}),Object(ae.jsx)(V,{})]}),Object(ae.jsx)($,{}),Object(ae.jsx)(ee,{flex:1,jc:"center",ai:"center",children:Object(ae.jsx)(se,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(ae.jsx)($,{}),Object(ae.jsx)(ee,{jc:"center",ai:"center",style:{width:"88%"},children:Object(ae.jsx)(le,{alt:"example",src:"/config/images/origins.jpg"})}),Object(ae.jsxs)(ne,{style:{textAlign:"left",color:"var(--primary-text)",width:"88%"},children:["For Conspiracy Theorists, By Conspiracy Theorists (FCTBCT) is an educational DAO sitting at the intersection of hip hop, conspiracy theory, and spirituality.",Object(ae.jsx)($,{}),"What connects these three cultures is RABBIT HOLES.",Object(ae.jsx)($,{}),'Whether it\'s the Podesta emails or the full nature of the Tuskegee experiments, a triple entendre from Daylyt or the Angela Davis vocal sample Primo used on the "Mathematics" chorus, or the relationship between the Pyramids at Giza and the Orion constellation, all of these involve diving down very deep, very rewarding rabbit holes.',Object(ae.jsx)($,{}),"We have noted that hip hop, whether Dead Prez, Jay-Z, Public Enemy, Immortal Technique, or Capital Steez leads to conspiracy theories and as Sam Tripoli has noted, conspiracy theories eventually lead people to spirituality.",Object(ae.jsx)($,{}),"We expect to be a major player in this intersection."]}),Object(ae.jsxs)(ee,{jc:"left",ai:"left",style:{width:"88%"},children:[Object(ae.jsx)(le,{alt:"example",src:"/config/images/gratitude.jpg"}),Object(ae.jsxs)(ne,{style:{textAlign:"left",color:"var(--primary-text)"},children:[Object(ae.jsx)(ee,{jc:"center",ai:"center",style:{width:"100%"},children:Object(ae.jsx)(le,{alt:"example",src:"/config/images/vision.jpg"})}),"We plan to utilize giveaways in a very different way than other projects. Rather than contributing to more spam of tagging and retweeting, we will reward those who are able to create the best threads, memes, and videos. Through these giveaways, we incentivize the steel-manning of information outside the Overton window, lost to the sands of time, or improperly understood. As the information spreads, so does the value of the collection. Examples would include:",Object(ae.jsx)($,{}),Object(ae.jsxs)("ul",{children:[Object(ae.jsx)("li",{children:'tier 1 (officially declassified and sanctioned/accepted): Tonkin, reichstag, operation northwoods, project paperclip, epstein, "UAPs," heart rate variability, Dogon tribe, illegal drone strikes'}),Object(ae.jsx)($,{}),Object(ae.jsx)("li",{children:"tier 2 (verifiable and robust circumstantial evidence, no official sanctioning): building 7, pedogate, thermite, Atlantis, non-local consciousness, origin of ayahuasca, the heart brain, remote viewing, area 51, global organ harvesting"}),Object(ae.jsx)($,{}),Object(ae.jsx)("li",{children:"tier 3 (disconnected circumstantial evidence, mocked and laughed at): secret space program, DMT realm, interdimensional lizards and mantids, flat Earth, moon landing hoax, annunaki, mark of the beast, tartaria, telepathy and psychic phenomena,numerology, astrology"}),Object(ae.jsx)($,{}),Object(ae.jsx)("li",{children:"sands of time: nazca lines, global Pyramids, gobekli tepe, underwater ruins, empires from the Merovingians to the Medicis, monetary history, rediscovery of linear perspective, the I ching, gematria"}),Object(ae.jsx)($,{}),Object(ae.jsx)("li",{children:"improperly understood: Bitcoin, the science of MCing, 432hz tuning, natural healing"})]}),Object(ae.jsx)(ee,{jc:"center",ai:"center",style:{width:"100%"},children:Object(ae.jsx)(le,{alt:"example",src:"/config/images/distribution.jpg"})}),"The collection is stored on ARWeave for permanent storage. It is by far the best and most legit storage option on Earth and we are enormous fans of Sam. But don't take our word for it--",Object(ae.jsx)("a",{href:"https://twitter.com/Debussy100/status/1431357543604006917?s=20",children:"debussy"})," and ",Object(ae.jsx)("a",{href:"https://twitter.com/jakethedegen/status/1431358270317334531?s=20",children:"jake"})," agree as well.",Object(ae.jsx)($,{}),"1000 are kept for giveaways where we will be the innovators in the space and the final 111 will be kept to serve as the foundation for the permanent FCTBCT community treasury.",Object(ae.jsx)($,{}),"Do you see the recursion, the elegance, the triple entendre. Don't even ask us how.",Object(ae.jsx)($,{}),"While we could do the standard 10k/.08ETH, memento mori. The legacy of being the first 11,111/.01111ETH punchline with the 1111/111 haymaker and the 111.1 ETH total mint value room shaker is worth more than the extra 3 million USTT, by far. Bet.",Object(ae.jsx)($,{}),'BCTFCT.eth-- a DAO with 1111 1-1111. future volumes will have 10,000 only and giveaways will be conducted from the series 1 collection of the first 1111 ever minted. these 1111 are held in a publicly visible community wallet so that community verification of holdings is transparent. as this collection grows in value it will be used to back a future airdropped governance token that will allow the community to create new educational ventures for the purposes of uplifting and enlightening the world. unofficial launch mentor: "The NFT creator playbook is to stealth launch the first drop. Because whitelists are so easy to manipulate. If high demand, you can bet that scalpers will own most of it. So easy to bot farm any whitelist. Subsequent drops should favor the current collectors. That can\u2019t be faked." https://twitter.com/beaniemaxi/status/1449785330983489538?s=21',Object(ae.jsx)($,{}),"https://www.paradigm.xyz/2021/10/a-guide-to-designing-effective-nft-launches/ none of the team will be receiving any of that 1111. BCTFCT is for the children.",Object(ae.jsx)($,{}),"also the team has made a collective word is bond pledge to mint only 11 each because this is really all about you, not us. and if we keep this focus than 11 should be more than enough to make it to degen island with the fam.",Object(ae.jsx)($,{}),"we are believers in sneaking, in hiding, in getting over. this is the cloth we are cut from. from a time in graf writing, before \"street art,\" when your props were about getting up in a highly visible spot you weren't supposed to be able to get to. whether you call it street cred or hood famous, either way, it is something that a monetary value cannot be put on. it is what legends are made of. and of course it goes to the fine art as well, whether it's the modern banksy or l0m3z, or the historical pseudonyms or caravaggio or the bronte sisters.",Object(ae.jsx)($,{}),"for this reason, the choice for us is always obvious: the stealth mint. hidden, low-key, and offering the street cred of catching the mint and holding, the proof of you being up on game visible to everyone with your public address.",Object(ae.jsx)(ee,{jc:"center",ai:"center",style:{width:"100%"},children:Object(ae.jsx)(le,{alt:"example",src:"/config/images/rarity.jpg"})}),"we have worked hard to make our rarities well balanced like Protoss, Terrans, and Zergs. We are long-time minters ourselves, and know well the joy of minting an ultra-rare or ripping open a Jordan rookie (in our dreams). So we know how important it is for the long term success of the project that these traits are well thought out. Some projects have done a good job with these things but in a way that feels forced or arbitrary. We have matched our rarity traits to things that are truly rare.",Object(ae.jsx)(ee,{jc:"center",ai:"center",style:{width:"100%"},children:Object(ae.jsx)(le,{alt:"example",src:"/config/images/team.jpg"})}),"We are a group of activists, artists, AI, asians, and aliens who have ",Object(ae.jsx)("a",{href:"https://www.goodreads.com/quotes/48531-make-your-ego-porous-will-is-of-little-importance-complaining",children:"chosen to let the work speak for itself"}),".         ",Object(ae.jsx)($,{}),"and remember, we're all beautiful in the metaverse anon."]})]})]})})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,516)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)}))};n(511);y.a.render(Object(ae.jsx)(S.a,{store:U,children:Object(ae.jsx)(de,{})}),document.getElementById("root")),ue()}},[[512,1,2]]]);
//# sourceMappingURL=main.1a533f66.chunk.js.map