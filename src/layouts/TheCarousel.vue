<template>
 <!-- This component is a kind of experiment with CSS I always wanted to try :) -->
  <div id="carousel" :class="componentClassName">
    <div v-for="(item, index) in slider"
      :class="[`${componentClassName}__item`, `${componentClassName}__item--${activeSlider}`]" :key="index">
      <v-lazy-image :class="`${componentClassName}__img`" :src="require(`@/assets/images/slider/${item.img}`)"
        :src-placeholder="require('@/assets/images/logo-playground-white.png')" />
      <div :class="`${componentClassName}__text`">
        <h2 :class="`${componentClassName}__title`">lorem ipsum.</h2>
        <p :class="`${componentClassName}__paragraph`">Consectetur adipiscing elit.<br>
          Nulla condimentum tortor sem,<br>
          in semper nisl bibendum eu.</p>
      </div>
    </div>
    <div :class="`${componentClassName}__dotsBox`">
      <div v-for="(dot, index) in slider" :key="index"
      :class="[`${componentClassName}__dotsItem`, {'is-active': activeSlider == index}]"
      @click="setActiveIndex(index)"></div>
    </div>
    <the-chevron :is-left="true" :goto="goToPrevSlide"/>
    <the-chevron :is-left="false" :goto="goToNextSlide"/>
  </div>
</template>

<script>
// Components
import VLazyImage from "v-lazy-image";
import TheChevron from '../components/TheChevron'

export default {
  name: "TheCarousel",
  data() {
    return {
        componentClassName: 'c-carousel',
        slider: {
          1: {img: 'slide-circle.jpg'},
          2: {img: 'slide-play.jpg'},
          3: {img: 'slide-hello.jpg'},
        },
        activeSlider: 1,
      }
  },
  components: {
    VLazyImage,
    TheChevron,
    },
  methods: {
    setActiveIndex(index) {
      this.activeSlider = parseInt(index, 10);
    },
    goToPrevSlide() {
      this.activeSlider = this.activeSlider > 1 ? this.activeSlider -1 : this.activeSlider ;
    },
    goToNextSlide() {
      this.activeSlider = this.activeSlider < 3 ? this.activeSlider +1 : this.activeSlider ;
    },
  }
};
</script>
