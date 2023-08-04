<template>
    <div class="mainbox">
        <div class="insidebox1">
            <ZoomBar></ZoomBar>
        </div>
        <div class="insidebox2">
            <WordsCloud></WordsCloud>
        </div>
        <div class="insidebox3">
            <Pie></Pie>
        </div>
    </div>
</template>
<script>
import ZoomBar from './Charts/ZoomBar.vue';
import WordsCloud from './Charts/wordsCloud.vue';
import Pie from './Charts/Pie.vue';


export default {
    data() {

    },
    mounted() {
    },
    components: { ZoomBar, WordsCloud, Pie }
}
</script>
<style>
.mainbox {
    display: grid;
    max-width: 1920px;
    height: 100%;
    background-image: url(../../assets/b2.jpg);
}

.insidebox1 {
    position: relative;
    ;
    grid-area: 1/1/3/2;
}

.insidebox2 {
    position: relative;
    grid-area: 1/2/2/3;
    display: flex;
    /* 使用弹性盒子布局 */
    justify-content: center;
    /* 水平居中对齐 */
    align-items: center;
    /* 垂直居中对齐 */
}

.insidebox3 {
    position: relative;
    grid-area: 2/2/3/3;

}
</style>