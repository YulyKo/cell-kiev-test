<template>
  <div class="hello">
    <h1>{{ getMessage.text }}</h1>
    <h1>{{ getMessage.description }}</h1>
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
      },
    };
  },
  computed: {
    ...mapGetters({
      textFromState: 'getText',
      descriptionFromState: 'getDescription',
    }),
    getMessage() {
      return this.message;
    },
  },
  created() {
    this.message.text = this.textFromState;
    this.message.description = this.descriptionFromState;
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
