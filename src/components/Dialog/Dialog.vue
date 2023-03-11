<template>
  <el-dialog class="dialogClass" :modelValue="dialogVisible" width="40%" @open="onOpen" @close="onOpen" :showClose="false"
    :title="title" :close-on-click-modal="false" :close-on-press-escape="false">
    <slot></slot>
    <template #footer>
      <slot name="foot"></slot>
    </template>

  </el-dialog>
</template>

<script setup lang="ts">


type Props = {
  title: string,
  dialogVisible: boolean,
  onOpen: Function,
  onClose: Function
}

withDefaults(defineProps<Props>(), {
  dialogVisible: false,
  handleClose: () => { },
  Onpen:()=>{},
  OnClose:()=>{}
})

</script>

<style lang="scss"  scoped></style>
