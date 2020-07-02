<template>
  <div class="donation-form_presets">
    <div
      class="donation-form_presets_item"
      v-for="preset of presetsListTmp"
      :key="preset"
      :class="{ active: suggestion == preset }"
      @click="selectSuggestion(preset)"
    >
      {{ currency.symbol }}{{ preset | localeFilterNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: "DonationFormPresets",
  props: ["presets", "currency", "suggestion", "tuchInput"],
  data() {
    return {
      activeIndexSuggestion: 0,
    };
  },
  methods: {
    selectSuggestion(preset) {
      this.activeIndexSuggestion = this.findIndexByValue(preset);
      this.$emit("selectSuggestion", preset);
    },
    findIndexByValue(value) {
      return this.presetsListTmp.findIndex((i) => i === value);
    },
    calcSuggetionByRate(value) {
      let result = value;
      if (this.currency && this.currency.rate) {
        result = this.round(value * this.currency.rate, 10);
      }
      return result;
    },
    round(value, rate) {
      return Math.ceil(value / rate) * rate;
    },
  },
  computed: {
    presetsListTmp() {
      let arr = [...this.presets];
      if (this.currency) {
        arr = this.presets.map((preset) => this.calcSuggetionByRate(preset));
      }
      return arr;
    },
  },
  watch: {
    currency() {
      if (!this.tuchInput) {
        this.selectSuggestion(this.presetsListTmp[this.activeIndexSuggestion]);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.donation-form {
  margin-top: 40px;
  width: 13%;
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
