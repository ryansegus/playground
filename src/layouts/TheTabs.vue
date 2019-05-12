<template>
  <div id="tabs" class="l-tabs">
    <div :class="componentClassName">
      <div :class="`${componentClassName}__buttonsBox`">
        <button :class="[`${componentClassName}__link`, {'is-active': activeIndex === index}]"
      v-for="(item, index) in tabs" :key="index"
      @click="getJson(index)">{{ item }} <i :class="['fas', (activeIndex === index ? 'fa-chevron-down' : 'fa-chevron-up')]"></i></button>
      </div>
      <div :class="`${componentClassName}__contentBox`">
        {{ activeContent }}
        <div :class="`${componentClassName}__loader`" v-show="isLoading">
            <v-lazy-image
          :src="require('@/assets/images/loader.png')"
          :class="`${componentClassName}__loaderImg`"
         />          
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import jsonData from '@/assets/tabs/tab1.json'
// Components
import axios from 'axios'
import { setTimeout } from 'timers';
import VLazyImage from "v-lazy-image";

export default {
  name: "TheTabs",
  data() {
    return {
      componentClassName: 'c-tabs',
      tabs: ['Vestibulum at odio sit amet', 'Sed vehicula neque', 'Nulla id libero pretium'],
      baseUrl: process.env.VUE_APP_BASE_URL,
      activeContent: jsonData.item.content,
      activeIndex: 0,
      isLoading: false,
    }
  },
  components: {
    VLazyImage,
    },
  created() {
    this.getJson(0)
  },
  methods: {
    sleep(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    },
    setData(data, index) {
      this.sleep(1000).then(() => {
        this.activeContent = data
        this.activeIndex = index
        this.isLoading = false;
      })
    },
    getJson(index) {
      this.isLoading = true;
      let file = `tab${index + 1}.json`
      axios
        .get(`${this.baseUrl}playground/tabs/${file}`)
        .then(response => (this.setData(response.data.item.content, index)))
        .catch(error => this.isLoading = false)
    }
  }
}
</script>
