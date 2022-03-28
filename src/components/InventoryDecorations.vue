<template>
  <div class="inventoryGroup">
    <h1>Inventario de decoraciones</h1>
    <table>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Rendimiento restante aproximado en cantidad de pasteles</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="decoration in $store.state.decorations" :key="decoration._id">
          <td>{{ decoration.name }}</td>
          <td>{{ decoration.quantity }} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "InventoryDecorations"
};
</script>