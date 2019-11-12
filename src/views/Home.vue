<template>
  <div class="home w-full flex flex-col overflow-y-hidden">
    <header class="text-center border-b py-2 bg-white">
      LOGO
    </header>

    <section class="flex flex-col flex-1 overflow-y-hidden">
      <h3 class="text-gray-500 uppercase text-sm px-8 py-3">
        Projects
      </h3>

      <ul class="overflow-y-auto px-8">
        <li
          v-for="(project, index) in projects"
          :key="index"
          class="flex items-center bg-white border-b leading-none mb-1"
        >
          <div class="py-2 px-4">
            <div>
              {{ project.name }}
            </div>

            <div class="italic text-gray-500 text-sm">
              path/path/path
            </div>
          </div>

          <div class="ml-auto">
            <router-link
              :to="{
                name: 'project',
                params: { projectId: project.id }
              }"
              class="border-l py-2 px-4 text-sm"
            >
              OPEN
            </router-link>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { WebContents } from 'electron'
import { createComponent, computed, ref } from '@vue/composition-api'
import promiseIpc from 'electron-promise-ipc'
import { Project } from '@/entity/Project'

export default createComponent({
  name: 'home',
  setup (props, { root }) {
    const projects = ref<Project[]>([])

    root.$api
      .projects()
      .then((result: Project[]) => {
        projects.value = result
      })
      .catch((e: any) => console.error(e))

    return { projects }
  }
})
</script>
