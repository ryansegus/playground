<template>
  <div id="banners" class="l-banners">
    <div v-for="(item, index) in banners" :class="[`${componentClassName}`]" :key="index">
      <v-lazy-image :class="`${componentClassName}__img`" :src="require(`@/assets/images/banners/${item.img}`)"
        :src-placeholder="require(`@/assets/images/banners/${item.img}`)" />
      <div :class="[`${componentClassName}__contentBox`, (index % 2) === 0 ? 'c-banner__contentBox--even' : 'c-banner__contentBox--odd']">
        <h2 :class="`${componentClassName}__title`" v-html="item.title" />
        <div :class="`${componentClassName}__content`">{{ item.content }}</div>
        <a href="#" :class="[`${componentClassName}__link`, (index % 2) === 0 ? 'c-banner__link--even' : 'c-banner__link--odd']">{{ item.button }} <i class="fas fa-chevron-right"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
// Components
import VLazyImage from "v-lazy-image";

export default {
  name: "TheBanners",
  data() {
    return {
        componentClassName: 'c-banner',
        banners: {
          1: {
            img: 'banner-we-are.jpg',
            title: 'we<br>are.',
            content: 'Consectetur adipiscing elit. Nulla condimentum tortor sem.',
            button: 'THE PLAYERS'
            },
          2: {
            img: 'banner-we-do.jpg',
            title: 'we<br>do.',
            content: 'Consectetur adipiscing elit. Nulla condimentum tortor sem.',
            button: 'THE PROJECTS'
            },
          3: {
            img: 'banner-carrers.jpg',
            title: 'careers.',
            content: 'Consectetur adipiscing elit. Nulla condimentum tortor sem.',
            button: 'THE POSITIONS'
            },
          }
      }
  },
  components: {
    VLazyImage,
    }
};
</script>
