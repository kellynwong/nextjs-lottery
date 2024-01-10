(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(46925)}])},23544:function(e,n,t){"use strict";let a=t(37917),l=t(63021);e.exports={abi:l,contractAddresses:a}},46925:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var a=t(85893),l=t(9008),r=t.n(l),s=t(83078),u=t(23544),i=t(67294),o=t(84142),p=t(41942);function y(){let{chainId:e,isWeb3Enabled:n}=(0,s.Nr)(),t=parseInt(e),l=t in u.contractAddresses?u.contractAddresses[t][0]:null,[r,y]=(0,i.useState)("0"),[c,d]=(0,i.useState)("0"),[m,b]=(0,i.useState)("0"),f=(0,p.aa)(),{runContractFunction:h,isLoading:g,isFetching:C}=(0,s.JX)({abi:u.abi,contractAddress:l,functionName:"enterRaffle",params:{},msgValue:r}),{runContractFunction:T}=(0,s.JX)({abi:u.abi,contractAddress:l,functionName:"getEntranceFee",params:{}}),{runContractFunction:x}=(0,s.JX)({abi:u.abi,contractAddress:l,functionName:"getNumberOfPlayers",params:{}}),{runContractFunction:L}=(0,s.JX)({abi:u.abi,contractAddress:l,functionName:"getRecentWinner",params:{}});async function N(){let e=(await T()).toString(),n=(await x()).toString(),t=await L();y(e),d(n),b(t)}(0,i.useEffect)(()=>{n&&N()},[n]);let v=async function(e){await e.wait(1),w(e),N()},w=function(){f({type:"info",message:"Transaction Complete!",title:"Tx Notification",position:"topR",icon:"bell"})};return(0,a.jsxs)("div",{className:"p-5",children:[(0,a.jsx)("p",{children:"Hi From Lottery Entrance!"}),l?(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto",onClick:async function(){await h({onSuccess:v,onError:e=>console.log(e)})},disabled:g||C,children:g||C?(0,a.jsx)("div",{className:"animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"}):(0,a.jsx)("div",{children:"Enter Raffle"})}),(0,a.jsxs)("div",{children:["Entrance Fee: ",o.bM(r,"ether")," ETH"]}),(0,a.jsxs)("div",{children:["Number of Players: ",c]}),(0,a.jsxs)("div",{children:["Recent Winner: ",m]})]}):(0,a.jsx)("div",{children:"No Raffle Address Detected"})]})}function c(){return(0,a.jsxs)("div",{className:"p-5 border-b-2 flex flex-row",children:[(0,a.jsx)("h1",{className:"py-4 px-4 font-bold text-3xl",children:"Decentralized Lottery"}),(0,a.jsx)("div",{className:"ml-auto py-2 px-4",children:(0,a.jsx)(p.cg,{moralisAuth:!1})})]})}function d(){return(0,a.jsxs)("div",{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Smart Contract Lottery"}),(0,a.jsx)("meta",{name:"description",content:"Our Smart Contract Lottery"})," "]}),(0,a.jsx)(c,{}),(0,a.jsx)(y,{})]})}},9008:function(e,n,t){e.exports=t(14764)},63021:function(e){"use strict";e.exports=JSON.parse('[{"type":"constructor","inputs":[{"name":"vrfCoordinatorV2","type":"address","baseType":"address","components":null,"arrayLength":null,"arrayChildren":null},{"name":"entranceFee","type":"uint256","baseType":"uint256","components":null,"arrayLength":null,"arrayChildren":null},{"name":"gasLane","type":"bytes32","baseType":"bytes32","components":null,"arrayLength":null,"arrayChildren":null},{"name":"subscriptionId","type":"uint64","baseType":"uint64","components":null,"arrayLength":null,"arrayChildren":null},{"name":"callbackGasLimit","type":"uint32","baseType":"uint32","components":null,"arrayLength":null,"arrayChildren":null},{"name":"interval","type":"uint256","baseType":"uint256","components":null,"arrayLength":null,"arrayChildren":null}],"payable":false,"gas":null},{"type":"error","inputs":[{"name":"have","type":"address","baseType":"address","components":null,"arrayLength":null,"arrayChildren":null},{"name":"want","type":"address","baseType":"address","components":null,"arrayLength":null,"arrayChildren":null}],"name":"OnlyCoordinatorCanFulfill"},{"type":"error","inputs":[],"name":"OnlySimulatedBackend"},{"type":"error","inputs":[],"name":"Raffle__NotEnoughETHEntered"},{"type":"error","inputs":[],"name":"Raffle__NotOpen"},{"type":"error","inputs":[],"name":"Raffle__TransferFailed"},{"type":"error","inputs":[{"name":"currentBalance","type":"uint256","baseType":"uint256","components":null,"arrayLength":null,"arrayChildren":null},{"name":"numPlayers","type":"uint256","baseType":"uint256","components":null,"arrayLength":null,"arrayChildren":null},{"name":"raffleState","type":"uint256","baseType":"uint256","components":null,"arrayLength":null,"arrayChildren":null}],"name":"Raffle__UpkeepNotNeeded"},{"type":"event","inputs":[{"name":"player","type":"address","baseType":"address","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null}],"name":"RaffleEnter","anonymous":false},{"type":"event","inputs":[{"name":"requestId","type":"uint256","baseType":"uint256","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null}],"name":"RequestedRaffleWinner","anonymous":false},{"type":"event","inputs":[{"name":"winner","type":"address","baseType":"address","indexed":true,"components":null,"arrayLength":null,"arrayChildren":null}],"name":"WinnerPicked","anonymous":false},{"type":"function","inputs":[{"name":"","type":"bytes","baseType":"bytes","components":null,"arrayLength":null,"arrayChildren":null}],"name":"checkUpkeep","constant":true,"outputs":[{"name":"upkeepNeeded","type":"bool","baseType":"bool","components":null,"arrayLength":null,"arrayChildren":null},{"name":"","type":"bytes","baseType":"bytes","components":null,"arrayLength":null,"arrayChildren":null}],"stateMutability":"view","payable":false,"gas":null},{"type":"function","inputs":[],"name":"enterRaffle","constant":false,"outputs":[],"stateMutability":"payable","payable":true,"gas":null},{"type":"function","inputs":[],"name":"getEntranceFee","constant":true,"outputs":[{"name":"","type":"uint256","baseType":"uint256","components":null,"arrayLength":null,"arrayChildren":null}],"stateMutability":"view","payable":false,"gas":null},{"type":"function","inputs":[],"name":"getInterval","constant":true,"outputs":[{"name":"","type":"uint256","baseType":"uint256","components":null,"arrayLength":null,"arrayChildren":null}],"stateMutability":"view","payable":false,"gas":null},{"type":"function","inputs":[],"name":"getLatestTimeStamp","constant":true,"outputs":[{"name":"","type":"uint256","baseType":"uint256","components":null,"arrayLength":null,"arrayChildren":null}],"stateMutability":"view","payable":false,"gas":null},{"type":"function","inputs":[],"name":"getNumWords","constant":true,"outputs":[{"name":"","type":"uint256","baseType":"uint256","components":null,"arrayLength":null,"arrayChildren":null}],"stateMutability":"pure","payable":false,"gas":null},{"type":"function","inputs":[],"name":"getNumberOfPlayers","constant":true,"outputs":[{"name":"","type":"uint256","baseType":"uint256","components":null,"arrayLength":null,"arrayChildren":null}],"stateMutability":"view","payable":false,"gas":null},{"type":"function","inputs":[{"name":"index","type":"uint256","baseType":"uint256","components":null,"arrayLength":null,"arrayChildren":null}],"name":"getPlayer","constant":true,"outputs":[{"name":"","type":"address","baseType":"address","components":null,"arrayLength":null,"arrayChildren":null}],"stateMutability":"view","payable":false,"gas":null},{"type":"function","inputs":[],"name":"getRaffleState","constant":true,"outputs":[{"name":"","type":"uint8","baseType":"uint8","components":null,"arrayLength":null,"arrayChildren":null}],"stateMutability":"view","payable":false,"gas":null},{"type":"function","inputs":[],"name":"getRecentWinner","constant":true,"outputs":[{"name":"","type":"address","baseType":"address","components":null,"arrayLength":null,"arrayChildren":null}],"stateMutability":"view","payable":false,"gas":null},{"type":"function","inputs":[],"name":"getRequestConfirmations","constant":true,"outputs":[{"name":"","type":"uint256","baseType":"uint256","components":null,"arrayLength":null,"arrayChildren":null}],"stateMutability":"pure","payable":false,"gas":null},{"type":"function","inputs":[{"name":"","type":"bytes","baseType":"bytes","components":null,"arrayLength":null,"arrayChildren":null}],"name":"performUpkeep","constant":false,"outputs":[],"stateMutability":"nonpayable","payable":false,"gas":null},{"type":"function","inputs":[{"name":"requestId","type":"uint256","baseType":"uint256","components":null,"arrayLength":null,"arrayChildren":null},{"name":"randomWords","type":"uint256[]","baseType":"array","components":null,"arrayLength":-1,"arrayChildren":{"name":"","type":"uint256","baseType":"uint256","components":null,"arrayLength":null,"arrayChildren":null}}],"name":"rawFulfillRandomWords","constant":false,"outputs":[],"stateMutability":"nonpayable","payable":false,"gas":null}]')},37917:function(e){"use strict";e.exports=JSON.parse('{"31337":["0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"]}')}},function(e){e.O(0,[774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);