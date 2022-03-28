<template>
  <form action="/">
    <FlavorsCombinations />
    <CoverSelection />
    <DecorationsCombinations />
    <p>Notas adicionales</p>
    <textarea id="notes" name="notes" rows="4" cols="30"></textarea>
    <p>Datos de contacto</p>
    <div id="contactInput">
      <label for="name">Nombre: </label>
      <input type="text" id="name" name="name" pattern="[a-zA-Z ]+" required />
      <label for="tel">Teléfono: </label>
      <input
        type="tel"
        id="tel"
        name="tel"
        placeholder="10 dígitos"
        pattern="[0-9]{10}"
        required
      />
      <label for="email">Correo electrónico: </label>
      <input type="email" id="email" name="email" required />
    </div>
    <input id="submitBtn" type="submit" value="Hacer pedido" />
  </form>
</template>

<script>
import FlavorsCombinations from "@/components/FlavorsCombinations.vue";
import CoverSelection from "@/components/CoverSelection.vue";
import DecorationsCombinations from "@/components/DecorationsCombinations.vue";

export default {
  name: "OrderForm",
  components: {
    FlavorsCombinations,
    CoverSelection,
    DecorationsCombinations,
  },
};
</script>
