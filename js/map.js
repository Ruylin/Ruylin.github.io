var map = new BMapGL.Map('map'); // 创建Map实例

map.centerAndZoom(new BMapGL.Point(120.041, 30.3790444615), 10); // 初始化地图,设置中心点坐标和地图级别
map.setMapStyleV2({
    styleId: '4cee26208c27408eada999aac393e596'
});
map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
