(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[25],{1219:function(e,t,a){"use strict";var c,s,n=a(21),i=a(285),o=a(56),l=a(9),r=a(138),d=a(6),u=(a(63),a(1277)),j=a(49),h=a(19),b=a(12),p=a(4),v=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],m=Object(j.a)(u.a)(c||(c=Object(r.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),O=j.a.div(s||(s=Object(r.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(d.useState)(Object(p.jsx)("span",{className:"loading-line"})),a=Object(l.a)(t,2),c=a[0],s=a[1],r=Object(d.useState)(!0),u=Object(l.a)(r,2),j=u[0],x=u[1],f=function(){var t=e.allowZero;return"object"!==Object(o.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},g=function(e){return e&&e.replace(/\.$/,"")};return Object(d.useEffect)((function(){var t=e.allowZero,a=(e.wallet,e.closeShowLoadingEffectAfterLoaded),c=e.defaultValue,o=void 0===c?"--":c,l=Object(i.a)(e,v);if(f())l.decimalScale>0&&l.value&&/\d+\.0*[1-9]+/.test(l.value)&&0===+Object(b.bg)(l.value).toFixed(+l.decimalScale||2)&&(l.decimalScale=Object(h.d)(Math.abs(l.value))+2),(-1===l.decimalScale||0===+l.value&&t)&&delete l.decimalScale,l.value=Object(h.K)(l.value),l.value&&/\d+.9{6}/.test(l.value)&&(l.value=(+l.value).toFixed(5)),s(Object(p.jsx)(m,Object(n.a)(Object(n.a)({},l),{},{renderText:g,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(j){var r=e.width,d=e.height;s(Object(p.jsx)(O,{className:"loading-line",width:r,height:d})),a&&x(!1)}var u=window.setTimeout((function(){f()||s(o)}),6e4);return function(){clearTimeout(u)}}),[e.value,e.decimalScale,e.suffix]),c}},1516:function(e,t,a){},2319:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a(9),n=a(1),i=a.n(n),o=(a(1516),a(79)),l=a(44),r=a(6),d=a(162),u=a(163),j=a(1219),h=a(39),b=a(457),p=(a(218),a(4));t.default=Object(l.b)("wallet")(Object(l.c)((function(e){var t=e.wallet,a=e.lang,n=Object(r.useState)(),l=Object(s.a)(n,2),v=l[0],m=l[1],O=Object(r.useState)(),x=Object(s.a)(O,2),f=x[0],g=x[1],N=Object(r.useState)(0),w=Object(s.a)(N,2),y=w[0],k=w[1],S=Object(r.useState)(),D=Object(s.a)(S,2),E=D[0],I=D[1],R=Object(r.useState)(!0),_=Object(s.a)(R,2),P=_[0],T=_[1],C=Object(r.useState)(),L=Object(s.a)(C,2),V=L[0],q=L[1],A=Object(u.c)(),U=function(e){var t=e.target.value;m(t)},B=function(){var e=Object(c.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.request("getUserVotingPower",[t.detail.account]);case 2:a=e.sent,console.log("getUserVotingPower",a),q(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(c.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.request("getUserVotingResult",[t.detail.account]);case 2:a=e.sent,console.log("getUserVotingResult",a),m(a.option);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(c.a)(i.a.mark((function e(){var t,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.request("getVotingResult");case 2:t=e.sent,a=+t.option_1+ +t.option_2,c=+t.option_1>+t.option_2?"1":"2",I(c),k(a),g(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(c.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.request("vote",[t.detail.chainId,t.detail.account,v],{includeResponse:!0});case 2:a=e.sent,console.log(a),a.succees?(B(),M(),A.success("success")):A.error("Faild");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){t.isConnected()&&(B(),M())}),[t,t.detail]),Object(r.useEffect)((function(){F()}),[]),Object(r.useEffect)((function(){t.isConnected()&&v&&T(!1)}),[t.detail,v]),Object(p.jsxs)("div",{className:"dip-box",children:[Object(p.jsxs)("div",{className:"back-governance",children:[Object(p.jsx)(o.b,{to:"/governance",children:Object(p.jsxs)("div",{className:"icon-back",children:[Object(p.jsx)("img",{alt:"",src:b.default}),Object(p.jsx)("span",{children:a.back})]})}),Object(p.jsx)("div",{className:"poll-detail",children:a["poll-detail"]})]}),Object(p.jsxs)("div",{className:"dip-box-info",children:[Object(p.jsxs)("div",{className:"poll-dip-info",children:[Object(p.jsxs)("div",{className:"dip-list-title",children:[Object(p.jsxs)("div",{className:"title-text",children:[a.dip,"-003"]}),Object(p.jsxs)("div",{className:"dip-progress",children:[Object(p.jsx)("div",{className:"progress-bg"}),"  ",a.active]})]}),Object(p.jsx)("div",{className:"dip-list-des",children:"Vote for changing the DERI burning mechanism"}),Object(p.jsx)("div",{className:"dip-time",children:"End Time: 2022 Sat. 28th May 4:00 AM UTC"})]}),Object(p.jsxs)("div",{className:"dip-option",children:[Object(p.jsxs)("div",{className:"1"===v?"option-check option-checked":"option-check",children:[E&&"1"===E&&Object(p.jsx)("div",{className:"leading",children:a.leading}),Object(p.jsxs)("div",{className:"option-title",children:[Object(p.jsxs)("div",{className:"option-check-text",children:[Object(p.jsx)("input",{type:"radio",name:"option",value:"1",id:"I",onChange:function(e){return U(e)},checked:"1"===v}),Object(p.jsx)("label",{for:"I"}),Object(p.jsx)("span",{className:"option-title-text",children:"Remove from circulation Forever"})]}),Object(p.jsxs)("div",{className:"option-num",children:[f?(+f.option_1).toFixed(0):0," ",a["deri-voting"]," (",f?f.option_1/y*100:"0","%)"]})]}),Object(p.jsx)("div",{className:"option-peng-bg",style:{width:"".concat(f?f.option_1/y*100:"0","%")}})]}),Object(p.jsxs)("div",{className:"2"===v?"option-check option-checked":"option-check",children:[Object(p.jsxs)("div",{className:"winner-status-quo",children:[E&&"2"===E&&Object(p.jsx)("div",{className:"leading",children:a.leading}),Object(p.jsx)("div",{className:"status-quo",children:a["status-quo"]})]}),Object(p.jsxs)("div",{className:"option-title",children:[Object(p.jsxs)("div",{className:"option-check-text",children:[Object(p.jsx)("input",{type:"radio",name:"option",value:"2",id:"II",onChange:function(e){return U(e)},checked:"2"===v}),Object(p.jsx)("label",{for:"II"}),Object(p.jsx)("span",{className:"option-title-text",children:"Burn to mining vault (the status quo)"})]}),Object(p.jsxs)("div",{className:"option-num",children:[f?(+f.option_2).toFixed(0):0," ",a["deri-voting"]," (",f?f.option_2/y*100:"0","%)"]})]}),Object(p.jsx)("div",{className:"option-peng-bg ",style:{width:"".concat(f?f.option_2/y*100:"0","%")}})]}),Object(p.jsxs)("div",{className:"vote-button",children:[Object(p.jsxs)("div",{className:"your-power",children:["Your Voting Power :",Object(p.jsx)(j.a,{value:V,decimalScale:2})," DERI"]}),Object(p.jsx)(d.a,{disabled:P,label:a.vote,onClick:Z,width:"286",fontSize:"18"})]})]}),Object(p.jsxs)("div",{className:"dip-option-des-rules",children:[Object(p.jsx)("div",{className:"description-close-open",children:a.description}),Object(p.jsx)("div",{className:"description-text",children:Object(p.jsxs)("div",{className:"ul-description",children:["Based on the community poll on snapshot proposed by a community member, the Deri team has placed an executive proposal (DIP 3) into the governance voting system. DERI Holders should vote for this proposal if they want to change the current DERI burning mechanism.",Object(p.jsx)("br",{}),"The current situation is that DERI bought from the secondary market is sent to the mining vault. ",Object(p.jsx)("a",{target:"_blank",href:"https://docs.deri.io/library/tokenomics#burning-mechanism",children:"Read more."})]})}),Object(p.jsxs)("div",{className:"vote-rules",children:[Object(p.jsx)("div",{className:"rules-title",children:a["voting-rules"]}),Object(p.jsxs)("div",{className:"rules-text",children:[Object(p.jsxs)("div",{className:"rules-margin",children:["Your voting power is the summation of the following balances in your wallet as of the deadline:",Object(p.jsxs)("ul",{className:"no-margin",children:[Object(p.jsx)("li",{children:"DERI balance"}),Object(p.jsx)("li",{children:"the corresponding DERI amount of your DERI-USDT SLP balance on SushiSwap"}),Object(p.jsx)("li",{children:"the corresponding DERI amount of your DERI-BUSD CLP balance on PancakeSwap"}),Object(p.jsx)("li",{children:"the corresponding DERI amount of your DLT balance in the DERI-based Inno Zone pools (BNB Chain)"})]})]}),Object(p.jsx)("div",{className:"rules-margin",children:"You can choose any of the 3 chains (ETH/BNB Chain/Aribitrum) to sign your vote by the deadline"}),Object(p.jsx)("div",{className:"rules-margin",children:"Voting Deadline: 2022 Sat. 28th May 4:00 AM UTC"}),Object(p.jsx)("div",{className:"rules-margin",children:"A snapshot will be taken at the block, at the deadline, and used to calculate the result. Please note that, if you had voted before the deadline but then had transferred your DERI, SLP, PANCAKE-LP, or DLT before the deadline, it would be the balance at the deadline that counts."})]})]}),Object(p.jsxs)("div",{className:"supplementary-notes",children:[Object(p.jsx)("div",{className:"notes-title",children:"Reference Poll Link"}),Object(p.jsx)("div",{className:"notes-text",children:Object(p.jsx)("a",{target:"_blank",href:"https://snapshot.org/#/deri.eth/proposal/0xcba17b9e16742479631df206adc3f343b9b50979bd70452bb689a3266133ad55",children:"Snapshot"})})]}),Object(p.jsxs)("div",{className:"supplementary-notes",children:[Object(p.jsx)("div",{className:"notes-title",children:"Discussion"}),Object(p.jsx)("div",{className:"notes-text",children:Object(p.jsx)("a",{target:"_blank",href:"https://discord.com/invite/kb8ZbYgp8M",children:"Discord"})})]})]})]})]})})))}}]);
//# sourceMappingURL=25.7b422a28.chunk.js.map