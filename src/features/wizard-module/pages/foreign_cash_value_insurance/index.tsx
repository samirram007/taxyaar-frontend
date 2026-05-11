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
import { useCashValueInsurance } from '../../contexts/cash-value-insurance-context'

const ForeignCashValueInsuranceIndex = () => {
  const router = useRouter()
  const { insurances, deleteInsurance } = useCashValueInsurance()

  const handleEdit = (id: number) => {
    router.navigate({
      to: `/foreign_cash_value_insurance/${id}/edit`,
    })
  }

  const handleDelete = (id: number) => {
    deleteInsurance(id)
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <WizardHeader />
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <div className="grid grid-rows-1 lg:col-span-2">
            <div className="bg-white grid grid-cols-1 justify-center items-start gap-6 pb-6 shadow-md rounded-lg border border-gray-200">
              <div className="border-b-2 p-6 text-2xl">
                <div>Cash Value Insurance Details</div>
                <div className="text-sm text-muted-foreground">
                  Details of Foreign Cash Value Insurance
                </div>
              </div>

              <div className="px-6">
                <AddButton to="/foreign_cash_value_insurance/add" />
              </div>

              <div className="px-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Country</TableHead>
                      <TableHead>Institution</TableHead>
                      <TableHead>Cash Value</TableHead>
                      <TableHead>Date of Contract</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {insurances.map((insurance) => (
                      <TableRow key={insurance.id}>
                        <TableCell>{insurance.countryName}</TableCell>
                        <TableCell>{insurance.nameOfInstitution}</TableCell>
                        <TableCell>{insurance.cashValue}</TableCell>
                        <TableCell>{insurance.dateOfContract}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEdit(insurance.id)}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <Edit size={16} />
                            </button>
                            <button
                              onClick={() => handleDelete(insurance.id)}
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
                    router.navigate({
                      to: '/financial_equity_and_debt_interest',
                    })
                  }
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
                >
                  &larr; Financial Equity
                </button>
                <span className="text-sm text-muted-foreground">90%</span>
                <button
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 cursor-not-allowed opacity-50"
                  disabled
                >
                  Next &rarr;
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

export default ForeignCashValueInsuranceIndex
