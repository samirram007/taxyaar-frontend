import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useForm16 } from '../contexts/Form16Context'

export default function Form16Details() {
  const { form16 } = useForm16()
  return (
    <div className="max-w-5xl mx-auto p-6">
      <Card>
        <CardHeader>
          <p className="text-sm text-muted-foreground">
            Here are the key fields of Form-16. Please re-confirm and Continue.
          </p>

          <CardTitle className="text-xl">
            Check and complete your Form-16 details
          </CardTitle>

          <p className="text-sm text-muted-foreground">
            Click Continue when you are done. Enter 0 where you have no values.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-6 items-center">
            <Label>Your PAN</Label>
            <Input
              placeholder="Enter PAN"
              defaultValue={form16?.employee_pan}
            />
          </div>

          <div className="grid grid-cols-2 gap-6 items-center">
            <Label>Financial Year</Label>
            <Input defaultValue={form16?.assessment_year} readOnly />
          </div>

          <div className="grid grid-cols-2 gap-6 items-center">
            <Label>Return Type</Label>
            <Input value="Original" readOnly />
          </div>

          <div className="grid grid-cols-2 gap-6 items-center">
            <Label>Choose Regime Type</Label>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Regime" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="new">New Regime</SelectItem>
                <SelectItem value="old">Old Regime</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-6 items-center">
            <Label>TAN of Employer</Label>
            <Input
              placeholder="Enter TAN"
              defaultValue={form16?.employer_tan}
            />
          </div>

          {/* Company */}
          <div className="grid grid-cols-2 gap-6 items-center">
            <Label>Name of Organisation / Company</Label>
            <Input
              placeholder="Company Name"
              defaultValue={form16?.employer_name}
            />
          </div>

          <div className="grid grid-cols-2 gap-6 items-center">
            <Label>Type of Organisation</Label>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="private">Private</SelectItem>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="government">Government</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-6 items-center">
            <Label>Salary Section 17(1)</Label>
            <Input defaultValue={form16?.salary_details.gross_salary} />
          </div>

          <div className="grid grid-cols-2 gap-6 items-center">
            <Label>Perquisites Section 17(2)</Label>
            <Input defaultValue="0" />
          </div>

          <div className="grid grid-cols-2 gap-6 items-center">
            <Label>Profits in lieu of Salary Section 17(3)</Label>
            <Input defaultValue="0" />
          </div>

          <div className="grid grid-cols-2 gap-6 items-center">
            <Label>Gross Salary</Label>
            <Input defaultValue={form16?.salary_details.gross_salary} />
          </div>

          <div className="grid grid-cols-2 gap-6 items-center">
            <Label>Allowances Exempt Under Section 10</Label>
            <Input defaultValue="0" />
          </div>

          <div className="grid grid-cols-2 gap-6 items-center">
            <Label>Standard Deduction</Label>
            <Input defaultValue={form16?.salary_details.standard_deduction} />
          </div>

          <div className="grid grid-cols-2 gap-6 items-center">
            <Label>Income from Salary (Point 6 of Form16)</Label>
            <Input defaultValue={form16?.salary_details.income_from_salary} />
          </div>

          <div className="grid grid-cols-2 gap-6 items-center">
            <Label>Income from Other Source</Label>
            <Input
              defaultValue={form16?.salary_details.income_from_other_source}
            />
          </div>

          <div className="grid grid-cols-2 gap-6 items-center">
            <Label>Total Deduction</Label>
            <Input defaultValue={form16?.salary_details.net_tax_payable} />
          </div>

          <div className="grid grid-cols-2 gap-6 items-center">
            <Label>Relief u/s 89</Label>
            <Input defaultValue={form16?.salary_details.relief_89} />
          </div>

          <div className="grid grid-cols-2 gap-6 items-center">
            <Label>Total TDS</Label>
            <Input defaultValue={form16?.salary_details.total_tds} />
          </div>

          <div className="flex justify-between pt-6">
            <Button variant="secondary">Cancel</Button>
            <Button>Continue</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
