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
    <div className="border rounded-lg p-6 bg-slate-50 space-y-4">
      <h3 className="font-semibold text-slate-900 mb-4">Change Username</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Enter New UserName
          </label>
          <Input
            placeholder="Your New UserName"
            value={newUsername}
            onChange={(e) => onNewUsernameChange(e.target.value)}
            className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Re-confirm New UserName
          </label>
          <Input
            placeholder="Re-enter New UserName"
            value={confirmUsername}
            onChange={(e) => onConfirmUsernameChange(e.target.value)}
            className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
          />
        </div>
      </div>
      <div className="flex gap-3 pt-4 justify-end">
        <Button variant="outline" onClick={onCancel} className="rounded-lg">
          Cancel
        </Button>
        <Button
          onClick={onSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Submit
        </Button>
      </div>
    </div>
  )
}
