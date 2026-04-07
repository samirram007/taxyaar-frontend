import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface ChangeUsernameFormProps {
  newUsername: string
  confirmUsername: string
  onNewUsernameChange: (value: string) => void
  onConfirmUsernameChange: (value: string) => void
  onSubmit: () => void
  onCancel: () => void
}

export default function ChangeUsernameForm({
  newUsername,
  confirmUsername,
  onNewUsernameChange,
  onConfirmUsernameChange,
  onSubmit,
  onCancel,
}: ChangeUsernameFormProps) {
  return (
    <div className="border rounded-lg p-4 md:p-6 bg-slate-50 space-y-4">
      <h3 className="font-semibold text-sm md:text-base text-slate-900 mb-4">
        Change Username
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <div>
          <label className="block text-xs md:text-sm font-medium text-slate-700 mb-2">
            Enter New UserName
          </label>
          <Input
            placeholder="Your New UserName"
            value={newUsername}
            onChange={(e) => onNewUsernameChange(e.target.value)}
            className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg text-sm"
          />
        </div>
        <div>
          <label className="block text-xs md:text-sm font-medium text-slate-700 mb-2">
            Re-confirm New UserName
          </label>
          <Input
            placeholder="Re-enter New UserName"
            value={confirmUsername}
            onChange={(e) => onConfirmUsernameChange(e.target.value)}
            className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg text-sm"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-2 md:gap-3 pt-2 md:pt-4 md:justify-end">
        <Button
          variant="outline"
          onClick={onCancel}
          className="rounded-lg text-sm w-full md:w-auto"
        >
          Cancel
        </Button>
        <Button
          onClick={onSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm w-full md:w-auto"
        >
          Submit
        </Button>
      </div>
    </div>
  )
}
