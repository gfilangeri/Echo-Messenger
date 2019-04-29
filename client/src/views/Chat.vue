<template>
  <div>
    <div class="md-layout">
      <div class="md-layout-item md-size-20"></div>
      <div class="md-layout-item"><Message/></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";

import {
  MdLayout
} from "vue-material/dist/components";
Vue.use(MdLayout);

import Message from "@/components/Message.vue";

@Component({
  components: {
    Message
  }
})
export default class Chat extends Vue {}

</script>

<style lang="scss" scoped>
.md-layout-item {
  height: 100px;

  &:nth-child(1) {
    border: 1px black;
  }

  &:nth-child(2) {
    border: 1px black;
  }
}
</style>