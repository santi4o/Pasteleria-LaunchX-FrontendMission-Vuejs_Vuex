<template>
  <article id="popular">
    <h1 class="articleHeader">Populares</h1>
    <div class="itemBox">
      <img
        class="itemPic"
        src="@/assets/pastel-chocolate.jpg"
        alt="Pastel de chocolate"
      />
      <p class="name">Chocolate</p>
      <ul>
        <li>Sabor: Chocolate</li>
        <li>Decoraciones: Chocolate</li>
      </ul>
      <p>$ 300</p>
    </div>
    <div class="itemBox">
      <img
        class="itemPic"
        src="@/assets/pastel-teverde.png"
        alt="Pastel de té verde"
      />
      <p class="name">Té Verde</p>
      <ul>
        <li>Sabor: Té Verde</li>
        <li>Decoraciones: Fresa-ciruela</li>
      </ul>
      <p>$ 400</p>
    </div>
    <div class="itemBox">
      <img
        class="itemPic"
        src="@/assets/pastel-fresa.jpg"
        alt="Pastel de fresa"
      />
      <p class="name">Fresa</p>
      <ul>
        <li>Sabor: Fresa</li>
        <li>Decoraciones: Fresa</li>
      </ul>
      <p>$ 300</p>
    </div>
    <div class="itemBox">
      <img
        class="itemPic"
        src="@/assets/pastel-frutas.jpg"
        alt="Pastel de Vainilla"
      />
      <p class="name">Vainilla - Frutal</p>
      <ul>
        <li>Sabor: Vainilla</li>
        <li>Decoraciones: Frutal</li>
      </ul>
      <p>$ 300</p>
    </div>
    <div class="itemBox">
      <img
        class="itemPic"
        src="@/assets/pastel-chocolate-cereza.jpg"
        alt="Pastel de chocolate con cerezas"
      />
      <p class="name">Chocolate - Cerezas</p>
      <ul>
        <li>Sabor: Chocolate</li>
        <li>Decoraciones: Cereza-chocolate</li>
      </ul>
      <p>$ 300</p>
    </div>
    <div class="itemBox">
      <img
        class="itemPic"
        src="@/assets/pastel-vainilla-fresa.jpg"
        alt="Pastel de fresa"
      />
      <p class="name">Vainilla - Fresas</p>
      <ul>
        <li>Sabor: Vainilla</li>
        <li>Decoraciones: Fresa</li>
      </ul>
      <p>$ 300</p>
    </div>
    <div class="itemBox">
      <img
        class="itemPic"
        src="@/assets/pastel-mango.jpg"
        alt="Pastel de mango"
      />
      <p class="name">Mango</p>
      <ul>
        <li>Sabor: Mango</li>
        <li>Decoraciones: Mango-cereza</li>
      </ul>
      <p>$ 300</p>
    </div>
    <div class="itemBox">
      <img
        class="itemPic"
        src="@/assets/pastel-nueces.jpg"
        alt="Pastel de Nuez"
      />
      <p class="name">Nuez</p>
      <ul>
        <li>Sabor: Nuez</li>
        <li>Decoraciones: Chocolate-nuez</li>
      </ul>
      <p>$ 300</p>
    </div>
    <div class="wide">
      <router-link to="/new_order" @click="scrollToTop">Hacer nuevo pedido personalizado</router-link>
    </div>
  </article>
</template>

<script>
export default {
  name: "Populars",
  methods: { 
  scrollToTop() {
    window.scrollTo(0,0);
  }
}
};
</script>
