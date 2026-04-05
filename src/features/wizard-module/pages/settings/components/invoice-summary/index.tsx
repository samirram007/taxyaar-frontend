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
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Transaction details
        </label>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Please Select Member
        </label>
        <Select defaultValue="sneha-ghoshal">
          <SelectTrigger className="w-full max-w-md border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg">
            <SelectValue placeholder="Select member" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sneha-ghoshal">Sneha Ghoshal</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-b-2 hover:bg-transparent">
              <TableHead className="text-slate-700 font-semibold">
                Invoice No.
              </TableHead>
              <TableHead className="text-slate-700 font-semibold">
                Date
              </TableHead>
              <TableHead className="text-slate-700 font-semibold">
                Amount
              </TableHead>
              <TableHead className="text-slate-700 font-semibold">
                GST
              </TableHead>
              <TableHead className="text-slate-700 font-semibold">
                Total AM
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-slate-50 border-b">
              <TableCell colSpan={5} className="text-center py-8">
                <p className="text-slate-500">No records found</p>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
