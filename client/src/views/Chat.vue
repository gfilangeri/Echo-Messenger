<template>
  <div class="screen">
    <div class="md-layout">
      <div class="md-layout-item md-size-20 scroll">
        <MessagePreviews v-on:chatUpdate="updateChat"/>
      </div>
      <div class="md-layout-item">
        <Message v-bind:chatId="chatId"/>
      </div>
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
import MessagePreviews from "@/components/MessagePreviews.vue";

export default {
  name: "Chat",
  data: () => ({
    chatId: 1
  }),
  components: {
    'Message' : Message,
    'MessagePreviews': MessagePreviews
  },
  methods: {
    updateChat(chatId) {
      this.chatId = chatId;
    }
  }
}
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

.scroll {
  overflow: scroll;
  min-height: 625px;
}

.screen {
  overflow: hidden;
}
</style>