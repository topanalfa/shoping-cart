<template>
  <div>
    <div class="nav bg-dark text-light">
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link class="nav-link active" to="/">Shop</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/cart">
            <button class="btn btn-primary">Cart ({{ itemsInCart }})</button>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    itemsInCart() {
      let cart = this.$store.getters.cartProducts;
      return cart.reduce((accum, item) => accum + item.quantity, 0);
    }
  }
};
</script>

<style>
</style>