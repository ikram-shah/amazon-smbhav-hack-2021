<template>
  <div class="container mx-auto">
    <!-- <h1 class="text-black">Store Page {{ $route.params.id }}</h1> -->
    <div class="rounded rounded-t-lg overflow-hidden max-w-md">
      <div class="text-left pt-2">
        <h3 class="text-black text-lg bold font-sans">STORE NAME</h3>
        <p class="text-black text-sm bold font-sans">STORE ADDRESS</p>
        <div class="flex flex-col items-left py-1 space-y-3">
          <div class="flex space-x-3">
            <svg
              class="w-6 h-6 text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              class="w-6 h-6 text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              class="w-6 h-6 text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              class="w-6 h-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <svg
              class="w-6 h-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
        </div>
      </div>
      <hr class="line" />
      <div>
        <div class="mb-2">
          <h4 class="text-lg font-bold text-gray-800">Prime exclusives</h4>
          <div class="recommended px-1 mb-12">
            <vue-glide
              :perView="2"
              :gap="30"
              :peek="{ before: 0, after: 0 }"
              :breakpoints="{
                1024: {
                  perView: 2,
                },
                800: {
                  perView: 1,
                },
                576: {
                  perView: 1,
                  peek: {
                    before: 0,
                    after: 0,
                  },
                },
              }"
            >
              <vue-glide-slide
                v-for="offer in getPrimeExclusives()"
                :key="offer.name"
              >
                <prime-exclusive-card
                  :img="offer.image"
                  :storeName="offer.storeName"
                  :productName="offer.productName"
                  :productPrice="offer.productPrice"
                  :offerDesc="offer.offerDesc"
                  :storeNearby="offer.storeNearby"
                />
              </vue-glide-slide>

              <template slot="control">
                <button
                  data-glide-dir="<"
                  class="absolute w-4 h-4 rounded-full bg-gray-500"
                  style="top: calc(50% - 8px); left: 10px"
                >
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 24 24"
                    style="margin-left: 3px"
                  >
                    <path
                      d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"
                    ></path>
                  </svg>
                </button>
                <button
                  data-glide-dir=">"
                  class="absolute w-4 h-4 rounded-full bg-gray-500"
                  style="top: calc(50% - 8px); right: 10px"
                >
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 24 24"
                    style="margin-left: 3px"
                  >
                    <path
                      d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                    ></path>
                  </svg>
                </button>
              </template>
            </vue-glide>
            <h4 class="text-xl font-bold text-gray-800 my-2">
              Shop by category
            </h4>
            <div class="flex flex-wrap items-center justify-center">
              <div v-for="category in getCategories()" :key="category.name">
                <category-card
                  :bgColor="category.bgColor"
                  :img="category.image"
                  :name="category.name"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCard from "../components/Cards/CategoryCard.vue";
import PrimeExclusiveCard from "../components/Cards/PrimeExclusiveCard.vue";

import * as data from "../data.js";

export default {
  name: "store",
  components: {
    PrimeExclusiveCard,
  },
  methods: {
    getCategories() {
      return data.getCategories();
    },
    getPrimeExclusives() {
      return data.getPrimeExclusives();
    },
  },
};
</script>

<style>
.line {
  border: 0.2px dotted rgba(128, 128, 128, 0.082);
}
</style>