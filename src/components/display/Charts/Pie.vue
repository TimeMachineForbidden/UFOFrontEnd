<template>
    <div id="myChart" style="width:34%;height:50%"></div>
</template>
<script>
import * as echarts from 'echarts';
import axios from 'axios'
export default {

    data() {
        return {

        }
    },
    mounted() {
        axios.get("http://49.232.241.171:8080/shape").then((response) => {
            if (response.status === 200) {
                var chartDom = document.getElementById('myChart');
                var myChart = echarts.init(chartDom);
                var option;
                option = {
                    title: {
                        text: 'Shape Chart',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            mark: { show: true },
                            dataView: { show: true, readOnly: false },
                            restore: { show: true },
                            saveAsImage: { show: true }
                        }
                    },
                    series: [
                        {
                            name: '形状占比',
                            type: 'pie',
                            radius: [20, 140],
                            center: ['50%', '50%'],
                            roseType: 'area',
                            itemStyle: {
                                borderRadius: 5
                            },
                            data: response.data.data
                        }
                    ]
                };

                option && myChart.setOption(option);
            }
            else {
                console.log("error")
            }
        })
    }
}
</script>
<style></style>