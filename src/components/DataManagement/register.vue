<template>
    <div class="register-wrapper">
        <div class="register-container">
            <h2 class="register-title">Register</h2>
            <el-form ref="registerFormRef" :model="registerData" :rules="registerFormRules" label-width="80px">
                <el-form-item label="Email" prop="email" style="margin-bottom: 30px;">
                    <el-input v-model="registerData.email" placeholder="Enter your email" :suffix-icon="User"></el-input>
                </el-form-item>
                <el-form-item label="Password" prop="password" style="margin-bottom: 30px;">
                    <el-input v-model="registerData.password" type="password" placeholder="Enter your password"
                        :suffix-icon="Lock"></el-input>
                </el-form-item>
                <el-form-item label="Confirm" prop="confirmpassword" style="margin-bottom: 30px;">
                    <el-input v-model="registerData.confirmpassword" type="password"
                        placeholder="Enter your confirmpassword" :suffix-icon="Lock"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-row :gutter="70">
                        <el-col :span="10">
                            <el-button type="info" @click="cancel">Cancel</el-button>
                        </el-col>
                        <el-col :span="10">
                            <el-button type="primary" @click="handleregister">Confirm</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import axios from 'axios';
import { ElMessage } from 'element-plus';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
const registerFormRef = ref('')
const registerData = reactive({
    email: '',
    password: '',
    confirmpassword: ''
})
const validateConfirmPassword = (rule, value, callback) => {
    if (value !== registerData.password) {
        callback(new Error('Passwords do not match'));
    } else {
        callback();
    }
};
const registerFormRules = reactive({
    email: [
        { required: true, message: 'Please input email', trigger: 'blur' },
        { min: 4, max: 100, message: 'Length should be 4 to 100', trigger: 'blur' },
    ],
    password: [
        { required: true, message: 'Please input password', trigger: 'blur' },
        { min: 6, max: 100, message: 'Length should be 6 to 100', trigger: 'blur' },
    ],
    confirmpassword: [
        { required: true, message: 'Please input confirmpassword', trigger: 'blur' },
        { min: 4, max: 100, message: 'Length should be 4 to 100', trigger: 'blur' },
        { validator: validateConfirmPassword, trigger: 'blur' }, // 添加自定义验证函数
    ],
})
const router = useRouter()
const handleregister = () => {
    registerFormRef.value.validate((valid) => {
        if (valid) {
            axios.post("http://49.232.241.171:8080/api/register", {
                email: registerData.email,
                password: registerData.password
            }).then(res => {
                if (res.data.msg === 'success') {
                    router.push('/login');
                    ElMessage.success('Successfully register')
                }
                else {
                    ElMessage.error('Username already exists')
                }
            }).catch(error => {
                console.log(error);
            })
        }
        else {
            return
        }
    })
}
</script >
<script>
import { mapMutations } from 'vuex';
export default {

    data() {
        return {

        };
    },
    methods: {
        cancel() {
            this.$router.push('/login');
        },
    }
};
</script>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');

.register-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('../../assets/darksun.jpg');
    background-size: cover;
}

.register-container {
    width: 400px;
    /* 放大登录框的宽度 */
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.9);
    font-family: 'Montserrat', sans-serif;
    /* 使用 Google Fonts 的 Montserrat 字体 */
}

.register-title {
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
}

.el-form {
    font-size: 30px !important;
}
</style>
  