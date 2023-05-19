<template>
  <div bg-red text-20px v-for="(item,i) in list" :key="i">
   <span :style="{color: i==2 ? 'yellow' : ''}">{{item}}</span> 
  </div>
  <div v-if="isVisible">electronVueGone</div>
  <button type="button" @click="handle()">button</button>
</template>
<script setup>
    import { ref } from "vue";
    let isVisible = ref(true)
    let list = ['dog','cat','chicken','tiger']
    let handle = ()=>{
      isVisible.value = !isVisible.value
    }
</script>