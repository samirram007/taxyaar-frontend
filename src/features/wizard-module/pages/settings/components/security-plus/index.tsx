import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Smartphone, Apple } from 'lucide-react'

export default function SecurityPlus() {
  return (
    <div className="space-y-4 md:space-y-6">
      <p className="text-xs md:text-sm text-slate-600 mb-4 md:mb-6">
        Activate Multi-Factor Authentication (MFA) to add another layer of
        protection to keep your account secure. Read detailed instructions{' '}
        <a href="#" className="text-blue-600 hover:underline">
          here
        </a>
        .
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="space-y-4 md:space-y-6">
          <div className="flex gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-7 md:h-8 w-7 md:w-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-xs md:text-sm">
                1
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-sm md:text-base text-slate-900 mb-2">
                Step 1
              </h3>
              <p className="text-xs md:text-sm text-slate-600 mb-2 md:mb-3">
                Download Google Authenticator App
              </p>
              <div className="flex gap-2 flex-wrap">
                <Button variant="outline" size="sm" className="gap-2 text-xs">
                  <Smartphone size={14} className="text-blue-600" />
                  Android
                </Button>
                <Button variant="outline" size="sm" className="gap-2 text-xs">
                  <Apple size={14} className="text-blue-600" />
                  iOS
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-7 md:h-8 w-7 md:w-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-xs md:text-sm">
                2
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-sm md:text-base text-slate-900 mb-2">
                Step 2
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                Scan QR Code using the Google Authenticator App
              </p>
            </div>
          </div>

          <div className="flex gap-3 md:gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-7 md:h-8 w-7 md:w-8 rounded-full bg-blue-100 text-blue-600 font-semibold text-xs md:text-sm">
                3
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-sm md:text-base text-slate-900 mb-2">
                Step 3
              </h3>
              <p className="text-xs md:text-sm text-slate-600 mb-3 md:mb-4">
                Enter the Generated Code below
              </p>

              <div className="space-y-3 md:space-y-4">
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1 md:mb-2">
                      Mobile No
                    </label>
                    <Input
                      type="tel"
                      placeholder="Enter Mobile No"
                      className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg text-xs md:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1 md:mb-2">
                      Enter Code
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter Code"
                      className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg text-xs md:text-sm"
                    />
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm">
                  Enable Security+
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="bg-white p-4 md:p-6 rounded-lg border border-slate-200">
            <div className="mb-3 text-center">
              <p className="text-xs md:text-sm font-medium text-slate-700">
                QR Code
              </p>
            </div>

            <div className="w-40 md:w-56 h-40 md:h-56 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
