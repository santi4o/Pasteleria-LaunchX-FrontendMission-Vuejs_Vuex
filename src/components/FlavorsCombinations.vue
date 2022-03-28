<template>
  <p>Sabor de pastel</p>
  <div class="flavors">
    <label for="flavor1">Sabor 1:</label>
    <select name="flavor1" id="flavorChoice1">
      <option value="vainilla">Vainilla</option>
      <option value="chocolate">Chocolate</option>
      <option value="té verde">Té Verde</option>
      <option value="fresa">Fresa</option>
      <option value="nuez">Nuez</option>
      <option value="mango">Mango</option>
      <option value="limón">Limón</option>
      <option value="café">Café</option>
    </select>
  </div>
  <div class="flavors">
    <label for="flavor2">Sabor 2:</label>
    <select name="flavor2" id="flavorChoice2">
      <option value="vainilla">Vainilla</option>
      <option value="chocolate">Chocolate</option>
      <option value="té verde">Té Verde</option>
      <option value="fresa">Fresa</option>
      <option value="nuez">Nuez</option>
      <option value="mango">Mango</option>
      <option value="limón">Limón</option>
      <option value="café">Café</option>
    </select>
  </div>
  <br />
</template>

<script>

export default {
  name: "FlavorsCombinations"
};

</script>
