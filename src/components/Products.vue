<template>
  <div class="container">
    <NavBar />
    <div class="main">
      <div class="card mb-1 ml-1 mr-1" v-for="item in dataProducts.items" v-bind:key="item.id">
        <div class="card-body">
          <Product v-bind:data="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Product from "./Product.vue";
import NavBar from "./NavBar.vue";

export default {
  name: "products",
  components: {
    Product,
    NavBar
  },
  computed: {
    ...mapState(["nama", "dataProducts"])
  }
};
</script>

<style></style>
