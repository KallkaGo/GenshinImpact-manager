<template>
  <div class="menu">
    <div class="logo">
      <img class="img" src="@/assets/paimeng.png" alt="logo" />
      <span v-if="!isFold" class="title">派蒙走好运</span>
    </div>
    <el-menu class="el-menu-vertical-demo" background-color="#2d2d43" text-color="#b6b9c8" :collapse="isFold">
      <template v-for="(item, index) in menuList?.records">
        <el-sub-menu v-if="item.child" :index="String(item.id)">
          <template #title>
            <span>{{ item.menuName }}</span>
          </template>
          <template v-for="(subitem, index) in item.child ">
            <el-menu-item :index="String(subitem.id)" @click="handleClick(subitem)">{{ subitem.menuName }}</el-menu-item>
          </template>
        </el-sub-menu>

        <el-menu-item v-else :index="String(item.id)" @click="handleClick(item)">
          <span>{{ item.menuName }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { queryMenuList } from '@/request/module/main';
import { useMainStore } from '@/store/main'
import { useRouter } from 'vue-router';
import  {pathMapBreadcrumb} from '@/utils/menuPath'
import LocalCache from '@/utils/cache'
type Props = {
  isFold: boolean
}

const store = useMainStore()
const router = useRouter()

withDefaults(defineProps<Props>(), {
  isFold: false
})

const menuList = ref()

const getMenuList = async () => {
  const res = await queryMenuList()
  menuList.value = res.data
}


const handleClick = (Menuitem: any) => {
  console.log('@@@@', menuList.value.records)
  const menuBreadList = pathMapBreadcrumb(menuList.value.records,Menuitem)
  store.changecurMenu(menuBreadList)
  LocalCache.setCache('menuBreadList',menuBreadList)
  router.push({name: Menuitem.component ?? 'not-found'})

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
