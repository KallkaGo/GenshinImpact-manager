<template>
  <div class="dialogContainer">
    <commonDialog :title="dialogType" :dialog-visible="dialogVisible" :on-close="handleClose" :on-open="handleOnpen">
      <template #default>
        <el-form :inline="true" :model="formData" label-width="80px" label-position="left" :rules="rules" ref="formRef">
          <el-row>
            <el-col :span="12">
              <el-form-item label="菜单名称" prop="menuName">
                <el-input size="small" v-model="formData.menuName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="父级ID" prop="parentId">
                <el-input size="small" v-model="formData.parentId"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="路由地址" prop="routerPath">
                <el-input size="small" v-model="formData.routerPath"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="组件" prop="component">
                <el-input size="small" v-model="formData.component"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="图标" prop="icon">
                <el-input size="small" v-model="formData.icon"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="权限编码" prop="permissionKey">
                <el-input size="small" v-model="formData.permissionKey"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-form-item label="备注">
              <el-input size="small" v-model="formData.remark" :rows="2" type="textarea"></el-input>
            </el-form-item>
          </el-row>
        </el-form>
      </template>
      <template #foot>
        <el-button type="primary" @click="hanldeConfirm(title === 'ADD' ? 1 : 0)">确定</el-button>
        <el-button @click="hanldeCancel">取消</el-button>
      </template>
    </commonDialog>
  </div>
</template>

<script setup lang="ts">
import commonDialog from '@/components/Dialog/Dialog.vue'
import { addMenu, updateMenu } from '@/request/module/main'
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus';

/* 
Ref
*/
const formRef = ref<FormInstance>()

/* 
Props
*/

type Props = {
  title: string,
  dialogVisible: boolean,
  rowData: any
}
const props = withDefaults(defineProps<Props>(), {
  dialogVisible: false,
})

/* 
Form
*/

const formData = ref<any>({
  menuName: '',
  parentId: '',
  routerPath: '',
  component: '',
  permissionKey: '',
  remark: ''
})

const rules = reactive<FormRules>({
  menuName: [
    { required: true, message: 'Require', trigger: 'blur' },
  ],
  parentId: [
    {
      required: true,
      message: 'Require',
      trigger: 'change',
    },
  ],
  routerPath: [
    {
      required: true,
      message: 'Require',
      trigger: 'change',
    },
  ],
  component: [
    {
      required: true,
      message: 'Require',
      trigger: 'change',
    },
  ],
  permissionKey: [
    {
      required: true,
      message: 'Require',
      trigger: 'change',
    },
  ],
})



/* 
Modal logic
*/

const hanldeConfirm = async (flag: number) => {
  if (!formRef.value) return
  await formRef.value.validate(async (valid: boolean) => {
    try {
      if (valid) {
        if (flag) {
          const params = { ...formData.value }
          const res = await addMenu(params)
          if (res.code === 200) {
            ElMessage({
              type: 'success',
              message: '成功'
            })
            emit('cancelDialog', true)
          }
        } else {
          const params = toRaw(props.rowData)
          const res = await updateMenu({ ...params, ...formData.value })
          if (res.code === 200) {
            ElMessage({
              type: 'success',
              message: '成功'
            })
            emit('cancelDialog', true)
          }
        }
      }
    } catch (error: any) {
      ElMessage({
        type: 'error',
        message: error
      })
    }
  })
}

const emit = defineEmits(['cancelDialog'])
const hanldeCancel = () => {
  emit('cancelDialog')
}


const handleOnpen = () => {
  formRef.value!.resetFields()
  if (props.title === 'EDIT') {
    formData.value = { ...props.rowData }
  } else {
    formData.value = {}
  }
}

const handleClose = () => {

}

const dialogType = computed(() => {
  if (props.title === 'ADD') {
    return '新增菜单'
  } else {
    return '编辑菜单'
  }
})




</script>

<style  lang="scss" scoped>
:deep(.el-form) {
  margin-left: 85px;
}

.el-textarea {
  width: 482px;
}
</style>
