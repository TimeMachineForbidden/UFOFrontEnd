<template>
    <div id="myChartDBar" style="width:100%;height:100%"></div>
</template>
<script>
import * as echarts from 'echarts';
import axios from 'axios';

export default {

    data() {

        return {

        }
    },
    mounted() {
        var ROOT_PATH = 'https://echarts.apache.org/examples';
        var chartDom = document.getElementById('myChartDBar');
        var myChart = echarts.init(chartDom);
        var option;
        const updateFrequency = 2000;
        const dimension = 0;
        //各个州对应的颜色
        const stateColors = {
            light: [
                { offset: 0, color: '#00c6fb' },
                { offset: 1, color: '#005bea' },
            ],
            unknown: [
                { offset: 0, color: '#87F1C0' },
                { offset: 1, color: '#8CDEE0' },
            ],
            disk: [
                { offset: 0, color: '#f4d03f' },
                { offset: 1, color: '#16a085' },
            ],
            cube: [
                { offset: 0, color: '#65DFDD' },
                { offset: 1, color: '#AE95CB' },
            ],
            triangle: [
                { offset: 0, color: '#AFEDD0' },
                { offset: 1, color: '#9B9AE1' },
            ],
            sphere: [
                { offset: 0, color: '#27EEA0' },
                { offset: 1, color: '#06ABEE' },
            ],
            other: [
                { offset: 0, color: '#85C0D1' },
                { offset: 1, color: '#7158DF' },
            ],
            orb: [
                { offset: 0, color: '#84F9A6' },
                { offset: 1, color: '#08CCFA' },
            ],
            fireball: [
                { offset: 0, color: '#1AC5E2' },
                { offset: 1, color: '#8766F0' },
            ],
            circle: [
                { offset: 0, color: '#CA93CF' },
                { offset: 1, color: '#8C49DD' },
            ],
            changing: [
                { offset: 0, color: '#81E4D3' },
                { offset: 1, color: '#CAAFF6' },
            ],
            cigar: [
                { offset: 0, color: '#20E2D7' },
                { offset: 1, color: '#F9FEA5' },
            ],
            flash: [
                { offset: 0, color: '#B6CEE8' },
                { offset: 1, color: '#F578DC' },
            ],
            diamond: [
                { offset: 0, color: '#C8E6C9' },
                { offset: 1, color: '#7CB342' },
            ],
            formation: [
                { offset: 0, color: '#D3EFBE' },
                { offset: 1, color: '#EFC7BE' },
            ],
            egg: [
                { offset: 0, color: '#FFCC80' },
                { offset: 1, color: '#FFA726' },
            ],
            star: [
                { offset: 0, color: '#FFD54F' },
                { offset: 1, color: '#FF9800' },
            ],
            cylinder: [
                { offset: 0, color: '#90A4AE' },
                { offset: 1, color: '#607D8B' },
            ],
            chevron: [
                { offset: 0, color: '#9FA8DA' },
                { offset: 1, color: '#5C6BC0' },
            ],
        };
        axios.all([
            axios.get('http://49.232.241.171:8080/api/ufo/yearShapeNum')
        ]).then(axios.spread(function (res0) {
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
                        color: 'white', // 字体颜色
                        fontSize: 14, // 字体大小
                        fontStyle: 'italic', // 字体样式，比如'normal', 'italic', 'oblique'
                        fontWeight: 'bold', // 字体粗细，比如'normal', 'bold', 'bolder', 'lighter'
                        fontFamily: 'Arial, sans-serif', // 字体系列
                        formatter: function (value) {
                            return value;
                        },
                        rich: {
                            flag: {
                                fontSize: 15,
                                padding: 5
                            }
                        }
                    },
                    animationDuration: 100,
                    animationDurationUpdate: 100
                },
                series: [
                    {
                        realtimeSort: true,
                        seriesLayoutBy: 'column',
                        type: 'bar',
                        itemStyle: {
                            color: function (param) {
                                var type = param.value[3];
                                if (type in stateColors) {
                                    return new echarts.graphic.LinearGradient(
                                        0,
                                        0,
                                        1,
                                        1,
                                        stateColors[type]
                                    );
                                } else {
                                    return '#5470c6';
                                }
                            },
                        },
                        encode: {
                            x: dimension,
                            y: 3
                        },
                        label: {
                            show: true,
                            fontSize: 15,
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
                                fill: 'rgba(255, 255, 255, 0.25)',
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
<style></style>