(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={item:"Statistics_item__2EphE"}},,,function(e,t,n){e.exports={button:"Feedback_button__2ftjM"}},function(e,t,n){e.exports={section:"Section_section__2ElgN",title:"Section_title__3mEHa"}},,function(e,t,n){e.exports={list:"FeedbackOptions_list__GLZv5"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),i=n.n(s),o=(n(13),n(3)),r=n(5),l=n.n(r),u=n(0);function b(e){var t=e.option,n=e.onLeaveFeedback;return Object(u.jsx)("li",{className:l.a.butList,children:Object(u.jsx)("button",{className:l.a.button,type:"button","data-value":t,onClick:n,children:t})},t)}var j=n(8),d=n.n(j);function h(e){var t=e.options,n=e.onLeaveFeedback;return Object(u.jsx)("ul",{className:d.a.list,children:t.map((function(e){return Object(u.jsx)(b,{option:e,onLeaveFeedback:n},e)}))})}var O=n(6),f=n.n(O);function m(e){var t=e.title,n=e.children;return Object(u.jsxs)("section",{className:f.a.section,children:[Object(u.jsx)("h1",{className:f.a.title,children:t}),n]})}function x(e){var t=e.message;return Object(u.jsx)("p",{children:t})}m.defaultProps={title:"",children:[]},x.defaultProps={message:""};var v=n(2),p=n.n(v);function g(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,s=e.positivePercentage;return Object(u.jsx)(u.Fragment,{children:c?Object(u.jsxs)("ul",{className:p.a.list,children:[Object(u.jsxs)("li",{className:p.a.item,children:["Good: ",t]}),Object(u.jsxs)("li",{className:p.a.item,children:["Neutral: ",n]}),Object(u.jsxs)("li",{className:p.a.item,children:["Bad: ",a]}),Object(u.jsxs)("li",{className:p.a.item,children:["Total: ",c]}),Object(u.jsxs)("li",{className:p.a.item,children:["Positive feedback: ",s,"%"]})]}):Object(u.jsx)(x,{message:"No feedback given"})})}function k(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),i=Object(o.a)(s,2),r=i[0],l=i[1],b=Object(a.useState)(0),j=Object(o.a)(b,2),d=j[0],O=j[1],f=function(){return n+r+d};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{title:"Please leave feedback",children:Object(u.jsx)(h,{options:["good","neutral","bad"],onLeaveFeedback:function(e){var t=e.target.dataset.value;"good"===t&&c((function(e){return e+1})),"neutral"===t&&l((function(e){return e+1})),"bad"===t&&O((function(e){return e+1}))}})}),Object(u.jsx)(m,{title:"Statistics",children:Object(u.jsx)(g,{good:n,neutral:r,bad:d,total:f(),positivePercentage:function(){var e=f();return e?Math.round(n/e*100):0}()})})]})}i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.69069da3.chunk.js.map