import HelpSidebar from '../../components/HelpSidebar'

import WizardHeader from '../../components/wizard_header'
import WizardFooter from '../../components/wizard_footer'

import { AddButton } from '@/components/ui/add-button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Pencil, Trash2 } from 'lucide-react'
import { useBankAccounts } from '../../contexts/bank-account-context'
import { Link } from '@tanstack/react-router'

const ForeignBankAccount = () => {
  const { accounts, deleteAccount } = useBankAccounts()

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8  ">
      <WizardHeader />
      <div className="grid lg:grid-cols-3 gap-8 mb-24">
        <div className="grid grid-rows-1   lg:col-span-2">
          <div
            className="lg:col-span-2    grid-cols-1 bg-white
                    shadow rounded-lg   gap-6"
          >
            <div className="grid grid-cols-1 justify-center items-start gap-6 pb-6">
              <div className="border-b-2 p-6 text-2xl">
                <div>Foreign Bank Accounts</div>
                <div className="text-sm text-muted-foreground">
                  Manage your foreign bank details
                </div>
              </div>

              {accounts && accounts.length > 0 ? (
                <div className="px-6">
                  <div className="flex justify-end mb-4">
                    <AddButton to="/foreign_bank_account/add" />
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold">
                          Country Name
                        </TableHead>
                        <TableHead className="font-semibold">
                          Bank Name
                        </TableHead>
                        <TableHead className="font-semibold">
                          Account Number
                        </TableHead>
                        <TableHead className="font-semibold">
                          Peak Balance
                        </TableHead>
                        <TableHead className="font-semibold">
                          Closing Balance
                        </TableHead>
                        <TableHead className="font-semibold text-center">
                          Actions
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {accounts &&
                        accounts.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell>{row.countryName}</TableCell>
                            <TableCell>{row.nameOfBank}</TableCell>
                            <TableCell>{row.bankAccountNumber}</TableCell>
                            <TableCell>{row.peakBalance}</TableCell>
                            <TableCell>{row.closingBalance}</TableCell>
                            <TableCell className="text-center">
                              <div className="flex justify-center gap-2">
                                <Link
                                  to="/foreign_bank_account/edit/$id"
                                  params={{ id: String(row.id) }}
                                >
                                  <Pencil className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
                                </Link>
                                <button onClick={() => deleteAccount(row.id)}>
                                  <Trash2 className="w-5 h-5 text-gray-600 hover:text-red-600 cursor-pointer" />
                                </button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="space-y-1 px-6 flex flex-col items-center gap-4">
                  <p>Add your foreign bank details</p>
                  <p>
                    <AddButton
                      to="/foreign_bank_account/add"
                      text="+ ADD FOREIGN BANK"
                    />
                  </p>
                </div>
              )}
            </div>
            <WizardFooter
              previousPageLink="/start_other_details"
              previousPageName="Other Details Start"
              nextPageLink="/foreign_financial_entity"
              nextPageName="Foreign Financial Entity"
              progress={{ percentage: '72%', remaining: '5 min more' }}
            />
          </div>
        </div>
        <HelpSidebar />
      </div>
    </div>
  )
}

export default ForeignBankAccount
