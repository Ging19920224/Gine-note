<template>
  <div class="container mt-5 pt-2 pb-2 bg-light rounded">
    <ul class="nav nav-tabs border-primary" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="input-tab" data-toggle="tab" href="#input" role="tab" aria-controls="input" aria-selected="true">Html</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="CSS-tab" data-toggle="tab" href="#CSS" role="tab" aria-controls="CSS" aria-selected="false">CSS</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active text-center" id="input" role="tabpanel" aria-labelledby="input-tab">
        <div
        class="alert alert-primary mt-3"
        role="alert"
        v-for="(item, index) in HtmlData"
        :key="`Html${index}`">
          <a target="_blank" :href="item.url" class="alert-link">
            {{ item.name }}
          </a>
        </div>
      </div>
      <div class="tab-pane fade" id="CSS" role="tabpanel" aria-labelledby="CSS-tab">
        <div
        class="alert alert-success mt-3 text-center"
        role="alert"
        v-for="(item, index) in CSSData"
        :key="`CSS${index}`">
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
    HtmlData() {
      return this.data.filter(item => {
        return item.category === 'Html&CSS' && item.item === 'Html';
      });
    },
    CSSData() {
      return this.data.filter(item => {
        return item.category === 'Html&CSS' && item.item === 'CSS';
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