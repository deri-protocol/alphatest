(this["webpackJsonpderi-client"]=this["webpackJsonpderi-client"]||[]).push([[40],{2373:function(e,s,t){},2590:function(e,s,t){"use strict";t.r(s),t.d(s,"default",(function(){return O}));var i=t(2),c=t(12),n=t(0),a=t.n(n),d=t(9),l=t.p+"static/media/down.02e6e6af.svg",r=t.p+"static/media/go.10e047e2.svg",j=t.p+"static/media/check.c0590456.svg",o=t.p+"static/media/governance-discussion.4eb7efd0.svg",b=t(57),v=t.p+"static/media/pool-votes.073d8535.svg",p=t.p+"static/media/executive-votes.50e7bf55.svg",x=(t(2373),t(115)),h=t(6);function O(e){var s=e.lang,t=e.getLang,n=Object(d.useState)(!0),O=Object(c.a)(n,2),m=O[0],u=O[1],g=Object(d.useState)(!0),N=Object(c.a)(g,2),f=N[0],w=N[1],E=Object(d.useState)(0),k=Object(c.a)(E,2),I=(k[0],k[1]),S=Object(d.useState)(0),_=Object(c.a)(S,2),V=(_[0],_[1]),C=Object(d.useState)(),T=Object(c.a)(C,2),D=(T[0],T[1]),F=Object(d.useState)(""),H=Object(c.a)(F,2),M=H[0],R=H[1],U=function(e){if(e){var s=document.getElementById(e);s&&s.scrollIntoView()}},y=function(){var e=Object(i.a)(a.a.mark((function e(){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.request("getProposals",[]);case 2:(s=e.sent)&&R(s.count);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(i.a)(a.a.mark((function e(){var s,t,i,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.request("getVotingResult");case 2:s=e.sent,t=+s.option_1+ +s.option_2,console.log("getVotingResult",s),i=+s.option_1>+s.option_2?s.option_1:s.option_2,c=+s.option_1>+s.option_2?"1":"2",I(t),D(c),V(i);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){y(),q()}),[]),Object(h.jsx)("div",{className:"governance-box",children:Object(h.jsxs)("div",{className:"governance-box-info",children:[Object(h.jsx)("div",{className:"governance-title",children:s.title}),Object(h.jsx)("div",{className:"governance-des",children:s["governance-des"]}),Object(h.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://discord.gg/kb8ZbYgp8M",children:Object(h.jsxs)("div",{className:"active-pool-votes-num",children:[Object(h.jsx)("div",{className:M?"active-num":"no-active-num",children:M})," ",s["active-pool-votes"]]})}),Object(h.jsxs)("div",{className:"active-esectutive-votes-num",onClick:function(){U("EXECUTIVEVOTES")},children:[Object(h.jsx)("div",{className:"no-active-num",children:"0"}),s["active-esectutive-votes"]]}),Object(h.jsx)("div",{className:"down",children:Object(h.jsx)("img",{src:l,alt:"down"})}),Object(h.jsx)("div",{className:"how-to-participate",children:s["how-to-participate"]}),Object(h.jsxs)("div",{className:"participate-step",children:[Object(h.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://discord.gg/kb8ZbYgp8M",children:Object(h.jsxs)("div",{className:"step",children:[Object(h.jsxs)("div",{className:"step-one-info",children:[Object(h.jsx)("div",{className:"hover-go",children:Object(h.jsx)("img",{src:r,alt:"go"})}),Object(h.jsx)("div",{className:"step-logo",children:Object(h.jsx)("img",{src:o,alt:"discussion"})}),Object(h.jsx)("div",{className:"step-text",children:s["governance-discussion"]})]}),Object(h.jsxs)("div",{className:"hover",children:[Object(h.jsx)("div",{className:"san"}),s["governance-discussion-hover"]]})]})}),Object(h.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://snapshot.org/#/deri.eth",children:Object(h.jsxs)("div",{className:"step",children:[Object(h.jsxs)("div",{className:"step-one-info",children:[Object(h.jsx)("div",{className:"hover-go",children:Object(h.jsx)("img",{src:r,alt:"go"})}),Object(h.jsx)("div",{className:"step-logo",children:Object(h.jsx)("img",{src:v,alt:"discussion"})}),Object(h.jsx)("div",{className:"step-text",children:s["poll-votes"]})]}),Object(h.jsxs)("div",{className:"hover",children:[Object(h.jsx)("div",{className:"san"}),s["poll-votes-hover"]]})]})}),Object(h.jsxs)("div",{className:"step",onClick:function(){U("EXECUTIVEVOTES")},children:[Object(h.jsxs)("div",{className:"step-one-info",children:[Object(h.jsx)("div",{className:"hover-go"}),Object(h.jsx)("div",{className:"step-logo",children:Object(h.jsx)("img",{src:p,alt:"discussion"})}),Object(h.jsx)("div",{className:"step-text",children:s["executive-votes"]})]}),Object(h.jsxs)("div",{className:"hover",children:[Object(h.jsx)("div",{className:"san"}),s["executive-votes-hover"]]})]})]}),Object(h.jsx)("div",{id:"EXECUTIVEVOTES",className:"executive-votes",children:s["executive-votes-l"]}),Object(h.jsxs)("div",{className:"dip-list",children:[Object(h.jsxs)("div",{className:"in-progress-executed",children:[Object(h.jsxs)("div",{className:m?"in-progress check":"in-progress",onClick:function(){return u(!m)},children:[s["in-progress"],m?Object(h.jsx)("img",{src:j,alt:""}):""]}),Object(h.jsxs)("div",{className:f?"executed check":"executed",onClick:function(){return w(!f)},children:["FINISHED",f?Object(h.jsx)("img",{src:j,alt:""}):""]})]}),Object(h.jsxs)("div",{className:"dip-list-box",children:[f&&Object(h.jsx)(x.b,{to:"/dipfour",children:Object(h.jsxs)("div",{className:"dip-list-box-info",children:[Object(h.jsxs)("div",{className:"dip-list-title",children:[Object(h.jsxs)("div",{className:"title-text",children:[s.dip,"-004"]}),Object(h.jsxs)("div",{className:"dip-progress",children:[Object(h.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(h.jsx)("div",{className:"dip-list-des",children:"Revote for changing the DERI burning mechanism"}),Object(h.jsx)("div",{className:"leading-option",children:Object(h.jsxs)("span",{children:[s["leading-option"],Object(h.jsx)("span",{className:"winner-option",children:"Burn to deadlock address"}),t("dip-leading-option",{value:2997820})]})}),Object(h.jsx)("div",{className:"dip-time",children:"2022 Sat. 4th June 4:00 AM UTC"})]})}),f&&Object(h.jsx)(x.b,{to:"/dipthree",children:Object(h.jsxs)("div",{className:"dip-list-box-info",children:[Object(h.jsxs)("div",{className:"dip-list-title",children:[Object(h.jsxs)("div",{className:"title-text",children:[s.dip,"-003"]}),Object(h.jsxs)("div",{className:"dip-progress",children:[Object(h.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(h.jsx)("div",{className:"dip-list-des",children:"Vote for changing the DERI burning mechanism"}),Object(h.jsx)("div",{className:"leading-option",children:Object(h.jsxs)("span",{children:[s["leading-option"],Object(h.jsx)("span",{className:"winner-option",children:"Burn to mining vault (the status quo)"}),t("dip-leading-option",{value:1454640})]})}),Object(h.jsx)("div",{className:"dip-time",children:"2022 Sat. 28th May 4:00 AM UTC"})]})}),f&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x.b,{to:"/diptwo",children:Object(h.jsxs)("div",{className:"dip-list-box-info",children:[Object(h.jsxs)("div",{className:"dip-list-title",children:[Object(h.jsxs)("div",{className:"title-text",children:[s.dip,"-002"]}),Object(h.jsxs)("div",{className:"dip-executed",children:[Object(h.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(h.jsx)("div",{className:"dip-list-des",children:s["dip-two-des"]}),Object(h.jsx)("div",{className:"leading-option",children:Object(h.jsxs)("span",{children:[s["leading-option"],Object(h.jsx)("span",{className:"winner-option",children:s["dip-two-winner"]}),t("dip-leading-option",{value:"1,440,582 "})]})}),Object(h.jsx)("div",{className:"dip-time",children:s["dip-two-time"]})]})}),Object(h.jsx)(x.b,{to:"/dipone",children:Object(h.jsxs)("div",{className:"dip-list-box-info",children:[Object(h.jsxs)("div",{className:"dip-list-title",children:[Object(h.jsxs)("div",{className:"title-text",children:[s.dip,"-001"]}),Object(h.jsxs)("div",{className:"dip-executed",children:[Object(h.jsx)("div",{className:"executed-bg"}),"  FINISHED"]})]}),Object(h.jsx)("div",{className:"dip-list-des",children:s["dip-one-des"]}),Object(h.jsx)("div",{className:"leading-option",children:Object(h.jsxs)("span",{children:[s["leading-option"],Object(h.jsx)("span",{className:"winner-option",children:s["dip-one-winner"]}),t("dip-leading-option",{value:"334,253"})]})}),Object(h.jsx)("div",{className:"dip-time",children:s["dip-one-time"]})]})})]})]})]})]})})}}}]);
//# sourceMappingURL=40.efb91b45.chunk.js.map