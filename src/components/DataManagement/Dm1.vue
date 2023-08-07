<template>
    <el-breadcrumb :separator-icon="ArrowRight" style="color: white;">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>Management</el-breadcrumb-item>
        <el-breadcrumb-item>Report</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
        <el-row :gutter="30">
            <el-col :span="4">
                <el-button type="info" @click="addDialogVisible = true">Add Report</el-button>
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
        </el-table>
        <div class="pagination-block">
            <el-pagination v-model:current-page="queryinfo.page" v-model:page-size="queryinfo.pageSize"
                :page-sizes="[2, 5, 10]" :small="small" :disabled="disabled" :background="background"
                layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
        </div>
    </el-card>
    <el-dialog v-model="addDialogVisible" title="Add report" width="50%" @close="handleClose">
        <el-form ref="addFormRef" :model="addForm" :rules="addFormRules" label-width="100px" :size="formSize" status-icon>
            <el-row>
                <el-col :span="12">
                    <el-form-item label=" City" prop="city">
                        <el-input v-model="addForm.city" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="Country" prop="country">
                        <el-input v-model="addForm.country" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="Duration" prop="duration">
                        <el-input v-model="addForm.duration" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="Shape" prop="shape">
                        <el-input v-model="addForm.shape" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="State" prop="state">
                <el-input v-model="addForm.state" />
            </el-form-item>
            <el-form-item label="Comment" prop="summaryInfo">
                <el-input v-model="addForm.summaryInfo" />
            </el-form-item>
            <el-form-item label="Activity time">
                <el-row :gutter="20">
                    <el-col :span="11">
                        <el-date-picker v-model="addForm.date1" type="date" placeholder="Pick a date" style="width: 100%" />
                    </el-col>
                    <el-col :span="2" class="text-center">
                        <span class="text-gray-500">-</span>
                    </el-col>
                    <el-col :span="11">
                        <el-time-picker v-model="addForm.date2" placeholder="Pick a time" style="width: 100%" />
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="image">
                <el-select v-model="addForm.images" placeholder="Are there some photos">
                    <el-option label="yes" value="1" />
                    <el-option label="no" value="0" />
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="addDialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="handleAddReport">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script  setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus';
</script>
<script>
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
            addDialogVisible: false,
            addForm: {
                city: '',
                country: '',
                duration: 0,
                shape: '',
                state: '',
                summaryInfo: '',
                date1: '',
                date2: '',
                images: 'no',
            },

            addFormRules: {
                city: [{
                    required: true, message: "input city", trigger: 'blur'
                },
                {
                    min: 1,
                    max: 100,
                    message: 'city name should be between 1 and 100',
                }
                ],
                country: [{
                    required: true, message: "input country", trigger: 'blur'
                },
                {
                    min: 1,
                    max: 100,
                    message: 'country name should be between 1 and 100',
                }
                ],
                duration: [{
                    required: true, message: "input duration", trigger: 'blur'
                },
                {
                    min: 1,
                    max: 10000,
                    message: 'duration name should be between 1 and 10000',
                }
                ],
                shape: [{
                    required: true, message: "input shape", trigger: 'blur'
                },
                {
                    min: 1,
                    max: 100,
                    message: 'shape name should be between 1 and 100',
                }
                ],
                state: [{
                    required: true, message: "input state", trigger: 'blur'
                },
                {
                    min: 1,
                    max: 100,
                    message: 'state name should be between 1 and 100',
                }
                ],
                summaryInfo: [{
                    required: true, message: "input comment", trigger: 'blur'
                },
                {
                    min: 1,
                    max: 30,
                    message: 'comment name should be between 1 and 30',
                }
                ],
                date1: [{
                    required: true, message: "choose date", trigger: 'blur'
                }
                ],
                date2: [{
                    required: true, message: "choose time", trigger: 'blur'
                }
                ]
            }

        }
    },
    created() {
        this.getReportList()
    },
    methods: {
        getReportList() {
            axios.get("http://49.232.241.171:8080/api/reports/list", { params: this.queryinfo }).then((response) => {
                console.log(response.data.data.records)
                this.userlist = response.data.data.records;
                console.log(response.data.data.count)
                this.total = response.data.data.count;

            })
        },
        //pagechange
        handleSizeChange(newSize) {
            this.queryinfo.pageSize = newSize;
            this.getReportList();
        },
        handleCurrentChange(newPage) {
            this.queryinfo.page = newPage;
            this.getReportList();
        },
        handleClose() {
            this.$refs.addFormRef.resetFields();
        },
        processedImages() {
            // 根据 images 的值进行处理
            // 如果 images 的值为 'yes'，返回 1，否则返回 0
            return this.addForm.images === 'yes' ? 1 : 0;
        },
        handleAddReport() {
            this.$refs.addFormRef.validate(valid => {
                if (!valid) {
                    return
                } else {
                    axios.post("http://49.232.241.171:8080/api/reports/submit", {
                        datetime: '2023-07-30T22:30:00',
                        city: this.addForm.city,
                        state: this.addForm.state,
                        country: this.addForm.country,
                        shape: this.addForm.shape,
                        duration: 10,
                        summaryInfo: this.addForm.summaryInfo,
                        images: 1,
                    }).then((response) => {
                        if (response.data.msg === 'success') {
                            ElMessage.success('Successfully added report,waiting for review')
                            this.addDialogVisible = false
                            this.getReportList()
                        }
                        else {
                            ElMessage.error('Failed to add report')
                            this.addDialogVisible = false
                        }
                    })
                }
            })
        }
    }
}
</script>
<style>
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