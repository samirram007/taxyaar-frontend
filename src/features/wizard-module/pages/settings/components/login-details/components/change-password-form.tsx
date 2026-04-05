import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface ChangePasswordFormProps {
  existingPassword: string
  newPassword: string
  confirmPassword: string
  onExistingPasswordChange: (value: string) => void
  onNewPasswordChange: (value: string) => void
  onConfirmPasswordChange: (value: string) => void
  onSubmit: () => void
  onCancel: () => void
}

export default function ChangePasswordForm({
  existingPassword,
  newPassword,
  confirmPassword,
  onExistingPasswordChange,
  onNewPasswordChange,
  onConfirmPasswordChange,
  onSubmit,
  onCancel,
}: ChangePasswordFormProps) {
  return (
    <div className="border rounded-lg p-6 bg-slate-50 space-y-4">
      <h3 className="font-semibold text-slate-900 mb-4">Change Password</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Enter Existing Password
          </label>
          <Input
            type="password"
            placeholder="Your Existing Password"
            value={existingPassword}
            onChange={(e) => onExistingPasswordChange(e.target.value)}
            className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Enter New Password
          </label>
          <Input
            type="password"
            placeholder="Enter New Password"
            value={newPassword}
            onChange={(e) => onNewPasswordChange(e.target.value)}
            className="border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Re-confirm New Password
          </label>
          <Input
            type="password"
            placeholder="Re-enter New Password"
            value={confirmPassword}
            onChange={(e) => onConfirmPasswordChange(e.target.value)}
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
