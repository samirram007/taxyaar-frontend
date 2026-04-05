import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import LoginDetails from './login-details/index'
import SecurityPlus from './security-plus/index'
import IncomeTaxLogin from './income-tax-login/index'
import InvoiceSummary from './invoice-summary/index'

export default function SettingCard() {
  return (
    <div className="flex justify-center w-full">
      <Card className="max-w-5xl w-full">
        <CardHeader className="border-b-2 py-4">
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs defaultValue="login-details" className="w-full">
            <TabsList className="grid w-full grid-cols-4 border-b">
              <TabsTrigger value="login-details" className="text-sm">
                Login Details
              </TabsTrigger>
              <TabsTrigger value="security-plus" className="text-sm">
                Security +
              </TabsTrigger>
              <TabsTrigger value="income-tax-login" className="text-sm">
                Income-Tax Login
              </TabsTrigger>
              <TabsTrigger value="invoice-summary" className="text-sm">
                Invoice Summary
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
