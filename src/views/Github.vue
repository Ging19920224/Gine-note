<template>
  <div class="container mt-5 pt-2 pb-2 bg-light rounded">
    <ul class="nav nav-tabs border-primary" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="Demo-tab" data-toggle="tab" href="#Demo" role="tab" aria-controls="Demo" aria-selected="true">Demo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="Github-tab" data-toggle="tab" href="#Github" role="tab" aria-controls="Github" aria-selected="false">Github</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="Git-tab" data-toggle="tab" href="#Git" role="tab" aria-controls="Git" aria-selected="false">Git</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active text-center" id="Demo" role="tabpanel" aria-labelledby="Demo-tab">
        <div
        class="alert alert-primary mt-3"
        role="alert"
        v-for="(item, index) in DemoData"
        :key="`Demo${index}`">
          <a target="_blank" :href="item.url" class="alert-link">
            {{ item.name }}
          </a>
        </div>
      </div>
      <div class="tab-pane fade" id="Github" role="tabpanel" aria-labelledby="Github-tab">
        <div
        class="alert alert-success mt-3 text-center"
        role="alert"
        v-for="(item, index) in GithubData"
        :key="`Github${index}`">
          <a target="_blank" :href="item.url" class="alert-link">
            {{ item.name }}
          </a>
        </div>
      </div>
      <div class="tab-pane fade" id="Git" role="tabpanel" aria-labelledby="Git-tab">
        <div
        class="alert alert-warning mt-3 text-center"
        role="alert"
        v-for="(item, index) in GitData"
        :key="`Git${index}`">
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
    DemoData() {
      return this.data.filter(item => {
        return item.category === 'Github' && item.item === 'Demo';
      });
    },
    GithubData() {
      return this.data.filter(item => {
        return item.category === 'Github' && item.item === 'Github';
      });
    },
    GitData() {
      return this.data.filter(item => {
        return item.category === 'Github' && item.item === 'Git';
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