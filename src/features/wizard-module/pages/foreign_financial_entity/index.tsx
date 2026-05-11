import HelpSidebar from '../../components/HelpSidebar'

import WizardHeader from '../../components/wizard_header'
import WizardFooter from '../../components/wizard_footer'

import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Pencil, Trash2 } from 'lucide-react'
import { useFinancialEntities } from '../../contexts/financial-entity-context'

const ForeignFinancialEntity = () => {
  const { entities, deleteEntity } = useFinancialEntities()

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
                <div>Financial Interest in any Entity</div>
                <div className="text-sm text-muted-foreground">
                  Manage your financial interest in foreign entities
                </div>
              </div>

              {entities && entities.length > 0 ? (
                <div className="px-6">
                  <div className="flex justify-end mb-4">
                    <Button
                      asChild
                      className="bg-teal-600 hover:bg-teal-700 transition-all duration-200 ease-out hover:shadow-lg hover:-translate-y-px active:scale-[0.97] cursor-pointer"
                    >
                      <Link
                        to={'/foreign_financial_entity/add'}
                        className="text-white"
                      >
                        + ADD
                      </Link>
                    </Button>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold">
                          Country Name
                        </TableHead>
                        <TableHead className="font-semibold">
                          Country Code
                        </TableHead>
                        <TableHead className="font-semibold">
                          Nature of entity
                        </TableHead>
                        <TableHead className="font-semibold">
                          Name of the entity
                        </TableHead>
                        <TableHead className="font-semibold">
                          Total Investment
                        </TableHead>
                        <TableHead className="font-semibold text-center">
                          Actions
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {entities.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.countryName}</TableCell>
                          <TableCell>{row.zipCode}</TableCell>
                          <TableCell>{row.natureOfEntity}</TableCell>
                          <TableCell>{row.nameOfEntity}</TableCell>
                          <TableCell>{row.totalInvestment}</TableCell>
                          <TableCell className="text-center">
                            <div className="flex justify-center gap-2">
                              <Link
                                to="/foreign_financial_entity/edit/$id"
                                params={{ id: String(row.id) }}
                              >
                                <Pencil className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
                              </Link>
                              <button
                                onClick={() => deleteEntity(row.id)}
                                className="cursor-pointer"
                              >
                                <Trash2 className="w-5 h-5 text-gray-600 hover:text-red-600" />
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
                  <p>Add your financial interest in foreign entity details</p>
                  <p>
                    <Button
                      asChild
                      className="bg-teal-600 hover:bg-teal-700 transition-all duration-200 ease-out hover:shadow-lg hover:-translate-y-px active:scale-[0.97] cursor-pointer"
                    >
                      <Link
                        to={'/foreign_financial_entity/add'}
                        className="text-white "
                      >
                        + ADD FINANCIAL INTEREST
                      </Link>
                    </Button>
                  </p>
                </div>
              )}
            </div>
            <WizardFooter
              previousPageLink="/foreign_bank_account"
              previousPageName="Foreign Bank Accounts"
              nextPageLink="/foreign_immovable_property"
              nextPageName="Foreign Properties"
              progress={{ percentage: '73%', remaining: '4 min more' }}
            />
          </div>
        </div>
        <HelpSidebar />
      </div>
    </div>
  )
}

export default ForeignFinancialEntity
