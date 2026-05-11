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
import { useForeignIncome } from '../../contexts/foreign-income-context'

const ForeignOtherIncomeAdd = () => {
  const router = useRouter()
  const { addIncome } = useForeignIncome()
  const [formData, setFormData] = useState({
    countryName: '',
    zipCode: '',
    nameOfPerson: '',
    addressOfPerson: '',
    incomeDerived: '',
    natureOfIncome: '',
    incomeTaxable: '',
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    addIncome(formData)
    router.navigate({ to: '/foreign_other_income' })
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
                <div>Foreign Income Details</div>
                <div className="text-sm text-muted-foreground">
                  Enter Details of Income earned outside India.
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

                <div>
                  <Label className="block text-sm font-medium text-foreground mb-2">
                    Details of Person from whom Income is received{' '}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="Name"
                    value={formData.nameOfPerson}
                    onChange={(e) =>
                      handleChange('nameOfPerson', e.target.value)
                    }
                  />
                </div>

                <div>
                  <Label className="block text-sm font-medium text-foreground mb-2">
                    Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="Address"
                    value={formData.addressOfPerson}
                    onChange={(e) =>
                      handleChange('addressOfPerson', e.target.value)
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Income derived <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={formData.incomeDerived}
                      onChange={(e) =>
                        handleChange('incomeDerived', e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Nature of Income <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="Nature of Income"
                      value={formData.natureOfIncome}
                      onChange={(e) =>
                        handleChange('natureOfIncome', e.target.value)
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label className="block text-sm font-medium text-foreground mb-2">
                    Whether taxable in your hands?{' '}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.incomeTaxable}
                    onValueChange={(value) =>
                      handleChange('incomeTaxable', value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="-- Select --" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-4 pt-6">
                  <SaveButton onClick={handleSave} />
                  <CancelButton to="/foreign_other_income" />
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

export default ForeignOtherIncomeAdd
