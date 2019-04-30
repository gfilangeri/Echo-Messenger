<template>
<div class="container">
  <div class="message-content">
    <div class="message-content__item" v-for="(message, index) in messages" v-bind:key="index">
      <div v-if="message.user==1">
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
    </div>
    <button v-on:click="send">send</button>
  </div>
  </div>
</template>

<script>
import Vue from "vue";
import moment from 'moment'
export default {
  name: "Message",
  data: () => ({
    messages: [
      { id: 1, message: "hi", user: 2, date: Date.now(), chatId: 1 },
      { id: 2, message: "hello", user: 2, date: Date.now(), chatId: 1 },
      { id: 3, message: "hey", user: 1, date: Date.now(), chatId: 1 },
      { id: 4, message: "what", user: 2, date: Date.now(), chatId: 1 },
      { id: 5, message: "is", user: 2, date: Date.now(), chatId: 1 },
      { id: 6, message: "up", user: 1, date: Date.now(), chatId: 1 }
    ],
    newMessage: ""
  }),
  methods: {
    send() {
      this.messages.push({
        id: 7,
        message: this.newMessage,
        user: 1,
        date: Date.now(),
        chatId: 1
      });
      this.newMessage = "";
      return;
    },
    getDate(date) {
        const formattedDate = moment(date).format('hh:mm')
        return formattedDate;
    }
  }
};
</script>

<style scoped>
.container {
    border-style: solid;
    padding: 10px;
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

.box-text {
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
}
.message-form input {
  width: calc(100% - 50px);
  border-style: solid;
  font-size: 16px;
  margin-top: 5px;
}
</style>
