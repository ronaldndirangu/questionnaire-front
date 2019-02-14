<template>
  <div class="background" v-if="showModal">
    <div class="modal">
      <div class="title">
        <a href="#" @click="toggleModal" class="modal__close">&times;</a>
        <h2 class="modal__heading">Modal Title</h2>
      </div>
      <div class="body">
        Modal Body
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Modal",
  computed: {
    ...mapState([
      'showModal'
    ])
  },
  methods: {
    toggleModal() {
      this.$store.dispatch('toggleModal');
    }
  }
}
</script>

<style scoped>
  .background {
    background-color: rgba(0, 0, 0, .6);
    position: absolute;
    height: 100vh;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 10;
  }
  .modal {
    transform: translate(-50%, -50%);
    border-radius: 5px;
    position: absolute;
    background: #fff;
    padding: 1em 2em;
    z-index: 20;
    height: 65%;
    width: 55%;
    left: 50%;
    top: 50%;
  }
  a:link, a:visited {
    text-decoration: none;
  }
  .modal__close {
    color: #363636;
    font-size: 2.5em;
    position: absolute;
    top: .5em;
    right: .5em;
  }
  .title {
    margin-bottom: 1em;
  }
</style>

