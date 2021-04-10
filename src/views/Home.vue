<template>
  <div class="container mx-auto">
    <div class="my-8">
      <h4 class="font-black text-black py-4">Offers near you</h4>
      <vue-glide :perView="1" :bullet="true" class="mb-6">
        <vue-glide-slide>
          <router-link to="/about">
          <co
            <img src="https://cdn.grabon.in/gograbon/images/merchant/1610000375685.png" alt="mandalorian" class="rounded" />
          </router-link>
        </vue-glide-slide>
        <vue-glide-slide>
          <router-link to="/about">
            <img src="https://images.freekaamaal.com/post_images/1606887324.jpg" alt="mandalorian" class="rounded" />
          </router-link>
        </vue-glide-slide>
        <vue-glide-slide>
          <router-link to="/about">
            <img src="https://d168jcr2cillca.cloudfront.net/uploadimages/coupons/10211-Swiggy_Banrner.jpg" alt="mandalorian" class="rounded" />
          </router-link>
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

      <h4 class="font-black text-black py-4">Prime exclusives</h4>
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

          <vue-glide-slide v-for="offer in getPrimeExclusives()" :key="offer.name">
            <prime-exclusive-card 
              :img="offer.image"
              :storeName="offer.storeName"
              :productName="offer.productName"
              :productPrice="offer.productPrice"
              :offerDesc="offer.offerDesc"
              :storeNearby="offer.storeNearby"/>
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
        <h4 class="font-black text-black py-4">What do you want to shop for today?</h4>
        <div class=" flex flex-wrap items-center justify-center">
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
</template>

<script>
import CategoryCard from "../components/Cards/CategoryCard.vue";
import PrimeExclusiveCard from '../components/Cards/PrimeExclusiveCard.vue';

import * as data from "../data.js";

export default {
  name: "home",
  components: {
    CategoryCard,
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

<style scoped>
img{
  max-height: 30vh;
  min-width: 90vw;
}
</style>