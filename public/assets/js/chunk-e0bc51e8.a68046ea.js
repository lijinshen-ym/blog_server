(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e0bc51e8"],{"08fd":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mv-container"},[n("my-scroll",[n("div",{staticClass:"mv-wrap"},[n("div",{staticClass:"video-wrap"},[n("video",{attrs:{controls:"",autoplay:"",src:t.mvUrl}})]),n("div",{staticClass:"info-wrap"},[n("div",{staticClass:"singer-info"},[n("div",{staticClass:"avatar-wrap"},[n("img",{attrs:{src:t.songer.picUrl,alt:""}})]),n("span",{staticClass:"name"},[t._v(t._s(t.mvInfo.artistName))]),n("span",{staticClass:"date"},[t._v("发布："+t._s(t.mvInfo.publishTime))]),n("span",{staticClass:"number"},[t._v("播放："+t._s(t.mvInfo.playCount)+"次")])]),n("div",{staticClass:"mv-info"},[n("h2",{staticClass:"title"},[t._v(t._s(t.mvInfo.name))]),n("div",{staticClass:"desc"},[t._v(t._s(t.mvInfo.desc))])])])])])],1)},r=[],s=(n("96cf"),n("1da1")),i=n("1857"),c={name:"mv",data:function(){return{total:20,page:1,limit:10,mvUrl:"",mvInfo:{},songer:{}}},watch:{},created:function(){this.getMv(),this.getInfo()},methods:{handleCurrentChange:function(t){},getMv:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["l"])({id:t.$route.query.id});case 2:n=e.sent,t.mvUrl=n.data.url;case 4:case"end":return e.stop()}}),e)})))()},getInfo:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["i"])({mvid:t.$route.query.id});case 2:n=e.sent,t.mvInfo=n.data,t.getSonger();case 5:case"end":return e.stop()}}),e)})))()},getSonger:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["p"])({id:t.mvInfo.artistId});case 2:n=e.sent,t.songer=n.artist;case 4:case"end":return e.stop()}}),e)})))()}}},o=c,u=(n("f8b7"),n("2877")),v=Object(u["a"])(o,a,r,!1,null,"86f4f72e",null);e["default"]=v.exports},dff4:function(t,e,n){},f8b7:function(t,e,n){"use strict";var a=n("dff4"),r=n.n(a);r.a}}]);