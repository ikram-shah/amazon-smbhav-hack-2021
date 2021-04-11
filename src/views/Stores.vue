<template>
  <div>
    <div v-for="(val, index) in storesInfo" :key="index">
      <StoreCard :id="val.id" :name="val.name" :address="val.address" :rating="val.rating" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import StoreCard from "../components/Cards/StoreCard.vue";
export default {
  components: { StoreCard },
  data() {
    return {
      storesInfo: null,
    };
  },
  mounted() {
    //get all stores
    axios
      .get(`https://wmmagt22ye.execute-api.ap-south-1.amazonaws.com/dev/stores`)
      .then((response) => console.log((this.storesInfo = response.data)));
  },
};
</script>