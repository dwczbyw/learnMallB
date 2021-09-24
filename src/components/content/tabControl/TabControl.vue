<template>
  <div class="tab-control">
    <div v-for="(item,index) in ctitles" :key="index" class="tab-control-item" :class="{active: index==currentIndex}" @click="tabControlClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ctitles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabControlClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index);
    }
  }
}
</script>

<style>
  .tab-control {
    display: flex;
    font-size: 14px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-tint);
  }
</style>