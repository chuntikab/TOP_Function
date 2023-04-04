import{S as We,i as Be,s as Oe,L as qe,c as K,m as J,t as h,a as R,d as Q,R as Le,x as Ae,M as he,o as xe,e as i,b as _,g as c,h as T,j as o,q as $e,r as Ce,n as z,z as ke,A as ye,w as Ke,B as Je,C as Re,D as je,y as S,f as V,E as De,l as Se,F as se,k as oe,G as Fe,H as Pe}from"./Layout.js";import{C as fe}from"./CG_COI_Reporting.service.js";import{f as O,P as Qe,B as Ue}from"./Button.js";import{C as Ee,T as Ve}from"./Table.js";import{M as Xe,R as Ye}from"./ReportDetailModal.js";import{A as Ne}from"./AvatarIcon.js";function Ze(r){let e,l,t,a,n,D,b,v;t=new Ne({props:{size:42,icon:"ic-new-employee",bgColor:"bg-report-employee"}});let u={ctx:r,current:null,token:null,hasCatch:!1,pending:ot,then:lt,catch:tt,blocks:[,,,]};return Re(b=r[1],u),{c(){e=i("div"),l=i("div"),K(t.$$.fragment),a=_(),n=i("div"),n.textContent="New Employee",D=_(),u.block.c(),c(n,"class","ml-2 text-secondary text-size-xlarge font-weight-bold"),c(l,"class","flex items-center"),c(e,"class","p-2 pt-3 desktop:px-7 _inner-card svelte-15du34e")},m(p,f){T(p,e,f),o(e,l),J(t,l,null),o(l,a),o(l,n),o(e,D),u.block.m(e,u.anchor=null),u.mount=()=>e,u.anchor=null,v=!0},p(p,f){r=p,u.ctx=r,f&2&&b!==(b=r[1])&&Re(b,u)||je(u,r,f)},i(p){v||(h(t.$$.fragment,p),h(u.block),v=!0)},o(p){R(t.$$.fragment,p);for(let f=0;f<3;f+=1){const A=u.blocks[f];R(A)}v=!1},d(p){p&&z(e),Q(t),u.block.d(),u.token=null,u=null}}}function et(r){let e;return{c(){e=i("div")},m(l,t){T(l,e,t)},p:S,i:S,o:S,d(l){l&&z(e)}}}function tt(r){return{c:S,m:S,p:S,i:S,o:S,d:S}}function lt(r){let e,l,t=r[0]&&Me(r);return{c(){t&&t.c(),e=De()},m(a,n){t&&t.m(a,n),T(a,e,n),l=!0},p(a,n){a[0]?t?(t.p(a,n),n&1&&h(t,1)):(t=Me(a),t.c(),h(t,1),t.m(e.parentNode,e)):t&&($e(),R(t,1,1,()=>{t=null}),Ce())},i(a){l||(h(t),l=!0)},o(a){R(t),l=!1},d(a){t&&t.d(a),a&&z(e)}}}function Me(r){let e,l,t,a,n,D,b,v,u,p,f,A,y,H=r[0].supervisorName+"",B,Z,N,j,ee,F,$,W,L,m,I,P,U=r[0].status.value+"",te,E,ne,q,d,M,G,x=O(r[0].startDuration)+"",le,me,re=O(r[0].endDuration)+"",ce,_e,X,de,ge,ae,ie=O(r[0].submittedDate)+"",ue,pe,Y,C,ve,we,k=(r[0].status.key===se.ApproverStatus.WaitingForSubmit||r[0].status.key===se.ApproverStatus.Rejected)&&Te();v=new Fe({props:{label:r[0].reportNumber,onClick:r[14]}});let w=r[0].canEdit&&ze(r);return{c(){e=i("div"),l=i("div"),t=i("div"),a=i("span"),a.textContent="Report Number :",n=_(),k&&k.c(),D=_(),b=i("div"),K(v.$$.fragment),u=_(),p=i("div"),f=i("div"),f.innerHTML='<span class="_label svelte-15du34e">Supervisor Name</span>',A=_(),y=i("div"),B=V(H),Z=_(),N=i("div"),j=i("div"),j.innerHTML='<span class="_label svelte-15du34e">Status</span>',ee=_(),F=i("div"),$=i("div"),W=i("span"),L=i("i"),I=_(),P=i("span"),te=V(U),ne=_(),q=i("div"),d=i("div"),d.innerHTML='<span class="_label svelte-15du34e">Duration</span>',M=_(),G=i("div"),le=V(x),me=V(" - "),ce=V(re),_e=_(),X=i("div"),de=i("div"),de.innerHTML='<span class="_label svelte-15du34e">Submitted Date</span>',ge=_(),ae=i("div"),ue=V(ie),pe=_(),w&&w.c(),Y=De(),c(a,"class","_label svelte-15du34e"),c(b,"class","font-weight-bold"),c(y,"class","font-weight-bold"),c(L,"class",m="ic "+ke[r[0].status.key]+" svelte-15du34e"),c(W,"class","icon"),c($,"class",E="icon-text "+ye[r[0].status.key]+" svelte-15du34e"),c(F,"class","font-weight-bold"),c(N,"class","cursor-pointer"),c(G,"class","font-weight-bold"),c(ae,"class","font-weight-bold"),c(e,"class","grid grid-cols-2 tablet:grid-cols-4 desktop:grid-cols-5 gap-y-3 mt-4")},m(s,g){T(s,e,g),o(e,l),o(l,t),o(t,a),o(t,n),k&&k.m(t,null),o(l,D),o(l,b),J(v,b,null),o(e,u),o(e,p),o(p,f),o(p,A),o(p,y),o(y,B),o(e,Z),o(e,N),o(N,j),o(N,ee),o(N,F),o(F,$),o($,W),o(W,L),o($,I),o($,P),o(P,te),o(e,ne),o(e,q),o(q,d),o(q,M),o(q,G),o(G,le),o(G,me),o(G,ce),o(e,_e),o(e,X),o(X,de),o(X,ge),o(X,ae),o(ae,ue),T(s,pe,g),w&&w.m(s,g),T(s,Y,g),C=!0,ve||(we=Se(N,"click",r[15]),ve=!0)},p(s,g){s[0].status.key===se.ApproverStatus.WaitingForSubmit||s[0].status.key===se.ApproverStatus.Rejected?k||(k=Te(),k.c(),k.m(t,null)):k&&(k.d(1),k=null);const be={};g&1&&(be.label=s[0].reportNumber),g&1&&(be.onClick=s[14]),v.$set(be),(!C||g&1)&&H!==(H=s[0].supervisorName+"")&&oe(B,H),(!C||g&1&&m!==(m="ic "+ke[s[0].status.key]+" svelte-15du34e"))&&c(L,"class",m),(!C||g&1)&&U!==(U=s[0].status.value+"")&&oe(te,U),(!C||g&1&&E!==(E="icon-text "+ye[s[0].status.key]+" svelte-15du34e"))&&c($,"class",E),(!C||g&1)&&x!==(x=O(s[0].startDuration)+"")&&oe(le,x),(!C||g&1)&&re!==(re=O(s[0].endDuration)+"")&&oe(ce,re),(!C||g&1)&&ie!==(ie=O(s[0].submittedDate)+"")&&oe(ue,ie),s[0].canEdit?w?w.p(s,g):(w=ze(s),w.c(),w.m(Y.parentNode,Y)):w&&(w.d(1),w=null)},i(s){C||(h(v.$$.fragment,s),C=!0)},o(s){R(v.$$.fragment,s),C=!1},d(s){s&&z(e),k&&k.d(),Q(v),s&&z(pe),w&&w.d(s),s&&z(Y),ve=!1,we()}}}function Te(r){let e;return{c(){e=i("div"),e.textContent="1",c(e,"class","_badge svelte-15du34e")},m(l,t){T(l,e,t)},d(l){l&&z(e)}}}function ze(r){let e,l,t,a;return{c(){e=i("div"),l=i("span"),l.innerHTML='<i class="ic ic-edit"></i>',c(l,"class","icon _icon-edit tooltip svelte-15du34e"),c(l,"data-tip","Edit"),c(e,"class","text-right")},m(n,D){T(n,e,D),o(e,l),t||(a=Se(l,"click",r[16]),t=!0)},p:S,d(n){n&&z(e),t=!1,a()}}}function ot(r){let e,l;return e=new Pe({props:{isShow:!0}}),{c(){K(e.$$.fragment)},m(t,a){J(e,t,a),l=!0},p:S,i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}function rt(r){let e,l,t,a,n,D,b,v;t=new Ne({props:{size:42,icon:"ic-annual",bgColor:"bg-report-annual"}});let u={ctx:r,current:null,token:null,hasCatch:!1,pending:st,then:nt,catch:it,blocks:[,,,]};return Re(b=r[4],u),{c(){e=i("div"),l=i("div"),K(t.$$.fragment),a=_(),n=i("div"),n.textContent="Annual",D=_(),u.block.c(),c(n,"class","ml-2 text-secondary text-size-xlarge font-weight-bold"),c(l,"class","flex items-center"),c(e,"class","p-2 pt-3 desktop:px-7 _inner-card _annual svelte-15du34e")},m(p,f){T(p,e,f),o(e,l),J(t,l,null),o(l,a),o(l,n),o(e,D),u.block.m(e,u.anchor=null),u.mount=()=>e,u.anchor=null,v=!0},p(p,f){r=p,u.ctx=r,f&16&&b!==(b=r[4])&&Re(b,u)||je(u,r,f)},i(p){v||(h(t.$$.fragment,p),h(u.block),v=!0)},o(p){R(t.$$.fragment,p);for(let f=0;f<3;f+=1){const A=u.blocks[f];R(A)}v=!1},d(p){p&&z(e),Q(t),u.block.d(),u.token=null,u=null}}}function at(r){let e;return{c(){e=i("div")},m(l,t){T(l,e,t)},p:S,i:S,o:S,d(l){l&&z(e)}}}function it(r){return{c:S,m:S,p:S,i:S,o:S,d:S}}function nt(r){let e,l,t=r[3]&&He(r);return{c(){t&&t.c(),e=De()},m(a,n){t&&t.m(a,n),T(a,e,n),l=!0},p(a,n){a[3]?t?(t.p(a,n),n&8&&h(t,1)):(t=He(a),t.c(),h(t,1),t.m(e.parentNode,e)):t&&($e(),R(t,1,1,()=>{t=null}),Ce())},i(a){l||(h(t),l=!0)},o(a){R(t),l=!1},d(a){t&&t.d(a),a&&z(e)}}}function He(r){let e,l,t,a,n,D,b,v,u,p,f,A,y,H=r[3].supervisorName+"",B,Z,N,j,ee,F,$,W,L,m,I,P,U=r[3].status.value+"",te,E,ne,q,d,M,G,x=O(r[3].startDuration)+"",le,me,re=O(r[3].endDuration)+"",ce,_e,X,de,ge,ae,ie=O(r[3].submittedDate)+"",ue,pe,Y,C,ve,we,k=(r[3].status.key===se.ApproverStatus.WaitingForSubmit||r[3].status.key===se.ApproverStatus.Rejected)&&Ie();v=new Fe({props:{label:r[3].reportNumber,onClick:r[17]}});let w=r[3].canEdit&&Ge(r);return{c(){e=i("div"),l=i("div"),t=i("div"),a=i("span"),a.textContent="Report Number :",n=_(),k&&k.c(),D=_(),b=i("div"),K(v.$$.fragment),u=_(),p=i("div"),f=i("div"),f.innerHTML='<span class="_label svelte-15du34e">Supervisor Name</span>',A=_(),y=i("div"),B=V(H),Z=_(),N=i("div"),j=i("div"),j.innerHTML='<span class="_label svelte-15du34e">Status</span>',ee=_(),F=i("div"),$=i("div"),W=i("span"),L=i("i"),I=_(),P=i("span"),te=V(U),ne=_(),q=i("div"),d=i("div"),d.innerHTML='<span class="_label svelte-15du34e">Duration</span>',M=_(),G=i("div"),le=V(x),me=V(" - "),ce=V(re),_e=_(),X=i("div"),de=i("div"),de.innerHTML='<span class="_label svelte-15du34e">Submitted Date</span>',ge=_(),ae=i("div"),ue=V(ie),pe=_(),w&&w.c(),Y=De(),c(a,"class","_label svelte-15du34e"),c(b,"class","font-weight-bold"),c(y,"class","font-weight-bold"),c(L,"class",m="ic "+ke[r[3].status.key]+" svelte-15du34e"),c(W,"class","icon"),c($,"class",E="icon-text "+ye[r[3].status.key]+" svelte-15du34e"),c(F,"class","font-weight-bold"),c(N,"class","cursor-pointer"),c(G,"class","font-weight-bold"),c(ae,"class","font-weight-bold"),c(e,"class","grid grid-cols-2 tablet:grid-cols-4 desktop:grid-cols-5 gap-y-3 mt-4")},m(s,g){T(s,e,g),o(e,l),o(l,t),o(t,a),o(t,n),k&&k.m(t,null),o(l,D),o(l,b),J(v,b,null),o(e,u),o(e,p),o(p,f),o(p,A),o(p,y),o(y,B),o(e,Z),o(e,N),o(N,j),o(N,ee),o(N,F),o(F,$),o($,W),o(W,L),o($,I),o($,P),o(P,te),o(e,ne),o(e,q),o(q,d),o(q,M),o(q,G),o(G,le),o(G,me),o(G,ce),o(e,_e),o(e,X),o(X,de),o(X,ge),o(X,ae),o(ae,ue),T(s,pe,g),w&&w.m(s,g),T(s,Y,g),C=!0,ve||(we=Se(N,"click",r[18]),ve=!0)},p(s,g){s[3].status.key===se.ApproverStatus.WaitingForSubmit||s[3].status.key===se.ApproverStatus.Rejected?k||(k=Ie(),k.c(),k.m(t,null)):k&&(k.d(1),k=null);const be={};g&8&&(be.label=s[3].reportNumber),g&8&&(be.onClick=s[17]),v.$set(be),(!C||g&8)&&H!==(H=s[3].supervisorName+"")&&oe(B,H),(!C||g&8&&m!==(m="ic "+ke[s[3].status.key]+" svelte-15du34e"))&&c(L,"class",m),(!C||g&8)&&U!==(U=s[3].status.value+"")&&oe(te,U),(!C||g&8&&E!==(E="icon-text "+ye[s[3].status.key]+" svelte-15du34e"))&&c($,"class",E),(!C||g&8)&&x!==(x=O(s[3].startDuration)+"")&&oe(le,x),(!C||g&8)&&re!==(re=O(s[3].endDuration)+"")&&oe(ce,re),(!C||g&8)&&ie!==(ie=O(s[3].submittedDate)+"")&&oe(ue,ie),s[3].canEdit?w?w.p(s,g):(w=Ge(s),w.c(),w.m(Y.parentNode,Y)):w&&(w.d(1),w=null)},i(s){C||(h(v.$$.fragment,s),C=!0)},o(s){R(v.$$.fragment,s),C=!1},d(s){s&&z(e),k&&k.d(),Q(v),s&&z(pe),w&&w.d(s),s&&z(Y),ve=!1,we()}}}function Ie(r){let e;return{c(){e=i("div"),e.textContent="1",c(e,"class","_badge svelte-15du34e")},m(l,t){T(l,e,t)},d(l){l&&z(e)}}}function Ge(r){let e,l,t,a;return{c(){e=i("div"),l=i("span"),l.innerHTML='<i class="ic ic-edit"></i>',c(l,"class","icon _icon-edit tooltip svelte-15du34e"),c(l,"data-tip","Edit"),c(e,"class","text-right")},m(n,D){T(n,e,D),o(e,l),t||(a=Se(l,"click",r[19]),t=!0)},p:S,d(n){n&&z(e),t=!1,a()}}}function st(r){let e,l;return e=new Pe({props:{isShow:!0}}),{c(){K(e.$$.fragment)},m(t,a){J(e,t,a),l=!0},p:S,i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}function ct(r){let e,l;return e=new Ye({props:{item:r[6],modal:r[7],service:fe.GetReportWorkflow}}),{c(){K(e.$$.fragment)},m(t,a){J(e,t,a),l=!0},p(t,a){const n={};a&64&&(n.item=t[6]),a&128&&(n.modal=t[7]),e.$set(n)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}function dt(r){let e,l,t,a,n,D,b,v,u,p,f,A,y,H,B,Z,N,j,ee,F,$,W,L,m;l=new Qe({props:{menu:he.coiReporting}});const I=[et,Ze],P=[];function U(d,M){return d[2]===!0&&d[0]===void 0?0:1}a=U(r),n=P[a]=I[a](r);const te=[at,rt],E=[];function ne(d,M){return d[5]===!0&&d[3]===void 0?0:1}b=ne(r),v=E[b]=te[b](r),y=new Ne({props:{size:42,icon:"ic-incident",bgColor:"bg-report-incident"}}),j=new Ue({props:{icon:"ic-add",label:"Add",isLoading:r[9],onClick:r[13]}}),$=new Ve({props:{tableConfig:r[12]}});let q={$$slots:{default:[ct]},$$scope:{ctx:r}};return L=new Xe({props:q}),r[20](L),{c(){e=i("div"),K(l.$$.fragment),t=_(),n.c(),D=_(),v.c(),u=_(),p=i("div"),f=i("div"),A=i("div"),K(y.$$.fragment),H=_(),B=i("div"),B.textContent="Incident",Z=_(),N=i("div"),K(j.$$.fragment),ee=_(),F=i("div"),K($.$$.fragment),W=_(),K(L.$$.fragment),c(B,"class","ml-2 text-secondary text-size-xlarge font-weight-bold"),c(A,"class","flex items-center"),c(f,"class","flex justify-between"),c(F,"class","mt-3"),c(p,"class","p-2 pt-3 desktop:px-7 _inner-card _incident svelte-15du34e"),c(e,"class","_g-card-body")},m(d,M){T(d,e,M),J(l,e,null),o(e,t),P[a].m(e,null),o(e,D),E[b].m(e,null),o(e,u),o(e,p),o(p,f),o(f,A),J(y,A,null),o(A,H),o(A,B),o(f,Z),o(f,N),J(j,N,null),o(p,ee),o(p,F),J($,F,null),T(d,W,M),J(L,d,M),m=!0},p(d,M){let G=a;a=U(d),a===G?P[a].p(d,M):($e(),R(P[G],1,1,()=>{P[G]=null}),Ce(),n=P[a],n?n.p(d,M):(n=P[a]=I[a](d),n.c()),h(n,1),n.m(e,D));let x=b;b=ne(d),b===x?E[b].p(d,M):($e(),R(E[x],1,1,()=>{E[x]=null}),Ce(),v=E[b],v?v.p(d,M):(v=E[b]=te[b](d),v.c()),h(v,1),v.m(e,u));const le={};M&2097344&&(le.$$scope={dirty:M,ctx:d}),L.$set(le)},i(d){m||(h(l.$$.fragment,d),h(n),h(v),h(y.$$.fragment,d),h(j.$$.fragment,d),h($.$$.fragment,d),h(L.$$.fragment,d),m=!0)},o(d){R(l.$$.fragment,d),R(n),R(v),R(y.$$.fragment,d),R(j.$$.fragment,d),R($.$$.fragment,d),R(L.$$.fragment,d),m=!1},d(d){d&&z(e),Q(l),P[a].d(),E[b].d(),Q(y),Q(j),Q($),d&&z(W),r[20](null),Q(L,d)}}}function ut(r){let e,l;return e=new qe({props:{breadcrumbs:r[8],$$slots:{default:[dt]},$$scope:{ctx:r}}}),{c(){K(e.$$.fragment)},m(t,a){J(e,t,a),l=!0},p(t,[a]){const n={};a&2097407&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){l||(h(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}function pt(r){return`<div class="icon-text">
          <span class="icon">
            <i class="ic ${ke[r.key]} ${ye[r.key]}"></i>
          </span>
          <span>${r.value}</span>
        </div>`}function vt(r,e,l){const t=[{route:Le.HOME,label:Ae[he.home].nameEN},{label:Ae[he.coiReporting].nameEN}];let a,n,D=!1,b,v,u=!1,p,f,A;function y(m){Ke(Le.COIReportDetail,{reportId:m.id,parent:he.coiReporting})}function H(m){l(6,p=m),f.open()}xe(()=>{l(1,n=fe.GetNewEmployeeReport().then(m=>{m&&l(0,a=m)}).finally(()=>{l(2,D=!0)})),l(4,v=fe.GetAnnualReport().then(m=>{m&&l(3,b=m)}).finally(()=>{l(5,u=!0)}))});const B={columns:[{name:"Report Number",prop:"reportNumber",cellTemplate:Ee.Link,onClick:(m,I)=>{y(I)}},{name:"Supervisor Name",prop:"supervisorName"},{name:"Status",prop:"status",cellClasses:"cursor-pointer",render:pt,onClick:(m,I)=>{H(I)}},{name:"Duration",prop:"duration",render:(m,I)=>`${O(I.startDuration)} - ${O(I.endDuration)}`},{name:"Submitted Date",prop:"submittedDate",cellTemplate:Ee.Date},{name:"Action",prop:"_action",actions:{isDownload:!1,onEdit:m=>{y(m)}}}],getData(m,I){return Promise.all([fe.GetIncidentReportCount(),fe.GetIncidentReports({sortByParam:I,pageParam:m})])},async deleteData(m){return fe.DeleteIncidentReport({reportId:m.id})},displayDeleteKey:"reportNumber"};function Z(){y({id:null})}const N=()=>{y(a)},j=()=>H(a),ee=()=>y(a),F=()=>{y(b)},$=()=>H(b),W=()=>y(b);function L(m){Je[m?"unshift":"push"](()=>{f=m,l(7,f)})}return[a,n,D,b,v,u,p,f,t,A,y,H,B,Z,N,j,ee,F,$,W,L]}class kt extends We{constructor(e){super(),Be(this,e,vt,ut,Oe,{})}}export{kt as A,pt as r};