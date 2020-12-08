<template>
  <div class="hello">
    <h1 class="text title">{{ getMessage.text }}</h1>
    <h2 class="text">{{ getMessage.description }}</h2>
    <p class="text">{{ getMessage.getLogged }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HelloWorld',
  data() {
    return {
      message: {
        text: '',
        description: '',
        isLogged: Boolean,
      },
    };
  },
  computed: {
    ...mapGetters({
      textFromState: 'getText',
      descriptionFromState: 'getDescription',
      logged: 'getIsLogged',
    }),
    getMessage() {
      return this.message;
    },
  },
  created() {
    this.message.text = this.getMessage.textFromState;
    this.message.description = this.getMessage.descriptionFromState;
    this.message.isLogged = this.getMessage.logged;
  },
  beforeCreate() {
    this.$store.dispatch('getMessage');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
