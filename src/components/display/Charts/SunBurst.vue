<template>
    <div id="myChartSB" style="width:100%;height: 100%;"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {

        }
    },
    mounted() {
        var chartDom = document.getElementById('myChartSB');
        var myChart = echarts.init(chartDom, 'macarons');
        var option;
        const colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
        const bgColor = '#2E2733';
        const itemStyle = {
            star5: {
                color: colors[0]
            },
            star4: {
                color: colors[1]
            },
            star3: {
                color: colors[2]
            },
            star2: {
                color: colors[3]
            }
        };
        const data = [
            {
                name: '自然',
                itemStyle: {
                    color: colors[1]
                },
                children: [
                    {
                        name: '天体',
                        children: [
                            {
                                name: '5☆',
                                children: [
                                    {
                                        name: 'venus'
                                    },
                                    {
                                        name: 'star'
                                    },
                                    {
                                        name: 'sirius'
                                    },
                                    {
                                        name: 'metor'
                                    }
                                ]
                            },
                            {
                                name: '4☆',
                                children: [
                                    {
                                        name: 'flare'
                                    },
                                    {
                                        name: 'jupiter'
                                    }
                                ]
                            },
                            {
                                name: '3☆',
                                children: [
                                    {
                                        name: 'planet'
                                    },
                                    {
                                        name: 'cluster'
                                    },
                                    {
                                        name: 'iridium'
                                    },
                                    {
                                        name: 'celestial'
                                    },
                                    {
                                        name: 'mars'
                                    },
                                    {
                                        name: 'arcturus'
                                    },
                                    {
                                        name: 'capella'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: '其他',
                        children: [
                            {
                                name: '3☆',
                                children: [
                                    {
                                        name: 'fuel'
                                    },
                                    {
                                        name: 'cape'
                                    },
                                    {
                                        name: 'reflection'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: '生物',
                        children: [
                            {
                                name: '3☆',
                                children: [
                                    {
                                        name: 'bird'
                                    },
                                    {
                                        name: 'falcon'
                                    },
                                    {
                                        name: 'insect'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: '人类',
                itemStyle: {
                    color: colors[2]
                },
                children: [
                    {
                        name: '光学',
                        children: [
                            {
                                name: '4☆',
                                children: [
                                    {
                                        name: 'lens'
                                    }
                                ]
                            },
                            {
                                name: '3☆',
                                children: [
                                    {
                                        name: 'lanterns'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: '军事',
                        children: [
                            {
                                name: '5☆',
                                children: [
                                    {
                                        name: 'navy'
                                    }
                                ]
                            },
                            {
                                name: '3☆',
                                children: [
                                    {
                                        name: 'pilot'
                                    },
                                    {
                                        name: 'aircraft'
                                    },
                                    {
                                        name: 'military'
                                    },
                                    {
                                        name: 'jumpers'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: '太空',
                        children: [
                            {
                                name: '5☆',
                                children: [
                                    {
                                        name: 'satellite'
                                    },
                                    {
                                        name: 'missile'
                                    },
                                    {
                                        name: 'launch'
                                    },
                                    {
                                        name: 'starlink'
                                    }
                                ]
                            },
                            {
                                name: '4☆',
                                children: [
                                    {
                                        name: 'rocket'
                                    }
                                ]
                            },
                            {
                                name: '3☆',
                                children: [
                                    {
                                        name: 'debris'
                                    },
                                    {
                                        name: 'contrail'
                                    },
                                    {
                                        name: 'shuttle'
                                    },
                                    {
                                        name: 'balloon'
                                    },
                                    {
                                        name: 'venting'
                                    },
                                    {
                                        name: 'international station'
                                    },
                                    {
                                        name: 'landing'
                                    },
                                    {
                                        name: 'parachute'
                                    },
                                    {
                                        name: 'booster'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];
        for (let j = 0; j < data.length; ++j) {
            let level1 = data[j].children;
            for (let i = 0; i < level1.length; ++i) {
                let block = level1[i].children;
                let bookScore = [];
                let bookScoreId;
                for (let star = 0; star < block.length; ++star) {
                    let style = (function (name) {
                        switch (name) {
                            case '5☆':
                                bookScoreId = 0;
                                return itemStyle.star5;
                            case '4☆':
                                bookScoreId = 1;
                                return itemStyle.star4;
                            case '3☆':
                                bookScoreId = 2;
                                return itemStyle.star3;
                            case '2☆':
                                bookScoreId = 3;
                                return itemStyle.star2;
                        }
                    })(block[star].name);
                    block[star].label = {
                        color: style.color,
                        downplay: {
                            opacity: 0.5
                        }
                    };
                    if (block[star].children) {
                        style = {
                            opacity: 1,
                            color: style.color
                        };
                        block[star].children.forEach(function (book) {
                            book.value = 1;
                            book.itemStyle = style;
                            book.label = {
                                color: style.color
                            };
                            let value = 1;
                            if (bookScoreId === 0 || bookScoreId === 3) {
                                value = 5;
                            }
                            if (bookScore[bookScoreId]) {
                                bookScore[bookScoreId].value += value;
                            } else {
                                bookScore[bookScoreId] = {
                                    color: colors[bookScoreId],
                                    value: value
                                };
                            }
                        });
                    }
                }
                level1[i].itemStyle = {
                    color: data[j].itemStyle.color
                };
            }
        }
        option = {
            title: {
                text: 'Sunburst Chart of Categorizing Potential UFO Misidentifications',
                textStyle: {
                    fontFamily: 'Play',
                    color: 'white'
                },
                left: 'left'
            },
            backgroundColor: bgColor,
            color: colors,
            series: [
                {
                    type: 'sunburst',
                    center: ['50%', '48%'],
                    data: data,
                    sort: function (a, b) {
                        if (a.depth === 1) {
                            return b.getValue() - a.getValue();
                        } else {
                            return a.dataIndex - b.dataIndex;
                        }
                    },
                    label: {
                        rotate: 'radial',
                        color: bgColor
                    },
                    itemStyle: {
                        borderColor: bgColor,
                        borderWidth: 2
                    },
                    levels: [
                        {},
                        {
                            r0: 0,
                            r: 40,
                            label: {
                                rotate: 0
                            }
                        },
                        {
                            r0: 40,
                            r: 105
                        },
                        {
                            r0: 115,
                            r: 140,
                            itemStyle: {
                                shadowBlur: 2,
                                shadowColor: colors[2],
                                color: 'transparent'
                            },
                            label: {
                                rotate: 'tangential',
                                fontSize: 10,
                                color: colors[0]
                            }
                        },
                        {
                            r0: 140,
                            r: 145,
                            itemStyle: {
                                shadowBlur: 80,
                                shadowColor: colors[0]
                            },
                            label: {
                                position: 'outside',
                                textShadowBlur: 5,
                                textShadowColor: '#333'
                            },
                            downplay: {
                                label: {
                                    opacity: 0.5
                                }
                            }
                        }
                    ]
                }
            ]
        };
        option && myChart.setOption(option);

    }
}
</script>