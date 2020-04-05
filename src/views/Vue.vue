<template>
  <div class="container mt-5 pt-2 pb-2 bg-light rounded">
    <ul class="nav nav-tabs border-primary" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="article-tab" data-toggle="tab" href="#article" role="tab" aria-controls="article" aria-selected="true">article</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="vedio-tab" data-toggle="tab" href="#vedio" role="tab" aria-controls="vedio" aria-selected="false">
          vedio
        </a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active text-center" id="article" role="tabpanel" aria-labelledby="article-tab">
        <div
        class="alert alert-primary mt-3"
        role="alert"
        v-for="(item, index) in articleData"
        :key="`article${index}`">
          <a target="_blank" :href="item.url" class="alert-link">
            {{ item.name }}
          </a>
        </div>
      </div>
      <div class="tab-pane fade" id="vedio" role="tabpanel" aria-labelledby="vedio-tab">
        <div
        class="alert alert-success mt-3 text-center"
        role="alert"
        v-for="(item, index) in vedioData"
        :key="`vedio${index}`">
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
    articleData() {
      return this.data.filter(item => {
        return item.category === 'Vue' && item.item === 'article';
      });
    },
    vedioData() {
      return this.data.filter(item => {
        return item.category === 'Vue' && item.item === 'vedio';
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