<template>
  <div class="fixed top-0 left-0 right-2 pr-2 pl-2 bg-black text-white z-30">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <a
          id="endpoint"
          tabindex="-1"
          class="flex flex-col items-center w-full truncate"
          title="首頁"
          href="/"
        >
          <span class="w-6 h-6 flex items-center justify-center mb-1 mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              fill="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"
              ></path>
            </svg>
          </span>
        </a>
        <div class="flex items-center space-x-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
            alt="YouTube Logo"
            class="h-4"
          />
          <span class="font-bold text-sm">VouTube</span>
          <span class="text-[10px] mb-4 text-gray-400">Practice</span>
        </div>
      </div>

      <div
        class="items-center justify-between w-[40%] px-1 py-2 bg-black text-white hidden sm:flex"
      >
        <div class="w-full relative">
          <svg
            v-if="showIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            class="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.06-1.06l4.35 4.35z"
            />
          </svg>
          <input
            type="text"
            placeholder="搜尋"
            @focus="showIcon = true"
            @blur="showIcon = false"
            :class="[{ 'pl-8': showIcon, 'w-full': showIcon }]"
            class="w-full h-8 pl-4 pr-4 py-2 bg-black text-gray-100 text-[16px] rounded-full border border-[#222222] focus:border-blue-500 focus:outline-none"
          />

          <button class="absolute right-0 top-1/2 transform -translate-y-1/2 text-white group">
            <div
              class="bg-[#222222] rounded-r-full cursor-pointer h-8 w-12 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.06-1.06l4.35 4.35z"
                />
              </svg>
            </div>
            <span
              class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max px-2 py-1 text-xs text-white bg-[#606060] rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none"
            >
              搜尋
            </span>
          </button>
        </div>

        <div class="relative group">
          <button class="icon-button hover:bg-gray-700 bg-[#272727] rounded-full ml-1 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              fill="currentColor"
            >
              <path
                d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"
              ></path>
            </svg>
          </button>

          <span
            class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max px-2 py-1 text-xs text-white bg-[#606060] rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none"
          >
            使用語音搜尋
          </span>
        </div>
      </div>

      <div class="flex items-center">
        <div
          class="flex sm:hidden items-center justify-center hover:bg-gray-700 rounded-full w-full h-full p-2"
        >
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.06-1.06l4.35 4.35z"
              />
            </svg>
          </a>
        </div>

        <div class="relative group">
          <div
            class="flex sm:hidden items-center justify-center hover:bg-gray-700 rounded-full w-full h-full p-2"
          >
            <a title="使用語音搜尋" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                fill="currentColor"
              >
                <path
                  d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"
                ></path>
              </svg>
            </a>
            <span
              class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max px-2 py-1 text-xs text-white bg-[#606060] rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none"
            >
              搜尋
            </span>
          </div>
        </div>

        <div class="relative group">
          <div
            class="flex items-center justify-center hover:bg-gray-700 rounded-full w-full h-full p-2"
          >
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                fill="currentColor"
              >
                <path
                  d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"
                />
              </svg>
              <span
                class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max px-2 py-1 text-xs text-white bg-[#606060] rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none"
              >
                建立
              </span>
            </a>
          </div>
        </div>

        <div
          class="relative group flex items-center justify-center hover:bg-gray-700 rounded-full w-full h-full p-2"
        >
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              fill="currentColor"
            >
              <path
                d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"
              />
            </svg>
          </a>
          <span
            class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max px-2 py-1 text-xs text-white bg-[#606060] rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none"
          >
            通知
          </span>
        </div>

        <img
          src="https://i.imgur.com/Rlb9EpN.png"
          alt="User pic"
          class="h-[32px] w-[32px] rounded-full ml-3 mr-2"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showIcon = ref(false);
</script>

<style scoped></style>
