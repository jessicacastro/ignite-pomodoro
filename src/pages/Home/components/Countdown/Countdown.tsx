import { useContext, useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'
import { CountdownContainer, Separator } from './styles'
import { CyclesContext } from '../../../../contexts'

export const Countdown = () => {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    handleUpdateAmountSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0 // get the total seconds of the active cycle

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0 // get the current seconds of the active cycle
  const minutesAmountInTotalSeconds = activeCycle
    ? Math.floor(currentSeconds / 60)
    : 0 // get the minutes amount in total seconds

  const secondsAmountInTotalSeconds = activeCycle ? currentSeconds % 60 : 0 // get the seconds amount in total seconds

  const minutes = String(minutesAmountInTotalSeconds).padStart(2, '0') // format the minutes amount
  const seconds = String(secondsAmountInTotalSeconds).padStart(2, '0') // format the seconds amount

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - ${activeCycle.task}`
    }

    return () => {
      document.title = 'Ignite Pomodoro'
    }
  }, [minutes, seconds, activeCycle])

  useEffect(() => {
    if (activeCycle) {
      // if there is an active cycle, start the interval to update the amount of seconds passed
      const interval: number = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle?.startDate),
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          handleUpdateAmountSecondsPassed(0)
          clearInterval(interval)
        } else {
          handleUpdateAmountSecondsPassed(secondsDifference)
        }
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    handleUpdateAmountSecondsPassed,
  ])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
