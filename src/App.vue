<template>
  <div class="flex h-full overflow-hidden">
    <div class="sidebar">
      <header class="text-center border-b">
        LOGO
      </header>

      <nav class="p-4">
        <h3 class="text-gray-500 uppercase text-sm">Keys</h3>

        <ul
          v-for="localeKey in localesKeyList"
          :key="localeKey"
          class="overflow-y-auto"
        >
          <li>{{ localeKey }}</li>
        </ul>
      </nav>

      <div class="p-4 mt-auto border-t">
        <h3 class="text-gray-500 uppercase text-sm">Locales list</h3>

        <ul class="h-48 overflow-y-auto">
          <li
            v-for="locale in localeList"
            :key="locale.name"
            class="mb-1 text-sm"
          >
            <header class="flex uppercase">
              {{ locale.name }}
              <span class="ml-auto">{{ locale.progress.toFixed(0) }}%</span>
            </header>

            <div class="h-2 bg-gray-300">
              <div
                class="h-2 bg-red-500"
                :class="{
                  'bg-orange-500': locale.progress > 50,
                  'bg-green-500': locale.progress > 80
                }"
                :style="{ width: `${locale.progress}%` }"
              >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <router-view class="container p-4" />
  </div>
</template>

<script>
import { createComponent, computed, reactive } from '@vue/composition-api'
import flat from 'flat'

export default createComponent({
  name: 'app',
  setup () {
    const locales = reactive({
      en: {
        intro: '',
        group: {
          title: 'test'
        }
      },
      fr: {
        intro: 'test',
        body: 'bdsfkbskf'
      },
      it: {
        intro: 'test',
        body: 'bdsfkbskf'
      }
    })

    const localesKeyList = computed(() => Object.values(locales)
      .reduce((list, value) => [...list, ...Object.keys(flat(value))], [])
      .reduce((list, key) => {
        if (!list.includes(key)) {
          list.push(key)
        }
        return list
      }, []))

    const localeList = computed(() => Object.entries(locales)
      .map(([name, localeValue]) => {
        const messages = flat(localeValue)

        const totalKeysAmount = localesKeyList.value.length
        const localeKeysAmount = Object.entries(messages).filter(([key, value]) => value).length
        const progress = (localeKeysAmount / totalKeysAmount) * 100

        return { name, progress, messages }
      }))

    return {
      locales,
      localeList,
      localesKeyList
    }
  }
})
</script>

<style lang="scss">
html,
body,
#app{
  @apply h-full bg-gray-200;
}
.sidebar{
  @apply bg-white flex flex-col;
  width: 300px;
}
</style>
