<template>
    <div id="fixedAssetCategory">
        <!-- 面包导航 -->
        <el-breadcrumb separator="/" style="padding-left:10px;padding-bottom:10px;font-size:12px;">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>固定资产管理</el-breadcrumb-item>
            <el-breadcrumb-item>元数据管理</el-breadcrumb-item>
            <el-breadcrumb-item>资产类别</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
            <el-form :inline="true" ref="form" :model="queryMap" label-width="70px" size="small">
                <!--                <el-form-item label="部门">-->
                <!--                    <el-select-->
                <!--                            clearable-->
                <!--                            @change="searchUser"-->
                <!--                            @clear="searchUser"-->
                <!--                            v-model="queryMap.departmentId"-->
                <!--                            placeholder="请选择所属部门"-->
                <!--                    >-->
                <!--                        <el-option-->
                <!--                                v-for="department in departments"-->
                <!--                                :label="department.name"-->
                <!--                                :key="department.id"-->
                <!--                                :value="department.id"-->
                <!--                        >-->
                <!--                            <span style="float: left">{{ department.name }}</span>-->
                <!--                            <span style="float: right; color: #8492a6; font-size: 13px">-->
                <!--                <el-tag size="small" effect="plain" type="success">-->
                <!--                  {{ department.total }}人-->
                <!--                </el-tag>-->
                <!--              </span>-->
                <!--                        </el-option>-->
                <!--                    </el-select>-->
                <!--                </el-form-item>-->
                <el-form-item label="ID">
                    <el-input
                            @keyup.enter.native="searchFixedAssetCategory"
                            @clear="searchFixedAssetCategory"
                            clearable
                            v-model="queryMap.categoryId"
                            placeholder="请输入id查询"
                    ></el-input>
                </el-form-item>
                <el-form-item label="类别名称">
                    <el-input
                            @keyup.enter.native="searchFixedAssetCategory"
                            @clear="searchFixedAssetCategory"
                            clearable
                            v-model="queryMap.categoryName"
                            placeholder="请输入类别名称查询"
                    ></el-input>
                </el-form-item>
                <el-form-item label="折旧方法">
                    <el-input
                            @keyup.enter.native="searchFixedAssetCategory"
                            @clear="searchFixedAssetCategory"
                            clearable
                            v-model="queryMap.depreciationMethodId"
                            placeholder="请输入折旧方法查询"
                    ></el-input>
                </el-form-item>
                <el-form-item label="计量单位">
                    <el-input
                            @keyup.enter.native="searchFixedAssetCategory"
                            clearable
                            @clear="searchFixedAssetCategory"
                            v-model="queryMap.measureUnit"
                            placeholder="请输入计量单位查询"
                    ></el-input>
                </el-form-item>
                <el-form-item label="能力单位">
                    <el-input
                            clearable
                            @clear="searchFixedAssetCategory"
                            v-model="queryMap.capacityUnit"
                            placeholder="请输入能力单位查询">
                    </el-input>
                </el-form-item>
                <el-form-item label="折旧年限">
                    <el-input
                            clearable
                            @clear="searchFixedAssetCategory"
                            v-model="queryMap.depreciationPeriod"
                            placeholder="请输入折旧年限查询">
                    </el-input>
                </el-form-item>
                <el-form-item label="工作量">
                    <el-input
                            clearable
                            @clear="searchFixedAssetCategory"
                            v-model="queryMap.estimatedTotalWorkload"
                            placeholder="请输入最大工作量查询">
                    </el-input>
                </el-form-item>
                <el-form-item label="净残值率">
                    <el-input
                            clearable
                            @clear="searchFixedAssetCategory"
                            v-model="queryMap.netResidualValue"
                            placeholder="请输入净残值率查询">
                    </el-input>
                </el-form-item>
                <div style="display: inline-block">
                    <el-form-item label="状态">
                        <el-radio v-model="queryMap.status" label="true">可用</el-radio>
                        <el-radio v-model="queryMap.status" label="false">禁用</el-radio>
                        <el-radio v-model="queryMap.status" label>全部</el-radio>
                    </el-form-item>
                    <el-form-item label="查询类型" style="margin-left:70px;">
                        <el-radio v-model="queryMap.isAccurate" label="1">模糊查询</el-radio>
                        <el-radio v-model="queryMap.isAccurate" label="0">精确查询</el-radio>
                    </el-form-item>

                    <el-form-item style="margin-left:100px;">
                        <el-button @click="reset" icon="el-icon-refresh">重置</el-button>
                        <el-button type="primary" @click="searchFixedAssetCategory" icon="el-icon-search">查询</el-button>
                        <el-button
                                type="success"
                                icon="el-icon-plus"
                                @click="openAddDialog"
                                v-hasPermission="'user:add'"
                        >添加
                        </el-button>
                        <el-button @click="downExcel" v-hasPermission="'user:export'" icon="el-icon-upload">导入</el-button>
                        <el-button @click="downExcel" v-hasPermission="'user:export'" icon="el-icon-download">导出</el-button>
                    </el-form-item>
                </div>

                <!--                <el-form-item label="状态">-->
                <!--                  <el-select-->
                <!--                    clearable-->
                <!--                    v-model="queryMap.isban"-->
                <!--                    @clear="searchUser"-->
                <!--                    placeholder="请选择用户状态"-->
                <!--                  >-->
                <!--                    <el-option label="全部" value=""></el-option>-->
                <!--                    <el-option label="禁用" value="1"></el-option>-->
                <!--                    <el-option label="正常" value="0"></el-option>-->
                <!--                  </el-select>-->
                <!--                </el-form-item>-->


            </el-form>
            <!-- 表格部分 -->
            <el-table
                    ref="table"
                    v-loading="loading"
                    row-key="categoryId"
                    style="width: 100%;"
                    height="450"
                    size="mini"
                    border
                    element-loading-text="拼命加载中"
                    element-loading-spinner="el-icon-loading"
                    :data="fixedAssetCategorys"
                    :row-style="{height: '30px'}"
            >
                <el-table-column prop="categoryId" label="ID" width="100px" fixed></el-table-column>
                <el-table-column prop="categoryName" label="类别名称" width="150px" fixed
                                 :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="categoryLevel" label="级数" width="100px">
                    <template #default="scope">
                        <el-tag v-if="scope.row.categoryLevel===1">一级分类</el-tag>
                        <el-tag type="success" v-else-if="scope.row.categoryLevel===2">二级分类</el-tag>
                        <el-tag type="info" v-else-if="scope.row.categoryLevel===3">三级分类</el-tag>
                        <el-tag type="warning" v-else-if="scope.row.categoryLevel===4">四级分类</el-tag>
                        <el-tag type="danger" v-else-if="scope.row.categoryLevel===5">五级分类</el-tag>
                        <el-tag type="" v-else>六级分类</el-tag>
                    </template>
                </el-table-column>
                <!--                <el-table-column prop="categoryDetailed" :formatter="scope.row.sex === 1 ? '男' : '女'" label="明细">-->
                <!--                    <template #default="scope">-->
                <!--                        <el-tag size="small" type="success" v-if="scope.row.sex===1">男</el-tag>-->
                <!--                        <el-tag size="small" type="warning" v-else>女</el-tag>-->
                <!--                    </template>-->
                <!--                </el-table-column>-->
                <el-table-column prop="depreciationMethodId" label="折旧方法" width="120px"
                                 :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="measureUnit" label="计量单位" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="capacityUnit" label="能力单位" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="depreciationPeriod" label="折旧年限"></el-table-column>
                <el-table-column prop="estimatedTotalWorkload" label="总工作量"></el-table-column>
                <el-table-column prop="netResidualValue" label="净残值率"></el-table-column>
                <el-table-column prop="remark" label="备注" :show-overflow-tooltip="true" width="150"></el-table-column>
                <el-table-column prop="status" label="状态" width="100" fixed="right">
                    <template #default="scope">
                        <el-switch v-model="scope.row.status"
                                   @change="changeFixedAssetCategoryStatus(scope.row)">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" fixed="right" width="150px" >
                    <template #default="scope">
                        <el-button v-hasPermission="'productCategory:edit'"
                                   type="primary"
                                   icon="el-icon-edit"
                                   @click="editCategory(scope.row.id)"
                                   size="mini"
                        >
                        </el-button>
                        <el-button v-hasPermission="'productCategory:delete'"
                                   type="danger"
                                   icon="el-icon-delete"
                                   @click="del(scope.row.id)"
                                   size="mini"
                        >
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -->
            <el-pagination
                    style="margin-top:10px;"
                    background

                    :show-header="true"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="queryMap.pageNum"
                    :page-sizes="[10,20, 30, 50, 100, 200]"
                    :page-size="queryMap.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total"
            ></el-pagination>
            <!-- 添加弹出框 -->
            <el-dialog title="添加分类" v-model="addDialogVisible" @close="addCloseDialog" width="50%">
                <span>
                  <el-form :model="addRuleForm" :rules="addRules" ref="addRuleFormRef" label-width="100px">
                    <el-form-item label="分类名称" prop="name">
                      <el-input v-model="addRuleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="父分类" prop="pid">
                      <el-cascader
                              @change="selectParentChange"
                              :options="parentCategorys"
                              clearable
                              filterable
                              style="width:100%"
                              :props="selectProps"
                              v-model="pKeys"
                      ></el-cascader>
                    </el-form-item>
                    <el-form-item label="备注" prop="remark">
                      <el-input type="textarea" v-model="addRuleForm.remark"></el-input>
                    </el-form-item>
                    <el-form-item label="排序" prop="sort">
                      <el-input-number v-model="addRuleForm.sort" :min="1" :max="10" label="排序"></el-input-number>
                    </el-form-item>
                  </el-form>
                </span>
                <template #footer>
                    <span class="dialog-footer">
                      <el-button @click="addDialogVisible = false">取 消</el-button>
                      <el-button type="primary" @click="addCategory" :disabled="btnDisabled"
                                 :loading="btnLoading">确 定</el-button>
                    </span>
                </template>
            </el-dialog>
            <!-- 编辑弹出框 -->
            <el-dialog title="编辑分类" v-model="editDialogVisible" @close="editCloseDialog" width="50%">
        <span>
          <el-form :model="editRuleForm" :rules="addRules" ref="editRuleFormRef" label-width="100px">
            <el-form-item label="分类名称" prop="name">
              <el-input v-model="editRuleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="备注" prop="remark">
              <el-input type="textarea" v-model="editRuleForm.remark"></el-input>
            </el-form-item>
            <el-form-item label="排序" prop="sort">
              <el-input-number v-model="editRuleForm.sort" :min="1" :max="10" label="排序"></el-input-number>
            </el-form-item>
          </el-form>
        </span>
                <template #footer>
                <span class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="" :disabled="btnDisabled"
                     :loading="btnLoading">确 定</el-button>
        </span>
                </template>
            </el-dialog>
        </el-card>
    </div>
