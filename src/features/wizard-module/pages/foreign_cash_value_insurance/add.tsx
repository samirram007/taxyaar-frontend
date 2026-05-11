import HelpSidebar from '../../components/HelpSidebar'
import WizardHeader from '../../components/wizard_header'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SaveButton } from '@/components/ui/save-button'
import { CancelButton } from '@/components/ui/cancel-button'
import { useRouter } from '@tanstack/react-router'
import { useCashValueInsurance } from '../../contexts/cash-value-insurance-context'

const ForeignCashValueInsuranceAdd = () => {
  const router = useRouter()
  const { addInsurance } = useCashValueInsurance()
  const [formData, setFormData] = useState({
    countryName: '',
    nameOfInstitution: '',
    addressOfInstitution: '',
    zipCode: '',
    dateOfContract: '',
    cashValue: '',
    totalGrossAmountPaid: '',
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    addInsurance(formData)
    router.navigate({ to: '/foreign_cash_value_insurance' })
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
                <div>Cash Value Insurance Details</div>
                <div className="text-sm text-muted-foreground">
                  Enter Details of Foreign Cash Value Insurance
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
                        <SelectItem value="usa">USA</SelectItem>
                        <SelectItem value="uk">UK</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="australia">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Name of Institution{' '}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="Name of Institution"
                      value={formData.nameOfInstitution}
                      onChange={(e) =>
                        handleChange('nameOfInstitution', e.target.value)
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label className="block text-sm font-medium text-foreground mb-2">
                    Address of Institution{' '}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="Address of Institution"
                    value={formData.addressOfInstitution}
                    onChange={(e) =>
                      handleChange('addressOfInstitution', e.target.value)
                    }
                  />
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
                      Date of Contract <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="date"
                      value={formData.dateOfContract}
                      onChange={(e) =>
                        handleChange('dateOfContract', e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Cash Value <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={formData.cashValue}
                      onChange={(e) =>
                        handleChange('cashValue', e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Total Gross Amount Paid{' '}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={formData.totalGrossAmountPaid}
                      onChange={(e) =>
                        handleChange('totalGrossAmountPaid', e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <SaveButton onClick={handleSave} />
                  <CancelButton to="/foreign_cash_value_insurance" />
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

export default ForeignCashValueInsuranceAdd
