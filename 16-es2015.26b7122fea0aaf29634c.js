(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"ct+p":function(e,n,t){"use strict";t.r(n),t.d(n,"HomePageModule",(function(){return v}));var o=t("ofXK"),i=t("TEn/"),c=t("3Pt+"),s=t("tyNb"),b=t("mrSG"),r=t("tk/3"),l=t("fXoL"),a=t("ZL19"),d=t("e8h1");function g(e,n){1&e&&(l.Mb(0,"div",25),l.Mb(1,"ion-label",26),l.Mb(2,"em"),l.fc(3,"Nothing here :("),l.Lb(),l.Lb(),l.Lb())}function u(e,n){if(1&e){const e=l.Nb();l.Mb(0,"ion-card",27),l.Mb(1,"ion-card-header"),l.Mb(2,"ion-card-subtitle"),l.fc(3),l.Lb(),l.Mb(4,"ion-card-title"),l.fc(5),l.Lb(),l.Lb(),l.Mb(6,"ion-card-content"),l.Mb(7,"div",28),l.Mb(8,"ion-button",29),l.Ub("click",(function(){l.bc(e);const t=n.index,o=n.$implicit;return l.Wb(2).deleteConfirm(t,o.name)})),l.Kb(9,"ion-icon",30),l.Lb(),l.Mb(10,"ion-button",31),l.Ub("click",(function(){l.bc(e);const t=n.$implicit;return l.Wb(2).update(t.name,t.code)})),l.Kb(11,"ion-icon",32),l.Lb(),l.Mb(12,"ion-button",33),l.Ub("click",(function(){l.bc(e);const t=n.index;return l.Wb(2).saveItem(t)})),l.Kb(13,"ion-icon",34),l.Lb(),l.Lb(),l.Mb(14,"div",35),l.Mb(15,"span",36),l.fc(16),l.Lb(),l.Mb(17,"ion-button",37),l.Ub("click",(function(){l.bc(e);const t=n.$implicit;return l.Wb(2).copy(t.code)})),l.Kb(18,"ion-icon",38),l.Lb(),l.Lb(),l.Lb(),l.Lb()}if(2&e){const e=n.$implicit,t=n.index;l.zb(3),l.hc("#",t+1,""),l.zb(2),l.gc(e.name),l.zb(11),l.hc(" ",e.code," ")}}function h(e,n){if(1&e){const e=l.Nb();l.Mb(0,"div"),l.Mb(1,"ion-refresher",16),l.Ub("ionRefresh",(function(n){return l.bc(e),l.Wb().doRefresh(n)})),l.Kb(2,"ion-refresher-content",17),l.Lb(),l.Mb(3,"div",18),l.Mb(4,"ion-item"),l.Mb(5,"ion-label",19),l.fc(6,"App Name"),l.Lb(),l.Mb(7,"ion-input",20),l.Ub("ngModelChange",(function(n){return l.bc(e),l.Wb().name_input=n})),l.Lb(),l.Lb(),l.Mb(8,"ion-item"),l.Mb(9,"ion-label",19),l.fc(10,"App ID"),l.Lb(),l.Mb(11,"ion-input",20),l.Ub("ngModelChange",(function(n){return l.bc(e),l.Wb().code_input=n})),l.Lb(),l.Lb(),l.Mb(12,"ion-button",21),l.Ub("click",(function(){return l.bc(e),l.Wb().saveItem()})),l.Kb(13,"ion-icon",22),l.fc(14," Add New "),l.Lb(),l.Lb(),l.ec(15,g,4,0,"div",23),l.ec(16,u,19,3,"ion-card",24),l.Lb()}if(2&e){const e=l.Wb();l.zb(7),l.Zb("ngModel",e.name_input),l.zb(4),l.Zb("ngModel",e.code_input),l.zb(1),l.Zb("disabled",""==e.name_input||""==e.code_input),l.zb(3),l.Zb("ngIf",0===e.items.length),l.zb(1),l.Zb("ngForOf",e.items)}}function p(e,n){if(1&e&&(l.Mb(0,"div",57),l.Kb(1,"img",60),l.Lb()),2&e){const e=l.Wb(2);l.zb(1),l.Zb("src",e.bigIcon,l.cc)}}function f(e,n){if(1&e&&(l.Mb(0,"ion-col",61),l.Kb(1,"img",62),l.Lb()),2&e){const e=l.Wb(2);l.zb(1),l.Zb("src",e.bigIcon,l.cc)}}function m(e,n){if(1&e&&(l.Mb(0,"div",57),l.Kb(1,"img",63),l.Lb()),2&e){const e=l.Wb(2);l.zb(1),l.Zb("src",e.bigPic,l.cc)}}function M(e,n){1&e&&l.Kb(0,"ion-spinner")}function L(e,n){if(1&e){const e=l.Nb();l.Mb(0,"div"),l.Mb(1,"div",39),l.Mb(2,"div",40),l.Mb(3,"ion-item"),l.Kb(4,"ion-icon",41),l.Mb(5,"ion-input",42),l.Ub("ngModelChange",(function(n){return l.bc(e),l.Wb().authKey=n})),l.Lb(),l.Mb(6,"ion-icon",43),l.Ub("click",(function(){return l.bc(e),l.Wb().showRewardAlert()})),l.Lb(),l.Lb(),l.Lb(),l.Mb(7,"ion-item"),l.Kb(8,"ion-icon",44),l.Mb(9,"ion-input",45),l.Ub("ngModelChange",(function(n){return l.bc(e),l.Wb().appId=n})),l.Lb(),l.Lb(),l.Lb(),l.Mb(10,"ion-item"),l.Mb(11,"ion-label"),l.fc(12,"Heading:*"),l.Lb(),l.Mb(13,"ion-input",46),l.Ub("ngModelChange",(function(n){return l.bc(e),l.Wb().title=n})),l.Lb(),l.Lb(),l.Mb(14,"ion-item"),l.Mb(15,"ion-label"),l.fc(16,"Message:*"),l.Lb(),l.Mb(17,"ion-input",47),l.Ub("ngModelChange",(function(n){return l.bc(e),l.Wb().message=n})),l.Lb(),l.Lb(),l.Mb(18,"ion-item"),l.Mb(19,"ion-label"),l.fc(20,"Large Icon:"),l.Lb(),l.Mb(21,"ion-input",48),l.Ub("ngModelChange",(function(n){return l.bc(e),l.Wb().bigIcon=n})),l.Lb(),l.Lb(),l.ec(22,p,2,1,"div",49),l.Mb(23,"ion-item"),l.Mb(24,"ion-label"),l.fc(25,"Big Picture:"),l.Lb(),l.Mb(26,"ion-input",48),l.Ub("ngModelChange",(function(n){return l.bc(e),l.Wb().bigPic=n})),l.Lb(),l.Lb(),l.Mb(27,"ion-textarea",50),l.Ub("ngModelChange",(function(n){return l.bc(e),l.Wb().extra=n})),l.Lb(),l.Kb(28,"br"),l.Mb(29,"h4",51),l.fc(30,"NOTIFICATION PREVIEW"),l.Lb(),l.Mb(31,"ion-card"),l.Mb(32,"ion-grid"),l.Mb(33,"ion-row"),l.ec(34,f,2,1,"ion-col",52),l.Mb(35,"ion-col"),l.Mb(36,"b"),l.fc(37),l.Lb(),l.Mb(38,"p"),l.fc(39),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.ec(40,m,2,1,"div",49),l.Lb(),l.Mb(41,"ion-button",53),l.Ub("click",(function(){l.bc(e);const n=l.Wb();return n.newNotif("Test",n.title,n.message,n.bigIcon,n.bigPic,n.extra)})),l.fc(42,"Send to Test Devices "),l.Lb(),l.Mb(43,"ion-button",54),l.Ub("click",(function(){return l.bc(e),l.Wb().presentAlertConfirm("All")})),l.fc(44,"Send to All "),l.Lb(),l.Mb(45,"ion-input",55),l.Ub("ngModelChange",(function(n){return l.bc(e),l.Wb().customSegment=n})),l.Lb(),l.Mb(46,"ion-button",56),l.Ub("click",(function(){l.bc(e);const n=l.Wb();return n.presentAlertConfirm(n.customSegment)})),l.fc(47),l.Lb(),l.Mb(48,"div",57),l.ec(49,M,1,0,"ion-spinner",58),l.Mb(50,"div",59),l.Mb(51,"p"),l.fc(52),l.Lb(),l.Lb(),l.Lb(),l.Lb()}if(2&e){const e=l.Wb();l.zb(5),l.Zb("ngModel",e.authKey),l.zb(4),l.Zb("ngModel",e.appId),l.zb(4),l.Zb("ngModel",e.title),l.zb(4),l.Zb("ngModel",e.message),l.zb(4),l.Zb("ngModel",e.bigIcon),l.zb(1),l.Zb("ngIf",e.bigIcon),l.zb(4),l.Zb("ngModel",e.bigPic),l.zb(1),l.Zb("ngModel",e.extra),l.zb(7),l.Zb("ngIf",e.bigIcon),l.zb(3),l.hc(" ",e.title," "),l.zb(2),l.hc(" ",e.message," "),l.zb(1),l.Zb("ngIf",e.bigPic),l.zb(5),l.Zb("ngModel",e.customSegment),l.zb(2),l.hc("Send in: ",e.customSegment," "),l.zb(2),l.Zb("ngIf",e.spin),l.zb(3),l.gc(e.status)}}const C=[{path:"",component:(()=>{class e{constructor(e,n,t,o,i,c){this.httpClient=e,this.plt=n,this.admobFree=t,this.alertController=o,this.storage=i,this.toastController=c,this.type="default",this.items=[],this.name_input="",this.code_input=""}ngOnInit(){this.plt.ready().then(()=>{this.showBanner()}),this.getAll(),this.storage.get("authKey").then(e=>e?this.authKey=e:console.log("authKey variable not found in DB.")),document.addEventListener(this.admobFree.events.REWARD_VIDEO_REWARD,e=>{this.storage.set("authKey",this.authKey)})}newNotif(e,n,t,o="",i="",c={}){this.spin=!0,this.status="",c!={}&&(c={extra:this.extra});const s={app_id:this.appId.trim(),included_segments:[e],headings:{en:n},contents:{en:t},large_icon:o,big_picture:i,data:c},b={headers:new r.c({"Content-Type":"application/json",Authorization:"Basic "+this.authKey})};this.httpClient.post("https://onesignal.com/api/v1/notifications",s,b).subscribe(e=>{console.log(e),this.spin=!1,this.status="Sent successfully!\nDelivered to: "+e.recipients.toString()},e=>{console.log(e),this.status=`Error: ${e.message} \nFull Error:\n${JSON.stringify(e)}`,this.spin=!1})}segmentChanged(e){console.log("Segment changed")}presentAlertConfirm(e){return Object(b.a)(this,void 0,void 0,(function*(){const n=yield this.alertController.create({header:"Confirm!",message:`Do you really want to send this to <strong>${e}</strong>?`,buttons:[{text:"Cancel",role:"cancel",handler:e=>{console.log("Cancelled")}},{text:"Yes, Confirm",handler:()=>{this.newNotif(e,this.title,this.message,this.bigIcon,this.bigPic,this.extra)}}]});yield n.present()}))}setAll(e){return this.storage.set("entries",e)}getAll(){this.storage.get("entries").then(e=>{e&&(this.items=e)})}saveItem(e){console.log(e+"<= index value in save Fn");let n={name:this.name_input,code:this.code_input};null!=e?(this.items[e]=n,console.log("Updated.")):this.items.push(n),this.setAll(this.items).then(e=>this.getAll())}update(e,n){this.name_input=e,this.code_input=n,this.ScrollToTop()}delete(e){this.items.splice(e,1),this.setAll(this.items).then(e=>this.getAll())}ScrollToTop(){this.content.scrollToTop(1e3)}doRefresh(e){setTimeout(()=>{this.getAll(),console.log("Refreshed."),e.target.complete()},1e3)}copy(e){let n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.select(),document.execCommand("Copy"),document.body.removeChild(n),this.presentToast("Copied!")}filterList(e){const n=e.srcElement.value;this.items=this.items.filter(e=>{if(e.name&&n&&e.name.toLowerCase().indexOf(n.toLowerCase())>-1)return!0})}showBanner(){this.admobFree.banner.config({id:"ca-app-pub-9293070686220717/8661406735",autoShow:!0}),this.admobFree.banner.prepare().then(()=>{}).catch(e=>console.log(e))}ionViewDidEnter(){this.subscription=this.plt.backButton.subscribe(()=>{navigator.app.exitApp()})}ionViewWillLeave(){this.showInterstitial(),this.subscription.unsubscribe()}presentToast(e){return Object(b.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:e,color:"success",duration:2e3,keyboardClose:!0})).present()}))}deleteConfirm(e,n){return Object(b.a)(this,void 0,void 0,(function*(){const t=yield this.alertController.create({header:"Confirm!",message:`Do you really want to delete the entry #${e+1} i.e. <strong>${n}</strong>?`,buttons:[{text:"Cancel",role:"cancel",handler:e=>{console.log("Deletion cancelled")}},{text:"Yes, Delete",cssClass:"deleteConfirmBtn",handler:()=>{this.delete(e)}}]});yield t.present()}))}onAuthFocus(e){console.log("focused.",e)}showRewardAlert(){return Object(b.a)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({message:"Watch a reward ad to save this.",buttons:[{text:"Cancel",role:"cancel"},{text:"Watch & Save",handler:()=>{this.showReward()}}]});yield e.present()}))}showReward(){this.admobFree.rewardVideo.config({autoShow:!0,id:"ca-app-pub-9293070686220717/1451433882"}),this.admobFree.rewardVideo.prepare().then(()=>{}).catch(e=>alert(e))}showInterstitial(){this.admobFree.rewardVideo.config({autoShow:!0,id:"ca-app-pub-9293070686220717/3192709203"}),this.admobFree.rewardVideo.prepare().then(()=>{}).catch(e=>alert(e))}}return e.\u0275fac=function(n){return new(n||e)(l.Jb(r.a),l.Jb(i.G),l.Jb(a.a),l.Jb(i.a),l.Jb(d.b),l.Jb(i.K))},e.\u0275cmp=l.Db({type:e,selectors:[["app-home"]],viewQuery:function(e,n){var t;1&e&&l.ic(i.m,!0),2&e&&l.ac(t=l.Vb())&&(n.content=t.first)},decls:28,vars:6,consts:[[3,"translucent"],["color","primary"],["slot","end"],[1,"topBtns"],["routerLink","/notepad"],["name","receipt"],["routerLink","/about"],["name","information-circle"],[3,"fullscreen"],["color","primary",3,"ngModel","ngModelChange","ionChange"],["value","default","checked",""],["name","grid"],["value","new"],["name","notifications"],[3,"ngSwitch"],[4,"ngSwitchCase"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","circles","refreshingText","Refreshing..."],[1,"inputElements","ion-text-center"],["position","floating"],["clearInput","","required","",3,"ngModel","ngModelChange"],[3,"disabled","click"],["slot","start","name","add"],["class","ion-text-center","style","margin-top: 35%;",4,"ngIf"],["class","card-items",4,"ngFor","ngForOf"],[1,"ion-text-center",2,"margin-top","35%"],["color","medium"],[1,"card-items"],[1,"hangingBtns"],["color","danger",3,"click"],["name","trash-outline","slot","icon-only"],[3,"click"],["name","pencil","slot","icon-only"],["color","success",3,"click"],["name","checkmark-done-outline","slot","icon-only"],[1,"codenbtn"],[1,"code"],["fill","none",3,"click"],["slot","icon-only","name","copy-outline"],[1,"IDs"],[1,"auth-wrapper"],["name","key-outline","slot","start",1,"ion-align-self-start"],["placeholder","REST API Key","required","","ionFocus","onAuthFocus($event)",3,"ngModel","ngModelChange"],["size","small","color","success","name","save-outline","slot","end",3,"click"],["name","locate-outline","slot","start",1,"ion-align-self-start"],["placeholder","App ID","required","",3,"ngModel","ngModelChange"],["required","","placeholder","An eye catching title...",3,"ngModel","ngModelChange"],["required","","placeholder","Your descriptive text here...",3,"ngModel","ngModelChange"],["placeholder","Enter image URL...",3,"ngModel","ngModelChange"],["class","ion-text-center",4,"ngIf"],["id","txtarea","rows","3","placeholder","Enter extra text... (Handle in your app using data.notification.payload.additionalData.extra)",2,"margin","10px",3,"ngModel","ngModelChange"],[1,"ion-padding"],["size","3",4,"ngIf"],["expand","full",3,"click"],["color","danger","expand","full",3,"click"],["placeholder","Custom Segment Name...",3,"ngModel","ngModelChange"],["color","success","expand","full",3,"click"],[1,"ion-text-center"],[4,"ngIf"],[1,"status","ion-padding"],["width","50px","height","50px","alt","Large Icon",3,"src"],["size","3"],["width","50px","height","50px","alt","Default Logo",3,"src"],["alt","Big picture",3,"src"]],template:function(e,n){1&e&&(l.Mb(0,"ion-header",0),l.Mb(1,"ion-toolbar",1),l.Mb(2,"ion-title"),l.fc(3," Push Manager "),l.Lb(),l.Mb(4,"ion-buttons",2),l.Mb(5,"div",3),l.Mb(6,"ion-button",4),l.Kb(7,"ion-icon",5),l.Lb(),l.Mb(8,"ion-label"),l.fc(9,"Notepad"),l.Lb(),l.Lb(),l.Mb(10,"div",3),l.Mb(11,"ion-button",6),l.Kb(12,"ion-icon",7),l.Lb(),l.Mb(13,"ion-label"),l.fc(14,"About"),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(15,"ion-content",8),l.Mb(16,"ion-segment",9),l.Ub("ngModelChange",(function(e){return n.type=e}))("ionChange",(function(e){return n.segmentChanged(e)})),l.Mb(17,"ion-segment-button",10),l.Mb(18,"ion-label"),l.fc(19,"Apps"),l.Lb(),l.Kb(20,"ion-icon",11),l.Lb(),l.Mb(21,"ion-segment-button",12),l.Mb(22,"ion-label"),l.fc(23,"Send New"),l.Lb(),l.Kb(24,"ion-icon",13),l.Lb(),l.Lb(),l.Mb(25,"div",14),l.ec(26,h,17,5,"div",15),l.ec(27,L,53,16,"div",15),l.Lb(),l.Lb()),2&e&&(l.Zb("translucent",!0),l.zb(15),l.Zb("fullscreen",!0),l.zb(1),l.Zb("ngModel",n.type),l.zb(9),l.Zb("ngSwitch",n.type),l.zb(1),l.Zb("ngSwitchCase","default"),l.zb(1),l.Zb("ngSwitchCase","new"))},directives:[i.p,i.D,i.C,i.f,i.e,i.H,s.h,i.q,i.t,i.m,i.y,i.I,c.d,c.e,i.z,o.j,o.k,i.u,i.v,i.s,i.r,i.J,c.f,o.i,o.h,i.g,i.i,i.j,i.k,i.h,i.B,i.o,i.x,i.l,i.A],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.codenbtn[_ngcontent-%COMP%]{display:flex;align-items:center}ion-card.card-items[_ngcontent-%COMP%]{position:relative}.codenbtn[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:hover{color:var(--ion-color-success)}.hangingBtns[_ngcontent-%COMP%]{position:absolute;top:-80px;right:0}.hangingBtns[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-size:x-small}.IDs[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], .inputElements[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin:5px 10px;border:1px solid rgba(23,223,90,.4);border-radius:10px}.deleteConfirmBtn[_ngcontent-%COMP%]{color:var(--ion-color-danger)}.auth-wrapper[_ngcontent-%COMP%]{position:relative}.save-auth[_ngcontent-%COMP%]{position:absolute;right:0;top:0;font-size:x-small;z-index:2}.topBtns[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-transform:uppercase;font-size:xx-small;margin-right:5px}.topBtns[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{letter-spacing:1px}"]}),e})()}];let x=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(n){return new(n||e)},imports:[[s.i.forChild(C)],s.i]}),e})(),v=(()=>{class e{}return e.\u0275mod=l.Hb({type:e}),e.\u0275inj=l.Gb({factory:function(n){return new(n||e)},imports:[[o.b,c.a,i.E,x]]}),e})()}}]);