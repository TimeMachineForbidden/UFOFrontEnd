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
        axios.get("http://49.232.241.171:8080/api/ufo/monthDayNum").then((response) => {
            _this.candata = response.data.data

            var chartDom = document.getElementById('myChart');
            var myChart = echarts.init(chartDom, 'macarons');
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
                title: {
                    text: 'UFO Date Distribution Heatmap',
                    textStyle: {
                        fontFamily: 'Play',
                        color: 'white'
                    },
                    left: 'left'
                },
                visualMap: {
                    show: true,
                    min: -300,
                    max: 1500,
                    inRange: {
                        color: ['#18EEC5', '#038044']
                    }
                },
                calendar: {
                    range: '2024'
                },
                series: {
                    type: 'heatmap',
                    coordinateSystem: 'calendar',
                    data: getVirtualData('2024'),
                    color: ["#516b91",
                        "#59c4e6",
                        "#edafda",
                        "#93b7e3",
                        "#a5e7f0",
                        "#cbb0e3"],
                },

            };

            option && myChart.setOption(option);
        })

    }
}
</script>
<style></style>