<template>
  <div class="sidebar">
    <header class="flex text-center border-b py-2 px-4 pl-2">
      <router-link
        :to="{ name: 'home' }"
        class="flex items-center text-gray-500 hover:text-black uppercase text-sm"
      >
        <ChevronLeftIcon size="1x" class="mr-1" /> Projects
      </router-link>

      <div class="ml-auto">
        LOGO
      </div>
    </header>

    <SidebarTree
      :locales-key-list="localesKeyList"
      class="p-4 flex flex-col flex-1 overflow-hidden"
    />

    <SidebarFooter
      :locales="locales"
      :locales-key-list="localesKeyList"
      class="p-4 mt-auto border-t"
    />

    <div class="border-t flex text-xs">
      <button class="p-3 border-r flex-1 uppercase">
        Import from xlsx
      </button>
      <button class="p-3 flex-1 uppercase">
        Export as xlsx
      </button>
    </div>
  </div>
</template>

<script>
import { createComponent, computed, reactive } from '@vue/composition-api'
import flat from 'flat'
import { KeyIcon, FolderIcon, ChevronLeftIcon } from 'vue-feather-icons'
import SidebarTree from '@/components/SidebarTree'
import SidebarFooter from '@/components/SidebarFooter'

export default createComponent({
  name: 'Sidebar',
  components: {
    KeyIcon,
    FolderIcon,
    ChevronLeftIcon,
    SidebarTree,
    SidebarFooter
  },
  setup (props, { root }) {
    const locales = computed(() => root.$store.getters['selectedProject/locales'])
    const localesKeyList = computed(() => root.$store.getters['selectedProject/localesKeyList'])

    return {
      locales,
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
  @apply bg-white flex flex-col border-r;
  flex: 0 0 300px;
}
</style>
