<script setup>
import { service } from '@/data/service';
import {ref } from 'vue';

const services = ref(service)
</script>

<template>
 
 <section class="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center relative bg-green-300">
  <img src="../assets/icons/imagenAnimales.png" alt="Veterinary Clinic" class="absolute inset-0 w-full h-full object-cover opacity-90">
  <div class="container mx-auto text-center max-w-3xl relative">
    <div class="bg-white p-8 rounded-lg shadow-lg border border-gray-300">
      <h2 class="text-5xl font-bold mb-6 text-black">Bienvenido a Pawfect Pets</h2>
      <p class="text-lg mb-10 text-black">En Pawfect Pets Veterinary Clinic, nos dedicamos a brindar un cuidado excepcional a tus queridas mascotas. Nuestro equipo de veterinarios experimentados y personal dedicado se esfuerza por mantener a tus amigos peludos felices y saludables.</p>
      <div class="flex justify-center">
        <a href="citas" class="bg-green-300 hover:bg-green-400 text-black font-bold py-3 px-8 rounded-lg transition-colors">Agendar Cita</a>
      </div>
    </div>
  </div>
</section>



<section id="services" class="py-16 bg-gray-100">
    <div class="container mx-auto">
      <h3 class="text-3xl font-bold text-center mb-8">Nuestros Servicios</h3>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/3 px-4 mb-8" v-for="(service, index) in services" :key="index">
          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <h4 class="text-xl font-bold mb-4">{{ service.title }}</h4>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>


<section id="faq" class="py-16 bg-white">
    <div class="container mx-auto">
        <h3 class="text-3xl font-bold text-center mb-8">Preguntas Frecuentes (FAQ)</h3>
        <div class="max-w-4xl mx-auto">
            <div class="mb-8">
                <h4 class="text-xl font-semibold mb-2">¿Cuáles son sus horas de operación?</h4>
                <p>Estamos abiertos de lunes a viernes de 8:00 am a 6:00 pm y los sábados de 9:00 am a 2:00 pm. Los domingos estamos cerrados.</p>
            </div>
            <div class="mb-8">
                <h4 class="text-xl font-semibold mb-2">¿Necesito hacer una cita previa?</h4>
                <p>Recomendamos hacer una cita previa para asegurar que uno de nuestros veterinarios esté disponible para atender a tu mascota. Sin embargo, también aceptamos visitas sin cita previa en caso de emergencias.</p>
            </div>
            <div class="mb-8">
                <h4 class="text-xl font-semibold mb-2">¿Qué tipos de mascotas atienden?</h4>
                <p>Atendemos una amplia variedad de mascotas incluyendo perros, gatos, aves, roedores, y reptiles.</p>
            </div>
            <div class="mb-8">
                <h4 class="text-xl font-semibold mb-2">¿Ofrecen planes de salud para mascotas?</h4>
                <p>Sí, ofrecemos planes de salud personalizados para ayudar a mantener a tu mascota saludable durante todo el año. Ponte en contacto con nosotros para más detalles.</p>
            </div>
        </div>
    </div>
</section>


<footer class="bg-muted text-muted-foreground py-6 px-4 md:px-6">
  <div class="container flex items-center justify-between">
    <p class="text-sm">&copy; 2024 Pawfect Pets Veterinary Clinic. Todos los derechos reservados.</p>
    <nav class="flex gap-4">
      <a class="hover:underline" href="#" rel="ugc">
        Política de Privacidad
      </a>
      <a class="hover:underline" href="#" rel="ugc">
        Términos del Servicio
      </a>
    </nav>
  </div>
</footer>

</template>
  

  