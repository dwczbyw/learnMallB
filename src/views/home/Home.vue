<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroller class="home-scroller" ref="scroller" :probe-type="3" @scroll="getPosition" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :ctitles="titless" class="tab-control" @tabClick="tabClick"></tab-control>
      <goods-list :lists="showGoods"></goods-list>
    </scroller>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroller from 'components/common/scroller/Scroller.vue'
import BackTop from 'components/content/backTop/BackTop.vue'

import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

import {getHomeMultidata, getHomeGood} from 'network/home.js'

export default {
  // name: 'Home',
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroller,
    BackTop,

    HomeSwiper,
    RecommendView,
    FeatureView,

  },
  data() {
    return {
      banners: null,
      recommends: null,
      titless: ['流行','新款','精选'],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop',
      isShowBackTop: false
    }
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGood('pop');
    this.getHomeGood('new');
    this.getHomeGood('sell');
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      this.recommends = res.data.recommend.list;
      this.banners = res.data.banner.list;
    })
    },

    getHomeGood(type) {
      const page = this.goods[type].page +1;
      getHomeGood(type,page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      })
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },
    getPosition(position) {
      this.isShowBackTop = -position.y > 300
    },
    backTopClick() {
      this.$refs.scroller.scrollTo(0,0,500)
    },
    loadMore() {
      this.getHomeGood(this.currentType);
      this.$refs.scroller.finishPullUp();
      // this.BetterScroll.refresh()
      this.$refs.scroller.scroller.refresh();

    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  
}
</script>

<style>
  #home {
    padding-top: 44px;
    position: relative;
    height: 100vh;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: var(--color-background);

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .home-scroller {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }
</style>