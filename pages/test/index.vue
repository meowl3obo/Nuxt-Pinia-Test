<template>
  <div>now count: {{ GetCount() }}</div>
  <button @click="SetCount(GetCount()+1)">SetCount</button>
  <NuxtLink to="/">前往 main</NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { DataStore } from '@/store/data'

export default defineComponent({
  setup() {
    const { SetCount, GetCount } = DataStore()

    return { SetCount, GetCount }
  },
})
</script>
