import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariant = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  /* background-color: ${({ variant }) => buttonVariant[variant]}; */
  background-color: ${({ theme, variant }) => theme['green-500']};
  color: white;
  border-radius: 4px;
  margin-left: 20px;
  border: 0;
`
