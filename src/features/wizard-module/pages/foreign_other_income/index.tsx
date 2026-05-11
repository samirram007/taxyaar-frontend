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
import { useForeignIncome } from '../../contexts/foreign-income-context'

const ForeignOtherIncomeIndex = () => {
  const router = useRouter()
  const { incomes, deleteIncome } = useForeignIncome()

  const handleEdit = (id: number) => {
    router.navigate({
      to: `/foreign_other_income/${id}/edit`,
    })
  }

  const handleDelete = (id: number) => {
    deleteIncome(id)
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <WizardHeader />
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <div className="grid grid-rows-1 lg:col-span-2">
            <div className="bg-white grid grid-cols-1 justify-center items-start gap-6 pb-6 shadow-md rounded-lg border border-gray-200">
              <div className="border-b-2 p-6 text-2xl">
                <div>Foreign Income Details</div>
                <div className="text-sm text-muted-foreground">
                  Details of income earned outside India
                </div>
              </div>

              <div className="px-6">
                <AddButton to="/foreign_other_income/add" />
              </div>

              <div className="px-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Country</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Nature</TableHead>
                      <TableHead>Income</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {incomes.map((income) => (
                      <TableRow key={income.id}>
                        <TableCell>{income.countryName}</TableCell>
                        <TableCell>{income.nameOfPerson}</TableCell>
                        <TableCell>{income.natureOfIncome}</TableCell>
                        <TableCell>{income.incomeDerived}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEdit(income.id)}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <Edit size={16} />
                            </button>
                            <button
                              onClick={() => handleDelete(income.id)}
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
                  onClick={() => router.navigate({ to: '/foreign_trust' })}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                >
                  &larr; Foreign Trust
                </button>
                <span className="text-sm text-muted-foreground">81%</span>
                <button
                  onClick={() =>
                    router.navigate({ to: '/foreign_custodial_accounts' })
                  }
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                >
                  Custodial Accounts &rarr;
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

export default ForeignOtherIncomeIndex
