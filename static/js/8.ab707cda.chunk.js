(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[8],{1637:function(e,n,t){"use strict";n.a=t.p+"static/media/staked.46571832.svg"},1727:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a,s=t(244),c=t(358),o=t(9),r=t(170),i=t(23),l={};function d(e,n,t){var a=Object(r.b)(),d=function(e){return l[e]}(e),b=d.address,u=d.abi,j=a.ethereum;return b&&(t=b),Object(o.useMemo)((function(){var e=Object(i.v)(n);return j&&j.networkVersion===String(n)&&(e=new c.a(j,"any")),e?new s.b(t,u,function(e,n){return n?function(e,n){return e.getSigner(n).connectUnchecked()}(e,n):e}(e,a.account)):null}),[t,u,a])}(a=t(1638)).keys().forEach((function(e){var n=e.split("/"),t=n[n.length-1];l[t.substring(0,t.indexOf("."))]=a(e)}))},1872:function(e,n,t){"use strict";t.d(n,"a",(function(){return S}));var a,s,c=t(80),o=t(2),r=t(12),i=t(0),l=t.n(i),d=t(9),b=t(74),u=t(1450),j=t(215),x=t(559),v=t(560),p=t(561),m=t(558),f=t(1637),h=t(563),O=(t(2206),t(65)),k=t(1727),g=t(31),y=t(23),N=t(6),w="0x96C3966534b4377691e11e163A0409Ad01667343";function S(e){var n=e.lang,t=e.pool,a=e.wallet,s=Object(b.g)(),c=Object(d.useState)({}),i=Object(r.a)(c,2),O=i[0],S=i[1],_=Object(d.useState)(!1),F=Object(r.a)(_,2),C=F[0],B=F[1],E=Object(d.useState)(),z=Object(r.a)(E,2),D=z[0],X=z[1],I=Object(d.useState)(!0),q=Object(r.a)(I,2),A=(q[0],q[1]),L=Object(k.a)("ERC20",42161,"0x21E60EE73F17AC0A411ae5D690f908c3ED66Fe12"),M=Object(k.a)("ERC20",42161,"0x82af49447d8a07e3bd95bd0d56f35241523fbab1"),R=function(){var e=Object(o.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S({}),e.next=3,t.getPoolInfo(t.address,t.chainId,t.version);case 3:n=e.sent,S(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=Object(d.useCallback)(Object(o.a)(l.a.mark((function e(){var n,t,a,s,c,o,r,i,d,b,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S({}),e.next=3,L.balanceOf(w);case 3:return n=e.sent,e.next=6,M.balanceOf(w);case 6:return t=e.sent,a="".concat("https://infoapi.deri.io","/stats_for_token"),e.next=10,fetch(a);case 10:return s=e.sent,e.next=13,s.json();case 13:c=e.sent,o=c.data.price,r=g.a.from(n._hex).toString()/Math.pow(10,18),i=g.a.from(t._hex).toString()/Math.pow(10,18),d=Object(y.a)(r).times(o).toNumber(),b=Object(y.a)(i).times(1650).toNumber(),u=d+b,console.log("getLiquidity",u),S({liquidity:u});case 22:case"end":return e.stop()}}),e)}))),[L,M]),V=function(){var e=Object(o.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||"v3"!==t.version&&"v3_lite"!==t.version){e.next=5;break}return e.next=3,t.getVenusEarned(a,t.address);case 3:n=e.sent,X(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(o.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIsStaked(a,t);case 2:(n=e.sent)&&B(n.isStaked);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(e){e.target.src=h.default};Object(d.useEffect)((function(){"ulp"===t.version&&L?U():R(),a.isConnected()&&(J(),V())}),[t,a.detail.account,L,M]),Object(d.useEffect)((function(){var e=sessionStorage.getItem(t.address);null!==e&&e&&A(!1)}),[t]);var P="ulp"===t.version?"/lppool/".concat(t.chainId,"/").concat(t.address):"/pool/".concat(t.version||"v1","/").concat(t.chainId,"/").concat(t.type,"/").concat(t.address);return Object(N.jsx)("div",{className:"".concat("0x243681B8Cd79E3823fF574e07B2378B8Ab292c1E"===t.address?"showGuide":""," card-box"),children:Object(N.jsxs)("div",{className:"v2_lite_open"===t.version?"card-list open-list":"card-list",onClick:function(){!function(e){"v2_lite_open"!==t.version&&s.push(e)}(P)},children:[Object(N.jsxs)("div",{className:"card-header ".concat(t.retired?"".concat(t.version):""," ").concat(t.new?"new":""),children:[Object(N.jsxs)("div",{className:"pool-network-type",children:[Object(N.jsx)("div",{className:"network-logo",children:Object(N.jsx)("img",{alt:"",src:function(e){var n;return"56"===e||"97"===e?n=x.default:"137"===e?n=p.default:"1"===e?n=m.default:"42161"!==e&&"421611"!==e||(n=v.default),n}(t.chainId)})}),Object(N.jsxs)("div",{className:"pool-type-network-text",children:[Object(N.jsxs)("div",{className:"pool-type-text",children:["0xD2D950e338478eF7FeB092F840920B3482FcaC40"!==t.address&&Object(N.jsxs)(N.Fragment,{children:[n[t.type]," ",n[t.zone]]}),"0x1eF92eDA3CFeefb8Dae0DB4507f860d3b73f29BA"===t.address&&Object(N.jsx)(N.Fragment,{children:"DERI-based"}),"0xD2D950e338478eF7FeB092F840920B3482FcaC40"===t.address&&Object(N.jsx)(N.Fragment,{children:n[t.zone]})]}),Object(N.jsx)("div",{className:"pool-network-text",children:"BSC"===t.chain.toUpperCase()?"BNB Chain":t.chain.toUpperCase()})]})]}),Object(N.jsxs)("div",{className:"base-token-logo",children:[t.isLp&&Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"lp-base-token-bg",children:[Object(N.jsx)("div",{className:"base-token-bg ".concat(t.bTokens[0].bTokenSymbol)}),Object(N.jsx)("span",{className:"lp-con",children:"+"}),Object(N.jsx)("div",{className:"base-token-bg ".concat(t.bTokens[1].bTokenSymbol)})]})}),!t.isLp&&"v3"!==t.version&&"v3_lite"!==t.version&&Object(N.jsx)(N.Fragment,{children:t.bTokens.map((function(e,n){return Object(N.jsx)("div",{className:"base-token-box-bg no-animation-tokens",children:Object(N.jsx)("div",{className:"base-token-bg ".concat(e.bTokenSymbol),children:"v2_lite_open"===t.version&&Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("img",{alt:"",onError:G,src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(e.bTokenSymbol,".png")})})})},n)}))}),("v3"===t.version||"v3_lite"===t.version)&&!t.singleBtoken&&Object(N.jsx)(T,{bTokens:t.bTokens}),("v3"===t.version||"v3_lite"===t.version)&&t.singleBtoken&&Object(N.jsx)("div",{className:"base-token-box-bg no-animation-tokens",children:Object(N.jsx)("div",{className:"base-token-bg ".concat(t.bTokens[0].bTokenSymbol)})})]})]}),Object(N.jsxs)("div",{className:"card-content",children:[Object(N.jsx)("div",{className:"max-apy",children:"v2_lite_open"!==t.version&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:"max-apy-title",children:"v2"===t.version||"v3_lite"===t.version||"v3"===t.version?n["max-apy"]:n.apy}),Object(N.jsx)("div",{className:"max-apy-num",children:Object(N.jsx)(u.a,{value:O.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})]})}),Object(N.jsxs)("div",{className:"total-pool-liquidity",children:[Object(N.jsx)("div",{className:"total-liquidity-title",children:n["total-pool-liquidity"]}),Object(N.jsx)("div",{className:"total-liquidity-num",children:Object(N.jsx)(u.a,{value:O.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:"lp"===t.type?7:0})})]}),Object(N.jsxs)("div",{className:"your-deri-epoch",children:[C&&Object(N.jsxs)("div",{className:"staked-box",children:[Object(N.jsx)("img",{src:f.a,alt:""}),n.staked]}),+D>0&&("v3"===t.version||"v3_lite"===t.version)&&Object(N.jsx)("span",{className:"xvs-collectable",children:Object(N.jsxs)("div",{className:"staked-box",children:[Object(N.jsx)(u.a,{width:"50px",value:D,displayType:"text",thousandSeparator:!0,decimalScale:2})," \xa0 XVS  ",n.collectable]})})]}),Object(N.jsx)("div",{className:"stake-button",children:Object(N.jsx)(j.a,{disabled:"v2_lite_open"===t.version,className:"button",outline:!0,label:"v2_lite_open"===t.version?n.operating:n.stake})})]})]})})}var _=O.a.div(a||(a=Object(c.a)(["\n  @-webkit-keyframes explode {\n    0% {\n        transform: translateX(0px);\n        -moz-transform : translateX(0px);\n    }\n    100% {\n        transform: translateX(100px);\n        -moz-transform : translateX(100px);\n    }\n  }\n\n  @keyframes explode {\n    0% {\n        transform: translateX(0px);\n        -moz-transform : translateX(0px);\n    }\n    100% {\n        transform: translateX(100px) ;\n        -moz-transform : translateX(100px) ;\n    }\n  }\n  .base-token{\n    margin-left: 0px !important;\n    z-index : -2;\n    visibility: hidden;\n    background-color: #111e34;\n    border : 1px solid #fff;\n  }\n  @media only screen and (max-width: 760px) {\n    .base-token{\n      display:none;\n    }\n  }\n  .base-token-box-bg.explode:hover .move  {\n    -webkit-animation : explode .4s .0s linear;\n    -moz-animation :  explode .4s .0s linear;\n    animation: explode .4s .0s linear;\n    visibility: visible;    \n  }\n  \n  .base-token-box-bg.explode:hover .base-token {\n    z-index : 2 !important;\n  } \n\n"]))),F=O.a.div(s||(s=Object(c.a)(["\n  position: absolute;\n  transform : ",";\n  width: 48px;\n  height: 48px;\n  display: inline-block;\n  border-radius: 50%;\n  .move {\n    transform : translateX(100px) ",";\n  }\n"])),(function(e){return"rotate(".concat(-e.rotate,"deg)")}),(function(e){return"rotate(".concat(e.rotate,"deg)")})),T=function(e){var n=e.bTokens,t=void 0===n?[]:n,a=360/t.length;return Object(N.jsxs)(_,{className:"v3-tokens",children:[Object(N.jsx)("div",{className:"tokens",children:t.filter((function(e,n){return n<3})).map((function(e,n){return Object(N.jsx)("div",{className:"base-token-box-bg",children:Object(N.jsx)("div",{className:"base-token-bg ".concat(e.bTokenSymbol)})},n)}))}),Object(N.jsxs)("div",{className:"base-token-box-bg explode",children:[Object(N.jsxs)("div",{className:"base-token-bg num-token",children:[t.length-3," +"]}),t.map((function(e,n){var t=a*n;return Object(N.jsx)(F,{className:"base-token",rotate:t,width:"100",children:Object(N.jsx)("div",{width:"100",rotate:t,className:"base-token-bg move ".concat(e.bTokenSymbol)})},n)}))]})]})}},1873:function(e,n,t){},2206:function(e,n,t){}}]);
//# sourceMappingURL=8.ab707cda.chunk.js.map