import HelpSidebar from '../../components/HelpSidebar'
import WizardHeader from '../../components/wizard_header'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Edit, Trash2 } from 'lucide-react'
import { useRouter } from '@tanstack/react-router'
import { AddButton } from '@/components/ui/add-button'
import { useFinancialEquity } from '../../contexts/financial-equity-context'

const FinancialEquityAndDebtInterestIndex = () => {
  const router = useRouter()
  const { equities, deleteEquity } = useFinancialEquity()

  const handleEdit = (id: number) => {
    router.navigate({ to: `/financial_equity_and_debt_interest/${id}/edit` })
  }

  const handleDelete = (id: number) => {
    deleteEquity(id)
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <WizardHeader />
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <div className="grid grid-rows-1 lg:col-span-2">
            <div className="bg-white grid grid-cols-1 justify-center items-start gap-6 pb-6 shadow-md rounded-lg border border-gray-200">
              <div className="border-b-2 p-6 text-2xl">
                <div>Financial Equity and Debt Interest Details</div>
                <div className="text-sm text-muted-foreground">
                  Details of Financial Equity and Debt Interest
                </div>
              </div>

              <div className="px-6">
                <AddButton to="/financial_equity_and_debt_interest/add" />
              </div>

              <div className="px-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Country</TableHead>
                      <TableHead>Entity Name</TableHead>
                      <TableHead>Nature</TableHead>
                      <TableHead>Peak Value</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {equities.map((equity) => (
                      <TableRow key={equity.id}>
                        <TableCell>{equity.countryName}</TableCell>
                        <TableCell>{equity.nameOfEntity}</TableCell>
                        <TableCell>{equity.natureOfEntity}</TableCell>
                        <TableCell>{equity.peakValue}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEdit(equity.id)}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <Edit size={16} />
                            </button>
                            <button
                              onClick={() => handleDelete(equity.id)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="flex justify-between items-center px-6 py-4 border-t">
                <button
                  onClick={() =>
                    router.navigate({ to: '/foreign_custodial_accounts' })
                  }
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                >
                  &larr; Custodial Accounts
                </button>
                <span className="text-sm text-muted-foreground">87%</span>
                <button
                  onClick={() =>
                    router.navigate({ to: '/foreign_cash_value_insurance' })
                  }
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                >
                  Cash Value Insurance &rarr;
                </button>
              </div>
            </div>
          </div>
          <HelpSidebar />
        </div>
      </div>
    </>
  )
}

export default FinancialEquityAndDebtInterestIndex
