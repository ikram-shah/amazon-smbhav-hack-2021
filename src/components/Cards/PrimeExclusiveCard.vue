<template>
  <div class="item">
    <div class="row">
      <div class="column">
        <div class="relative pt-10 px-10 flex items-center justify-center">
          <div
            class="block absolute w-50 h-50 bottom-0 left-0 -mb-24 ml-3"
            style="
              background: radial-gradient(black, transparent 60%);
              transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1);
              opacity: 0.2;
            "
          ></div>
          <img class="relative w-40 h-40" :src="img" alt="" />
        </div>
      </div>
      <div class="column">
        <div class="relative text-black px-2 mt-6">
          <div class="flex justify-left">
            <span class="block font-semibold text-s">{{ storeName }}</span>
          </div>
        </div>
        <div class="relative text-black px-2 mt-1">
          <div class="flex justify-left">
            <span class="block font-regular text-xs">{{ offerDesc }}</span>
          </div>
        </div>
        <div class="relative text-black px-2 mt-4">
          <div class="flex justify-left">
            <span class="block font-semibold text-s">{{ productName }}</span>
          </div>
        </div>
        <div class="relative text-black px-2 pb-6 mt-1">
          <div class="flex justify-left">
            <span class="block font-semibold text-xl">{{ productPrice }}</span>
          </div>
        </div>
        <div class="relative text-black px-2 mb-6">
          <div class="flex justify-left">
            <span class="block font-semibold text-s">{{ storeNearby }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrimeExclusiveCard",
  props: {
    img: null,
    storeName: null,
    productName: null,
    productPrice: null,
    offerDesc: null,
    storeNearby: null,
  },
};
</script>

<style scoped>
.item {
  align-items: center;
  background: #fbfcfd;
  box-shadow: 0px 0px 2px #e5e5e5;
  border: 2px solid #f5f6f9;
  border-radius: 8px;
  width: 40vw;
}
.column {
  float: left;
  width: 50%;
  padding: 10px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
