(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21bcfee4"],{"2e78":function(t,e,i){},"67ed":function(t,e,i){"use strict";var s=i("2e78"),a=i.n(s);a.a},fa20:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"arcontainer"}},[i("div",{staticClass:"go"},[i("span",{on:{click:t.goback}},[t._v("返回")])]),i("vue-scroll",{attrs:{ops:t.ops}},[i("div",{staticClass:"scollbox"},[i("div",{attrs:{id:"articlebox"}},[i("div",{staticClass:"titlebox"},[i("div",{staticClass:"decorated"}),i("div",{staticClass:"title",domProps:{innerHTML:t._s(t.content.title)}})]),i("div",{attrs:{id:"arother"}},[i("span",[i("i",{staticClass:"el-icon-view"}),t._v(" "+t._s(t.views)+" ")]),i("span",[i("i",{staticClass:"el-icon-s-grid"}),t._v(" "+t._s(this.category[0])+" ")]),i("span",[i("i",{staticClass:"el-icon-date"}),t._v(" "+t._s(t.content.date)+" ")])]),i("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"markdown-body",domProps:{innerHTML:t._s(t.content.content)}})])])])],1)},a=[],n=i("365c"),c=(i("64e1"),{data:function(){return{category:[],content:{},views:null,distance:null,page:null,ops:{vuescroll:{sizeStrategy:"percent",detectResize:!0},scrollPanel:{},rail:{},bar:{showDelay:500,onlyShowBarOnScroll:!1,keepShow:!1,background:"#b3c0d1",opacity:1,hoverStyle:!1,specifyBorderRadius:!1,minSize:!1,size:"6px",disable:!1}}}},created:function(){var t=this.$route.query,e=t.distance,i=t.page;this.distance=e,this.page=i,this.getarticle()},watch:{$route:function(t,e){this.getarticle()}},methods:{getarticle:function(){var t=this;Object(n["i"])(this.$route.query).then((function(e){t.content=e.data[0],t.category=t.content.category,t.views=t.content.views}))},goback:function(){this.$router.push({path:"/home",query:{distance:this.distance,page:this.page}})}}}),o=c,r=(i("67ed"),i("2877")),l=Object(r["a"])(o,s,a,!1,null,null,null);e["default"]=l.exports}}]);