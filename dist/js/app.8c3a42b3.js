(function(e){function t(t){for(var n,l,o=t[0],i=t[1],c=t[2],d=0,p=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&p.push(s[l][0]),s[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==s[i]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},s={app:0},a=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),s={id:"app"},a={class:"container",style:{width:"1200px"}},l=Object(n["e"])("div",{style:{margin:"20px"}},[Object(n["e"])("h3",null,"broadcns.com"),Object(n["e"])("h4",null,"Upload File")],-1);function o(e,t,r,o,i,c){var u=Object(n["j"])("upload-files");return Object(n["h"])(),Object(n["d"])("div",s,[Object(n["e"])("div",a,[l,Object(n["f"])(u)])])}var i={key:0,class:"progress"},c=["aria-valuenow"],u={class:"btn btn-default"},d=["disabled"],p={class:"alert alert-light",role:"alert"},b={class:"card"},f=Object(n["e"])("div",{class:"card-header"},"음성 인식 텍스트",-1),h={class:"list-group-item"};function j(e,t,r,s,a,l){return Object(n["h"])(),Object(n["d"])("div",null,[a.currentFile?(Object(n["h"])(),Object(n["d"])("div",i,[Object(n["e"])("div",{class:"progress-bar progress-bar-info progress-bar-striped",role:"progressbar","aria-valuenow":a.progress,"aria-valuemin":"0","aria-valuemax":"100",style:Object(n["g"])({width:a.progress+"%"})},Object(n["k"])(a.progress)+"% ",13,c)])):Object(n["c"])("",!0),Object(n["e"])("label",u,[Object(n["e"])("input",{type:"file",ref:"file",onChange:t[0]||(t[0]=function(){return l.selectFile&&l.selectFile.apply(l,arguments)})},null,544)]),Object(n["e"])("button",{class:"btn btn-success",disabled:!a.selectedFiles,onClick:t[1]||(t[1]=function(){return l.upload&&l.upload.apply(l,arguments)})}," Upload ",8,d),Object(n["e"])("div",p,Object(n["k"])(a.message),1),Object(n["e"])("div",b,[f,(Object(n["h"])(!0),Object(n["d"])(n["a"],null,Object(n["i"])(a.texts,(function(e,t){return Object(n["h"])(),Object(n["d"])("ul",{class:"list-group list-group-flush",key:t},[Object(n["e"])("li",h,Object(n["k"])(e[t].startSecond)+" -- "+Object(n["k"])(e[t].endSecond)+" : "+Object(n["k"])(e[t].text),1)])})),128))])])}var O=r("d4ec"),v=r("bee2"),g=r("bc3a"),y=r.n(g),m=y.a.create({baseURL:"http://192.168.20.193:55525"}),x=function(){function e(){Object(O["a"])(this,e)}return Object(v["a"])(e,[{key:"upload",value:function(e,t){var r=new FormData;return r.append("file",e),m.post("/api/v1/audios",r,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:t})}},{key:"getText",value:function(){return m.get("/api/v1/texts",{headers:{"Content-Type":"application/json"}})}}]),e}(),w=new x,F={name:"upload-files",data(){return{selectedFiles:void 0,currentFile:void 0,progress:0,message:"",url:"",fileInfos:[],texts:[]}},methods:{selectFile(){this.selectedFiles=this.$refs.file.files},upload(){this.progress=0,this.currentFile=this.selectedFiles.item(0),w.upload(this.currentFile,e=>{this.progress=Math.round(100*e.loaded/e.total)}).then(e=>{this.message=e.data.message,this.url=e.data.url,this.texts=[],console.log(e.data.text),this.texts.push(e.data.text),console.log(this.texts)}).catch(()=>{this.progress=0,this.message="",this.currentFile=void 0}),this.selectedFiles=void 0},getText(){w.getText().then(e=>{const{data:t}=e.data.text;console.log(t),this.texts=t}).catch(e=>{alert(e)})}}};F.render=j;var k=F,P={name:"App",components:{UploadFiles:k}};P.render=o;var S=P;Object(n["b"])(S).mount("#app")}});
//# sourceMappingURL=app.8c3a42b3.js.map