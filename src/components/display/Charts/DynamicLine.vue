<template>
    <div v-if="isLoading">Loading</div>
    <div id="myChartLine" style="width:100%;height:100%"></div>
</template>
<script>
import * as echarts from 'echarts';
import axios from 'axios';
export default {
    data() {

        return {
            isLoading: true
        }
    },
    mounted() {
        var chartDom = document.getElementById('myChartLine');
        var myChart = echarts.init(chartDom);
        var option;
        const states = [
            'California',
            'Florida',
            'Washington',
            'Texas',
            'New York',
            'Pennsylvania',
            'Arizona',
            'Ohio'
        ];
        axios.get("http://49.232.241.171:8080/ufo/yearStateNum").then((response) => {
            run(response.data.data);
        });
        function run(_rawData) {
            // var countries = ['Australia', 'Canada', 'China', 'Cuba', 'Finland', 'France', 'Germany', 'Iceland', 'India', 'Japan', 'North Korea', 'South Korea', 'New Zealand', 'Norway', 'Poland', 'Russia', 'Turkey', 'United Kingdom', 'United States'];

            const datasetWithFilters = [];
            const seriesList = [];
            echarts.util.each(states, function (state) {
                var datasetId = 'dataset_' + state;
                datasetWithFilters.push({
                    id: datasetId,
                    fromDatasetId: 'dataset_raw',
                    transform: {
                        type: 'filter',
                        config: {
                            and: [
                                { dimension: 'Year', gte: 1950 },
                                { dimension: 'State', '=': state }
                            ]
                        }
                    }
                });
                seriesList.push({
                    type: 'line',
                    datasetId: datasetId,
                    showSymbol: false,
                    name: state,
                    endLabel: {
                        show: true,
                        formatter: function (params) {
                            return params.value[3] + ': ' + params.value[0];
                        }
                    },
                    labelLayout: {
                        moveOverlap: 'shiftY'
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    encode: {
                        x: 'Year',
                        y: 'Count',
                        label: ['State', 'Count'],
                        itemName: 'Year',
                        tooltip: ['Count']
                    }
                });
            });
            option = {
                animationDuration: 20000,
                dataset: [
                    {
                        id: 'dataset_raw',
                        source: _rawData
                    },
                    ...datasetWithFilters
                ],
                tooltip: {
                    order: 'valueDesc',
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'category',
                    nameLocation: 'middle'
                },
                yAxis: {
                    name: 'Count'
                },
                grid: {
                    right: 140
                },
                series: seriesList
            };
            myChart.setOption(option);
        }
        this.isLoading = false;
    }
}
</script>
