<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>
<script>
import Nav from './components/Nav.vue';

export default {
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
  @import 'assets/scss/style.scss';
</style>
