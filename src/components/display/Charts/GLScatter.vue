<template>
    <div id="myChart" style="width:1000px;height:800px"></div>
</template>
<script>
import axios from 'axios';
import * as echarts from 'echarts';
import 'echarts-gl';
export default {
    data() {

    },
    mounted() {
        var chartDom = document.getElementById('myChart');
        var myChart = echarts.init(chartDom);
        var option;
        axios.get("http://49.232.241.171:8080/gps").then((response) => {
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
                text: '10000000 GPS Points',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            geo: {
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
    }
}
</script>
<style></style>