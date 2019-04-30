<template>
  <div class="container">
    <div class="message-content">
      <div class="message-content__item" v-for="(message, index) in messages" v-bind:key="index">
        <div v-if="message.userId==1">
          <div class="outgoing">
            <div class="box-text">{{message.message}}</div>
            <div class="time">{{getDate(message.date)}}</div>
          </div>
        </div>
        <div v-else>
          <div class="incoming">
            <div class="box-text">{{message.message}}</div>
            <div class="time">{{getDate(message.date)}}</div>
          </div>
        </div>
      </div>
      <div class="message-form">
        <input v-model="newMessage">
        <button v-on:click="sendMessage">send</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";
import axios, { AxiosResponse, AxiosError } from "axios";
import { APIConfig } from "@/utils/api.utils";
export default {
  name: "Message",
  data: () => ({
    messages: [],
    newMessage: "",
    chatId: 1,
    userId: 1
  }),
  methods: {
    getDate(date: Date) {
      const formattedDate = moment(date).format("hh:mm");
      return formattedDate;
    },
    getMessages() {
      axios
        .get(APIConfig.buildUrl("/messages/" + this.chatId))
        .then((response: AxiosResponse) => {
          this.messages = response.data;
          console.log("success");
          this.$emit("success");
        })
        .catch((res: AxiosError) => {
          console.log("[Message.vue]");
        });
    },
    sendMessage() {
      console.log;
      axios
        .post(APIConfig.buildUrl("/message"), {
          date: new Date(),
          message: this.newMessage,
          chatId: this.chatId,
          userId: this.userId
        })
        .then((response: AxiosResponse) => {
          console.log(
            "[Message.vue] new message" + JSON.stringify(response.data)
          );
          this.newMessage = "";
          this.messages.push(response.data);
        })
        .catch((response: AxiosResponse) => {
          console.log("[Message.vue] message error");
        });
    }
  },
  created() {
    this.getMessages();
  }
};
</script>

<style scoped>
.container {
    align-self: center;
    position: fixed;
    min-height: 600px;
    max-height: 600px;
    min-width: 800px;
    max-width: 800px;
    border-style: double;
    padding: 10px;
    overflow-y: scroll;
}
.message-content {
  border-radius: 7px;
  width: 100%;
  height: 100%;
  float: center;
  /* position: relative; */
  line-height: 5px;
  /* margin-left: 15px;*/
}
.incoming {
  text-align: left;
}
.incoming .time {
  right: 0;
}
.outgoing {
  text-align: right;
}
.outgoing .time {
  left: 0;
}
.incoming .box-text {
  background: #f0f2f4;
  display: inline-block;
  padding: 20px 15px;
  padding-right: 50px;
  font-size: 16px;
  color: #535357;
  border-radius: 7px;
  max-width: 90%;
  margin-top: 10px;
  text-align: left;
  position: relative;
  margin-bottom: 20px;
}

.outgoing .box-text {
  background: lightblue;
  display: inline-block;
  padding: 20px 15px;
  padding-right: 50px;
  font-size: 16px;
  color: #535357;
  border-radius: 7px;
  max-width: 90%;
  margin-top: 10px;
  text-align: left;
  position: relative;
  margin-bottom: 20px;
}
.box-text .time {
  position: absolute;
  bottom: -25px;
  font-size: 13px;
  color: #939397;
}

.message-form {
  height: 75px;
  border-top: 1px solid #e0e2e4;
  margin: 10px;
  padding: 20px 15px;
    bottom: 0;
  position: fixed;
}
.message-form input {
  width: calc(100% - 50px);
  border-style: solid;
  font-size: 16px;
  margin-top: 5px;
}

</style>
