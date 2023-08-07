<template>
    <div class="dm2box">
        <el-breadcrumb :separator-icon="ArrowRight" style="color: white;">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item>Management</el-breadcrumb-item>
            <el-breadcrumb-item>Verify</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
            <el-row :gutter="30">
                <el-col :span="4">
                    <el-button type="info" @click="handleLogout">Logout</el-button>
                </el-col>
            </el-row>
            <el-table :data="userlist" height="400" stripe>
                <el-table-column label="id" prop="id"> </el-table-column>
                <el-table-column label="city" prop="city"> </el-table-column>
                <el-table-column label="country" prop="country"> </el-table-column>
                <el-table-column label="duration" prop="duration"> </el-table-column>
                <el-table-column label="shape" prop="shape"> </el-table-column>
                <el-table-column label="state" prop="state"> </el-table-column>
                <el-table-column label="comments" prop="summaryInfo"> </el-table-column>
                <el-table-column label="date" prop="datetime"> </el-table-column>
                <el-table-column fixed="right" label="Operations" width="120">
                    <template #default="scope">
                        <el-button type="text" size="small" @click="handlePass(scope.row)">Pass</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination-block">
                <el-pagination v-model:current-page="queryinfo.page" v-model:page-size="queryinfo.pageSize"
                    :page-sizes="[2, 5, 10]" :small="small" :disabled="disabled" :background="background"
                    layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
                    @current-change="handleCurrentChange" />
            </div>
        </el-card>
        <el-dialog v-model="passDialogVisible" title="Pass report" width="50%" @close="handleClose">
            <span>Are you sure you want to pass this report?</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="passDialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="handlePassReport">
                        Confirm
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script  setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus';
</script>
<script scope>
import {
    Search
} from '@element-plus/icons-vue'
import axios from 'axios';
import { ElMessageBox } from 'element-plus';
export default {

    data() {
        return {
            query: '',
            //param
            queryinfo: {
                page: 1,
                pageSize: 5
            },
            userlist: [],
            total: 0,
            passDialogVisible: false,
            processingrowid: ''
        }
    },
    created() {
        this.getVerifyList()
    },
    methods: {
        getVerifyList() {
            axios.interceptors.request.use((config) => {
                if (localStorage.getItem('Authorization')) {
                    config.headers.Authorization = localStorage.getItem('Authorization')
                }
                return config;
            }, (error) => {
                return Promise.reject(error);
            });
            axios.get("http://49.232.241.171:8080/api/reports/check", { params: this.queryinfo }).then((response) => {
                console.log(response.data.data.records)
                this.userlist = response.data.data.records;
                console.log(response.data.data.count)
                this.total = response.data.data.count;
            })
        },
        //pagechange
        handleSizeChange(newSize) {
            this.queryinfo.pageSize = newSize;
            this.getVerifyList()
        },
        handleCurrentChange(newPage) {
            this.queryinfo.page = newPage;
            this.getVerifyList()
        },
        handlePass(inrow) {
            this.passDialogVisible = true;
            this.processingrowid = inrow.id
            console.log(this.processingrowid)
        },
        handlePassReport() {
            let _thisid = this.processingrowid
            let _this = this
            axios.interceptors.request.use((config) => {
                if (localStorage.getItem('Authorization')) {
                    config.headers.Authorization = localStorage.getItem('Authorization')
                }
                return config;
            }, (error) => {
                return Promise.reject(error);
            });
            console.log(_thisid)
            axios.put("http://49.232.241.171:8080/api/reports/pass" + "?id=" + _thisid).
                then((response) => {
                    if (response.data.msg === 'success') {
                        ElMessage.success('Successfully approved a report');

                        _this.getVerifyList();
                        _this.passDialogVisible = false;
                    }
                    else {
                        ElMessage.error('something went wrong')
                    }
                })
        },
        handleLogout() {
            ElMessage.success('Successfully Logout')
            localStorage.removeItem('Authorization');
            let token = localStorage.getItem('Authorization');
            console.log(token);
            this.$router.push('/dm1');
        }
    }
}
</script>
<style>
.dm2box {
    height: 100%;
    width: 100%;
}

.el-breadcrumb {
    margin-bottom: 15px;
    font-size: 12px;
    color: #fff;
}

.el-card {
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.15) !important;
}

.el-table {
    margin-top: 10px;
    font-size: 12px;
}

.el-pagination {
    margin-top: 20px;
}
</style>