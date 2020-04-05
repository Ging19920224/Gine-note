<template>
  <div class="container mt-5 pt-2 pb-2 bg-light rounded">
    <ul class="nav nav-tabs border-primary" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="JS-tab" data-toggle="tab" href="#JS" role="tab" aria-controls="JS" aria-selected="true">JS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="jQuery-tab" data-toggle="tab" href="#jQuery" role="tab" aria-controls="jQuery" aria-selected="false">jQuery</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="RESTfulAPI-tab" data-toggle="tab" href="#RESTfulAPI" role="tab" aria-controls="RESTfulAPI" aria-selected="false">RESTfulAPI</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active text-center" id="JS" role="tabpanel" aria-labelledby="JS-tab">
        <div
        class="alert alert-primary mt-3"
        role="alert"
        v-for="(item, index) in JSData"
        :key="`JS${index}`">
          <a target="_blank" :href="item.url" class="alert-link">
            {{ item.name }}
          </a>
        </div>
      </div>
      <div class="tab-pane fade" id="jQuery" role="tabpanel" aria-labelledby="jQuery-tab">
        <div
        class="alert alert-success mt-3 text-center"
        role="alert"
        v-for="(item, index) in jQueryData"
        :key="`jQuery${index}`">
          <a target="_blank" :href="item.url" class="alert-link">
            {{ item.name }}
          </a>
        </div>
      </div>
      <div class="tab-pane fade" id="RESTfulAPI" role="tabpanel" aria-labelledby="RESTfulAPI-tab">
        <div
        class="alert alert-warning mt-3 text-center"
        role="alert"
        v-for="(item, index) in RESTfulAPIData"
        :key="`RESTfulAPI${index}`">
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
  name: 'Javascript',
  computed: {
    data() {
      return this.$store.state.data;
    },
    JSData() {
      return this.data.filter(item => {
        return item.category === 'Javascript' && item.item === 'JS';
      });
    },
    RESTfulAPIData() {
      return this.data.filter(item => {
        return item.category === 'Javascript' && item.item === 'RESTfulAPI';
      });
    },
    jQueryData() {
      return this.data.filter(item => {
        return item.category === 'Javascript' && item.item === 'jQuery';
      });
    }
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