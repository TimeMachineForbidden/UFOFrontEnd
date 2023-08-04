<template>
    <el-breadcrumb :separator-icon="ArrowRight" style="color: white;">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>Management</el-breadcrumb-item>
        <el-breadcrumb-item>Report</el-breadcrumb-item>

    </el-breadcrumb>
    <el-card class="box-card">
        <div>
            123
        </div>
    </el-card>
</template>

<script  setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>
<script>
export default {

}
</script>
<style>
.el-breadcrumb {
    margin-bottom: 15px;
    font-size: 12px;
    color: #fff;
}

.el-card {
    border: 1px;
}
</style>