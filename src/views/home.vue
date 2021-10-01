<template>
    <el-container class="home-container">
        <!--    导航-->
        <el-header>
            <div class="collapse-btn" @click="collapseChage">
                <i v-if="!isOpen" class="el-icon-s-fold"></i>
                <i v-else class="el-icon-s-unfold"></i>
            </div>
            <div>
                <span style="margin-left:20px;float: left">
                    <div class="logo">后台管理系统</div>
                </span>
            </div>
            <el-dropdown>
                <div class="block">
                    <el-avatar :size="50" :src="this.userInfo.avatar" style="cursor: pointer;"></el-avatar>
                </div>
                <el-dropdown-menu slot="dropdown" trigger="click">
                    <el-dropdown-item>
                        <span type="danger" @click="toWelcome"><span class="el-icon-house"></span> &nbsp;系统首页</span>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <span type="danger" @click="getContact"><span class="el-icon-ship"></span> &nbsp;交流讨论</span>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <span type="danger" @click="logout(true)"><span class="el-icon-switch-button"></span> &nbsp;退出登入</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>
        <!--主体-->
        <el-container style="height: 500px;">
            <!--菜单-->
<!--            <el-aside :width="isOpen===true?'64px':'200px'">-->
                <el-menu
                        class="el-menu-vertical-demo"
                        :collapse="isOpen"
                        :router="true"
                        active-text-color="#20a0ff"
                        :default-active="activePath"
                        background-color="#001529"
                        :collapse-transition="true"
                        text-color="rgba(255,255,255,0.7)"
                        unique-opened
                >
                    <MenuTree :menuList="this.menuList"></MenuTree>
                </el-menu>
<!--            </el-aside>-->


            <!--右边主体-->
            <el-main v-loading="loading">
                <Tags/>
                <router-view style="margin-top: 20px"></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import MenuTree from "../components/MenuTree"; //引进菜单模板
    import Tags from "../components/Tags"; //引进菜单模板
    import {findMenu, info} from '../api/system/user'

    export default {
        data() {
            return {
                loading: true,
                menuList: {},
                userInfo: {},
            };
        },
        components: {
            MenuTree,
            Tags
        },
        computed: {
            //激活的路径
            activePath() {
                return this.$route.path;
            },
            isOpen() {
                return this.$store.state.component.collapse;
            }
        },
        methods: {
            /**
             *
             * 退出登入
             */
            collapseChage() {
                this.$store.commit("component/handleCollapse", !this.$store.state.component.collapse);
            },
            async logout(isClick) {
                if (isClick) {
                    const res = await this.$confirm("此操作将退出系统, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).catch(() => {
                        this.$message({
                            type: "info",
                            message: "已取消退出登入"
                        });
                    });
                    if (res === "confirm") {
                        LocalStorage.clearAll();
                        await this.$router.push("/login");
                    }
                } else {
                    await this.$router.push("/login");
                }

            },
            /**
             * 去系统首页
             */
            toWelcome() {
                this.$router.push("/system/welcome");
            },
            /**
             加载菜单数据
             */
            async getMenuList() {
                const {data: res} = await findMenu();
                if (!res.success) {
                    this.$message.error("获取菜单失败:" + res.data.errorMsg)
                    await this.logout(false);
                }
                this.menuList = res.data;
            },
            /**
             获取用户信息
             */
            async getUserInfo() {
                const {data: res} = await info();
                if (!res.success) {
                    return this.$message.error("获取用户信息失败:" + res.data.errorMsg);
                } else {
                    this.userInfo = res.data;
                    this.$store.commit("setUserInfo", res.data);
                }
            },
            /**
             * 点击交流
             */
            getContact() {
                const w = window.open('about:blank');
                w.location.href = '';
            }
        },
        mounted() {
            this.getUserInfo();
        },
        created() {
            this.getMenuList();
            // this.activePath(window.sessionStorage.getItem("activePath"));
            setTimeout(() => {
                this.loading = false;
            }, 500);
        }
    };
</script>

<style>
    /* 为对应的路由跳转时设置动画效果 */

    .el-header {
        background-color: #001529;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        font-size: 19px;

        padding-left: 0px;
    }

    .collapse-btn {
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 70px;
    }

    .el-main {
        background-color: #eaedf1;
    }

    .logo {
        margin-left: 30px;
        float: left;
        width: 250px;
        line-height: 70px;
    }

    .home-container {
        width: 100%;
        height: 100% !important;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }

    .toggle-btn {
        background-color: #2d8cf0 !important;
        font-size: 10px;
        line-height: 24px;
        color: #fff;
        text-align: center;
        letter-spacing: 0.2em;
        cursor: pointer;
    }

</style>
