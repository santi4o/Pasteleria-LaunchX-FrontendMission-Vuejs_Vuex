<template>
  <form id="newOrder" v-on:submit.prevent="onSubmit()">
    <FlavorsCombinations />
    <CoverSelection />
    <DecorationsCombinations />
    <p>Notas adicionales</p>
    <textarea id="notes" name="notes" rows="4" cols="30"></textarea>
    <p>Datos de contacto</p>
    <div id="contactInput">
      <label for="name">Nombre: </label>
      <input
        type="text"
        id="name"
        name="name"
        pattern="[a-zA-Z ]+"
        required
      />
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
    <!--<div id="submitDiv">
      <router-link to="/" id="submitBtn" @click="submit()">Hacer pedido</router-link>
    </div>-->
    <input type="submit" value="Hacer Pedido" id='submitBtn'>
    <!--<button id="submitBtn" value="Hacer pedido" @click.prevent="submit()">hacer pedido</button>-->
  </form>
</template>

<style scoped>
  #submitDiv {
    display: flex;
  }
</style>

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
  methods: {
    onSubmit() {
      var newNumber = this.$store.state.orders.length + 1;
      var newName = document.getElementById('name').value;
      var newTel = document.getElementById('tel').value;
      var newEmail = document.getElementById('email').value;
      var newFlavor1 = document.getElementById('flavorChoice1').value;
      var newFlavor2 = document.getElementById('flavorChoice2').value;
      var newCover = document.querySelector('input[name="cover"]:checked').value;
      var newNotes = document.getElementById('notes').value;
      var selectedDecorations = document.querySelectorAll('input[name="decorations"]:checked');
      var newDecorations = [];
      for (var i = 0; i < selectedDecorations.length; i++) {
        newDecorations.push(selectedDecorations[i].value);
      }

      var order = {
        number: newNumber,
        name: newName,
        tel: newTel,
        email: newEmail,
        flavor1: newFlavor1,
        flavor2: newFlavor2,
        cover: newCover,
        decorations: newDecorations,
        notes: newNotes
      }
      this.$store.dispatch("updateOrders", order);
      alert("¡Pedido Realizado! Gracias por su orden")
      document.getElementById('newOrder').reset();
    }
  }
};
</script>
