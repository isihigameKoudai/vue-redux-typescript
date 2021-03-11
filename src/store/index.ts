import { createStore, combineReducers, bindActionCreators } from 'redux'
import CounterReducer, { CounterActions } from './modules/counter'

// 全てのアクションを
const actions = {
  ...CounterActions
}

export const mapStateToProps = (state) => ({
  ...state
})

export const mapDispatchToProps = (dipatch) => ({
  actions: bindActionCreators(actions, dipatch)
})

const reducer = combineReducers({
  counter: CounterReducer
})

export default createStore(reducer)
