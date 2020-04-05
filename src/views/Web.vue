<template>
  <div class="container mt-5 pt-2 pb-2 bg-light rounded">
    <ul class="nav nav-tabs border-primary" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="web-tab" data-toggle="tab" href="#web" role="tab" aria-controls="web" aria-selected="true">web</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active text-center" id="web" role="tabpanel" aria-labelledby="web-tab">
        <div
        class="alert alert-primary mt-3"
        role="alert"
        v-for="(item, index) in webData"
        :key="`web${index}`">
          <a target="_blank" :href="item.url" class="alert-link">
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    data() {
      return this.$store.state.data;
    },
    webData() {
      return this.data.filter(item => {
        return item.category === 'Web' && item.item === 'web';
      });
    },
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$store.dispatch('getData');
    },
  }
}
</script>

<style>

</style>