<template>
  <header>
    <div class="brand">
      <router-link to="/">
        <img class="logo" src="@/assets/logo.png" alt="Dolce Dolce Pastelería"/>
      </router-link>
      <p class="slogan">Experiencias para compartir</p>
    </div>
    <nav>
      <router-link to="/">Regresar a Inicio</router-link>
      <router-link to="/admin">Órdenes</router-link>
      <router-link to="/admin/inventory">Inventario de Pastelería</router-link>
    </nav>
  </header>
  <div class="banner"></div>
  <div id="welcomeMessage">
      <h2>Bienvenido Administrador</h2>
  </div>
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

#welcomeMessage {
  display: flex;
  justify-content: center;
}
</style>

<script>
export default {
  name: "Baker"
};
</script>
