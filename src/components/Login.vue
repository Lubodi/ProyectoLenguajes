<script setup>
</script>

<template>
 <div class="flex items-center justify-center h-screen bg-[url('/veterinary-clinic-bg.jpg')] bg-cover bg-center">
  <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h1 class="text-2xl font-bold mb-4 text-primary">Veterinary Clinic Login</h1>
    <form class="space-y-4">
      <div>
        <label for="username" class="block font-medium text-gray-700 mb-1">
          Username
        </label>
        <input
          id="username"
          class="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
          placeholder="Enter your username"
          type="text"
        />
      </div>
      <div>
        <label for="password" class="block font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          id="password"
          class="w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
          placeholder="Enter your password"
          type="password"
        />
      </div>
      <div class="flex justify-between items-center">
        <button
          type="submit"
          class="bg-primary text-black font-medium py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Login
        </button>
        <a
          class="text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          href="#"
          rel="ugc"
        >
          Forgot Password?
        </a>
      </div>
    </form>
  </div>
</div>
</template>