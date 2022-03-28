<template>
  <header>
    <div class="brand">
      <router-link to="/">
        <img class="logo" src="@/assets/logo.png" alt="Dolce Dolce Pastelería"/>
      </router-link>
      <p class="slogan">Experiencias para compartir</p>
    </div>
    <nav>
      <router-link to="/new_order">Hacer Nuevo Pedido</router-link>
      <a href="/#flavors">Sabores</a>
      <a href="/#covers">Cubiertas</a>
      <a href="/#decorations">Decoraciones</a>
      <router-link to="/admin">Mi cuenta</router-link>
    </nav>
  </header>
  <div class="banner"></div>
  <router-view/>
  <About/>
</template>

<style>
.banner {
    background-image: url("@/assets/banner.jpg");
    height: 17vw;
    background-size:cover;
}
</style>

<script>

import About from "@/components/About.vue";

export default {
  name: "HomeView",
  components: {
    About,
  },
};
</script>
