<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect"
        style="background-color: rgb(84, 92, 100);">
        <el-menu-item index="0" style="font-size: 40px;color: rgb(255, 255, 255);">UFO在线数据分析</el-menu-item>
        <div class="flex-grow" />
        <el-sub-menu index="2">
            <template #title>
                <h4 style="color: white;">
                    分析系统
                </h4>
            </template>
            <el-menu-item index="2-1">首页</el-menu-item>
            <el-menu-item index="2-2">登出</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>
  
<script  setup>
import { ref } from 'vue'

const activeIndex = ref('1')


</script>
  
<style>
.flex-grow {
    flex-grow: 1;
}
</style>
  