<template>
    <div class="upbox">
        <DynamicBar></DynamicBar>
    </div>
    <div class="downbox">
        <DynamicLine></DynamicLine>
    </div>
</template>
<script>
import * as echarts from 'echarts';
import axios from 'axios'
import DynamicBar from './Charts/DynamicBar.vue';
import DynamicLine from './Charts/DynamicLine.vue';
export default {
    data() {
        return {};
    },
    mounted() {
    },
    components: { DynamicBar, DynamicLine }
}
</script>
<style>
.upbox {
    display: flex;
    width: 100%;
    height: 50%;
    margin: 0 auto;
    background-color: white;
}


.downbox {
    max-width: 1920px;
    width: 100%;
    background-color: white;
    border-top: 1px solid blue;
}
</style>