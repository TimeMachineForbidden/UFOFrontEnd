<template>
    <div id="myChartZB" style="width:100%;height: 100%;"></div>
</template>
<script scoped>
import * as echarts from 'echarts';
import axios from 'axios'
export default {

    data() {
        return {

        }
    },
    mounted() {
        axios.get("http://49.232.241.171:8080/api/ufo/timeSection").then((respones) => {
            var chartDom = document.getElementById('myChartZB');
            var myChart = echarts.init(chartDom);
            var option;

            // prettier-ignore
            let dataAxis = respones.data.data.independentVariable
            let data = respones.data.data.dependentVariable
            let yMax = 36000;
            let dataShadow = [];
            for (let i = 0; i < data.length; i++) {
                dataShadow.push(yMax);
            }
            option = {
                title: {
                    text: 'UFO Appearance Duration Interval Distribution Bar Chart',
                    subtext: '点击、滚动放大',
                    textStyle: {
                        fontFamily: 'Play',
                        color: 'white'
                    }
                },
                xAxis: {
                    type: 'category',
                    data: dataAxis,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    z: 10
                },
                yAxis: {
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: '#999'
                    },
                },
                dataZoom: [
                    {
                        type: 'inside'
                    }
                ],
                series: [
                    {
                        type: 'bar',
                        showBackground: true,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#E19CFF' },
                                { offset: 0.6, color: '#9444FF' },
                                { offset: 1, color: '#5F32B0' }
                            ])
                        },
                        emphasis: {
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: '#5F32B0' },
                                    { offset: 0.4, color: '#9444FF' },
                                    { offset: 1, color: '#E19CFF' }
                                ])
                            }
                        },
                        data: data
                    }
                ]
            };
            // Enable data zoom when user click bar.
            const zoomSize = 6;
            myChart.on('click', function (params) {
                console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
                myChart.dispatchAction({
                    type: 'dataZoom',
                    startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
                    endValue:
                        dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
                });
            });

            option && myChart.setOption(option);
        })
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Play:wght@700&family=Ubuntu:ital@1&display=swap');

#myChartZB {
    position: absolute;
    padding-left: 10px;
}
</style>