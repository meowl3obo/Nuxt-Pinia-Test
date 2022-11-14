<template>
  <div>now count: {{ data }}</div>
  <div>map test: {{ test.get('a') }}</div>
  <button @click="setCount(data+1)">SetCount</button>
  <button @click="getData(data)">TestGetData</button>
  <button @click="postData(data)">TestPostData</button>
  <button @click="test.set('a','c')">ChangeTest</button>
  <button @click="test.clear()">ClearTest</button>
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
    const test = reactive(new Map<string, string>())

    test.set('a', 'b')

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

    watch(test, () => {
      console.log(test)
    }, { deep: true })

    return { data, test, setCount, getData, postData }
  },
})
</script>
