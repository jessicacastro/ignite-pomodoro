import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import * as zod from 'zod'

import { CyclesContext } from '../../../../contexts'

import { FormContainer, TaskInput, MinutesAmountInput } from './styles'

export const TaskFormValidationSchema = zod.object({
  task: zod
    .string()
    .min(1, 'Informe a tarefa')
    .max(50, 'Sua tarefa pode ter no máximo 50 caracteres'),
  minutesAmount: zod
    .number()
    .min(1, 'O tempo mínimo de foco é de 5 minutos')
    .max(60, 'O tempo máximo de foco recomendado é de 60 minutos'),
  // .step(5),
})

// This can be made with interface specification too.
export type TaskFormInput = zod.infer<typeof TaskFormValidationSchema>

export const NewCycleForm = () => {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        {...register('task')}
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        list="task-suggestions"
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Banana" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        min={1}
        max={60}
        step={1}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos</span>
    </FormContainer>
  )
}
