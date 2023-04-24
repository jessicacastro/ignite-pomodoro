import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.125rem;
  font-weight: 700;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  border: 0;
  height: 2.5rem;

  font-weight: inherit;
  font-size: inherit;
  padding: 0 0.5rem;

  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
  color: ${({ theme }) => theme['gray-100']};
  text-align: center;

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme['green-500']};
  }
`
export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
  text-align: center;

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`
