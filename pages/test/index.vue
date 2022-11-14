<template>
  <div>now count: {{ data }}</div>
  <button @click="setCount(data+1)">SetCount</button>
  <NuxtLink to="/">前往 main</NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { DataStore } from '@/store/data'

export default defineComponent({
  setup() {
    const { SetCount, GetCount } = DataStore()
    const data = computed(() => GetCount())

    const setCount = (newVal: number) => {
      SetCount(newVal);
    }

    return { data, setCount }
  },
})
</script>
