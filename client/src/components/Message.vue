<template>
  <div>
    <div v-for="(message, index) in messages" v-bind:key="index">
        <div v-if="message.user==1" class=" message_bubble_right">
            <div  class="right">{{message.message}}</div>
            </div>
        <p v-else class="left message_bubble_left">{{message.message}}</p>
    </div>
    <input v-model="newMessage" />
    <button v-on:click="send">send</button>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "Message",
  data: () => ({
    messages: [
    { id: 1, message: "hi", user: 1, date: Date.now(), chatId: 1},
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
      this.messages.push({id:7, message: this.newMessage, user: 1, date: Date.now(), chatId: 1});
      this.newMessage = "";
      return;
    }
  }
};
</script>

<style scoped>
.left {
    text-align: left;
    background-color: lightblue;
}
.right {
    text-align: right;
}
.message_bubble_left {
    border-style: solid;
    border-radius: 10px;
    width: 75%;
    left: 0px;
}
.message_bubble_right {
    display: flex;
    justify-content: flex-end;
    border-style: solid;
    border-radius: 10px;
    width: 50%;
}
</style>
