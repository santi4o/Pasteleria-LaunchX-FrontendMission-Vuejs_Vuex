<template>
  <div class="inventoryGroup">
    <h1>Inventario de cubiertas de Pastel</h1>
    <table>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Rendimiento restante aproximado en cantidad de pasteles</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cover in $store.state.covers" :key="cover._id">
          <td>{{ cover.name }}</td>
          <td>{{ cover.quantity }} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "InventoryCovers"
};
</script>