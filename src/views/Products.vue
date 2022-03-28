<template>
  <main>
    <section>
      <Populars/>
      <Flavors/>
      <Covers/>
      <Decorations/>
    </section>
  </main>
</template>

<script>

import Populars from "@/components/Populars.vue";
import Flavors from "@/components/Flavors.vue";
import Covers from "@/components/Covers.vue";
import Decorations from "@/components/Decorations.vue";

export default {
  name: "Products",
  components: {
      Populars,
      Flavors,
      Covers,
      Decorations,
  }
};
</script>
