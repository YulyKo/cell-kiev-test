<template>
  <div class="hello">
    <h1 class="text title">{{ this.message.text }}</h1>
    <h2 class="text">{{ this.message.description }}</h2>
    <p class="text">{{ this.message.getLogged }}</p>
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
      getMessage: 'getMessageFromState',
    }),
  },
  created() {
    this.message.text = this.getMessage.textFromState;
    this.message.description = this.getMessage.descriptionFromState;
    this.message.isLogged = this.getMessage.logged;
  },
  beforeCreate() {
    this.$store.dispatch('getMessageFromAPI');
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
