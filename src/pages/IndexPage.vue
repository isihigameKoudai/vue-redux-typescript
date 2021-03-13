<template>
  <div class="index-page">
    <h1>counter</h1>
    <button @click="onIncrement">+1</button>
    <button @click="onDecrement">-1</button>
    <button @click="onReset">reset</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '../store'

export default defineComponent({
  name: 'IndexPage',
  props: {
    state: {
      type: Object,
      default: () => ({})
    },
    actions: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    // console.log(props.actions.actions, props.state, props.state.counter.counter);
    // const count = computed(() => props.state.counter.counter)
    // store.subscribe(() => {
    //   console.log('subscribe');
    //   console.log(store.getState());      
    // })
    console.log(props.actions.actions);
    
    return {
      // count,
      onIncrement() {
        props.actions.actions.decrement()
        // store.dispatch({ type: 'INCREMENT' })
      },
      onDecrement() {
        props.actions.actions.decrement()
        // store.dispatch({ type: 'DECREMENT' })
      },
      onReset() {
        props.actions.actions.reset()
        // store.dispatch({ type: 'RESET' })
      }
    }
  }
})
</script>