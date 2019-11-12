<template>
  <nav>
    <h3 class="text-gray-500 uppercase text-sm">
      {{ selectedProject.name }} Keys
    </h3>

    <ul class="overflow-y-auto list-none flex-1">
      <SidebarTreeItem
        v-for="(value, key) in localeAsTree"
        :key="key"
        :name="key"
        :value="value"
        :path="key"
        class="!pl-0 !ml-0 !border-0"
      />
    </ul>
  </nav>
</template>

<script lang="ts">
import { createComponent, computed, ref } from '@vue/composition-api'
import deepmerge from 'deepmerge'
import { KeyIcon, FolderIcon } from 'vue-feather-icons'
import SidebarTreeItem from '@/components/SidebarTreeItem.vue'
import promiseIpc from 'electron-promise-ipc'
import { Project } from '@/entity/Project'

export default createComponent({
  name: 'SidebarTree',
  props: {
    localesKeyList: Array
  },
  components: {
    KeyIcon,
    FolderIcon,
    SidebarTreeItem
  },
  setup (props, { root }) {
    const localeAsTree = computed(() => deepmerge.all(Object.values(root.$store.getters['selectedProject/locales'])))
    const selectedProject = ref<Project>({})

    const params = { id: Number(root.$route.params.projectId) }
    root.$api
      .projects({ params })
      .then((result: Project[]) => {
        selectedProject.value = result[0]
      })
      .catch((e: any) => console.error(e))

    return { localeAsTree, selectedProject }
  }
})
</script>
