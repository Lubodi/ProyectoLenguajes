<script setup>
import { ref } from 'vue';
import { user } from '@/data/user';

const users = ref(user);
</script>

<template>
  <div class="profile bg-white p-6 rounded-lg shadow-lg border border-gray-300">
    <h1 class="text-2xl font-bold mb-4 text-black">Perfil de Usuario</h1>
    <img :src="users[0].avatar" alt="Avatar" class="profile-avatar w-32 h-32 rounded-full mb-4">
    <p class="mb-2 text-black"><strong class="font-medium">Nombre:</strong> {{ users[0].name }}</p>
    <p class="mb-2 text-black"><strong class="font-medium">Email:</strong> {{ users[0].email }}</p>
    <p class="mb-4 text-black"><strong class="font-medium">Bio:</strong> {{ users[0].bio }}</p>
    <p class="mb-4 text-black"><strong class="font-medium">Rol:</strong> </p>
    <button class="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg" @click="editProfile">
      Editar Perfil
    </button>
  </div>
</template>
