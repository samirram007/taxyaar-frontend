import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function InvoiceSummary() {
  return (
    <div className="space-y-4 md:space-y-6">
      <div>
        <label className="block text-xs md:text-sm font-medium text-slate-700 mb-2">
          Transaction details
        </label>
        <label className="block text-xs md:text-sm font-medium text-slate-700 mb-2">
          Please Select Member
        </label>
        <Select defaultValue="sneha-ghoshal">
          <SelectTrigger className="w-full md:max-w-md border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg text-sm">
            <SelectValue placeholder="Select member" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sneha-ghoshal">Sneha Ghoshal</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b-2 hover:bg-transparent">
              <TableHead className="text-slate-700 font-semibold text-sm">
                Invoice No.
              </TableHead>
              <TableHead className="text-slate-700 font-semibold text-sm">
                Date
              </TableHead>
              <TableHead className="text-slate-700 font-semibold text-sm">
                Amount
              </TableHead>
              <TableHead className="text-slate-700 font-semibold text-sm">
                GST
              </TableHead>
              <TableHead className="text-slate-700 font-semibold text-sm">
                Total AM
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-slate-50 border-b">
              <TableCell colSpan={5} className="text-center py-8">
                <p className="text-slate-500 text-sm">No records found</p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden">
        <div className="text-center py-8 border rounded-lg bg-white">
          <p className="text-slate-500 text-xs">No records found</p>
        </div>
      </div>
    </div>
  )
}
