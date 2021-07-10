<template>
  <div>
    <input v-model="domain" type="text">
    <div @click="add">add</div>
    <div>-</div>
    <p>{{domains}}</p>
  </div>
</template>

<script>
const addDomain = require('../core/usecases/addDomain');
const getDomains = require('../core/usecases/getDomains');

export default {
  name: 'HelloWorld',
  data() {
    return {
      domain: '',
      domains: [],
    };
  },
  mounted() {
    this.refreshDomains();
  },
  methods: {
    add() {
      browser.runtime.onMessage.sendMessage({ eventName: 'addDomain', params: [...this.domain] }, null);

      addDomain(this.domain);
      this.refreshDomains();
    },

    refreshDomains() {
      this.domains = getDomains();
    },
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
