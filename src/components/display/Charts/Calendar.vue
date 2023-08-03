<template>
    <div id="myChart" style="width:100%;height:100%"></div>
</template>
<script>
import * as echarts from 'echarts';
import axios from 'axios';
import 'echarts-gl';

export default {
    name: 'display1',
    data() {
        return {
            candata: []
        }
    },
    created() {

    },
    mounted() {
        let _this = this
        axios.get("http://49.232.241.171:8080/monthDayNum").then((response) => {
            _this.candata = response.data.data

            var chartDom = document.getElementById('myChart');
            var myChart = echarts.init(chartDom);
            var option;
            function getVirtualData(year) {

                const date = +echarts.time.parse(year + '-01-01');
                const end = +echarts.time.parse(year + '-12-31');
                const dayTime = 3600 * 24 * 1000;
                const data = [];
                var count = 0
                for (let time = date; time <= end; time += dayTime) {
                    var rannum = Math.floor(Math.random() * 10000)
                    data.push([
                        echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
                        _this.candata[count]
                    ]);
                    count = count + 1
                }
                return data;
            }
            option = {
                visualMap: {
                    show: false,
                    min: 0,
                    max: 2200
                },
                calendar: {
                    range: '2020'
                },
                series: {
                    type: 'heatmap',
                    coordinateSystem: 'calendar',
                    data: getVirtualData('2020')
                }
            };

            option && myChart.setOption(option);
        })

    }
}
</script>
<style></style>