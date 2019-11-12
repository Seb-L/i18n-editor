<template>
  <div class="flex h-full overflow-hidden w-full">
    <Sidebar />
    <router-view class="container p-6" />
  </div>
</template>

<script>
import { createComponent, computed, reactive } from '@vue/composition-api'
import flat from 'flat'
import Sidebar from '@/components/Sidebar'

export default createComponent({
  name: 'Project',
  components: {
    Sidebar
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.sidebar{
  @apply bg-white flex flex-col;
  width: 300px;
}
</style>
