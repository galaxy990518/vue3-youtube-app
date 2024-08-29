<template>
  <div class="flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      class="w-6 h-6 fill-current"
      aria-hidden="true"
    >
      <path
        d="M17.77 10.32l-1.2-.5L18 9.06a3.74 3.74 0 0 0-3.5-6.62L6 6.94a3.74 3.74 0 0 0 .23 6.74l1.2.49L6 14.93a3.75 3.75 0 0 0 3.5 6.63l8.5-4.5a3.74 3.74 0 0 0-.23-6.74Z"
        fill="red"
      />
      <polygon points="10 14.65 15 12 10 9.35 10 14.65" fill="#fff" />
    </svg>
    <span id="title" class="ml-2 text-lg font-semibold">Shorts</span>
  </div>

  <div v-if="shortsData.length === 0" class="flex justify-center items-center h-full">
    <div
      class="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"
    ></div>
  </div>
  <div v-else class="flex flex-wrap rounded-lg">
    <div
      v-for="item in formattedData"
      :key="item.id"
      class="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 xl:w-1/8 cursor-pointer p-2 flex flex-col items-center"
      @click="open_video(item.url)"
    >
      <img :src="item.src" :alt="item.title" class="h-auto object-cover rounded-lg mb-1" />
      <div class="text-left w-full">
        <p class="text-white text-sm line-clamp-2">{{ item.title }}</p>
        <p class="text-gray-400 text-xs">觀看次數：{{ item.views }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import fetcher from '@/config/axiosConfig.js';
import { formatViews } from '@/libs/common';

const shortsData = ref([]);

const fetchShortsData = async () => {
  try {
    const response = await fetcher.get('/api/get_shorts_data');
    shortsData.value = response.data;
  } catch (error) {
    console.error('Error fetching short data:', error);
  }
};

onMounted(() => {
  fetchShortsData();
});

const formattedData = computed(() => {
  return shortsData.value.map((item) => ({ ...item, views: formatViews(item.views) }));
});

const open_video = (url) => {
  window.open(url, '_blank');
};
</script>
