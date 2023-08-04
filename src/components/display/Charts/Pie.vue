<template>
    <div id="myChartP" style="width:100%;height:100%"></div>
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

        axios.get("http://49.232.241.171:8080/ufo/shape").then((response) => {
            if (response.status === 200) {
                var chartDom = document.getElementById('myChartP');
                var myChart = echarts.init(chartDom);
                var option;
                option = {
                    title: {
                        text: 'Shape ',
                        textStyle: {
                            fontFamily: 'Play'
                        },
                        left: 'left'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },

                    series: [
                        {
                            name: '形状占比',
                            type: 'pie',
                            radius: [15, 90],
                            center: ['50%', '50%'],
                            roseType: 'area',
                            itemStyle: {
                                borderRadius: 5
                            },
                            fontFamily: 'Play',
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
<style>
@import url('https://fonts.googleapis.com/css2?family=Play:wght@700&family=Ubuntu:ital@1&display=swap');

#myChartP {
    position: absolute;
    padding: 20px;
}
</style>