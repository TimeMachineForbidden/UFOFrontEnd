<template>
    <div id="myChartWC1" style="width:100%;height:100%"></div>
</template>
<script scoped>

import * as echarts from 'echarts';
import 'echarts-wordcloud'
import axios from 'axios'
export default {
    mounted() {
        let _this = this
        const echartDom = document.getElementById('myChartWC1')
        const myChartWC = echarts.init(echartDom)
        myChartWC.showLoading()
        axios.get("http://49.232.241.171:8080/ufo/words").then((response) => {
            myChartWC.hideLoading()
            const option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '描述词词云: {b}({c})'
                },
                series: [{
                    type: 'wordCloud',
                    shape: 'diamond',
                    keepAspect: false,
                    left: 'center',
                    top: 'center',
                    width: '100%',
                    height: '90%',
                    right: null,
                    bottom: null,
                    sizeRange: [12, 60],
                    rotationRange: [-90, 90],
                    rotationStep: 45,
                    gridSize: 6,
                    drawOutOfBound: false,
                    layoutAnimation: true,
                    textStyle: {
                        fontFamily: 'Play',
                        fontWeight: 'bold',
                        color: function () {
                            return 'rgb(' + [Math.round(Math.random() * 200 + 55),
                            Math.round(Math.random() * 200 + 55),
                            Math.round(Math.random() * 200 + 55)].join(',') + ')';
                        }
                    },
                    emphasis: {
                        // focus: 'self',
                        textStyle: {
                            textShadowBlur: 3,
                            textShadowColor: '#333'
                        }
                    },
                    //data属性中的value值却大，权重就却大，展示字体就却大
                    data: response.data.data
                }]
            }
            option && myChartWC.setOption(option)
            //随着屏幕大小调节图表
            window.addEventListener("resize", () => {
                myChartWC.resize();
            });
        })
    }



}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Play:wght@700&display=swap');

#myChartWC1 {
    position: absolute;
    margin: 0 auto;
}
</style>