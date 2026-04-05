import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Smartphone, Apple } from 'lucide-react'

export default function SecurityPlus() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-slate-600 mb-6">
        Activate Multi-Factor Authentication (MFA) to add another layer of
        protection to keep your account secure. Read detailed instructions{' '}
        <a href="#" className="text-blue-600 hover:underline">
          here
        </a>
        .
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                1
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Step 1</h3>
              <p className="text-sm text-slate-600 mb-3">
                Download Google Authenticator App
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Smartphone size={16} className="text-blue-600" />
                  Android App
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Apple size={16} className="text-blue-600" />
                  iOS App
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                2
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Step 2</h3>
              <p className="text-sm text-slate-600">
                Scan QR Code (right) using the Google Authenticator App
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-sm">
                3
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Step 3</h3>
              <p className="text-sm text-slate-600 mb-4">
                Enter the Generated Code below
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Mobile No
                    </label>
                    <Input
                      type="tel"
                      placeholder="Enter Mobile No"
                      className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Enter Code
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter Code"
                      className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                    />
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  Enable Security+
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <div className="mb-3 text-center">
              <p className="text-sm font-medium text-slate-700">QR Code</p>
            </div>

            <div className="w-56 h-56 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
