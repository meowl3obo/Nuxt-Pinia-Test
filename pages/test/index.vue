<template>
  <div>
    <div>now count: {{ data }}</div>
    <button @click="setCount(data + 1)">SetCount</button>
  </div>
  <div>
    <div>map test: {{ test.get("a") }}</div>
    <div>deep map: {{ tt.get("a").get("a") }}</div>
    <button @click="test.set('a', 'c')">ChangeTest</button>
    <button @click="test.clear()">ClearTest</button>
  </div>
  <div>
    <div>res: {{ res }}</div>
    <button @click="getData(data)">TestGetData</button>
    <button @click="postData(data)">TestPostData</button>
  </div>

  <NuxtLink to="/">前往 main</NuxtLink>
</template>

<script lang="ts">
import { DataStore } from "@/store/data";

export default defineComponent({
  setup() {
    definePageMeta({
      middleware: ["test"],
    });
    const { SetCount, GetCount } = DataStore();
    const data = computed(() => GetCount());
    const test = reactive(new Map<string, string>());
    const tt = reactive(new Map<string, Map<string, string>>());
    const res = ref<any>();

    test.set("a", "b");
    tt.set("a", test);

    const setCount = (newVal: number) => {
      SetCount(newVal);
    };

    const getData = async () => {
      console.log(data);
      const query = { data: data.value };
      const response = await useFetch("/api/test", {
        method: "GET",
        params: query,
        initialCache: false,
      });
      res.value = response.data.value
    };

    const postData = async () => {
      console.log(data);
      const body = { data: data.value };
      const response = await useFetch("/api/test", {
        method: "POST",
        body: body,
        initialCache: false,
      });
      res.value = response.data.value
    };

    watch(
      test,
      () => {
        console.log(test);
      },
      { deep: true }
    );

    return { data, test, tt, res, setCount, getData, postData };
  },
});
</script>
