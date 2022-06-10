<script setup lang="ts">
import { sponsors } from '../services/sponsors.service';
import background from '../assets/background.jpg'
import logo from '../assets/logo.png'
import AudioPlayerVue from '../components/AudioPlayer.vue';
</script>

<template>
  <div class="min-h-screen relative">
    <!-- <div class="flex lg:hidden fixed w-full z-10">
          <AudioPlayerVue />
    </div> -->
    <div :style="{ backgroundImage: `url('${background}')` }"
      class="min-h-screen bg-cover bg-no-repeat bg-right flex justify-center">
      <div class="mx-10 md:mx-20 xl:mx-40 grid lg:rid-cols-2 w-full relative">
        <div class="flex flex-col justify-center">
          <img :src="logo" class=" w-48 lg:w-[450px]" />
          <div class="md:ml-10 mt-16">
            <h1 class="text-4xl md:text-6xl font-medium text-white uppercase">
              Escucha la <span class="text-primary">91.1</span> <br> en <span class="text-primary">vivo</span>
            </h1>
            <p class="text-neutral-300 md:text-gray-500 mt-5 font-medium text-3xl md:text-4xl">
              Tu emisora favorita <br>
              desde nuestra nueva señal <br>
              por nuestra pagina web
            </p>
          </div>
        </div>
        <div class="flex fixed w-full z-50 left-0 justify-center items-center lg:w-auto lg:right-20 lg:left-auto xl:right-40 2xl:right-52 lg:top-52">
          <AudioPlayerVue />
        </div>
      </div>
    </div>
    <div class="bg-neutral-900">
      <div class="mx-10 md:mx-20 md:ml-32 xl:mx-40 xl:ml-52 py-20 flex flex-col">
        <h1 class="font-medium text-neutral-600 uppercase text-3xl md:text-5xl max-w-sm md:max-w-lg 2xl:max-w-4xl">
          Traido a ustedes por...
        </h1>
        <div class="grid w-full lg:w-[55%] 2xl:grid-cols-3 md:grid-cols-2 mt-10 gap-5">
          <div
            class="p-5 md:hover:scale-125 grayscale hover:grayscale-0 hover:shadow-md transition-all hover:bg-neutral-800 group rounded cursor-pointer"
            v-for="sponsor in sponsors" :key="sponsor.name">
            <div class="flex">
              <img v-if="sponsor.logo" :src="sponsor.logo" class="max-h-12 max-w-[100px] mr-2 opacity-70 group-hover:opacity-100" />
              <h1 class="text-lg group-hover:text-white text-neutral-600 font-bold">
                {{ sponsor.name }}
              </h1>
            </div>
            <p class="text-white transition-all group-hover:mt-5 invisible h-0 group-hover:h-auto group-hover:visible text-sm">
              {{ sponsor.description }}
            </p>
            <div class="flex flex-wrap max-w-max items-center first:ml-0 transition-all group-hover:mt-5 invisible group-hover:visible h-0 group-hover:h-auto">
              <span v-show="sponsor.phone" class="bg-white rounded-2xl font-bold py-1 px-2 text-[10px] mt-2 whitespace-nowrap mr-2">
                {{ sponsor.phone }}
              </span>
              <a class="bg-green-600 py-1 px-2 rounded-2xl mr-2 mt-2 whitespace-nowrap" target="_blank" :href="sponsor.whatsapp" v-show="sponsor.whatsapp">
                  <div class="flex items-center">
                    <span class="text-[8px] font-bold text-white">Abrir en WhatsApp</span>
                    <Icon class="ml-1 text-white w-[14px] h-[14px]" name="bi-whatsapp"/>
                  </div>
              </a>
              <a class=" bg-indigo-500 py-1 px-2 rounded-2xl mr-2 mt-2 whitespace-nowrap" target="_blank" :href="sponsor.instagram" v-show="sponsor.instagram">
                  <div class="flex items-center">
                    <span class="text-[8px] font-bold text-white">Abrir en instagram</span>
                    <Icon class="ml-1 text-white w-[14px] h-[14px]" name="bi-instagram"/>
                  </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-neutral-800">
      <div class="mx-10 md:mx-20 md:ml-32 xl:mx-40 py-10 xl:ml-52">
        <h1 class="text-neutral-600 font-medium text-3xl uppercase max-w-lg 2xl:max-w-4xl">
          ¿Quieres anunciarte en la 91.1 FM?
        </h1>
      </div>
    </div>
  </div>
</template>