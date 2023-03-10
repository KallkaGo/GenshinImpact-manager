<template>
  <div class="menu">
    <div class="logo">
      <img class="img" src="@/assets/paimeng.png" alt="logo" />
      <span v-if="!isFold" class="title">派蒙走好运</span>
    </div>
    <el-menu class="el-menu-vertical-demo" background-color="#2d2d43" text-color="#b6b9c8" :collapse="isFold">
      <CmMenu :isFold="isFold" :menuList="menuList" />
    </el-menu>
  </div>
</template>

<script setup lang="ts"  name="Treeitem" >
import CmMenu from './CmMenu.vue'
import { queryUserInfo } from '@/request/module/login'
import { useMainStore } from '@/store/main'
import { useLoginStore } from '@/store/login'
type Props = {
  isFold: boolean
}

const Mainstore = useMainStore()
const Loginstore = useLoginStore()

withDefaults(defineProps<Props>(), {
  isFold: false
})

const menuList = ref()

const getMenuList = async () => {
  try {
    const result = await queryUserInfo()
    if (result.data) {
      Loginstore.changeUserInfo(result.data.roles[0])
      const menuData = result.data.menus
      Mainstore.changeAllMenu(menuData)
      menuList.value = menuData
    }
  } catch (e) {
    console.error(e)
  }
}
onMounted(() => {
  getMenuList()
})
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
  background-color: #2d2d43;
}

.img {
  height: 100px;
  width: 100px;
  -webkit-user-drag: none;
}

.logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;

  .title {
    color: #b6b9c8;
    font-size: 20px;
    font-weight: 600;
    font-family: 'ZCOOL KuaiLe', sans-serif;
    user-select: none;
    transition: all 0.3s linear;
    white-space: nowrap;
  }
}

.el-menu {
  border-right: none;
}
</style>
