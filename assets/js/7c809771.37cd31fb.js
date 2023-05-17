"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1392],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7177:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},i="DAO voting with Etherscan",l={unversionedId:"guides/etherscan-voting",id:"guides/etherscan-voting",title:"DAO voting with Etherscan",description:"This how to vote on Lido DAO Aragon with Etherscan UI",source:"@site/docs/guides/etherscan-voting.md",sourceDirName:"guides",slug:"/guides/etherscan-voting",permalink:"/guides/etherscan-voting",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/guides/etherscan-voting.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Protocol levers",permalink:"/guides/protocol-levers"},next:{title:"Guide to Easy Track",permalink:"/guides/easy-track-guide"}},s=[{value:"Video guide",id:"video-guide",children:[],level:2},{value:"Preparation",id:"preparation",children:[],level:2},{value:"Voting",id:"voting",children:[],level:2}],c={toc:s};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dao-voting-with-etherscan"},"DAO voting with Etherscan"),(0,r.kt)("p",null,"This how to vote on Lido DAO Aragon with Etherscan UI"),(0,r.kt)("h2",{id:"video-guide"},"Video guide"),(0,r.kt)("div",{style:{position:"relative",width:"100%",paddingBottom:"62.5%",height:0}},(0,r.kt)("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:"https://www.youtube.com/embed/5YTJgudYHs8",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,r.kt)("h2",{id:"preparation"},"Preparation"),(0,r.kt)("p",null,"Get the address of the Lido DAO ",(0,r.kt)("inlineCode",{parentName:"p"},"Aragon Voting")," contract from ",(0,r.kt)("a",{parentName:"p",href:"/deployed-contracts/#:~:text=Aragon%20Voting"},"Deployed Contracts")," page. It should be: ",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e"},"0x2e59A20f205bB85a89C53f1936454680651E618e"),"."),(0,r.kt)("p",null,"Get the vote id, either from ",(0,r.kt)("a",{parentName:"p",href:"https://mainnet.lido.fi/#/lido-dao/0x2e59a20f205bb85a89c53f1936454680651e618e/"},"Aragon UI"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3330).Z})),(0,r.kt)("p",null,"or from ",(0,r.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#readProxyContract"},"Etherscan"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(309).Z})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Open "',(0,r.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#readProxyContract"},"Contract/Read as Proxy"),'" tab'),(0,r.kt)("li",{parentName:"ol"},"Get the total number of the votes from ",(0,r.kt)("inlineCode",{parentName:"li"},"votesLength")," method (number 21 on ",(0,r.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#readProxyContract"},"Etherscan page"),")")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4570).Z})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"If you're looking to vote on the last vote, take ",(0,r.kt)("inlineCode",{parentName:"li"},"votesLength - 1")," as an id. If the ",(0,r.kt)("inlineCode",{parentName:"li"},"votesLength")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"89"),", last vote would have the id ",(0,r.kt)("inlineCode",{parentName:"li"},"88")),(0,r.kt)("li",{parentName:"ol"},"You can check the vote data with ",(0,r.kt)("inlineCode",{parentName:"li"},"getVote")," method (number 6 on ",(0,r.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#readProxyContract"},"Etherscan page"),")")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3305).Z})),(0,r.kt)("h2",{id:"voting"},"Voting"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Open "',(0,r.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#writeProxyContract"},"Contract / Write as Proxy"),'" tab on Etherscan'),(0,r.kt)("li",{parentName:"ol"},"Connect Etherscan UI to Web3 with either MetaMask or WalletConnect")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7803).Z})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Use method ",(0,r.kt)("inlineCode",{parentName:"li"},"vote")," (number 6 on the ",(0,r.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x2e59A20f205bB85a89C53f1936454680651E618e#writeProxyContract"},"Etherscan Page"),")")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5608).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_voteId")," is the vote id from the point 2."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_supports")," is the flag of whether you're voting for (type ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),") or against (type ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),") the vote"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_executesIfDecided")," is the flag to enact the vote if it could be executed right away in the tx sending the vote, ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"; from the experience of the previous votes, you may leave that as ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Fill in the parameters ",(0,r.kt)("inlineCode",{parentName:"li"},"_voteId"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"_supports")," & ",(0,r.kt)("inlineCode",{parentName:"li"},"_executesIsDecided")," and send the transaction")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7127).Z})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Sign the transaction")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9800).Z})),(0,r.kt)("p",null,"That's it! \ud83c\udf89"))}p.isMDXComponent=!0},3330:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aragon-d280f412f5c1c3e63b6a2f5e03d8e888.png"},7803:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/connect-wallet-9d36c783bcdfc883e8a6bb67b0005f55.png"},309:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/etherscan_vote_address-6b0ef7bc729d0a93c70708192704f6b7.png"},3305:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/get-vote-e391f363a361a2c601a5c31824cce865.png"},9800:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sign-transaction-43d7fe11cdb73563a7f24d4e72747a99.png"},5608:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vote-1-2e9074532ab687daf29d69ec07fe62fd.png"},7127:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vote-2-728cd473962eaf4f618b8ac7c55ca416.png"},4570:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/votes-length-64fe5aea0d17559b1a8841b3e8392279.png"}}]);