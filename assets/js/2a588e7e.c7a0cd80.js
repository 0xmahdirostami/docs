"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1506],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8110:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={},i="GateSeal",l={unversionedId:"contracts/gate-seal",id:"contracts/gate-seal",title:"GateSeal",description:"- Source code",source:"@site/docs/contracts/gate-seal.md",sourceDirName:"contracts",slug:"/contracts/gate-seal",permalink:"/contracts/gate-seal",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/contracts/gate-seal.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"TRP VestingEscrow",permalink:"/contracts/trp-vesting-escrow"},next:{title:"OssifiableProxy",permalink:"/contracts/ossifiable-proxy"}},s=[{value:"What is a GateSeal?",id:"what-is-a-gateseal",children:[],level:2},{value:"Why use a GateSeal?",id:"why-use-a-gateseal",children:[],level:2},{value:"How does it work?",id:"how-does-it-work",children:[],level:2},{value:"How are GateSeals created?",id:"how-are-gateseals-created",children:[],level:2}],c={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gateseal"},"GateSeal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/gate-seals/blob/main/contracts/GateSeal.vy"},"Source code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/gate-seals/blob/main/contracts/GateSealFactory.vy"},"Factory source code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x1ad5cb2955940f998081c1ef5f5f00875431aa90"},"Deployed contract")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x6c82877cac5a7a739f16ca0a89c0a328b8764a24"},"Deployed factory contract")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0xEe06EA501f7d9DC6F4200385A8D910182D155d3e"},"Deployed blueprint contract"))),(0,r.kt)("p",null,"A one-time panic button for pausable contracts."),(0,r.kt)("h2",{id:"what-is-a-gateseal"},"What is a GateSeal?"),(0,r.kt)("p",null,"A GateSeal is a contract that allows the designated account to instantly put a set of contracts on pause (i.e. seal) for a limited duration. GateSeals are meant to be used as a panic button for crucial contracts in case of an emergency. Each GateSeal is one-time use only and immediately becomes unusable once activated. If the seal is never triggered, the GateSeal will still eventually expire after a set period."),(0,r.kt)("h2",{id:"why-use-a-gateseal"},"Why use a GateSeal?"),(0,r.kt)("p",null,"To put such crucial components of the Lido protocol as ",(0,r.kt)("inlineCode",{parentName:"p"},"WithdrawalQueue")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatorExitBus")," on hold, the DAO must hold a vote which may take up to several days to pass. GateSeals provide a way to temporarily pause these contracts immediately if the emergency calls for a swifter response. This will give the Lido DAO the time to come up with a solution, hold a vote, implement changes, etc."),(0,r.kt)("p",null,"Each GateSeal is operated by a committee, essentially a multisig account responsible for pulling the break in case things go awry. However, authorizing a committee to pause/resume the protocol withdrawals would be utterly reckless which is why GateSeals have a number of safeguards in place:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"each GateSeal can only be activated only once and becomes unusable immediately after,"),(0,r.kt)("li",{parentName:"ul"},"each GateSeal can only be activated within its expiry period of 1 year maximum and becomes unusable past its expiry timestamp even if it was never triggered,"),(0,r.kt)("li",{parentName:"ul"},"the pause duration set at construction time is limited to 14 days.")),(0,r.kt)("p",null,"Thus, the biggest damage a compromised GateSeal multisig can inflict is to pause withdrawals for 14 days, given the DAO does not resume withdrawals sooner via the governance voting."),(0,r.kt)("p",null,'With all that said, it still is undesireable for a decentralized protocol to rely on a multisig in any capacity. Which is why GateSeals are only a temporary solution; their limited lifespan and one-time use design also act as a kind of "inconvenience bomb", in that once expired, the GateSeal must be replaced and setup anew.'),(0,r.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,r.kt)("p",null,"The idea of GateSeals is heavily based around ",(0,r.kt)("inlineCode",{parentName:"p"},"PausableUntil")," contracts which both ",(0,r.kt)("inlineCode",{parentName:"p"},"WithdrawalQueue")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ValidatorExitBus")," implement. These ",(0,r.kt)("inlineCode",{parentName:"p"},"PausableUntil")," contracts are similar to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.4/contracts/security/Pausable.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"Pausable"))," contracts with one important difference: the paused state is not merely a boolean value, but a timestamp from which the contract is resumed (or unpaused). This allows the user to pause the contract for a certain period, and after this period the contract will resume itself without an explicit call. Thus, the PausableUntil pattern in conjunction with a GateSeal provide a way to pull the break on the protocol in a critical situation."),(0,r.kt)("p",null,"A GateSeal is set up with an immutable configuration at the time of construction:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the sealing committee, an account responsible for triggering the seal,"),(0,r.kt)("li",{parentName:"ul"},"the seal duration, a period for which the contracts will be sealed,"),(0,r.kt)("li",{parentName:"ul"},"the sealables, a list of contracts to be sealed,"),(0,r.kt)("li",{parentName:"ul"},"the expiry period, a period after which the GateSeal becomes unusable.")),(0,r.kt)("p",null,"Important to note, that GateSeals do not bypass the access control settings for pausable contracts, which is why GateSeals must be given the appropriate permissions beforehand. If and when an emergency arises, the sealing committee simply calls the seal function and puts the contracts on pause for the set duration."),(0,r.kt)("h2",{id:"how-are-gateseals-created"},"How are GateSeals created?"),(0,r.kt)("p",null,"GateSeals are created using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lidofinance/gate-seals/blob/main/contracts/GateSealFactory.vy"},"GateSealFactory"),". The factory uses the blueprint pattern whereby new GateSeals are deployed using the initcode (blueprint) stored onchain. The blueprint is essentially a broken GateSeal that can only be used to create new GateSeals."),(0,r.kt)("p",null,"While Vyper offers other ways to create new contracts, we opted to use the blueprint pattern because it creates a fully autonomous contract without any dependencies. Unlike other contract-creating functions, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.vyperlang.org/en/stable/built-in-functions.html#chain-interaction"},(0,r.kt)("inlineCode",{parentName:"a"},"create_from_blueprint"))," invokes the constructor of the contract, thus, helping avoid the initilization shenanigans."),(0,r.kt)("p",null,"The blueprint follows the ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-5202"},"EIP-5202")," format, which includes a header that makes the contract uncallable and specifies the version."))}p.isMDXComponent=!0}}]);