# vue-cesium-template
一个基于Vue的简易Cesium开发模板

## 项目初始化
```
npm install
```

补全`src/common/js/config.js`中的`Token`信息：
- `CesiumIonDefaultAccessToken`：前往 https://cesium.com/ 中注册账号，并且创建`Token`；
- `TianDiTuToken`：前往 https://uums.tianditu.gov.cn/register 中注册账号，并且创建`Token`。

## 编译
```
npm run serve
```

## 打包
```
npm run build
```

## 其他配置项
在初始化创建`Viewer`后添加：
```
viewer._cesiumWidget._creditContainer.style.display = "none" // 隐藏版本信息
viewer.scene.debugShowFramesPerSecond = true // 是否显示帧率
viewer.scene.skyBox.show = true // 是否显示星空
viewer.scene.backgroundColor = Cesium.Color.BLUE //地球背景颜色
viewer.scene.sun.show = true // 是否显示太阳
viewer.scene.moon.show = true // 是否显示有月亮
viewer.scene.skyAtmosphere.show = true // 是否隐藏大气圈
viewer.scene.globe.show = true // 是否显示地球
```