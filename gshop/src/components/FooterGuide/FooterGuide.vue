<!-- 底部组件 -->
<template>
  <div class="footer_guide">
    <!-- on代表的是当前的样式  对象语法 :class="{类名:布尔值}" 使用场景 类名确定不确定有还是没有该类-->
    <a
      href="javascript:;"
      class="guide_item"
      :class="{on:'/msite'===$route.path}"
      @click="goTo('/msite')"
    >
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </a>
    <!-- 不一定要用a标签  是通过类来控制的样式  所以标签没有要求 -->
    <span
      href="javascript:;"
      class="guide_item"
      :class="{on:'/search'===$route.path}"
      @click="goTo('/search')"
    >
      <span class="item_icon">
        <i class="iconfont icon-Search"></i>
      </span>
      <span>搜索</span>
    </span>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{on:'/order'===$route.path}"
      @click="goTo('/order')"
    >
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{on:'/profile'===$route.path}"
      @click="goTo('/profile')"
    >
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
// 写的是stylus的样式  Alt+Shift+F格式自动加的{ : ; }
.footer_guide { // footer
  top-border-1px(#e4e4e4);
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;

  .guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999999;

    &.on {
      color: #02a774;
    }

    span {
      font-size: 12px;
      margin-top: 2px;
      margin-bottom: 2px;

      .iconfont {
        font-size: 22px;
      }
    }
  }
}
</style>
