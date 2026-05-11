import HelpSidebar from '../../components/HelpSidebar'
import WizardHeader from '../../components/wizard_header'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SaveButton } from '@/components/ui/save-button'
import { CancelButton } from '@/components/ui/cancel-button'
import { useRouter, useLocation } from '@tanstack/react-router'
import { useBankAccounts } from '../../contexts/bank-account-context'

const ForeignBankAccountEdit = () => {
  const router = useRouter()
  const location = useLocation()
  const pathSegments = location.pathname.split('/')
  const id = pathSegments[pathSegments.length - 1]
  const { getAccountById, updateAccount } = useBankAccounts()
  const [formData, setFormData] = useState({
    id: 0,
    countryName: '',
    nameOfBank: '',
    bankAccountNumber: '',
    addressOfBank: '',
    zipCode: '',
    peakBalance: '',
    closingBalance: '',
    statusOfAccountHolder: '',
    accountOpeningDate: '',
  })

  useEffect(() => {
    const account = getAccountById(parseInt(id))
    if (account) {
      setFormData(account)
    }
  }, [id, getAccountById])

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    updateAccount(parseInt(id), formData)
    router.navigate({ to: '/foreign_bank_account' })
  }

  const cardClassName =
    'bg-white grid grid-cols-1 justify-center items-start gap-6 pb-6 shadow-md rounded-lg border border-gray-200'

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <WizardHeader />
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <div className="grid grid-rows-1 lg:col-span-2">
            <div className={cardClassName}>
              <div className="border-b-2 p-6 text-2xl">
                <div>Foreign Bank Accounts</div>
                <div className="text-sm text-muted-foreground">
                  Update Details
                </div>
              </div>

              <div className="space-y-6 px-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Country Name <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.countryName}
                      onValueChange={(value) =>
                        handleChange('countryName', value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="-- Select --" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="panama">Panama</SelectItem>
                        <SelectItem value="usa">USA</SelectItem>
                        <SelectItem value="uk">UK</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="australia">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Name of financial Institution{' '}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="Name of financial Institution"
                      value={formData.nameOfBank}
                      onChange={(e) =>
                        handleChange('nameOfBank', e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Bank Account Number{' '}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="Bank Account Number"
                      value={formData.bankAccountNumber}
                      onChange={(e) =>
                        handleChange('bankAccountNumber', e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Address of financial Institution{' '}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="Address of financial Institution"
                      value={formData.addressOfBank}
                      onChange={(e) =>
                        handleChange('addressOfBank', e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Zip code <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="Zip code"
                      value={formData.zipCode}
                      onChange={(e) => handleChange('zipCode', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Peak balance during the year{' '}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={formData.peakBalance}
                      onChange={(e) =>
                        handleChange('peakBalance', e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Closing balance <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={formData.closingBalance}
                      onChange={(e) =>
                        handleChange('closingBalance', e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Status of Account holder{' '}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.statusOfAccountHolder}
                      onValueChange={(value) =>
                        handleChange('statusOfAccountHolder', value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="-- Select --" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual</SelectItem>
                        <SelectItem value="company">Company</SelectItem>
                        <SelectItem value="trust">Trust</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="block text-sm font-medium text-foreground mb-2">
                    Account Opening Date <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="date"
                    value={formData.accountOpeningDate}
                    onChange={(e) =>
                      handleChange('accountOpeningDate', e.target.value)
                    }
                  />
                </div>

                <div className="flex gap-4 pt-6">
                  <SaveButton onClick={handleSave} />
                  <CancelButton to="/foreign_bank_account" />
                </div>

                <div className="py-2 text-sm">
                  <span className="text-red-500">*</span> indicates mandatory
                  field
                </div>
              </div>
            </div>
          </div>
          <HelpSidebar />
        </div>
      </div>
    </>
  )
}

export default ForeignBankAccountEdit
