import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import LoginDetails from './login-details/index'
import SecurityPlus from './security-plus/index'
import IncomeTaxLogin from './income-tax-login/index'
import InvoiceSummary from './invoice-summary/index'
import './tabs.css'

export default function SettingCard() {
  return (
    <div className="flex justify-center w-full px-4 md:px-0">
      <Card className="max-w-5xl w-full">
        <CardHeader className="border-b-2 py-4 px-4 md:px-6">
          <CardTitle className="text-lg md:text-xl">Settings</CardTitle>
        </CardHeader>
        <CardContent className="p-4 md:p-6">
          <Tabs defaultValue="login-details" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 border-b border-slate-200 gap-1 md:gap-0 h-auto md:h-auto p-0 md:p-0 bg-transparent pb-4">
              <TabsTrigger
                value="login-details"
                className="text-xs md:text-sm px-2 md:px-3 py-2 md:py-2 rounded-none text-slate-600 border-b-4 border-transparent hover:text-slate-700 hover:border-slate-300 data-[state=active]:text-blue-600 data-[state=active]:border-b-4 data-[state=active]:border-blue-600"
              >
                Login Details
              </TabsTrigger>
              <TabsTrigger
                value="security-plus"
                className="text-xs md:text-sm px-2 md:px-3 py-2 md:py-2 rounded-none text-slate-600 border-b-4 border-transparent hover:text-slate-700 hover:border-slate-300 data-[state=active]:text-blue-600 data-[state=active]:border-b-4 data-[state=active]:border-blue-600"
              >
                Security +
              </TabsTrigger>
              <TabsTrigger
                value="income-tax-login"
                className="text-xs md:text-sm px-2 md:px-3 py-2 md:py-2 rounded-none text-slate-600 border-b-4 border-transparent hover:text-slate-700 hover:border-slate-300 data-[state=active]:text-blue-600 data-[state=active]:border-b-4 data-[state=active]:border-blue-600"
              >
                Income-Tax
              </TabsTrigger>
              <TabsTrigger
                value="invoice-summary"
                className="text-xs md:text-sm px-2 md:px-3 py-2 md:py-2 rounded-none text-slate-600 border-b-4 border-transparent hover:text-slate-700 hover:border-slate-300 data-[state=active]:text-blue-600 data-[state=active]:border-b-4 data-[state=active]:border-blue-600"
              >
                Invoice
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login-details" className="mt-6">
              <LoginDetails />
            </TabsContent>

            <TabsContent value="security-plus" className="mt-6">
              <SecurityPlus />
            </TabsContent>

            <TabsContent value="income-tax-login" className="mt-6">
              <IncomeTaxLogin />
            </TabsContent>

            <TabsContent value="invoice-summary" className="mt-6">
              <InvoiceSummary />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
