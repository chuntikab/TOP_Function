import{S as h,i as _,s as w,B as S,U as c,c as C,m as F,P as G,t as v,a as z,d as A,F as H,ad as L}from"./Layout.js";import{B}from"./BaseDropdown.js";function O(i){let n,o,t;function u(e){i[9](e)}let f={showAll:i[1],labelKey:"name",label:i[6],isHorizontal:i[2],getOptions:i[7],isForm:i[3],disabled:i[4],onChange:i[5]};return i[0]!==void 0&&(f.value=i[0]),n=new B({props:f}),S.push(()=>c(n,"value",u)),{c(){C(n.$$.fragment)},m(e,s){F(n,e,s),t=!0},p(e,[s]){const l={};s&2&&(l.showAll=e[1]),s&4&&(l.isHorizontal=e[2]),s&8&&(l.isForm=e[3]),s&16&&(l.disabled=e[4]),s&32&&(l.onChange=e[5]),!o&&s&1&&(o=!0,l.value=e[0],G(()=>o=!1)),n.$set(l)},i(e){t||(v(n.$$.fragment,e),t=!0)},o(e){z(n.$$.fragment,e),t=!1},d(e){A(n,e)}}}function k(i,n,o){let{showAll:t=!0}=n,{isShowSingleLabel:u=!0}=n,{isHorizontal:f=!1}=n,{value:e={}}=n,{isForm:s=!1}=n,{disabled:l=!1}=n,{onChange:r=void 0}=n;const m=u?"Gift Status":{th:"\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E02\u0E2D\u0E07\u0E02\u0E27\u0E31\u0E0D",en:"Gift Status"};function b(){const a=Object.keys(H.GiftStatus).map(d=>({id:d,name:L[d]}));return Promise.resolve(a)}function g(a){e=a,o(0,e)}return i.$$set=a=>{"showAll"in a&&o(1,t=a.showAll),"isShowSingleLabel"in a&&o(8,u=a.isShowSingleLabel),"isHorizontal"in a&&o(2,f=a.isHorizontal),"value"in a&&o(0,e=a.value),"isForm"in a&&o(3,s=a.isForm),"disabled"in a&&o(4,l=a.disabled),"onChange"in a&&o(5,r=a.onChange)},[e,t,f,s,l,r,m,b,u,g]}class j extends h{constructor(n){super(),_(this,n,k,O,w,{showAll:1,isShowSingleLabel:8,isHorizontal:2,value:0,isForm:3,disabled:4,onChange:5})}}export{j as G};
