<template>
    <div class="common-layout">
        <el-container class="home-container">
            <el-header style="padding: 0;">
                <div>
                    <img src="../assets/1.png">
                    <span style="color: white;">UFO Online Data Analysis</span>
                </div>
                <el-dropdown>
                    <span class="el-dropdown-link" style="color: white;">
                        Dropdown List
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>HomePage</el-dropdown-item>
                            <el-dropdown-item>exhibition1</el-dropdown-item>
                            <el-dropdown-item>exhibition2</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-header>
            <el-container>
                <el-aside :width="isCollapse ? '64px' : '150px'">
                    <el-menu active-text-color="#ffd04b" background-color="#333744" class="el-menu-vertical-demo"
                        text-color="#fff" unique-opened :collapse="isCollapse" :collapse-transition="false" :router="true">
                        <div class="toggle-button" @click="toggleCol">|||</div>
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
                                        <IconMenu />
                                    </el-icon>
                                    <span>SpaceAndWorld</span>
                                </template>
                            </el-menu-item>
                            <el-menu-item index="/dis2">
                                <template #title>
                                    <el-icon>
                                        <IconMenu />
                                    </el-icon>
                                    <span>Time</span>
                                </template>
                            </el-menu-item>
                            <el-menu-item index="/dis3">
                                <template #title>
                                    <el-icon>
                                        <IconMenu />
                                    </el-icon>
                                    <span>Description</span>
                                </template>
                            </el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="2">
                            <template #title>
                                <el-icon>
                                    <Histogram />
                                </el-icon>
                                <span>DataManagement</span>
                            </template>
                            <el-menu-item index="/dm1">
                                <template #title>
                                    <el-icon>
                                        <IconMenu />
                                    </el-icon>
                                    <span>Management1</span>
                                </template>
                            </el-menu-item>
                            <el-menu-item index="/dm2">
                                <template #title>
                                    <el-icon>
                                        <IconMenu />
                                    </el-icon>
                                    <span>Management2</span>
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
    </div>
</template>
<script  setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    Histogram
} from '@element-plus/icons-vue'
import { ArrowDown } from '@element-plus/icons-vue'
</script>
<script>
import SideBar from '@/components/SideBar.vue';
import MyPageHeader from '@/components/MyPageHeader.vue';
export default {
    components: { SideBar, MyPageHeader },
    data() {
        return {
            isCollapse: false
        }
    },
    created() {

    },
    methods: {
        toggleCol() {//菜单伸缩
            this.isCollapse = !this.isCollapse
        }
    }
}
</script>
<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

}

.common-layout,
.home-container {
    height: 100%;
}



.el-header {
    padding: 0;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
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
    background-color: white;
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