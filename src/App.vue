<template>
  <div class="flex h-full overflow-hidden">
    <router-view />
  </div>
</template>

<script>
import { createComponent, computed, reactive } from '@vue/composition-api'

export default createComponent({
  name: 'app',
  setup () {
    return {}
  }
})
</script>

<style lang="scss">
html,
body,
#app{
  @apply h-full bg-gray-200;
}
a{
  @apply cursor-pointer;
}
</style>
