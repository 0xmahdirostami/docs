"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8353],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(3117),n=(r(7294),r(3905));const o={},i="How to Bridge Tokens through Jumpgate",s={unversionedId:"guides/jumpgates",id:"guides/jumpgates",title:"How to Bridge Tokens through Jumpgate",description:"Jumpgates are a class of contracts that facilitate cross-chain token transfers under DAO operations. Each jumpgate is set up to work with a particular token and a pre-defined recipient. Below is the procedure of transferring tokens using a jumpgate.",source:"@site/docs/guides/jumpgates.md",sourceDirName:"guides",slug:"/guides/jumpgates",permalink:"/guides/jumpgates",draft:!1,editUrl:"https://github.com/lidofinance/docs/blob/main/docs/guides/jumpgates.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"How to claim Lido early stakers airdrop",permalink:"/guides/early-staker-airdrop"},next:{title:"Lido V2 mainnet parameters",permalink:"/guides/verify-lido-v2-upgrade-manual"}},l={},c=[{value:"1. Verify Jumpgate",id:"1-verify-jumpgate",level:3},{value:"2. Transfer tokens to Jumpgate",id:"2-transfer-tokens-to-jumpgate",level:3},{value:"3. Bridge Tokens",id:"3-bridge-tokens",level:3},{value:"4. Claim tokens",id:"4-claim-tokens",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-bridge-tokens-through-jumpgate"},"How to Bridge Tokens through Jumpgate"),(0,n.kt)("p",null,"Jumpgates are a class of contracts that facilitate cross-chain token transfers under DAO operations. Each jumpgate is set up to work with a particular token and a pre-defined recipient. Below is the procedure of transferring tokens using a jumpgate."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/IqphF28aTUU"},(0,n.kt)("strong",{parentName:"a"},"Watch video tutorial"))),(0,n.kt)("h3",{id:"1-verify-jumpgate"},"1. Verify Jumpgate"),(0,n.kt)("p",null,"In this step we will be making sure that the jumpgate is correctly configured. You will only need to do this once because jumpgates are non-upgradeable contracts."),(0,n.kt)("p",null,"Go to ",(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/"},"Etherscan"),'  and open the Jumpgate page. Click the "Contract" tab, the green check mark confirms that the source code is verified. Check the parameters:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"arbiterFee")," is always 0;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bridge")," is the address of the bridge. Currenty, all jumpgates use only Wormhole Token bridge at ",(0,n.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x3ee18B2214AFF97000D974cf647E7C347E8fa585"},(0,n.kt)("inlineCode",{parentName:"a"},"0x3ee18B2214AFF97000D974cf647E7C347E8fa585")),", and you can check the address against the ",(0,n.kt)("a",{parentName:"li",href:"https://book.wormhole.com/reference/contracts.html"},"Wormhole docs"),";"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"nonce")," is always 0;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"owner")," is the Aragon Agent at ",(0,n.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x3e40D73EB977Dc6a537aF587D48316feE66E9C8c"},(0,n.kt)("inlineCode",{parentName:"a"},"0x3e40D73EB977Dc6a537aF587D48316feE66E9C8c"))," verifiable against ",(0,n.kt)("a",{parentName:"li",href:"/deployed-contracts#dao-contracts"},"Deployed contracts"),";"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"recipient")," is the recipient address in hexadecimal form. For Solana, this will an encoded LDO token account. Use ",(0,n.kt)("a",{parentName:"li",href:"https://appdevtools.com/base58-encoder-decoder"},"Base 58 decoder")," to decode this hexadecimal sequence to the Solana address format. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"recipientChain")," is the target chain identifier. If the Jumpgate is using Wormhole bridge, you can check the id against the ",(0,n.kt)("a",{parentName:"li",href:"https://book.wormhole.com/reference/contracts.html"},"Wormhole docs"),", Solana id is 1; "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"renounceOwnership")," should yield an error;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"token")," is the address of the token being transfered, e.g. LDO at ",(0,n.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32"},"0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32"),". Check the LDO address against ",(0,n.kt)("a",{parentName:"li",href:"/deployed-contracts#dao-contracts"},"Deployed contracts"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(2209).Z,width:"2784",height:"1434"})),(0,n.kt)("h3",{id:"2-transfer-tokens-to-jumpgate"},"2. Transfer tokens to Jumpgate"),(0,n.kt)("p",null,"The jumpgate is agnostic to how tokens were received. You can either transfer tokens directly or in the context of DAO operations via an Aragon vote or Easytrack transfer motion."),(0,n.kt)("h3",{id:"3-bridge-tokens"},"3. Bridge Tokens"),(0,n.kt)("p",null,"Now we can send tokens through the bridge. We cannot input the amount of tokens to bridge and the jumpgate will transfer the entirety of its token balance."),(0,n.kt)("p",null,'Open "Write contract" tab and connect your wallet by clicking the "Connect to Web3" button. We will now expand ',(0,n.kt)("inlineCode",{parentName:"p"},"bridgeTokens"),' function and click "Write". Remember that this function is permissionless and you can initiate the transfer from any account as long as you have enough ether for gas.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(6076).Z,width:"1016",height:"580"})),(0,n.kt)("h3",{id:"4-claim-tokens"},"4. Claim tokens"),(0,n.kt)("p",null,"Claiming process may be different depending on the bridge but for now all jumpgates only support Wormhole Token Bridge. We will be using Portal Bridge (formerly Wormhole) website to claim tokens on Solana."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To go ",(0,n.kt)("a",{parentName:"li",href:"https://www.portalbridge.com/#/redeem"},"Portal Bridge website"),' Redeem page and connect your Ethereum wallet. Select "Token" in "Type" dropdown and "Ethereum" in "Source Chain". Paste the hash of the ',(0,n.kt)("inlineCode",{parentName:"li"},"bridgeTokens"),' transaction. At first, this should produce an error because it takes some time for Portal Bridge to process the bridge transaction. Try this step again in 10-20 minutes and click "Recover" button.')),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(9058).Z,width:"2186",height:"1332"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'"Recover" will redirect you to "Tokens" tab, where you will be able to confirm the recipient address. Connect your Solana wallet, click "Redeem". You will be prompted to sign a few transactions. Once those are confirmed, you will be able to see the tokens on the recipient.')),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(3082).Z,width:"1962",height:"1474"})))}u.isMDXComponent=!0},2209:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/read-contract-b92acaf5b67c4e3fe78f250ba7144b25.png"},9058:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/recover-07dbb89650584510b48159abbd96463b.png"},3082:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/redeem-a3efe4f96f27e876c9784d53eb773d21.png"},6076:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/write-contract-98f7c6456f59b6ddc0e21e7f6d5fab86.png"}}]);