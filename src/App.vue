<template>
  <StoreProvider>
    <template v-slot="{ state, actions }">
      <div>{{ state.counter.counter }}</div>
      <IndexPage :actions="actions" />
      <!-- <IndexPage :state="state" :actions="actions" /> -->
    </template>
  </StoreProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StoreProvider from './components/StoreProvider.vue'
import IndexPage from './pages/IndexPage.vue'

export default defineComponent({
  components: {
    StoreProvider,
    IndexPage
  }
})
</script>
