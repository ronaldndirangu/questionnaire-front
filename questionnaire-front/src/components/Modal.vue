<template>
  <div class="background" v-if="showModal">
    <div class="modal">
      <div class="modal__heading">
        <div class="title">
          <a @click="toggleModal" class="modal__close">&times;</a>
          <h2 class="modal__title">{{ getQuestion.title }}</h2>
        </div>
        <div class="body">
          {{ getQuestion.body }}
        </div>
      </div>
      <div class="modal__body">
        <h2 class="comments_title">Comments</h2>
        <div class="comment" v-for="comment in getComments" :key="comment._id">
          <span class="comment__body">{{ comment.body }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: "Modal",
  computed: {
    ...mapState([
      'showModal',
    ]),
    ...mapGetters([
      'getQuestion',
      'getComments'
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
    display: flex;
    flex-direction: column;
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
  a:hover {
    cursor: pointer;
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
  .comments_title {
    color: #004cc7;
    font-weight: 100;
  }
  .comment {
    border-left: solid 3px #004cc7;
    margin: 20px 10px;
    border-bottom: dotted 1px #004cc7; 
    padding: 3px 5px;
  }
  .comment__body {
    padding: 15px 5px;
  }
</style>

