<template>
  <li class="border-l-2 ml-2 pl-1 pt-1">
    <ul
      v-if="typeof value === 'object'"
      class="list-none"
    >
      <a
        v-if="typeof value === 'object'"
        @click="isOpened = !isOpened"
        class="flex items-center block select-none"
      >
        <FolderMinusIcon
          v-if="isOpened"
          size="1x"
          class="mr-2"
        />
        <FolderPlusIcon
          v-if="!isOpened"
          size="1x"
          class="mr-2"
        />
        {{ name }}
      </a>

      <SidebarTreeItem
        v-show="isOpened"
        v-for="(childValue, childKey) in value"
        :key="childKey"
        :name="childKey"
        :value="childValue"
        :path="`${path}.${childKey}`"
        class="pl-2"
      />
    </ul>

    <router-link
      v-else
      :to="{
        name: 'keyDetails',
        params: {
          key: path
        }
      }"
      class="flex items-center select-none"
    >
      <KeyIcon size="1x" class="mr-2" /> {{ name }}
    </router-link>
  </li>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'
import flat from 'flat'
import { KeyIcon, FolderMinusIcon, FolderPlusIcon } from 'vue-feather-icons'

export default createComponent({
  name: 'SidebarTreeItem',
  props: {
    path: String,
    name: String,
    value: [Object, String]
  },
  components: {
    KeyIcon,
    FolderMinusIcon,
    FolderPlusIcon
  },
  setup (props, { root }) {
    const isOpened = ref(false)

    return { isOpened }
  }
})
</script>
