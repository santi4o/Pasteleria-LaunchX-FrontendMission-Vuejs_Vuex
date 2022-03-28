<template>
  <main>
    <section class="order">
      <h1>Nuevo Pedido</h1>
      <OrderForm/>
    </section>
  </main>
</template>

<script>
import OrderForm from "@/components/OrderForm.vue";

export default {
  name: "NewOrder",
  components: {
    OrderForm
  },
};
</script>
