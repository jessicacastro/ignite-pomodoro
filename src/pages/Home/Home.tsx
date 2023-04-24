import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'

import {
  TaskFormInput,
  TaskFormValidationSchema,
} from './components/NewCycleForm'
import { NewCycleForm, Countdown } from './components'

import { CyclesContext } from '../../contexts'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'

export const Home = () => {
  const { activeCycle, createNewCycle, stopCurrentCycle } =
    useContext(CyclesContext)
  const newCycleForm = useForm<TaskFormInput>({
    resolver: zodResolver(TaskFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, reset, watch } = newCycleForm

  const isButtonSubmitDisabled = watch('task') // watch for changes in the task input

  const handleCreateNewCycle = (data: TaskFormInput) => {
    createNewCycle(data)
    reset() // reset the form
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={stopCurrentCycle} type="button">
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton
            type="submit"
            disabled={!isButtonSubmitDisabled}
          >
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
