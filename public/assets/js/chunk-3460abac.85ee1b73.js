(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3460abac"],{aff9:function(t,s,e){},bc6e:function(t,s,e){"use strict";var a=e("aff9"),n=e.n(a);n.a},d96f:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"songs-container"},[e("div",{staticClass:"tab-bar"},[e("span",{staticClass:"item",class:{active:0==t.type},on:{click:function(s){t.type=0}}},[t._v("全部")]),e("span",{staticClass:"item",class:{active:7==t.type},on:{click:function(s){t.type=7}}},[t._v("华语")]),e("span",{staticClass:"item",class:{active:96==t.type},on:{click:function(s){t.type=96}}},[t._v("欧美")]),e("span",{staticClass:"item",class:{active:8==t.type},on:{click:function(s){t.type=8}}},[t._v("日本")]),e("span",{staticClass:"item",class:{active:16==t.type},on:{click:function(s){t.type=16}}},[t._v("韩国")])]),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"scrollbox",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading"}},[e("my-scroll",[e("table",{staticClass:"el-table playlit-table"},[e("thead",[e("th",{staticClass:"sort"}),e("th"),e("th",[t._v("音乐标题")]),e("th",[t._v("歌手")]),e("th",{staticClass:"zj"},[t._v("专辑")]),e("th",{staticClass:"time"},[t._v("时长")])]),e("tbody",t._l(t.songs,(function(s,a){return e("tr",{key:a,staticClass:"el-table__row",on:{click:function(e){return t.playmusic(s)}}},[e("td",{staticClass:"tr_sort",staticStyle:{width:"50px"}},[t._v(t._s(a+1))]),e("td",{staticStyle:{width:"100px"}},[e("div",{staticClass:"img-wrap"},[e("img",{attrs:{src:s.album.blurPicUrl,alt:""}}),e("span",{staticClass:"iconfont icon-play"})])]),e("td",[e("div",{staticClass:"song-wrap"},[e("div",{staticClass:"name-wrap"},[e("span",[t._v(t._s(s.name))]),s.mvid?e("span",{staticClass:"iconfont icon-mv"}):t._e()])])]),e("td",[t._v(t._s(s.artists[0].name))]),e("td",{staticClass:"td_zj"},[t._v(t._s(s.album.name))]),e("td",{staticClass:"tr_time"},[t._v(t._s(t._f("formDate")(s.duration)))])])})),0)])])],1)])},n=[],i=(e("fb6a"),e("dca8"),e("96cf"),e("1da1")),c=e("1857"),o={name:"songs",data:function(){return{type:0,allsongs:[],csongs:[],osongs:[],rsongs:[],hsongs:[],songs:[],loading:!0}},watch:{type:function(t,s){switch(this.loading=!0,this.type=t,this.type){case 0:this.allsongs.length?(this.songs=Object.freeze(this.allsongs),this.loading=!1):this.getSongs(this.allsongs);break;case 7:this.csongs.length?(this.songs=Object.freeze(this.csongs),this.loading=!1):this.getSongs(this.csongs);break;case 96:this.osongs.length?(this.songs=Object.freeze(this.osongs),this.loading=!1):this.getSongs(this.osongs);break;case 8:this.rsongs.length?(this.songs=Object.freeze(this.rsongs),this.loading=!1):this.getSongs(this.rsongs);break;case 16:this.hsongs.length?(this.songs=Object.freeze(this.hsongs),this.loading=!1):this.getSongs(this.hsongs)}}},filters:{formDate:function(t){var s=parseInt(t/1e3/60);s<10&&(s="0"+s);var e=parseInt(t/1e3%60);return e<10&&(e="0"+e),s+":"+e}},created:function(){this.getSongs(this.allsongs)},methods:{getSongs:function(t){var s=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["o"])({type:s.type});case 2:e=t.sent,a=e.data.slice(0,30),t.t0=s.type,t.next=0===t.t0?7:7===t.t0?9:96===t.t0?11:8===t.t0?13:16===t.t0?15:16;break;case 7:return s.allsongs=Object.freeze(a),t.abrupt("break",16);case 9:return s.csongs=Object.freeze(a),t.abrupt("break",16);case 11:return s.osongs=Object.freeze(a),t.abrupt("break",16);case 13:return s.rsongs=Object.freeze(a),t.abrupt("break",16);case 15:s.hsongs=Object.freeze(a);case 16:s.songs=Object.freeze(a),s.loading=!1;case 18:case"end":return t.stop()}}),t)})))()},playmusic:function(t){var s=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s.$store.dispatch("getSong",{id:t.id,autoPlay:1});case 1:case"end":return e.stop()}}),e)})))()}}},r=o,l=(e("bc6e"),e("2877")),g=Object(l["a"])(r,a,n,!1,null,"2cefb89b",null);s["default"]=g.exports}}]);