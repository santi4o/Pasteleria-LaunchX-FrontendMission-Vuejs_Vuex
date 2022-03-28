<template>
  <p>Cubierta</p>
  <div class="radioGroup">
    <input
      type="radio"
      id="crema_batida"
      name="cover"
      value="crema_batida"
      checked
    />
    <label for="crema_batida">Crema Batida</label><br />
    <input type="radio" id="fondant" name="cover" value="fondant" />
    <label for="fondant">Fondant</label><br />
    <input type="radio" id="chantilli" name="cover" value="chantilli" />
    <label for="chantilli">Chantillí</label><br />
    <input type="radio" id="cheese" name="cover" value="cheese" />
    <label for="cheese">Queso</label><br />
    <input type="radio" id="chocolate" name="cover" value="chocolate" />
    <label for="chocolate">Chocolate</label><br />
  </div>
</template>

<script>

export default {
  name: "CoverSelection"
};

</script>
