<template>
    <div id="myChart" style="width:100%;height:100%"></div>
</template>
<script>
import axios from 'axios';
import * as echarts from 'echarts';
import $ from 'jquery';
import 'echarts-gl';
export default {
    data() {

    },
    mounted() {
        var chartDom = document.getElementById('myChart');
        var myChart = echarts.init(chartDom);
        var option;
        $.get('/map/world.json', function (ret) {
            echarts.registerMap('world', ret)
            var app = {};
            axios.get("http://49.232.241.171:8080/api/ufo/gps").then((response) => {
                var rawdata = response.data.data;
                var data = new Float32Array(rawdata);
                console.log(data)
                myChart.appendData({
                    seriesIndex: 0,
                    data: data
                });
            })
            option = {
                backgroundColor: '#000',
                title: {
                    text: 'UFO GPS Latitude-Longitude Distribution Map (GPS Point Map)',
                    left: 'center',
                    textStyle: {
                        fontFamily: 'Play',
                        color: 'white'
                    }
                },
                geo: {
                    type: 'map',
                    map: 'world',
                    roam: true,
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    silent: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#323c48',
                            borderColor: '#111'
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
                },
                series: [
                    {
                        name: '弱',
                        type: 'scatterGL',
                        progressive: 1e6,
                        coordinateSystem: 'geo',
                        symbolSize: 1,
                        zoomScale: 0.002,
                        blendMode: 'lighter',
                        large: true,
                        itemStyle: {
                            color: 'rgb(20, 15, 2)'
                        },
                        postEffect: {
                            enable: true
                        },
                        silent: true,
                        dimensions: ['lng', 'lat'],
                        data: new Float32Array()
                    }
                ]
            };
            option && myChart.setOption(option);
        })

    }
}
</script>
<style></style>