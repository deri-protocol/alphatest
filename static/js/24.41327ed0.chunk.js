(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[24],{1379:function(e,t,n){"use strict";var a,s,i=n(22),r=n(325),c=n(54),d=n(9),u=n(63),l=n(8),o=(n(77),n(1435)),p=n(57),m=n(19),y=n(17),b=n(4),f=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],j=Object(p.a)(o.a)(a||(a=Object(u.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),h=p.a.span(s||(s=Object(u.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(l.useState)(Object(b.jsx)("span",{className:"loading-line"})),n=Object(d.a)(t,2),a=n[0],s=n[1],u=Object(l.useState)(!0),o=Object(d.a)(u,2),p=o[0],v=o[1],x=function(){var t=e.allowZero;return"object"!==Object(c.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},O=function(e){return e&&e.replace(/\.$/,"")};return Object(l.useEffect)((function(){var t=e.allowZero,n=(e.wallet,e.closeShowLoadingEffectAfterLoaded),a=e.defaultValue,c=void 0===a?"--":a,d=Object(r.a)(e,f);if(x())d.decimalScale>0&&d.value&&/\d+\.0*[1-9]+/.test(d.value)&&!t&&0===+Object(y.bg)(d.value).toFixed(+d.decimalScale||2)&&(d.decimalScale=Object(m.f)(Math.abs(d.value))+2),(-1===d.decimalScale||0===+d.value&&t)&&delete d.decimalScale,d.value=/e(\+|=)?/.test(d.value)?Object(m.L)(d.value):""+d.value,d.value&&/\d+.9{6}/.test(d.value)&&(d.value=(+d.value).toFixed(5)),s(Object(b.jsx)(j,Object(i.a)(Object(i.a)({},d),{},{renderText:O,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(p){var u=e.width,l=e.height;s(Object(b.jsx)(h,{className:"loading-line",width:u,height:l})),n&&v(!1)}var o=window.setTimeout((function(){x()||s(c)}),c===d.value?0:6e4);return function(){clearTimeout(o)}}),[e.value,e.decimalScale,e.suffix]),a}},2336:function(e,t,n){},2337:function(e,t,n){var a={"./ERC20USDC.json":2338,"./airDrop.json":2339,"./airDropTest.json":2340};function s(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=i,e.exports=s,s.id=2337},2338:function(e){e.exports=JSON.parse('{"address":"0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8","abi":[{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}]}')},2339:function(e){e.exports=JSON.parse('{"address":"0x04fC8424e78f5cadeafDF4Ec67B267e73CF29372","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NewAirdrop","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address[]","name":"accounts","type":"address[]"}],"name":"getBalances","outputs":[{"internalType":"uint256[]","name":"bals","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"components":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct TokenAirdrop.Balance[]","name":"bals","type":"tuple[]"}],"name":"newAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]}')},2340:function(e){e.exports=JSON.parse('{"address":"0x0fBD7d1f890fB0CCAE9c3f8F8DF35E8B55111D60","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAdmin","type":"address"}],"name":"NewAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NewAirdrop","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address[]","name":"accounts","type":"address[]"}],"name":"getBalances","outputs":[{"internalType":"uint256[]","name":"bals","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"components":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct TokenAirdrop.Balance[]","name":"bals","type":"tuple[]"}],"name":"newAirdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]}')},2343:function(e,t){},2347:function(e,t){},2560:function(e,t,n){"use strict";n.r(t);var a,s=n(2),i=n(9),r=n(0),c=n.n(r),d=n(8),u=n(48),l=n(19),o=n(187),p=n(1379),m=n(186),y=(n(44),n.p+"static/media/time.77d9d1c0.svg"),b=(n.p,n(2336),n(1583)),f=n(1860),j=n(117),h={};function v(e){var t=Object(j.b)(),n=function(e){return h[e]}(e),a=n.address,s=n.abi,i=t.ethereum;return Object(d.useMemo)((function(){if(!a||!s||!i)return null;var e=new f.a(i,"any");return new b.b(a,s,function(e,t){return t?function(e,t){return e.getSigner(t).connectUnchecked()}(e,t):e}(e,t.account))}),[a,s,i])}(a=n(2337)).keys().forEach((function(e){var t=e.split("/"),n=t[t.length-1];h[n.substring(0,n.indexOf("."))]=a(e)}));var x=n(13),O=n(142),w=n(4),T=n(2512),g=T.BigNumber;T.ethers,T.utils;t.default=Object(u.b)("wallet","poolManager")(Object(u.c)((function(e){var t=e.lang,n=e.wallet,a=void 0===n?{}:n,r=e.type,u=void 0===r?"deri":r,b=Object(d.useState)(0),f=Object(i.a)(b,2),j=f[0],h=f[1],T=Object(d.useState)(!0),N=Object(i.a)(T,2),S=N[0],k=N[1],C=Object(o.c)(),M=Object(d.useState)({}),A=Object(i.a)(M,2),D=(A[0],A[1],Object(d.useState)(!1)),E=Object(i.a)(D,2),F=(E[0],E[1],Object(d.useState)(!0)),B=Object(i.a)(F,2),U=(B[0],B[1],Object(d.useState)(!1)),L=Object(i.a)(U,2),J=L[0],R=L[1],_=v("airDrop"),I=v("ERC20USDC"),W={processing:"Claim Processing",success:"Claim Reward Executed",error:"Claim Reward Failed"},Z={success:"Claim Reward",error:"Transaction Failed"},$=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.isConnected()&&_&&Object(l.h)(a.detail.chainId,42161))){e.next=10;break}return e.next=3,_.balances(x.F,a.detail.account);case 3:return t=e.sent,e.next=6,I.decimals();case 6:n=e.sent,console.log(g.from(t._hex).toString()),s=g.from(t._hex).toString()/Math.pow(10,n),R(+s>0);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(42161!==+a.detail.chainId||!I){e.next=9;break}return e.next=3,I.balanceOf(a.detail.account);case 3:return t=e.sent,e.next=6,I.decimals();case 6:n=e.sent,t=g.from(t._hex).toString()/Math.pow(10,n),h(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isConnected()||!_||42161!==a.detail.chainId){e.next=23;break}return e.prev=1,e.next=4,_.claim(x.F);case 4:t=e.sent,e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log(e.t0),e.t0.error&&e.t0.error.data&&e.t0.error.data.message&&(n=e.t0.error.data.message,C.error(n)),e.abrupt("return",!1);case 12:if(console.log("cliam",t),!t||!t.hash){e.next=17;break}O.a.emit(x.h,{title:W,content:Z,hash:t.hash}),e.next=18;break;case 17:return e.abrupt("return",!1);case 18:return e.next=20,t.wait();case 20:s=e.sent,console.log("receipt",s),s&&(console.log("receipt",s),s&&s.transactionHash&&(i=s.transactionHash,s.status?($(),k(!0),O.a.emit(x.i,{title:W,content:Z,context:{success:!0,hash:i,error:"error"}})):O.a.emit(x.i,{title:W,content:Z,context:{success:(!1).success,hash:i,error:"error"}})));case 23:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){a.isConnected()&&($(),H())}),[a.chainId,a.account]),Object(d.useEffect)((function(){J?(new Date).getTime()>=16624512e5?k(!0):k(!1):k(!0)}),[J]),Object(w.jsx)("div",{className:"airdrop-box",children:Object(w.jsx)("div",{className:"airdrop-info",children:Object(w.jsxs)("div",{className:"airdrop-info-box",children:[Object(w.jsx)("div",{className:"airdrop-title",children:"USDC AirDrop Event"}),Object(w.jsxs)("div",{className:"wallet-address",children:[Object(w.jsx)("span",{className:"blue-logo"}),Object(l.k)(a.detail.account)]}),Object(w.jsxs)("div",{className:"wallet-balance",children:[t["wallet-balance"]," : ",Object(w.jsx)(p.a,{value:j,decimalScale:2,thousandSeparator:!0})," USDC"]}),"usdc"===u&&Object(w.jsxs)("div",{className:"airdrop-time position",children:[Object(w.jsx)("div",{className:"time-logo",children:Object(w.jsx)("img",{src:y,alt:""})}),Object(w.jsxs)("div",{className:"time-text",children:[Object(w.jsxs)("div",{className:"time-title",children:[Object(w.jsx)("div",{children:t["start-time"]}),Object(w.jsx)("div",{children:t["expire-time"]})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{children:"2022-09-01 8:00:00 UTC"}),Object(w.jsx)("div",{children:"2022-09-06 8:00:00 UTC"})]})]})]}),"deri"===u&&Object(w.jsxs)("div",{className:"airdrop-time",children:[Object(w.jsx)("div",{className:"time-logo",children:Object(w.jsx)("img",{src:y,alt:""})}),Object(w.jsxs)("div",{className:"time-text",children:[Object(w.jsxs)("div",{className:"time-title",children:[Object(w.jsx)("div",{children:t["start-time"]}),Object(w.jsx)("div",{children:t["expire-time"]})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{children:"2022-03-09 10:00:00 UTC"}),Object(w.jsx)("div",{children:"2022-03-11 12:00:00 UTC"})]})]})]}),Object(w.jsx)("div",{className:"claim",children:Object(w.jsx)(m.a,{fontWeight:"bold",disabled:S,label:t.claim,width:"277",height:"72",fontSize:"32",onClick:V})})]})})})})))}}]);
//# sourceMappingURL=24.41327ed0.chunk.js.map