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
                    <div class="user-avator">
                        <img src="../assets/test03.jpg"/>
                    </div>
<!--                    <el-avatar :size="50" :src="import('../assets/test03.jpg').default"-->
<!--                               style="cursor: pointer;"></el-avatar>-->
                </div>
                <template #dropdown>
                    <el-dropdown-menu trigger="click">
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
                </template>
            </el-dropdown>
        </el-header>
        <!--主体-->
        <el-container style="height: 500px;">
            <!--菜单-->
            <!--            <el-aside :width="isOpen===true?'64px':'200px'">-->
            <MenuTree></MenuTree>
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
    import {ref, reactive, computed, onMounted} from "vue";
    import {useStore} from "vuex";
    import {useRouter, useRoute} from "vue-router";
    import {ElMessage, ElLoading, ElMessageBox} from "element-plus";
    import MenuTree from "../components/MenuTree.vue"; //引进菜单模板
    import Tags from "../components/Tags.vue"; //引进菜单模板
    import {findMenu, info} from '../api/system/user'

    export default {
        components: {
            MenuTree,
            Tags
        },
        setup() {
            const store = useStore();
            const router = useRouter();
            const route = useRoute();

            let loading = ref(true)
            let menuList = reactive({})
            let userInfo = reactive({})
            let isOpen = computed(() => store.state.component.collapse);
            /**
             *
             * 退出登入
             */
            const collapseChage = () => {
                store.commit("component/handleCollapse", !store.state.component.collapse);
            }
            const logout = (isClick) => {
                if (isClick) {
                    ElMessageBox.confirm("此操作将退出系统, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(() => {
                        store.commit("component/clearTags");
                        store.commit("login/clearUserInfo");
                        window.localStorage.clear();
                        window.sessionStorage.clear();
                        router.push("/login");
                    }).catch(() => {
                        ElMessage({
                            type: "info",
                            message: "已取消退出登入"
                        });
                    });
                } else {
                    store.commit("component/clearTags");
                    store.commit("login/clearUserInfo");
                    window.localStorage.clear();
                    window.sessionStorage.clear();
                    router.push("/login");
                }

            }
            /**
             * 去系统首页
             */
            const toWelcome = () => {
                router.push("/system/welcome");
            }

            /**
             获取用户信息
             */
            const getUserInfo = () => {
                info().then((res) => {
                    if (!res.data.success) {
                        ElMessage.error("获取用户信息失败:" + res.data.data.errorMsg);
                        router.push("/login");
                    } else {
                        userInfo = res.data.data;
                        store.commit("login/setUserInfo", res.data.data);
                    }
                }).catch((res) => {
                    ElMessage.error("获取用户信息失败:" + res.data.data.errorMsg);
                    router.push("/login");
                });


            }
            /**
             * 点击交流
             */
            const getContact = () => {
                const w = window.open('about:blank');
                w.location.href = '';
            }

            onMounted(() => {
                getUserInfo();
            })

            // this.activePath(window.sessionStorage.getItem("activePath"));
            setTimeout(() => {
                loading.value = false;
            }, 500);

            return {
                loading,
                menuList,
                userInfo,
                isOpen,
                collapseChage,
                logout,
                toWelcome,
                getUserInfo,
                getContact
            }
        },
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

    .toggle-btn {
        background-color: #2d8cf0 !important;
        font-size: 10px;
        line-height: 24px;
        color: #fff;
        text-align: center;
        letter-spacing: 0.2em;
        cursor: pointer;
    }

    .user-avator {
        float: left;
    }

    .user-avator img {
        cursor: pointer;
        display: block;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
</style>
