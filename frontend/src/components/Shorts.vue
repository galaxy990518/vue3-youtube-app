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

  <div class="flex flex-wrap rounded-lg">
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
import { ref, computed } from 'vue';

const shortsData = ref([
  {
    id: 1,
    title:
      'Analog Clock #shortvideo #coding #htmlcss #shortsfeed #shorts #ytshorts #ytviral #webdesign',
    views: 2177,
    src: 'https://i.imgur.com/At7NJ0L.png',
    url: 'https://www.youtube.com/shorts/CWYbqaTHWoE'
  },
  {
    id: 2,
    title:
      'Background animation #shortvideo #coding #css3animation #shorts #ytshorts #ytviral #shortsfeed #css',
    views: 1234,
    src: 'https://i.imgur.com/YkK3pGL.png',
    url: 'https://www.youtube.com/shorts/ePOgR_GCSVs'
  },
  {
    id: 3,
    title: 'programer see this #shortvideo #shortsfeed #shorts',
    views: 3456,
    src: 'https://i.imgur.com/TmMyBjO.png',
    url: 'https://www.youtube.com/shorts/98sTqPcRfWc'
  },
  {
    id: 4,
    title:
      'animation border #shortvideo #shortsfeed #viral #shorts #ytshorts $ #webdevlist content #shortvideo #cssanimation #coding ##webdesign #viral #html #shorts #ytshorts_',
    views: 5678,
    src: 'https://i.imgur.com/e4EVQVV.png',
    url: 'https://www.youtube.com/shorts/6_z6WjoWSSc'
  },
  {
    id: 5,
    title:
      'CSS style #shorts #ytshort #shortvideo #viral #css3animation #webdesign #webdesign#webdevelopment #viral #programming #shorts',
    views: 7890,
    src: 'https://i.imgur.com/xuJa4Ex.png',
    url: 'https://www.youtube.com/shorts/LV60ho7CdA8'
  },
  {
    id: 6,
    title: 'image hover zoom #shortvideo #coding #shortsfeed #shorts #ytshorts',
    views: 9101,
    src: 'https://i.imgur.com/9BKe3Jz.png',
    url: 'https://www.youtube.com/shorts/2iKjvjzIo7I'
  },
  {
    id: 7,
    title: 'button hover Animation #shorts #ytshorts #csshovereffect',
    views: 1805,
    src: 'https://i.imgur.com/2zJbjtt.png',
    url: 'https://www.youtube.com/shorts/x05qsqnv6E8'
  },
  {
    id: 8,
    title: 'secret website #shortvideo #coding #css3animation #webdevelopment #short #ytshorts',
    views: 15616,
    src: 'https://i.imgur.com/xSPApHa.png',
    url: 'https://www.youtube.com/shorts/MUG0OspOZVU'
  }
]);

const formatViews = (number) => {
  if (number >= 100000000) {
    return `${(number / 100000000).toFixed(1)}億次`;
  } else if (number >= 10000) {
    const formatted = Math.floor((number / 10000) * 10) / 10;
    return `${formatted}萬次`;
  }
  return `${number}次`;
};

const formattedData = computed(() => {
  return shortsData.value.map((item) => ({ ...item, views: formatViews(item.views) }));
});

const open_video = (url) => {
  window.open(url, '_blank');
};
</script>
