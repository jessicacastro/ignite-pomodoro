import { differenceInSeconds } from 'date-fns'
import { Cycle } from '../contexts'

export const calculateAmountSecondsPassed = (
  activeCycle: Cycle | undefined,
) => {
  if (activeCycle) {
    return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
  }

  return 0
}
