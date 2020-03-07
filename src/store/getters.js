export default {
  allProducts: state => state.dataProducts.items, // would need action/mutation if data fetched async
  getNumberOfProducts: state =>
    state.dataProducts.items ? state.dataProducts.items.length : 0,
  cartProducts: state => {
    return state.added.map(({ id, quantity }) => {
      const product = state.dataProducts.items.find(p => p.id === id);

      return {
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.stuff.image_url,
        stock: product.stuff.stock,
        store: product.store.name,
        quantity
      };
    });
  }
};
