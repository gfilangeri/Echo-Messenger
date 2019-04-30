<template>
  <div>
    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <span class="md-title">Chats</span>
      </md-toolbar>

      <md-list class="md-double-line">
        <md-button>
          <md-list-item>
            <md-icon>group</md-icon>
            <span>
              <md-subheader>Roomies Pt.5</md-subheader>
            </span>
          </md-list-item>
        </md-button>

        <div class="divider">
          <md-divider></md-divider>
        </div>
        <md-button cstyle="text-align:left">
          <md-list-item>
            <md-icon>group</md-icon>
            <span>
              <md-subheader>Gina</md-subheader>
            </span>
          </md-list-item>
        </md-button>

        <div class="divider">
          <md-divider></md-divider>
        </div>
        <md-button>
          <md-list-item>
            <md-icon>group</md-icon>
            <span>
              <md-subheader>Ben</md-subheader>
            </span>
          </md-list-item>
        </md-button>

        <div class="divider">
          <md-divider></md-divider>
        </div>
        <md-button>
          <md-list-item>
            <md-icon>group</md-icon>
            <span>
              <md-subheader>Emma</md-subheader>
            </span>
          </md-list-item>
        </md-button>

        <div class="divider">
          <md-divider></md-divider>
        </div>
        <md-button>
          <md-list-item>
            <md-icon>group</md-icon>
            <span>
              <md-subheader>Emily</md-subheader>
            </span>
          </md-list-item>
        </md-button>

        <div class="divider">
          <md-divider></md-divider>
        </div>
        <md-button cstyle="text-align:left">
          <md-list-item>
            <md-icon>group</md-icon>
            <span>
              <md-subheader>Us in the Son</md-subheader>
            </span>
          </md-list-item>
        </md-button>

        <div class="divider">
          <md-divider></md-divider>
        </div>
        <md-button>
          <md-list-item>
            <md-icon>group</md-icon>
            <span>
              <md-subheader>Fam Bam</md-subheader>
            </span>
          </md-list-item>
        </md-button>

        <div class="divider">
          <md-divider></md-divider>
        </div>
        <md-button>
          <md-list-item>
            <md-icon>group</md-icon>
            <span>
              <md-subheader>Shua</md-subheader>
            </span>
          </md-list-item>
        </md-button>

        <div class="divider">
          <md-divider></md-divider>
        </div>
        <md-button>
          <md-list-item>
            <md-icon>group</md-icon>
            <span>
              <md-subheader>Soccer Team</md-subheader>
            </span>
          </md-list-item>
        </md-button>
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

.button_align {
  text-align: left;
}
</style>
