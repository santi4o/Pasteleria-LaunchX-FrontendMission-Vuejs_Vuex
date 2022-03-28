<template>
  <div class="inventoryGroup">
    <h1>Inventario de Sabores de Pastel</h1>
    <table>
      <thead>
        <tr>
          <th>Sabor</th>
          <th>Rendimiento restante aproximado en cantidad de pasteles</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="flavor in $store.state.flavors" :key="flavor._id">
          <td>{{ flavor.name }}</td>
          <td>{{ flavor.quantity }} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "InventoryFlavors"
};
</script>
