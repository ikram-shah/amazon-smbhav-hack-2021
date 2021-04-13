<template>
  <div>
    <div
      class="my-4 flex flex-col gap-6 items-center w-full bg-gray-50 flex items-center justify-center rounded-xl"
    >
      <div class="w-3/2 bg-gray-200 overflow-hidden">
        <div class="flex">
          <div class="flex-none w-24 relative">
            <img
              v-if="selfCheckout == 'true'"
              src="../../assets/selfcheckout.png"
              alt=""
              class="absolute p-1 inset-0 w-8 h-8 object-cover"
            />
          </div>
          <form class="p-3">
            <div @click="redirectToStorePage" class="w-48 rounded-lg">
              <h1 class="text-gray-800 text-md font-semibold">
                {{ name }}
              </h1>

              <h4 class="text-gray-600 font-bold text-sm">{{ address }}</h4>

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
    id: null,
    name: null,
    address: null,
    rating: null,
    selfCheckout: null,
  },
  methods: {
    redirectToStorePage() {
      this.$router.push(`/store/${this.id}`);
    },
  },
};
</script>