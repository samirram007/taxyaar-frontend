import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

type ExtendedPeriod = {
  dateRange: string
  time: string
}

type RegularPeriod = {
  day: string
  time: string
}

type WorkingHoursProps = {
  regularTitle: string
  regularPeriods: Array<{
    label: string
    periods: RegularPeriod[]
  }>
  extendedTitle: string
  extendedPeriods: ExtendedPeriod[]
}

const WorkingHours = ({
  regularTitle,
  regularPeriods,
  extendedTitle,
  extendedPeriods,
}: WorkingHoursProps) => {
  return (
    <section className="px-4! py-16! sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1! lg:grid-cols-2! gap-12!">
          <div>
            <h2 className="text-lg! font-bold! text-slate-900! mb-8!">
              {regularTitle}
            </h2>
            <div className="border! border-slate-300! rounded-lg! overflow-hidden!">
              <Table className="w-full!">
                <TableHeader className="[&_tr]:border-b-0!">
                  <TableRow className="bg-slate-100! hover:bg-slate-100! border-b-0!">
                    <TableHead className="h-auto! px-6! py-4! text-left! text-sm! font-semibold! text-slate-900! whitespace-normal!">
                      Period
                    </TableHead>
                    <TableHead className="h-auto! px-6! py-4! text-left! text-sm! font-semibold! text-slate-900! whitespace-normal!">
                      Mon - Fri
                    </TableHead>
                    <TableHead className="h-auto! px-6! py-4! text-left! text-sm! font-semibold! text-slate-900! whitespace-normal!">
                      Sat - Sun
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {regularPeriods.map((period, idx) => (
                    <TableRow
                      key={idx}
                      className="border-t! border-slate-200! hover:bg-transparent!"
                    >
                      <TableCell className="px-6! py-4! text-sm! text-slate-900! font-medium! whitespace-normal!">
                        {period.label}
                      </TableCell>
                      <TableCell className="px-6! py-4! text-sm! text-slate-700! whitespace-normal!">
                        {period.periods[0]?.time}
                      </TableCell>
                      <TableCell className="px-6! py-4! text-sm! text-slate-700! whitespace-normal!">
                        {period.periods[1]?.time}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <div>
            <h2 className="text-lg! font-bold! text-slate-900! mb-8!">
              {extendedTitle}
            </h2>
            <div className="border! border-slate-300! rounded-lg! overflow-hidden!">
              <Table className="w-full!">
                <TableHeader className="[&_tr]:border-b-0!">
                  <TableRow className="bg-slate-100! hover:bg-slate-100! border-b-0!">
                    <TableHead className="h-auto! px-6! py-4! text-left! text-sm! font-semibold! text-slate-900! whitespace-normal!">
                      Date
                    </TableHead>
                    <TableHead className="h-auto! px-6! py-4! text-left! text-sm! font-semibold! text-slate-900! whitespace-normal!">
                      Timing
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {extendedPeriods.map((period, idx) => (
                    <TableRow
                      key={idx}
                      className="border-t! border-slate-200! hover:bg-transparent!"
                    >
                      <TableCell className="px-6! py-4! text-sm! text-slate-900! font-medium! whitespace-normal!">
                        {period.dateRange}
                      </TableCell>
                      <TableCell className="px-6! py-4! text-sm! text-slate-700! whitespace-normal!">
                        {period.time}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkingHours
