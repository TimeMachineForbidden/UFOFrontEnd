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
        var chartDom = document.getElementById('myChart');
        var myChart = echarts.init(chartDom);
        var option;
        axios.get().then((response) => {
            const countries = [
                'Finland',
                'France',
                'Germany',
                'Iceland',
                'Norway',
                'Poland',
                'Russia',
                'United Kingdom'
            ];
        })
    }
}
</script>