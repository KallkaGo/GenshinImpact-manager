<template>
  <div class="container">
    <el-form :model="form" label-width="80px" class="Cmform" label-position="left">
      <el-row>
        <el-form-item label="菜单ID">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item class="btn">
          <el-button @click="handleSearch">查询</el-button>
          <el-button type="primary" @click="handleAdd">新增</el-button>
        </el-form-item>
      </el-row>
    </el-form>
    <el-table :data="tableData" style="width: 100%" border highlight-current-row :height="maxheight" row-key="id"
      :tree-props="{ children: 'child', hasChildren: 'hasChildren' }">
      <el-table-column align="center" prop="id" label="ID" />
      <el-table-column align="center" prop="menuName" label="菜单名字" w />
      <el-table-column align="center" prop="routerPath" label="路由地址" />
      <el-table-column align="center" prop="remark" label="备注" />
      <el-table-column align="center" label="操作" width="150px">
        <template #default>
          <div class="btngroup">
            <el-button type="primary" size="small">编辑</el-button>
            <el-button type="danger" size="small">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="pagination" background layout="->,prev, pager, next" :total="1" />
  </div>
  <Dialog :title="dialogType" :dialogVisible="showDialog"  @cancelDialog="handleCancel" ></Dialog>
</template>

<script setup lang="ts">
import { queryMenuList, queryMenuListById } from '@/request/module/main'
import generateTree from '@/utils/generateTree'
import Dialog from './cpns/dialog.vue'

const form = ref<any>({
  name: ''
})


const dialogType = ref('')

const showDialog = ref(false)

const tableData = ref<Array<any>>([])

const maxheight = ref()

const handleSearch = async () => {
  const res = await queryMenuListById(form.value.name)
  if (res.data) {
    const searcResult = [{...res.data}]
    console.log(searcResult);
    tableData.value = searcResult
  }
}

const handleAdd = () => {
  dialogType.value = 'ADD'
  showDialog.value = !showDialog.value
}

const CalcTableHeight = () => {
  let viewHeight = window.innerHeight
  let pageHeaderHeight = 60
  let formSearchHeight = 85
  let paginationHeight = 82
  maxheight.value = viewHeight - pageHeaderHeight - formSearchHeight - paginationHeight + 'px'

}

const queryMenuListData = async () => {
  const res = await queryMenuList()
  if (res.data) {
    const menuList = generateTree(res.data.records)
    tableData.value = menuList
  }
}

const handleCancel =(payload:any)=>{
  if(!payload) showDialog.value = !showDialog.value
}


onMounted(() => {
  CalcTableHeight()
  queryMenuListData()
})

</script>

<style lang="scss" scoped>
.container {
  background-color: white;
  padding: 20px 15px 15px 15px;
  box-sizing: border-box;
}

.pagination {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
