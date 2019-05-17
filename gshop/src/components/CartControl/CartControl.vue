<!-- 加号 减号 购物数量的组件 -->

<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont icon-ic_remove_circle" v-if="food.count" @click.stop="updataFoodCount(false)"></div>
    </transition>
    <div class="cart-count" v-if="food.count">{{food.count}}</div>
    <!-- 点击事件加一个stop阻止事件冒泡  点击加号减号时避免触发li标签的点击显示大图事件   -->
    <div class="iconfont icon-addcircle" @click.stop="updataFoodCount(true)"></div>
  </div>
</template>

<script>
export default {
  props: {
    food: Object
  },
  methods: {
    updataFoodCount(isAdd) {
      this.$store.dispatch("updataFoodCount", { isAdd, food: this.food });
    }
  }
};
</script>

<style lang="stylus">
@import '../../common/stylus/mixins.styl';

.cartcontrol {
  font-size: 0;

  .cart-decrease {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: rgb(0, 160, 220);
  }

  .icon-ic_remove_circle {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 22px;
    color: $green;

    &.move-enter-active, &.move-leave-active {
      transition: all 0.5s;
    }

    &.move-enter, &.move-leave-to {
      opacity: 0;
      transform: translateX(15px) rotate(180deg);
    }
  }

  .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }

  .icon-addcircle {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 22px;
    color: $green;
  }
}
</style>
