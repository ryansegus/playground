<template >
<header :class="[layoutClassName, {'is-fixed': isFixed}]">
<div id="mainMenu" :class="`${layoutClassName}__box`">
        <!-- We could use a smaller image for the placeholder -->
        <v-lazy-image
          class="c-brandLogo"
          :src="require('@/assets/images/logo-playground-white.png')"
          :src-placeholder="require('@/assets/images/logo-playground-white.png')"
        />
    <div :class="`${layoutClassName}__links`">
        <the-main-menu-links :is-mobile="isMobile"/>
    </div>
</div>
</header>
</template>

<script>
import _ from 'lodash'

// Components
import VLazyImage from "v-lazy-image";
import TheMainMenuLinks from '../components/TheMainMenuLinks'

export default {
    name: "TheMainMenu",
    props: {
    isMobile: {
      type: [Boolean],
      required: true
    }
  },
  data() {
    return {
        layoutClassName: 'l-mainMenu',
        isFixed: this.checkScrollPosition(),
      }
  },
  components: {
    VLazyImage,
    TheMainMenuLinks
    },
  methods: {
    checkScrollPosition() {
      return window.scrollY > 60 ? true : false;
    },
    handleScroll: _.throttle(function() {
        this.isFixed = this.checkScrollPosition();
    }, 250)
  },
  mounted: function() {
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>
