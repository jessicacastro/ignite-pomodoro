import React, { createContext, useEffect, useReducer, useState } from 'react'
import {
  addNewCycleAction,
  markCurrentCycleAsFinishedAction,
  stopCurrentCycleAction,
} from '../reducers/cycles/actions'
import { cyclesReducer } from '../reducers/cycles/reducer'
import { retriveCyclesStateFromLocalStorage } from '../utils/retrieve-cycles-state-from-local-storage'
import { calculateAmountSecondsPassed } from '../utils/calculate-amount-seconds-passed'
import { differenceInSeconds } from 'date-fns'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  stopDate?: Date
  finishedDate?: Date
}

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  cycles: Cycle[]
  markCurrentCycleAsFinished: () => void
  handleUpdateAmountSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  stopCurrentCycle: () => void
}

interface CyclesContextProviderProps {
  children: React.ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export const CyclesContextProvider = ({
  children,
}: CyclesContextProviderProps) => {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    retriveCyclesStateFromLocalStorage,
  )

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId) // get the active cycle

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(
    calculateAmountSecondsPassed(activeCycle),
  )

  useEffect(() => {
    const stateToSave = JSON.stringify(cyclesState)

    const localStorageName = '@ignite-pomodoro:cycles-state-1.0.0'

    localStorage.setItem(localStorageName, stateToSave)
  }, [cyclesState])

  const createNewCycle = (data: CreateCycleData) => {
    const { task, minutesAmount } = data
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task,
      minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))
    setAmountSecondsPassed(0)
  }

  const stopCurrentCycle = () => {
    dispatch(stopCurrentCycleAction())
    setAmountSecondsPassed(0)
  }

  const markCurrentCycleAsFinished = () => {
    dispatch(markCurrentCycleAsFinishedAction())
    setAmountSecondsPassed(0)
  }

  const handleUpdateAmountSecondsPassed = (seconds: number) =>
    setAmountSecondsPassed(seconds)

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        cycles,
        markCurrentCycleAsFinished,
        handleUpdateAmountSecondsPassed,
        createNewCycle,
        stopCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
