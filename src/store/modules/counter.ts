import { Action, ActionCreatorsMapObject, ActionCreator, Reducer } from 'redux'

export interface ICounterState {
  counter: number
}

// State
const initialState: ICounterState = {
  counter: 0
}

// ActionTypes
const INCREMENT = 'INCREMENT' as const
const DECREMENT = 'DECREMENT' as const
const RESET = 'RESET' as const
type CounterActionType = typeof INCREMENT | typeof DECREMENT | typeof RESET
type CounterAction = Action<CounterActionType>

// Action Creator Type
export interface ICounterActionCreators extends ActionCreatorsMapObject<CounterAction> {
  increment: ActionCreator<CounterAction>
  decrement: ActionCreator<CounterAction>
  reset: ActionCreator<CounterAction>
}

// Action Creator
export const CounterActions: ICounterActionCreators = {
  increment: () => ({
    type: INCREMENT
  }),
  decrement: () => ({
    type: DECREMENT
  }),
  reset: () => ({
    type: RESET
  })
}

// Reducer
const CounterReducer: Reducer<ICounterState, CounterAction> = (state = initialState, action) => {
  
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        counter: state.counter + 1
      }
    }
    case DECREMENT: {
      return {
        ...state,
        counter: state.counter - 1
      }
    }
    case RESET: {
      return {
        ...state,
        counter: 0
      }
    }
    default: {
      return state
    }
  }
}

export default CounterReducer

