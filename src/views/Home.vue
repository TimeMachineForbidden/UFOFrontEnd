<template>
    <div class="common-layout">
        <el-container class="home-container">
            <el-header style="padding: 0;">
                <div>
                    <img src="../assets/blueufo.png">
                    <span style="color: white;">UFO Online Data Analysis</span>
                </div>
                <ufobuttton @click="handleClick"></ufobuttton>
            </el-header>
            <el-container>
                <el-aside :width="isCollapse ? '64px' : '190px'">
                    <el-menu active-text-color="#ffd04b" background-color="#333744" class="el-menu-vertical-demo"
                        text-color="#fff" unique-opened :collapse="isCollapse" :collapse-transition="false" :router="true">
                        <div class="toggle-button" @click="toggleCol">
                            <el-icon>
                                <Pointer />
                            </el-icon>
                        </div>
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon>
                                    <Histogram />
                                </el-icon>
                                <span>Exhibition</span>
                            </template>
                            <el-menu-item index="/dis1">
                                <template #title>
                                    <el-icon>
                                        <Sunrise />
                                    </el-icon>
                                    <span>SpaceAndWorld</span>
                                </template>
                            </el-menu-item>
                            <el-menu-item index="/dis2p2">
                                <template #title>
                                    <el-icon>
                                        <Clock />
                                    </el-icon>
                                    <span>Time</span>
                                </template>
                            </el-menu-item>
                            <el-menu-item index="/dis3">
                                <template #title>
                                    <el-icon>
                                        <PieChart />
                                    </el-icon>
                                    <span>Description</span>
                                </template>
                            </el-menu-item>
                            <el-menu-item index="/dis4">
                                <template #title>
                                    <el-icon>
                                        <IconMenu />
                                    </el-icon>
                                    <span>Distribution</span>
                                </template>
                            </el-menu-item>
                            <el-menu-item index="/dis5">
                                <template #title>
                                    <el-icon>
                                        <Position />
                                    </el-icon>
                                    <span>Distribution</span>
                                </template>
                            </el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="2">
                            <template #title>
                                <el-icon>
                                    <Management />
                                </el-icon>
                                <span>DataManagement</span>
                            </template>
                            <el-menu-item index="/dm1">
                                <template #title>
                                    <el-icon>
                                        <EditPen />
                                    </el-icon>
                                    <span>Report</span>
                                </template>
                            </el-menu-item>
                            <el-menu-item index="/dm2" @click="handleVerify">
                                <template #title>
                                    <el-icon>
                                        <CircleCheck />
                                    </el-icon>
                                    <span>Verify</span>
                                </template>
                            </el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
        <el-dialog v-model="LoginDialogVisible" title="Warning" width="50%" @close="handleClose">
            <span>You need to Login</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="LoginDialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="handleConfirm">
                        Click to Login
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
<script  setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    Histogram,
    Management,
    PieChart,
    Sunrise,
    Clock,
    CircleCheck,
    EditPen,
    Position,
    Pointer
} from '@element-plus/icons-vue'
</script>
<script>

import SideBar from '@/components/SideBar.vue';
import MyPageHeader from '@/components/MyPageHeader.vue';
import ufobuttton from '@/components/snacks/ufobutton.vue';
import axios from 'axios';
export default {
    components: { SideBar, MyPageHeader },
    data() {
        return {
            isCollapse: false,
            isD2P1: true,
            isD3P1: true,
        }
    },
    created() {

    },
    methods: {
        toggleCol() {//菜单伸缩
            this.isCollapse = !this.isCollapse
        },
        handleClick() {//按钮切换
            const currentPath = this.$route.path;
            if (currentPath === '/dis3' || currentPath === '/dis3p2') {
                if (this.isD3P1) {
                    this.isD3P1 = !this.isD3P1;
                    this.$router.push('/dis3p2');
                }
                else {
                    this.isD3P1 = !this.isD3P1;
                    this.$router.push('/dis3');
                }
            }
            else {
                if (currentPath === '/dis2p2' || currentPath === '/dis2p3') {
                    if (this.isD2P1) {
                        this.isD2P1 = !this.isD2P1;
                        this.$router.push('/dis2p3');
                    }
                    else {
                        this.isD2P1 = !this.isD2P1;
                        this.$router.push('/dis2p2');
                    }
                }
            }

        },
        handleVerify() {

        },
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Play:wght@700&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background: #060c21;
}

.common-layout,
.home-container {
    height: 100%;
}

.el-header {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 28px;
    font-family: Play;
    background-color: #000;
}

.el-header div {
    display: flex;
    align-items: center;
}

.el-header div span {
    margin-left: 15px;
}

.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}

.el-dropdown {
    color: #fff;
}

.el-aside {
    background-color: #333744;
}

.el-aside .el-menu {
    border-right: none;
}

.el-main {
    --el-main-padding: 0;

}

.toggle-button {
    background-color: #4A5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 2px;
    cursor: pointer;
}
</style>