import{c as M,h as F,a as ee}from"./render.20875a8e.js";import{c as f,i as _,r as R,g as A,Q as te,B as K,R as oe,f as N,S as z,w as I,e as le,n as X,s as b,l as v,U as ne,D as ie}from"./index.09f3c0f1.js";import{c as re,d as se,g as ae,e as Y,v as ue,f as ce}from"./QBtn.f94d461c.js";const de={dark:{type:Boolean,default:null}};function fe(e,t){return f(()=>e.dark===null?t.dark.isActive:e.dark)}var qe=M({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const o=f(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>_("div",{class:o.value},F(t.default))}}),Te=M({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const o=f(()=>parseInt(e.lines,10)),l=f(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),n=f(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>_("div",{style:n.value,class:l.value},F(t.default))}}),Le=M({name:"QItem",props:{...de,...re,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:o}){const{proxy:{$q:l}}=A(),n=fe(e,l),{hasLink:u,linkAttrs:s,linkClass:a,linkTag:d,navigateOnClick:T}=se(),c=R(null),p=R(null),h=f(()=>e.clickable===!0||u.value===!0||e.tag==="label"),m=f(()=>e.disable!==!0&&h.value===!0),y=f(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(n.value===!0?" q-item--dark":"")+(u.value===!0&&e.active===null?a.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),L=f(()=>{if(e.insetLevel===void 0)return null;const r=l.lang.rtl===!0?"Right":"Left";return{["padding"+r]:16+e.insetLevel*56+"px"}});function S(r){m.value===!0&&(p.value!==null&&(r.qKeyEvent!==!0&&document.activeElement===c.value?p.value.focus():document.activeElement===p.value&&c.value.focus()),T(r))}function k(r){if(m.value===!0&&te(r,13)===!0){K(r),r.qKeyEvent=!0;const W=new MouseEvent("click",r);W.qKeyEvent=!0,c.value.dispatchEvent(W)}o("keyup",r)}function i(){const r=ee(t.default,[]);return m.value===!0&&r.unshift(_("div",{class:"q-focus-helper",tabindex:-1,ref:p})),r}return()=>{const r={ref:c,class:y.value,style:L.value,role:"listitem",onClick:S,onKeyup:k};return m.value===!0?(r.tabindex=e.tabindex||"0",Object.assign(r,s.value)):h.value===!0&&(r["aria-disabled"]="true"),_(d.value,r,i())}}});const me=[null,document,document.body,document.scrollingElement,document.documentElement];function Se(e,t){let o=ae(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return me.includes(o)?window:o}function j(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function G(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function J(e,t,o=0){const l=arguments[3]===void 0?performance.now():arguments[3],n=j(e);if(o<=0){n!==t&&H(e,t);return}requestAnimationFrame(u=>{const s=u-l,a=n+(t-n)/Math.max(s,o)*s;H(e,a),a!==t&&J(e,t,o-s,u)})}function Z(e,t,o=0){const l=arguments[3]===void 0?performance.now():arguments[3],n=G(e);if(o<=0){n!==t&&B(e,t);return}requestAnimationFrame(u=>{const s=u-l,a=n+(t-n)/Math.max(s,o)*s;B(e,a),a!==t&&Z(e,t,o-s,u)})}function H(e,t){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t);return}e.scrollTop=t}function B(e,t){if(e===window){window.scrollTo(t,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=t}function ke(e,t,o){if(o){J(e,t,o);return}H(e,t)}function Ee(e,t,o){if(o){Z(e,t,o);return}B(e,t)}let E;function xe(){if(E!==void 0)return E;const e=document.createElement("p"),t=document.createElement("div");Y(e,{width:"100%",height:"200px"}),Y(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let l=e.offsetWidth;return o===l&&(l=t.clientWidth),t.remove(),E=o-l,E}function ve(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}function _e(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),oe.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Ce(e,t,o){return o<=t?t:Math.min(o,Math.max(t,e))}function Pe(e,t,o){if(o<=t)return t;const l=o-t+1;let n=t+(e-t)%l;return n<t&&(n=l+n),n===0?0:n}function Ve(e,t,o){let l;function n(){l!==void 0&&(z.remove(l),l=void 0)}return N(()=>{e.value===!0&&n()}),{removeFromHistory:n,addToHistory(){l={condition:()=>o.value===!0,handler:t},z.add(l)}}}const He={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Be=["beforeShow","show","beforeHide","hide"];function Me({showing:e,canShow:t,hideOnRouteChange:o,handleShow:l,handleHide:n,processOnMount:u}){const s=A(),{props:a,emit:d,proxy:T}=s;let c;function p(i){e.value===!0?y(i):h(i)}function h(i){if(a.disable===!0||i!==void 0&&i.qAnchorHandled===!0||t!==void 0&&t(i)!==!0)return;const r=a["onUpdate:modelValue"]!==void 0;r===!0&&(d("update:modelValue",!0),c=i,X(()=>{c===i&&(c=void 0)})),(a.modelValue===null||r===!1)&&m(i)}function m(i){e.value!==!0&&(e.value=!0,d("beforeShow",i),l!==void 0?l(i):d("show",i))}function y(i){if(a.disable===!0)return;const r=a["onUpdate:modelValue"]!==void 0;r===!0&&(d("update:modelValue",!1),c=i,X(()=>{c===i&&(c=void 0)})),(a.modelValue===null||r===!1)&&L(i)}function L(i){e.value!==!1&&(e.value=!1,d("beforeHide",i),n!==void 0?n(i):d("hide",i))}function S(i){a.disable===!0&&i===!0?a["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):i===!0!==e.value&&(i===!0?m:L)(c)}I(()=>a.modelValue,S),o!==void 0&&ue(s)===!0&&I(()=>T.$route.fullPath,()=>{o.value===!0&&e.value===!0&&y()}),u===!0&&le(()=>{S(a.modelValue)});const k={show:h,hide:y,toggle:p};return Object.assign(T,k),k}let g=0,C,P,q,V=!1,O,Q,U,w=null;function we(e){pe(e)&&K(e)}function pe(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=ne(e),o=e.shiftKey&&!e.deltaX,l=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),n=o||l?e.deltaY:e.deltaX;for(let u=0;u<t.length;u++){const s=t[u];if(ve(s,l))return l?n<0&&s.scrollTop===0?!0:n>0&&s.scrollTop+s.clientHeight===s.scrollHeight:n<0&&s.scrollLeft===0?!0:n>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function $(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function x(e){V!==!0&&(V=!0,requestAnimationFrame(()=>{V=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:l}=document.scrollingElement;(q===void 0||t!==window.innerHeight)&&(q=o-t,document.scrollingElement.scrollTop=l),l>q&&(document.scrollingElement.scrollTop-=Math.ceil((l-q)/8))}))}function D(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:n}=window.getComputedStyle(t);C=G(window),P=j(window),O=t.style.left,Q=t.style.top,U=window.location.href,t.style.left=`-${C}px`,t.style.top=`-${P}px`,n!=="hidden"&&(n==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,b.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",x,v.passiveCapture),window.visualViewport.addEventListener("scroll",x,v.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",$,v.passiveCapture))}b.is.desktop===!0&&b.is.mac===!0&&window[`${e}EventListener`]("wheel",we,v.notPassive),e==="remove"&&(b.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",x,v.passiveCapture),window.visualViewport.removeEventListener("scroll",x,v.passiveCapture)):window.removeEventListener("scroll",$,v.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=O,t.style.top=Q,window.location.href===U&&window.scrollTo(C,P),q=void 0)}function be(e){let t="add";if(e===!0){if(g++,w!==null){clearTimeout(w),w=null;return}if(g>1)return}else{if(g===0||(g--,g>0))return;if(t="remove",b.is.ios===!0&&b.is.nativeMobile===!0){w!==null&&clearTimeout(w),w=setTimeout(()=>{D(t),w=null},100);return}}D(t)}function Ae(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,be(t))}}}function We(){let e=null;const t=A();function o(){e!==null&&(clearTimeout(e),e=null)}return ie(o),N(o),{removeTimeout:o,registerTimeout(l,n){o(),ce(t)===!1&&(e=setTimeout(l,n))}}}export{Le as Q,fe as a,j as b,G as c,_e as d,Ce as e,ke as f,Se as g,He as h,Be as i,We as j,Me as k,Ve as l,Ae as m,xe as n,qe as o,Te as p,Pe as q,Ee as s,de as u};
