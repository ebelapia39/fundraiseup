<template>
  <form
    class="donation-form"
    v-if="currentCurrency"
    @submit.prevent="submitForm()"
  >
    <PresetsComponent
      :presets="presets"
      :currency="currentCurrency"
      :suggestion="suggestion"
      :tuchInput="tuchInput"
      @selectSuggestion="selectSuggestion"
    />

    <ControlsComponent
      :currencies="currencies"
      :currency="currentCurrency"
      :suggestion="suggestion"
      @changeInput="changeInput"
      @changeSelect="changeSelect"
    />

    <button type="submit" class="donation-form_button" :disabled="loading">
      {{ loading ? "loading..." : "donate" }}
    </button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

import PresetsComponent from "@/components/DonationForm/presets.vue";
import ControlsComponent from "@/components/DonationForm/controls.vue";

export default {
  name: "DonationForm",
  props: ["presets", "currencies"],
  components: {
    PresetsComponent,
    ControlsComponent,
  },
  data() {
    return {
      suggestion: 40,
      currentCurrency: undefined,
      tuchInput: false,
      loading: false,
    };
  },
  methods: {
    ...mapActions(["addDonate"]),

    selectSuggestion($event) {
      this.tuchInput = false;
      this.suggestion = $event;
    },
    changeSelect($event) {
      this.currentCurrency = $event;
    },
    changeInput($event) {
      this.tuchInput = true;
      this.suggestion = $event;
    },
    async submitForm() {
      try {
        const data = {
          amount: this.suggestion,
          currency: this.currentCurrency.code,
        };

        this.validateForm(data);
        this.loading = true;
        await this.addDonate(data);

        alert(`Thank you for your donation!`);
      } catch (error) {
        alert(error.message);
      }
      this.loading = false;
    },
    validateForm(data) {
      if (!data) {
        throw new Error("data is empty");
      }
      if (!data.amount || data.amount <= 0) {
        throw new Error("Amount must be greater than zero");
      }
      if (!data.currency) {
        throw new Error("Currensy is empty");
      }
    },
  },
  mounted() {
    this.currentCurrency = this.currencies.find((c) => c.code === "USD");
  },
};
</script>

<style scoped lang="scss">
.donation-form {
  margin-top: 40px;
  width: 243px;
  background: #e9e9e9;
  border: 1px solid #bcbcbc;
  border-radius: 10px;
  padding: 20px;
  user-select: none !important;
  &_presets {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-bottom: -5px;
    user-select: none !important;
    &_item {
      user-select: none !important;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      background: #c5c5c5;
      border: 1px solid #979797;
      min-width: 75px;
      height: 40px;
      margin-right: 5px;
      margin-bottom: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.1s ease-in-out;
      &:hover {
        background: cornflowerblue;
        border: 1px solid transparent;
        color: #e1e1e1;
      }
      &.active {
        background: cornflowerblue;
        border: 1px solid transparent;
        color: #e1e1e1;
      }
    }
  }
  &_controls {
    user-select: none !important;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-right: -5px;
    &_item {
      margin-right: 5px;
    }
  }
  &_button {
    user-select: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-weight: bold;
    border-radius: 5px;
    background: cornflowerblue;
    text-transform: uppercase;
    padding: 20px;
    color: #fff;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    border: 0;
    outline: none;
    width: 100%;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
