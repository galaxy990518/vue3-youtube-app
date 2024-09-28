<template>
  <div class="flex flex-col min-h-screen bg-black text-white">
    <Toolbar />

    <div class="flex flex-1">
      <Sidebar />
      <main class="flex-1 ml-24 mt-16 p-4">
        <CategoryButtons />
        <Videos />
        <Shorts />
      </main>
    </div>

    <footer class="bg-black p-4 text-center mt-auto">
      <p class="text-sm">
        © {{ new Date().getFullYear() }} Tina 練習刻版 - 這不是YouTube的官方網站
      </p>
    </footer>
  </div>
</template>

<script setup>
import Toolbar from '@/components/Toolbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import Videos from '@/components/Videos.vue';
import Shorts from '@/components/Shorts.vue';
import CategoryButtons from '@/components/CategoryButtons.vue';
</script>
