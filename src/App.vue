<template>
  <div id="app">
    <the-main-menu :is-mobile="isMobile"/>
    <the-carousel/>
    <the-cards/>
    <the-banners/>
    <the-tabs/>
  </div>
</template>

<script>
import modernizr from "modernizr";
import _ from 'lodash'

// Layouts
import TheMainMenu from './layouts/TheMainMenu'
import TheCarousel from './layouts/TheCarousel'
import TheCards from './layouts/TheCards'
import TheBanners from './layouts/TheBanners'
import TheTabs from './layouts/TheTabs'

export default {
  name: 'app',
  components: {
    TheMainMenu,
    TheCarousel,
    TheCards,
    TheBanners,
    TheTabs,
  },
  data() {
    return {
        modern: modernizr,
        isMobile: this.checkWindowInnerWidth(),
      }
  },
  methods: {
    checkWindowInnerWidth: function () {
      return (window.innerWidth < 768)
    },
    handleResize: _.debounce(function () {
      this.isMobile = this.checkWindowInnerWidth();
    }, 100)
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize)
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #EEE;
}
</style>
