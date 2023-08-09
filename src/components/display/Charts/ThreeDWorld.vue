<template>
    <div id="myChart3D" style="width:100%;height:100%;font-family: 'Play', sans-serif;
       font-family: 'PT Serif', serif;"></div>
</template>
<script>
import axios from 'axios';
import * as echarts from 'echarts';
import 'echarts-gl';
export default {

    data() {
        return {
            isLoading: true
        }
    },
    mounted() {
        var chartDom = document.getElementById('myChart3D');
        var myChart = echarts.init(chartDom);
        var option;
        myChart.showLoading({
            text: 'loading', //显示的文本
            color: '#32CD32', //显示转圈的圆圈颜色
            textColor: '#FFFFFF', //显示文本的颜色
            maskColor: 'rgba(0,0,0,0.8)', //显示的背景色
            // 字体大小。从 `v4.8.0` 开始支持。
            fontSize: 25,
            // 是否显示旋转动画（spinner）。从 `v4.8.0` 开始支持。
            showSpinner: true,
            // 旋转动画（spinner）的半径。从 `v4.8.0` 开始支持。
            spinnerRadius: 30,
            // 旋转动画（spinner）的线宽。从 `v4.8.0` 开始支持。
            lineWidth: 5,
            // 字体粗细。从 `v5.0.1` 开始支持。
            fontWeight: 'normal',
            // 字体风格。从 `v5.0.1` 开始支持。
            fontStyle: 'normal',
            // 字体系列。从 `v5.0.1` 开始支持。
            fontFamily: 'sans-serif'
        })
        axios.get("http://49.232.241.171:8080/api/ufo/latLonNum").then((response) => {
            myChart.hideLoading()
            var data = response.data.data.filter(function (dataItem) {
                return dataItem[2] > 0;
            })
                .map(function (dataItem) {
                    return [dataItem[0], dataItem[1], Math.sqrt(dataItem[2])];
                });
            option = {
                backgroundColor: '#000',
                globe: {
                    baseTexture: require('../../../assets/world.jpg'),
                    heightTexture: require('../../../assets/world.jpg'),
                    shading: 'lambert',
                    environment: require('../../../assets/starfield.jpg'),
                    light: {
                        main: {
                            intensity: 2
                        }
                    },
                    viewControl: {
                        autoRotate: false
                    }
                },
                visualMap: {
                    max: 40,
                    calculable: true,
                    realtime: false,
                    inRange: {
                        colorLightness: [0.2, 0.9]
                    },
                    textStyle: {
                        color: '#fff'
                    },
                    controller: {
                        inRange: {
                            color: '#00BFFF'
                        }
                    },
                    outOfRange: {
                        colorAlpha: 0
                    }
                },
                series: [
                    {
                        type: 'bar3D',
                        coordinateSystem: 'globe',
                        data: data,
                        barSize: 0.6,
                        minHeight: 0.2,
                        silent: true,
                        itemStyle: {
                            color: '#00BFFF'
                        }
                    }
                ],
                title: {
                    text: 'Global UFO Latitude-Longitude Distribution Map (3D Earth)',
                    textStyle: {
                        color: '#F0F8FF',
                        top: 10,
                        fontFamily: 'Play',
                        fontSize: 25
                    }
                }
            };
            myChart.setOption(option);
        })
        option && myChart.setOption(option);

        this.isLoading = false
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital@1&family=Play:wght@700&family=Space+Grotesk&family=Ubuntu:ital@1&display=swap');
</style>