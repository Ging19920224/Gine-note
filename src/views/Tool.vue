<template>
  <div class="container mt-5 pt-2 pb-2 bg-light rounded">
    <ul class="nav nav-tabs border-primary" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="JS-tab" data-toggle="tab" href="#JS" role="tab" aria-controls="JS" aria-selected="true">JS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="CSS-tab" data-toggle="tab" href="#CSS" role="tab" aria-controls="CSS" aria-selected="false">CSS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="icon-tab" data-toggle="tab" href="#icon" role="tab" aria-controls="icon" aria-selected="false">icon</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="other-tab" data-toggle="tab" href="#other" role="tab" aria-controls="other" aria-selected="false">other</a>
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
      <div class="tab-pane fade" id="icon" role="tabpanel" aria-labelledby="icon-tab">
        <div
        class="alert alert-warning mt-3 text-center"
        role="alert"
        v-for="(item, index) in iconData"
        :key="`icon${index}`">
          <a target="_blank" :href="item.url" class="alert-link">
            {{ item.name }}
          </a>
        </div>
      </div>
      <div class="tab-pane fade" id="other" role="tabpanel" aria-labelledby="other-tab">
        <div
        class="alert alert-warning mt-3 text-center"
        role="alert"
        v-for="(item, index) in otherData"
        :key="`other${index}`">
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
    JSData() {
      return this.data.filter(item => {
        return item.category === 'Tool' && item.item === 'JS';
      });
    },
    CSSData() {
      return this.data.filter(item => {
        return item.category === 'Tool' && item.item === 'CSS';
      });
    },
    iconData() {
      return this.data.filter(item => {
        return item.category === 'Tool' && item.item === 'icon';
      });
    },
    otherData() {
      return this.data.filter(item => {
        return item.category === 'Tool' && item.item === 'other';
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