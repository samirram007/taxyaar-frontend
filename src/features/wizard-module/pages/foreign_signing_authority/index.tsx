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
import { useSigningAuthority } from '../../contexts/signing-authority-context'
import { useRouter } from '@tanstack/react-router'

const ForeignSigningAuthority = () => {
  const router = useRouter()
  const { accounts, deleteAccount } = useSigningAuthority()

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
                <div>Signing Authority Account</div>
                <div className="text-sm text-muted-foreground">
                  Manage your signing authority accounts
                </div>
              </div>

              {accounts && accounts.length > 0 ? (
                <div className="px-6">
                  <div className="flex justify-end mb-4">
                    <AddButton to="/foreign_signing_authority/add" />
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead className="font-semibold">
                          Country Name
                        </TableHead>
                        <TableHead className="font-semibold">
                          Institution Name
                        </TableHead>
                        <TableHead className="font-semibold">
                          Account Number
                        </TableHead>
                        <TableHead className="font-semibold">
                          Account Holder
                        </TableHead>
                        <TableHead className="font-semibold">
                          Peak Balance
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
                            <TableCell>{row.nameOfInstitution}</TableCell>
                            <TableCell>{row.bankAccountNumber}</TableCell>
                            <TableCell>{row.nameOfAccountHolder}</TableCell>
                            <TableCell>{row.peakBalance}</TableCell>
                            <TableCell className="text-center">
                              <div className="flex justify-center gap-2">
                                <button
                                  onClick={() =>
                                    router.navigate({
                                      to: `/foreign_signing_authority/${row.id}/edit`,
                                    })
                                  }
                                >
                                  <Pencil className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
                                </button>
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
                  <p>Add your signing authority account details</p>
                  <p>
                    <AddButton
                      to="/foreign_signing_authority/add"
                      text="+ ADD SIGNING AUTHORITY"
                    />
                  </p>
                </div>
              )}
            </div>
            <WizardFooter
              previousPageLink="/foreign_other_assets"
              previousPageName="Foreign Asset Details"
              nextPageLink="/foreign_trust"
              nextPageName="Foreign Trust"
              progress={{ percentage: '75%', remaining: '5 min more' }}
            />
          </div>
        </div>
        <HelpSidebar />
      </div>
    </div>
  )
}

export default ForeignSigningAuthority
