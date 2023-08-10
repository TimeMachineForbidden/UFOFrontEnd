<template>
    <div class="welcome">
        <div class="leftside">
            <div class="insidecontent">
                <h1>Look,UFO!</h1>
                <p>Extraterrestrial Mysterious Supersonic</p>
                <p>A different demension</p>
                <p>Transcendental</p>
                <div class="imgbox">
                    <img src="image/space-observatory.png" style="width: 150px; height: 150px" />
                </div>
                <div class="buttonbox" @click="handleClick">
                    <el-button color="#E6E6FA" style="font-family: 'Play', sans-serif;
        font-family: 'PT Serif', serif;
        font-family: 'Satisfy', cursive;
        font-family: 'Space Grotesk', sans-serif;
        font-family: 'Ubuntu', sans-serif; 
        color: #32CD32;" round>Dive in</el-button>
                </div>
                <div class="press">
                    <p>copyright© 2023 Look,UFO! NKCS Team YHLS</p>
                </div>
            </div>
        </div>
        <div id="container">
            <section></section>
            <section></section>
            <section></section>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
    const sections = document.querySelectorAll("section");
    const edge = 72; //边数

    /**
     * 动态生成图片
     * @param {元素} el
     * @param {起始位置} start
     * @param {结束位置} end
     */
    const swiper = (el, start, end) => {
        let index = start;

        for (let i = 0; i < edge; i++) {
            // console.log(index);
            let div = document.createElement("div");
            div.style.transform = `rotateX(${(360 / edge) * i}deg) translateZ(3430px)`;
            div.style.background = `url(image/${[index]}.jpg) no-repeat`;
            div.style.backgroundSize = "cover";
            el.appendChild(div);
            index++;
            if (index === end) {
                index = start;
            }
        }
    };

    let start = 1; //第一张图片下标
    let end = 4; //第一组图片最后一张图片下标
    for (let j = 0; j < sections.length; j++) {
        swiper(sections[j], start, end);
        start = start + 3; //一组图片3张
        end = end + 3;
    }
});
</script>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        handleClick() {
            this.$router.push('/home')
        }
    }
}
</script>
<style scoped lang="less">
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:ital@1&family=Play:wght@700&family=Ubuntu:ital@1&display=swap");
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital@1&family=Play:wght@700&family=Satisfy&family=Space+Grotesk&family=Ubuntu:ital@1&display=swap');

.welcome {
    height: 100%;
    width: 100%;
    background-color: white;
    overflow: hidden;
}

.leftside {
    position: absolute;
    left: 0;
    width: 30%;
    height: 100%;

    .insidecontent {
        margin: 35% auto;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .insidecontent h1 {
        font-size: 50px;
        font-family: "PT Serif", serif;
        margin-bottom: 30px;
    }

    .insidecontent .imgbox {
        position: absolute;
        top: 350px;
        left: 10;
    }

    .insidecontent .buttonbox {
        position: absolute;
        top: 400px;
        left: 180px;
    }

    .insidecontent .press {
        position: absolute;
        top: 550px;
        left: 40px;
    }

    .insidecontent p {
        font-family: 'Play', sans-serif;
        font-family: 'PT Serif', serif;
        font-family: 'Satisfy', cursive;
        font-family: 'Space Grotesk', sans-serif;
        font-family: 'Ubuntu', sans-serif;
        line-height: 30px;
    }
}

#container {
    position: absolute;
    right: 0;
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    border-radius: 30px;
    overflow: hidden;
}

:deep(section) {
    width: 450px;
    height: 300px;
    position: relative;
    transform-style: preserve-3d;
    animation: rotate 900s linear infinite;

    div {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: url(../../public/image/1.jpg);
        background-size: cover;
    }
}

section:nth-child(2) {
    animation: rotate2 900s linear infinite;
}

@keyframes rotate {
    0% {
        transform: rotateX(0deg);
    }

    100% {
        transform: rotateX(360deg);
    }
}

@keyframes rotate2 {
    0% {
        transform: rotateX(0deg);
    }

    100% {
        transform: rotateX(-360deg);
    }
}
</style>
