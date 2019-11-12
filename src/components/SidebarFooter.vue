<template>
  <div>
    <h3 class="text-gray-500 uppercase text-sm">
      Locales list
    </h3>

    <ul class="mh-48 overflow-y-auto">
      <pre><code>{{localeList}}</code></pre>

      <li
        v-for="locale in progress"
        :key="locale.name"
        class="mb-1 text-sm"
      >
        <header class="flex uppercase">
          {{ locale.name }}

          <span class="ml-auto">
            {{ locale.progress.toFixed(0) }}%
          </span>
        </header>

        <div class="h-2 bg-gray-300">
          <div
            class="h-2 bg-red-500"
            :class="{
              'bg-orange-500': locale.progress > 50,
              'bg-green-500': locale.progress > 80
            }"
            :style="{ width: `${locale.progress}%` }"
          ></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { createComponent, computed, ref } from '@vue/composition-api'
import flat from 'flat'
import { Locale } from '@/entity/Locale'

export default createComponent({
  name: 'SidebarFooter',
  props: {
    locales: {
      type: Object,
      default: {}
    },
    localesKeyList: {
      type: Array,
      default: []
    }
  },
  setup (props, { root }) {
    const localeList = ref<Locale[]>([])

    const params = { projectId: root.$route.params.projectId }
    root.$api
      .locales({ params })
      .then((result: Locale[]) => {
        localeList.value = result
      })

    const progress = computed(() => Object.entries(props.locales)
      .map(([name, localeValue]) => {
        const messages: any = flat(localeValue)

        const totalKeysAmount = props.localesKeyList.length
        const localeKeysAmount = Object.entries(messages).filter(([key, value]: any[]) => value).length
        const progress = (localeKeysAmount / totalKeysAmount) * 100

        return { name, progress }
      }))

    return { progress, localeList }
  }
})
</script>
