<template>
  <div class="container">
    <DonationForm :presets="presets" :currencies="currencies" />
  </div>
</template>

<script>
import DonationForm from "@/components/DonationForm/index.vue";

export default {
  name: "Home",
  components: {
    DonationForm,
  },
  data() {
    return {
      presets: this.$store.getters.getPresets,
      currencies: this.$store.getters.getCurrencies,
    };
  },
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
