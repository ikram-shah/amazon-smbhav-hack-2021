<template>
  <div :class="getBgClassName()" id="box">
    <svg
      class="absolute bottom-0 left-0 mb-4"
      viewBox="0 0 375 283"
      fill="none"
      style="transform: scale(1.5); opacity: 0.1"
    >
      <rect
        x="159.52"
        y="175"
        width="152"
        height="152"
        rx="8"
        transform="rotate(-45 159.52 175)"
        fill="white"
      />
      <rect
        y="107.48"
        width="152"
        height="152"
        rx="8"
        transform="rotate(-45 0 107.48)"
        fill="white"
      />
    </svg>
    <div class="relative pt-10 px-10 flex items-center justify-center">
      <div
        class="block absolute w-50 h-50 bottom-0 left-0 -mb-24 ml-3"
        style="
          background: radial-gradient(black, transparent 60%);
          transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1);
          opacity: 0.2;
        "
      ></div>
      <img class="relative w-60" :src="img" alt="" />
    </div>
    <div class="relative text-black px-2 pb-6 mt-6">
      <div class="flex justify-center">
        <span class="block font-semibold text-xs">{{ name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    img: null,
    name: null,
    bgColor: null,
    svgColor: null,
  },
  methods: {
    getBgClassName() {
      return (
        "flex-shrink-0 mx-4 my-2 relative overflow-hidden rounded-lg shadow-lg " +
        this.bgColor
      );
    },
  },
};
</script>

<style scoped>
#box {
  max-width: 8rem;
  min-height: 10rem;
}
</style>
