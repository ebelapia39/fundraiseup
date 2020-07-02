<template>
  <div class="donation-form_controls">
    <div class="donation-form_controls_item">
      {{ currency.symbol }}
    </div>
    <div class="donation-form_controls_item">
      <input
        type="number"
        v-input-filter="'[0-9]'"
        @input="changeInput"
        :value="suggestion"
      />
    </div>
    <div class="donation-form_controls_item">
      <select @change="changeSelect">
        <option
          v-for="currency of currencies"
          :key="currency.code"
          :value="currency.code"
          >{{ currency.code }}</option
        >
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "DonationFormControls",
  props: ["currencies", "currency", "suggestion"],
  data() {
    return {};
  },
  methods: {
    changeInput(e) {
      this.$emit("changeInput", e.target.value);
    },
    changeSelect(e) {
      const findCurrency = this.currencies.find(
        (c) => c.code === e.target.value
      );
      this.$emit("changeSelect", findCurrency);
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
