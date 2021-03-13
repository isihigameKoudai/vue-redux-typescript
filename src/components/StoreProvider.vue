<template>
  <div class="store-provider">
    <slot :state="state.state" :actions="mapDispatchToProps" />
  </div>
</template>

<script lang="ts">
import Provider from '../modules/VueRedux'
import { defineComponent, reactive } from 'vue'

import store, { mapStateToProps, mapDispatchToProps } from '../store'

export default defineComponent({
  name: 'StoreProvider',
  components: {
    Provider
  },
  setup() {
    const state = reactive({
      state: store.getState()
    })

    store.subscribe(() => {
      state.state = store.getState()
      console.log(state.state.counter.counter);
    })
    
    return {
      state,
      mapStateToProps,
      mapDispatchToProps
    }
  }
})

</script>