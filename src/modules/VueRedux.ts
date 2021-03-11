import { defineComponent, SetupContext, h } from 'vue'

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
    console.log(props.mapDispatchToProps, props.mapStateToProps);
    
    const actions = props.mapDispatchToProps(props.store.dispatch)
    const state = props.mapStateToProps(props.store.getState())
    console.log(state, actions);
    
    return () => h('div', { class: 'provider' }, context.slots.default({ actions, state }))
  }
})