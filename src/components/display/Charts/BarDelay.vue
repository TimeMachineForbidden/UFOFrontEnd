<template>
    <div id="myChart" style="width:800px;height:600px"></div>
</template>
<script>
import * as echarts from 'echarts';
import 'echarts-wordcloud'
import axios from 'axios'
export default {
    data() {

        return {

        }
    },
    mounted() {
        axios.get("http://49.232.241.171:8080/yearShapeNum").then((response) => {


        })

    }
}
</script>
<style></style>