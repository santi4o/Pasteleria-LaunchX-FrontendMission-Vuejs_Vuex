<template>
  <p>Sabor de pastel</p>
  <div class="flavors">
    <label for="flavor1">Sabor 1:</label>
    <select name="flavor1" id="flavorChoice1">
      <option value="vanilla">Vainilla</option>
      <option value="chocolate">Chocolate</option>
      <option value="green_tea">Té Verde</option>
      <option value="strawberry">Fresa</option>
      <option value="nut">Nuez</option>
      <option value="mango">Mango</option>
      <option value="lemon">Limón</option>
      <option value="coffee">Café</option>
    </select>
  </div>
  <div class="flavors">
    <label for="flavor2">Sabor 2:</label>
    <select name="flavor2" id="flavorChoice2">
      <option value="vanilla">Vainilla</option>
      <option value="chocolate">Chocolate</option>
      <option value="green_tea">Té Verde</option>
      <option value="strawberry">Fresa</option>
      <option value="nut">Nuez</option>
      <option value="mango">Mango</option>
      <option value="lemon">Limón</option>
      <option value="coffee">Café</option>
    </select>
  </div>
  <br />
</template>

<script>

export default {
  name: "FlavorsCombinations"
};

</script>
