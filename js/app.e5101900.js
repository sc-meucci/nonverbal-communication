(function(e){function t(t){for(var n,i,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},o={app:0},r=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"48652939"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=n);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var c=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",c.name="ChunkLoadError",c.type=n,c.request=r,a[1](c)}o[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0370":function(e,t,a){e.exports=a.p+"img/mouth.1a5a428c.webp"},"08d3":function(e,t,a){},"2ee8":function(e,t,a){e.exports=a.p+"img/facial-expressions1.d84347b1.jpg"},"3af2":function(e,t,a){e.exports=a.p+"img/expressions.a7295825.webp"},"406a":function(e,t,a){e.exports=a.p+"img/facial-expressions.b73587c3.webp"},4233:function(e,t,a){e.exports=a.p+"img/gestures-banner.eec144d4.png"},5436:function(e,t,a){e.exports=a.p+"img/eyes.36bc6198.gif"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("navbar"),a("v-content",[a("router-view")],1),a("AppFooter")],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{flat:"",app:""}},[n("v-container",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"auto"}},[n("v-img",{staticClass:"mr-5",attrs:{src:a("cf05"),height:"36",width:"36","max-width":"36"},on:{click:function(t){return e.$vuetify.goTo(0)}}})],1),e._l(e.links,(function(t,a){return n("v-col",{key:a,staticClass:"px-md-3 px-0",attrs:{cols:"3",md:"auto"}},[n("v-btn",{attrs:{text:"",to:t.to,small:e.$vuetify.breakpoint.smAndDown}},[e._v(e._s(t.text))])],1)}))],2)],1)],1)},s=[],l={name:"Navbar",data:function(){return{links:[{to:"/gesti",text:"I Gesti"},{to:"/volto",text:"Il linguaggio del volto"}]}},methods:{onClick:function(e,t){e.stopPropagation(),!t.to&&t.href&&this.$vuetify.goTo(t.href)}}},c=l,u=(a("6598"),a("2877")),p=a("6544"),d=a.n(p),f=a("40dc"),m=a("8336"),v=a("62ad"),g=a("a523"),b=a("adda"),h=a("0fd9"),x=Object(u["a"])(c,i,s,!1,null,"e5614866",null),y=x.exports;d()(x,{VAppBar:f["a"],VBtn:m["a"],VCol:v["a"],VContainer:g["a"],VImg:b["a"],VRow:h["a"]});var _=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{staticClass:"font-weight-medium"},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e._v(" "+e._s((new Date).getFullYear())+" — "),a("strong",[e._v("Simone Carletti")])])],1)},w=[],C={name:"AppFooter"},j=C,A=a("553a"),O=Object(u["a"])(j,_,w,!1,null,null,null),V=O.exports;d()(O,{VCol:v["a"],VFooter:A["a"]});var z={name:"App",components:{Navbar:y,AppFooter:V},data:function(){return{}}},k=z,P=a("7496"),E=a("a75b"),S=Object(u["a"])(k,o,r,!1,null,null,null),$=S.exports;d()(S,{VApp:P["a"],VContent:E["a"]});a("d3b7");var T=a("8c4f"),q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Page",{attrs:{banner:"facial-expressions.png"},scopedSlots:e._u([{key:"quote",fn:function(){return[e._v(' "La mimica facciale è una parte della cinesica che riguarda il modo in cui si altera il volto delle persone. Gli esseri umani lasciano trasparire anche in questo modo il loro pensiero e le loro emozioni, in quanto la mimica facciale è difficile da controllare spontaneamente." '),a("span",{staticClass:"overline"},[e._v("[Wikipedia]")])]},proxy:!0}])},[a("AppArticle",{attrs:{img:"expressions.webp"}},[e._v(" Pensa per un momento a quanto una persona è in grado di trasmettere solo con un'espressione facciale. "),a("br"),a("br"),e._v(" Un sorriso può indicare approvazione o felicità. La posizione delle sopracciglia può segnalare disapprovazione o infelicità. In alcuni casi, le nostre espressioni facciali possono rivelare i nostri veri sentimenti per una situazione particolare. Anche se dici di sentirti bene, l'espressione sulla tua faccia potrebbe dire diversamente. "),a("br"),a("br"),e._v("L'espressione sul volto di una persona può determinare se ci fidiamo o crediamo a ciò che l'individuo sta dicendo. Uno studio ha scoperto che l'espressione facciale più affidabile comporta un leggero sollevamento delle sopracciglia e un lieve sorriso. Questa espressione, hanno suggerito i ricercatori, trasmette cordialità e sicurezza. ")]),a("AppArticle",{attrs:{img:"eyes.gif",invert:""}},[e._v(" Gli occhi sono un importantissima parte della comunicazione non verbale. Gli aspetti fondamentali sono soprattutto 3: "),a("br"),a("br"),a("ul",[a("li",[a("strong",[e._v("Lo sguardo:")]),e._v(" se durante una conversazione una persona ti guarda direttamente negli occhi, normalmente è un indicatore di attenzione. Tuttavia, se il contatto è troppo prolungato potrebbe essere considerato minaccioso. D'altra parte, interrompere continuamente il contatto visivo e spesso distogliere lo sguardo potrebbe indicare che la persona è distratta, o disagio. ")]),a("li",[a("strong",[e._v("Sbattere le palpabre:")]),e._v(" generalmente le persone sono solite a sbattere maggiormente le palpebre quando sono nervose o a disagio ")]),a("li",[a("strong",[e._v("Dilatazione delle pupille:")]),e._v(" la dilatazione delle pupille può essere uno dei segnali degli occhi più impercettibile. Forti cambiamenti nelle emozioni possono far variare questo elemento. Per esempio delle pupille fortemente dilatate potrebbero indicare un'interesse di una persona nei confronti di un'altra. ")])])]),a("AppArticle",{attrs:{img:"mouth.webp"}},[e._v(" Ultimo ma non meno importante sono i movimenti e le espressioni della bocca. "),a("br"),a("br"),e._v(" Sorridere è forse uno dei più grandi segnali del linguaggio del corpo, ma i sorrisi possono anche essere interpretati in molti modi. Un sorriso può essere genuino o può essere usato per esprimere falsa felicità, sarcasmo o persino cinismo. Alcuni degli aspetti più importanti sono: "),a("br"),a("br"),a("ul",[a("li",[a("strong",[e._v("Mordersi le labbra: ")]),e._v("questo potrebbe essere un segnale di ansia, preoccupazione o stress.")]),a("li",[a("strong",[e._v('Bocca "alzata" o "abbassata": ')]),e._v(" leggeri cambiamenti della posizione della bocca potrebbero essere indicatori di come una persona si sente. Solitamente quando la bocca è leggermente alzata potrebbe significare che la persona si sente felice o ottimista. D'altra parte, una bocca leggermente rivolta verso il basso può essere un indicatore di tristezza, disapprovazione o persino una smorfia. ")])])])],1)},F=[],D=a("a94f"),U=a("9973"),L={name:"FacialExpressions",components:{AppArticle:D["a"],Page:U["a"]},data:function(){return{}}},I=L,M=Object(u["a"])(I,q,F,!1,null,null,null),B=M.exports;n["a"].use(T["a"]);var G=[{path:"/",redirect:function(){return"/gesti"}},{path:"/volto",name:"FacialExpressions",component:B},{path:"/gesti",name:"Gestures",component:function(){return a.e("about").then(a.bind(null,"9cfa"))}}],N=new T["a"]({mode:"history",base:"/",routes:G,scrollBehavior:function(){return{x:0,y:0}}}),R=N,J=a("f309");n["a"].use(J["a"]);var Q=new J["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:R,vuetify:Q,render:function(e){return e($)}}).$mount("#app")},6598:function(e,t,a){"use strict";var n=a("cd17"),o=a.n(n);o.a},7584:function(e,t,a){var n={"./expressions.webp":"3af2","./eyes.gif":"5436","./facial-expressions.png":"afe0","./facial-expressions.webp":"406a","./facial-expressions1.jpg":"2ee8","./gestures-banner.png":"4233","./gestures.webp":"df2d","./italian-gestures.webp":"c5f7","./mouth.webp":"0370"};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id="7584"},9955:function(e,t,a){"use strict";var n=a("08d3"),o=a.n(n);o.a},9973:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"text-center"},[n("v-col",{staticStyle:{"min-height":"25vh"}},[n("v-img",{attrs:{src:a("7584")("./"+e.banner),"max-height":"35vh"}})],1)],1)],1),n("v-container",[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",[n("v-card",{staticClass:"mt-md-n8 mt-n5 mx-auto",attrs:{elevation:"10","max-width":e.$vuetify.breakpoint.lgAndUp?"95%":"100%"}},[n("v-card-text",[n("div",{staticClass:"font-italic font-weight-light pa-md-5 pa-3 text-justify",class:e.$vuetify.breakpoint.mdAndUp?"display-1":"headline"},[e._t("quote")],2),e._t("default")],2)],1)],1)],1)],1)],1)},o=[],r={name:"Page",props:{banner:{type:String,default:""}}},i=r,s=a("2877"),l=a("6544"),c=a.n(l),u=a("b0af"),p=a("99d9"),d=a("62ad"),f=a("a523"),m=a("adda"),v=a("0fd9"),g=Object(s["a"])(i,n,o,!1,null,null,null);t["a"]=g.exports;c()(g,{VCard:u["a"],VCardText:p["a"],VCol:d["a"],VContainer:f["a"],VImg:m["a"],VRow:v["a"]})},a94f:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{staticClass:"my-8",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"6","align-self":"center",order:!e.invert||e.$vuetify.breakpoint.smAndDown?"first":"last"}},[n("v-img",{attrs:{src:a("7584")("./"+e.img),"aspect-ratio":1.5,contain:""}})],1),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",{attrs:{elevation:"3",height:"100%","min-height":"100%"}},[n("v-card-text",{staticClass:"pa-8 text-justify articleText"},[e._t("default")],2)],1)],1)],1)},o=[],r={name:"AppArticle",props:{img:{type:String,default:""},invert:{type:Boolean,default:!1}}},i=r,s=(a("9955"),a("2877")),l=a("6544"),c=a.n(l),u=a("b0af"),p=a("99d9"),d=a("62ad"),f=a("adda"),m=a("0fd9"),v=Object(s["a"])(i,n,o,!1,null,"300ae737",null);t["a"]=v.exports;c()(v,{VCard:u["a"],VCardText:p["a"],VCol:d["a"],VImg:f["a"],VRow:m["a"]})},afe0:function(e,t,a){e.exports=a.p+"img/facial-expressions.99b20296.png"},c5f7:function(e,t,a){e.exports=a.p+"img/italian-gestures.c11de322.webp"},cd17:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.9ad3c647.png"},df2d:function(e,t,a){e.exports=a.p+"img/gestures.dc3a3f2a.webp"}});
//# sourceMappingURL=app.e5101900.js.map