<template>
    <div class="container">
        <!-- javascript:void(0)是js的关键字,可以阻止连接跳转 -->
        <a href="javascript:void(0);" style="--i: 1">ufo</a>
    </div>
</template>
<script>
export default {

}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');

body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #060c21;
    font-family: 'Poppins', sans-serif;
}

.box {
    position: relative;
    width: 300px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #060c21;
    animation: animate 4s linear infinite;
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

.box:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -2;
    filter: blur(40px)
}

.box:before,
.box:after {
    background: linear-gradient(235deg, #89ff00, #060c21, #00bcd4);
}

.content {
    padding: 20px;
    box-sizing: border-box;
    color: #fff;
}

@keyframes animate {
    100% {
        filter: hue-rotate(360deg);
    }
}</style>