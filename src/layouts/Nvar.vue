<script setup>
</script>

<template>
<header>
  <nav class="bg-green-900 py-4">
    <ul class="flex justify-center space-x-4">
      <li><router-link to="home" class="text-white hover:text-gray-400">Inicio</router-link></li>
      <li><router-link to="/citas" class="text-white hover:text-gray-400">Citas</router-link></li>
      <li><router-link to="/miscitas" class="text-white hover:text-gray-400">Mis Citas</router-link></li>
      <li><router-link to="/contacto" class="text-white hover:text-gray-400">Contacto</router-link></li>
      <li><router-link to="/perfil" class="text-white hover:text-gray-400">Perfil</router-link></li>
    </ul>
  </nav>
</header>

</template>