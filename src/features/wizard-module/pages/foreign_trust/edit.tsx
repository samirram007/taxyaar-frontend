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
import { useTrust } from '../../contexts/trust-context'

const ForeignTrustEdit = () => {
  const router = useRouter()
  const location = useLocation()
  const pathSegments = location.pathname.split('/')
  const id = pathSegments[pathSegments.length - 1]
  const { getTrustById, updateTrust } = useTrust()
  const [formData, setFormData] = useState({
    id: 0,
    countryName: '',
    zipCode: '',
    nameOfTrust: '',
    addressOfTrust: '',
    nameOfSettlor: '',
    addressOfSettlor: '',
    dateOfPosition: '',
    incomeTaxable: '',
  })

  useEffect(() => {
    const trust = getTrustById(parseInt(id))
    if (trust) {
      setFormData(trust)
    }
  }, [id, getTrustById])

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    updateTrust(parseInt(id), formData)
    router.navigate({ to: '/foreign_trust' })
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
                <div>Details of Trust</div>
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

                <div>
                  <Label className="block text-sm font-medium text-foreground mb-2">
                    Name of the Trust <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="Name of the Trust"
                    value={formData.nameOfTrust}
                    onChange={(e) =>
                      handleChange('nameOfTrust', e.target.value)
                    }
                  />
                </div>

                <div>
                  <Label className="block text-sm font-medium text-foreground mb-2">
                    Address of Trust <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="Address of Trust"
                    value={formData.addressOfTrust}
                    onChange={(e) =>
                      handleChange('addressOfTrust', e.target.value)
                    }
                  />
                </div>

                <div>
                  <Label className="block text-sm font-medium text-foreground mb-2">
                    Name of Settlor <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="Name of Settlor"
                    value={formData.nameOfSettlor}
                    onChange={(e) =>
                      handleChange('nameOfSettlor', e.target.value)
                    }
                  />
                </div>

                <div>
                  <Label className="block text-sm font-medium text-foreground mb-2">
                    Address of Settlor <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    placeholder="Address of Settlor"
                    value={formData.addressOfSettlor}
                    onChange={(e) =>
                      handleChange('addressOfSettlor', e.target.value)
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Date since position held{' '}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="date"
                      value={formData.dateOfPosition}
                      onChange={(e) =>
                        handleChange('dateOfPosition', e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">
                      Whether Income accrued is taxable in your hands?{' '}
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
                </div>

                <div className="flex gap-4 pt-6">
                  <SaveButton onClick={handleSave} />
                  <CancelButton to="/foreign_trust" />
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

export default ForeignTrustEdit
