<template>
  <div>
    <h3 class="text-xl mx-8 font-bold text-gray-800 my-4">Scan QR</h3>
    <div class="mx-8 my-4">
      <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit">
        <div v-show="showScanConfirmation" class="scan-confirmation">
          <img
            class="mx-24 my-24"
            src="../assets/checkmark.png"
            alt="Checkmark"
          />
        </div>
      </qrcode-stream>
    </div>
    <p v-if="result" class="mx-8 text-gray-800 decode-result">
      <b>{{ result }}</b>
    </p>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";

export default {
  components: { QrcodeStream },

  data() {
    return {
      camera: "auto",
      result: null,
      showScanConfirmation: false,
    };
  },

  methods: {
    async onInit(promise) {
      try {
        await promise;
      } catch (e) {
        console.error(e);
      } finally {
        this.showScanConfirmation = this.camera === "off";
      }
    },

    async onDecode(content) {
      this.result = content;

      this.pause();
      await this.timeout(500);
      this.unpause();
    },

    unpause() {
      this.camera = "auto";
    },

    pause() {
      this.camera = "off";
    },

    timeout(ms) {
      return new Promise((resolve) => {
        window.setTimeout(resolve, ms);
      });
    },
  },
};
</script>

<style scoped>
.scan-confirmation {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.8);

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
</style>