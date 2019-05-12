<template>
<div :class="[`c-carousel__arrows`, `c-carousel__arrows${modifierClass}`]"
    @click="goto">
      <span :class="['c-chevron', `c-chevron${modifierClass}`]"></span>
    </div>
</template>

<script>
export default {
  name: 'TheChevron',
  props: {
    isLeft: {
      type: [Boolean],
      required: true
    },
    goto:{
      type: [Function],
      required: true,
    }
  },
  computed: {
    modifierClass() {
      return this.isLeft ? '--left' : '--right'
    }
  }
}
</script>

