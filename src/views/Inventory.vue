<template>
    <section id="inventory">
        <InventoryFlavors/>
        <InventoryCovers/>
        <InventoryDecorations/>
    </section>
</template>

<script>
import InventoryFlavors from "@/components/InventoryFlavors.vue";
import InventoryCovers from "@/components/InventoryCovers.vue";
import InventoryDecorations from "@/components/InventoryDecorations.vue";

export default {
  name: "Inventory",
  components: {
      InventoryFlavors,
      InventoryCovers,
      InventoryDecorations
  },
};


</script>