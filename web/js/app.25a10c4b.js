(function(){"use strict";var e={1893:function(e,a,t){var n=t(5130),r=t(6768);function l(e,a,t,n,l,o){const i=(0,r.g2)("router-view"),u=(0,r.g2)("n-message-provider");return(0,r.uX)(),(0,r.Wv)(u,null,{default:(0,r.k6)((()=>[(0,r.bF)(i)])),_:1})}var o={name:"App"},i=t(1241);const u=(0,i.A)(o,[["render",l]]);var s=u,d=t(1387);const p={style:{display:"flex","justify-content":"flex-end"}},c={key:0},g=(0,r.Lk)("br",null,null,-1);function f(e,a,t,n,l,o){const i=(0,r.g2)("n-input"),u=(0,r.g2)("n-form-item"),s=(0,r.g2)("n-select"),d=(0,r.g2)("n-button"),f=(0,r.g2)("n-form"),b=(0,r.g2)("n-tab-pane"),v=(0,r.g2)("n-upload"),m=(0,r.g2)("n-gi"),h=(0,r.g2)("n-grid"),k=(0,r.g2)("AnkiCard"),y=(0,r.g2)("n-result"),A=(0,r.g2)("n-tabs"),w=(0,r.g2)("n-card"),_=(0,r.g2)("n-spin");return(0,r.uX)(),(0,r.Wv)(_,{show:e.show,delay:1e3},{default:(0,r.k6)((()=>[(0,r.bF)(w,{title:"Anki 卡片生成",style:{"margin-bottom":"16px"}},{default:(0,r.k6)((()=>[(0,r.bF)(A,{type:"line",value:e.selectedTab,"onUpdate:value":a[6]||(a[6]=a=>e.selectedTab=a),animated:""},{default:(0,r.k6)((()=>[(0,r.bF)(b,{name:"config",tab:"生成配置"},{default:(0,r.k6)((()=>[(0,r.bF)(f,{ref:"formRef",model:e.req,rules:e.rules,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging",size:e.size,style:{maxWidth:"640px"}},{default:(0,r.k6)((()=>[(0,r.bF)(u,{label:"api 地址",path:"apiUrl"},{default:(0,r.k6)((()=>[(0,r.bF)(i,{value:e.req.apiUrl,"onUpdate:value":a[0]||(a[0]=a=>e.req.apiUrl=a),placeholder:"opeai 接口地址"},null,8,["value"])])),_:1}),(0,r.bF)(u,{label:"api key",path:"apiKey"},{default:(0,r.k6)((()=>[(0,r.bF)(i,{value:e.req.apiKey,"onUpdate:value":a[1]||(a[1]=a=>e.req.apiKey=a),placeholder:"接口 key"},null,8,["value"])])),_:1}),(0,r.bF)(u,{label:"模型",path:"model"},{default:(0,r.k6)((()=>[(0,r.bF)(s,{value:e.req.model,"onUpdate:value":a[2]||(a[2]=a=>e.req.model=a),placeholder:"mode",options:e.generalOptions},null,8,["value","options"])])),_:1}),(0,r.bF)(u,{label:"知识点资料",path:"material"},{default:(0,r.k6)((()=>[(0,r.bF)(i,{value:e.req.material,"onUpdate:value":a[3]||(a[3]=a=>e.req.material=a),placeholder:"知识点资料",type:"textarea",autosize:{minRows:3,maxRows:100}},null,8,["value"])])),_:1}),(0,r.Lk)("div",p,[(0,r.bF)(d,{round:"",type:"primary",onClick:a[4]||(a[4]=a=>e.handleValidateButtonClick(e.model))},{default:(0,r.k6)((()=>[(0,r.eW)(" 生成 ")])),_:1})])])),_:1},8,["model","rules","size"])])),_:1}),(0,r.bF)(b,{name:"result",tab:"生成结果"},{default:(0,r.k6)((()=>[e.ankiCardList.length>0?((0,r.uX)(),(0,r.CE)("div",c,[(0,r.bF)(h,{"x-gap":"12"},{default:(0,r.k6)((()=>[(0,r.bF)(m,{span:6},{default:(0,r.k6)((()=>[(0,r.bF)(v,{"default-file-list":e.fileList,"list-type":"text","show-download-button":"",onDownload:e.handleDownload},null,8,["default-file-list","onDownload"])])),_:1})])),_:1}),g,(0,r.bF)(k,{cards:e.ankiCardList},null,8,["cards"])])):(0,r.Q3)("",!0),0==e.ankiCardList.length?((0,r.uX)(),(0,r.Wv)(y,{key:1,status:"info",title:"卡片未生成",description:"别着急，生成之后再看"},{footer:(0,r.k6)((()=>[(0,r.bF)(d,{onClick:a[5]||(a[5]=a=>e.changeTab("config"))},{default:(0,r.k6)((()=>[(0,r.eW)("去生成卡片")])),_:1})])),_:1})):(0,r.Q3)("",!0)])),_:1})])),_:1},8,["value"])])),_:1})])),_:1},8,["show"])}t(4603),t(7566),t(8721);var b=t(144),v=t(4232);const m=(0,r.Lk)("br",null,null,-1);function h(e,a,t,n,l,o){const i=(0,r.g2)("n-ellipsis"),u=(0,r.g2)("n-card"),s=(0,r.g2)("n-grid-item"),d=(0,r.g2)("n-grid"),p=(0,r.g2)("n-pagination"),c=(0,r.g2)("n-space");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(d,{"x-gap":12,"y-gap":8,cols:5},{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.paginatedData,(e=>((0,r.uX)(),(0,r.Wv)(s,{key:e.id},{default:(0,r.k6)((()=>[(0,r.bF)(u,{hoverable:"",size:"huge",segmented:{content:!0,footer:"soft"}},{footer:(0,r.k6)((()=>[(0,r.bF)(i,{"line-clamp":1},{default:(0,r.k6)((()=>[(0,r.eW)((0,v.v_)(e.answer),1)])),_:2},1024)])),default:(0,r.k6)((()=>[(0,r.bF)(i,{"line-clamp":1},{default:(0,r.k6)((()=>[(0,r.eW)((0,v.v_)(e.question),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1}),m,(0,r.bF)(c,{justify:"center"},{default:(0,r.k6)((()=>[e.pageCount>0?((0,r.uX)(),(0,r.Wv)(p,{key:0,page:e.page,"page-size":e.pageSize,"page-count":e.pageCount,"onUpdate:page":e.handlePageChange},null,8,["page","page-size","page-count","onUpdate:page"])):(0,r.Q3)("",!0)])),_:1})],64)}var k=t(4620),y=t(7033),A=t(2169),w=t(2701),_=(0,r.pM)({name:"AnkiCard",props:{cards:{type:Array,required:!0,default:()=>[]}},components:{NCard:k.Ay,NPagination:y.A,NSpace:A.A,NEllipsis:w.Ay},setup(e){const a=(0,b.KR)(1),t=(0,b.KR)(15),n=(0,r.EW)((()=>{const n=(a.value-1)*t.value;return e.cards.slice(n,n+t.value)})),l=(0,r.EW)((()=>0===e.cards.length?0:Math.ceil(e.cards.length/t.value))),o=e=>{a.value=e};return{page:a,pageSize:t,paginatedData:n,pageCount:l,handlePageChange:o}}});const F=(0,i.A)(_,[["render",h]]);var C=F,q=t(9648),x=t(496),R=t(8911),K=t(2384),O=t(4390),U=t(8572),N=t(4880),j=t(3980),L=t(4367),T=t(5829),W=t(4373);const z=window.location.protocol,E=window.location.hostname,S=window.location.port?`:${window.location.port}`:"",P=`${z}//${E}${S}`,X=W.A.create({baseURL:P,timeout:3e4,headers:{"Content-Type":"application/json"}});var M=X,$=t(7387),D=(0,r.pM)({components:{NCard:k.Ay,NTabs:q.A,NTabPane:x.A,NForm:R.A,NFormItem:K.Ay,NInput:O.A,NSelect:U.A,NButton:N.Ay,NSpin:j.A,NUpload:L.A,NResult:T.A,AnkiCard:C},setup(){const e=(0,b.KR)(null),a=(0,b.KR)({apiUrl:"https://api.openai.com/v1/chat/completions",apiKey:"",model:"gpt-4o",material:""}),t=(0,b.KR)([]),n=(0,b.KR)("config"),r=(0,$.J)(),l=(0,b.KR)(!1),o=(0,b.KR)([]),i=e=>{n.value=e};return{ankiCardList:t,fileList:o,formRef:e,selectedTab:n,show:l,size:(0,b.KR)("medium"),req:a,generalOptions:["gpt-4o","gpt-3.5-turbo-0125","gpt-4-turbo"].map((e=>({label:e,value:e}))),rules:{apiUrl:{required:!0,trigger:["blur","input"],message:"请输入接口地址"},apiKey:{required:!0,trigger:["blur","input"],message:"请输入接口key"},material:{required:!0,trigger:["blur","input"],message:"请输入需要处理的资料"},model:{required:!0,trigger:["blur","change"],message:"请选择模型"}},async handleValidateButtonClick(){e.value?.validate(),l.value=!0;try{const e=await M.post("/api/v1/card/generate",a.value);if(console.log(e.data),200!==e.data?.code)return void r.error(e.data?.message||"生成失败，请检查配置");t.value=e.data.data,n.value="result";const l=t.value.map((e=>`${e.question}\t${e.answer}`)).join("\n"),i=new Blob([l],{type:"text/plain"}),u=URL.createObjectURL(i);o.value=[{id:"a",name:"anki_cards.txt",status:"finished",url:u}]}catch(i){console.error("Error posting data:",i),r.error("生成失败，请检查配置")}l.value=!1},changeTab:i}}});const B=(0,i.A)(D,[["render",f]]);var I=B;const Q=[{path:"/",component:I}],V=(0,d.aE)({history:(0,d.LA)(),routes:Q});var J=V,G=t(7275),H=t(9531),Y=t(71),Z=t(732),ee=t(6233),ae=t(8122);const te=(0,G.A)({components:[N.Ay,O.A,H.A,Y.A,Z.Ay,K.Ay,R.A,ee.A,ae.A,U.A]}),ne=(0,n.Ef)(s);ne.use(te),ne.use(J),ne.mount("#app")}},a={};function t(n){var r=a[n];if(void 0!==r)return r.exports;var l=a[n]={exports:{}};return e[n].call(l.exports,l,l.exports,t),l.exports}t.m=e,function(){var e=[];t.O=function(a,n,r,l){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],l=e[d][2];for(var i=!0,u=0;u<n.length;u++)(!1&l||o>=l)&&Object.keys(t.O).every((function(e){return t.O[e](n[u])}))?n.splice(u--,1):(i=!1,l<o&&(o=l));if(i){e.splice(d--,1);var s=r();void 0!==s&&(a=s)}}return a}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[n,r,l]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var r,l,o=n[0],i=n[1],u=n[2],s=0;if(o.some((function(a){return 0!==e[a]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(u)var d=u(t)}for(a&&a(n);s<o.length;s++)l=o[s],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(d)},n=self["webpackChunkanki_card_web"]=self["webpackChunkanki_card_web"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(1893)}));n=t.O(n)})();