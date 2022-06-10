<script lang="ts" setup>
import { reactive, ref, onMounted, computed, watch } from 'vue';
import { IMetadata } from '../types';
import logo from '../assets/logo.png';

const stream = import.meta.env.VITE_APP_STREAM_URL;
const audio = ref<HTMLAudioElement>();
const volume = ref(0.5);
const windowWidth = ref(window.innerWidth);

const breakpoints = {
  // use tailwind breakpoints
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const currentBreakpoint = computed(() => {
  return {
    isGreaterThan: (breakpoint: keyof typeof breakpoints) =>
      windowWidth.value > breakpoints[breakpoint],
    isLessThan: (breakpoint: keyof typeof breakpoints) =>
      windowWidth.value < breakpoints[breakpoint],
    isEqualTo: (breakpoint: keyof typeof breakpoints) =>
      windowWidth.value === breakpoints[breakpoint],
    actual: windowWidth.value,
    isXs: windowWidth.value <= breakpoints.xs,
    isSm: windowWidth.value <= breakpoints.sm,
    isMd: windowWidth.value <= breakpoints.md,
    isLg: windowWidth.value <= breakpoints.lg,
    isXl: windowWidth.value <= breakpoints.xl,
  }
});

const state = reactive({
  volume,
  isPlaying: false,
})

const createAudio = () => {

  const listener = () => {
    timer.value = audio.value!.currentTime;
  }

  if (audio.value) {
    audio.value.removeEventListener('timeupdate', listener);
    audio.value.pause();
    audio.value.src = '';
  }

  audio.value = new Audio(stream);
  audio.value.volume = volume.value;
  audio.value.addEventListener('timeupdate', listener);
}

const metadata = reactive<IMetadata>({
  artist: '91.1 FM',
  title: 'Señal en vivo',
})
const timer = ref<number>(0)

const play = () => {
  createAudio();
  audio.value!.play();
  state.isPlaying = true;
}

const pause = () => {
  audio.value!.pause();
  state.isPlaying = false;
}

onMounted(() => {
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
  });
  createAudio();
});

const formattedTime = computed(() => {
  const minutes = Math.floor(timer.value / 60);
  const seconds = Math.floor(timer.value % 60);
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = Math.floor(minutes % 60);
  // show two digits for minutes and seconds
  return `${hours > 0 ?
    `${hours}:` : '0:'}${remainingMinutes < 10 ? `0${remainingMinutes}`
      : remainingMinutes}:${seconds < 10 ? `0${seconds}` :
        seconds}`;
});

watch(() => volume.value, (newValue) => {
  if (audio.value) {
    audio.value.volume = newValue;
  }
});

</script>

<template>
  <div v-if="currentBreakpoint.isGreaterThan('lg')" class="relative shadow-2xl">
    <div
      class="2xl:w-[350px] 2xl:h-[350px] w-[250px] h-[250px] rounded-[30px] shadow-lg -top-10 -left-10 z-10 bg-white absolute flex items-center justify-center">
      <img :src="logo" class="2xl:w-[250px] w-[150px]" />
    </div>
    <div class="rounded-[30px] w-full h-full overflow-hidden relative shadow-2xl">
      <div class="bg-white opacity-75 w-full h-full absolute top-0 left-0">
      </div>
      <div class="flex flex-col relative z-10 2xl:w-[420px] w-[300px]">
        <div class="2xl:h-[350px] h-[250px]">

        </div>
        <div class="px-10 pb-10">
          <div>
            <h1 class="font-semibold capitalize text-gray-500 text-5xl">
              {{ metadata.artist }}
            </h1>
            <h2 class="font-semibold capitalize text-gray-500 text-xl">
              {{ metadata.title }}
            </h2>
          </div>
          <div class="flex mt-2 items-center">
            <Icon v-if="!state.isPlaying" class="text-primary cursor-pointer 
              hover:scale-110 transition-all -ml-5 w-20 h-20" name="ri-play-line" @click="play" />
            <Icon v-if="state.isPlaying" class="text-primary cursor-pointer 
              hover:scale-110 transition-all -ml-5 w-20 h-20" name="ri-stop-line" @click="pause" />
            <p class="text-4xl font-medium text-gray-500">
              {{ formattedTime }}
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div class="bg-[#d80309] absolute bottom-0 right-0 px-5 py-1 pt-2 rounded-tl-2xl">
        <p class="text-white font-bold text-lg"> EN VIVO </p>
      </div>
    </div>
  </div>
  <div v-else class="shadow-2xl w-full">
    <div class="w-full p-5 overflow-hidden relative bg-neutral-800 shadow-2xl">
      <div class="flex w-full">
        <div class="flex w-full">
          <div class="bg-white w-16 h-16 rounded-lg flex justify-center items-center">
            <img :src="logo" class="w-10" />
          </div>
          <div class="flex flex-col ml-5 justify-center">
            <div class="text-2xl font-medium text-gray-500">
              {{ metadata.artist }}
            </div>
            <div class="text-md font-medium text-gray-500">
              {{ metadata.title }}
            </div>
          </div>
          <div class="flex ml-auto items-center">
            <Icon v-if="!state.isPlaying" class="text-primary cursor-pointer 
              hover:scale-110 transition-all -ml-5 w-10 h-10" name="ri-play-line" @click="play" />
            <Icon v-if="state.isPlaying" class="text-primary cursor-pointer 
              hover:scale-110 transition-all -ml-5 w-10 h-10" name="ri-stop-line" @click="pause" />
            <p class="text-2xl font-medium text-gray-500">
              {{ formattedTime }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>