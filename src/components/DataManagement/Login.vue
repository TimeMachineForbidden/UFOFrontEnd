<template>
    <div class="login-wrapper">
        <div class="login-container">
            <h2 class="login-title">Login</h2>
            <el-form ref="loginFormRef" :model="loginData" :rules="loginFormRules" label-width="80px">
                <el-form-item label="Email" prop="email" style="margin-bottom: 30px;">
                    <el-input v-model="loginData.email" placeholder="Enter your email" :suffix-icon="User"></el-input>
                </el-form-item>
                <el-form-item label="Password" prop="password" style="margin-bottom: 30px;">
                    <el-input v-model="loginData.password" type="password" placeholder="Enter your password"
                        :suffix-icon="Lock"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-row :gutter="70">
                        <el-col :span="10">
                            <el-button type="info" @click="cancel">Cancel</el-button>
                        </el-col>
                        <el-col :span="10">
                            <el-button type="primary" @click="login">Login </el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item class="elres">
                    <el-row>
                        <el-col>
                            <span style="text-align: left;">If you do not have an account, please click <router-link
                                    to="/register">here</router-link>
                                to
                                register.
                            </span>
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
</script >
<script>
import { mapMutations } from 'vuex';
export default {

    data() {
        return {
            loginData: {
                email: '',
                password: ''
            },
            loginFormRules: {
                email: [{
                    required: true, message: "input email", trigger: 'blur'
                },
                {
                    min: 4,
                    max: 100,
                    message: 'email name should be between 4 and 100',
                }
                ],
                password: [{
                    required: true, message: "input password", trigger: 'blur'
                },
                {
                    min: 6,
                    max: 100,
                    message: 'password name should be between 6 and 100',
                }
                ]
            },
            userToken: ''
        };
    },
    methods: {
        ...mapMutations(['changeLogin']),
        cancel() {
            this.$router.push('/fail');
        },
        login() {
            let _this = this;
            this.$refs.loginFormRef.validate(valid => {
                if (!valid) {
                    return
                }
                else {
                    axios.post("http://49.232.241.171:8080/api/login", {
                        email: this.loginData.email,
                        password: this.loginData.password
                    }).then((response) => {
                        if (response.data.msg === 'success') {
                            _this.userToken = 'Bearer ' + response.data.data
                            _this.changeLogin({ Authorization: _this.userToken });
                            _this.$router.push('/dm1');
                            ElMessage.success('Successfully Login')
                        }
                        else {
                            ElMessage.error('Incorrect username or password')
                        }
                    }).catch(error => {
                        console.log(error);
                    });
                }
            })
        }
    }
};
</script>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');

.login-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('../../assets/darksun.jpg');
    background-size: cover;
}

.login-container {
    width: 400px;
    /* 放大登录框的宽度 */
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.9);
    font-family: 'Montserrat', sans-serif;
    /* 使用 Google Fonts 的 Montserrat 字体 */
}

.login-title {
    text-align: center;
    font-size: 30px;
    margin-bottom: 20px;
}

.el-form {
    font-size: 30px !important;
}

.el-form .elres .el-form-item__content {
    margin-left: 0 !important;
}
</style>
  