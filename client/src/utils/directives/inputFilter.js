import Vue from "vue";

let params;
const handler = function(e) {
  var ch = String.fromCharCode(e.which);
  var re = new RegExp(params.value);
  if (!ch.match(re)) {
    e.preventDefault();
  }
};

Vue.directive("inputFilter", {
  bind: function(el, binding) {
    params = binding;
    el.addEventListener("keypress", handler);
  },
  unbind: function(el) {
    el.removeEventListener("keypress", handler);
  },
});
