<template>
    <div class="dis5">
        <WordsCloud>
        </WordsCloud>
    </div>
</template>
<script>
import WordsCloud from './Charts/wordsCloud.vue';

export default {
    components: { WordsCloud }
}
</script>
<style>
.dis5 {
    height: 100%;
    width: 100%;
    background-image: url(../../assets/bg2.png);
    background-size: cover;
}
</style>