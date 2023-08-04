<template>
    <div class="box">
        1
    </div>
</template>
<script>
import DynamicBar from '../display/Charts/DynamicBar.vue';
import DynamicLine from '../display/Charts/DynamicLine.vue';
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
/*实现蓝绿色的*/
.box {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../../assets/galaxy.png) no-repeat;
    background-size: cover;
}

.box:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -1;

}

.box:after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -1;
    filter: blur(40px);
}
</style>