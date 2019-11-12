<template>
  <div class="key-details flex flex-col overflow-y-auto">
    <header class="flex items-center">
      <div>
        <span class="text-gray-600 uppercase text-sm leading-none">
          Key
        </span>
        <h1 class="text-xl leading-none mb-6">
          {{ $route.params.key }}
        </h1>
      </div>

      <button class="bg-green-500 text-white py-2 px-4 ml-auto">
        SAVE
      </button>
    </header>

    <div class="text-gray-600 uppercase text-sm leading-none mb-3">
      Messages
    </div>
    <ul>
      <li
        v-for="locale in localeList"
        :key="locale"
        class="mb-4 uppercase"
      >
        {{ locale }}

        <textarea
          name=""
          id=""
          rows="2"
          class="w-full flex-1 block border-b mt-1"
          :value="flatMessagesLocales[locale][$route.params.key]"
        >
        </textarea>
      </li>
    </ul>

    <code>
      <pre>
        {{flatMessagesLocales}}
      </pre>
    </code>
  </div>
</template>

<script>
import { createComponent, computed, ref } from '@vue/composition-api'
import flat from 'flat'
import SidebarFooter from '@/components/SidebarFooter'

export default createComponent({
  name: 'Sidebar',
  components: {
    SidebarFooter
  },
  setup (props, { root }) {
    const locales = computed(() => root.$store.getters['selectedProject/locales'])
    const localesKeyList = computed(() => root.$store.getters['selectedProject/localesKeyList'])
    const localeList = computed(() => root.$store.getters['selectedProject/localeList'])
    const selectedLocale = ref(localeList.value[0])
    const flatMessagesLocales = computed(() => root.$store.getters['selectedProject/flatMessagesLocales'])

    return {
      locales,
      localesKeyList,
      localeList,
      selectedLocale,
      flatMessagesLocales
    }
  }
})
</script>
