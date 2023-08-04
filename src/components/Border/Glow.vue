<template>
    <div class="box">
        <div class="content">
            <div class="upbox">
                <div class="column1">
                    <DynamicBar></DynamicBar>
                </div>
            </div>
            <div class="downbox">
                <DynamicLine></DynamicLine>
            </div>
        </div>
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
    background: #060c21;
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

.box:before,
.box:after {
    background: linear-gradient(235deg, #89ff00, #060c21, #00bcd4);
}

.content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    color: #fff;
}

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