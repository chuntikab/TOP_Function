var ml=Object.defineProperty;var qi=Object.getOwnPropertySymbols;var gl=Object.prototype.hasOwnProperty,cl=Object.prototype.propertyIsEnumerable;var $i=(e,t,i)=>t in e?ml(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,zi=(e,t)=>{for(var i in t||(t={}))gl.call(t,i)&&$i(e,i,t[i]);if(qi)for(var i of qi(t))cl.call(t,i)&&$i(e,i,t[i]);return e};import{S as ht,i as kt,s as St,c as I,m as R,t as b,a as k,d as H,e as p,f as S,b as _,g as d,J as $,h as P,j as r,a9 as Vi,l as Fe,k as T,ab as sl,n as q,O as vl,B as le,U as pe,F as be,P as de,q as ae,r as se,L as bl,x as Mi,R as Wi,M as Ge,o as _l,E as wl,z as ji,A as Oi,a6 as hl,a7 as kl,y as ol,u as Sl,a8 as Yi,w as Yt,K as yl}from"./Layout.js";import{C as ye}from"./CG_Gift_Reporting.service.js";import{a as _t,P as Gl,f as wt,B as yt}from"./Button.js";import{W as Dl}from"./Workflow.js";import{D as ul}from"./DatePicker.js";import{A as Al}from"./Alert.js";import{T as fl,A as Cl,a as Bl,S as Ll,G as Nl}from"./SupervisorComment.js";import{B as Jt}from"./BaseInput.js";import{G as El}from"./GiftStatusDropdown.js";import"./BaseDropdown.js";function Il(e){let t,i=_t(e[0],2)+"",l,s,a,n,f,w;return{c(){t=p("div"),l=S(i),a=_(),n=p("input"),d(t,"title",s=_t(e[0],2)),d(t,"class","input overflow-hidden svelte-p77be7"),$(t,"input-form",e[3]),$(t,"hidden",e[7]),$(t,"cursor-text",!e[4]),$(t,"_disabled",e[4]),d(n,"type","number"),d(n,"class","input svelte-p77be7"),d(n,"min","0"),d(n,"step","0.01"),n.required=e[5],n.disabled=e[4],$(n,"input-form",e[3]),$(n,"hidden",!e[7])},m(m,g){P(m,t,g),r(t,l),P(m,a,g),P(m,n,g),Vi(n,e[0]),e[10](n),f||(w=[Fe(t,"click",e[8]),Fe(n,"input",e[9]),Fe(n,"blur",e[11]),Fe(n,"focus",e[12]),Fe(n,"input",e[13])],f=!0)},p(m,g){g&1&&i!==(i=_t(m[0],2)+"")&&T(l,i),g&1&&s!==(s=_t(m[0],2))&&d(t,"title",s),g&8&&$(t,"input-form",m[3]),g&128&&$(t,"hidden",m[7]),g&16&&$(t,"cursor-text",!m[4]),g&16&&$(t,"_disabled",m[4]),g&32&&(n.required=m[5]),g&16&&(n.disabled=m[4]),g&1&&sl(n.value)!==m[0]&&Vi(n,m[0]),g&8&&$(n,"input-form",m[3]),g&128&&$(n,"hidden",!m[7])},d(m){m&&q(t),m&&q(a),m&&q(n),e[10](null),f=!1,vl(w)}}}function Rl(e){let t,i;return t=new Jt({props:{label:e[1],isHorizontal:e[2],disabled:e[4],required:e[5],$$slots:{default:[Il]},$$scope:{ctx:e}}}),{c(){I(t.$$.fragment)},m(l,s){R(t,l,s),i=!0},p(l,[s]){const a={};s&2&&(a.label=l[1]),s&4&&(a.isHorizontal=l[2]),s&16&&(a.disabled=l[4]),s&32&&(a.required=l[5]),s&16633&&(a.$$scope={dirty:s,ctx:l}),t.$set(a)},i(l){i||(b(t.$$.fragment,l),i=!0)},o(l){k(t.$$.fragment,l),i=!1},d(l){H(t,l)}}}function Hl(e,t,i){let{label:l=""}=t,{value:s=void 0}=t,{isHorizontal:a=!1}=t,{isForm:n=!1}=t,{disabled:f=!1}=t,{required:w=!1}=t,m,g=!1;const v=()=>{f||i(7,g=!0)};function D(){s=sl(this.value),i(0,s)}function G(o){le[o?"unshift":"push"](()=>{m=o,i(6,m)})}const z=()=>i(7,g=!1),U=()=>{s===0&&m.select()},N=()=>{s===0&&m.select()};return e.$$set=o=>{"label"in o&&i(1,l=o.label),"value"in o&&i(0,s=o.value),"isHorizontal"in o&&i(2,a=o.isHorizontal),"isForm"in o&&i(3,n=o.isForm),"disabled"in o&&i(4,f=o.disabled),"required"in o&&i(5,w=o.required)},e.$$.update=()=>{e.$$.dirty&1&&i(0,s=parseFloat(Math.abs(s).toFixed(2)))},[s,l,a,n,f,w,m,g,v,D,G,z,U,N]}class Fl extends ht{constructor(t){super(),kt(this,t,Hl,Rl,St,{label:1,value:0,isHorizontal:2,isForm:3,disabled:4,required:5})}}function Ji(e){let t,i,l;return{c(){t=p("span"),t.innerHTML='<i class="ic ic-delete"></i>',d(t,"class","icon svelte-k4x45l"),d(t,"data-tip","Delete"),$(t,"_disabled",e[1]),$(t,"tooltip",!e[1])},m(s,a){P(s,t,a),i||(l=Fe(t,"click",e[7]),i=!0)},p(s,a){a&2&&$(t,"_disabled",s[1]),a&2&&$(t,"tooltip",!s[1])},d(s){s&&q(t),i=!1,l()}}}function Ki(e){var f,w;let t,i,l,s,a;l=new El({props:{showAll:!1,isShowSingleLabel:!1,isForm:!0,onChange:e[12],value:{id:(f=e[0].giftStatus)==null?void 0:f.key,name:""}}});let n=((w=e[0].giftStatus)==null?void 0:w.value)===be.GiftStatus.Donated&&Qi(e);return{c(){t=p("div"),i=p("div"),I(l.$$.fragment),s=_(),n&&n.c(),d(i,"class","col-span-1"),d(t,"class","grid grid-cols-1 mt-2 tablet:grid-cols-3 tablet:gap-x-2")},m(m,g){P(m,t,g),r(t,i),R(l,i,null),r(t,s),n&&n.m(t,null),a=!0},p(m,g){var D,G;const v={};g&1&&(v.onChange=m[12]),g&1&&(v.value={id:(D=m[0].giftStatus)==null?void 0:D.key,name:""}),l.$set(v),((G=m[0].giftStatus)==null?void 0:G.value)===be.GiftStatus.Donated?n?(n.p(m,g),g&1&&b(n,1)):(n=Qi(m),n.c(),b(n,1),n.m(t,null)):n&&(ae(),k(n,1,1,()=>{n=null}),se())},i(m){a||(b(l.$$.fragment,m),b(n),a=!0)},o(m){k(l.$$.fragment,m),k(n),a=!1},d(m){m&&q(t),H(l),n&&n.d()}}}function Qi(e){let t,i,l,s;function a(f){e[13](f)}let n={name:"giftDonatedComment",isForm:!0,lineHeight:14,height:26};return e[0].giftDonatedComment!==void 0&&(n.value=e[0].giftDonatedComment),i=new fl({props:n}),le.push(()=>pe(i,"value",a)),{c(){t=p("div"),I(i.$$.fragment),d(t,"class","col-span-2 flex items-end")},m(f,w){P(f,t,w),R(i,t,null),s=!0},p(f,w){const m={};!l&&w&1&&(l=!0,m.value=f[0].giftDonatedComment,de(()=>l=!1)),i.$set(m)},i(f){s||(b(i.$$.fragment,f),s=!0)},o(f){k(i.$$.fragment,f),s=!1},d(f){f&&q(t),H(i)}}}function Tl(e){let t,i,l,s,a,n,f,w,m,g,v,D,G,z,U,N,o,E,X,A,Z,te,ee,me,C,ne,V=e[2]>0&&Ji(e);function _e(y){e[8](y)}let we={label:{th:"\u0E0A\u0E37\u0E48\u0E2D\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",en:"Item Name"},disabled:e[1],isForm:!0,required:!0};e[0].name!==void 0&&(we.value=e[0].name),G=new Jt({props:we}),le.push(()=>pe(G,"value",_e));function h(y){e[9](y)}let M={label:{th:"\u0E08\u0E32\u0E01\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19/\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17/\u0E1A\u0E38\u0E04\u0E04\u0E25",en:"Received form"},disabled:e[1],isForm:!0,required:!0};e[0].receivedFrom!==void 0&&(M.value=e[0].receivedFrom),N=new Jt({props:M}),le.push(()=>pe(N,"value",h));function re(y){e[10](y)}let ie={label:{th:"\u0E21\u0E39\u0E25\u0E04\u0E48\u0E32\u0E42\u0E14\u0E22\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 (\u0E1A\u0E32\u0E17)",en:"Approximate value (THB)"},disabled:e[1],isForm:!0,required:!0};e[0].giftValue!==void 0&&(ie.value=e[0].giftValue),A=new Fl({props:ie}),le.push(()=>pe(A,"value",re));function ge(y){e[11](y)}let ce={label:{th:"\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48",en:"Date"},disabled:e[1],isForm:!0,width:null,required:!0};e[0].submittedDate!==void 0&&(ce.value=e[0].submittedDate),ee=new ul({props:ce}),le.push(()=>pe(ee,"value",ge));let B=e[4]&&Ki(e);return{c(){t=p("div"),i=p("div"),l=p("div"),s=p("div"),s.textContent=`\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48 ${e[5]}`,a=_(),n=p("div"),n.textContent=`Item No. ${e[5]}`,f=_(),V&&V.c(),w=_(),m=p("div"),g=_(),v=p("div"),D=p("div"),I(G.$$.fragment),U=_(),I(N.$$.fragment),E=_(),X=p("div"),I(A.$$.fragment),te=_(),I(ee.$$.fragment),C=_(),B&&B.c(),d(n,"class","text-primary"),d(i,"class","flex justify-between items-center px-3"),d(m,"class","divider"),d(X,"class","grid grid-cols-2 gap-x-2"),d(D,"class","grid grid-cols-1 gap-2 tablet:grid-cols-3"),d(v,"class","px-3"),d(t,"class","bg-gray-100 pt-2 pb-3")},m(y,W){P(y,t,W),r(t,i),r(i,l),r(l,s),r(l,a),r(l,n),r(i,f),V&&V.m(i,null),r(t,w),r(t,m),r(t,g),r(t,v),r(v,D),R(G,D,null),r(D,U),R(N,D,null),r(D,E),r(D,X),R(A,X,null),r(X,te),R(ee,X,null),r(v,C),B&&B.m(v,null),ne=!0},p(y,[W]){y[2]>0?V?V.p(y,W):(V=Ji(y),V.c(),V.m(i,null)):V&&(V.d(1),V=null);const he={};W&2&&(he.disabled=y[1]),!z&&W&1&&(z=!0,he.value=y[0].name,de(()=>z=!1)),G.$set(he);const De={};W&2&&(De.disabled=y[1]),!o&&W&1&&(o=!0,De.value=y[0].receivedFrom,de(()=>o=!1)),N.$set(De);const j={};W&2&&(j.disabled=y[1]),!Z&&W&1&&(Z=!0,j.value=y[0].giftValue,de(()=>Z=!1)),A.$set(j);const oe={};W&2&&(oe.disabled=y[1]),!me&&W&1&&(me=!0,oe.value=y[0].submittedDate,de(()=>me=!1)),ee.$set(oe),y[4]?B?(B.p(y,W),W&16&&b(B,1)):(B=Ki(y),B.c(),b(B,1),B.m(v,null)):B&&(ae(),k(B,1,1,()=>{B=null}),se())},i(y){ne||(b(G.$$.fragment,y),b(N.$$.fragment,y),b(A.$$.fragment,y),b(ee.$$.fragment,y),b(B),ne=!0)},o(y){k(G.$$.fragment,y),k(N.$$.fragment,y),k(A.$$.fragment,y),k(ee.$$.fragment,y),k(B),ne=!1},d(y){y&&q(t),V&&V.d(),H(G),H(N),H(A),H(ee),B&&B.d()}}}function Pl(e,t,i){let{item:l}=t,{disabled:s}=t,{i:a}=t,{deleteItem:n}=t,{isShowGiftStatus:f=!1}=t,{canGLGCAcknowledge:w=!1}=t;const m=a+1,g=()=>n(a);function v(o){e.$$.not_equal(l.name,o)&&(l.name=o,i(0,l))}function D(o){e.$$.not_equal(l.receivedFrom,o)&&(l.receivedFrom=o,i(0,l))}function G(o){e.$$.not_equal(l.giftValue,o)&&(l.giftValue=o,i(0,l))}function z(o){e.$$.not_equal(l.submittedDate,o)&&(l.submittedDate=o,i(0,l))}const U=o=>{o.id!==be.GiftStatus.Donated&&i(0,l.giftDonatedComment="",l),o?i(0,l.giftStatus={enumName:"GiftStatus",key:o.id,value:o.id},l):i(0,l.giftStatus=void 0,l)};function N(o){e.$$.not_equal(l.giftDonatedComment,o)&&(l.giftDonatedComment=o,i(0,l))}return e.$$set=o=>{"item"in o&&i(0,l=o.item),"disabled"in o&&i(1,s=o.disabled),"i"in o&&i(2,a=o.i),"deleteItem"in o&&i(3,n=o.deleteItem),"isShowGiftStatus"in o&&i(4,f=o.isShowGiftStatus),"canGLGCAcknowledge"in o&&i(6,w=o.canGLGCAcknowledge)},[l,s,a,n,f,m,w,g,v,D,G,z,U,N]}class ql extends ht{constructor(t){super(),kt(this,t,Pl,Tl,St,{item:0,disabled:1,i:2,deleteItem:3,isShowGiftStatus:4,canGLGCAcknowledge:6})}}function $l(e){let t,i,l,s,a,n,f,w,m,g,v,D;function G(o){e[2](o)}let z={type:"checkbox",name:"glgcApproverStatus",disabled:!e[1].canGLGCAcknowledge};e[0].glgcApproverStatus!==void 0&&(z.value=e[0].glgcApproverStatus),a=new Cl({props:z}),le.push(()=>pe(a,"value",G));function U(o){e[3](o)}let N={label:{th:"\u0E0A\u0E48\u0E2D\u0E07\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A",en:"By"},disabled:!e[1].canGLGCAcknowledge,isForm:!0,isHorizontal:!0};return e[0].glgcReceiveBy!==void 0&&(N.value=e[0].glgcReceiveBy),w=new fl({props:N}),le.push(()=>pe(w,"value",U)),v=new Bl({props:{displayData:{nameTH:e[1].glgcActionByTH,nameEN:e[1].glgcActionByEN,positionTH:e[1].glgcActionByPositionTH,positionEN:e[1].glgcActionByPositionEN,companyTH:e[1].glgcActionByCompanyTH,companyEN:e[1].glgcActionByCompanyEN,actionDate:e[1].glgcActionDate}}}),{c(){t=p("div"),i=p("div"),l=p("div"),l.innerHTML=`<div>\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E17\u0E23\u0E32\u0E1A\u0E02\u0E2D\u0E07 GLGC</div> 
      <div class="text-primary">GLGC&#39;s Acknowledgement</div>`,s=_(),I(a.$$.fragment),f=_(),I(w.$$.fragment),g=_(),I(v.$$.fragment),d(l,"class","text-center"),d(i,"class","_wrapper space-y-3 svelte-ujavez"),d(t,"class","_glgc-comment-container svelte-ujavez"),$(t,"border-report-detail-glgc",e[1].canGLGCAcknowledge),$(t,"border-report-detail-glgc-light",!e[1].canGLGCAcknowledge)},m(o,E){P(o,t,E),r(t,i),r(i,l),r(i,s),R(a,i,null),r(i,f),R(w,i,null),r(i,g),R(v,i,null),D=!0},p(o,[E]){const X={};E&2&&(X.disabled=!o[1].canGLGCAcknowledge),!n&&E&1&&(n=!0,X.value=o[0].glgcApproverStatus,de(()=>n=!1)),a.$set(X);const A={};E&2&&(A.disabled=!o[1].canGLGCAcknowledge),!m&&E&1&&(m=!0,A.value=o[0].glgcReceiveBy,de(()=>m=!1)),w.$set(A);const Z={};E&2&&(Z.displayData={nameTH:o[1].glgcActionByTH,nameEN:o[1].glgcActionByEN,positionTH:o[1].glgcActionByPositionTH,positionEN:o[1].glgcActionByPositionEN,companyTH:o[1].glgcActionByCompanyTH,companyEN:o[1].glgcActionByCompanyEN,actionDate:o[1].glgcActionDate}),v.$set(Z),E&2&&$(t,"border-report-detail-glgc",o[1].canGLGCAcknowledge),E&2&&$(t,"border-report-detail-glgc-light",!o[1].canGLGCAcknowledge)},i(o){D||(b(a.$$.fragment,o),b(w.$$.fragment,o),b(v.$$.fragment,o),D=!0)},o(o){k(a.$$.fragment,o),k(w.$$.fragment,o),k(v.$$.fragment,o),D=!1},d(o){o&&q(t),H(a),H(w),H(v)}}}function zl(e,t,i){let{data:l}=t,{mData:s}=t;function a(f){e.$$.not_equal(s.glgcApproverStatus,f)&&(s.glgcApproverStatus=f,i(0,s))}function n(f){e.$$.not_equal(s.glgcReceiveBy,f)&&(s.glgcReceiveBy=f,i(0,s))}return e.$$set=f=>{"data"in f&&i(1,l=f.data),"mData"in f&&i(0,s=f.mData)},[s,l,a,n]}class Vl extends ht{constructor(t){super(),kt(this,t,zl,$l,St,{data:1,mData:0})}}function Ui(e,t,i){const l=e.slice();return l[27]=t[i],l[28]=t,l[29]=i,l}function Xi(e){var Ri;let t,i,l,s,a,n,f,w,m,g,v,D=((Ri=e[0].status)==null?void 0:Ri.value)+"",G,z,U,N,o,E,X,A,Z,te,ee,me,C,ne,V,_e,we,h,M,re,ie=e[0].supervisorName+"",ge,ce,B,y,W=e[0].supervisorName+"",he,De,j,oe,Oe,Kt,Ye=e[0].reportedByTH+"",Gt,Qt,Te,Ut,Je=e[0].reportedByEN+"",Dt,Xt,Ae,Ke,Zt,Qe=e[0].reportedByEmployeeId+"",At,xt,Pe,ei,Ue=e[0].reportedByEmployeeId+"",Ct,ti,Ce,Xe,ii,Ze=e[0].reportedByPositionTH+"",Bt,li,qe,ni,xe=e[0].reportedByPositionEN+"",Lt,ri,Be,et,ai,tt=e[0].reportedBySection+"",Nt,si,$e,oi,it=e[0].reportedBySection+"",Et,ui,Le,lt,fi,nt=e[0].reportedByDepartment+"",It,pi,ze,di,rt=e[0].reportedByDepartment+"",Rt,mi,Ne,at,gi,st=e[0].reportedByFunction+"",Ht,ci,Ve,vi,ot=e[0].reportedByFunction+"",Ft,bi,Tt,Ee,_i,ut,wi,ve,Pt,hi,Ie,Re,ft,ki,pt=e[0].reportedByTH+"",qt,Si,Me,yi,dt=e[0].reportedByEN+"",$t,Gi,He,mt,Di,gt=wt(e[0].reportedDate,!1,"th")+"",zt,Ai,We,Ci,ct=wt(e[0].reportedDate)+"",Vt,Bi,Mt,Li,vt,Ni,Wt,jt,Ot,je,L;function Ei(u,c){return u[0].reportNumber?Wl:Ml}let bt=Ei(e),ue=bt(e);E=new Dl({props:{currentWorkflow:e[0].currentWorkflow,isShowFullDetail:!1}});let O=e[0].canEdit&&Zi(e),ke=e[3].giftItems,F=[];for(let u=0;u<ke.length;u+=1)F[u]=xi(Ui(e,ke,u));const pl=u=>k(F[u],1,1,()=>{F[u]=null});function dl(u){e[18](u)}let Ii={label:{th:"\u0E20\u0E32\u0E22\u0E43\u0E19\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48",en:"Date"},disabled:!e[0].canEdit,width:192,isForm:!0,isHorizontal:!0,required:!0};e[3].submittedWithinDate!==void 0&&(Ii.value=e[3].submittedWithinDate),ve=new ul({props:Ii}),le.push(()=>pe(ve,"value",dl));let Y=e[0].isShowSupervisorComment&&el(e),J=e[0].isShowSuperGLGCComment&&tl(e),K=e[0].isShowSuperGLVPComment&&il(e),Q=e[8]&&ll(e);return{c(){var u,c,fe;t=p("div"),ue.c(),i=_(),l=p("div"),s=p("span"),s.textContent="Status :",a=_(),n=p("span"),f=p("span"),w=p("i"),g=_(),v=p("span"),G=S(D),U=_(),N=p("div"),o=p("div"),I(E.$$.fragment),X=_(),A=p("div"),Z=p("div"),te=p("img"),me=_(),C=p("div"),ne=p("div"),ne.innerHTML=`<div class="font-weight-bold">\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E02\u0E2D\u0E07\u0E02\u0E27\u0E31\u0E0D \u0E17\u0E23\u0E31\u0E1E\u0E22\u0E4C\u0E2A\u0E34\u0E19 \u0E2B\u0E23\u0E37\u0E2D\u0E1B\u0E23\u0E30\u0E42\u0E22\u0E0A\u0E19\u0E4C\u0E2D\u0E37\u0E48\u0E19\u0E43\u0E14</div> 
            <div class="text-primary">Gift Registration Form</div>`,V=_(),_e=p("div"),we=_(),h=p("div"),M=p("div"),re=S("\u0E40\u0E23\u0E35\u0E22\u0E19 "),ge=S(ie),ce=_(),B=p("div"),y=S("To "),he=S(W),De=_(),j=p("div"),oe=p("div"),Oe=p("div"),Kt=S("\u0E02\u0E49\u0E32\u0E1E\u0E40\u0E08\u0E49\u0E32 "),Gt=S(Ye),Qt=_(),Te=p("div"),Ut=S("I "),Dt=S(Je),Xt=_(),Ae=p("div"),Ke=p("div"),Zt=S("\u0E23\u0E2B\u0E31\u0E2A\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19 : "),At=S(Qe),xt=_(),Pe=p("div"),ei=S("Employee No. : "),Ct=S(Ue),ti=_(),Ce=p("div"),Xe=p("div"),ii=S("\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07 : "),Bt=S(Ze),li=_(),qe=p("div"),ni=S("Position : "),Lt=S(xe),ri=_(),Be=p("div"),et=p("div"),ai=S("\u0E41\u0E1C\u0E19\u0E01 : "),Nt=S(tt),si=_(),$e=p("div"),oi=S("Section : "),Et=S(it),ui=_(),Le=p("div"),lt=p("div"),fi=S("\u0E2A\u0E48\u0E27\u0E19/\u0E1D\u0E48\u0E32\u0E22 : "),It=S(nt),pi=_(),ze=p("div"),di=S("Department : "),Rt=S(rt),mi=_(),Ne=p("div"),at=p("div"),gi=S("\u0E2A\u0E32\u0E22\u0E07\u0E32\u0E19 : "),Ht=S(st),ci=_(),Ve=p("div"),vi=S("Function : "),Ft=S(ot),bi=_(),O&&O.c(),Tt=_(),Ee=p("form");for(let Se=0;Se<F.length;Se+=1)F[Se].c();_i=_(),ut=p("div"),ut.innerHTML=`<p class="svelte-bgu8uw">\u0E08\u0E36\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19\u0E21\u0E32\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E42\u0E1B\u0E23\u0E14\u0E1E\u0E34\u0E08\u0E32\u0E23\u0E13\u0E32 \u0E17\u0E31\u0E49\u0E07\u0E19\u0E35\u0E49 \u0E02\u0E2D\u0E07\u0E02\u0E27\u0E31\u0E0D \u0E17\u0E23\u0E31\u0E1E\u0E22\u0E4C\u0E2A\u0E34\u0E19
              \u0E2B\u0E23\u0E37\u0E2D\u0E1B\u0E23\u0E30\u0E42\u0E22\u0E0A\u0E19\u0E4C\u0E2D\u0E37\u0E48\u0E19\u0E43\u0E14\u0E14\u0E31\u0E07\u0E01\u0E25\u0E48\u0E32\u0E27\u0E19\u0E31\u0E49\u0E19\u0E02\u0E49\u0E32\u0E1E\u0E40\u0E08\u0E49\u0E32\u0E08\u0E30\u0E19\u0E33\u0E2A\u0E48\u0E07\u0E1D\u0E48\u0E32\u0E22\u0E1A\u0E23\u0E23\u0E29\u0E31\u0E17\u0E20\u0E34\u0E1A\u0E32\u0E25
              \u0E01\u0E32\u0E23\u0E1B\u0E0F\u0E34\u0E1A\u0E31\u0E15\u0E34\u0E15\u0E32\u0E21\u0E01\u0E0E\u0E23\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E1A \u0E41\u0E25\u0E30\u0E07\u0E32\u0E19\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22</p> 

            <p class="text-primary svelte-bgu8uw">The above information is for your consideration. The gifts,
              assets, or other benefits received, will be send to the Corporate
              Governance, Compliance, and Legal Department within:</p>`,wi=_(),I(ve.$$.fragment),hi=_(),Ie=p("div"),Re=p("div"),ft=p("div"),ki=S("\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19 : "),qt=S(pt),Si=_(),Me=p("div"),yi=S("Name : "),$t=S(dt),Gi=_(),He=p("div"),mt=p("div"),Di=S("\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 : "),zt=S(gt),Ai=_(),We=p("div"),Ci=S("Date : "),Vt=S(ct),Bi=_(),Mt=p("div"),Li=_(),vt=p("div"),vt.innerHTML=`<div><div>\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E2B\u0E15\u0E38* :</div> 
              <p class="svelte-bgu8uw">\u0E01\u0E23\u0E13\u0E35\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E41\u0E1C\u0E19\u0E01\u0E25\u0E07\u0E44\u0E1B\u0E43\u0E2B\u0E49\u0E40\u0E2A\u0E19\u0E2D\u0E1C\u0E39\u0E49\u0E1A\u0E31\u0E07\u0E04\u0E31\u0E1A\u0E1A\u0E31\u0E0D\u0E0A\u0E32
                \u0E04\u0E37\u0E2D\u0E1C\u0E39\u0E49\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E1D\u0E48\u0E32\u0E22\u0E25\u0E07\u0E19\u0E32\u0E21\u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07</p> 
              <p class="svelte-bgu8uw">\u0E01\u0E23\u0E13\u0E35\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E27\u0E19\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B\u0E43\u0E2B\u0E49\u0E40\u0E2A\u0E19\u0E2D\u0E1C\u0E39\u0E49\u0E1A\u0E31\u0E07\u0E04\u0E31\u0E1A\u0E1A\u0E31\u0E0D\u0E0A\u0E32\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B
                1 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E25\u0E07\u0E19\u0E32\u0E21\u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07</p> 
              <p class="svelte-bgu8uw">\u0E01\u0E23\u0E13\u0E35\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E1C\u0E39\u0E49\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E1D\u0E48\u0E32\u0E22\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B\u0E43\u0E2B\u0E49\u0E40\u0E2A\u0E19\u0E2D\u0E1C\u0E39\u0E49\u0E1A\u0E31\u0E07\u0E04\u0E31\u0E1A\u0E1A\u0E31\u0E0D\u0E0A\u0E32\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B
                1 \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E25\u0E07\u0E19\u0E32\u0E21\u0E23\u0E31\u0E1A\u0E23\u0E2D\u0E07</p></div> 

            <div class="text-primary"><div>Remark* :</div> 
              <p class="svelte-bgu8uw">In case of employees at Section Heads or below, the report will
                be send to Department Head for acknowledgement</p> 
              <p class="svelte-bgu8uw">In case of employees at Section Heads or above, the report will
                be send to Immediate Supervisor (N+1) for acknowledgement</p> 
              <p class="svelte-bgu8uw">In case of employees at Department Heads or above, the report
                will be send to Immediate Supervisor (N+1) for acknowledgmen</p></div>`,Ni=_(),Y&&Y.c(),Wt=_(),J&&J.c(),jt=_(),K&&K.c(),Ot=_(),Q&&Q.c(),je=wl(),d(s,"class","_label"),d(w,"class",m="ic "+ji[(u=e[0].status)==null?void 0:u.key]+" svelte-bgu8uw"),d(f,"class","icon"),d(n,"class",z="icon-text "+Oi[(c=e[0].status)==null?void 0:c.key]+" svelte-bgu8uw"),d(t,"class","flex flex-col tablet:flex-row gap-1 tablet:gap-6 text-size-medium font-weight-bold"),d(o,"class","_wrapper svelte-bgu8uw"),d(N,"class","_container _container__workflow svelte-bgu8uw"),d(te,"class","ml-auto"),hl(te.src,ee=((fe=kl)!=null?fe:"")+"/images/logo.png")||d(te,"src",ee),d(te,"width","90"),d(te,"alt","logo"),d(Z,"class","mb-4 tablet:mb-1"),d(ne,"class","text-center text-size-large"),d(_e,"class","divider svelte-bgu8uw"),d(B,"class","text-primary"),d(Te,"class","text-primary"),d(oe,"class","_reported-by-wrapper svelte-bgu8uw"),d(Pe,"class","text-primary"),d(Ae,"class","_reported-by-wrapper svelte-bgu8uw"),d(qe,"class","text-primary"),d(Ce,"class","_reported-by-wrapper svelte-bgu8uw"),d($e,"class","text-primary"),d(Be,"class","_reported-by-wrapper svelte-bgu8uw"),d(ze,"class","text-primary"),d(Le,"class","_reported-by-wrapper svelte-bgu8uw"),d(Ve,"class","text-primary"),d(Ne,"class","_reported-by-wrapper svelte-bgu8uw"),d(j,"class","flex flex-wrap gap-y-2 pl-2"),d(Ee,"class","space-y-2"),d(ut,"class","space-y-1"),d(Me,"class","text-primary"),d(Re,"class","_reported-by-wrapper svelte-bgu8uw"),d(We,"class","text-primary"),d(He,"class","_reported-by-wrapper svelte-bgu8uw"),d(Ie,"class","flex flex-wrap gap-y-2"),d(Mt,"class","divider svelte-bgu8uw"),d(vt,"class","pl-3 space-y-1"),d(C,"class","space-y-2 _wrapper svelte-bgu8uw"),d(A,"class","text-black _container _container__report svelte-bgu8uw")},m(u,c){P(u,t,c),ue.m(t,null),r(t,i),r(t,l),r(l,s),r(l,a),r(l,n),r(n,f),r(f,w),r(n,g),r(n,v),r(v,G),P(u,U,c),P(u,N,c),r(N,o),R(E,o,null),P(u,X,c),P(u,A,c),r(A,Z),r(Z,te),r(A,me),r(A,C),r(C,ne),r(C,V),r(C,_e),r(C,we),r(C,h),r(h,M),r(M,re),r(M,ge),r(h,ce),r(h,B),r(B,y),r(B,he),r(C,De),r(C,j),r(j,oe),r(oe,Oe),r(Oe,Kt),r(Oe,Gt),r(oe,Qt),r(oe,Te),r(Te,Ut),r(Te,Dt),r(j,Xt),r(j,Ae),r(Ae,Ke),r(Ke,Zt),r(Ke,At),r(Ae,xt),r(Ae,Pe),r(Pe,ei),r(Pe,Ct),r(j,ti),r(j,Ce),r(Ce,Xe),r(Xe,ii),r(Xe,Bt),r(Ce,li),r(Ce,qe),r(qe,ni),r(qe,Lt),r(j,ri),r(j,Be),r(Be,et),r(et,ai),r(et,Nt),r(Be,si),r(Be,$e),r($e,oi),r($e,Et),r(j,ui),r(j,Le),r(Le,lt),r(lt,fi),r(lt,It),r(Le,pi),r(Le,ze),r(ze,di),r(ze,Rt),r(j,mi),r(j,Ne),r(Ne,at),r(at,gi),r(at,Ht),r(Ne,ci),r(Ne,Ve),r(Ve,vi),r(Ve,Ft),r(C,bi),O&&O.m(C,null),r(C,Tt),r(C,Ee);for(let fe=0;fe<F.length;fe+=1)F[fe].m(Ee,null);e[17](Ee),r(C,_i),r(C,ut),r(C,wi),R(ve,C,null),r(C,hi),r(C,Ie),r(Ie,Re),r(Re,ft),r(ft,ki),r(ft,qt),r(Re,Si),r(Re,Me),r(Me,yi),r(Me,$t),r(Ie,Gi),r(Ie,He),r(He,mt),r(mt,Di),r(mt,zt),r(He,Ai),r(He,We),r(We,Ci),r(We,Vt),r(C,Bi),r(C,Mt),r(C,Li),r(C,vt),r(A,Ni),Y&&Y.m(A,null),r(A,Wt),J&&J.m(A,null),r(A,jt),K&&K.m(A,null),P(u,Ot,c),Q&&Q.m(u,c),P(u,je,c),L=!0},p(u,c){var Hi,Fi,Ti;bt===(bt=Ei(u))&&ue?ue.p(u,c):(ue.d(1),ue=bt(u),ue&&(ue.c(),ue.m(t,i))),(!L||c&1&&m!==(m="ic "+ji[(Hi=u[0].status)==null?void 0:Hi.key]+" svelte-bgu8uw"))&&d(w,"class",m),(!L||c&1)&&D!==(D=((Fi=u[0].status)==null?void 0:Fi.value)+"")&&T(G,D),(!L||c&1&&z!==(z="icon-text "+Oi[(Ti=u[0].status)==null?void 0:Ti.key]+" svelte-bgu8uw"))&&d(n,"class",z);const fe={};if(c&1&&(fe.currentWorkflow=u[0].currentWorkflow),E.$set(fe),(!L||c&1)&&ie!==(ie=u[0].supervisorName+"")&&T(ge,ie),(!L||c&1)&&W!==(W=u[0].supervisorName+"")&&T(he,W),(!L||c&1)&&Ye!==(Ye=u[0].reportedByTH+"")&&T(Gt,Ye),(!L||c&1)&&Je!==(Je=u[0].reportedByEN+"")&&T(Dt,Je),(!L||c&1)&&Qe!==(Qe=u[0].reportedByEmployeeId+"")&&T(At,Qe),(!L||c&1)&&Ue!==(Ue=u[0].reportedByEmployeeId+"")&&T(Ct,Ue),(!L||c&1)&&Ze!==(Ze=u[0].reportedByPositionTH+"")&&T(Bt,Ze),(!L||c&1)&&xe!==(xe=u[0].reportedByPositionEN+"")&&T(Lt,xe),(!L||c&1)&&tt!==(tt=u[0].reportedBySection+"")&&T(Nt,tt),(!L||c&1)&&it!==(it=u[0].reportedBySection+"")&&T(Et,it),(!L||c&1)&&nt!==(nt=u[0].reportedByDepartment+"")&&T(It,nt),(!L||c&1)&&rt!==(rt=u[0].reportedByDepartment+"")&&T(Rt,rt),(!L||c&1)&&st!==(st=u[0].reportedByFunction+"")&&T(Ht,st),(!L||c&1)&&ot!==(ot=u[0].reportedByFunction+"")&&T(Ft,ot),u[0].canEdit?O?(O.p(u,c),c&1&&b(O,1)):(O=Zi(u),O.c(),b(O,1),O.m(C,Tt)):O&&(ae(),k(O,1,1,()=>{O=null}),se()),c&2185){ke=u[3].giftItems;let x;for(x=0;x<ke.length;x+=1){const Pi=Ui(u,ke,x);F[x]?(F[x].p(Pi,c),b(F[x],1)):(F[x]=xi(Pi),F[x].c(),b(F[x],1),F[x].m(Ee,null))}for(ae(),x=ke.length;x<F.length;x+=1)pl(x);se()}const Se={};c&1&&(Se.disabled=!u[0].canEdit),!Pt&&c&8&&(Pt=!0,Se.value=u[3].submittedWithinDate,de(()=>Pt=!1)),ve.$set(Se),(!L||c&1)&&pt!==(pt=u[0].reportedByTH+"")&&T(qt,pt),(!L||c&1)&&dt!==(dt=u[0].reportedByEN+"")&&T($t,dt),(!L||c&1)&&gt!==(gt=wt(u[0].reportedDate,!1,"th")+"")&&T(zt,gt),(!L||c&1)&&ct!==(ct=wt(u[0].reportedDate)+"")&&T(Vt,ct),u[0].isShowSupervisorComment?Y?(Y.p(u,c),c&1&&b(Y,1)):(Y=el(u),Y.c(),b(Y,1),Y.m(A,Wt)):Y&&(ae(),k(Y,1,1,()=>{Y=null}),se()),u[0].isShowSuperGLGCComment?J?(J.p(u,c),c&1&&b(J,1)):(J=tl(u),J.c(),b(J,1),J.m(A,jt)):J&&(ae(),k(J,1,1,()=>{J=null}),se()),u[0].isShowSuperGLVPComment?K?(K.p(u,c),c&1&&b(K,1)):(K=il(u),K.c(),b(K,1),K.m(A,null)):K&&(ae(),k(K,1,1,()=>{K=null}),se()),u[8]?Q?(Q.p(u,c),c&256&&b(Q,1)):(Q=ll(u),Q.c(),b(Q,1),Q.m(je.parentNode,je)):Q&&(ae(),k(Q,1,1,()=>{Q=null}),se())},i(u){if(!L){b(E.$$.fragment,u),b(O);for(let c=0;c<ke.length;c+=1)b(F[c]);b(ve.$$.fragment,u),b(Y),b(J),b(K),b(Q),L=!0}},o(u){k(E.$$.fragment,u),k(O),F=F.filter(Boolean);for(let c=0;c<F.length;c+=1)k(F[c]);k(ve.$$.fragment,u),k(Y),k(J),k(K),k(Q),L=!1},d(u){u&&q(t),ue.d(),u&&q(U),u&&q(N),H(E),u&&q(X),u&&q(A),O&&O.d(),Sl(F,u),e[17](null),H(ve),Y&&Y.d(),J&&J.d(),K&&K.d(),u&&q(Ot),Q&&Q.d(u),u&&q(je)}}}function Ml(e){let t;return{c(){t=p("div"),t.textContent="New Report"},m(i,l){P(i,t,l)},p:ol,d(i){i&&q(t)}}}function Wl(e){let t,i,l=e[0].reportNumber+"",s;return{c(){t=p("div"),i=S("Report No. : "),s=S(l)},m(a,n){P(a,t,n),r(t,i),r(t,s)},p(a,n){n&1&&l!==(l=a[0].reportNumber+"")&&T(s,l)},d(a){a&&q(t)}}}function Zi(e){let t,i;return t=new yt({props:{icon:"ic-add",label:"Add",onClick:e[10]}}),{c(){I(t.$$.fragment)},m(l,s){R(t,l,s),i=!0},p:ol,i(l){i||(b(t.$$.fragment,l),i=!0)},o(l){k(t.$$.fragment,l),i=!1},d(l){H(t,l)}}}function xi(e){let t,i,l;function s(n){e[16](n,e[27],e[28],e[29])}let a={i:e[29],disabled:!e[0].canEdit,deleteItem:e[15],isShowGiftStatus:e[7],canGLGCAcknowledge:e[0].canGLGCAcknowledge};return e[27]!==void 0&&(a.item=e[27]),t=new ql({props:a}),le.push(()=>pe(t,"item",s)),{c(){I(t.$$.fragment)},m(n,f){R(t,n,f),l=!0},p(n,f){e=n;const w={};f&1&&(w.disabled=!e[0].canEdit),f&128&&(w.isShowGiftStatus=e[7]),f&1&&(w.canGLGCAcknowledge=e[0].canGLGCAcknowledge),!i&&f&8&&(i=!0,w.item=e[27],de(()=>i=!1)),t.$set(w)},i(n){l||(b(t.$$.fragment,n),l=!0)},o(n){k(t.$$.fragment,n),l=!1},d(n){H(t,n)}}}function el(e){let t,i;return t=new Ll({props:{data:e[0],mData:e[3],radioAcknowledgedLabel:{th:"\u0E2A\u0E48\u0E07\u0E44\u0E1B\u0E43\u0E2B\u0E49\u0E1D\u0E48\u0E32\u0E22 GLVP",en:"Sent to GLVP"}}}),{c(){I(t.$$.fragment)},m(l,s){R(t,l,s),i=!0},p(l,s){const a={};s&1&&(a.data=l[0]),s&8&&(a.mData=l[3]),t.$set(a)},i(l){i||(b(t.$$.fragment,l),i=!0)},o(l){k(t.$$.fragment,l),i=!1},d(l){H(t,l)}}}function tl(e){let t,i;return t=new Vl({props:{data:e[0],mData:e[3]}}),{c(){I(t.$$.fragment)},m(l,s){R(t,l,s),i=!0},p(l,s){const a={};s&1&&(a.data=l[0]),s&8&&(a.mData=l[3]),t.$set(a)},i(l){i||(b(t.$$.fragment,l),i=!0)},o(l){k(t.$$.fragment,l),i=!1},d(l){H(t,l)}}}function il(e){let t,i;return t=new Nl({props:{data:e[0],mData:e[3]}}),{c(){I(t.$$.fragment)},m(l,s){R(t,l,s),i=!0},p(l,s){const a={};s&1&&(a.data=l[0]),s&8&&(a.mData=l[3]),t.$set(a)},i(l){i||(b(t.$$.fragment,l),i=!0)},o(l){k(t.$$.fragment,l),i=!1},d(l){H(t,l)}}}function ll(e){let t,i,l,s,a=e[0].canSubmit&&nl(e);return l=new yt({props:{label:"Cancel",primary:!1,outline:!0,isLoading:e[4],width:72,onClick:e[14]}}),{c(){t=p("div"),a&&a.c(),i=_(),I(l.$$.fragment),d(t,"class","flex gap-2 mx-auto")},m(n,f){P(n,t,f),a&&a.m(t,null),r(t,i),R(l,t,null),s=!0},p(n,f){n[0].canSubmit?a?(a.p(n,f),f&1&&b(a,1)):(a=nl(n),a.c(),b(a,1),a.m(t,i)):a&&(ae(),k(a,1,1,()=>{a=null}),se());const w={};f&16&&(w.isLoading=n[4]),l.$set(w)},i(n){s||(b(a),b(l.$$.fragment,n),s=!0)},o(n){k(a),k(l.$$.fragment,n),s=!1},d(n){n&&q(t),a&&a.d(),H(l)}}}function nl(e){let t,i,l,s=e[0].canEdit&&rl(e);return i=new yt({props:{label:"Submit",isLoading:e[4],width:122,onClick:e[13]}}),{c(){s&&s.c(),t=_(),I(i.$$.fragment)},m(a,n){s&&s.m(a,n),P(a,t,n),R(i,a,n),l=!0},p(a,n){a[0].canEdit?s?(s.p(a,n),n&1&&b(s,1)):(s=rl(a),s.c(),b(s,1),s.m(t.parentNode,t)):s&&(ae(),k(s,1,1,()=>{s=null}),se());const f={};n&16&&(f.isLoading=a[4]),i.$set(f)},i(a){l||(b(s),b(i.$$.fragment,a),l=!0)},o(a){k(s),k(i.$$.fragment,a),l=!1},d(a){s&&s.d(a),a&&q(t),H(i,a)}}}function rl(e){let t,i;return t=new yt({props:{label:"Save as Draft",outline:!0,isLoading:e[4],width:122,onClick:e[12]}}),{c(){I(t.$$.fragment)},m(l,s){R(t,l,s),i=!0},p(l,s){const a={};s&16&&(a.isLoading=l[4]),t.$set(a)},i(l){i||(b(t.$$.fragment,l),i=!0)},o(l){k(t.$$.fragment,l),i=!1},d(l){H(t,l)}}}function jl(e){let t,i,l,s;i=new Gl({props:{menu:Ge.giftRegistrationReporting,showIcon:!1,highlightColor:e[9].bgColor,nameTH:"\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E02\u0E2D\u0E07\u0E02\u0E27\u0E31\u0E0D",nameEN:"Gift Registration Form"}});let a=e[0]&&Xi(e);return{c(){t=p("div"),I(i.$$.fragment),l=_(),a&&a.c(),d(t,"class","space-y-2 bg-scheme-main _g-card-body _card-body")},m(n,f){P(n,t,f),R(i,t,null),r(t,l),a&&a.m(t,null),s=!0},p(n,f){n[0]?a?(a.p(n,f),f&1&&b(a,1)):(a=Xi(n),a.c(),b(a,1),a.m(t,null)):a&&(ae(),k(a,1,1,()=>{a=null}),se())},i(n){s||(b(i.$$.fragment,n),b(a),s=!0)},o(n){k(i.$$.fragment,n),k(a),s=!1},d(n){n&&q(t),H(i),a&&a.d()}}}function Ol(e){let t,i,l,s;t=new bl({props:{breadcrumbs:e[2],isShowLoading:e[1],$$slots:{default:[jl]},$$scope:{ctx:e}}});let a={};return l=new Al({props:a}),e[19](l),{c(){I(t.$$.fragment),i=_(),I(l.$$.fragment)},m(n,f){R(t,n,f),P(n,i,f),R(l,n,f),s=!0},p(n,[f]){const w={};f&4&&(w.breadcrumbs=n[2]),f&2&&(w.isShowLoading=n[1]),f&1073742297&&(w.$$scope={dirty:f,ctx:n}),t.$set(w);const m={};l.$set(m)},i(n){s||(b(t.$$.fragment,n),b(l.$$.fragment,n),s=!0)},o(n){k(t.$$.fragment,n),k(l.$$.fragment,n),s=!1},d(n){H(t,n),n&&q(i),e[19](null),H(l,n)}}}function al(){const e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function Yl(e,t,i){let l,s;const a=Yi.reportId,n=Yi.parent,f=Mi[n];let w=!0,m=[{route:Wi.HOME,label:Mi[Ge.home].nameEN},{route:f.route,label:f.nameEN}],g,v,D,G,z,U;_l(()=>{a===null?z=Promise.resolve(!0):z=ye.CheckAccessPrivilege({reportId:a}),z.then(h=>{h?o():(i(1,w=!1),G.error("You don't have privilege").then(()=>{Yt(f.route)}))})});function N(h){var M;i(0,g=h),n===Ge.giftRegistrationList&&(i(0,g.canEdit=!1,g),i(0,g.canSupervisorAcknowledge=!1,g),i(0,g.canGLVPAcknowledge=!1,g),i(0,g.canGLGCAcknowledge=!1,g)),i(3,v=zi({},g)),i(3,v.giftItems=(M=v.giftItems)!=null?M:[],v),v.giftItems.length===0&&E(),v.submittedWithinDate||i(3,v.submittedWithinDate=al(),v)}function o(){ye.GetReportDetail({reportId:a}).then(h=>{N(h),g&&i(2,m=[...m,{label:g.reportNumber||"New Report"}])}).finally(()=>{i(1,w=!1)})}function E(){i(3,v.giftItems=[...v.giftItems,{name:"",receivedFrom:"",giftValue:0,submittedDate:al()}],v)}function X(h){!g.canEdit||i(3,v.giftItems=v.giftItems.filter((M,re)=>re!==h),v)}function A(){i(4,D=!0),ye.SaveAsDraftReport({report:v}).then(h=>{h&&(a===null&&h.id?G.success("Save draft Successfully").then(()=>{Yt(Wi.GiftRegistrationDetail,{reportId:h.id,parent:Ge.giftRegistrationReporting})}):(N(h),yl.success("Save draft Successfully")))}).finally(()=>i(4,D=!1))}function Z(h){if(h===be.ApproverStatus.Acknowledged)return ye.ApproveReport;if(h===be.ApproverStatus.Rejected)return ye.RejectReport}function te(){var M,re,ie,ge,ce;let h;if(g.canEdit)U.checkValidity()?h=ye.SubmitReport:G.error("\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E1A\u0E16\u0E49\u0E27\u0E19","<span class='text-primary'>Please complete the form</span>");else if(g.canSupervisorAcknowledge){if(!v.supervisorApproverStatus.key){G.error("\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E1A\u0E16\u0E49\u0E27\u0E19","<span class='text-primary'>Please complete the form</span>");return}if(v.supervisorApproverStatus.key===be.ApproverStatus.Rejected&&!((M=v.supervisorComment)!=null&&M.trim())){G.error("\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E1A\u0E16\u0E49\u0E27\u0E19","<span class='text-primary'>Please complete the form</span>");return}h=Z((re=v.supervisorApproverStatus)==null?void 0:re.key)}else if(g.canGLGCAcknowledge){if(!((ie=v.glgcReceiveBy)!=null&&ie.trim())){G.error("\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E43\u0E2B\u0E49\u0E04\u0E23\u0E1A\u0E16\u0E49\u0E27\u0E19","<span class='text-primary'>Please complete the form</span>");return}h=Z((ge=v.glgcApproverStatus)==null?void 0:ge.key)}else g.canGLVPAcknowledge?h=Z((ce=v.glvpApproverStatus)==null?void 0:ce.key):s&&(h=ye.ApproveReport);h!==void 0&&(i(4,D=!0),h({report:v}).then(B=>{B&&G.success("Submit Successfully").then(()=>{ee()})}).finally(()=>{i(4,D=!1),h=void 0}))}function ee(){Yt(f.route)}function me(){ee()}const C=h=>X(h);function ne(h,M,re,ie){re[ie]=h,i(3,v)}function V(h){le[h?"unshift":"push"](()=>{U=h,i(6,U)})}function _e(h){e.$$.not_equal(v.submittedWithinDate,h)&&(v.submittedWithinDate=h,i(3,v))}function we(h){le[h?"unshift":"push"](()=>{G=h,i(5,G)})}return e.$$.update=()=>{var h,M;e.$$.dirty&1&&i(8,l=n!==Ge.giftRegistrationList||n===Ge.giftRegistrationList&&((h=g==null?void 0:g.status)==null?void 0:h.key)===be.ReportStatus.Success),e.$$.dirty&1&&i(7,s=n===Ge.giftRegistrationList&&((M=g==null?void 0:g.status)==null?void 0:M.key)===be.ReportStatus.Success)},[g,w,m,v,D,G,U,s,l,f,E,X,A,te,me,C,ne,V,_e,we]}class Jl extends ht{constructor(t){super(),kt(this,t,Yl,Ol,St,{})}}new Jl({target:document.getElementById("app")});
