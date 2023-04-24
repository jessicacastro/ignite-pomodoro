import styled from 'styled-components'

export const CountdownContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  font-family: 'Roboto Mono', monospace;

  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme['gray-100']};

  span {
    background-color: ${({ theme }) => theme['gray-700']};
    padding: 1.5rem 1rem; /* 24px 32px */
    border-radius: 8px;

    display: flex;
    align-items: center;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${({ theme }) => theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
