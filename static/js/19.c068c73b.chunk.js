(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[19],{1239:function(e,t,c){"use strict";var a,n,i=c(21),s=c(285),l=c(56),r=c(11),o=c(138),d=c(6),j=(c(63),c(1315)),b=c(49),u=c(19),h=c(12),m=c(4),v=["allowZero","wallet","closeShowLoadingEffectAfterLoaded","defaultValue"],x=Object(b.a)(j.a)(a||(a=Object(o.a)(["\n  width : ","px;\n"])),(function(e){return e.width})),p=b.a.div(n||(n=Object(o.a)(["\n  width : ",";\n  height : ",";\n"])),(function(e){return/px$/.test(e.width)?e.width:"".concat(e.width,"px")}),(function(e){return/px$/.test(e.height)?e.height:"".concat(e.height,"px")}));t.a=function(e){var t=Object(d.useState)(Object(m.jsx)("span",{className:"loading-line"})),c=Object(r.a)(t,2),a=c[0],n=c[1],o=Object(d.useState)(!0),j=Object(r.a)(o,2),b=j[0],O=j[1],f=function(){var t=e.allowZero;return"object"!==Object(l.a)(e.value)&&void 0!==e.value&&""!==e.value&&!isNaN(e.value)&&"NaN"!==e.value||0===Math.abs(e.value)&&!0===t},k=function(e){return e&&e.replace(/\.$/,"")};return Object(d.useEffect)((function(){var t=e.allowZero,c=(e.wallet,e.closeShowLoadingEffectAfterLoaded),a=e.defaultValue,l=void 0===a?"--":a,r=Object(s.a)(e,v);if(f())r.decimalScale>0&&r.value&&/\d+\.0*[1-9]+/.test(r.value)&&0===+Object(h.bg)(r.value).toFixed(+r.decimalScale||2)&&(r.decimalScale=Object(u.d)(Math.abs(r.value))+2),(-1===r.decimalScale||0===+r.value&&t)&&delete r.decimalScale,r.value=Object(u.K)(r.value),r.value&&/\d+.9{6}/.test(r.value)&&(r.value=(+r.value).toFixed(5)),n(Object(m.jsx)(x,Object(i.a)(Object(i.a)({},r),{},{renderText:k,displayType:"text",fixedDecimalScale:!0,thousandSeparator:!0})));else if(b){var o=e.width,d=e.height;n(Object(m.jsx)(p,{className:"loading-line",width:o,height:d})),c&&O(!1)}var j=window.setTimeout((function(){f()||n(l)}),6e4);return function(){clearTimeout(j)}}),[e.value,e.decimalScale,e.suffix]),a}},1254:function(e,t,c){"use strict";c.d(t,"a",(function(){return j}));var a=c(49),n=c(1389),i=c.n(n),s=c(140),l=c(19),r=c(1365),o=c(4);const d=a.a.div`
  display:${e=>e.block};
  .text {
    border-bottom : 1px dashed #93A1B8;
    width : max-content;
    cursor : pointer;
    display:${e=>e.block}
  }
  
  .__react_component_tooltip.tooltip.show {
    font-weight : ${e=>e.isWin?400:600} 
  }
`;function j(e){let{text:t,id:c=String((new Date).getTime())+Math.random(),tip:a,multiline:n,html:j,className:b,element:u="",block:h="block",width:m="auto",children:v,tiggerEvent:x}=e;return Object(o.jsxs)(d,{className:b,block:h,isWin:r.isWindows,children:[Object(o.jsx)("div",{className:"text","data-for":c,"data-tip":j?i.a.renderToString(u):a,"data-event":Object(l.z)()?"click":x,"data-html":j,children:t||v}),a&&Object(o.jsx)(s.a,{id:c,width:m,padding:"12",place:"bottom",overridePosition:(e,t,c,a,n,i,s,l)=>{const r=c.getBoundingClientRect(),o=a.getBoundingClientRect();let{x:d,y:j,height:b,width:u}=r;const{left:h,top:m}=e;return d+o.width/2>document.documentElement.clientWidth?d-=Math.abs(u-o.width):d-(o.width-u)/2<0?d-=u:d-=(o.width-u)/2,j+b+o.height>=document.documentElement.clientHeight?j=j+b-o.height:j+=b,d<0&&(d=0),j<0&&(j=0),{top:j,left:d}},html:j,borderRadius:8,multiline:n})]})}},1516:function(e,t,c){"use strict";t.a=c.p+"static/media/staked.45c27f0b.svg"},1538:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var a=c(49),n=(c(6),c(4));const i=a.a.div`
width:${e=>e.width}%;
max-width:100%;
height:10px;
background-color: #5577FD;
`;function s(e){let{startTimestamp:t,nowTimestamp:c,endTimestamp:a}=e;const s=parseInt((c-t)/(a-t)*100);return Object(n.jsx)("div",{className:"time-slider",children:Object(n.jsx)(i,{width:s})})}},1539:function(e,t,c){"use strict";var a=c(6),n=c(49),i=c(59),s=c.n(i),l=c(4);const r=n.a.div`
  display: inline-block;
  vertical-align: middle;
`,o=n.a.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`,d=n.a.input.attrs({type:"checkbox"})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`,j=n.a.div`
  background: ${e=>e.checked?"#5577FD":"none"};
  border: 2px solid #5577FD;
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 4px;
  box-sizing: border-box;
  border-radius: 4px;
  cursor : pointer;
  position : relative;

  ${d}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${o} {
    visibility: ${e=>e.checked?"visible":"hidden"};
    display: flex;
    position : absolute;

  }
`;t.a=e=>{let{className:t,onChange:c,checked:n,...i}=e;const[b,u]=Object(a.useState)(n);Object(a.useEffect)((()=>{u(n)}),[n]);const h=s()("c-checkbox",{checked:b});return Object(l.jsxs)(r,{className:t,children:[Object(l.jsx)(d,{checked:b,...i,onChange:c}),Object(l.jsx)(j,{checked:b,className:h,onClick:()=>{const e=!b;u(e),c&&c(e)},children:Object(l.jsx)(o,{className:"icon",viewBox:"0 0 24 24",children:Object(l.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]})}},1588:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var a=c(1655),n=c.n(a),i=(c(1659),c(1660),c(4));function s(e){let{label:t,className:c,checked:a,onClick:s}=e;const l=e=>{s&&s(!a)};return Object(i.jsxs)("div",{className:"l-toggle",children:[Object(i.jsx)("span",{className:"label-text",children:t}),Object(i.jsx)(n.a,{onClick:l,checked:a,className:c,onChange:l,icons:!1})]})}},1654:function(e,t,c){},1660:function(e,t,c){},1661:function(e,t,c){},1662:function(e,t,c){},1663:function(e,t,c){"use strict";c(53),c(19),c(1540),c(1528),c(1664),c(126),c(4)},1664:function(e,t,c){},1737:function(e,t,c){"use strict";c.d(t,"a",(function(){return N}));var a,n,i=c(138),s=c(2),l=c(11),r=c(1),o=c.n(r),d=c(6),j=c(53),b=c(1239),u=c(162),h=c(452),m=c(454),v=c(456),x=c(451),p=c(1516),O=c(457),f=(c(59),c.p+"static/media/close.7f6b23a4.svg"),k=(c(1661),c(49)),g=c(4);function N(e){var t=e.lang,c=e.pool,a=e.wallet,n=Object(j.g)(),i=Object(d.useState)({}),r=Object(l.a)(i,2),k=r[0],N=r[1],w=Object(d.useState)(!1),y=Object(l.a)(w,2),C=y[0],F=y[1],I=Object(d.useState)(),T=Object(l.a)(I,2),_=T[0],E=T[1],$=Object(d.useState)(!0),B=Object(l.a)($,2),D=B[0],P=B[1],A=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N({}),e.next=3,c.getPoolInfo(a,c);case 3:t=e.sent,N(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c||"v3"!==c.version&&"v3_lite"!==c.version){e.next=5;break}return e.next=3,c.getVenusEarned(a,c.address);case 3:t=e.sent,E(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.getIsStaked(a,c);case 2:(t=e.sent)&&F(t.isStaked);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(e){e.target.src=O.default};Object(d.useEffect)((function(){A(),a.isConnected()&&(z(),L())}),[c,a.detail.account]),Object(d.useEffect)((function(){var e=sessionStorage.getItem(c.address);null!==e&&e&&P(!1)}),[c]);var q="/pool/".concat(c.version||"v1","/").concat(c.chainId,"/").concat(c.type,"/").concat(c.address);return Object(g.jsxs)("div",{className:"".concat("0x243681B8Cd79E3823fF574e07B2378B8Ab292c1E"===c.address?"showGuide":""," card-box"),children:[Object(g.jsxs)("div",{className:"v2_lite_open"===c.version?"card-list open-list":"card-list",onClick:function(){!function(e){"v2_lite_open"!==c.version&&n.push(e)}(q)},children:[Object(g.jsxs)("div",{className:"card-header ".concat(c.retired?c.version:""," ").concat(c.new?"new":""),children:[Object(g.jsxs)("div",{className:"pool-network-type",children:[Object(g.jsx)("div",{className:"network-logo",children:Object(g.jsx)("img",{alt:"",src:function(e){var t;return"56"===e||"97"===e?t=h.default:"137"===e?t=v.default:"1"===e?t=x.default:"42161"!==e&&"421611"!==e||(t=m.default),t}(c.chainId)})}),Object(g.jsxs)("div",{className:"pool-type-network-text",children:[Object(g.jsxs)("div",{className:"pool-type-text",children:["0xD2D950e338478eF7FeB092F840920B3482FcaC40"!==c.address&&Object(g.jsxs)(g.Fragment,{children:[t[c.type]," ",t[c.zone]]}),"0xD2D950e338478eF7FeB092F840920B3482FcaC40"===c.address&&Object(g.jsx)(g.Fragment,{children:t[c.zone]})]}),Object(g.jsx)("div",{className:"pool-network-text",children:"BSC"===c.chain.toUpperCase()?"BNB Chain":c.chain.toUpperCase()})]})]}),Object(g.jsxs)("div",{className:"base-token-logo",children:[c.isLp&&Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"lp-base-token-bg",children:[Object(g.jsx)("div",{className:"base-token-bg ".concat(c.bTokens[0].bTokenSymbol)}),Object(g.jsx)("span",{className:"lp-con",children:"+"}),Object(g.jsx)("div",{className:"base-token-bg ".concat(c.bTokens[1].bTokenSymbol)})]})}),!c.isLp&&"v3"!==c.version&&"v3_lite"!==c.version&&Object(g.jsx)(g.Fragment,{children:c.bTokens.map((function(e,t){return Object(g.jsx)("div",{className:"base-token-box-bg",children:Object(g.jsx)("div",{className:"base-token-bg ".concat(e.bTokenSymbol),children:"v2_lite_open"===c.version&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("img",{alt:"",onError:X,src:"https://raw.githubusercontent.com/deri-finance/deri-open-zone/main/img/".concat(e.bTokenSymbol,".png")})})})},t)}))}),("v3"===c.version||"v3_lite"===c.version)&&Object(g.jsx)(S,{bTokens:c.bTokens})]})]}),Object(g.jsxs)("div",{className:"card-content",children:[Object(g.jsx)("div",{className:"max-apy",children:"v2_lite_open"!==c.version&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"max-apy-title",children:"v2"===c.version||"v3_lite"===c.version||"v3"===c.version?t["max-apy"]:t.apy}),Object(g.jsx)("div",{className:"max-apy-num",children:Object(g.jsx)(b.a,{value:k.apy,suffix:"%",displayType:"text",allowZero:!0,decimalScale:2})})]})}),Object(g.jsxs)("div",{className:"total-pool-liquidity",children:[Object(g.jsx)("div",{className:"total-liquidity-title",children:t["total-pool-liquidity"]}),Object(g.jsx)("div",{className:"total-liquidity-num",children:Object(g.jsx)(b.a,{value:k.liquidity,displayType:"text",thousandSeparator:!0,decimalScale:"lp"===c.type?7:0})})]}),Object(g.jsxs)("div",{className:"your-deri-epoch",children:[C&&Object(g.jsxs)("div",{className:"staked-box",children:[Object(g.jsx)("img",{src:p.a,alt:""}),t.staked]}),+_>0&&("v3"===c.version||"v3_lite"===c.version)&&Object(g.jsx)("span",{className:"xvs-collectable",children:Object(g.jsxs)("div",{className:"staked-box",children:[Object(g.jsx)(b.a,{width:"50px",value:_,displayType:"text",thousandSeparator:!0,decimalScale:2})," \xa0 XVS  ",t.collectable]})})]}),Object(g.jsx)("div",{className:"stake-button",children:Object(g.jsx)(u.a,{disabled:"v2_lite_open"===c.version,className:"button",outline:!0,label:"v2_lite_open"===c.version?t.operating:t.stake})})]})]}),"v3_lite"===c.version&&D&&Object(g.jsxs)("div",{className:"new-symbol",children:[Object(g.jsxs)("div",{className:"new-symbol-text",children:["New Listing : ",Object(g.jsx)("a",{href:"https://deri.io/#/trade/futures/FITFIUSDT",target:"_blank",children:"FITFIUSDT"})," ",Object(g.jsx)("a",{href:"https://deri.io/#/trade/futures/AVAXUSDT",target:"_blank",children:"AVAXUSDT"})]}),Object(g.jsx)("div",{className:"close-symbol",children:Object(g.jsx)("img",{src:f,alt:"close",onClick:function(){return e=c.address,sessionStorage.setItem(e,!1),void P(!1);var e}})})]})]})}var w=k.a.div(a||(a=Object(i.a)(["\n  @-webkit-keyframes explode {\n    0% {\n        transform: translateX(0px);\n        -moz-transform : translateX(0px);\n    }\n    100% {\n        transform: translateX(100px);\n        -moz-transform : translateX(100px);\n    }\n  }\n\n  @keyframes explode {\n    0% {\n        transform: translateX(0px);\n        -moz-transform : translateX(0px);\n    }\n    100% {\n        transform: translateX(100px);\n        -moz-transform : translateX(100px);\n    }\n  }\n  .base-token{\n    margin-left: 0px!important;\n    z-index : -2;\n    visibility: hidden;\n    background-color: #111e34;\n    border : 1px solid #fff;\n  }\n  @media only screen and (max-width: 760px) {\n    .base-token{\n      display:none;\n    }\n  }\n  .base-token-box-bg.explode:hover .move  {\n    -webkit-animation : explode .4s .0s linear;\n    -moz-animation :  explode .4s .0s linear;\n    animation: explode .4s .0s linear;\n    // transform : translateX(100px)!important;\n    visibility: visible;    \n  }\n  \n  .base-token-box-bg.explode:hover .base-token {\n    z-index : 2!important;\n  } \n\n"]))),y=k.a.div(n||(n=Object(i.a)(["\n  position: absolute;\n  transform : ",";\n  width: 48px;\n  height: 48px;\n  display: inline-block;\n  border-radius: 50%;\n  .move {\n    transform : translateX(100px) ",";\n  }\n"])),(function(e){return"rotate(".concat(-e.rotate,"deg)")}),(function(e){return"rotate(".concat(e.rotate,"deg) !important")})),S=function(e){var t=e.bTokens,c=void 0===t?[]:t,a=360/c.length;return Object(g.jsxs)(w,{className:"v3-tokens",children:[Object(g.jsx)("div",{className:"tokens",children:c.filter((function(e,t){return t<3})).map((function(e,t){return Object(g.jsx)("div",{className:"base-token-box-bg",children:Object(g.jsx)("div",{className:"base-token-bg ".concat(e.bTokenSymbol)})},t)}))}),Object(g.jsxs)("div",{className:"base-token-box-bg explode",children:[Object(g.jsxs)("div",{className:"base-token-bg",children:[c.length-3," +"]}),c.map((function(e,t){var c=a*t;return Object(g.jsx)(y,{className:"base-token",rotate:c,width:"100",children:Object(g.jsx)("div",{width:"100",rotate:c,className:"base-token-bg move ".concat(e.bTokenSymbol)})},t)}))]})]})}},2080:function(e,t,c){},2347:function(e,t,c){"use strict";c.r(t);var a=c(25),n=c(2),i=c(11),s=c(1),l=c.n(s),r=c(6),o=c(44),d=c(162),j=(c(1538),c(168)),b=c(163),u=(c(1239),c(39)),h=c(19),m=c(1254),v=c.p+"static/media/oldDeri.3758074c.svg",x=(c(1654),c(4));function p(e){let{lang:t,getLang:c,poolShow:a=!0,wallet:n={}}=e;const i=Object(b.c)(),[s,l]=Object(r.useState)({}),[o,p]=Object(r.useState)(!1),[O,f]=Object(r.useState)(""),[k,g]=Object(r.useState)(!1),N=Object(j.a)(s.chainId),w=async()=>{if(n.isConnected()){const e=await u.a.request("getUserInfoAll",[n.detail.account]),t=(+e.total).toFixed(2),c=e.valid?(+e.amount).toFixed(2):0,a=e.lp,i=(+e.trade).toFixed(2),s=e.chainId;l({claimed:t,unclaimed:c,harvestDeriLp:a,harvestDeriTrade:i,chainId:s})}},y=async()=>{if(n.isConnected()){let e=await u.a.request("getUserLastClaimInfo",[n.detail.account]);e&&g(!e.claimed)}},S=async()=>{if(n.isConnected()){let e=await u.a.request("getUserFirstClaimInfo",[n.detail.account]);if(e.first_timestamp){let c=new Date(1e3*e.first_timestamp),a=c.getFullYear(),n=c.getMonth()+1;n=(e=>{let c;switch(e){case 1:c=t.jan;break;case 2:c=t.feb;break;case 3:c=t.mar;break;case 4:c=t.apr;break;case 5:c=t.may;break;case 6:c=t.jun;break;case 7:c=t.jul;break;case 8:c=t.aug;break;case 9:c=t.sep;break;case 10:c=t.oct;break;case 11:c=t.nov;break;case 12:c=t.dec}return c})(n);let i=c.getDate();f(`${n} ${i}, ${a}`)}else f("")}};return Object(r.useEffect)((()=>{let e=window.setInterval((()=>{w(),y()}),18e4);return w(),y(),S(),()=>clearInterval(e)}),[n.detail.account]),Object(x.jsx)("div",{className:"mining-claim",children:Object(x.jsxs)("div",{className:"mining-claim-info",children:[Object(x.jsxs)("div",{className:"deri-num-slider",children:[Object(x.jsxs)("div",{className:"deri-claim-time",children:[t["old-deri-farms"],Object(x.jsx)(m.a,{tip:t["old-deri-farms-tip"],multiline:!0,children:Object(x.jsx)("span",{children:Object(x.jsx)("img",{src:v})})})]}),Object(x.jsx)("div",{className:"deri-claim-text",children:c("old-pool-deri",{num:o?0:s.unclaimed&&k?s.unclaimed:0})})]}),a&&Object(x.jsx)("div",{className:"cliam-button",children:Object(x.jsx)(d.a,{icon:"ClaimDeri",fontWeight:"bold",disabled:0===+s.unclaimed||!k,label:t["claim-all"],onClick:async()=>{if(n.isConnected()){await(async()=>{if(void 0===N.name)return void i.error(`${t["wrong-network"]}`);if(!Object(h.f)(n.detail.chainId,s.chainId))return void i.error(`${t["your-deri-is-on"]} ${N.name} ${t["connect-to"]} ${N.name} ${t["to-claim"]}`);if(0===+s.unclaimed)return void i.error(t["no-deri-to-claim-yet"]);if(parseInt(Date.now()/1e3)%28800<1800)return void i.error(t["claiming-DERI-is-disabled-during-first-30-minutes-of-each-epoch"]);let e=await u.a.request("mintDToken",[n.detail.chainId,n.detail.account],{includeResponse:!0,write:!0,subject:t["claim-deri-title"]});return e.success?(i.success(t["claim-deri-reward"],{timeout:8e3,isTransaction:!0,transactionHash:e.response.data.transactionHash,link:`${n.blockExploreUrl}/tx/${e.response.data.transactionHash}`,title:t["claim-reward-executed"]}),!0):(""===e.response.transactionHash||i.error(`${t["transaction-failed"]} : ${e.response.error}`,{timeout:3e5,isTransaction:!0,transactionHash:e.response.transactionHash,link:`${n.blockExploreUrl}/tx/${e.response.transactionHash}`,title:t["claim-reward-failed"]}),!1)})()&&p(!0)}else try{return!!await n.connect()}catch(e){return!1}}})})]})})}var O=c(289),f=(c(140),c(49)),k=c(59),g=c.n(k);const N=f.a.div`
cursor:pointer;
font-weight: 600;
.dropdown-menu{
  display:none
}
.dropdown-menu.show{
  margin-top:8px;
  background: #203B60;
  display:block;
  border-radius:4px;
  z-index:8;
  position:relative;
  .dropdown-item{
    padding:0 24px;
  }
}
.btn{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  color:#FFFFFF;

}
.dropdown-item:hover{
  color:#FFFFFF
}
`;function w(e){let{selectList:t=[],onChange:c}=e;const[a,n]=Object(r.useState)(!1),[i,s]=Object(r.useState)(t[0].text),l=g()("dropdown-menu",{show:a});return Object(x.jsxs)(N,{children:[Object(x.jsxs)("div",{onClick:()=>{n(!a)},className:"btn checked",children:[i,Object(x.jsx)("img",{src:O.default,alt:""})]}),Object(x.jsx)("div",{className:l,children:t.map(((e,t)=>Object(x.jsx)("div",{className:"dropdown-item",onClick:()=>{(e=>{s(e.text),c(e.index),n(!1)})(e)},children:e.text},t)))})]})}var y=c(1588),S=c(1539),C=c(452),F=c(456),I=c(454),T=c(451),_=c(1737),E=(c(2080),c.p+"static/media/filter-close.b72edec1.svg");function $(e){let{lang:t,isShowFilter:c,checkedStaked:a,setCheckedStaked:n,setIsShowFilter:i,curTabPool:s,checkedPolygon:l,checkedETH:r,checkedOption:o,checkedFutureMain:d,checkedFutureInno:j,checkedBSC:b,checkedArb:u,setCheckedOption:h,setCheckedFutureMain:m,setCheckedFutureInno:v,setCheckedPolygon:p,setCheckedBSC:O,setCheckedArb:f,setCheckedETH:k,clearFilter:g}=e;return Object(x.jsxs)("div",{className:"filter-modal",children:[Object(x.jsx)("div",{className:"close-filter-modal",children:Object(x.jsx)("span",{className:"close-icon",onClick:()=>{i()},children:Object(x.jsx)("img",{alt:"",src:E})})}),Object(x.jsxs)("div",{className:"staked-only",children:[Object(x.jsx)("div",{className:"staked-only-text",children:t["staked-only"]}),Object(x.jsx)("div",{children:Object(x.jsx)(y.a,{className:"l-toggle",checked:a,onClick:e=>{n(e)}})})]}),Object(x.jsx)("div",{className:"select-pool-type-network",children:Object(x.jsxs)("div",{className:"network",children:[Object(x.jsx)("div",{className:"type-cols",children:t.network}),Object(x.jsxs)("div",{className:"type-cols",children:[Object(x.jsxs)("div",{className:"type-title",children:[Object(x.jsx)("img",{alt:"",src:C.default})," BNB Chain"]}),Object(x.jsx)("div",{children:Object(x.jsx)(S.a,{checked:b,className:"l-checkbox",onChange:e=>{O(e)}})})]}),"deri"!==s&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"type-cols",children:[Object(x.jsxs)("div",{className:"type-title",children:[" ",Object(x.jsx)("img",{alt:"",src:I.default})," Arbitrum"]}),Object(x.jsx)("div",{children:Object(x.jsx)(S.a,{checked:u,className:"l-checkbox",onChange:e=>{f(e)}})})]}),Object(x.jsxs)("div",{className:"type-cols",children:[Object(x.jsxs)("div",{className:"type-title",children:[Object(x.jsx)("img",{alt:"",src:F.default})," Polygon"]}),Object(x.jsx)("div",{children:Object(x.jsx)(S.a,{checked:l,className:"l-checkbox",onChange:e=>{p(e)}})})]})]}),"deri"===s&&Object(x.jsxs)("div",{className:"type-cols",children:[Object(x.jsxs)("div",{className:"type-title",children:[Object(x.jsx)("img",{alt:"",src:T.default})," Ethereum"]}),Object(x.jsx)("div",{children:Object(x.jsx)(S.a,{checked:r,className:"l-checkbox",onChange:e=>{k(e)}})})]})]})}),Object(x.jsx)("div",{className:"select-footer",children:Object(x.jsx)("div",{className:"clear-all-filter",onClick:()=>{g()},children:t["clear-all-filter"]})})]})}var B=c.p+"static/media/filter.057de510.svg",D=(c(1662),c(29));c(1663);t.default=Object(o.b)("wallet","poolManager")(Object(o.c)((function(e){var t=e.lang,c=e.getLang,s=e.wallet,o=void 0===s?{}:s,d=e.poolManager,j=Object(r.useState)("amm"),b=Object(i.a)(j,2),m=b[0],v=b[1],f=Object(r.useState)(!1),k=Object(i.a)(f,2),g=k[0],N=k[1],E=Object(r.useState)(t["deri-pool-title"]),P=Object(i.a)(E,2),A=P[0],L=P[1],z=Object(r.useState)([]),X=Object(i.a)(z,2),q=X[0],H=X[1],U=Object(r.useState)(!1),M=Object(i.a)(U,2),V=M[0],R=M[1],W=Object(r.useState)(!1),Z=Object(i.a)(W,2),J=Z[0],G=Z[1],K=Object(r.useState)(!1),Y=Object(i.a)(K,2),Q=Y[0],ee=Y[1],te=Object(r.useState)(!1),ce=Object(i.a)(te,2),ae=ce[0],ne=ce[1],ie=Object(r.useState)(!1),se=Object(i.a)(ie,2),le=se[0],re=se[1],oe=Object(r.useState)(!1),de=Object(i.a)(oe,2),je=de[0],be=de[1],ue=Object(r.useState)(!1),he=Object(i.a)(ue,2),me=he[0],ve=he[1],xe=Object(r.useState)(!1),pe=Object(i.a)(xe,2),Oe=pe[0],fe=pe[1],ke=Object(r.useState)(!1),ge=Object(i.a)(ke,2),Ne=ge[0],we=ge[1],ye=Object(r.useState)([]),Se=Object(i.a)(ye,2),Ce=Se[0],Fe=Se[1],Ie=Object(r.useState)([]),Te=Object(i.a)(Ie,2),_e=Te[0],Ee=Te[1],$e=Object(r.useState)(!1),Be=Object(i.a)($e,2),De=(Be[0],Be[1]),Pe=[{text:t["deri-pool-title"],index:"official"},{text:t["open-pool-title"],index:"open"}],Ae=function(e){"official"===e?(H(d.ammPools),N(!1)):"open"===e&&(H([]),Xe(),N(!0))},Le=function(){var e=Object(n.a)(l.a.mark((function e(){var t,c,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[].concat(Object(a.a)(d.ammPools),Object(a.a)(d.lpPools)),e.next=3,Promise.all(t.map(function(){var e=Object(n.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[t.chainId,t.address,o.detail.account],e.next=3,u.a.request("getUserStakeInfo",c);case 3:if(!e.sent.isStaked){e.next=8;break}return e.abrupt("return",t);case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 3:c=(c=e.sent).filter((function(e){return e})),i=c.filter((function(e){return"lp"!==e.type})),s=c.filter((function(e){return"lp"===e.type})),Fe(i),Ee(s);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ze=function(){R(!1),ee(!1),ne(!1),ve(!1),re(!1),fe(!1)};Object(r.useEffect)((function(){o.isConnected()&&Le()}),[o.detail,d,m]),Object(r.useEffect)((function(){var e=[],t="amm"===m?d.ammPools:d.lpPools;if(V){var c=t.filter((function(e){return"option"===e.type}));e=[].concat(Object(a.a)(e),Object(a.a)(c))}if(Q){var n=t.filter((function(e){return("v2"===e.version||"v3"===e.version)&&"option"!==e.type}));e=[].concat(Object(a.a)(e),Object(a.a)(n))}if(ae){var i=t.filter((function(e){return"v2_lite"===e.version||"v3_lite"===e.version}));e=[].concat(Object(a.a)(e),Object(a.a)(i))}if(le){if(e=[],V){var s=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&"option"===e.type}));e=[].concat(Object(a.a)(e),Object(a.a)(s))}if(Q){var l=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&("v2"===e.version||"v3"===e.version)&&"option"!==e.type}));e=[].concat(Object(a.a)(e),Object(a.a)(l))}if(ae){var r=t.filter((function(e){return(56===+e.chainId||97===+e.chainId)&&("v2_lite"===e.version||"v3_lite"===e.version)}));e=[].concat(Object(a.a)(e),Object(a.a)(r))}if(!V&&!Q&&!ae){var o=t.filter((function(e){return 56===+e.chainId||97===+e.chainId}));e=[].concat(Object(a.a)(e),Object(a.a)(o))}}if(je){if(e=[],V){var j=t.filter((function(e){return(42161===+e.chainId||421611===+e.chainId)&&"option"===e.type}));e=[].concat(Object(a.a)(e),Object(a.a)(j))}if(Q){var b=t.filter((function(e){return(42161===+e.chainId||421611===+e.chainId)&&"v3"===e.version&&"option"!==e.type}));e=[].concat(Object(a.a)(e),Object(a.a)(b))}if(ae){var u=t.filter((function(e){return(42161===+e.chainId||421611===+e.chainId)&&("v2_lite"===e.version||"v3_lite"===e.version)}));e=[].concat(Object(a.a)(e),Object(a.a)(u))}if(!V&&!Q&&!ae){var h=t.filter((function(e){return 42161===+e.chainId||421611===+e.chainId}));e=[].concat(Object(a.a)(e),Object(a.a)(h))}}if(me){if(e=[],V){var v=t.filter((function(e){return 137===+e.chainId&&"option"===e.type}));e=[].concat(Object(a.a)(e),Object(a.a)(v))}if(Q){var x=t.filter((function(e){return 137===+e.chainId&&("v2"===e.version||"v3"===e.version)&&"option"!==e.type}));e=[].concat(Object(a.a)(e),Object(a.a)(x))}if(ae){var p=t.filter((function(e){return 137===+e.chainId&&("v2_lite"===e.version||"v3_lite"===e.version)}));e=[].concat(Object(a.a)(e),Object(a.a)(p))}if(!V&&!Q&&!ae){var O=t.filter((function(e){return 137===+e.chainId}));e=[].concat(Object(a.a)(e),Object(a.a)(O))}}if(le&&me&&je){e=[];var f=t.filter((function(e){return 137===+e.chainId||56===+e.chainId||4261===+e.chainId}));e=[].concat(Object(a.a)(e),Object(a.a)(f))}if(Oe){var k=t.filter((function(e){return 1===+e.chainId}));e=[].concat(Object(a.a)(e),Object(a.a)(k))}V||Q||ae||le||me||Oe||je||(e=t),H(e)}),[V,Q,ae,le,me,Oe,je]);var Xe=function(){var e=Object(n.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.loadOpen();case 2:H(d.openPools);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){L(g?t["open-pool-title"]:t["deri-pool-title"])}),[g]),Object(r.useEffect)((function(){d.load()}),[]),Object(r.useEffect)((function(){"amm"===m?g||(H([]),H(Ne?Ce:d.ammPools)):"deri"===m&&(H([]),H(Ne?_e:d.lpPools))}),[m,Ne]),Object(r.useEffect)((function(){H(d.ammPools)}),[d.pools]),Object(r.useEffect)((function(){o.isConnected()&&("true"===Object(h.m)("poolClaim")?De(!1):q&&De(!0))}),[o,q,o.detail]),Object(x.jsx)("div",{className:"pool-box",children:Object(x.jsxs)("div",{className:"pool-info",children:[Object(x.jsxs)("div",{className:"left",children:[Object(x.jsx)("div",{className:"left-header-info",children:Object(x.jsxs)("div",{className:"pool-title",children:[Object(x.jsx)("div",{className:"pool-title-text",children:A}),Object(x.jsx)("div",{className:"pool-title-select-text",children:!g&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"pool-test-des",children:t["pool-title-des"]})})}),Object(x.jsx)("div",{className:"select-pool-ves",children:Object(x.jsx)(w,{selectList:Pe,onChange:Ae})}),Object(x.jsx)("div",{className:"simple-select-ves",children:Object(x.jsx)("img",{alt:"",src:O.default})})]})}),Object(x.jsxs)("div",{className:"pool-card-claim-bg",children:[!g&&Object(x.jsx)("div",{className:"pool-tab",children:Object(x.jsxs)("div",{className:"pool-tab-info",children:[Object(x.jsxs)("div",{className:"tab-mining",children:[Object(x.jsx)("div",{className:"amm"===m?"pool-active":"pool-unactive",onClick:function(){v("amm")},children:t["amm-liquidity-mining"]}),Object(x.jsx)("div",{className:"deri"===m?"pool-active":"pool-unactive",onClick:function(){v("deri")},children:t["deri-liquidity-mining"]})]}),Object(x.jsxs)("div",{className:"simple-tab-mining",children:[Object(x.jsx)("div",{className:"amm"===m?"pool-active":"pool-unactive",onClick:function(){v("amm")},children:t.amm}),Object(x.jsx)("div",{className:"deri"===m?"pool-active":"pool-unactive",onClick:function(){v("deri")},children:t["type-deri"]})]}),Object(x.jsxs)("div",{className:"filter",children:[Object(x.jsx)("img",{alt:"",src:B,className:"filter-img",onClick:function(){G(!J)}}),J&&Object(x.jsx)($,{curTabPool:m,lang:t,isShowFilter:J,checkedStaked:Ne,setCheckedStaked:we,setIsShowFilter:G,setCheckedOption:R,setCheckedFutureMain:ee,setCheckedFutureInno:ne,setCheckedPolygon:ve,setCheckedBSC:re,setCheckedArb:be,setCheckedETH:fe,clearFilter:ze,checkedPolygon:me,checkedETH:Oe,checkedOption:V,checkedFutureMain:Q,checkedFutureInno:ae,checkedBSC:le,checkedArb:je})]})]})}),Object(x.jsx)("div",{className:"pool-card",children:q.map((function(e,c){return Object(x.jsx)(_.a,{wallet:o,lang:t,pool:e},c)}))}),!g&&Object(x.jsx)(p,{lang:t,wallet:o,getLang:c}),Object(x.jsx)("div",{className:!0})]})]}),Object(x.jsx)("div",{className:"right",children:Object(x.jsxs)("div",{className:"right-info",children:[Object(x.jsxs)("div",{className:"select-pool-ves-staked",children:[Object(x.jsx)("div",{className:"select-pool-ves",children:Object(x.jsx)(w,{selectList:Pe,onChange:Ae})}),!g&&Object(x.jsxs)("div",{className:"staked-only",children:[Object(x.jsx)("div",{className:"staked-only-text",children:t["staked-only"]}),Object(x.jsx)("div",{children:Object(x.jsx)(y.a,{className:"l-toggle",checked:Ne,onClick:function(e){we(e)}})})]})]}),!g&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"select-pool-type-network",children:Object(x.jsxs)("div",{className:"network",children:[Object(x.jsx)("div",{className:"type-cols",children:t.network}),Object(x.jsxs)("div",{className:"type-cols",children:[Object(x.jsxs)("div",{className:"type-title",children:[" ",Object(x.jsx)("img",{alt:"",src:C.default})," BNB Chain"]}),Object(x.jsx)("div",{children:Object(x.jsx)(S.a,{checked:le,className:"l-checkbox",onChange:function(e){re(e)}})})]}),"deri"!==m&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"type-cols",children:[Object(x.jsxs)("div",{className:"type-title",children:[" ",Object(x.jsx)("img",{alt:"",src:I.default})," Arbitrum"]}),Object(x.jsx)("div",{children:Object(x.jsx)(S.a,{checked:je,className:"l-checkbox",onChange:function(e){be(e)}})})]}),Object(x.jsxs)("div",{className:"type-cols",children:[Object(x.jsxs)("div",{className:"type-title",children:[" ",Object(x.jsx)("img",{alt:"",src:F.default})," Polygon"]}),Object(x.jsx)("div",{children:Object(x.jsx)(S.a,{checked:me,className:"l-checkbox",onChange:function(e){ve(e)}})})]})]}),"deri"===m&&Object(x.jsxs)("div",{className:"type-cols",children:[Object(x.jsxs)("div",{className:"type-title",children:[Object(x.jsx)("img",{alt:"",src:T.default})," Ethereum"]}),Object(x.jsx)("div",{children:Object(x.jsx)(S.a,{checked:Oe,className:"l-checkbox",onChange:function(e){fe(e)}})})]})]})}),Object(x.jsxs)("div",{className:"select-footer",children:[Object(x.jsx)("div",{className:"clear-all-filter",onClick:ze,children:t["clear-all-filter"]}),Object(x.jsx)("div",{className:"deri-logo",children:Object(x.jsx)(D.a,{token:"pool-deri-logo",width:"72",height:"84"})})]})]})]})})]})})})))}}]);
//# sourceMappingURL=19.c068c73b.chunk.js.map