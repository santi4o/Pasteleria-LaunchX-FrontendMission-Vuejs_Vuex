<template>
  <section id="orders">
    <h1>Órdenes</h1>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Teléfono</th>
          <th>Email</th>
          <th>Sabor 1</th>
          <th>Sabor 2</th>
          <th>Cubierta</th>
          <th>Decoraciones</th>
          <th>Notas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in  $store.state.orders" :key="order._id">
          <td>{{ order.number }}</td>
          <td>{{ order.name }}</td>
          <td>{{ order.tel }}</td>
          <td>{{ order.email }}</td>
          <td>{{ order.flavor1 }}</td>
          <td>{{ order.flavor2 }}</td>
          <td>{{ order.cover }}</td>
          <td>
            <li v-for="decoration in order.decorations" :key="decoration._id">
              {{ decoration }}
            </li>
          </td>
          <td>{{ order.notes }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>

export default {
  name: "BakerOrders"
};

</script>
