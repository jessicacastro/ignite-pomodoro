import styled from 'styled-components'

export const HistoryContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 3.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme['gray-100']};
  }
`

export const HistoryListContainer = styled.section`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme['gray-500']};
    border-radius: 999px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme['gray-400']};
  }

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${({ theme }) => theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${({ theme }) => theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${({ theme }) => theme['gray-700']};
      border-top: 4px solid ${({ theme }) => theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  red: 'red-500',
  green: 'green-500',
} as const // say to typescript that this object will never change, the properties aren't dynamic anymore, they are readonly.

interface StatusBadgeProps {
  statusColor: 'yellow' | 'red' | 'green'
}

export const StatusBadge = styled.span<StatusBadgeProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${({ theme, statusColor }) =>
      theme[STATUS_COLORS[statusColor]]};
  }
`
