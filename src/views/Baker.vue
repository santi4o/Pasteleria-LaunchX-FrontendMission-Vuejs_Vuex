<template>
  <header>
    <div class="brand">
      <router-link to="/">
        <img class="logo" src="@/assets/logo.png" alt="Dolce Dolce Pastelería"/>
      </router-link>
      <p class="slogan">Experiencias para compartir</p>
    </div>
    <nav>
      <router-link to="/admin">Inventario</router-link>
      <router-link to="/admin/orders">Órdenes</router-link>
    </nav>
  </header>
  <div class="banner"></div>

  <main>
      <router-view/>
  </main>

</template>

<style>
.banner {
  background-image: url("@/assets/banner.jpg");
  height: 17vw;
  background-size: cover;
}
</style>

<script>
export default {
  name: "Baker"
};
</script>
