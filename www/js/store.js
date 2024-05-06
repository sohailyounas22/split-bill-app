var createStore = Framework7.createStore;
const store = createStore({
  state: {
    totalAmount: 0,
  },
  getters: {
    getAmount({ state }) {
      return state.totalAmount;
    },
  },
  actions: {
    setAmount({ state }, amount) {
      state.totalAmount = amount;
    },
  },
});
