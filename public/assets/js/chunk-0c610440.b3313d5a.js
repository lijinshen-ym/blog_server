(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c610440"],{"0944":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"messsagebox"},[t("div",{staticClass:"mseleft"},[e._m(0),t("el-input",{attrs:{placeholder:"请输入昵称",maxlength:"10","show-word-limit":"","prefix-icon":"el-icon-user-solid",clearable:"",autofocus:"true"},model:{value:e.name,callback:function(s){e.name=s},expression:"name"}}),t("el-input",{attrs:{type:"textarea",maxlength:"60","show-word-limit":"",placeholder:"请输入内容",clearable:""},model:{value:e.content,callback:function(s){e.content=s},expression:"content"}}),t("div",{staticClass:"btubox"},[t("el-button",{attrs:{type:"primary",icon:"el-icon-s-promotion"},on:{click:e.postmessage}},[e._v("发表留言")])],1),e._m(1),t("el-input",{attrs:{placeholder:"输入昵称后即可查找相关留言",maxlength:"10","show-word-limit":"","prefix-icon":"el-icon-search",clearable:""},model:{value:e.serachName,callback:function(s){e.serachName=s},expression:"serachName"}}),t("div",{staticClass:"btubox searchbox"},[t("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.serachall}},[e._v("查看所有")]),t("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.serachmessage}},[e._v("立即查找")])],1)],1),t("div",{staticClass:"mseright"},[t("div",{staticClass:"boxtitle"},[e._v("留言板")]),t("div",{staticClass:"scrollbox"},[t("vue-scroll",{attrs:{ops:e.ops}},[t("div",e._l(e.messageArray,(function(s,a){return t("el-card",{key:a,staticClass:"box-card"},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",{staticClass:"userName",class:{adminName:s.isAdmin}},[e._v(e._s(s.name))]),t("span",{staticClass:"date",class:{adminDate:s.isAdmin}},[e._v(e._s(s.date))])]),t("div",{staticClass:"msgcont",class:{admincont:s.isAdmin}},[e._v(e._s(s.content))])])})),1)])],1)])])},n=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"titlebox"},[t("h3",[e._v("留言区")]),t("span",{staticClass:"color"})])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"titlebox"},[t("span",{staticClass:"color"}),t("h3",[e._v("查找区")])])}],c=(t("b0c0"),t("365c")),i={name:"message",data:function(){return{name:"",content:"",serachName:"",crrentPage:1,maxPage:0,limit:6,messageArray:[],ops:{vuescroll:{sizeStrategy:"percent",detectResize:!0},scrollPanel:{},rail:{},bar:{showDelay:500,onlyShowBarOnScroll:!1,keepShow:!1,background:"#b3c0d1",opacity:1,hoverStyle:!1,specifyBorderRadius:!1,minSize:!1,size:"6px",disable:!1}}}},created:function(){this.getmessage({name:""})},methods:{postmessage:function(){var e=this;""==this.name||""==this.content?this.$notify.error({title:"错误",message:"昵称或者内容不能为空"}):Object(c["s"])({name:this.name,content:this.content}).then((function(s){s.status?(e.$notify({title:"成功",message:s.msg,type:"success"}),e.getmessage({name:""})):e.$message.error(s.msg)}))},getmessage:function(e){var s=this;Object(c["l"])(e).then((function(e){e.status?(s.messageArray=e.data,s.name="",s.content=""):s.$message.error(e.msg)}))},serachall:function(){this.getmessage({name:""})},serachmessage:function(){this.getmessage({name:this.serachName})}}},l=i,o=(t("109e"),t("2877")),r=Object(o["a"])(l,a,n,!1,null,"3790e2aa",null);s["default"]=r.exports},"109e":function(e,s,t){"use strict";var a=t("7e41"),n=t.n(a);n.a},"7e41":function(e,s,t){}}]);