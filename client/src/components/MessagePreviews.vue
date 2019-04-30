<template>
  <div>
    <md-toolbar :md-elevation="1">
      <span class="md-title">
        Chats
        <button v-on:click="createChat"></button>
      </span>
    </md-toolbar>
    <div class="viewport">
      <md-list class="md-double-line">
        <div v-for="(chat, index) in chats" v-bind:key="index">
          <md-button>
            <md-list-item class="chat_section">
              <md-icon>group</md-icon>
              <span>
                <md-subheader>{{chat.title}}</md-subheader>
              </span>
            </md-list-item>
          </md-button>
          <div class="divider">
            <md-divider></md-divider>
          </div>
        </div>
      </md-list>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "@/utils/api.utils";
export default {
  name: "MessagePreviews",
  data: () => ({
    chats: [
      { id: 1, title: "Gina" },
      { id: 2, title: "Shannon" },
      { id: 3, title: "Emma" },
      { id: 4, title: "Emily" },
      { id: 5, title: "Ben" },
      { id: 6, title: "Roomies pt. 5" },
      { id: 6, title: "Roomies pt. 5" },
      { id: 6, title: "Roomies pt. 5" },
      { id: 6, title: "Roomies pt. 5" },
      { id: 6, title: "Roomies pt. 5" }
    ]
  }),
  methods: {
    getChats() {
      axios
        .get(APIConfig.buildUrl("/chat"))
        .then((response: AxiosResponse) => {
          this.chats = response.data;
          console.log("success");
          this.$emit("success");
        })
        .catch((res: AxiosError) => {
          console.log("[MessagePreviews.vue]");
        });
    },
    createChat() {
      console.log;
      axios
        .post(APIConfig.buildUrl("/chat"), {
          group: 0,
          title: "Gina"
        })
        .then((response: AxiosResponse) => {
          console.log(
            "[MessagePreviews.vue] new chat" + JSON.stringify(response.data)
          );
          this.chats.push(response.data);
        })
        .catch((response: AxiosResponse) => {
          console.log("[MessagePreviews.vue] chat error");
        });
    }
  },
  created() {
    this.getChats();
  }
};
</script>

<style lang="scss" scoped>
.viewport {
  width: 320px;
  max-width: 100%;
  max-height: 500px;
  display: inline-block;
  vertical-align: top;
  overflow-y: scroll;
  border: 1px solid rgba(#000, 0.12);
}

.divider {
  display: block;
  margin: 10px 0 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  width: 100%;
}
</style>
