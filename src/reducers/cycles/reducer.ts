import { produce } from 'immer'
import { Cycle } from '../../contexts'
import { ActionTypes } from './actions'

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

interface CyclesActions {
  type: ActionTypes
  payload?: Cycle
}

export const cyclesReducer = (state: CyclesState, action: any) => {
  const { type, payload } = action

  switch (type) {
    case ActionTypes.ADD_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(payload)
        draft.activeCycleId = payload.id
      })
    case ActionTypes.STOP_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )
      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].stopDate = new Date()
      })
    }
    case ActionTypes.FINISH_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }
    default: // this is the default case
      return state
  }
}
