<script lang="ts" setup>
import logo from '@/assets/logo.png';
</script>
<template>
  <div class="bg-black px-10 md:px-32 xl:px-52 py-20">
    <div class="flex items-center">
      <img :src="logo" class="w-20 grayscale opacity-50" />
      <p class="text-neutral-600 ml-5">
        <span class="text-primary">Rumba Brava 91.1 FM</span> © {{ new Date().getFullYear() }} <br> Todos los derechos
        reservados
      </p>
    </div>
    <div>
      <p class="text-neutral-600 text-xs max-w-prose mt-5">
        Rumba Brava 91.1 FM es una emisora de radio local de la ciudad de Boconó,
        Venezuela, con una frecuencia de 91.1 FM, con una programación variada, con una amplia red de amigos y con una
        gran variedad de programas de entretenimiento.
      </p>
    </div>
    <div>
      <!-- social icons -->
      <div class="flex mt-5">
        <a target="_blank" href="https://www.facebook.com/rumbabrava91.1fm/" class="text-neutral-600 text-xs">
          <Icon class="text-neutral-600 w-8 h-8 hover:text-blue-600" name="bi-facebook" />
        </a>
        <a target="_blank" href="https://www.instagram.com/rumbabrava91.1fm/" class="text-neutral-600 text-xs ml-5">
          <Icon class="text-neutral-600 w-8 h-8 hover:text-purple-600" name="bi-instagram" />
        </a>
        <a target="_blank" href="https://www.youtube.com/channel/UC-_X-_X-_X-_X-_X-_X-_X-_X" class="text-neutral-600 text-xs ml-5">
          <Icon class="text-neutral-600 w-8 h-8 hover:text-green-500" name="bi-whatsapp" />
        </a>
      </div>
    </div>
  </div>
</template>