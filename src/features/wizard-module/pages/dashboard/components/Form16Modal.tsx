import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import axios from 'axios'
import { useForm16 } from '../../form16/contexts/Form16Context'

function Form16Confirmation() {
  return (
    <>
      <div className="py-4 border-b-2">
        <div className="py-6 text-center text-sm">
          Do you wish to upload the Form-16 PDF now?
        </div>
        <div className="text-center py-4 text-sm">
          We will try to auto read your Form-16 and populate data for finishing
          your return quickly.
        </div>
      </div>
    </>
  )
}

export function Form16Modal() {
  const [form16Upload, setForm16Upload] = useState<boolean>(false)

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full inline-flex items-center justify-center gap-2 p-6 bg-indigo-600 text-white rounded hover:bg-indigo-700">
            Upload
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Form 16?</DialogTitle>
            {form16Upload ? <Form16Upload /> : <Form16Confirmation />}

            <DialogFooter className="py-3">
              <DialogClose onClick={() => setForm16Upload(false)}>
                <Button className="bg-gray-400 cursor-pointer hover:bg-gray-500">
                  Skip
                </Button>
              </DialogClose>

              {form16Upload ? (
                <Button className="bg-blue-500 cursor-pointer hover:bg-blue-600">
                  Submit
                </Button>
              ) : (
                <Button
                  onClick={() => setForm16Upload(true)}
                  className="bg-blue-500 cursor-pointer hover:bg-blue-600"
                >
                  Yes
                </Button>
              )}
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

function Form16Upload() {
  const { setForm16 } = useForm16()
  const [file, setFile] = useState<File | null>(null)
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (!file) {
      alert('Please upload Form 16 PDF')
      return
    }

    const formData = new FormData()
    formData.append('pdf', file)
    // formData.append('password', password)

    console.log(formData.get('pdf'))

    try {
      const res = await axios.post(
        'https://pdf-json.taxyaar.com/upload',
        formData,
      )

      const data = res.data.data

      setForm16(data)
      // console.log(data, 'data')

      navigate({ to: '/form16' })
    } catch (err) {
      console.error(err)
      alert('Failed to read Form16')
    }
  }

  return (
    <div>
      <div className="py-6 text-center text-sm">
        We will try to read your Form 16 to help you quick file
      </div>

      <div className="py-2 grid grid-cols-2 gap-4">
        <div>
          <Label className="pb-2">Select Form 16 PDF</Label>
          <Input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>

        <div>
          <Label className="pb-2">Form-16 password (if any)</Label>
          <Input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <Button
        className="mt-4 bg-blue-500 hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  )
}
