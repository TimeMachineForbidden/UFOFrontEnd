<template>
    <div id="myChartmlb" style="width: 100%;height: 100%;">
    </div>
</template>
<script>
import * as echarts from 'echarts';
export default {

    data() {
        return {}
    },
    mounted() {

        var chartDom = document.getElementById('myChartmlb');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            title: {
                text: 'UFO Sightings Hourly Distribution Bar-Line Chart',
                textStyle: {
                    fontFamily: 'Play',
                    color: 'white'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Count',
                    min: 1500,
                    max: 21000,
                    interval: 1000,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ],
            series: [
                {
                    name: 'Count',
                    type: 'bar',
                    tooltip: {
                        valueFormatter: function (value) {
                            return value;
                        }
                    },
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0, color: '#0F284A'
                            },
                            { offset: 0.6, color: '#9444FF' },
                            { offset: 1, color: '#5F32B0' }
                        ])
                    },
                    emphasis: {
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#5F32B0' },
                                { offset: 0.4, color: '#154352' },
                                { offset: 1, color: '#4B309D' }
                            ])
                        }
                    },
                    data: [
                        8977,
                        5590,
                        4044,
                        3724,
                        2965,
                        3399,
                        2762,
                        1859,
                        1606,
                        1871,
                        2250,
                        2195,
                        2599,
                        2431,
                        2382,
                        2621,
                        3033,
                        4642,
                        7531,
                        10973,
                        15274,
                        20207,
                        18494,
                        13289,
                    ]
                },

            ]
        };

        option && myChart.setOption(option);

    }

}
</script>
<style></style>