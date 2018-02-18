window.Model=function(options){let Date=options.date;return{init(){var APP_ID='sVayEmmvvuiy4NFwyNWSazU3-gzGzoHsz';var APP_KEY='fIzNhLcRHKDNloQJztPifTVe';AV.init({appId:APP_ID,appKey:APP_KEY});},fetch(){let date=new AV.Query(Date);return date.find();},save(dateObj){var xxx=AV.Object.extend(Date);var date=new xxx();return date.save(dateObj);}}}
window.View=function(selector){return document.querySelector(selector);}
window.Controller=function(options){let{init}=options;let obj={init(view,model){this.view=view;if(model){this.model=model;this.model.init();}
init.call(this);this.bindEvents();}}
Object.keys(options).forEach((key)=>{if(key!=='init'){obj[key]=options[key];}})
return obj;}