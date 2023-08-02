<template>
    <div v-if="isLoading">Loading</div>
    <div id="myChart" style="width:1000px;height:800px"></div>
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
        var chartDom = document.getElementById('myChart');
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
        axios.get("http://49.232.241.171:8080/yearStateNum").then((response) => {
            run(response.data.data);
        });
        function run(_rawData) {
            // var countries = ['Australia', 'Canada', 'China', 'Cuba', 'Finland', 'France', 'Germany', 'Iceland', 'India', 'Japan', 'North Korea', 'South Korea', 'New Zealand', 'Norway', 'Poland', 'Russia', 'Turkey', 'United Kingdom', 'United States'];

            const datasetWithFilters = [];
            const seriesList = [];
            echarts.util.each(states, function (state) {
                console.log(state)
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
                animationDuration: 10000,
                dataset: [
                    {
                        id: 'dataset_raw',
                        source: _rawData
                    },
                    ...datasetWithFilters
                ],
                title: {
                    text: 'Count of several states of America since 1950'
                },
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
