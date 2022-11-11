<template>
  <div>now count: {{ GetCount() }}</div>
  <NuxtLink to="/test">前往 test</NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { DataStore } from '@/store/data'

export default defineComponent({
  setup() {
    const { GetCount } = DataStore()

    return { GetCount }
  },
})
</script>