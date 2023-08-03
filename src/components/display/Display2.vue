<template>
    <div class="upbox">
        <div class="column1">
            <DynamicBar></DynamicBar>
        </div>
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
    max-width: 1920px;
    height: 50%;
    margin: 0 auto;
    background-color: pink;
}

.column1 {
    flex: 1;
    background-color: white;
}


.downbox {
    max-width: 1920px;
    height: 50%;
    background-color: white;
    border-top: 1px solid blue;
}
</style>