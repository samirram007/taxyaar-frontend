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
import { useFinancialEquity } from '../../contexts/financial-equity-context'

const FinancialEquityAndDebtInterestEdit = () => {
  const router = useRouter()
  const location = useLocation()
  const pathSegments = location.pathname.split('/')
  const id = pathSegments[pathSegments.length - 1]
  const { getEquityById, updateEquity } = useFinancialEquity()
  const [formData, setFormData] = useState({
    id: 0,
    countryName: '',
    zipCode: '',
    natureOfEntity: '',
    nameOfEntity: '',
    addressOfEntity: '',
    dateOfAcquisition: '',
    initialValue: '',
    peakValue: '',
    closingBalance: '',
    totalGrossAmountPaid: '',
    totalGrossProceeds: '',
  })

  useEffect(() => {
    const equity = getEquityById(parseInt(id))
    if (equity) {
      setFormData(equity)
    }
  }, [id, getEquityById])

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    const { id: _, ...data } = formData
    updateEquity(parseInt(id), data)
    router.navigate({ to: '/financial_equity_and_debt_interest' })
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
                <div>Financial Equity and Debt Interest Details</div>
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
                        <SelectItem value="usa">USA</SelectItem>
                        <SelectItem value="uk">UK</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="australia">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

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
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Nature of Entity <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="Nature of Entity"
                      value={formData.natureOfEntity}
                      onChange={(e) =>
                        handleChange('natureOfEntity', e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Name of Entity <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="Name of Entity"
                      value={formData.nameOfEntity}
                      onChange={(e) =>
                        handleChange('nameOfEntity', e.target.value)
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label className="block text-sm font-medium text-foreground mb-2">
                    Address of Entity <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="Address of Entity"
                    value={formData.addressOfEntity}
                    onChange={(e) =>
                      handleChange('addressOfEntity', e.target.value)
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Date of Acquisition{' '}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="date"
                      value={formData.dateOfAcquisition}
                      onChange={(e) =>
                        handleChange('dateOfAcquisition', e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Initial Value <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={formData.initialValue}
                      onChange={(e) =>
                        handleChange('initialValue', e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Peak Value <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={formData.peakValue}
                      onChange={(e) =>
                        handleChange('peakValue', e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Closing Balance <span className="text-red-500">*</span>
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
                </div>

                <div className="grid grid-cols-2 gap-6">
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

                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Total Gross Proceeds{' '}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={formData.totalGrossProceeds}
                      onChange={(e) =>
                        handleChange('totalGrossProceeds', e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <SaveButton onClick={handleSave} />
                  <CancelButton to="/financial_equity_and_debt_interest" />
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

export default FinancialEquityAndDebtInterestEdit
