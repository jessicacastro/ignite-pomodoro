import { Cycle } from '../../contexts'

export enum ActionTypes {
  ADD_CYCLE = 'ADD_CYCLE',
  STOP_CYCLE = 'STOP_CYCLE',
  FINISH_CYCLE = 'FINISH_CYCLE',
}

export const addNewCycleAction = (newCycle: Cycle) => {
  return {
    type: ActionTypes.ADD_CYCLE,
    payload: newCycle,
  }
}

export const stopCurrentCycleAction = () => {
  return {
    type: ActionTypes.STOP_CYCLE,
  }
}

export const markCurrentCycleAsFinishedAction = () => {
  return {
    type: ActionTypes.FINISH_CYCLE,
  }
}
