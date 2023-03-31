import{S as B,i as F,s as H,a0 as I,e as g,c as L,b as S,g as m,J as _,h as q,j as h,m as j,Z as C,_ as J,$ as R,t as v,a as w,n as y,d as Z,l as A,B as D}from"./Layout.js";import{L as E}from"./Button.js";function G(n){let e,t,f;return{c(){e=g("input"),m(e,"class","input svelte-1d8f2r5"),e.value=n[0],m(e,"type",n[6]),m(e,"name",n[7]),e.disabled=n[4],e.required=n[5],_(e,"input-form",n[3])},m(s,i){q(s,e,i),n[12](e),t||(f=A(e,"input",n[9]),t=!0)},p(s,i){i&1&&e.value!==s[0]&&(e.value=s[0]),i&64&&m(e,"type",s[6]),i&128&&m(e,"name",s[7]),i&16&&(e.disabled=s[4]),i&32&&(e.required=s[5]),i&8&&_(e,"input-form",s[3])},d(s){s&&y(e),n[12](null),t=!1,f()}}}function K(n){let e,t,f,s,i;f=new E({props:{label:n[1],required:n[5]}});const u=n[11].default,d=I(u,n,n[10],null),r=d||G(n);return{c(){e=g("div"),t=g("label"),L(f.$$.fragment),s=S(),r&&r.c(),m(t,"class","label gap-1 items-start"),_(t,"flex-col",!n[2]),_(t,"cursor-pointer",!n[4]),m(e,"class","form-control w-full")},m(a,o){q(a,e,o),h(e,t),j(f,t,null),h(t,s),r&&r.m(t,null),i=!0},p(a,[o]){const b={};o&2&&(b.label=a[1]),o&32&&(b.required=a[5]),f.$set(b),d?d.p&&(!i||o&1024)&&C(d,u,a,a[10],i?R(u,a[10],o,null):J(a[10]),null):r&&r.p&&(!i||o&505)&&r.p(a,i?o:-1),o&4&&_(t,"flex-col",!a[2]),o&16&&_(t,"cursor-pointer",!a[4])},i(a){i||(v(f.$$.fragment,a),v(r,a),i=!0)},o(a){w(f.$$.fragment,a),w(r,a),i=!1},d(a){a&&y(e),Z(f),r&&r.d(a)}}}function M(n,e,t){let{$$slots:f={},$$scope:s}=e,{label:i=""}=e,{value:u=void 0}=e,{isHorizontal:d=!1}=e,{isForm:r=!1}=e,{disabled:a=!1}=e,{required:o=!1}=e,{type:b="text"}=e,{name:p=""}=e,c;const z=l=>{t(0,u=b.match(/^(number|range)$/)?+l.target.value:l.target.value)};function k(l){D[l?"unshift":"push"](()=>{c=l,t(8,c)})}return n.$$set=l=>{"label"in l&&t(1,i=l.label),"value"in l&&t(0,u=l.value),"isHorizontal"in l&&t(2,d=l.isHorizontal),"isForm"in l&&t(3,r=l.isForm),"disabled"in l&&t(4,a=l.disabled),"required"in l&&t(5,o=l.required),"type"in l&&t(6,b=l.type),"name"in l&&t(7,p=l.name),"$$scope"in l&&t(10,s=l.$$scope)},[u,i,d,r,a,o,b,p,c,z,s,f,k]}class P extends B{constructor(e){super(),F(this,e,M,K,H,{label:1,value:0,isHorizontal:2,isForm:3,disabled:4,required:5,type:6,name:7})}}export{P as B};
