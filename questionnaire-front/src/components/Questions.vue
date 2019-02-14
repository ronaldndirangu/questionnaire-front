<template>
  <div class="questions-container">
    <div class="header">
      <span>Questions</span>
    </div>
    <div v-if="getQuestions.length > 0" class="has-questions">
      <div v-for="question in getQuestions" :key="question._id">
        <div class="question-content">
          <div class="title">
            <span>{{ question.title }}</span>
          </div>
          <div class="body">
            <span>{{ question.body }}</span>
          </div>
          <div class="question-btns">
            <div class="upvote">
              <button class="btn" type="submit"><i class="fas fa-thumbs-up"></i></button>
            </div>
            <div class="downvote">
              <button class="btn" type="submit"><i class="fas fa-thumbs-down"></i></button>
            </div>
            <div class="comments">
              <button  @click="openCommentModal" class="btn" type="submit"><i class="fas fa-comment"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="no-questions">
        <span>There are no questions for this meetup</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Questions",
  computed: {
    ...mapGetters([
      'getQuestions'
    ])
  },
  created() {
    const { meetupId } = this.$route.params;
    this.$store.dispatch('getQuestions', meetupId);
  },
  methods: {
    openCommentModal() {
      this.$store.dispatch('toggleModal');
    }
  }
}
</script>

<style scoped>
  .header {
    color: #004cc7;
    font-size: 1.5em;
  }
  .questions-container {
    padding: 10px 15px;
  }
  .question-content {
    padding: 8px 10px;
    border-bottom: dotted 1px #ccc;
  }
  .has-questions {
    margin-bottom: 3%;
  }
  .no-questions {
    display: flex;
    justify-content: center;
    padding: 8% 0;
    font-size: 1.2em;
    color: rgba(46,62,72,.6);
  }
  .title {
    font-weight: 600;
  }
  .body {
    font-style: italic;
    font-size: 0.9em;
    margin: 5px auto;
  }
  .question-btns {
    display: flex;
    flex-direction: row;
    margin: 2px auto;
    align-content: center;
    align-items: center;
    justify-items: center;
  }
  .btn {
    padding: 5px 8px;
    margin: 4px 4px;
    background: none;
    border: solid 1px #000;
    border-radius: 5px;
  }
  .btn:focus {
    outline: none;
  }
</style>


