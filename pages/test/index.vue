<template>
  <div>now count: {{ data }}</div>
  <button @click="setCount(data+1)">SetCount</button>
  <button @click="getData(data)">TestGetData</button>
  <button @click="postData(data)">TestPostData</button>
  <NuxtLink to="/">前往 main</NuxtLink>
</template>

<script lang="ts">
import { DataStore } from '@/store/data'

export default defineComponent({
  setup() {
    definePageMeta({
      middleware: ['test']
    })
    const { SetCount, GetCount } = DataStore()
    const data = computed(() => GetCount())

    const setCount = (newVal: number) => {
      SetCount(newVal);
    }

    const getData = async () => {
      console.log(data)
      const query = { data: data.value }
      const response = await useFetch('/api/test', { method: 'GET', params: query, initialCache: false })
      console.log(response.data.value)
    }

    const postData = async () => {
      console.log(data)
      const body = { data: data.value }
      const response = await useFetch('/api/test', { method: 'POST', body: body, initialCache: false })
      console.log(response.data.value)
    }

    return { data, setCount, getData, postData }
  },
})
</script>
