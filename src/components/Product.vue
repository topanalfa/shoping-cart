<template>
  <div class="product-item">
    <div class="store p-1 border-bottom-1 bg-grey">
      <i class="fa fa-building"></i>
      {{ data.store.name }}
    </div>
    <div class="d-flex">
      <div class="col-md-8 col-md-auto pl-0">
        <div class="product-name">
          <h5>{{ data.name }}</h5>
          <span>Rp {{ data.price.toLocaleString() }}</span>
        </div>
      </div>
      <div class="col-md-4 col-md-auto pr-0">
        <div class="product-image float-right">
          <img class="rounded img-thumbnail" :src="data.stuff.image_url" />
        </div>
      </div>
    </div>
    <div class="d-flex">
      <div class="col-md-8 col-md-auto">
        <div class="input-group w-50">
          <button class="btn btn-success" v-on:click="addToCart(data)">Tambah Ke Keranjang</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "product",
  props: ["data"],
  filters: {
    toIDR(value) {
      return "Rp " + value.toLocaleString() + "";
    }
  },
  methods: mapActions(["addToCart"])
};
</script>

<style></style>
