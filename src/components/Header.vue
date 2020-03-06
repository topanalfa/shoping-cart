<template>
  <div>
    <div class="card-header bg-danger text-light text-center">
      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      Keranjang Belanja
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    menu: String
  },
  data() {
    return {
      judul: 'Keranjang Belanja'
    };
  }
};
</script>

<style></style>
