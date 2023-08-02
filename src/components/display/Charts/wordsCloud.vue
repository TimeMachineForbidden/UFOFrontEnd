<template>
    <div id="myChart" style="width:800px;height:600px"></div>
</template>
<script>
import * as echarts from 'echarts';
import 'echarts-wordcloud'
import axios from 'axios'
export default {
    mounted() {
        let _this = this
        axios.get("http://49.232.241.171:8080/words").then((response) => {
            const echartDom = document.getElementById('myChart')
            const myChart = echarts.init(echartDom)
            const option = {
                series: [{
                    type: 'wordCloud',
                    shape: 'circle',
                    keepAspect: false,
                    // maskImage: maskImage,
                    left: 'center',
                    top: 'center',
                    width: '100%',
                    height: '90%',
                    right: null,
                    bottom: null,
                    sizeRange: [12, 60],
                    rotationRange: [-90, 90],
                    rotationStep: 45,
                    gridSize: 8,
                    drawOutOfBound: false,
                    layoutAnimation: true,
                    textStyle: {
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold',
                        color: function () {
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
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
            option && myChart.setOption(option)
            //随着屏幕大小调节图表
            window.addEventListener("resize", () => {
                myChart.resize();
            });
        })
    }



}

</script>
<style></style>