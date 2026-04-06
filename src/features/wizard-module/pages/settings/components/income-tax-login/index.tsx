import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function IncomeTaxLogin() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div className="space-y-3 md:space-y-4">
        <div>
          <p className="text-xs md:text-sm text-slate-600 mb-3">
            Enter your{' '}
            <span className="font-semibold">www.incometax.gov.in</span>{' '}
            credentials to authorise us to file your tax return. Your password
            is not seen by any human. It is encrypted and saved. It is read only
            by our bots to fetch data.
          </p>
        </div>

        <div>
          <p className="text-xs md:text-sm text-slate-600 mb-3">
            Connect your ITD account to import your AIS data. By proceeding, you
            consent to connect your Income Tax Department (ITD) account and
            authorize us to access and import your AIS data using your ITD
            credentials. Your credentials are encrypted, securely stored, and
            used only by our bots to fetch data through authorized systems.
          </p>
        </div>

        <div>
          <label className="block text-xs md:text-sm font-medium text-slate-700 mb-2">
            Please Select Member
          </label>
          <Select defaultValue="sneha-ghoshal">
            <SelectTrigger className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg text-sm">
              <SelectValue placeholder="Select member" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sneha-ghoshal">Sneha Ghoshal</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-xs md:text-sm font-medium text-slate-700 mb-2">
            PAN
          </label>
          <Input
            type="text"
            placeholder="Enter PAN"
            defaultValue="EMEPG3394H"
            className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg text-sm"
          />
        </div>

        <div>
          <label className="block text-xs md:text-sm font-medium text-slate-700 mb-2">
            DIT Password:
          </label>
          <Input
            type="password"
            placeholder="Enter DIT Password"
            className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg text-sm"
          />
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-3 pt-2 md:pt-4">
          <Button
            variant="outline"
            className="border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg text-sm w-full md:w-auto"
            onClick={() => {
              //  forgot password
            }}
          >
            Forgot Password
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm w-full md:w-auto"
            onClick={() => {
              //  save
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}
