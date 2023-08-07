<template>
    <div class="dis2p2">
        <DynamicBar></DynamicBar>
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
.dis2p2 {
    height: 100%;
    width: 100%;
}
</style>