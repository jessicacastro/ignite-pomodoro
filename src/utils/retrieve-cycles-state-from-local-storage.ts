export const retriveCyclesStateFromLocalStorage = () => {
  const localStorageName = '@ignite-pomodoro:cycles-state-1.0.0'

  const localStorageData = localStorage.getItem(localStorageName)

  if (localStorageData) {
    return JSON.parse(localStorageData)
  }

  return {
    cycles: [],
    activeCycleId: null,
  }
}
