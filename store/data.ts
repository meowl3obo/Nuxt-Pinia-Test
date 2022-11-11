import { defineStore } from 'pinia'

export const DataStore = defineStore('data', () => {
  const count = ref<number>(0)

  const GetCount = () => {
    return count.value
  }

  const SetCount = (val: number) => {
    count.value = val
  }

  return { GetCount, SetCount }
})