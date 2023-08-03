<template>
    <div class="mainbox">
        <div class="insidebox1"></div>
        <div class="insidebox2"></div>
        <div class="insidebox3"></div>
        <div class="insidebox4"></div>
        <div class="insidebox5"></div>
    </div>
</template>
<script>
export default {

    data() {

    },
    mounted() {

    }
}
</script>
<style>
.mainbox {
    display: grid;
    max-width: 1920px;
    height: 100%;
}

.insidebox1 {
    grid-area: 1/1/3/2;
    background-color: aliceblue;
}

.insidebox2 {
    grid-area: 1/2/2/3;
    background-color: antiquewhite;
}

.insidebox3 {
    grid-area: 2/2/3/3;
    background-color: aqua;
}

.insidebox4 {
    grid-area: 1/3/2/4;
    background-color: aquamarine;
}

.insidebox5 {
    grid-area: 2/3/3/4;
    background-color: black;
}
</style>