<template>
  <div v-if="current != null">
    <md-toolbar class="header">
      <div class="md-toolbar-section-start">
        <h3 class="md-display-1 logo">TrivTrain</h3>
      </div>
      <div class="md-toolbar-section-end" v-if="result != null">
        <span
          class="md-title animated infinite flash"
          :class="[result == 'WRONG!' ? 'wrong' : 'correct']"
        >
          {{result}}
        </span>
      </div>
      <div class="md-toolbar-section-end" v-if="result == null">
        <span class="md-title">Score: {{score}}</span>
      </div>
    </md-toolbar>
    <p class="md-headline question">{{current.question}}</p>
    <div class="md-layout md-gutter md-alignment-center">
      <div
        class="md-layout-item md-medium-size-50 md-small-size-100 md-xsmall-size-100" @click="select('A')"
      >
        <md-card md-with-hover class="answer-card">
          <md-ripple>
            <md-card-content class="md-title">
              {{current.A}}
            </md-card-content>
          </md-ripple>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-small-size-100 md-xsmall-size-100"
        @click="select('B')"
      >
        <md-card md-with-hover class="answer-card">
          <md-ripple>
            <md-card-content class="md-title">
              {{current.B}}
            </md-card-content>
          </md-ripple>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-small-size-100 md-xsmall-size-100"
        @click="select('C')"
      >
        <md-card md-with-hover class="answer-card">
          <md-ripple>
            <md-card-content class="md-title">
              {{current.C}}
            </md-card-content>
          </md-ripple>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-small-size-100 md-xsmall-size-100"
        @click="select('D')"
      >
        <md-card md-with-hover class="answer-card">
          <md-ripple>
            <md-card-content class="md-title">
              {{current.D}}
            </md-card-content>
          </md-ripple>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100"
        @click="skip()"
      >
        <md-card md-with-hover class="skip-card">
          <md-ripple>
            <md-card-content class="md-title">
              Skip Question
            </md-card-content>
          </md-ripple>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import trivia from '../assets/trivia.json';
export default {
  name: 'Menu',
  data () {
    return {
      questions: null,
      current: null,
      score: 0,
      result: null
    }
  },
  watch: {
    questions: function() {
      this.find_question();
    }
  },
  mounted: function() {
    this.questions = trivia;
  },
  methods: {
    random: function() {
      return Math.floor(Math.random() * trivia.length);
    },
    find_question: function() {
      this.current =  this.questions[this.random()];
    },
    skip: function() {
      this.result = null;
      this.find_question();
    },
    select: function(answer) {
      if (answer == this.current.answer) {
        this.score += 1;
        this.result = 'CORRECT!';
        let self = this;
        setTimeout(function(){
          self.result = null;
          self.find_question();
        }, 2000);
      } else {
        if (this.score > 0) {
          this.score -= 1;
        }
        this.result = 'WRONG!';
        let self = this;
        setTimeout(function(){
          self.result = null;
          self.find_question();
        }, 2000);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.question {
  color: #222222;
}
.answer-card {
  margin: 10px;
  background-color: #4A90E2;
  color: white;
}
.skip-card {
  margin: 10px;
  background-color: #CA2207;
  color: white;
}
.header {
  background-color: #293237;
  color: white;
}
.logo {
  font-family: 'Handlee', cursive;
}
.correct {
  color: #C0FF33;
}
.wrong {
  color: #E2071C;
}
</style>
