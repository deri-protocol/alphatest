(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[33],{2430:function(e,s,t){},2650:function(e,s,t){"use strict";t.r(s),t.d(s,"default",(function(){return u}));var i=t(2),c=t(10),a=t(0),n=t.n(a),d=t(8),l=t.p+"static/media/down.02e6e6af.svg",r=t.p+"static/media/go.10e047e2.svg",j=t.p+"static/media/check.c0590456.svg",o=t.p+"static/media/governance-discussion.4eb7efd0.svg",b=t(48),v=t.p+"static/media/pool-votes.073d8535.svg",p=t.p+"static/media/executive-votes.50e7bf55.svg",x=(t(2430),t(102)),h=t(97),O=t.n(h),m=t(22),N=t(3);function u(e){var s=e.lang,t=e.getLang,a=Object(d.useState)(!0),h=Object(c.a)(a,2),u=h[0],g=h[1],f=Object(d.useState)(!0),w=Object(c.a)(f,2),E=w[0],S=w[1],k=Object(d.useState)(0),I=Object(c.a)(k,2),C=I[0],T=I[1],D=Object(d.useState)(0),V=Object(c.a)(D,2),F=V[0],M=V[1],U=Object(d.useState)(),y=Object(c.a)(U,2),H=(y[0],y[1],Object(d.useState)("")),R=Object(c.a)(H,2),_=R[0],A=R[1],J=function(e){if(e){var s=document.getElementById(e);s&&s.scrollIntoView()}},B=function(){var e=Object(i.a)(n.a.mark((function e(){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.request("getProposals",[]);case 2:(s=e.sent)&&A(s.count);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(i.a)(n.a.mark((function e(){var s,t,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://vote.deri.io/get_voting_powers");case 2:s=e.sent,s=(s=JSON.parse(s.data[0].votes)).map((function(e){return Object(m.a)(e).div(Math.pow(10,18)).toNumber()})),t=+s[0]+ +s[1],i=+s[0]>+s[1]?"YES":"NO",M(i),T(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){B(),X()}),[]),Object(N.jsx)("div",{className:"governance-box",children:Object(N.jsxs)("div",{className:"governance-box-info",children:[Object(N.jsx)("div",{className:"governance-title",children:s.title}),Object(N.jsx)("div",{className:"governance-des",children:s["governance-des"]}),Object(N.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://discord.gg/kb8ZbYgp8M",children:Object(N.jsxs)("div",{className:"active-pool-votes-num",children:[Object(N.jsx)("div",{className:_?"active-num":"no-active-num",children:_})," ",s["active-pool-votes"]]})}),Object(N.jsxs)("div",{className:"active-esectutive-votes-num",onClick:function(){J("EXECUTIVEVOTES")},children:[Object(N.jsx)("div",{className:"active-num",children:"1"}),s["active-esectutive-votes"]]}),Object(N.jsx)("div",{className:"down",children:Object(N.jsx)("img",{src:l,alt:"down"})}),Object(N.jsx)("div",{className:"how-to-participate",children:s["how-to-participate"]}),Object(N.jsxs)("div",{className:"participate-step",children:[Object(N.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://discord.gg/kb8ZbYgp8M",children:Object(N.jsxs)("div",{className:"step",children:[Object(N.jsxs)("div",{className:"step-one-info",children:[Object(N.jsx)("div",{className:"hover-go",children:Object(N.jsx)("img",{src:r,alt:"go"})}),Object(N.jsx)("div",{className:"step-logo",children:Object(N.jsx)("img",{src:o,alt:"discussion"})}),Object(N.jsx)("div",{className:"step-text",children:s["governance-discussion"]})]}),Object(N.jsxs)("div",{className:"hover",children:[Object(N.jsx)("div",{className:"san"}),s["governance-discussion-hover"]]})]})}),Object(N.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://snapshot.org/#/deri.eth",children:Object(N.jsxs)("div",{className:"step",children:[Object(N.jsxs)("div",{className:"step-one-info",children:[Object(N.jsx)("div",{className:"hover-go",children:Object(N.jsx)("img",{src:r,alt:"go"})}),Object(N.jsx)("div",{className:"step-logo",children:Object(N.jsx)("img",{src:v,alt:"discussion"})}),Object(N.jsx)("div",{className:"step-text",children:s["poll-votes"]})]}),Object(N.jsxs)("div",{className:"hover",children:[Object(N.jsx)("div",{className:"san"}),s["poll-votes-hover"]]})]})}),Object(N.jsxs)("div",{className:"step",onClick:function(){J("EXECUTIVEVOTES")},children:[Object(N.jsxs)("div",{className:"step-one-info",children:[Object(N.jsx)("div",{className:"hover-go"}),Object(N.jsx)("div",{className:"step-logo",children:Object(N.jsx)("img",{src:p,alt:"discussion"})}),Object(N.jsx)("div",{className:"step-text",children:s["executive-votes"]})]}),Object(N.jsxs)("div",{className:"hover",children:[Object(N.jsx)("div",{className:"san"}),s["executive-votes-hover"]]})]})]}),Object(N.jsx)("div",{id:"EXECUTIVEVOTES",className:"executive-votes",children:s["executive-votes-l"]}),Object(N.jsxs)("div",{className:"dip-list",children:[Object(N.jsxs)("div",{className:"in-progress-executed",children:[Object(N.jsxs)("div",{className:u?"in-progress check":"in-progress",onClick:function(){return g(!u)},children:[s["in-progress"],u?Object(N.jsx)("img",{src:j,alt:""}):""]}),Object(N.jsxs)("div",{className:E?"executed check":"executed",onClick:function(){return S(!E)},children:["FINISHED",E?Object(N.jsx)("img",{src:j,alt:""}):""]})]}),Object(N.jsxs)("div",{className:"dip-list-box",children:[u&&Object(N.jsx)(x.b,{to:"/dipfive",children:Object(N.jsxs)("div",{className:"dip-list-box-info",children:[Object(N.jsxs)("div",{className:"dip-list-title",children:[Object(N.jsxs)("div",{className:"title-text",children:[s.dip,"-005"]}),Object(N.jsxs)("div",{className:"dip-progress",children:[Object(N.jsx)("div",{className:"progress-bg"}),"  IN PROGRESS"]})]}),Object(N.jsx)("div",{className:"dip-list-des",children:"Update transaction fee allocation and introduce a brokerage system to grow the Deri community"}),Object(N.jsx)("div",{className:"leading-option",children:Object(N.jsxs)("span",{children:[s["leading-option"]," ",Object(N.jsx)("span",{className:"winner-option",children:F}),t("dip-leading-option",{value:"".concat(C.toFixed(0))})]})}),Object(N.jsx)("div",{className:"dip-time",children:"2023 Apr 21st 10:00:00AM UTC"})]})}),E&&Object(N.jsx)(x.b,{to:"/dipfour",children:Object(N.jsxs)("div",{className:"dip-list-box-info",children:[Object(N.jsxs)("div",{className:"dip-list-title",children:[Object(N.jsxs)("div",{className:"title-text",children:[s.dip,"-004"]}),Object(N.jsxs)("div",{className:"dip-progress",children:[Object(N.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(N.jsx)("div",{className:"dip-list-des",children:"Revote for changing the DERI burning mechanism"}),Object(N.jsx)("div",{className:"leading-option",children:Object(N.jsxs)("span",{children:[s["leading-option"]," ",Object(N.jsx)("span",{className:"winner-option",children:"Burn to deadlock address"}),t("dip-leading-option",{value:2997820})]})}),Object(N.jsx)("div",{className:"dip-time",children:"2022 Sat. 4th June 4:00 AM UTC"})]})}),E&&Object(N.jsx)(x.b,{to:"/dipthree",children:Object(N.jsxs)("div",{className:"dip-list-box-info",children:[Object(N.jsxs)("div",{className:"dip-list-title",children:[Object(N.jsxs)("div",{className:"title-text",children:[s.dip,"-003"]}),Object(N.jsxs)("div",{className:"dip-progress",children:[Object(N.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(N.jsx)("div",{className:"dip-list-des",children:"Vote for changing the DERI burning mechanism"}),Object(N.jsx)("div",{className:"leading-option",children:Object(N.jsxs)("span",{children:[s["leading-option"]," ",Object(N.jsx)("span",{className:"winner-option",children:"Burn to mining vault (the status quo)"}),t("dip-leading-option",{value:1454640})]})}),Object(N.jsx)("div",{className:"dip-time",children:"2022 Sat. 28th May 4:00 AM UTC"})]})}),E&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(x.b,{to:"/diptwo",children:Object(N.jsxs)("div",{className:"dip-list-box-info",children:[Object(N.jsxs)("div",{className:"dip-list-title",children:[Object(N.jsxs)("div",{className:"title-text",children:[s.dip,"-002"]}),Object(N.jsxs)("div",{className:"dip-executed",children:[Object(N.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(N.jsx)("div",{className:"dip-list-des",children:s["dip-two-des"]}),Object(N.jsx)("div",{className:"leading-option",children:Object(N.jsxs)("span",{children:[s["leading-option"]," ",Object(N.jsx)("span",{className:"winner-option",children:s["dip-two-winner"]}),t("dip-leading-option",{value:"1,440,582 "})]})}),Object(N.jsx)("div",{className:"dip-time",children:s["dip-two-time"]})]})}),Object(N.jsx)(x.b,{to:"/dipone",children:Object(N.jsxs)("div",{className:"dip-list-box-info",children:[Object(N.jsxs)("div",{className:"dip-list-title",children:[Object(N.jsxs)("div",{className:"title-text",children:[s.dip,"-001"]}),Object(N.jsxs)("div",{className:"dip-executed",children:[Object(N.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(N.jsx)("div",{className:"dip-list-des",children:s["dip-one-des"]}),Object(N.jsx)("div",{className:"leading-option",children:Object(N.jsxs)("span",{children:[s["leading-option"],Object(N.jsx)("span",{className:"winner-option",children:s["dip-one-winner"]}),t("dip-leading-option",{value:"334,253"})]})}),Object(N.jsx)("div",{className:"dip-time",children:s["dip-one-time"]})]})})]})]})]})]})})}}}]);
//# sourceMappingURL=33.6dc85639.chunk.js.map