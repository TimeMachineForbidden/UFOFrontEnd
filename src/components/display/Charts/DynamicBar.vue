<template>
    <div id="myChart" style="width:1000px;height:800px"></div>
</template>
<script>
import * as echarts from 'echarts';
import axios from 'axios';

export default {

    data() {

    },
    mounted() {
        var ROOT_PATH = 'https://echarts.apache.org/examples';
        var chartDom = document.getElementById('myChart');
        var myChart = echarts.init(chartDom);
        var option;
        const updateFrequency = 2000;
        const dimension = 0;
        //各个州对应的颜色
        const stateColors = {
            California: "#00008b",
            Florida: "#f00",
            Washington: "#ffde00",
            Texas: "#002a8f",
            "New York": "#003580",
            Pennsylvania: "#ed2939",
            Arizona: "#000",
            Ohio: "#003897",
            Illinois: "#f93",
            "North Carolina": "#bc002d",
            Michigan: "#024fa2",
            Oregon: "#000",
            Colorado: "#00247d",
            "New Jersey": "#ef2b2d",
            Missouri: "#dc143c",
            Georgia: "#d52b1e",
            Indiana: "#e30a17",
            Virginia: "#00247d",
            Massachusetts: "#b22234",
        }
        axios.all([
            axios.get('https://fastly.jsdelivr.net/npm/emoji-flags@1.3.0/data.json'),
            axios.get('http://49.232.241.171:8080/yearShapeNum')
        ]).then(axios.spread(function (res1, res0) {
            const flags = res1.data;
            const data = res0.data.data;
            // 处理数据，获取年份列表
            const years = [];
            for (let i = 0; i < data.length; ++i) {
                if (years.length === 0 || years[years.length - 1] !== data[i][4]) {
                    years.push(data[i][4]);
                }
            }
            // 设置初始年份和图表选项
            let startIndex = 1;
            let startYear = years[startIndex];
            option = {
                // ...（一些图表选项的配置）
                grid: {
                    top: 10,
                    bottom: 30,
                    left: 150,
                    right: 80
                },
                xAxis: {
                    max: 'dataMax',
                    axisLabel: {
                        formatter: function (n) {
                            return Math.round(n) + '';
                        }
                    }
                },
                dataset: {
                    source: data.slice(1).filter(function (d) {
                        return d[4] === startYear;
                    })
                },
                yAxis: {
                    type: 'category',
                    inverse: true,
                    max: 10,
                    axisLabel: {
                        show: true,
                        fontSize: 14,
                        formatter: function (value) {
                            return value;
                        },
                        rich: {
                            flag: {
                                fontSize: 25,
                                padding: 5
                            }
                        }
                    },
                    animationDuration: 300,
                    animationDurationUpdate: 300
                },
                series: [
                    {
                        realtimeSort: true,
                        seriesLayoutBy: 'column',
                        type: 'bar',
                        itemStyle: {
                            color: function (param) {
                                return stateColors[param.value[3]] || '#5470c6';
                            }
                        },
                        encode: {
                            x: dimension,
                            y: 3
                        },
                        label: {
                            show: true,
                            precision: 1,
                            position: 'right',
                            valueAnimation: true,
                            fontFamily: 'monospace'
                        }
                    }
                ],
                // Disable init animation.
                animationDuration: 0,
                animationDurationUpdate: updateFrequency,
                animationEasing: 'linear',
                animationEasingUpdate: 'linear',
                graphic: {
                    elements: [
                        {
                            type: 'text',
                            right: 160,
                            bottom: 60,
                            style: {
                                text: startYear,
                                font: 'bolder 80px monospace',
                                fill: 'rgba(100, 100, 100, 0.25)'
                            },
                            z: 100
                        }
                    ]
                }
            };
            myChart.setOption(option);

            // 循环更新图表数据和显示年份
            for (let i = startIndex; i < years.length - 1; ++i) {
                (function (i) {
                    setTimeout(function () {
                        updateYear(years[i + 1]);
                    }, (i - startIndex) * updateFrequency);
                })(i);
            }
            function updateYear(year) {
                let source = data.slice(1).filter(function (d) {
                    return d[4] === year;
                });
                option.series[0].data = source;
                option.graphic.elements[0].style.text = year;
                myChart.setOption(option);
            }
        }));

    }
}
</script>