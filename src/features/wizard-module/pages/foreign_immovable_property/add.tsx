import HelpSidebar from '../../components/HelpSidebar'
import WizardHeader from '../../components/wizard_header'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useRouter } from '@tanstack/react-router'
import { useImmovableProperties } from '../../contexts/immovable-property-context'

const ForeignImmovablePropertyAdd = () => {
  const router = useRouter()
  const { addProperty } = useImmovableProperties()
  const [formData, setFormData] = useState({
    countryName: '',
    zipCode: '',
    addressOfProperty: '',
    ownership: '',
    dateOfAcquisition: '',
    totalInvestment: '',
    incomeDerived: '',
    natureOfIncome: '',
    incomeTaxable: '',
    scheduleWhere: '',
    itemNo: '',
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    addProperty(formData)
    router.navigate({ to: '/foreign_immovable_property' })
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
                <div>Foreign Immovable Property</div>
                <div className="text-sm text-muted-foreground">
                  Add New Details
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
                    Address of the property{' '}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="Address of the property"
                    value={formData.addressOfProperty}
                    onChange={(e) =>
                      handleChange('addressOfProperty', e.target.value)
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Ownership <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="Ownership %"
                      value={formData.ownership}
                      onChange={(e) =>
                        handleChange('ownership', e.target.value)
                      }
                    />
                  </div>

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
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Total Investment(H cost, in Rs.){' '}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={formData.totalInvestment}
                      onChange={(e) =>
                        handleChange('totalInvestment', e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Income derived from the Property{' '}
                      <span className="text-red-500">*</span>
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

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Income taxable And offered in this return{' '}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={formData.incomeTaxable}
                      onChange={(e) =>
                        handleChange('incomeTaxable', e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Schedule where offered{' '}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      placeholder="Schedule"
                      value={formData.scheduleWhere}
                      onChange={(e) =>
                        handleChange('scheduleWhere', e.target.value)
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label className="block text-sm font-medium text-foreground mb-2">
                    Item no. of Schedule <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="Item no."
                    value={formData.itemNo}
                    onChange={(e) => handleChange('itemNo', e.target.value)}
                  />
                </div>

                <div className="flex gap-4 pt-6">
                  <Button
                    className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded"
                    onClick={handleSave}
                  >
                    SAVE
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded"
                    onClick={() =>
                      router.navigate({ to: '/foreign_immovable_property' })
                    }
                  >
                    CANCEL
                  </Button>
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

export default ForeignImmovablePropertyAdd
