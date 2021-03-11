<template>
  <StoreProvider>
    <template v-slot="{ state, actions }">
      {{ state }} {{ actions }}
    </template>
  </StoreProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StoreProvider from './components/StoreProvider.vue'

export default defineComponent({
  components: {
    StoreProvider
  }
})
</script>
