(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{100:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return h}));var a=o(0),n=o.n(a);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),m=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=m(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=m(o),p=a,h=d["".concat(r,".").concat(p)]||d[p]||b[p]||i;return o?n.a.createElement(h,s(s({ref:t},l),{},{components:o})):n.a.createElement(h,s({ref:t},l))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=o[l];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},84:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return m}));var a=o(3),n=o(7),i=(o(0),o(100)),r={},s={unversionedId:"guides/easy-track-guide",id:"guides/easy-track-guide",isDocsHomePage:!1,title:"Guide to Easy Track",description:"This document is intended for:",source:"@site/docs/guides/easy-track-guide.md",sourceDirName:"guides",slug:"/guides/easy-track-guide",permalink:"/guides/easy-track-guide",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/guides/easy-track-guide.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"DAO voting with Etherscan",permalink:"/guides/etherscan-voting"},next:{title:"SDKs",permalink:"/integrations/sdk"}},c=[{value:"General overview",id:"general-overview",children:[{value:"What is Easy Track motion",id:"what-is-easy-track-motion",children:[]},{value:"Motivation behind Easy Track",id:"motivation-behind-easy-track",children:[]},{value:"Easy Track use cases",id:"easy-track-use-cases",children:[]},{value:"Links",id:"links",children:[]}]},{value:"Operations HOWTO",id:"operations-howto",children:[]},{value:"Node Operators guide to Easy Track",id:"node-operators-guide-to-easy-track",children:[{value:"Conducting an Easy Track motion",id:"conducting-an-easy-track-motion",children:[]},{value:"Possible motion outcomes",id:"possible-motion-outcomes",children:[]}]},{value:"LEGO guide to Easy Track",id:"lego-guide-to-easy-track",children:[{value:"Conducting an Easy Track motion",id:"conducting-an-easy-track-motion-1",children:[]},{value:"Possible motion outcomes",id:"possible-motion-outcomes-1",children:[]}]},{value:"Rewards Committee guide to Easy Track",id:"rewards-committee-guide-to-easy-track",children:[{value:"Conducting an Easy Track motion",id:"conducting-an-easy-track-motion-2",children:[]},{value:"Possible motion outcomes",id:"possible-motion-outcomes-2",children:[]}]}],l={toc:c};function m(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document is intended for: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the Lido Node Operators who wish to increase their staking limits within the Lido protocol;"),Object(i.b)("li",{parentName:"ul"},"the Lido Ecosystem Grants Organisation members who wish to allocate funds into LEGO program;"),Object(i.b)("li",{parentName:"ul"},"the Lido Rewards Committee members who wish to allocate funds into ongoing reward programs, or add a new reward program into the list of active reward programs, or remove a reward program from the list of active reward programs.")),Object(i.b)("p",null,"The guide consists of two sections: ",Object(i.b)("a",{parentName:"p",href:"#general-overview"},"General overview")," and ",Object(i.b)("a",{parentName:"p",href:"#operations-howto"},"Operations HOWTO"),". If you\u2019re here for the technical details of interacting with Easy Track, feel free to skip to the latter."),Object(i.b)("h2",{id:"general-overview"},"General overview"),Object(i.b)("h3",{id:"what-is-easy-track-motion"},"What is Easy Track motion"),Object(i.b)("p",null,"Easy Track motion is a lightweight voting considered to have passed if the minimum objections threshold hasn\u2019t been reached. As opposed to regular Aragon votings, Easy Track motions are cheaper (no need to vote \u2018pro\u2019, token holders only have to vote \u2018contra\u2019 if they have objections) and easier to manage (no need to ask broad DAO community vote on proposals that spark no debate).\nAn Easy Track motion can be enacted if the minimum objections threshold of 0.5% of total LDO supply hasn't been reached within 72 hours after the motion has been started.\nTo prevent motion spam, only up to 12 active motions can exist at the same time."),Object(i.b)("h3",{id:"motivation-behind-easy-track"},"Motivation behind Easy Track"),Object(i.b)("p",null,"Initially, the Lido DAO governance used to rely on Aragon voting model. The DAO approved or rejected proposals by direct governance token voting. Though transparent and reliable, it is not a convenient way to make decisions only affecting small groups of Lido DAO members. Besides, direct token voting didn\u2019t exactly reflect all the decision-making processes within the Lido DAO and was often used only to adopt an existing consensus. Votings on such decisions often struggled to attract wider DAO attention and thus, to pass.\nEasy Track has been developed as a solution to problem of the DAO getting tired of governance."),Object(i.b)("h3",{id:"easy-track-use-cases"},"Easy Track use cases"),Object(i.b)("p",null,"There are three types of votings run periodically by the Lido DAO wrapped into the Easy Track motions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Node Operators increasing staking limits"),Object(i.b)("li",{parentName:"ul"},"Funds being allocated to LEGO program"),Object(i.b)("li",{parentName:"ul"},"Funds being allocated into reward programs")),Object(i.b)("h3",{id:"links"},"Links"),Object(i.b)("p",null,"You can read more about Easy Track functionality in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/lidofinance/lido-improvement-proposals/blob/develop/LIPS/lip-3.md"},"LIP-3"),".",Object(i.b)("br",{parentName:"p"}),"\n","For more in-depth technical description, please read through the full project ",Object(i.b)("a",{parentName:"p",href:"https://github.com/lidofinance/easy-track/blob/master/specification.md"},"specification"),"."),Object(i.b)("h2",{id:"operations-howto"},"Operations HOWTO"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#node-operators-guide-to-easy-track"},"Node Operators guide to Easy Track")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#lego-guide-to-easy-track"},"LEGO guide to Easy Track")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#rewards-committee-guide-to-easy-track"},"Rewards Committee guide to Easy Track"))),Object(i.b)("h2",{id:"node-operators-guide-to-easy-track"},"Node Operators guide to Easy Track"),Object(i.b)("p",null,"There are several features of staking limit related Easy Track motions to keep in mind before starting one:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"A node operator can only increase staking limits for themselves.")," Before starting a motion, please make sure you have access to the address associated with the right node operator in the Lido Node Operators Registry. The correct address can be looked up in the Aragon UI (",Object(i.b)("a",{parentName:"li",href:"https://testnet.testnet.fi/#/lido-testnet-prater/0x9d4af1ee19dad8857db3a45b0374c81c8a1c6320/"},"goerli-prater testnet"),", ",Object(i.b)("a",{parentName:"li",href:"https://mainnet.lido.fi/#/lido-dao/0x55032650b14df07b85bf18a3a3ec8e0af2e028d5/"},"mainnet"),"). "),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Single motion can only address staking limit of a single node operator.")," Increasing limits for several node operators in one motion isn't supported."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Total amount of node operator's signing keys must be greater than or equal to the new staking limit.")," Make sure you have submitted enough valid signing keys before starting a motion.")),Object(i.b)("h3",{id:"conducting-an-easy-track-motion"},"Conducting an Easy Track motion"),Object(i.b)("p",null,"To start a staking limit Easy Track motion, proceed to Easy Track UI (",Object(i.b)("a",{parentName:"p",href:"https://easytrack.testnet.lido.fi/"},"goerli-prater testnet"),", ",Object(i.b)("a",{parentName:"p",href:"https://easytrack.lido.fi/"},"mainnet"),").",Object(i.b)("br",{parentName:"p"}),"\n","Connect your wallet using the 'Connect wallet' button top right. Please use the address specified as your reward address in the Node Operators Registry.\nIn the header menu click 'Start motion' button. You will see the motion creation interface. Motion type you are looking for is 'Increase node operator staking limit'.",Object(i.b)("br",{parentName:"p"}),"\n","Fill in the form (all fields are required).",Object(i.b)("br",{parentName:"p"}),"\n","Your node operator ID can be looked up in the Aragon UI (",Object(i.b)("a",{parentName:"p",href:"https://testnet.testnet.fi/#/lido-testnet-prater/0x9d4af1ee19dad8857db3a45b0374c81c8a1c6320/"},"goerli-prater testnet"),", ",Object(i.b)("a",{parentName:"p",href:"https://mainnet.lido.fi/#/lido-dao/0x55032650b14df07b85bf18a3a3ec8e0af2e028d5/"},"mainnet"),") \u2013 it is the number you can see to the left from your node operator name.",Object(i.b)("br",{parentName:"p"}),"\n","Fill the desired staking limit value in the 'New limit' field.",Object(i.b)("br",{parentName:"p"}),"\n","Press 'Submit' button below the form and sign the transaction (gas costs apply).",Object(i.b)("br",{parentName:"p"}),"\n","As soon as transaction is confirmed, the motion has been started and you can see it on the 'Active motions' page of Easy Track UI. Notifications will be sent out to let the DAO know about the motion. From this moment on, the LDO token holders will have 72 hours to submit their objections if they have any. Please note the motion duration may be different for testnet deployment."),Object(i.b)("h3",{id:"possible-motion-outcomes"},"Possible motion outcomes"),Object(i.b)("p",null,"A motion can have three possible outcomes:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Motion passed."),"\nIn case the minimum objections threshold of 0.5% of total LDO supply hasn't been reached, the motion is considered to have passed, and it can be enacted. This operation is permissionless, which means anyone can enact a passed motion. Please note, it is still possible to object a non-enacted motion even after 72 hours timelock. The enacted motion will be automatically de-activated and put to the motion archive available under the 'Archive motions' section of Easy Track UI."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Motion rejected."),"\nIn case the minimum objections threshold of 0.5% of total LDO supply has been reached, the motion is considered rejected. It will be automatically de-activated and put to the motion archive available under the 'Archive motions' section of Easy Track UI."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Motion canceled."),"\nIn case you find out you have made a mistake when starting the motion (e.g. you don't want to increase your staking limits just yet or you've misclicked when specifying the new limit value etc.), you can cancel the motion at any moment before it has been enacted. To do so, click on the motion to see the detailed motion view and press 'Cancel' motion button top right. Please note, this is on-chain action, and you will have to sign a transaction to complete it (gas costs apply).")),Object(i.b)("h2",{id:"lego-guide-to-easy-track"},"LEGO guide to Easy Track"),Object(i.b)("p",null,"There are several features of LEGO Easy Track motions to keep in mind before starting one:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Only a LEGO committee member can start a motion to allocate funds to LEGO program.")," Before starting a motion, please make sure you have access to ",Object(i.b)("a",{parentName:"li",href:"https://gnosis-safe.io/app/#/safes/0x12a43b049A7D330cB8aEAB5113032D18AE9a9030"},"the LEGO Committee Gnosis safe multi-sig"),". "),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"LEGO Easy Track motions support fund allocation in one or multiple of three crypto currencies: ETH, stETH, and LDO.")," ")),Object(i.b)("h3",{id:"conducting-an-easy-track-motion-1"},"Conducting an Easy Track motion"),Object(i.b)("p",null,"To start a LEGO Easy Track motion, proceed to the ",Object(i.b)("a",{parentName:"p",href:"https://easytrack.lido.fi/"},"Easy Track UI")," and click 'Connect' button top right.",Object(i.b)("br",{parentName:"p"}),"\n","Pick 'Wallet Connect' option, you will see the QR code. Copy it by clicking 'Copy to clipboard' button under the code.",Object(i.b)("br",{parentName:"p"}),"\n","Next, proceed to ",Object(i.b)("a",{parentName:"p",href:"https://gnosis-safe.io/app/#/safes/0x12a43b049A7D330cB8aEAB5113032D18AE9a9030"},"the LEGO Committee Gnosis safe multi-sig")," and connect your wallet by clicking 'Connect your wallet' button top right.",Object(i.b)("br",{parentName:"p"}),"\n","Open the 'APPS' section in the drawer menu on the left and find Wallet Connect Safe app in the list.",Object(i.b)("br",{parentName:"p"}),"\n","Paste the code into the field on the left. Now the LEGO Committee Gnosis multisig is connected to Easy Track app.  "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You need to keep the Wallet Connect Safe app tab open in your browser for transactions to pop up. You will not receive transaction requests if you don't have it open.")),Object(i.b)("p",null,"In the header menu of Easy Track UI click 'Start motion' button. You will see the motion creation interface. Motion type you are looking for is 'Top up LEGO'.\nFill in the form (all fields are required).",Object(i.b)("br",{parentName:"p"}),"\n","Pick the token you want to top up the LEGO program with.",Object(i.b)("br",{parentName:"p"}),"\n","Specify the amount of tokens you want to top up the LEGO program with.  "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can add multiple token allocations into a single motion by clicking 'One more token' below the form.")),Object(i.b)("p",null,"Press 'Submit' button below the form and sign the transaction on the Wallet Connect safe app page (gas costs apply).",Object(i.b)("br",{parentName:"p"}),"\n","Next, you will need another LEGO Committee Gnosis multi-sig owner to confirm the transaction in the Gnosis Safe.",Object(i.b)("br",{parentName:"p"}),"\n","As soon as transaction is confirmed, the motion has been started and you can see it on the 'Active motions' page of Easy Track UI. Notifications will be sent out to let the DAO know about the motion. From this moment on, the LDO token holders will have 72 hours to submit their objections if they have any."),Object(i.b)("h3",{id:"possible-motion-outcomes-1"},"Possible motion outcomes"),Object(i.b)("p",null,"A motion can have three possible outcomes:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Motion passed."),"\nIn case the minimum objections threshold of 0.5% of total LDO supply hasn't been reached, the motion is considered to have passed, and it can be enacted. This operation is permissionless, which means anyone can enact a passed motion. Please note, it is still possible to object a non-enacted motion even after 72 hours timelock. The enacted motion will be automatically de-activated and put to the motion archive available under the 'Archive motions' section of Easy Track UI."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Motion rejected."),"\nIn case the minimum objections threshold of 0.5% of total LDO supply has been reached, the motion is considered rejected. It will be automatically de-activated and put to the motion archive available under the 'Archive motions' section of Easy Track UI."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Motion canceled."),"\nIn case you find out you have made a mistake when starting the motion (e.g. you don't want to top-up LEGO program just yet or you've misclicked when specifying the amount of tokens to transfer etc.), you can cancel the motion at any moment before it has been enacted. To do so, click on the motion to see the detailed motion view and press 'Cancel' motion button top right. Please note, this is on-chain action, and you will have to sign a transaction in the Gnosis safe to complete it (gas costs apply).")),Object(i.b)("h2",{id:"rewards-committee-guide-to-easy-track"},"Rewards Committee guide to Easy Track"),Object(i.b)("p",null,"There are several features of Rewards Committee Easy Track motions to keep in mind before starting one:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Only a Lido Rewards Committee member can start a motion to allocate funds to reward programs.")," Before starting a motion, please make sure you have access to ",Object(i.b)("a",{parentName:"li",href:"https://gnosis-safe.io/app/eth:0x87D93d9B2C672bf9c9642d853a8682546a5012B5/balances"},"the Rewards Committee Gnosis safe multi-sig"),". "),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Rewards Committee Easy Track motions support fund allocation in LDO only.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Finance Team Easy Track supports topping up multiple reward programs in a single motion.")," Though be careful, lack of consensus on one reward program will prevent the whole motion from passing."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"To top up a reward program via Easy Track motion, it should first be added into the list of active reward programs.")," This action requires a separate Easy Track motion to complete."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"When no longer active, reward program should be removed from the list of active reward programs.")," This action requires a separate Easy Track motion to complete.")),Object(i.b)("h3",{id:"conducting-an-easy-track-motion-2"},"Conducting an Easy Track motion"),Object(i.b)("p",null,"To start a LEGO Easy Track motion, proceed to the ",Object(i.b)("a",{parentName:"p",href:"https://easytrack.lido.fi/"},"Easy Track UI")," and click 'Connect' button top right.",Object(i.b)("br",{parentName:"p"}),"\n","Pick 'Wallet Connect' option, you will see the QR code. Copy it by clicking 'Copy to clipboard' button under the code.",Object(i.b)("br",{parentName:"p"}),"\n","Next, proceed to ",Object(i.b)("a",{parentName:"p",href:"https://gnosis-safe.io/app/eth:0x87D93d9B2C672bf9c9642d853a8682546a5012B5/balances"},"the Rewards Committee Gnosis safe multi-sig")," and connect your wallet by clicking 'Connect your wallet' button top right.",Object(i.b)("br",{parentName:"p"}),"\n","Open the APPS section in the drawer menu on the left and find Wallet Connect Safe app in the list.",Object(i.b)("br",{parentName:"p"}),"\n","Paste the code into the field on the left. Now the Rewards Committee Gnosis multi-sig is connected to Easy Track app.  "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You need to keep the Wallet Connect Safe app tab open in your browser for transactions to pop up. You will not receive transaction requests if you don't have it open.")),Object(i.b)("p",null,"In the header menu of Easy Track UI click 'Start motion' button. You will see the motion creation interface. The motion type you are looking for is 'Add reward program'.",Object(i.b)("br",{parentName:"p"}),"\n","Fill in the form (all fields are required).",Object(i.b)("br",{parentName:"p"}),"\n","Title should be a human-readable description of the reward program (e.g. 'Curve ETH<",">","stETH LP incentives').",Object(i.b)("br",{parentName:"p"}),"\n","Fill the Ethereum address of the reward program (it could be reward contract or reward manager contract depending on the specific program) in the 'Address' field."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"When creating a motion to remove a reward program from the list or to top up a previously added program, you will be able to pick a program by the program title, rather than pasting Ethereum address.")),Object(i.b)("p",null,"Press 'Submit' button below the form and sign the transaction on the Wallet Connect safe app page (gas costs apply).",Object(i.b)("br",{parentName:"p"}),"\n","Next, you will need another Rewards Committee Gnosis multi-sig owner to confirm the transaction in the Gnosis Safe.",Object(i.b)("br",{parentName:"p"}),"\n","As soon as transaction is confirmed, the motion has been started and you can see it on the 'Active motions' page of Easy Track UI. Notifications will be sent out to let the DAO know about the motion. From this moment on, the LDO token holders will have 72 hours to submit their objections if they have any."),Object(i.b)("h3",{id:"possible-motion-outcomes-2"},"Possible motion outcomes"),Object(i.b)("p",null,"A motion can have three possible outcomes:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Motion passed."),"\nIn case the minimum objections threshold of 0.5% of total LDO supply hasn't been reached, the motion is considered to have passed, and it can be enacted. This operation is permissionless, which means anyone can enact a passed motion. Please note, it is still possible to object a non-enacted motion even after 72 hours timelock. The enacted motion will be automatically de-activated and put to the motion archive available under the 'Archive motions' section of Easy Track UI."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Motion rejected."),"\nIn case the minimum objections threshold of 0.5% of total LDO supply has been reached, the motion is considered rejected. It will be automatically de-activated and put to the motion archive available under the 'Archive motions' section of Easy Track UI."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Motion canceled."),"\nIn case you find out you have made a mistake when starting the motion (e.g. you have added the wrong address for the new reward program or you've misclicked when specifying the amount of tokens to be allocated etc.), you can cancel the motion at any moment before it has been enacted. To do so, click on the motion to see the detailed motion view and press 'Cancel' motion button top right. Please note, this is on-chain action, and you will have to sign a transaction via WalletConnect Safe app, as well as a confirmation from another Finance Team multi-sig owner to complete it (gas costs apply).")))}m.isMDXComponent=!0}}]);