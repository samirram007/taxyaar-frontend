import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import ChangePasswordForm from './components/change-password-form'
import ChangeEmailForm from './components/change-email-form'
import ChangeUsernameForm from './components/change-username-form'

export default function LoginDetails() {
  const [editingField, setEditingField] = useState<string | null>(null)
  const [newUsername, setNewUsername] = useState('')
  const [confirmUsername, setConfirmUsername] = useState('')
  const [existingPassword, setExistingPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')

  const handleSubmitUsername = () => {
    if (newUsername !== confirmUsername) {
      alert('Usernames do not match')
      return
    }
    console.log('Change username to:', newUsername)
    setEditingField(null)
    setNewUsername('')
    setConfirmUsername('')
  }

  const handleSubmitPassword = () => {
    if (!existingPassword || newPassword !== confirmPassword) {
      alert('Please check your password entries')
      return
    }
    console.log('Change password')
    setEditingField(null)
    setExistingPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  const handleSubmitEmail = () => {
    if (newEmail !== confirmEmail) {
      alert('Emails do not match')
      return
    }
    console.log('Change email to:', newEmail)
    setEditingField(null)
    setNewEmail('')
    setConfirmEmail('')
  }

  return (
    <div className="space-y-4 md:space-y-6">
      <p className="text-xs md:text-sm text-slate-600 mb-4 md:mb-6">
        Here are your Login credentials. To Change the Login credentials click
        'Change' in front of the credential that you wish to change.
      </p>

      <div className="hidden md:block overflow-x-auto border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50">
              <TableHead className="text-slate-900 font-semibold">
                Type
              </TableHead>
              <TableHead className="text-slate-900 font-semibold">
                Details
              </TableHead>
              <TableHead className="text-slate-900 font-semibold text-right">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-slate-50">
              <TableCell className="text-slate-700 font-medium">
                Username:
              </TableCell>
              <TableCell className="text-slate-900">
                Google:snehaghoshal577@gmail.com
              </TableCell>
              <TableCell className="text-right">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg !px-6 !py-2 text-sm font-medium"
                  onClick={() => setEditingField('username')}
                >
                  Change
                </Button>
              </TableCell>
            </TableRow>

            <TableRow className="hover:bg-slate-50">
              <TableCell className="text-slate-700 font-medium">
                Password:
              </TableCell>
              <TableCell className="text-slate-900">••••••••</TableCell>
              <TableCell className="text-right">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg !px-6 !py-2 text-sm font-medium"
                  onClick={() => setEditingField('password')}
                >
                  Change
                </Button>
              </TableCell>
            </TableRow>

            <TableRow className="hover:bg-slate-50">
              <TableCell className="text-slate-700 font-medium">
                Email:
              </TableCell>
              <TableCell className="text-slate-900">
                snehaghoshal577@gmail.com
              </TableCell>
              <TableCell className="text-right">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg !px-6 !py-2 text-sm font-medium"
                  onClick={() => setEditingField('email')}
                >
                  Change
                </Button>
              </TableCell>
            </TableRow>

            <TableRow className="hover:bg-slate-50">
              <TableCell className="text-slate-700 font-medium">
                <Checkbox defaultChecked />
              </TableCell>
              <TableCell className="text-slate-700">
                I wish to subscribe for tax related sms alerts and newsletters
              </TableCell>
              <TableCell className="text-right">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg !px-6 !py-2 text-sm font-medium"
                  onClick={() => {}}
                >
                  Update
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="md:hidden space-y-3">
        <div className="border rounded-lg p-4 bg-white">
          <div className="flex items-start justify-between mb-3">
            <span className="text-sm font-medium text-slate-700">
              Username:
            </span>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg !px-3 !py-1 text-xs font-medium flex-shrink-0"
              onClick={() => setEditingField('username')}
            >
              Change
            </Button>
          </div>
          <p className="text-xs md:text-sm text-slate-900 break-all">
            Google:snehaghoshal577@gmail.com
          </p>
        </div>

        <div className="border rounded-lg p-4 bg-white">
          <div className="flex items-start justify-between mb-3">
            <span className="text-sm font-medium text-slate-700">
              Password:
            </span>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg !px-3 !py-1 text-xs font-medium flex-shrink-0"
              onClick={() => setEditingField('password')}
            >
              Change
            </Button>
          </div>
          <p className="text-xs md:text-sm text-slate-900">••••••••</p>
        </div>

        <div className="border rounded-lg p-4 bg-white">
          <div className="flex items-start justify-between mb-3">
            <span className="text-sm font-medium text-slate-700">Email:</span>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg !px-3 !py-1 text-xs font-medium flex-shrink-0"
              onClick={() => setEditingField('email')}
            >
              Change
            </Button>
          </div>
          <p className="text-xs md:text-sm text-slate-900 break-all">
            snehaghoshal577@gmail.com
          </p>
        </div>

        <div className="border rounded-lg p-4 bg-white">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3 flex-1">
              <Checkbox defaultChecked />
              <label className="text-xs md:text-sm text-slate-700 leading-tight">
                I wish to subscribe for tax related sms alerts and newsletters
              </label>
            </div>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg !px-3 !py-1 text-xs font-medium flex-shrink-0 ml-2"
              onClick={() => {}}
            >
              Update
            </Button>
          </div>
        </div>
      </div>

      {editingField === 'username' && (
        <ChangeUsernameForm
          newUsername={newUsername}
          confirmUsername={confirmUsername}
          onNewUsernameChange={setNewUsername}
          onConfirmUsernameChange={setConfirmUsername}
          onSubmit={handleSubmitUsername}
          onCancel={() => setEditingField(null)}
        />
      )}

      {editingField === 'password' && (
        <ChangePasswordForm
          existingPassword={existingPassword}
          newPassword={newPassword}
          confirmPassword={confirmPassword}
          onExistingPasswordChange={setExistingPassword}
          onNewPasswordChange={setNewPassword}
          onConfirmPasswordChange={setConfirmPassword}
          onSubmit={handleSubmitPassword}
          onCancel={() => setEditingField(null)}
        />
      )}

      {editingField === 'email' && (
        <ChangeEmailForm
          newEmail={newEmail}
          confirmEmail={confirmEmail}
          onNewEmailChange={setNewEmail}
          onConfirmEmailChange={setConfirmEmail}
          onSubmit={handleSubmitEmail}
          onCancel={() => setEditingField(null)}
        />
      )}
    </div>
  )
}
