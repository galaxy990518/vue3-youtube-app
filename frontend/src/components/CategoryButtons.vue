<template>
  <div class="fixed top-12 left-[102px] p-2 right-0 bg-black text-white z-20">
    <div class="flex items-center">
      <button
        v-if="showLeftButton"
        @click="scrollButtons('left')"
        class="mr-2 bg-[#303030] text-white text-xs rounded-lg w-7 h-7 flex-shrink-0 flex items-center justify-center"
      >
        &lt;
      </button>
      <div class="flex space-x-2 overflow-x-hidden" ref="categoryContainer">
        <button
          v-for="item in categoryButtons"
          :key="item.id"
          :class="[
            'text-xs rounded-lg px-2 h-7 flex-shrink-0 transition-colors',
            item.id === 1 ? 'bg-white text-black' : 'bg-[#303030] text-white'
          ]"
        >
          {{ item.title }}
        </button>
      </div>
      <button
        v-if="showRightButton"
        @click="scrollButtons('right')"
        class="ml-2 bg-[#303030] text-white text-xs rounded-lg w-7 h-7 flex-shrink-0 flex items-center justify-center"
      >
        &gt;
      </button>
    </div>
  </div>

  <div class="h-[50px]"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const categoryButtons = [
  { id: 1, title: '全部' },
  { id: 2, title: '遊戲' },
  { id: 3, title: '音樂' },
  { id: 4, title: '合輯' },
  { id: 5, title: '直播中' },
  { id: 6, title: '動畫' },
  { id: 7, title: '最新上傳' },
  { id: 8, title: '已觀看' },
  { id: 9, title: '讓你耳目一新的影片' }
];

const categoryContainer = ref(null);
const showLeftButton = ref(false);
const showRightButton = ref(false);

const updateButtonVisibility = () => {
  if (categoryContainer.value) {
    const { scrollLeft, scrollWidth, clientWidth } = categoryContainer.value;
    showLeftButton.value = scrollLeft > 0;
    showRightButton.value = scrollLeft + clientWidth < scrollWidth;
  }
};

const scrollButtons = (direction) => {
  if (categoryContainer.value) {
    const scrollAmount = categoryContainer.value.clientWidth / 2;
    const scrollDirection = direction === 'left' ? -scrollAmount : scrollAmount;
    categoryContainer.value.scrollBy({ left: scrollDirection, behavior: 'smooth' });

    setTimeout(updateButtonVisibility, 300);
  }
};

onMounted(() => {
  updateButtonVisibility();
  categoryContainer.value.addEventListener('scroll', updateButtonVisibility);
  window.addEventListener('resize', updateButtonVisibility);
});

onUnmounted(() => {
  if (categoryContainer.value) {
    categoryContainer.value.removeEventListener('scroll', updateButtonVisibility);
  }
  window.removeEventListener('resize', updateButtonVisibility);
});
</script>

<style scoped>
.flex {
  transition: all 0.3s ease-in-out;
}
</style>
