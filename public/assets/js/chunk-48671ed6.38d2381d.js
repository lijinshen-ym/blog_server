(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48671ed6"],{"3ce1":function(t,e,a){"use strict";var i=a("c8f2"),n=a.n(i);n.a},5585:function(t,e,a){"use strict";var i=a("ac61"),n=a.n(i);n.a},ac61:function(t,e,a){},b3d7:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%",height:"100%"},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}},[a("my-scroll",{ref:"myscroll",attrs:{distance:t.distance}},[a("div",{staticClass:"home"},[a("div",{staticClass:"box",attrs:{id:"box"}},[t._l(t.data,(function(e,i){return a("article-item",{key:i,staticClass:"articleitem",attrs:{article:e},nativeOn:{click:function(a){return t.handlerarticle(e._id)}}})})),a("div",{staticClass:"page"},[a("div",{staticClass:"pagebox"},[a("el-pagination",{attrs:{background:"",layout:"total ,prev, pager, next ,jumper","page-size":t.pageSize,total:t.total,"current-page":t.currentPage},on:{"current-change":t.handleCurrentChange}})],1),a("div",{staticClass:"more",on:{click:t.more}},[t._v(" 查看更多 ")])])],2)])])],1)},n=[],s=(a("dca8"),a("2909")),r=(a("96cf"),a("1da1")),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"itembox"},[a("div",{staticClass:"titlebox1"},[a("span",{staticClass:"colorbox"}),a("span",{staticClass:"title",domProps:{textContent:t._s(t.article.title)}})]),a("div",{staticClass:"content"},[a("div",{staticClass:"ar_img_box",domProps:{innerHTML:t._s(t.article.background)}}),a("div",{staticClass:"titlebox2"},[a("span",{staticClass:"title",domProps:{textContent:t._s(t.article.title)}})]),a("div",{staticClass:"intro"},[a("div",{staticClass:"introcontent",domProps:{textContent:t._s(t.article.Intro)}}),a("div",{staticClass:"other"},[a("span",{staticClass:"time"},[a("i",{staticClass:"el-icon-date"}),t._v(" 时间："+t._s(t.article.date)+" ")]),a("span",{staticClass:"category"},[a("i",{staticClass:"el-icon-s-grid"}),t._v(" 分类："+t._s(t.article.category[0])+" ")]),a("span",{staticClass:"view"},[a("i",{staticClass:"el-icon-view"}),t._v(" 浏览："+t._s(t.article.views)+" ")])])])])])},o=[],l={data:function(){return{}},props:["article"]},u=l,d=(a("fcea"),a("5585"),a("2877")),g=Object(d["a"])(u,c,o,!1,null,"1ae6804a",null),p=g.exports,v=a("0c6d"),h={name:"home",data:function(){return{loading:!0,value:1,total:null,pageSize:6,currentPage:1,data:[],distance:0,page:1}},created:function(){var t=window.localStorage.getItem("sort");if(t&&(this.value=t),this.$route.query.page){var e=this.$route.query,a=e.page,i=e.distance;this.currentPage=+a,this.distance=+i}this.getData(this.currentPage)},beforeDestroy:function(){},components:{ArticleItem:p},mounted:function(){var t=this;this.$EventBus.$on("sort",(function(e){t.value=e,t.currentPage=1,t.getData(t.currentPage)}))},methods:{handleCurrentChange:function(t){this.currentPage=t,this.distance=0,this.getData(this.currentPage),this.$refs["myscroll"].$refs["vs"].scrollTo({y:"0%"})},getData:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var i,n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(v["a"])({url:"/article/obtain",data:{page:t,limit:e.pageSize,sort:e.value},method:"get"});case 2:i=a.sent,n=i.count,s=i.data,e.data=[],e.total=Object.freeze(n),e.data=s,e.loading=!1;case 9:case"end":return a.stop()}}),a)})))()},more:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,i,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.page++,e.next=3,Object(v["a"])({url:"/article/obtain",data:{page:page,limit:t.pageSize,sort:t.value},method:"get"});case 3:i=e.sent,n=i.count,r=i.data,t.total=Object.freeze(n),(a=t.data).push.apply(a,Object(s["a"])(r)),t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()},handlerarticle:function(t){var e=this.$refs["myscroll"].$refs["vs"].getPosition(),a=e.scrollTop;e.scrollLeft;this.$router.push({name:"article",query:{id:t,distance:a,page:this.currentPage}})}}},f=h,m=(a("3ce1"),Object(d["a"])(f,i,n,!1,null,"189d62c7",null));e["default"]=m.exports},c8f2:function(t,e,a){},da8a:function(t,e,a){},fcea:function(t,e,a){"use strict";var i=a("da8a"),n=a.n(i);n.a}}]);