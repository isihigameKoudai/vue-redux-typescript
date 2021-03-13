import { defineComponent, SetupContext, h, reactive } from 'vue'

export default defineComponent({
  name: 'Provider',
  props: {
    mapDispatchToProps: {
      required: false,
      type: Function,
      default: () => {}
    },
    mapStateToProps: {
      required: false,
      type: Function,
      default: () => {}
    },
    store: {
      required: true,
      type: Object
    }
  },
  setup(props, context: SetupContext) {
    // const state = reactive(props.store.getState())
    props.store.subscribe(() => {
      props.store.getState()
    })
    const actions = props.mapDispatchToProps(props.store.dispatch)
    const state = props.mapStateToProps(props.store.getState())
    return () => h('div', { class: 'provider' }, context.slots.default({ state, actions }))
  }
})