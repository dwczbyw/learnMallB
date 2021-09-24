<template>
  <div class="recommends">
    <div v-for="(item,index) in recommends" :key="index" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style>
  .recommends {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 14px;
    padding: 10px;
    border-bottom: 8px solid #eee;
  }

  .recommends-item {
    flex: 1;
  }

  .recommends-item img {
    width: 80%;
  }
</style>