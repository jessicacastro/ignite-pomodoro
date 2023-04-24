import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { CyclesContext } from '../../contexts'

import { HistoryContainer, HistoryListContainer, StatusBadge } from './styles'

export const History = () => {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryListContainer>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  {cycle.finishedDate && (
                    <StatusBadge statusColor="green">Concluído</StatusBadge>
                  )}
                  {cycle.stopDate && !cycle.finishedDate && (
                    <StatusBadge statusColor="red">Interrompido</StatusBadge>
                  )}

                  {!cycle.stopDate && !cycle.finishedDate && (
                    <StatusBadge statusColor="yellow">Em andamento</StatusBadge>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryListContainer>
    </HistoryContainer>
  )
}
