<template lang="">
  <div>
    <h1>{{ msg }}</h1>
    <button @click="user.add()">count: {{ user.count }}</button>
    <button>T Ready!!</button>
    <router-view></router-view>
    <button class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 border-none cursor-pointer">
      TailWindCSS Ready!!
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from './store/user';
const user = useUserStore();

const msg = ref('jfidfj');
</script>
<style scoped>
h1 {
  color: blue;
}
</style>
