import { CesiumIonDefaultAccessToken, TianDiTuToken } from './config'
export function initCesium(Cesium) {
  // 引入 Cesium Ion token
  Cesium.Ion.defaultAccessToken = CesiumIonDefaultAccessToken
  // 地图初始化
  var viewer = new Cesium.Viewer("cesiumContainer", {
    animation: false, // 是否显示动画控件
    baseLayerPicker: false, // 是否显示图层选择控件
    geocoder: true, // 是否显示地名查找控件
    timeline: false, // 是否显示时间线控件
    sceneModePicker: true, // 是否显示投影方式控件
    navigationHelpButton: false, // 是否显示帮助信息控件
    infoBox: true, // 是否显示点击要素之后显示的信息
    fullscreenButton: false, // 是否显示全屏按钮
    CreditsDisplay: false, // 是否显示版权信息
    imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
      url:
        `http://t0.tianditu.com/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=${TianDiTuToken}`,
      layer: "tdtBasicLayer",
      style: "default",
      format: "image/jpeg",
      tileMatrixSetID: "GoogleMapsCompatible",
      show: false,
    }),
  })

  // 加载矢量中文标注
  viewer.imageryLayers.addImageryProvider(
    new Cesium.WebMapTileServiceImageryProvider({
      url:
        `http://t0.tianditu.com/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=${TianDiTuToken}`,
      layer: "tdtAnnoLayer",
      style: "default",
      format: "image/jpeg",
      tileMatrixSetID: "GoogleMapsCompatible",
      show: false,
    })
  )

  return viewer
}