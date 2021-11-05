<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import { initCesium } from '../common/js/initCesium'
export default {
  mounted() {
    let Cesium = this.Cesium
    let viewer = initCesium(Cesium)
  },
}
</script>
 
<style>
html,
body,
#cesiumContainer {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>