<!--
 * @Author: ZH
 * @Date: 2023-02-05 12:07:55
 * @LastEditTime: 2023-02-05 13:21:52
 * @LastEditors: ZH
 * @Description: 
-->
<template>
  <div class="container">
    <el-container class="main-container">
      <el-aside :width="isCollapse ? '100px' : '250px'">
        <pageMenu :isFold="isCollapse"></pageMenu>
      </el-aside>
      <el-container class="main-page">
        <el-header>
          <pageHeader @fold-change="handleFoldcallback"></pageHeader>
        </el-header>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import pageMenu from '@/components/Menu'
import pageHeader from '@/components/Header'
import { useMainStore } from '@/store/main'

const store = useMainStore()


const isCollapse = ref(false)

const handleFoldcallback = (isFold: boolean) => {
  isCollapse.value = isFold
  store.changeisFold(isCollapse.value)
}


</script>

<style lang="scss" scoped>
.el-aside {
  transition: width 0.3s linear;
  overflow-x: hidden;
  overflow-y: auto;
}

.container {
  height: 100%;
}

.main-container {
  height: 100%;
}

.main-page {
  height: 100%;
}

.main {
  background-color: #f5f8fa;
  padding: 15px;
}
</style>
