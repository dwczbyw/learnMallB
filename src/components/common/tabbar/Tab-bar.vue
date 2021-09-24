<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabBar'

}
</script>

<style>
  #tab-bar {
    display: flex;
    background-color: #eee;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -3px 1px rgba(red, green, blue, alpha);
  }
  
</style>