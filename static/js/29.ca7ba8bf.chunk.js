(this["webpackJsonpapp.deri.finance"]=this["webpackJsonpapp.deri.finance"]||[]).push([[29],{711:function(e,i,n){},712:function(e,i,n){},741:function(e,i,n){"use strict";n.r(i);var a=n(50),s=n(55),t=n(2),c=n(20),d=n(653),l=(n(655),n(15)),o=n(104),b=n(605),r=n.n(b),j=n(44),u=n(618),h=(n(711),n(712),n(16)),p=o[l.a.get()].chainInfo;i.default=Object(j.b)("wallet")(Object(j.c)((function(e){var i=e.wallet,n=e.lang,l=Object(t.useState)("liquidity"),o=Object(s.a)(l,2),b=o[0],j=o[1],m=Object(c.useParams)(),O=m.version,f=m.chainId,v=m.baseToken,k=m.address,y=m.type,I=Object(u.a)(),g=p[f].name,x={version:O,chainId:f,baseToken:v,address:k,wallet:i,type:y,lang:n},w=r()("mining-info",b);return I.has("baseTokenId")&&(x.baseTokenId=I.get("baseTokenId")),I.has("symbolId")&&(x.symbolId=I.get("symbolId")),Object(h.jsxs)("div",{className:w,children:[Object(h.jsxs)("div",{className:"pool-header",children:[Object(h.jsxs)("div",{className:"pool-network",children:[v," @ ",g]}),"v2_lite_open"!==O&&Object(h.jsx)("div",{className:"check-trade-liquidity",children:Object(h.jsx)("div",{className:"liquidity-mining",onClick:function(){return j("liquidity")},children:n["liquidity-mining"]})})]}),Object(h.jsx)("div",{className:"pool-info",children:Object(h.jsx)(d.a,Object(a.a)({},x))})]})})))}}]);
//# sourceMappingURL=29.ca7ba8bf.chunk.js.map