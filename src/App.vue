<template>
  <div id="app" class="bg-gray-900 text-white min-h-screen">
    <navigation />

    <div class="w-full">
      <transition name="page" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  components: {
    Navigation,
  },
};
</script>


<style src="./css/main.css">
