import { createStore } from 'vuex'

export default createStore({
  state: {
    orders: [],
    flavors: {
      vanilla: 221,
      chocolate: 90,
      green_tea: 137,
      strawberry: 203,
      nuts: 99,
      mango: 189,
      lemon: 140,
      coffee: 164
    },
    covers: {
      fondant: 130,
      cream: 232,
      chantilli: 343,
      cheese: 98,
      chocolate:105
    },
    decorations: {
      strawberry: 130,
      cherry: 232,
      mango: 88,
      peach: 137,
      grapes: 239,
      kiwi: 34,
      nut: 48,
      chocolate: 342,
      cookies: 214,
      cream: 242,
      chocolate_moons: 76,
      chocolate_chips: 82,
      blackberry_jam: 28 
    }
  },
  getters: {
  },
  mutations: {
    updateOrders(state, order) {
      state.orders.push(order)
    }
  },
  actions: {

    updateOrders({commit}, order) {
      commit('updateOrders', order);
    }
  },
  modules: {
  }
})
