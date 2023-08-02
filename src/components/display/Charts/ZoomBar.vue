<template>
    <div id="myChart" style="width:1000px;height:600px"></div>
</template>
<script>
import * as echarts from 'echarts';
import axios from 'axios'
export default {

    data() {

    },
    mounted() {
        axios.get("http://49.232.241.171:8080/timeSection").then((respones) => {
            var chartDom = document.getElementById('myChart');
            var myChart = echarts.init(chartDom);
            var option;

            // prettier-ignore
            let dataAxis = respones.data.data.independentVariable
            console.log(dataAxis)
            let data = respones.data.data.dependentVariable
            let yMax = 36000;
            let dataShadow = [];
            for (let i = 0; i < data.length; i++) {
                dataShadow.push(yMax);
            }
            option = {
                title: {
                    text: '特性示例：渐变色 阴影 点击缩放',
                    subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
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
                    }
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
                                { offset: 0, color: '#83bff6' },
                                { offset: 0.5, color: '#188df0' },
                                { offset: 1, color: '#188df0' }
                            ])
                        },
                        emphasis: {
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: '#2378f7' },
                                    { offset: 0.7, color: '#2378f7' },
                                    { offset: 1, color: '#83bff6' }
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
<style></style>