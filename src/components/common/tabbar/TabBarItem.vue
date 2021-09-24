<template>
  <div class="tab-bar-item" @click="tabClick">
    <div v-if="!isActive">
    <slot name="item-icon"></slot>
    </div>
    <div v-else>
    <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabBarItem',
  data () {
    return {
      // message: ['首页','首页','首页','我的'],
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle () {
      return this.isActive ? {color: this.activeColor} : {};
    }

  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#f00'
    }
  },
  methods: {
    tabClick () {
      this.$router.push(this.path, () => {});
    }
  }
}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    /* height: 20px; */
    width: 30px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  /* .active {
    color: #f00;
  } */
</style>