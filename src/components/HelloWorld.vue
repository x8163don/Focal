<template>
  <div>
    <input v-model="domain" type="text">
    <div @click="add">add</div>
    <div>-</div>
    <p>{{domains}}</p>
  </div>
</template>

<script>
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
    async add() {
      if (!this.domain) {
        return;
      }

      await chrome.runtime.sendMessage({ eventName: 'AddDomain', params: [this.domain] });
      this.refreshDomains();
    },

    refreshDomains() {
      chrome.runtime.sendMessage({ eventName: 'GetDomains' }, (response) => {
        this.domains = response;
      });
    },
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
