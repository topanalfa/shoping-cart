import * as types from './mutation-types';

export default {
  addToCart({ commit }, product) {
    commit(types.ADD_TO_CART, {
      id: product.id
    });
  },
  tambah(state, { id }) {
    const record = state.added.findIndex(obj => obj.id == id);
    record.quantity++;
    console.log(record);
  },
  kurang(state, { id }) {
    const record = state.added.findIndex(obj => obj.id == id);

    if (record.quantity > 0) {
      record.quantity--;
    }
    console.log(record);
  }
};
