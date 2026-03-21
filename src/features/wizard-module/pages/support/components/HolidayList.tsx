import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

type Holiday = {
  name: string
  date: string
  day: string
}

type HolidayListProps = {
  title: string
  holidays: Holiday[]
}

const HolidayList = ({ title, holidays }: HolidayListProps) => {
  return (
    <section className="px-4! py-16! sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-lg! font-bold! text-slate-900! mb-8!">{title}</h2>
        <div className="border! border-slate-300! rounded-lg! overflow-hidden!">
          <Table className="w-full!">
            <TableHeader className="[&_tr]:border-b-0!">
              <TableRow className="bg-slate-100! hover:bg-slate-100! border-b-0!">
                <TableHead className="h-auto! px-6! py-4! text-left! text-sm! font-semibold! text-slate-900! whitespace-normal!">
                  Holidays
                </TableHead>
                <TableHead className="h-auto! px-6! py-4! text-left! text-sm! font-semibold! text-slate-900! whitespace-normal!">
                  Dates
                </TableHead>
                <TableHead className="h-auto! px-6! py-4! text-left! text-sm! font-semibold! text-slate-900! whitespace-normal!">
                  Day
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {holidays.map((holiday, idx) => (
                <TableRow
                  key={idx}
                  className="border-t! border-slate-200! hover:bg-transparent!"
                >
                  <TableCell className="px-6! py-4! text-sm! text-slate-900! font-medium! whitespace-normal!">
                    {holiday.name}
                  </TableCell>
                  <TableCell className="px-6! py-4! text-sm! text-slate-700! whitespace-normal!">
                    {holiday.date}
                  </TableCell>
                  <TableCell className="px-6! py-4! text-sm! text-slate-700! whitespace-normal!">
                    {holiday.day}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}

export default HolidayList
