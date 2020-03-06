<template>
  <div>
    <div class="container">
      <Header />
      <div class="main">
        <div
          class="card mb-1 ml-1 mr-1"
          v-for="item in items"
          v-bind:key="item.id"
        >
          <div class="card-body">
            <Item v-bind:details="item" />
          </div>
        </div>
      </div>
      <div class="card-header bg-default border mb-1">
        <div class="row">
          <div class="col-md-8">
            Total:
            <h3>{{ total }}</h3>
          </div>
          <div class="col-md-4">
            <div class="bayar float-right">
              <button class="btn btn-lg btn-danger">Bayar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';
import Item from './Item.vue';

export default {
  name: 'Cart',
  components: {
    Header,
    Item
  },
  props: ['items'],
  methods: {
    created() {
      this.$props.items.reduce((a, b) => a + b, 0);
    }
  },
  data() {
    return {
      total: 0
    };
  }
};
</script>

<style>
.main {
  background-color: #e3e3e3;
}
</style>
