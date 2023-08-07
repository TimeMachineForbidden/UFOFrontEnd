<template>
    <div v-if="isLoading">Loading</div>
    <div id="myChart" style="width:100%;height:100%"></div>
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
        var chartDom = document.getElementById('myChart');
        var myChart = echarts.init(chartDom);
        var option;
        myChart.showLoading()
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
                            color: 'orange'
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
                            color: 'orange'
                        }
                    }
                ]
            };
            myChart.setOption(option);
        })
        option && myChart.setOption(option);
        this.isLoading = false
    }
}
</script>
<style></style>