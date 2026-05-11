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
import { useCustodialAccount } from '../../contexts/custodial-account-context'

const ForeignCustodialAccountsIndex = () => {
  const router = useRouter()
  const { accounts, deleteAccount } = useCustodialAccount()

  const handleEdit = (id: number) => {
    router.navigate({
      to: `/foreign_custodial_accounts/${id}/edit`,
    })
  }

  const handleDelete = (id: number) => {
    deleteAccount(id)
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <WizardHeader />
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <div className="grid grid-rows-1 lg:col-span-2">
            <div className="bg-white grid grid-cols-1 justify-center items-start gap-6 pb-6 shadow-md rounded-lg border border-gray-200">
              <div className="border-b-2 p-6 text-2xl">
                <div>Custodial Account Details</div>
                <div className="text-sm text-muted-foreground">
                  Details of Custodial Accounts
                </div>
              </div>

              <div className="px-6">
                <AddButton to="/foreign_custodial_accounts/add" />
              </div>

              <div className="px-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Country</TableHead>
                      <TableHead>Institution</TableHead>
                      <TableHead>Account Number</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {accounts.map((account) => (
                      <TableRow key={account.id}>
                        <TableCell>{account.countryName}</TableCell>
                        <TableCell>{account.nameOfInstitution}</TableCell>
                        <TableCell>{account.bankAccountNumber}</TableCell>
                        <TableCell>{account.statusOfAccountHolder}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEdit(account.id)}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <Edit size={16} />
                            </button>
                            <button
                              onClick={() => handleDelete(account.id)}
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
                    router.navigate({ to: '/foreign_other_income' })
                  }
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                >
                  &larr; Foreign Income
                </button>
                <span className="text-sm text-muted-foreground">84%</span>
                <button
                  onClick={() =>
                    router.navigate({
                      to: '/financial_equity_and_debt_interest',
                    })
                  }
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                >
                  Financial Equity &rarr;
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

export default ForeignCustodialAccountsIndex
