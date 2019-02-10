<template>
  <div class="questions-container">
    <div class="header">
      <span>Questions</span>
    </div>
    <div v-if="getQuestions.length > 0">
      <div v-for="question in getQuestions" :key="question._id">
        <div class="question-content">
          <div class="title">
            <span>{{ question.title }}</span>
          </div>
          <div class="body">
            <span>{{ question.body }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="no-questions">
        <span>There no questions for this meetup</span>
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
  }
}
</script>

<style scoped>
  .header {
    color: #004cc7;
    font-size: 1.5em;
  }
  .questions-container {
    padding: 15px 15px;
  }
  .question-content {
    padding: 8px 10px;
    border-bottom: dotted 1px #ccc;
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
  }
</style>


