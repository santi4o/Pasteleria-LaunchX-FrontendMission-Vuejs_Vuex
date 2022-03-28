import { createStore } from 'vuex'

export default createStore({
  state: {
    orders: [],
    flavors: [
      {
        name: 'Vainilla',
        quantity: 221
      },
      {
        name: 'Chocolate',
        quantity: 190
      },
      {
        name: 'Té Verde',
        quantity: 137
      },
      {
        name: 'Fresa',
        quantity: 203
      },
      {
        name: 'Nuez',
        quantity: 99
      },
      {
        name: 'Mango',
        quantity: 182
      },
      {
        name: 'Limón',
        quantity: 106
      },
      {
        name: 'Café',
        quantity: 74
      },
    ],
    covers: [
      {
        name: 'Fondant',
        quantity: 131,
      },
      {
        name: 'Crema para batir',
        quantity: 232,
      },
      {
        name: 'Chantilli',
        quantity: 347,
      },
      {
        name: 'Queso',
        quantity: 68,
      },
      {
        name: 'Chocolate',
        quantity: 105,
      },
    ],
    decorations: [
      {
        name: 'Fresas',
        quantity: 26
      },
      {
        name: 'Cerezas',
        quantity: 21
      },
      {
        name: 'Mangos',
        quantity: 34
      },
      {
        name: 'Duraznos',
        quantity: 42
      },
      {
        name: 'Uvas',
        quantity: 19
      },
      {
        name: 'Kiwis',
        quantity: 12
      },
      {
        name: 'Nueces',
        quantity: 23
      },
      {
        name: 'Chocolate',
        quantity: 89
      },
      {
        name: 'Galletas',
        quantity: 44
      },
      {
        name: 'Crema para batir',
        quantity: 66
      },
      {
        name: 'Lunetas',
        quantity: 40
      },
      {
        name: 'Chispas',
        quantity: 63
      },
      {
        name: 'Mermelada de zarzamora',
        quantity: 21
      },
      {
        name: 'Mermelada de fresa',
        quantity: 8
      },
    ]
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
