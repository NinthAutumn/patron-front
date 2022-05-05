<template>
  <div id="canvas"></div>
</template>

<script>
// import QRCodeStyling from 'qr-code-styling'
export default {
  props: {
    dataText: String,
    color: {
      type: String,
      default: "#00A5D0",
    },
    avatar: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    qrCode: "",
  }),
  methods: {
    download() {
      this.qrCode.download({ name: "qr-code", extension: "png" });
    },
    updateQr() {
      this.qrCode.update({
        width: 250,
        height: 250,
        type: "svg",
        data: this.dataText,
        // image: this.avatar || require("~/assets/img/saad-svg.svg"),
        margin: 0,
        dotsOptions: {
          color: "#221815",
          type: "extra-rounded",
        },
        qrOptions: {
          errorCorrectionLevel: "H",
          // typeNumber: 40,
        },
        cornersSquareOptions: {
          color: this.color,
          // type: 'square',
        },
        cornersDotOptions: {
          type: "square",
        },
        backgroundOptions: {
          color: "white",
        },
        imageOptions: {
          crossOrigin: "anonymous",
          margin: 5,
          imageSize: 0.3,
        },
      });
      // qrCode.append(document.getElementById('canvas'))
    },
  },
  watch: {
    dataText(val) {
      this.updateQr();
    },
    color(val) {
      this.updateQr();
    },
  },
  mounted() {
    const QRCodeStyling = require("qr-code-styling");
    this.qrCode = new QRCodeStyling({
      width: 250,
      height: 250,
      type: "svg",
      data: this.dataText,
      //   image: this.avatar || require('~/assets/img/saad-svg.svg'),
      margin: 0,
      dotsOptions: {
        color: "#221815",
        type: "extra-rounded",
      },
      qrOptions: {
        errorCorrectionLevel: "H",
        // typeNumber: 40,
      },
      cornersSquareOptions: {
        color: this.color,
        type: "square",
      },
      cornersDotOptions: {
        type: "square",
      },
      backgroundOptions: {
        color: "white",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 5,
        imageSize: 0.3,
      },
    });
    this.qrCode.append(this.$el);
  },
};
</script>

<style lang="scss">
#canvas {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
