(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e94bc91c"],{"179a":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"playlists-container"},[s("my-scroll",{ref:"listScroll"},[s("div",{staticClass:"top-card"},[s("div",{staticClass:"icon-wrap"},[s("img",{attrs:{src:t.highQuality.coverImgUrl,alt:""}})]),s("div",{staticClass:"content-wrap"},[s("div",{staticClass:"tag",on:{click:function(a){return t.golist(t.highQuality.id)}}},[t._v("精品歌单")]),s("div",{staticClass:"title"},[t._v(t._s(t.highQuality.name))]),s("div",{staticClass:"info"},[t._v(t._s(t.highQuality.description))])]),s("img",{staticClass:"bg",attrs:{src:t.highQuality.coverImgUrl,alt:""}}),s("div",{staticClass:"bg-mask"})]),s("div",{staticClass:"tab-container"},[s("div",{staticClass:"tab-bar"},[s("span",{staticClass:"item",class:{active:"全部"===t.tag},on:{click:function(a){t.tag="全部"}}},[t._v("全部")]),s("span",{staticClass:"item",class:{active:"欧美"===t.tag},on:{click:function(a){t.tag="欧美"}}},[t._v("欧美")]),s("span",{staticClass:"item",class:{active:"华语"===t.tag},on:{click:function(a){t.tag="华语"}}},[t._v("华语")]),s("span",{staticClass:"item",class:{active:"流行"===t.tag},on:{click:function(a){t.tag="流行"}}},[t._v("流行")]),s("span",{staticClass:"item",class:{active:"说唱"===t.tag},on:{click:function(a){t.tag="说唱"}}},[t._v("说唱")]),s("span",{staticClass:"item",class:{active:"摇滚"===t.tag},on:{click:function(a){t.tag="摇滚"}}},[t._v("摇滚")]),s("span",{staticClass:"item",class:{active:"民谣"===t.tag},on:{click:function(a){t.tag="民谣"}}},[t._v("民谣")]),s("span",{staticClass:"item",class:{active:"电子"===t.tag},on:{click:function(a){t.tag="电子"}}},[t._v("电子")]),s("span",{staticClass:"item",class:{active:"轻音乐"===t.tag},on:{click:function(a){t.tag="轻音乐"}}},[t._v("轻音乐")]),s("span",{staticClass:"item",class:{active:"影视原声"===t.tag},on:{click:function(a){t.tag="影视原声"}}},[t._v("影视原声")]),s("span",{staticClass:"item",class:{active:"ACG"===t.tag},on:{click:function(a){t.tag="ACG"}}},[t._v("ACG")]),s("span",{staticClass:"item",class:{active:"怀旧"===t.tag},on:{click:function(a){t.tag="怀旧"}}},[t._v("怀旧")]),s("span",{staticClass:"item",class:{active:"治愈"===t.tag},on:{click:function(a){t.tag="治愈"}}},[t._v("治愈")]),s("span",{staticClass:"item",class:{active:"旅行"===t.tag},on:{click:function(a){t.tag="旅行"}}},[t._v("旅行")])]),s("div",{staticClass:"recommended"},[s("div",{staticClass:"recombox"},t._l(t.palyLists,(function(a,i){return s("div",{key:i,staticClass:"recom-item"},[s("div",{staticClass:"imgbox",on:{click:function(s){return t.golist(a.id)}}},[s("div",{staticClass:"dsc"},[s("i",[t._v("播放量："+t._s(t._f("count")(a.subscribedCount)))])]),s("img",{attrs:{src:a.coverImgUrl,alt:""}}),s("span",{staticClass:"iconfont icon-play"})]),s("p",[t._v(t._s(a.name))])])})),0)])]),s("div",{staticClass:"pagebox"},[s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":t.limit},on:{"current-change":t.handleCurrentChange}})],1),s("div",{staticClass:"more",on:{click:t.more}},[t._v(" 查看更多 ")])])],1)},c=[],n=s("2909"),e=(s("96cf"),s("1da1")),l=s("1857"),r={name:"recommend",data:function(){return{highQuality:{},tag:"全部",palyLists:[],total:0,limit:12,page:1}},created:function(){this.gethightquality(),this.getList()},filters:{count:function(t){return t>1e4&&(t=Math.ceil(t/1e4)+"万"),t}},watch:{tag:function(t,a){this.page=1,this.tag=t,this.gethightquality(),this.getList()}},methods:{golist:function(t){this.$router.push("/musichome/listinfo?id=".concat(t))},handleCurrentChange:function(t){this.page=t,this.getList(),this.$refs["listScroll"].$refs["vs"].scrollTo({y:"0%"},0)},gethightquality:function(){var t=this;return Object(e["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(l["c"])({cat:t.tag});case 2:s=a.sent,t.highQuality=s.playlists[0];case 4:case"end":return a.stop()}}),a)})))()},getList:function(){var t=this;return Object(e["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(l["d"])({offset:(t.page-1)*t.limit,cat:t.tag,limit:12});case 2:s=a.sent,t.palyLists=s.playlists,t.total=s.total;case 5:case"end":return a.stop()}}),a)})))()},more:function(){var t=this;return Object(e["a"])(regeneratorRuntime.mark((function a(){var s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(l["d"])({offset:(t.page-1)*t.limit,cat:t.tag,limit:12});case 2:i=a.sent,(s=t.palyLists).push.apply(s,Object(n["a"])(i.playlists)),t.total=i.total;case 5:case"end":return a.stop()}}),a)})))()}}},o=r,u=(s("c3cd"),s("2877")),g=Object(u["a"])(o,i,c,!1,null,"14f2dfc5",null);a["default"]=g.exports},"429c":function(t,a,s){},c3cd:function(t,a,s){"use strict";var i=s("429c"),c=s.n(i);c.a}}]);