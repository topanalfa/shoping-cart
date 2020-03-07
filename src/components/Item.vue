<template>
  <div class="product-item">
    <div class="store p-1 border-bottom-1 bg-grey">
      <i class="fa fa-building"></i>
      {{ details.store }}
    </div>
    <div class="d-flex">
      <div class="col-md-8 col-md-auto pl-0">
        <div class="product-name">
          <h5>{{ details.name }}</h5>
          <span>Rp {{ details.price.toLocaleString() }}</span>
        </div>
      </div>
      <div class="col-md-4 col-md-auto pr-0">
        <div class="product-image float-right">
          <img class="rounded img-thumbnail" :src="details.image_url" />
        </div>
      </div>
    </div>
    <div class="d-flex">
      <div class="col-md-8 col-md-auto">
        <div class="input-group w-50">
          <span class="input-group-btn">
            <button
              type="button"
              class="btn btn-default btn-number"
              :disabled="details.quantity === 1"
              data-type="minus"
              v-on:click="details.quantity--"
            >
              <span class="fa fa-minus"></span>
            </button>
          </span>
          <input
            type="text"
            step="1"
            max="details.quantity == details.stock"
            min="1"
            v-model="details.quantity"
            title="Qty"
            class="form-control text-center"
            size="2"
          />
          <span class="input-group-btn">
            <button
              type="button"
              class="btn btn-default btn-number"
              data-type="plus"
              :disabled="details.quantity === details.stock"
              v-on:click="details.quantity++"
            >
              <span class="fa fa-plus"></span>
            </button>
          </span>
        </div>
      </div>
      <div class="col-md-4 col-md-auto pt-1">
        <button class="btn btn-lg btn-default float-right">
          <i class="fa fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "item",
  props: ["details"],
  mounted() {
    console.log(this.$props.details);
  },
  filters: {
    toIDR(value) {
      return "Rp " + value.toLocaleString() + "";
    }
  },
  data() {
    return {};
  },
  methods: mapActions(["tambah", "kurang"])
};
</script>

<style></style>
