<template>
  <div class="dialogContainer">
    <commonDialog :title="dialogType" :dialog-visible="dialogVisible">
      <template #default>
        <el-form :inline="true" :model="formData"  label-width="80px" label-position="left"  :rules="rules" >
          <el-row>
            <el-col :span="12">
              <el-form-item label="菜单名称" prop="menuName" >
                <el-input size="small" v-model="formData.menuName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="父级ID"  prop="parentID" >
                <el-input size="small" v-model="formData.parentID"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="路由地址" prop="path" >
                <el-input size="small" v-model="formData.path"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="组件" prop="component" >
                <el-input size="small" v-model="formData.component"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="图标" prop="icon" >
                <el-input size="small" v-model="formData.icon"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="权限编码" prop="permissionKey" >
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
        <el-button type="primary" @click="hanldeConfirm">确定</el-button>
        <el-button @click="hanldeCancel">取消</el-button>
      </template>
    </commonDialog>
  </div>
</template>

<script setup lang="ts">
import commonDialog from '@/components/Dialog/Dialog.vue'
import type { FormInstance, FormRules } from 'element-plus'
/* 
Props
*/

type Props = {
  title: string,
  dialogVisible: boolean,
}
const props = withDefaults(defineProps<Props>(), {
  dialogVisible: false,
})

/* 
Form
*/

const formData = ref<any>({
  menuName: '',
  parentID: '',
  path: '',
  component: '',
  permissionKey: '',
  remark: ''
})

const rules = reactive<FormRules>({
  menuName: [
    { required: true, message: 'Require', trigger: 'blur' },
  ],
  parentID: [
    {
      required: true,
      message: 'Require',
      trigger: 'change',
    },
  ],
  path: [
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
  icon: [
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

const hanldeConfirm = () => {

}

const emit = defineEmits(['cancelDialog'])
const hanldeCancel = () => {
  emit('cancelDialog')
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
.el-textarea{
  width: 482px;
}
</style>
