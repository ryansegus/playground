<template>
<div :class="`${componentClassName}`">
  <button v-if="isMobile"
  :class="`${componentClassName}__toggle`"
  @click="toggleMobileMenu">{{ buttonText }}</button>
<!--  I Won't use nav or a tags here since it is a landing
page and won't navigate anywhere   -->
  <ul :class="[`${componentClassName}__list`, {'is-open': showMobileMenu}, {'is-desktop': !isMobile}]"
  v-if="(isMobile && showMobileMenu) || !isMobile">
    <li :class="[`${componentClassName}__item`, {'is-active': isActive === index}]"
    :active="isActive === index"
    v-for="(item, index) in mainMenu"
    :key="index"
    @click="setActiveItem(index)">{{ item }}</li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'TheMainMenuLinks',
  props: {
    isMobile: {
      type: [Boolean],
      required: true
    }
  },
  data() {
    return {
      componentClassName: 'c-mainMenu',
      mainMenu: ['we are', 'we do', 'careers', 'contact us', 'arcade'],
      isActive: null,
      showMobileMenu: false,
      }
  },
  computed: {
    buttonText() {
      return this.showMobileMenu ? 'close' : 'menu'
    }
  },
  methods: {
    setActiveItem(index) {
      this.isActive = index;
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    }
  }
}
</script>

