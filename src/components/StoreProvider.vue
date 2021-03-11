<template>
  <Provider
    :map-dispatch-to-props="mapDispatchToProps"
    :map-state-to-props="mapStateToProps"
    :store="store"
  >
    <template v-slot:default="{ state, actions }">
      <slot :state="state" :actions="actions" />
    </template>
  </Provider>
</template>

<script lang="ts">
import Provider from '../modules/VueRedux'
import { defineComponent } from 'vue'

import store, { mapStateToProps, mapDispatchToProps } from '../store'

export default defineComponent({
  name: 'StoreProvider',
  components: {
    Provider
  },
  setup() {
    
    return {
      store,
      mapStateToProps,
      mapDispatchToProps
    }
  }
})

</script>