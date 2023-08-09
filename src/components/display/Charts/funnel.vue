<template>
    <div id="myChartfun" style="height: 100%;width: 100%;">
    </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {

        }
    },
    mounted() {
        var chartDom = document.getElementById('myChartfun');
        var myChart = echarts.init(chartDom);
        var option;
        option = {
            title: {
                text: 'UFO Sightings Monthly Distribution Funnel Chart',
                textStyle: {
                    color: 'white'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}%'
            },
            toolbox: {
                feature: {
                    dataView: { readOnly: false },
                    restore: {},
                    saveAsImage: {}
                }
            },
            legend: {
                data: []
            },
            series: [
                {
                    name: 'Funnel',
                    type: 'funnel',
                    left: '10%',
                    top: 60,
                    bottom: 60,
                    width: '80%',
                    min: 3000,
                    max: 20000,
                    minSize: '0%',
                    maxSize: '100%',
                    sort: 'descending',
                    gap: 2,
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    labelLine: {
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: 'solid'
                        }
                    },
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 1
                    },
                    emphasis: {
                        label: {
                            fontSize: 20
                        }
                    },
                    data: [
                        { value: 10166, name: 'Jan' },
                        { value: 8599, name: 'Feb' },
                        { value: 9803, name: 'Mar' },
                        { value: 10234, name: 'Apr' },
                        { value: 10583, name: 'May' },
                        { value: 14303, name: 'Jun' },
                        { value: 16636, name: 'Jul' },
                        { value: 14836, name: 'Aug' },
                        { value: 13631, name: 'Sep' },
                        { value: 13393, name: 'Oct' },
                        { value: 12115, name: 'Nov' },
                        { value: 10419, name: 'Dec' }
                    ]
                }
            ]
        };

        option && myChart.setOption(option);
    }
}
</script>
<style></style>