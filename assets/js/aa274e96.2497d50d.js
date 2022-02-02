"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[760],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2009:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={},c="LidoOracle",s={unversionedId:"contracts/lido-oracle",id:"contracts/lido-oracle",title:"LidoOracle",description:"- Source code",source:"@site/docs/contracts/lido-oracle.md",sourceDirName:"contracts",slug:"/contracts/lido-oracle",permalink:"/contracts/lido-oracle",editUrl:"https://github.com/lidofinance/docs/blob/main/docs/contracts/lido-oracle.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Lido",permalink:"/contracts/lido"},next:{title:"StableSwapStateOracle",permalink:"/contracts/stable-swap-state-oracle"}},d=[{value:"Store the collected reports as an array",id:"store-the-collected-reports-as-an-array",children:[],level:2},{value:"Add calculation of staker rewards APR",id:"add-calculation-of-staker-rewards-apr",children:[],level:2},{value:"Sanity checks the oracles reports by configurable values",id:"sanity-checks-the-oracles-reports-by-configurable-values",children:[],level:2},{value:"Receiver function to be invoked on report pushes",id:"receiver-function-to-be-invoked-on-report-pushes",children:[],level:2},{value:"View Methods",id:"view-methods",children:[{value:"getLido()",id:"getlido",children:[],level:3},{value:"getQuorum()",id:"getquorum",children:[],level:3},{value:"getAllowedBeaconBalanceAnnualRelativeIncrease()",id:"getallowedbeaconbalanceannualrelativeincrease",children:[],level:3},{value:"getAllowedBeaconBalanceRelativeDecrease()",id:"getallowedbeaconbalancerelativedecrease",children:[],level:3},{value:"getBeaconReportReceiver()",id:"getbeaconreportreceiver",children:[],level:3},{value:"getCurrentOraclesReportStatus()",id:"getcurrentoraclesreportstatus",children:[],level:3},{value:"getCurrentReportVariantsSize()",id:"getcurrentreportvariantssize",children:[],level:3},{value:"getCurrentReportVariant()",id:"getcurrentreportvariant",children:[],level:3},{value:"getExpectedEpochId()",id:"getexpectedepochid",children:[],level:3},{value:"getOracleMembers()",id:"getoraclemembers",children:[],level:3},{value:"getVersion()",id:"getversion",children:[],level:3},{value:"getBeaconSpec()",id:"getbeaconspec",children:[],level:3},{value:"getCurrentEpochId()",id:"getcurrentepochid",children:[],level:3},{value:"getCurrentFrame()",id:"getcurrentframe",children:[],level:3},{value:"getLastCompletedEpochId()",id:"getlastcompletedepochid",children:[],level:3},{value:"getLastCompletedReportDelta()",id:"getlastcompletedreportdelta",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"setAllowedBeaconBalanceAnnualRelativeIncrease()",id:"setallowedbeaconbalanceannualrelativeincrease",children:[],level:3},{value:"setAllowedBeaconBalanceRelativeDecrease()",id:"setallowedbeaconbalancerelativedecrease",children:[],level:3},{value:"setBeaconReportReceiver()",id:"setbeaconreportreceiver",children:[],level:3},{value:"setBeaconSpec()",id:"setbeaconspec",children:[],level:3},{value:"initialize_v2()",id:"initialize_v2",children:[],level:3},{value:"addOracleMember()",id:"addoraclemember",children:[],level:3},{value:"removeOracleMember()",id:"removeoraclemember",children:[],level:3},{value:"setQuorum()",id:"setquorum",children:[],level:3},{value:"reportBeacon()",id:"reportbeacon",children:[],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lidooracle"},"LidoOracle"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lidofinance/lido-dao/blob/master/contracts/0.4.24/oracle/LidoOracle.sol"},"Source code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x442af784A788A5bd6F42A01Ebe9F287a871243fb"},"Deployed contract"))),(0,o.kt)("p",null,"LidoOracle is a contract where oracles send addresses' balances controlled by the DAO on the ETH\n2.0 side. The balances can go up because of reward accumulation and can go down due to slashing and\nstaking penalties. Oracles are assigned by the DAO."),(0,o.kt)("p",null,"Oracle daemons push their reports every frame (225 epochs currently, equal to one day) and when the\nnumber of the same reports reaches the ",(0,o.kt)("a",{parentName:"p",href:"#getquorum"},"'quorum'")," value, the report is pushed to the\n",(0,o.kt)("a",{parentName:"p",href:"/contracts/lido"},"Lido contract"),"."),(0,o.kt)("p",null,"The following mechanisms are also worth mentioning."),(0,o.kt)("h2",{id:"store-the-collected-reports-as-an-array"},"Store the collected reports as an array"),(0,o.kt)("p",null,"The report variant is a report with a counter - how many times this report was pushed by\noracles. This strongly simplified logic of ",(0,o.kt)("inlineCode",{parentName:"p"},"_getQuorumReport"),", because in the majority of cases, we\nonly have 1 variant of the report so we just make sure that its counter exceeded the quorum value."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The important note here is that when we remove an oracle (with ",(0,o.kt)("inlineCode",{parentName:"p"},"removeOracleMember"),"), we\nalso need to remove her report from the currently accepted reports. As of now, we do not keep a\nmapping between members and their reports, we just clean all existing reports and wait for the\nremaining oracles to push the same epoch again."))),(0,o.kt)("h2",{id:"add-calculation-of-staker-rewards-apr"},"Add calculation of staker rewards ",(0,o.kt)("a",{parentName:"h2",href:"https://en.wikipedia.org/wiki/Annual_percentage_rate"},"APR")),(0,o.kt)("p",null,"To calculate the percentage of rewards for stakers, we store and provide the following data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"preTotalPooledEther")," - total pooled ether mount, queried right before every report push to the\n",(0,o.kt)("a",{parentName:"li",href:"/contracts/lido"},"Lido contract"),","),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"postTotalPooledEther")," - the same, but queried right after the push,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lastCompletedEpochId")," - the last epoch that we pushed the report to the Lido,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeElapsed")," - the time in seconds between the current epoch of push and the\n",(0,o.kt)("inlineCode",{parentName:"li"},"lastCompletedEpochId"),". Usually, it should be a frame long: 32 ",(0,o.kt)("em",{parentName:"li"}," 12 ")," 225 = 86400, but maybe\nmultiples more in case that the previous frame didn't reach the quorum.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is important to note here, that we collect post/pre pair (not current/last), to avoid\nthe influence of new staking during the epoch."))),(0,o.kt)("p",null,"To calculate the APR, use the following formula:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"APR = (postTotalPooledEther - preTotalPooledEther) * secondsInYear / (preTotalPooledEther * timeElapsed)\n")),(0,o.kt)("h2",{id:"sanity-checks-the-oracles-reports-by-configurable-values"},"Sanity checks the oracles reports by configurable values"),(0,o.kt)("p",null,"In order to limit the misbehaving oracles impact, we want to limit oracles report change by 10% APR\nincrease in stake and 5% decrease in stake. Both values are configurable by the governance in case\nof extremely unusual circumstances."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Note that the change is evaluated after the quorum of oracles reports is reached, and not\non the individual report."))),(0,o.kt)("p",null,"And the logic of reporting to the ",(0,o.kt)("a",{parentName:"p",href:"/contracts/lido"},"Lido contract")," got a call to ",(0,o.kt)("inlineCode",{parentName:"p"},"_reportSanityChecks")," that does\nthe following. It compares the ",(0,o.kt)("inlineCode",{parentName:"p"},"preTotalPooledEther")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"postTotalPooledEther")," (see above) and"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if there is a profit or same, calculates the ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Annual_percentage_rate"},"APR"),", compares it with the upper bound. If was\nabove, reverts the transaction with ",(0,o.kt)("inlineCode",{parentName:"li"},"ALLOWED_BEACON_BALANCE_INCREASE")," code."),(0,o.kt)("li",{parentName:"ul"},"if there is a loss, calculates relative decrease and compares it with the lower bound. If was\nbelow, reverts the transaction with ",(0,o.kt)("inlineCode",{parentName:"li"},"ALLOWED_BEACON_BALANCE_DECREASE")," code.")),(0,o.kt)("h2",{id:"receiver-function-to-be-invoked-on-report-pushes"},"Receiver function to be invoked on report pushes"),(0,o.kt)("p",null,"To provide the external contract with updates on report pushes (every time the quorum is reached\namong oracle daemons data), we provide the following setter and getter functions. It might be\nneeded to implement some updates to the external contracts that should happen at the same tx the\n",(0,o.kt)("a",{parentName:"p",href:"/contracts/lido#rebasing"},"rebase")," happens (e.g. adjusting uniswap v2 pools to reflect the\nrebase)."),(0,o.kt)("p",null,"And when the callback is set, the following function will be invoked on every report push."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"interface IBeaconReportReceiver {\n    function processLidoOracleReport(uint256 _postTotalPooledEther,\n                                     uint256 _preTotalPooledEther,\n                                     uint256 _timeElapsed) external;\n}\n")),(0,o.kt)("p",null,"The arguments provided are the same as described in section ",(0,o.kt)("a",{parentName:"p",href:"#add-calculation-of-staker-rewards-apr"},"above"),"."),(0,o.kt)("h2",{id:"view-methods"},"View Methods"),(0,o.kt)("h3",{id:"getlido"},"getLido()"),(0,o.kt)("p",null,"Return the ",(0,o.kt)("a",{parentName:"p",href:"/contracts/lido"},"Lido contract")," address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function getLido() returns (ILido)\n")),(0,o.kt)("h3",{id:"getquorum"},"getQuorum()"),(0,o.kt)("p",null,"Return the number of exactly the same reports needed to finalize the epoch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function getQuorum() returns (uint256)\n")),(0,o.kt)("h3",{id:"getallowedbeaconbalanceannualrelativeincrease"},"getAllowedBeaconBalanceAnnualRelativeIncrease()"),(0,o.kt)("p",null,"Return the upper bound of the reported balance possible increase in ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Annual_percentage_rate"},"APR"),". See above about\n",(0,o.kt)("a",{parentName:"p",href:"#sanity-checks-the-oracles-reports-by-configurable-values"},"sanity checks"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function getAllowedBeaconBalanceAnnualRelativeIncrease() returns (uint256)\n")),(0,o.kt)("h3",{id:"getallowedbeaconbalancerelativedecrease"},"getAllowedBeaconBalanceRelativeDecrease()"),(0,o.kt)("p",null,"Return the lower bound of the reported balance possible decrease. See above about ",(0,o.kt)("a",{parentName:"p",href:"#sanity-checks-the-oracles-reports-by-configurable-values"},"sanity\nchecks"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function getAllowedBeaconBalanceRelativeDecrease() returns (uint256)\n")),(0,o.kt)("h3",{id:"getbeaconreportreceiver"},"getBeaconReportReceiver()"),(0,o.kt)("p",null,"Return the receiver contract address to be called when the report is pushed to ",(0,o.kt)("a",{parentName:"p",href:"/contracts/lido"},"Lido"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function getBeaconReportReceiver() returns (address)\n")),(0,o.kt)("h3",{id:"getcurrentoraclesreportstatus"},"getCurrentOraclesReportStatus()"),(0,o.kt)("p",null,"Return the current reporting bitmap, representing oracles who have already pushed their version of\nreport during the expected epoch."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Every oracle bit corresponds to the index of the oracle in the current members list"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function getCurrentOraclesReportStatus() returns (uint256)\n")),(0,o.kt)("h3",{id:"getcurrentreportvariantssize"},"getCurrentReportVariantsSize()"),(0,o.kt)("p",null,"Return the current reporting variants array size."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function getCurrentReportVariantsSize() returns (uint256)\n")),(0,o.kt)("h3",{id:"getcurrentreportvariant"},"getCurrentReportVariant()"),(0,o.kt)("p",null,"Return the current reporting array element with index ",(0,o.kt)("inlineCode",{parentName:"p"},"_index"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function getCurrentReportVariant(uint256 _index)\n")),(0,o.kt)("h3",{id:"getexpectedepochid"},"getExpectedEpochId()"),(0,o.kt)("p",null,"Return epoch that can be reported by oracles."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function getExpectedEpochId() returns (uint256)\n")),(0,o.kt)("h3",{id:"getoraclemembers"},"getOracleMembers()"),(0,o.kt)("p",null,"Return the current oracle member committee list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function getOracleMembers() returns (address[])\n")),(0,o.kt)("h3",{id:"getversion"},"getVersion()"),(0,o.kt)("p",null,"Return the initialized version of this contract starting from 0."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function getVersion() returns (uint256)\n")),(0,o.kt)("h3",{id:"getbeaconspec"},"getBeaconSpec()"),(0,o.kt)("p",null,"Return beacon specification data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function getBeaconSpec()\n    returns (\n        uint64 epochsPerFrame,\n        uint64 slotsPerEpoch,\n        uint64 secondsPerSlot,\n        uint64 genesisTime\n    )\n")),(0,o.kt)("h3",{id:"getcurrentepochid"},"getCurrentEpochId()"),(0,o.kt)("p",null,"Return the epoch calculated from current timestamp."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function getCurrentEpochId() returns (uint256)\n")),(0,o.kt)("h3",{id:"getcurrentframe"},"getCurrentFrame()"),(0,o.kt)("p",null,"Return currently reportable epoch (the first epoch of the current frame) as well as its start and\nend times in seconds."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function getCurrentFrame()\n    returns (\n        uint256 frameEpochId,\n        uint256 frameStartTime,\n        uint256 frameEndTime\n    )\n")),(0,o.kt)("h3",{id:"getlastcompletedepochid"},"getLastCompletedEpochId()"),(0,o.kt)("p",null,"Return last completed epoch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function getLastCompletedEpochId() returns (uint256)\n")),(0,o.kt)("h3",{id:"getlastcompletedreportdelta"},"getLastCompletedReportDelta()"),(0,o.kt)("p",null,"Report beacon balance and its change during the last frame."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function getLastCompletedReportDelta()\n    returns (\n        uint256 postTotalPooledEther,\n        uint256 preTotalPooledEther,\n        uint256 timeElapsed\n    )\n")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"setallowedbeaconbalanceannualrelativeincrease"},"setAllowedBeaconBalanceAnnualRelativeIncrease()"),(0,o.kt)("p",null,"Set the upper bound of the reported balance possible increase in APR to ",(0,o.kt)("inlineCode",{parentName:"p"},"_value"),". See above about\n",(0,o.kt)("a",{parentName:"p",href:"#sanity-checks-the-oracles-reports-by-configurable-values"},"sanity checks"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function setAllowedBeaconBalanceAnnualRelativeIncrease(uint256 _value) auth(SET_REPORT_BOUNDARIES)\n")),(0,o.kt)("h3",{id:"setallowedbeaconbalancerelativedecrease"},"setAllowedBeaconBalanceRelativeDecrease()"),(0,o.kt)("p",null,"Set the lower bound of the reported balance possible decrease to ",(0,o.kt)("inlineCode",{parentName:"p"},"_value"),". See above about ",(0,o.kt)("a",{parentName:"p",href:"#sanity-checks-the-oracles-reports-by-configurable-values"},"sanity\nchecks"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function setAllowedBeaconBalanceRelativeDecrease(uint256 _value) auth(SET_REPORT_BOUNDARIES)\n")),(0,o.kt)("h3",{id:"setbeaconreportreceiver"},"setBeaconReportReceiver()"),(0,o.kt)("p",null,"Set the receiver contract address to ",(0,o.kt)("inlineCode",{parentName:"p"},"_addr")," to be called when the report is pushed."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Specify 0 to disable this functionality."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function setBeaconReportReceiver(address _addr) auth(SET_BEACON_REPORT_RECEIVER)\n")),(0,o.kt)("h3",{id:"setbeaconspec"},"setBeaconSpec()"),(0,o.kt)("p",null,"Update beacon specification data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function setBeaconSpec(\n    uint64 _epochsPerFrame,\n    uint64 _slotsPerEpoch,\n    uint64 _secondsPerSlot,\n    uint64 _genesisTime\n    )\n    auth(SET_BEACON_SPEC)\n")),(0,o.kt)("h3",{id:"initialize_v2"},"initialize_v2()"),(0,o.kt)("p",null,"Initialize the contract v2 data, with sanity check bounds\n(",(0,o.kt)("inlineCode",{parentName:"p"},"_allowedBeaconBalanceAnnualRelativeIncrease"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"_allowedBeaconBalanceRelativeDecrease"),")."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Public function ",(0,o.kt)("inlineCode",{parentName:"p"},"initialize")," was removed from v2 because it is not needed once the contract is\ninitialized for the first time, that happened in v1. Instead we added ",(0,o.kt)("inlineCode",{parentName:"p"},"initialize_v2")," function that\ninitializes newly added variables, updates the contract version to 1."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function initialize_v2(\n    uint256 _allowedBeaconBalanceAnnualRelativeIncrease,\n    uint256 _allowedBeaconBalanceRelativeDecrease\n)\n")),(0,o.kt)("h3",{id:"addoraclemember"},"addOracleMember()"),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"_member")," to the oracle member committee list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function addOracleMember(address _member) auth(MANAGE_MEMBERS)\n")),(0,o.kt)("h3",{id:"removeoraclemember"},"removeOracleMember()"),(0,o.kt)("p",null,"Remove '","_","member` from the oracle member committee list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function removeOracleMember(address _member) auth(MANAGE_MEMBERS)\n")),(0,o.kt)("h3",{id:"setquorum"},"setQuorum()"),(0,o.kt)("p",null,"Set the number of exactly the same reports needed to finalize the epoch to ",(0,o.kt)("inlineCode",{parentName:"p"},"_quorum"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function setQuorum(uint256 _quorum) auth(MANAGE_QUORUM)\n")),(0,o.kt)("h3",{id:"reportbeacon"},"reportBeacon()"),(0,o.kt)("p",null,"Accept oracle committee member reports from the ETH 2.0 side. Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_epochId")," - beacon chain epoch"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_beaconBalance")," - balance in gwei on the ETH 2.0 side (9-digit denomination)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"_beaconValidators")," - number of validators visible in this epoch")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sol"},"function reportBeacon(uint256 _epochId, uint64 _beaconBalance, uint32 _beaconValidators)\n")))}u.isMDXComponent=!0}}]);