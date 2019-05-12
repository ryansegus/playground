<template>
  <div id="cards" class="l-cards">
    <div v-for="(item, index) in cards"
      :class="[`${componentClassName}__item`]" :key="index">
      <v-lazy-image :class="`${componentClassName}__img`" :src="require(`@/assets/images/cards/${item.img}`)"
        :src-placeholder="require('@/assets/images/logo-playground-white.png')" />
      <div :class="`${componentClassName}__content`">{{ item.content }}</div>
      <a href="#" :class="`${componentClassName}__link`">READ MORE</a>
    </div>
  </div>
</template>

<script>
// Components
import VLazyImage from "v-lazy-image";

export default {
  name: "TheCards",
  data() {
    return {
        componentClassName: 'c-card',
        cards: {
          1: {
            img: 'card-play-harder.png',
            title: 'PLAY HARDER',
            content: 'Aenean mollis dolor a mattis viverra. In hac habitasse platea dictumst. Curabitur tempus dui tortor, et bibendum lacus eleifend ut.'
            },
          2: {
            img: 'card-simplicity.png',
            title: 'SIMPLICITY',
            content: 'Donec vitae augue tellus. Proin et urna sit amet metus fermentum dapibus non quis urna.'
            },
          3: {
            img: 'card-innovation.png',
            title: 'INNOVATION',
            content: 'Suspendisse vehicula, lectus sed molestie aliquam, arcu neque gravida lacus.'
            },
          }
      }
  },
  components: {
    VLazyImage,
    }
};
</script>
