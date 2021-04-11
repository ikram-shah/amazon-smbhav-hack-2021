<template>
  <div>
    <div
      class="my-4 flex flex-col gap-6 items-center w-full bg-gray-50 flex items-center justify-center rounded-xl"
    >
      <div class="w-3/2 bg-gray-200 overflow-hidden">
        <div class="flex">
          <div class="flex-none w-24 relative">
            <img
              src="http://lorempixel.com/500/500/sports/1/Dummy-Text/"
              alt=""
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <form class="p-3">
            <div class="w-48 rounded-lg">
              <h1 class="text-gray-800 text-md font-semibold">
                {{ name }}
              </h1>

              <h4 class="text-gray-600 font-bold text-sm">{{ desc }}</h4>

              <div class="text-lg font-semibold text-gray-900">
                ₹{{ price }}
              </div>
              <div
                class="w-full flex-none text-sm font-medium text-gray-500 mt-2"
              >
                ✭ {{ rating }} / 5.0
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: null,
    desc: null,
    rating: null,
    price: null,
  },
};
</script>