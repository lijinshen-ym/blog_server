(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13a4a9f9"],{"162e":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fmbox"},[n("my-scroll",[n("div",{staticClass:"banner"},[n("el-carousel",{attrs:{interval:4e3,type:"card",height:t.bannerHeight+"px"}},t._l(t.banners,(function(t,e){return n("el-carousel-item",{key:e,staticStyle:{textAlign:"center"}},[n("img",{attrs:{src:t.imageUrl}})])})),1)],1),n("div",{staticClass:"banner2"},[n("el-carousel",{attrs:{interval:5e3,height:" 150px"}},t._l(t.banners,(function(t,e){return n("el-carousel-item",{key:e,staticStyle:{textAlign:"center"}},[n("img",{attrs:{src:t.imageUrl}})])})),1)],1),n("div",{staticClass:"recommended"},[n("h3",[t._v("推荐歌单")]),n("div",{staticClass:"recombox"},t._l(t.recommends,(function(e,s){return n("div",{key:s,staticClass:"recom-item"},[n("div",{staticClass:"imgbox",on:{click:function(n){return t.golist(e.id)}}},[n("div",{staticClass:"dsc"},[t._v(t._s(e.copywriter))]),n("img",{attrs:{src:e.picUrl,alt:""}}),n("span",{staticClass:"iconfont icon-play"})]),n("p",[t._v(t._s(e.name))])])})),0)]),n("div",{staticClass:"single"},[n("h3",[t._v("最新单曲")]),n("div",{staticClass:"singlebox"},t._l(t.singles,(function(e,s){return n("div",{key:s,staticClass:"single-item",on:{click:function(n){return t.onPaly(e)}}},[n("div",{staticClass:"single-left"},[n("img",{attrs:{src:e.picUrl,alt:""}}),n("div",{staticClass:"iconbox"},[n("span",{staticClass:"iconfont icon-play"})])]),n("div",{staticClass:"single-right"},[n("p",[t._v(t._s(e.name))]),n("span",[t._v(t._s(e.song.artists[0].name))])])])})),0)]),n("div",{staticClass:"mv"},[n("h3",[t._v("推荐MV")]),n("div",{staticClass:"mvbox"},t._l(t.mvs,(function(e,s){return n("div",{key:s,staticClass:"mv-item",on:{click:function(n){return t.toMv(e.id)}}},[n("div",{staticClass:"mv-img"},[n("img",{attrs:{src:e.picUrl,alt:""}}),n("div",{staticClass:"iconbox"},[n("span",{staticClass:"iconfont icon-play"})]),n("div",{staticClass:"views"},[n("span",{staticClass:"iconfont icon-play"}),n("span",[t._v(t._s(e.playCount))])])]),n("p",[t._v(t._s(e.name))]),n("span",[t._v(t._s(e.artists[0].name))])])})),0)])])],1)},i=[],r=(n("dca8"),n("96cf"),n("1da1")),a=n("1857"),c={name:"findmusic",data:function(){return{bannerHeight:1e3,screenWidth:0,loading:!0,banners:[],recommends:[],singles:[],mvs:[]}},created:function(){this.getbanner(),this.getrecommend(),this.getsingle(),this.getmv()},mounted:function(){var t=this;this.screenWidth=window.innerWidth,this.setSize(),window.onresize=function(){t.screenWidth=window.innerWidth,t.setSize()}},methods:{toMv:function(t){this.$router.push("/musichome/videoinfo?id=".concat(t))},golist:function(t){this.$router.push("/musichome/listinfo?id=".concat(t))},getbanner:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["b"])();case 2:n=e.sent,t.banners=Object.freeze(n.banners);case 4:case"end":return e.stop()}}),e)})))()},getrecommend:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["j"])({limit:12});case 2:n=e.sent,t.recommends=Object.freeze(n.result);case 4:case"end":return e.stop()}}),e)})))()},getsingle:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["k"])();case 2:n=e.sent,t.singles=Object.freeze(n.result);case 4:case"end":return e.stop()}}),e)})))()},getmv:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["h"])();case 2:n=e.sent,t.mvs=Object.freeze(n.result);case 4:case"end":return e.stop()}}),e)})))()},onPaly:function(t){this.$store.dispatch("getSong",{id:t.id,autoPlay:1})},setSize:function(){this.bannerHeight=.125*this.screenWidth}}},o=c,l=(n("c908"),n("2877")),u=Object(l["a"])(o,s,i,!1,null,"517493ee",null);e["default"]=u.exports},"1e0b":function(t,e,n){},c908:function(t,e,n){"use strict";var s=n("1e0b"),i=n.n(s);i.a}}]);