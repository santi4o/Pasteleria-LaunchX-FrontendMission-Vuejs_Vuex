<template>
  <section id="orders">
    <h1>Órdenes</h1>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Teléfono</th>
          <th>Email</th>
          <th>Sabor 1</th>
          <th>Sabor 2</th>
          <th>Cubierta</th>
          <th>Decoraciones</th>
          <th>Notas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Rodrigo Martínez</td>
          <td>5511223344</td>
          <td>rmartinez@launchx.com</td>
          <td>Té verde</td>
          <td>Té verde</td>
          <td>Crema batida</td>
          <td>Null</td>
          <td>La crema batida de la cubierta que sea color verde claro</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Silvia Herrera</td>
          <td>5522334455</td>
          <td>sherrera@devf.com</td>
          <td>Nuez</td>
          <td>Chocolate</td>
          <td>Chocolate</td>
          <td>Nueces, chocolate</td>
          <td>La cubierta que sea delgada</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Miguel Velasco</td>
          <td>5533445566</td>
          <td>mvelasco@metabaseq.com</td>
          <td>Vainilla</td>
          <td>Limón</td>
          <td>Crema batida</td>
          <td>Galletas, Gotas de crema batida</td>
          <td>Null</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Aldo Santiago</td>
          <td>5544556677</td>
          <td>asantiago@gmail.com</td>
          <td>Chocolate</td>
          <td>Chocolate</td>
          <td>Queso</td>
          <td>Mermelada de zarzamora</td>
          <td>Null</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>

export default {
  name: "BakerOrders"
};

</script>
