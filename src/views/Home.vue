<template>
  <div class="container mx-auto">
    <div class="my-8">
      <h3 class="text-gray-500 mb-1">Offers near you</h3>
      <vue-glide :perView="1" :bullet="true" class="mb-6">
        <vue-glide-slide>
          <router-link to="/about">
            <img src="@/assets/slide1.jpg" alt="mandalorian" class="rounded" />
          </router-link>
        </vue-glide-slide>
        <vue-glide-slide>
          <router-link to="/about">
            <img src="@/assets/slide2.jpg" alt="mandalorian" class="rounded" />
          </router-link>
        </vue-glide-slide>
        <vue-glide-slide>
          <router-link to="/about">
            <img src="@/assets/slide3.jpg" alt="mandalorian" class="rounded" />
          </router-link>
        </vue-glide-slide>
        <vue-glide-slide>
          <router-link to="/about">
            <img src="@/assets/slide1.jpg" alt="mandalorian" class="rounded" />
          </router-link>
        </vue-glide-slide>
        <vue-glide-slide>
          <router-link to="/about">
            <img src="@/assets/slide2.jpg" alt="mandalorian" class="rounded" />
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

      <h3 class="text-gray-500 mb-1">Best rated</h3>
      <div class="recommended px-1 mb-12">
        <vue-glide
          :perView="5"
          :gap="20"
          :peek="{ before: 0, after: 70 }"
          :breakpoints="{
            1024: {
              perView: 9,
            },
            800: {
              perView: 6,
            },
            576: {
              perView: 4,
              peek: {
                before: 0,
                after: 0,
              },
            },
          }"
        >
          <vue-glide-slide>
            <router-link to="/about"
              ><img src="@/assets/star_wars_a_new_hope.jpg" alt="star wars"
            /></router-link>
          </vue-glide-slide>
          <vue-glide-slide>
            <router-link to="/about"
              ><img src="@/assets/snow_white.jpg" alt="snow white"
            /></router-link>
          </vue-glide-slide>
          <vue-glide-slide>
            <router-link to="/about"
              ><img src="@/assets/black_panther.jpg" alt="black panther"
            /></router-link>
          </vue-glide-slide>
          <vue-glide-slide>
            <router-link to="/about"
              ><img src="@/assets/zootopia.jpg" alt="zootopia"
            /></router-link>
          </vue-glide-slide>
          <vue-glide-slide>
            <router-link to="/about"
              ><img src="@/assets/one_strange_rock.jpg" alt="one strange rock"
            /></router-link>
          </vue-glide-slide>
          <vue-glide-slide>
            <router-link to="/about"
              ><img src="@/assets/one_strange_rock.jpg" alt="one strange rock"
            /></router-link>
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
      </div>
      <!-- end recommended -->
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>
