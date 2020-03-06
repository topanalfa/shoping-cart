<template>
  <div id="app">
    <Cart v-bind:items="dataProduct.items" />
  </div>
</template>

<script>
import Cart from './components/Cart';
import product from './assets/data.json';

export default {
  name: 'App',
  components: {
    Cart
  },
  data() {
    return {
      dataProduct: product
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
