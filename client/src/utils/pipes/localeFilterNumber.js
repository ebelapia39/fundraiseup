import Vue from "vue";

Vue.filter("localeFilterNumber", function(value) {
  return new Intl.NumberFormat("en-EN").format(value);
});
