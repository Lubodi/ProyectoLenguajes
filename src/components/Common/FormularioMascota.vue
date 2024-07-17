<script setup>
import { reactive } from 'vue';

const state = reactive({
  name: '',
  breed: '',
  weight: 0,
  gender: '',
  ownerName: '',
  appointmentDate: '',
  veterinarian: '',
  reason: ''  // Añadí una propiedad para 'Motivo de la Cita'
});
</script>

<template>
  <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-300">
    <h2 class="text-2xl font-bold mb-4">Seguimiento de Mascota</h2>
    <form class="bg-white shadow-md rounded-lg py-10 px-5 mt-10 mb-10">
      <div class="mb-6">
        <label for="pet-name" class="block text-gray-700 font-bold mb-2">Nombre de la Mascota:</label>
        <input v-model="state.name" type="text" id="pet-name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Ingresa el nombre de tu mascota" required>
      </div>

      <div class="mb-6">
        <label for="pet-breed" class="block text-gray-700 font-bold mb-2">Raza de la Mascota:</label>
        <input v-model="state.breed" type="text" id="pet-breed" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Ingresa la raza de tu mascota" required>
      </div>

      <div class="mb-6">
        <label for="pet-weight" class="block text-gray-700 font-bold mb-2">Peso de la Mascota:</label>
        <input v-model="state.weight" type="number" id="pet-weight" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Ingresa el peso de tu mascota" required>
      </div>

      <div class="mb-6">
        <label for="pet-gender" class="block text-gray-700 font-bold mb-2">Género de la Mascota:</label>
        <select v-model="state.gender" id="pet-gender" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          <option value="">Selecciona el género de tu mascota</option>
          <option value="male">Macho</option>
          <option value="female">Hembra</option>
        </select>
      </div>
      
      <div class="mb-6">
        <label for="owner-name" class="block text-gray-700 font-bold mb-2">Nombre del Dueño:</label>
        <input v-model="state.ownerName" type="text" id="owner-name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Ingresa tu nombre" required>
      </div>
      
      <div class="mb-6">
        <label for="appointment-date" class="block text-gray-700 font-bold mb-2">Fecha de la Cita:</label>
        <input v-model="state.appointmentDate" type="date" id="appointment-date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>
      
      <div class="mb-6">
        <label for="veterinarian" class="block text-gray-700 font-bold mb-2">Veterinario Asignado:</label>
        <div class="relative">
          <input v-model="state.veterinarian" type="text" id="veterinarian" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Buscar veterinario" required>
          <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </div>
          <ul class="absolute z-10 w-full bg-white border border-gray-300 rounded-b-lg shadow-lg mt-1 overflow-y-auto max-h-48">
            <li v-for="veterinarian in veterinarians" :key="veterinarian.id" class="px-4 py-2 hover:bg-gray-100 cursor-pointer"></li>
          </ul>
        </div>
      </div>
      
      <div class="mb-6">
        <label for="motivo-de-cita" class="block text-gray-700 font-bold mb-2">Motivo de la Cita:</label>
        <textarea v-model="state.reason" id="motivo-de-cita" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Motivo de la Cita"></textarea>
        <p class="text-gray-500 text-xs italic">Escribe el motivo de la consulta</p>
      </div>

      <div class="flex justify-end mt-6">
        <input type="submit" class="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" :value="'Guardar Cita'">
      </div>
    </form>
  </div>
</template>
