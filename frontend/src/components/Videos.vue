<template>
  <div class="flex flex-wrap rounded-lg translate-y-[-50px]">
    <div
      v-for="item in formattedData"
      :key="item.id"
      class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 cursor-pointer"
      @click="open_video(item.url)"
    >
      <div class="p-2 rounded-lg">
        <img :src="item.src" :alt="item.title" class="w-full h-auto object-cover rounded-lg mb-1" />
        <p class="text-white text-sm line-clamp-2">{{ item.title }}</p>
        <p class="text-gray-400 text-xs">{{ item.channel }}</p>
        <p class="text-gray-400 text-xs">觀看次數：{{ item.views }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import fetcher from '@/config/axiosConfig.js';

const videosData = ref([]);

const fetchVideoData = async () => {
  try {
    const response = await fetcher.get('/api/get_video_data');
    videosData.value = response.data;
  } catch (error) {
    console.error('Error fetching video data:', error);
  }
};

onMounted(() => {
  fetchVideoData();
});

const formatViews = (number) => {
  if (number >= 100000000) {
    return `${(number / 100000000).toFixed(1)}億次`;
  } else if (number >= 10000) {
    const formatted = Math.floor((number / 10000) * 10) / 10;
    return `${formatted}萬次`;
  }
  return `${number}次`;
};

const open_video = (url) => {
  window.open(url, '_blank');
};

const formattedData = computed(() => {
  return videosData.value.map((item) => ({ ...item, views: formatViews(item.views) }));
});
</script>

<style scoped></style>
