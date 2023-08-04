<template>
    <div class="disarea" style="width: 100%;height: 100%;">
        <ThreeDWorld></ThreeDWorld>
    </div>
</template>
<script>
import 'echarts-gl';
import ThreeDWorld from './Charts/ThreeDWorld.vue';
export default {
    name: 'display1',
    data() {
        return {

            candata: []
        };
    },
    created() {
    },
    mounted() {
    },
    components: { ThreeDWorld }
}
</script>
<style></style>