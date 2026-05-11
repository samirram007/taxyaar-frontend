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
import { useTrust } from '../../contexts/trust-context'
import { useRouter } from '@tanstack/react-router'

const ForeignTrust = () => {
  const router = useRouter()
  const { trusts, deleteTrust } = useTrust()

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
                <div>Details of Trust</div>
                <div className="text-sm text-muted-foreground">
                  Manage your trust details
                </div>
              </div>

              {trusts && trusts.length > 0 ? (
                <div className="px-6">
                  <div className="flex justify-end mb-4">
                    <AddButton to="/foreign_trust/add" />
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold">
                          Country Name
                        </TableHead>
                        <TableHead className="font-semibold">
                          Trust Name
                        </TableHead>
                        <TableHead className="font-semibold">
                          Settlor Name
                        </TableHead>
                        <TableHead className="font-semibold">
                          Zip Code
                        </TableHead>
                        <TableHead className="font-semibold text-center">
                          Actions
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {trusts &&
                        trusts.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell>{row.countryName}</TableCell>
                            <TableCell>{row.nameOfTrust}</TableCell>
                            <TableCell>{row.nameOfSettlor}</TableCell>
                            <TableCell>{row.zipCode}</TableCell>
                            <TableCell className="text-center">
                              <div className="flex justify-center gap-2">
                                <button
                                  onClick={() =>
                                    router.navigate({
                                      to: `/foreign_trust/${row.id}/edit`,
                                    })
                                  }
                                >
                                  <Pencil className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
                                </button>
                                <button onClick={() => deleteTrust(row.id)}>
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
                  <p>Add your trust details</p>
                  <p>
                    <AddButton to="/foreign_trust/add" text="+ ADD TRUST" />
                  </p>
                </div>
              )}
            </div>
            <WizardFooter
              previousPageLink="/foreign_signing_authority"
              previousPageName="Signing Authority Account"
              nextPageLink="/foreign_other_income"
              nextPageName="Foreign Other Income"
              progress={{ percentage: '78%', remaining: '4 min more' }}
            />
          </div>
        </div>
        <HelpSidebar />
      </div>
    </div>
  )
}

export default ForeignTrust
