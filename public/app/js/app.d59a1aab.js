(function(e){function t(t){for(var n,s,r=t[0],a=t[1],c=t[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);h&&h(t);while(p.length)p.shift()();return l.push.apply(l,c||[]),i()}function i(){for(var e,t=0;t<l.length;t++){for(var i=l[t],n=!0,r=1;r<i.length;r++){var a=i[r];0!==o[a]&&(n=!1)}n&&(l.splice(t--,1),e=s(s.s=i[0]))}return e}var n={},o={app:0},l=[];function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/app/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var h=a;l.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0cf5":function(e,t,i){},2018:function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);var n=i("f2bf"),o=i("7a23");const l=["src"],s=["src"],r=["src"],a=["src"],c=["src"],h=["src"],d=["src"],p=["src"],m=["src"],u=["src"],b=Object(o["createElementVNode"])("div",{class:"sp_line_ss"},null,-1),g=Object(o["createElementVNode"])("iframe",{src:"https://d830x8j3o1b2k.cloudfront.net/adfurikun/api/get-script/locale/ja/app_id/647e5e6538396d73e85f909d/ssl/1/iframe/1",width:"320",height:"50",style:{border:"none",margin:"0 auto",padding:"0",display:"block"}},null,-1),y=Object(o["createElementVNode"])("div",{class:"sp_line_ss"},null,-1),f={style:{position:"relative","text-align":"left"}},O=["src"],j=["src"],E={id:"rootBaseParent"},w=["src"],x={style:{"text-align":"center"}},v=["src"],N=["src"],_=["src"],I=Object(o["createElementVNode"])("div",{class:"sp_line_l"},null,-1),S=Object(o["createElementVNode"])("p",{style:"font-size:10px;"},[Object(o["createTextVNode"])("※画像を添付したい場合は、一度保存して、シェアボタンから画像を添付してください。"),Object(o["createElementVNode"])("br"),Object(o["createTextVNode"])(" Press the step1 button to download the chart image, and press the step2 button to open twitter, so attach the downloaded image and share it. ")],-1),T=Object(o["createElementVNode"])("div",{class:"sp_line_l"},null,-1),V=["src"],P=Object(o["createElementVNode"])("div",{class:"sp_line_l"},null,-1),A={style:{display:"flex","flex-wrap":"wrap",gap:"20px","justify-content":"space-evenly"}},k=["innerHTML"],B=["innerHTML"],M=Object(o["createElementVNode"])("div",{class:"sp_line_m"},null,-1),L=Object(o["createElementVNode"])("br",null,null,-1),H=Object(o["createElementVNode"])("div",{class:"sp_line_s"},null,-1),C={style:{position:"absolute",top:"0",left:"0",width:"100vw",height:"100vh","background-color":"rgba(0, 0, 0, 0.5)"}},z=Object(o["createElementVNode"])("span",{style:{position:"absolute",top:"50%",left:"50%"},class:"font_xl absoluteCenterXY"},"カード作成中",-1),$=[z];function R(e,t,i,n,z,R){const W=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("div",{style:Object(o["normalizeStyle"])("text-align:right; height:"+.04*z.baseParentWidth+"px")},[Object(o["withDirectives"])(Object(o["createElementVNode"])("img",{src:this.IMG_PATH+"btn_style1_A_on.png",style:{height:"100%",cursor:"pointer"}},null,8,l),[[o["vShow"],"A"==this.styleKbn&&"tier"==this.pageName]]),Object(o["withDirectives"])(Object(o["createElementVNode"])("img",{src:this.IMG_PATH+"btn_style1_A_off.png",style:{height:"100%",cursor:"pointer"},onClick:t[0]||(t[0]=e=>this.pushStyle("tier","A"))},null,8,s),[[o["vShow"],"B"==this.styleKbn||"alignment"==this.pageName]]),Object(o["withDirectives"])(Object(o["createElementVNode"])("img",{src:this.IMG_PATH+"btn_style1_B_off.png",style:{height:"100%",cursor:"pointer"},onClick:t[1]||(t[1]=e=>this.pushStyle("tier","B"))},null,8,r),[[o["vShow"],"A"==this.styleKbn||"alignment"==this.pageName]]),Object(o["withDirectives"])(Object(o["createElementVNode"])("img",{src:this.IMG_PATH+"btn_style1_B_on.png",style:{height:"100%",cursor:"pointer"}},null,8,a),[[o["vShow"],"B"==this.styleKbn&&"tier"==this.pageName]]),Object(o["withDirectives"])(Object(o["createElementVNode"])("img",{src:this.IMG_PATH+"btn_style2_A_on.png",style:{height:"100%",cursor:"pointer"}},null,8,c),[[o["vShow"],"A"==this.styleKbn&&"alignment"==this.pageName]]),Object(o["withDirectives"])(Object(o["createElementVNode"])("img",{src:this.IMG_PATH+"btn_style2_A_off.png",style:{height:"100%",cursor:"pointer"},onClick:t[2]||(t[2]=e=>this.pushStyle("alignment","A"))},null,8,h),[[o["vShow"],"B"==this.styleKbn||"tier"==this.pageName]]),Object(o["withDirectives"])(Object(o["createElementVNode"])("img",{src:this.IMG_PATH+"btn_style2_B_off.png",style:{height:"100%",cursor:"pointer"},onClick:t[3]||(t[3]=e=>this.pushStyle("alignment","B"))},null,8,d),[[o["vShow"],"A"==this.styleKbn||"tier"==this.pageName]]),Object(o["withDirectives"])(Object(o["createElementVNode"])("img",{src:this.IMG_PATH+"btn_style2_B_on.png",style:{height:"100%",cursor:"pointer"}},null,8,p),[[o["vShow"],"B"==this.styleKbn&&"alignment"==this.pageName]]),Object(o["withDirectives"])(Object(o["createElementVNode"])("img",{src:this.IMG_PATH+"btn_chara_A.png",style:{height:"100%",cursor:"pointer","margin-left":"2%"},onClick:t[4]||(t[4]=e=>this.pushChara("B"))},null,8,m),[[o["vShow"],"A"==this.charaKbn]]),Object(o["withDirectives"])(Object(o["createElementVNode"])("img",{src:this.IMG_PATH+"btn_chara_B.png",style:{height:"100%",cursor:"pointer","margin-left":"2%"},onClick:t[5]||(t[5]=e=>this.pushChara("A"))},null,8,u),[[o["vShow"],"B"==this.charaKbn]])],4),b,g,y,Object(o["createElementVNode"])("div",f,[Object(o["createElementVNode"])("img",{id:"logoImg",style:Object(o["normalizeStyle"])([R.logoMargin,{width:"80%"}]),src:this.IMG_PATH+"gametitle_"+this.styleKbn+".png"},null,12,O),Object(o["createElementVNode"])("img",{id:"titleBar",src:this.IMG_PATH+"title_bar.png",style:{position:"absolute",width:"80%",left:"50%",top:"80%"},class:"absoluteCenterXY"},null,8,j),Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{id:"inputTitle",type:"text",style:Object(o["normalizeStyle"])("color:white !important; position:absolute; width:80%; text-align:center; background-color:transparent; border:none; vertical-align:middle; left:50%; top:80.5%; font-size:30px; height:40px; width:80%; "+this.fScale("XY",80)),placeholder:"タイトルを入力（Input title）",maxlength:"40","onUpdate:modelValue":t[6]||(t[6]=e=>z.title=e),onInput:t[7]||(t[7]=(...e)=>R.onInputTitle&&R.onInputTitle(...e))},null,36),[[o["vModelText"],z.title]])]),Object(o["createElementVNode"])("div",E,[Object(o["createVNode"])(W)]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("img",{src:this.IMG_PATH+"line_"+this.styleKbn+".png",style:{width:"100%"}},null,8,w),Object(o["createElementVNode"])("div",x,[Object(o["createElementVNode"])("img",{src:this.IMG_PATH+"btn_save_on.png",style:Object(o["normalizeStyle"])("cursor:pointer; width:"+.3*z.baseParentWidth+"px"),onClick:t[8]||(t[8]=e=>R.pushBtn("SAVE_SCREEN"))},null,12,v),Object(o["createElementVNode"])("img",{src:this.IMG_PATH+"icon_sankaku_"+this.styleKbn+".png",style:Object(o["normalizeStyle"])("width:"+.03*z.baseParentWidth+"px; margin:0px "+.05*z.baseParentWidth+"px")},null,12,N),Object(o["createElementVNode"])("img",{src:this.IMG_PATH+"btn_share_on.png",style:Object(o["normalizeStyle"])("cursor:pointer; width:"+.3*z.baseParentWidth+"px"),onClick:t[9]||(t[9]=e=>R.pushBtn("SHARE"))},null,12,_)]),I,S]),T,Object(o["createElementVNode"])("img",{src:this.IMG_PATH+"ban_gamefriend.png",style:{width:"80%","max-width":"500px"},class:"link",onClick:t[10]||(t[10]=(...e)=>R.pushFriend&&R.pushFriend(...e))},null,8,V),P,Object(o["createElementVNode"])("div",A,[Object(o["createElementVNode"])("div",{style:{width:"300px",height:"250px"},innerHTML:this.abIndexList[0]["url"]},null,8,k),Object(o["createElementVNode"])("div",{style:{width:"300px",height:"250px"},innerHTML:this.abIndexList[1]["url"]},null,8,B)]),M,L,Object(o["createElementVNode"])("div",{style:Object(o["normalizeStyle"])("text-align:center; font-size:14px; transform: scale("+this.fontScale+")")},[Object(o["createTextVNode"])(" ■イラスト・デザイン："),Object(o["createElementVNode"])("span",{class:"link",onClick:t[11]||(t[11]=e=>R.pushDev(1))},"とりあか"),Object(o["createTextVNode"])("  ■制作："),Object(o["createElementVNode"])("span",{class:"link",onClick:t[12]||(t[12]=e=>R.pushDev(0))},"あいふぉんたろう"),H,Object(o["createTextVNode"])(" ©2023 taroLab  "),Object(o["createElementVNode"])("span",{class:"link",onClick:t[13]||(t[13]=e=>R.pushDev(2))},"HomePage")],4),Object(o["withDirectives"])(Object(o["createElementVNode"])("div",C,$,512),[[o["vShow"],z.isMaking]])],64)}i("14d9");var W=i("cee4"),K={data(){return{IMG_PATH:"/app/img/",ICON_PATH:"/storage/icon/",CARD_PATH:"/storage/card/",SERVER_PATH:"https://sf6maker.tarolab.jp/api/",ROOT_PATH:"/",DOMAIN_PATH:"sf6maker.tarolab.jp",pageName:"",styleKbn:"A",charaKbn:"A",reloadValue:"",charaList:["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18"],baseParentWidth:1e3,title:"",fontScale:1,screenWidth:1200,abList:null,abIndexList:[{kbn:"GROUP_1",url:""},{kbn:"GROUP_1",url:""}],isMaking:!0}},created(){let e=localStorage.getItem("STYLE");null==e&&(e="A",localStorage.setItem("STYLE","A")),this.styleKbn=e,"A"==this.styleKbn?document.body.className="bcStyleA":document.body.className="bcStyleB";let t=localStorage.getItem("CHARA");null==t&&(t="A",localStorage.setItem("CHARA",t)),this.charaKbn=t,W["a"].get(this.$root.SERVER_PATH+"getAbs").then(e=>{console.log(e.data),this.abList=e.data["abs"],this.pageAction()})},mounted(){this.baseParentWidth=document.getElementById("rootBaseParent").clientWidth,this.fontScale=this.baseParentWidth/1e3,window.addEventListener("resize",this.calculateWindowWidth)},computed:{fScale(){return(e,t)=>{let i="";"X"==e?i="translateX(-50%)":"Y"==e?i="translateY(-50%)":"XY"==e&&(i="translate(-50%, -50%)");let n="";return 0!=t&&(n="; width:"+t*(1/this.fontScale)+"%"),"transform: "+i+" scale("+this.fontScale+"); -webkit-transform: "+i+" scale("+this.fontScale+"); -ms-transform: "+i+" scale("+this.fontScale+")"+n}},logoMargin(){return"A"==this.$root.styleKbn?"":"margin-left:10%"},getHeight(){return(e,t)=>{let i=document.getElementById(e);return null!=i?i.clientHeight*t+"px":"10px"}}},methods:{pushDev:function(e){0==e?window.open("https://twitter.com/taroLab2023"):1==e?window.open("https://twitter.com/ft_toriaka"):2==e&&window.open("https://tarolab.jp")},pushFriend:function(){window.open("https://gamefriend.tarolab.jp/post/1090?page=1")},pushTitleChange:function(){document.getElementById("inputTitle").focus()},calculateWindowWidth:function(){this.baseParentWidth=document.getElementById("rootBaseParent").clientWidth,this.fontScale=this.baseParentWidth/1e3},pushStyle:function(e,t){this.styleKbn=t,localStorage.setItem("STYLE",t),"A"==this.styleKbn?document.body.className="bcStyleA":document.body.className="bcStyleB",""!=e&&this.$router.push("/"+e)},onInputTitle:function(){"alignment"==this.pageName?localStorage.setItem("TITLE_ALIGNMENT",this.title):localStorage.setItem("TITLE_TIER",this.title)},pushChara:function(e){this.charaKbn=e,localStorage.setItem("CHARA",e)},pushBtn:function(e){if("SAVE_SCREEN"==e)window.html2canvas(document.getElementById("screen"),{scale:1}).then(e=>{const t=document.createElement("a");t.href=e.toDataURL("image/jpeg",1),"tier"==this.pageName?t.download="TORIPOPPO_SF6_TIER.png":t.download="TORIPOPPO_SF6_CHART.png",t.click()}),this.targetItem=null;else if("SHARE"==e){let e="『"+this.title+"』 TORIPOPPO SF6 MAKER で作ったよ！ ",i="https://sf6maker.tarolab.jp/tier";"alignment"==this.pageName&&(i="https://sf6maker.tarolab.jp/alignment");var t="https://twitter.com/intent/tweet?hashtags="+encodeURIComponent("TORIPOPPO")+"&text="+encodeURIComponent(e)+"&url="+encodeURIComponent(i);window.open(t),this.targetItem=null}},pageAction:function(){if(console.log(this.abList),null==this.abList)return;let e=[];for(let t=0;t<this.abIndexList.length;t++){let i=this.abIndexList[t],n=i["kbn"],o=this.abList[n],l=-1;while(-1==l){l=Math.floor(Math.random()*o.length);for(let t=0;t<e.length;t++)if(e[t]==l){l=-1;break}}e.push(l),console.log(e),i["url"]=o[l]}}}},G=(i("b69c"),i("6b0d")),D=i.n(G);const U=D()(K,[["render",R]]);var F=U;const Y={class:"tier"},X={class:"mainArea",style:{position:"relative"}},J={id:"tierParent",style:{margin:"auto"},class:"tierWidth"},Q=["onUpdate:modelValue"],q=["src","onClick"],Z=["src","onClick"],ee=["src","onClick"],te=["id"],ie=["src"],ne={id:"box2",class:"box"},oe=["id"],le=["src"],se=Object(o["createElementVNode"])("div",{class:"sp_line_ss"},null,-1),re=Object(o["createElementVNode"])("iframe",{src:"https://d830x8j3o1b2k.cloudfront.net/adfurikun/api/get-script/locale/ja/app_id/647e5e848596da710f718b8b/ssl/1/iframe/1",width:"320",height:"50",style:{border:"none",margin:"0 auto",padding:"0",display:"block"}},null,-1),ae=Object(o["createElementVNode"])("div",{class:"sp_line_ss"},null,-1),ce={style:{"text-align":"right"}},he=["src"],de={style:{position:"relative","text-align":"left"}},pe=["src"],me=["src"],ue={style:{color:"white",position:"absolute","text-align":"center",left:"0",top:"64%","font-size":"35px",width:"100%"}},be={style:{margin:"auto"}},ge={style:{color:"white",width:"19%","font-size":"25px",position:"absolute","text-align":"center",left:"0px",top:"48px"}},ye=["id"],fe=["src"],Oe={id:"content",style:{"text-align":"center"},class:"confirmArea"},je={style:{position:"relative"}},Ee=["src"],we=["src"],xe=["src"];function ve(e,t,i,n,l,s){const r=Object(o["resolveComponent"])("draggable");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("div",Y,[Object(o["createElementVNode"])("div",X,[Object(o["createElementVNode"])("div",J,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(l.tierList,(e,i)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:i},[Object(o["createElementVNode"])("div",{id:"test",style:Object(o["normalizeStyle"])("position:relative; background-image:url("+this.$root.IMG_PATH+"bar_0"+e["color"]+"_"+this.$root.styleKbn+".png); background-repeat:repeat-y; background-size:100% auto; width:100%; min-height:"+s.tierParentHeight+"px")},[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text",style:Object(o["normalizeStyle"])("background-color:transparent; border:none; position:absolute; left:10%; top:"+s.tierParentHeight/2+"px; color:white; text-align:center; font-size:20px;"+this.$root.fScale("XY",15)),placeholder:"Tier Name","onUpdate:modelValue":t=>e["name"]=t,maxlength:"10"},null,12,Q),[[o["vModelText"],e["name"]]]),Object(o["createElementVNode"])("img",{src:this.$root.IMG_PATH+"btn_setting.png",style:Object(o["normalizeStyle"])("cursor:pointer; position:absolute; left:4%; top:"+.67*s.tierParentHeight+"px; height:"+.25*s.tierParentHeight+"px"),onClick:e=>s.pushTierRowBtn("SETTING",i)},null,12,q),Object(o["createElementVNode"])("img",{src:this.$root.IMG_PATH+"btn_delete_"+this.$root.styleKbn+".png",style:Object(o["normalizeStyle"])("cursor:pointer; position:absolute; right:0%; top:6%; height:"+.2*s.tierParentHeight+"px"),onClick:e=>s.pushTierRowBtn("DELETE",i)},null,12,Z),Object(o["withDirectives"])(Object(o["createElementVNode"])("img",{src:this.$root.IMG_PATH+"btn_plus_"+this.$root.styleKbn+".png",style:Object(o["normalizeStyle"])("cursor:pointer; position:absolute; right:0%; bottom:6%; height:"+.2*s.tierParentHeight+"px"),onClick:e=>s.pushTierRowBtn("ADD",i)},null,12,ee),[[o["vShow"],5!=i&&6!=this.tierList.length]]),Object(o["createElementVNode"])("div",{id:"box1",class:"box",style:Object(o["normalizeStyle"])("margin-left:20%; text-align:left; width:75%; min-height:"+s.tierParentHeight+"px")},[Object(o["createVNode"])(r,{modelValue:e["items"],"onUpdate:modelValue":t=>e["items"]=t,"item-key":"no",group:"ITEMS",style:Object(o["normalizeStyle"])("height:100%; min-height:"+s.tierParentHeight+"px"),onEnd:s.onEnd,onChoose:t[0]||(t[0]=e=>s.touchStart(e))},{item:Object(o["withCtx"])(({element:e})=>[Object(o["createElementVNode"])("span",{id:e.tierNo,style:Object(o["normalizeStyle"])("display:inline-block; padding:"+.1*s.tierParentHeight+"px 0px; cursor:pointer; width:auto; height:auto")},["IMAGE"==e.type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("img",{key:0,src:e.path+this.$root.charaKbn+".png",style:Object(o["normalizeStyle"])("height:"+.8*s.tierParentHeight+"px")},null,12,ie)):Object(o["createCommentVNode"])("",!0)],12,te)]),_:2},1032,["modelValue","onUpdate:modelValue","style","onEnd"])],4)],4)]))),128)),Object(o["createElementVNode"])("div",ne,[Object(o["createVNode"])(r,{modelValue:l.baseItems,"onUpdate:modelValue":t[1]||(t[1]=e=>l.baseItems=e),"item-key":"no",group:"ITEMS",style:{padding:"0px",gap:"10px 10px"},onEnd:s.onEnd,onChoose:t[2]||(t[2]=e=>s.touchStart(e))},{item:Object(o["withCtx"])(({element:e})=>[Object(o["createElementVNode"])("span",{id:e.tierNo,style:Object(o["normalizeStyle"])("display:inline-block; padding:"+.1*s.tierParentHeight+"px 0px; cursor:pointer; width:auto; height:auto")},["IMAGE"==e.type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("img",{key:0,src:e.path+this.$root.charaKbn+".png",style:Object(o["normalizeStyle"])("height:"+.8*s.tierParentHeight+"px")},null,12,le)):Object(o["createCommentVNode"])("",!0)],12,oe)]),_:1},8,["modelValue","onEnd"])])])])]),se,re,ae,Object(o["createElementVNode"])("div",ce,[Object(o["createElementVNode"])("img",{src:this.$root.IMG_PATH+"btn_reset_"+this.$root.styleKbn+"_on.png",style:Object(o["normalizeStyle"])("cursor:pointer; width:"+.08*s.tierParentWidth+"px"),onClick:t[3]||(t[3]=e=>s.pushBtn("RESET"))},null,12,he)]),Object(o["createElementVNode"])("div",{id:"screen",class:Object(o["normalizeClass"])("bcStyle"+this.$root.styleKbn),style:Object(o["normalizeStyle"])("padding:100px; position:absolute; left:-2100px; top:100px; width:"+(this.$root.screenWidth+200)+"px;")},[Object(o["createElementVNode"])("div",de,[Object(o["createElementVNode"])("img",{id:"logoImg",style:Object(o["normalizeStyle"])([this.$root.logoMargin,{width:"80%"}]),src:this.$root.IMG_PATH+"gametitle_"+this.$root.styleKbn+".png"},null,12,pe),Object(o["createElementVNode"])("img",{id:"titleBar",src:this.$root.IMG_PATH+"title_bar.png",style:{position:"absolute",width:"80%",left:"10%",top:"53%"}},null,8,me),Object(o["createElementVNode"])("p",ue,Object(o["toDisplayString"])(this.$root.title),1)]),Object(o["createElementVNode"])("div",be,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(l.tierList,(e,i)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:i},[Object(o["createElementVNode"])("div",{id:"test",style:Object(o["normalizeStyle"])("position:relative; background-image:url("+this.$root.IMG_PATH+"bar_0"+e["color"]+"_"+this.$root.styleKbn+".png); background-repeat:repeat-y; background-size:100% auto; width:100%; min-height:"+s.scTierParentHeight+"px")},[Object(o["createElementVNode"])("p",ge,Object(o["toDisplayString"])(e["name"]),1),Object(o["createElementVNode"])("div",{id:"box1",class:"box",style:Object(o["normalizeStyle"])("margin-left:20%; text-align:left; width:75%; min-height:"+s.scTierParentHeight+"px")},[Object(o["createVNode"])(r,{modelValue:e["items"],"onUpdate:modelValue":t=>e["items"]=t,"item-key":"no",group:"ITEMS",style:Object(o["normalizeStyle"])("height:100%; min-height:"+s.scTierParentHeight+"px"),onEnd:s.onEnd,onChoose:t[4]||(t[4]=e=>s.touchStart(e))},{item:Object(o["withCtx"])(({element:e})=>[Object(o["createElementVNode"])("span",{id:e.tierNo,style:Object(o["normalizeStyle"])("display:inline-block; padding:"+.1*s.scTierParentHeight+"px 0px; cursor:pointer; width:auto; height:auto")},["IMAGE"==e.type?(Object(o["openBlock"])(),Object(o["createElementBlock"])("img",{key:0,src:e.path+this.$root.charaKbn+".png",style:Object(o["normalizeStyle"])("height:"+.8*s.scTierParentHeight+"px")},null,12,fe)):Object(o["createCommentVNode"])("",!0)],12,ye)]),_:2},1032,["modelValue","onUpdate:modelValue","style","onEnd"])],4)],4)]))),128))])],6),Object(o["withDirectives"])(Object(o["createElementVNode"])("div",{id:"overlay",onClick:t[7]||(t[7]=e=>s.closeOverlay(e))},[Object(o["withDirectives"])(Object(o["createElementVNode"])("div",Oe,[Object(o["createElementVNode"])("div",je,[Object(o["createElementVNode"])("img",{src:this.$root.IMG_PATH+"window_confirm.png",style:{width:"100%"}},null,8,Ee),Object(o["createElementVNode"])("img",{src:this.$root.IMG_PATH+"btn_confirm_yes.png",style:{position:"absolute",left:"15%",top:"70%",width:"30%"},class:"link",onClick:t[5]||(t[5]=e=>s.pushPopupBtn("CONFIRM_YES"))},null,8,we),Object(o["createElementVNode"])("img",{src:this.$root.IMG_PATH+"btn_confirm_no.png",style:{position:"absolute",right:"15%",top:"70%",width:"30%"},class:"link",onClick:t[6]||(t[6]=e=>s.pushPopupBtn("CONFIRM_NO"))},null,8,xe)])],512),[[o["vShow"],"DELETE"==l.popupKbn]])],512),[[o["vShow"],l.isShowPopup]])],64)}var Ne=i("b76a"),_e=i.n(Ne),Ie={name:"Tier",components:{draggable:_e.a},data(){return{scWidth:1e3,barScale:.113,selSettingIndex:0,isShowPopup:!1,setName:"",setColorIndex:0,title:"タイトル未設定",isEditTitle:!1,tierColorList:["#00b894","#00cec9","#0984e3","#6c5ce7","#fdcb6e","#e17055","#d63031","#e84393"],tierList:[{name:"SS",color:1,items:[]},{name:"S",color:2,items:[]},{name:"A",color:3,items:[]},{name:"B",color:4,items:[]},{name:"C",color:5,items:[]}],baseItems:[],categoryData:{},isShowScreen:!1,customText:"",hScale:1,targetItem:null,tierNo:0,isCustom:!1,abc:"13px",popupKbn:""}},computed:{tierParentWidth(){return this.$root.baseParentWidth},tierParentHeight(){return this.tierParentWidth*this.barScale},scTierParentHeight(){return this.$root.screenWidth*this.barScale},selectedColor(){return e=>e==this.setColorIndex?"setSelectedColor":""}},mounted(){},beforeRouteLeave(e,t,i){window.removeEventListener("resize",this.calculateWindowWidth),i()},methods:{pushTierRowBtn:function(e,t){if("SETTING"==e){let e=this.tierList[t].color;e++,7==e&&(e=1),this.tierList[t].color=e}else if("DELETE"==e)this.popupKbn="DELETE",this.isShowPopup=!0,this.selSettingIndex=t;else if("ADD"==e){let e=t+1,i=this.tierList.splice(e);Array.prototype.push.apply(this.tierList,[{name:"",color:1,items:[]}]),Array.prototype.push.apply(this.tierList,i)}},pushPopupBtn:function(e){if("CONFIRM_YES"==e){if("DELETE"==this.popupKbn){let e=this.tierList[this.selSettingIndex].items;for(let t=0;t<e.length;t++){let i=e[t];this.baseItems.push(i)}this.tierList.splice(this.selSettingIndex,1),this.isShowPopup=!1}}else"CONFIRM_NO"==e&&(this.isShowPopup=!1)},touchStart:function(e){let t=e.item.id;for(let i=0;i<this.tierList.length;i++){const e=this.tierList[i].items;for(let i=0;i<e.length;i++){const n=e[i];if(t==n.tierNo)return void(this.targetItem=n)}}for(let i=0;i<this.baseItems.length;i++)if(t==this.baseItems[i].tierNo)return void(this.targetItem=this.baseItems[i])},onFileChange:function(e){const t=e.target.files||e.dataTransfer.files;if(0!=t.length)for(let i=0;i<t.length;i++){const e=t[i];"image/jpeg"!=e.type&&"image/png"!=e.type||this.createImage(e)}},createImage(e){const t=new FileReader;t.onload=e=>{let t=new Image;t.src=e.target.result,t.onload=function(){let i=t.naturalWidth,n=t.naturalHeight,o=n/i;this.baseItems.push({path:e.target.result,type:"IMAGE",isCustom:!0,scale:o,tierNo:this.tierNo}),this.tierNo++}.bind(this)},t.readAsDataURL(e)},calculateWindowWidth:function(){this.tierParentWidth=document.getElementById("tierParent").clientWidth},show:function(){this.isShowScreen=!this.isShowScreen},pushBtn:function(e){if("DELETE_ITEM"==e){let e=this.targetItem.tierNo;for(let t=0;t<this.tierList.length;t++){let i=this.tierList[t]["items"];for(let t=0;t<i.length;t++){const n=i[t];if(n.tierNo==e)return i.splice(t,1),void(this.targetItem=null)}}for(let t=0;t<this.baseItems.length;t++){const i=this.baseItems[t];if(i.tierNo==e)return this.baseItems.splice(t,1),void(this.targetItem=null)}}else if("BACK"==e)this.$router.push("/");else if("RESET"==e){for(let e=0;e<this.tierList.length;e++){let t=this.tierList[e].items;for(let e=0;e<t.length;e++){let i=t[e];this.baseItems.push(i)}this.tierList[e].items=[]}this.targetItem=null}},closeOverlay:function(e){"overlay"==e.target.id&&(this.isShowPopup=!1)},onEnd:function(){this.isCustom},getOptions:function(){return this.options},initAction:function(){this.$root.pageName="tier";let e=localStorage.getItem("TITLE_TIER");null==e&&(e=""),this.$root.title=e;let t=[];for(let i=0;i<this.$root.charaList.length;i++)t.push({path:this.$root.IMG_PATH+"chara/icon_"+this.$root.charaList[i]+"_",type:"IMAGE",isCustom:!1,scale:0,tierNo:this.tierNo}),this.tierNo++;this.baseItems=t,this.title=""}},beforeRouteEnter(e,t,i){i(e=>{e.initAction()})},beforeRouteUpdate(e,t,i){i(e=>{e.initAction()})}};i("b1b1");const Se=D()(Ie,[["render",ve]]);var Te=Se;const Ve={class:"alignment"},Pe=["src"],Ae=Object(o["createElementVNode"])("div",{style:{height:"10px"}},null,-1),ke={id:"baseParent",style:{padding:"10px",display:"flex","flex-wrap":"wrap"}},Be=["src","id"],Me=Object(o["createElementVNode"])("div",{class:"sp_line_ss"},null,-1),Le=Object(o["createElementVNode"])("iframe",{src:"https://d830x8j3o1b2k.cloudfront.net/adfurikun/api/get-script/locale/ja/app_id/647e5e848596da710f718b8b/ssl/1/iframe/1",width:"320",height:"50",style:{border:"none",margin:"0 auto",padding:"0",display:"block"}},null,-1),He=Object(o["createElementVNode"])("div",{class:"sp_line_ss"},null,-1),Ce={style:{"text-align":"right"}},ze=["src"],$e=["src"],Re={style:{position:"relative","text-align":"left"}},We=["src"],Ke=["src"],Ge={style:{color:"white",position:"absolute","text-align":"center",left:"0",top:"64%","font-size":"35px",width:"100%"}},De=["src"],Ue=["src","id"];function Fe(e,t,i,n,l,s){return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("div",Ve,[Object(o["createElementVNode"])("div",{id:"chartParent",style:Object(o["normalizeStyle"])("width:100%; height: "+.5*this.chartParentWidth+"px; position:relative")},[Object(o["createElementVNode"])("img",{src:this.$root.IMG_PATH+"bg_chart_"+this.$root.styleKbn+".png",style:{position:"absolute",top:"0",left:"0",width:"100%"}},null,8,Pe),Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>l.columnT=e),class:"align-text",style:Object(o["normalizeStyle"])([{left:"50%",top:"4.5%"},"width:15%; font-size:17px;"+this.$root.fScale("XY",15)]),placeholder:"input text"},null,4),[[o["vModelText"],l.columnT]]),Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>l.columnL=e),class:"align-text",style:Object(o["normalizeStyle"])([{left:"7%",top:"51.5%"},"width:15%; font-size:17px;"+this.$root.fScale("XY",15)]),placeholder:"input text"},null,4),[[o["vModelText"],l.columnL]]),Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>l.columnR=e),class:"align-text",style:Object(o["normalizeStyle"])([{left:"93%",top:"51.5%"},"width:15%; font-size:17px;"+this.$root.fScale("XY",15)]),placeholder:"input text"},null,4),[[o["vModelText"],l.columnR]]),Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>l.columnB=e),class:"align-text",style:Object(o["normalizeStyle"])([{left:"50%",top:"98%"},"width:15%; font-size:17px;"+this.$root.fScale("XY",15)]),placeholder:"input text"},null,4),[[o["vModelText"],l.columnB]])],4),Ae,Object(o["createElementVNode"])("div",ke,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(l.baseItems,(e,i)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("img",{key:i,style:Object(o["normalizeStyle"])("height: "+l.itemHeight+"px; z-index:1000; left:"+e.left+"; top:"+e.top),src:e.path+this.$root.charaKbn+".png",id:e.tierNo,class:Object(o["normalizeClass"])(s.itemClass(e)),onMousedown:t[4]||(t[4]=Object(o["withModifiers"])(e=>s.touchStart(e),["prevent"])),onTouchstart:t[5]||(t[5]=Object(o["withModifiers"])(e=>s.touchStart(e),["prevent"])),onTouchmove:t[6]||(t[6]=Object(o["withModifiers"])(e=>s.touchMove(e),["prevent"])),onTouchend:t[7]||(t[7]=Object(o["withModifiers"])(e=>s.touchEnd(e),["prevent"]))},null,46,Be))),128))]),Me,Le,He,Object(o["createElementVNode"])("div",Ce,[Object(o["createElementVNode"])("img",{src:this.$root.IMG_PATH+"btn_remove_"+this.$root.styleKbn+"_on.png",style:Object(o["normalizeStyle"])("cursor:pointer; width:"+.08*s.chartParentWidth+"px"),onClick:t[8]||(t[8]=e=>s.pushEditBtn("BACK"))},null,12,ze),Object(o["createTextVNode"])("    "),Object(o["createElementVNode"])("img",{src:this.$root.IMG_PATH+"btn_reset_"+this.$root.styleKbn+"_on.png",style:Object(o["normalizeStyle"])("cursor:pointer; width:"+.08*s.chartParentWidth+"px"),onClick:t[9]||(t[9]=e=>s.pushEditBtn("BACK_ALL"))},null,12,$e)])]),Object(o["createElementVNode"])("div",{id:"screen",class:Object(o["normalizeClass"])("bcStyle"+this.$root.styleKbn),style:Object(o["normalizeStyle"])("padding:100px; position:absolute; left:-2300px; top:100px; width:"+(this.$root.screenWidth+200)+"px;")},[Object(o["createElementVNode"])("div",Re,[Object(o["createElementVNode"])("img",{id:"logoImg",style:Object(o["normalizeStyle"])([this.$root.logoMargin,{width:"80%"}]),src:this.$root.IMG_PATH+"gametitle_"+this.$root.styleKbn+".png"},null,12,We),Object(o["createElementVNode"])("img",{id:"titleBar",src:this.$root.IMG_PATH+"title_bar.png",style:{position:"absolute",width:"80%",left:"10%",top:"53%"}},null,8,Ke),Object(o["createElementVNode"])("p",Ge,Object(o["toDisplayString"])(this.$root.title),1)]),Object(o["createElementVNode"])("div",{style:Object(o["normalizeStyle"])("width:100%; height: "+.5*this.$root.screenWidth+"px; position:relative")},[Object(o["createElementVNode"])("img",{src:this.$root.IMG_PATH+"bg_chart_"+this.$root.styleKbn+".png",style:{position:"absolute",top:"0",left:"0",width:"100%"}},null,8,De),Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text","onUpdate:modelValue":t[10]||(t[10]=e=>l.columnT=e),style:Object(o["normalizeStyle"])([{position:"absolute",color:"white","z-index":"1001",border:"none","background-color":"transparent","text-align":"center",left:"43.5%",top:"3%"},"width:13%; font-size:20px;"]),placeholder:"input text"},null,512),[[o["vModelText"],l.columnT]]),Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text","onUpdate:modelValue":t[11]||(t[11]=e=>l.columnL=e),style:Object(o["normalizeStyle"])([{position:"absolute",color:"white","z-index":"1001",border:"none","background-color":"transparent","text-align":"center",left:"0.7%",top:"49.7%"},"width:13%; font-size:20px;"]),placeholder:"input text"},null,512),[[o["vModelText"],l.columnL]]),Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text","onUpdate:modelValue":t[12]||(t[12]=e=>l.columnR=e),style:Object(o["normalizeStyle"])([{position:"absolute",color:"white","z-index":"1001",border:"none","background-color":"transparent","text-align":"center",left:"86.3%",top:"49.7%"},"width:13%; font-size:20px;"]),placeholder:"input text"},null,512),[[o["vModelText"],l.columnR]]),Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{type:"text","onUpdate:modelValue":t[13]||(t[13]=e=>l.columnB=e),style:Object(o["normalizeStyle"])([{position:"absolute",color:"white","z-index":"1001",border:"none","background-color":"transparent","text-align":"center",left:"43.5%",top:"96.6%"},"width:13%; font-size:20px;"]),placeholder:"input text"},null,512),[[o["vModelText"],l.columnB]]),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(l.baseItems,(e,t)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("img",{key:t,style:Object(o["normalizeStyle"])("height: "+this.$root.screenWidth*l.itemScalePerWidth+"px; position:absolute; display:"+s.ssDisp(e.isBase)+"; z-index:1000; left:"+e.left+"; top:"+e.top),src:e.path+this.$root.charaKbn+".png",id:e.tierNo},null,12,Ue))),128))],4)],6)],64)}var Ye={name:"Alignment",components:{},data(){return{x:0,y:0,isTouch:!1,targetEl:null,targetItem:null,baseItems:[],baseTextItems:[],customText:"",title:"タイトル未設定",isEditTitle:!1,hScale:1,isCustom:!1,tierNo:0,columnT:"",columnR:"",columnB:"",columnL:"",itemHeight:100,itemScalePerWidth:.09,charaWHScale:.775,scWidth:1200,limTop:4,limBottom:80.4,limLeft:6.97,limRight:84.1}},computed:{chartParentWidth(){return this.$root.baseParentWidth},ssDisp:function(){return e=>e?"none":"flex"},itemClass:function(){return e=>{let t="unselectAItem ";return null!=this.targetItem&&e.tierNo==this.targetItem.tierNo&&(t="selectItem "),e.isBase?t+"itemBase":t+"itemChart"}}},mounted(){this.itemHeight=this.$root.baseParentWidth*this.itemScalePerWidth,window.addEventListener("resize",this.calculateWindowWidth),window.addEventListener("mousemove",this.touchMove),window.addEventListener("mouseup",this.touchEnd)},beforeRouteLeave(e,t,i){window.removeEventListener("resize",this.calculateWindowWidth),window.removeEventListener("mousemove",this.touchMove),window.removeEventListener("mouseup",this.touchEnd),i()},methods:{calculateWindowWidth:function(){this.itemHeight=this.$root.baseParentWidth*this.itemScalePerWidth},pushEditBtn:function(e){if("BACK"==e){if(null==this.targetItem)return;document.getElementById("baseParent").append(this.targetEl),this.targetItem.isBase=!0,this.targetEl=null,this.targetItem=null}else if("BACK_ALL"==e){let e=Array.from(document.getElementsByClassName("itemChart")),t=document.getElementById("baseParent");for(let i=0;i<e.length;i++){const n=e[i];t.appendChild(n)}for(let i=0;i<this.baseItems.length;i++)this.baseItems[i].isBase=!0;this.targetEl=null,this.targetItem=null}},mouseMove:function(){this.isTouch},mouseUp:function(){this.isTouch=!1},touchStart:function(e){this.targetEl=e.target;var t=null;"mousedown"==e.type?t=e:"touchstart"==e.type&&(t=e.touches[0]),this.x=t.pageX-this.targetEl.offsetLeft,this.y=t.pageY-this.targetEl.offsetTop;let i=e.target.id;for(let n=0;n<this.baseItems.length;n++)if(i==this.baseItems[n].tierNo){this.targetItem=this.baseItems[n];break}for(let n=0;n<this.baseTextItems.length;n++)if(i==this.baseTextItems[n].tierNo){this.targetItem=this.baseTextItems[n];break}this.isTouch=!0},touchMove:function(e){if(!this.isTouch)return;if(this.targetItem.isBase){this.targetItem.isBase=!1,document.getElementById("chartParent").appendChild(this.targetEl);var t=document.getElementById("chartParent").getBoundingClientRect(),i=window.pageXOffset+t.left;"A"==this.$root.charaKbn?this.x=i+this.itemHeight/2:this.x=i+this.itemHeight*this.charaWHScale/2;var n=window.pageYOffset+t.top;this.y=n+this.itemHeight/2}var o=null;"mousemove"==e.type?o=e:"touchmove"==e.type&&(o=e.touches[0]);let l=o.pageY-this.y,s=o.pageX-this.x,r=document.getElementById("chartParent").clientWidth,a=document.getElementById("chartParent").clientHeight,c=l/a*100,h=s/r*100,d=this.limRight;"B"==this.$root.charaKbn&&(d+=1.8),c<this.limTop?this.targetItem.top=this.limTop+"%":c>this.limBottom?this.targetItem.top=this.limBottom+"%":this.targetItem.top=c+"%",h<this.limLeft?this.targetItem.left=this.limLeft+"%":this.targetItem.left=h>d?d+"%":h+"%"},touchEnd:function(){this.isTouch&&(this.isTouch=!1)},touchLeave:function(){this.isTouch&&(this.isTouch=!1)},initAction:function(){let e=localStorage.getItem("TITLE_ALIGNMENT");null==e&&(e=""),this.$root.title=e,this.$root.pageName="alignment",this.baseItems=[];for(let t=0;t<this.$root.charaList.length;t++)this.baseItems.push({tierNo:this.$root.charaList[t],path:this.$root.IMG_PATH+"chara/icon_"+this.$root.charaList[t]+"_",isCustom:!1,scale:0,left:"0px",top:"0px",isBase:!0})}},beforeRouteEnter(e,t,i){i(e=>{e.initAction()})},beforeRouteUpdate(e,t,i){i(e=>{e.initAction()})}};i("efa0");const Xe=D()(Ye,[["render",Fe]]);var Je=Xe;const Qe={class:"NotFound"};function qe(e,t,i,n,l,s){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",Qe)}var Ze={name:"NotFound",components:{},data(){return{}},computed:{},methods:{},beforeRouteEnter(e,t,i){i(e=>{e.$router.replace("/tier")})},beforeRouteUpdate(e,t,i){i(e=>{e.$router.replace("/tier")})}};const et=D()(Ze,[["render",qe]]);var tt=et,it=i("6605");const nt=[{path:"/tier",name:"Tier",component:Te},{path:"/alignment",name:"Alignment",component:Je},{path:"/:pathMatch(.*)*",name:"NotFound",component:tt}],ot=Object(it["a"])({history:Object(it["b"])("/"),routes:nt});var lt=ot,st=(i("2018"),i("f7e2"));Object(n["a"])(F).use(st["a"],{config:{id:"G-PL3R2G8XNQ"}}).use(lt).mount("#app")},8337:function(e,t,i){},b1b1:function(e,t,i){"use strict";i("cb48")},b69c:function(e,t,i){"use strict";i("8337")},cb48:function(e,t,i){},efa0:function(e,t,i){"use strict";i("0cf5")}});