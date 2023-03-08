<template>
  <div class="header-container">
    <div @click="handleFold" class="container-icon">
      <el-icon class="iconStyle" v-if="!isFold">
        <ArrowLeftBold />
      </el-icon>
      <el-icon class="iconStyle" v-else>
        <ArrowRightBold />
      </el-icon>
    </div>
    <div class="content">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion management</el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar :size="40" :src="img" />
            <span class="username">kallka</span>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="handleExit">
                <span>退出登录</span>
              </el-dropdown-item>
              <el-dropdown-item divided>用户信息</el-dropdown-item>
              <el-dropdown-item>系统管理</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import router from '@/router';
import LocalCache from '@/utils/cache'


const img = ref()

const handleExit = () => {
  LocalCache.deleteCache('token')
  router.back()
}

const isFold = ref(false)
const emit= defineEmits(['foldChange'])

const handleFold = () => {
  isFold.value = !isFold.value
  emit('foldChange',isFold.value)
}

</script>

<style lang="scss" scoped>
.container-icon{
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
}
.header-container {
  display: flex;
  height: 100%;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  flex: 1;

}

.el-avatar {
  vertical-align: middle;
  margin-right: 10px;
}

.username {
  color: #303133;
  font-size: 16px;
  font-weight: 700;
}
</style>
