<template>
  <div id="app">
    <Toolbar />
    <div class="flex">
      <Sidebar />
      <div class="content">
        <CategoryButtons />
        <Videos />
        <Shorts />
      </div>
    </div>
  </div>
</template>

<script setup>
import Toolbar from './components/Toolbar.vue';
import Sidebar from './components/Sidebar.vue';
import Videos from './components/Videos.vue';
import Shorts from './components/Shorts.vue';
import CategoryButtons from './components/CategoryButtons.vue';
</script>

<style>
body {
  margin: 0;
  font-family: Roboto, Arial, sans-serif;
  background-color: #000000;
  color: #ffffff;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  margin-left: 100px;
  margin-top: 100px;
  padding-top: 12px;
  justify-content: flex-start;
}
</style>