</template>

<script>
    import {ref, reactive, getCurrentInstance} from "vue";
    import {ElMessage, ElLoading, ElNotification, ElMessageBox} from "element-plus";
    import {
        update,
        edit,
        deleteProductCategory,
        categoryTree,
        getParentCategoryTree,
        add
    } from '../../../api/business/material/productCategory'
    import {
        findFixedAssetCateguryListApi,
        changeFixedAssetCategoryStatusApi
    } from '../../../api/fixedasset/metadata/fixedAssetCategory'

    import utils from '../../../api/common/utils'

    export default {

        setup() {

            const btnLoading = ref(false)
            const btnDisabled = ref(false)
            const loading = ref(true)
            const pKeys = ref([])
            const addDialogVisible = ref(false)
            const editDialogVisible = ref(false)
            const editRuleForm = ref(null)
            const addRuleForm = ref({pid: "0", name: "", remark: "", sort: 0}) //添加表单
            const addRules = ref({
                name: [
                    {required: true, message: "请输入分类名", trigger: "blur"},
                    {min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur"}
                ],
                remark: [
                    {required: true, message: "请输入备注信息", trigger: "blur"}
                ],
                sort: [{required: true, message: "请输入排序号", trigger: "blur"}]
            })
            const total = ref(0)
            const queryMap = reactive({
                categoryId: null,
                categoryName: null,
                status: "",
                depreciationMethodId: null,
                measureUnit: null,
                capacityUnit: null,
                depreciationPeriod: null,
                estimatedTotalWorkload: null,
                netResidualValue: null,
                isAccurate: "1",
                pageNum: 1,
                pageSize: 10
            })
            const fixedAssetCategorys = ref([])
            const parentCategorys = ref([])
            const selectProps = reactive({
                expandTrigger: "hover",
                value: "id",
                label: "name",
                children: "children",
                checkStrictly: true
            })

            const addRuleFormRef = ref(null)
            const editRuleFormRef = ref(null)

            /**
             * 重置
             */
            const reset = () => {
                queryMap.categoryId = null;
                queryMap.categoryName = null;
                queryMap.status = "";
                queryMap.depreciationMethodId = null;
                queryMap.measureUnit = null;
                queryMap.capacityUnit = null;
                queryMap.depreciationPeriod = null;
                queryMap.estimatedTotalWorkload = null;
                queryMap.netResidualValue = null;
                queryMap.isAccurate = "1";
                queryMap.pageNum = 1;
                getFixedAssetCategoryList()
            }

            //加载分类数据
            const getFixedAssetCategoryList = () => {
                if (!utils.isEmpty(queryMap.categoryId) && !utils.isIneger(queryMap.categoryId)) {
                    ElMessage.error("请输入数值类型ID");
                    return;
                } else if (!utils.isEmpty(queryMap.depreciationPeriod) && !utils.isNumberTwoScale(queryMap.depreciationPeriod, 2)) {
                    ElMessage.error("请输入数值类型折旧年限");
                    return;
                } else if (!utils.isEmpty(queryMap.estimatedTotalWorkload) && !utils.isNumberTwoScale(queryMap.estimatedTotalWorkload, 2)) {
                    ElMessage.error("请输入数值类型工作量");
                    return;
                } else if (!utils.isEmpty(queryMap.netResidualValue) && !utils.isNumberTwoScale(queryMap.netResidualValue, 2)) {
                    ElMessage.error("请输入数值类型净残值率");
                    return;
                }
                loading.value = true;
                fixedAssetCategorys.value = [];

                findFixedAssetCateguryListApi(queryMap).then((res) => {
                    if (!res.data.success) return ElMessage.error("分类列表失败");
                    fixedAssetCategorys.value = res.data.data.rows;
                    total.value = res.data.data.total;
                    loading.value = false;
                }).catch((res) => {
                    loading.value = false;
                    ElMessage.error("分类列表失败");
                });
            }

            /**
             * 禁用启用类别
             */
            const changeFixedAssetCategoryStatus = (row) => {
                changeFixedAssetCategoryStatusApi( row.categoryId,row.status).then((res) => {
                    if (!res.data.success) {
                        ElMessage.error("更新资产类别状态失败:" + res.data.data.errorMsg);
                        row.status = !row.status;
                    } else {
                        const message = row.status ? '资产类别状态已启用' : '资产类别状态已禁用';
                        ElNotification({
                            type: 'success',
                            title: '操作成功',
                            message: message,
                        });
                    }
                }).catch((res) => {
                    ElMessage.error("更新资产类别状态失败:" + res);
                });
            }

            //改变页码
            const handleSizeChange = (newSize) => {
                queryMap.pageSize = newSize;
                queryMap.pageNum = 1;
                getFixedAssetCategoryList();
            }
            //翻页
            const handleCurrentChange = (current) => {
                queryMap.pageNum = current;
                getFixedAssetCategoryList();
            }

            /**
             * 搜索类别
             */
            const searchFixedAssetCategory = () => {
                queryMap.pageNum = 1;
                getFixedAssetCategoryList();
            }

            getFixedAssetCategoryList();

            const updateFixedAssetCategory = () => {
                // editRuleFormRef.value.validate( valid => {
                //     if (!valid) {
                //         return;
                //     } else {
                //         btnLoading.value = true;
                //         btnDisabled.value = true;
                //         update(
                //             "/business/material/productCategory/update/" + editRuleForm.value.id,
                //             editRuleForm.value
                //         ).then((res) => {
                //             if (res.data.success) {
                //                 ElNotification({
                //                     title: "成功",
                //                     message: "分类信息更新",
                //                     type: "success"
                //                 });
                //                 getCategoryList();
                //                 btnLoading.value = false;
                //                 btnDisabled.value = false;
                //             } else {
                //                 ElMessage.error("分类信息更新失败:" + res.data.data.errorMsg);
                //             }
                //             btnLoading.value = false;
                //             btnDisabled.value = false;
                //             editDialogVisible.value = false;
                //         }).catch((res) => {
                //             btnLoading.value = false;
                //             btnDisabled.value = false;
                //             editDialogVisible.value = false;
                //             ElMessage.error("分类信息更新失败:" + res);
                //         });
                //     }
                // });
            }
            //修改
            const editFixedAssetCategory = (id) => {
                // edit("/business/material/productCategory/edit/" + id).then((res) => {
                //     if (res.data.success) {
                //         editRuleForm.value = res.data.data;
                //     } else {
                //         return ElMessage.error("分类信息编辑失败" + res.data.data.errorMsg);
                //     }
                //     editDialogVisible.value = true;
                // }).catch((res) => {
                //     editDialogVisible.value = true;
                //     ElMessage.error("分类信息编辑失败:" + res);
                // });
            }
            //删除分类
            const deleteFixedAssetCategory = (id) => {
                // ElMessageBox.confirm(
                //     "此操作将永久删除该分类, 是否继续?",
                //     "提示",
                //     {
                //         confirmButtonText: "确定",
                //         cancelButtonText: "取消",
                //         type: "warning"
                //     }
                // ).then((res) => {
                //     if (res === "confirm") {
                //         deleteProductCategory(
                //             "/business/material/productCategory/delete/" + id
                //         ).then((res) => {
                //             if (res.data.success) {
                //                 ElMessage.success("分类删除成功");
                //                 getCategoryList();
                //             } else {
                //                 ElMessage.error(res.data.data.errorMsg);
                //             }
                //         }).catch((res) => {
                //             ElMessage.error(res);
                //         });
                //     }
                // }).catch(() => {
                //     ElMessage({
                //         type: "info",
                //         message: "已取消删除"
                //     });
                // });
            }

            //父级分类中改变
            const selectParentChange = () => {
                // const len = pKeys.value == null ? 0 : pKeys.value.length;
                // if (len > 0) {
                //     addRuleForm.value.pid = pKeys.value[len - 1];
                // } else {
                //     addRuleForm.value.pid = 0;
                // }
            }

            //加载父级分类数据
            const getParentCategoryList = () => {
                // getParentCategoryTree().then((res) => {
                //     if (!res.data.success) return ElMessage.error("父级分类列表失败:" + res.data.data.errorMsg);
                //     parentCategorys.value = res.data.data;
                // }).catch((res) => {
                //     ElMessage.error("父级分类列表失败:" + res);
                // });
            }
            //添加分类
            const addCategory = () => {
                // addRuleFormRef.value.validate( valid => {
                //     if (!valid) {
                //         return;
                //     } else {
                //         btnLoading.value = true;
                //         btnDisabled.value = true;
                //         if (addRuleForm.value.pid == null) {
                //             addRuleForm.value.pid = 0;
                //         }
                //         add(addRuleForm.value).then((res) => {
                //             if (res.data.success) {
                //                 ElMessage.success("分类添加成功");
                //                 getCategoryList();
                //                 btnLoading.value = false;
                //                 btnDisabled.value = false;
                //             } else {
                //                 return ElMessage.error("分类添加失败:" + res.data.data.errorMsg);
                //             }
                //             addDialogVisible.value = false;
                //             btnLoading.value = false;
                //             btnDisabled.value = false;
                //         }).catch((res) => {
                //             addDialogVisible.value = false;
                //             btnLoading.value = false;
                //             btnDisabled.value = false;
                //             ElMessage.error("分类添加失败:" + res);
                //         });
                //     }
                // });
            }

            //打开添加
            const openAdd = () => {
                addDialogVisible.value = true;
                getParentCategoryList();
            }
            //关闭弹出框
            const addCloseDialog = () => {
                addRuleFormRef.value.clearValidate();
                addRuleForm.value = {};
                pKeys.value = [];
            }
            const editCloseDialog = () => {
                editRuleFormRef.value.clearValidate();
                editRuleForm.value = {};

            }

            return {
                btnLoading,
                btnDisabled,
                loading,
                pKeys,
                addDialogVisible,
                editDialogVisible,
                editRuleForm,
                addRuleForm,
                addRules,
                total,
                queryMap,
                fixedAssetCategorys,
                parentCategorys,
                selectProps,
                addRuleFormRef,
                editRuleFormRef,
                reset,
                getFixedAssetCategoryList,
                changeFixedAssetCategoryStatus,
                handleSizeChange,
                handleCurrentChange,
                searchFixedAssetCategory,

                updateFixedAssetCategory,
                editFixedAssetCategory,
                deleteFixedAssetCategory,
                selectParentChange,
                getParentCategoryList,
                addCategory,
                openAdd,
                addCloseDialog,
                editCloseDialog,
            };
        },
    };
</script>
