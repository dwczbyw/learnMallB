<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
  components: {

  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroller: null
    }
  },
  mounted() {
    this.scroller = new BetterScroll(this.$refs.wrapper, {
      // movable: true,
      // zoom: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
      observeDOM: true
    });
    this.scroller.on('scroll', (position) => {
      this.$emit('scroll', position)
    });
    this.scroller.on('pullingUp', () => {
      this.$emit('pullingUp');
    })
  },
  methods: {
    scrollTo(x,y,time=300) {
      this.scroller.scrollTo(x,y,time)
    },
    finishPullUp() {
      this.scroller.finishPullUp()
    }
  }
}
</script>

<style>

</style>