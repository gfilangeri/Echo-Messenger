<template>
  <div>
    <div v-for="(message, index) in messages" v-bind:key="index">
        <p v-if="message.user==1" class="right">{{message.message}}</p>
        <p v-else class="left">{{message.message}}</p>
    </div>
    <textarea v-model="newMessage" ></textarea>
    <button v-on:click="send(newMessage)">send</button>
  </div>
</template>

<script>
import Vue from 'vue'
export default class Message extends Vue{
    messages = [
    { id: 1, message: "hi", user: 1 },
    { id: 2, message: "hello", user: 2 },
    { id: 3, message: "hey", user: 1 },
    { id: 4, message: "what", user: 2 },
    { id: 5, message: "is", user: 2 },
    { id: 6, message: "up", user: 1 }
  ];
    newMessage = "";

  send(newM) {
      this.messages.push({id:7, message: newM, user: 1});
      this.newMessage = "";
      return;
  }
}
</script>

<style scoped>
.left {
    text-align: left;
}
.right {
    text-align: right;
}
</style>
