<template>
  <div>
    <div v-if="videosData.length === 0" class="flex justify-center items-center h-full">
      <div
        class="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"
      ></div>
    </div>
    <div v-else class="flex flex-wrap rounded-lg translate-y-[-50px]">
      <div
        v-for="item in formattedData"
        :key="item.id"
        class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 cursor-pointer"
        @click="open_video(item.url)"
      >
        <div class="p-2 rounded-lg">
          <img
            :src="item.src"
            :alt="item.title"
            class="w-full h-auto object-cover rounded-lg mb-1"
          />
          <p class="text-white text-sm line-clamp-2">{{ item.title }}</p>
          <p class="text-gray-400 text-xs">{{ item.channel }}</p>
          <p class="text-gray-400 text-xs">觀看次數：{{ item.views }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import fetcher from '@/config/axiosConfig.js';
import { formatViews } from '@/libs/common';

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

const open_video = (url) => {
  window.open(url, '_blank');
};

const formattedData = computed(() => {
  return videosData.value.map((item) => ({ ...item, views: formatViews(item.views) }));
});
</script>

<style scoped></style>
