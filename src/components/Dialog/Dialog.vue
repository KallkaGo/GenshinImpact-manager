<template>
  <el-dialog 
  class="dialogClass"
  :modelValue="dialogVisible" 
  width="40%"   
  @open="dialogOpenCallback"
   @close="dialogCloseCallback"  
   :showClose="false"  
   :title="title"   
   :close-on-click-modal="false" 
   :close-on-press-escape="false"
   >
    <slot></slot>
    <template #footer>
      <slot name="foot"></slot>
    </template>

  </el-dialog>
</template>

<script setup lang="ts">


type Props = {
  title:string,
  dialogVisible:boolean,
  dialogOpenCallback?:Function,
  dialogCloseCallback?:Function
}

withDefaults(defineProps<Props>(),{
  dialogVisible:false,
  handleClose:()=>{},
  dialogOpenCallback:()=>{},
  dialogCloseCallback:()=>{}
})

</script>

<style lang="scss"  scoped>
  
</style>
