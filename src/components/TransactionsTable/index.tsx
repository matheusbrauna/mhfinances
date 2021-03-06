import { Trash } from 'phosphor-react'
import { useTransactions } from '../../hooks/useTransactions'
import { Container } from './styles'

export function TransactionsTable() {
  const { transactions, handleDeleteTask } = useTransactions()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </td>
              <td>
                <Trash
                  size={32}
                  className="delete-task"
                  color="#e52e4d"
                  onClick={() => {
                    handleDeleteTask(transaction.id)
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
