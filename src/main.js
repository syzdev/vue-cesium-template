import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

var Cesium = require('cesium/Cesium');
var widgets= require('cesium/Widgets/widgets.css');

Vue.prototype.Cesium = Cesium
Vue.prototype.widgets = widgets

new Vue({
  render: h => h(App),
}).$mount('#app')
