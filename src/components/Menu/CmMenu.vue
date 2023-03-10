<template>
  <template v-for="(item, index) in menuList" :key="index">
      <el-sub-menu v-if="item.child" :index="String(item.id)"  :key="item.id" >
        <template #title>
          <span>{{ item.menuName }}</span>
        </template>
         <MenuTree :menuList="item.child"  :is-fold="isFold" />
      </el-sub-menu>
      <el-menu-item v-else :index="String(item.id)" @click="handleClick(item)" :key="index">
        <span>{{ item.menuName }}</span>
      </el-menu-item>
    </template>
</template>


<script lang="ts">
export default{
  name:'MenuTree'
}
</script>


<script setup lang="ts" >
import { useMainStore } from '@/store/main'
import { useRouter } from 'vue-router';
import { pathMapBreadcrumb } from '@/utils/menuPath'
import LocalCache from '@/utils/cache'

type Porps = {
  isFold: boolean
  menuList: Array<any>
}

const router = useRouter()

const Mainstore = useMainStore()


withDefaults(defineProps<Porps>(), {
  isFold: false,
  menuList: () => []
})

const handleClick = (Menuitem: any) => {

  const menuBreadList = pathMapBreadcrumb(Mainstore.allMenu, Menuitem)
  console.log('menuBreadList', menuBreadList);
  Mainstore.changecurMenu(menuBreadList)
  LocalCache.setCache('menuBreadList', menuBreadList)
  console.log(Menuitem.component);
  
  // router.push({ name: Menuitem.path })
}

</script>

<style scoped></style>
