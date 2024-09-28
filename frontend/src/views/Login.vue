<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-800"
  >
    <div class="bg-gray-800 p-8 rounded-lg shadow-2xl w-96 border border-gray-700">
      <h2 class="text-3xl font-bold mb-6 text-gray-100 text-center">登入</h2>
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="username" class="block text-sm font-medium text-gray-300">用戶名</label>
          <input
            v-model="username"
            type="text"
            id="username"
            class="mt-1 block w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            required
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-300">密碼</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="mt-1 block w-full px-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
          :disabled="isLoading"
        >
          <span v-if="isLoading" class="flex items-center justify-center">
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            登入中...
          </span>
          <span v-else>登入</span>
        </button>
      </form>
      <p v-if="error" class="mt-4 text-red-400 text-center">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import fetcher from '@/config/axiosConfig';

const username = ref('tinadmin');
const password = ref('tinadmin');
const error = ref('');
const isLoading = ref(false);
const router = useRouter();

const handleLogin = async () => {
  error.value = '';
  isLoading.value = true;

  try {
    await fetcher.post('/api/login', {
      username: username.value,
      password: password.value
    });

    sessionStorage.setItem('isLoggedIn', 'true');
    router.push('/');
  } catch (err) {
    if (err.response) {
      error.value =
        err.response.data.message || 'Login failed, please check your username and password';
    } else {
      error.value = 'An error occurred during the login process, please try again later';
    }
  } finally {
    isLoading.value = false;
  }
};
</script>
