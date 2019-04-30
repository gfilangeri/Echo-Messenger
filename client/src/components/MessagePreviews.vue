<template>
  <div>
    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <span class="md-title">Chats</span>
      </md-toolbar>

      <md-list class="md-double-line">
        <md-list-item>
          <md-icon>group</md-icon>
          <span>
            <md-subheader>Roomies Pt.5</md-subheader>
          </span>
        </md-list-item>

        <div class="divider">
          <md-divider></md-divider>
        </div>
        <md-list-item>
          <md-icon>group</md-icon>
          <span>
            <md-subheader>Gina</md-subheader>
          </span>
        </md-list-item>

        <div class="divider">
          <md-divider></md-divider>
        </div>
        <md-list-item>
          <md-icon>group</md-icon>
          <span>
            <md-subheader>Ben</md-subheader>
          </span>
        </md-list-item>
        
        <div class="divider">
          <md-divider></md-divider>
        </div>
        <md-list-item>
          <md-icon>group</md-icon>
          <span>
            <md-subheader>Emma</md-subheader>
          </span>
        </md-list-item>
        
        <div class="divider">
          <md-divider></md-divider>
        </div>
        <md-list-item>
          <md-icon>group</md-icon>
          <span>
            <md-subheader>Emily</md-subheader>
          </span>
        </md-list-item>
        
      </md-list>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "MessagePreviews",
  data: () => ({}),
  methods: {}
};
</script>

<style lang="scss" scoped>
.viewport {
  width: 320px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  overflow: auto;
  border: 1px solid rgba(#000, 0.12);
}

.divider {
  display: block;
  margin: 10px 0 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  width: 100%;
}
</style>
