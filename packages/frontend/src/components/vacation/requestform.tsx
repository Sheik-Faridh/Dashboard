import { MailIcon } from 'lucide-react'
import {
  Button,
  DatePicker,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  TextArea,
  TextField,
} from '@/atoms/form'
import HelpText from '@/atoms/helptext'

const RequestForm = () => {
  return (
    <form className='p-[20px] space-y-[10px] max-w-[700px]'>
      <div className='flex gap-[40px] w-full'>
        <div className='grow'>
          <DatePicker
            mode='single'
            label='Start date'
            placeholder='Please choose the start date'
            hintText='Please choose the start date'
            required={true}
          />
        </div>
        <RadioGroup className='!flex grow items-center justify-center gap-[40px]'>
          <div className='flex items-center gap-[5px]'>
            <RadioGroupItem value='first_half' id='start_date_first_half' />
            <label
              htmlFor='start_date_first_half'
              className='text-sm text-elephant-900 cursor-pointer'
            >
              First Half
            </label>
          </div>
          <div className='flex items-center gap-[5px]'>
            <RadioGroupItem value='second_half' id='start_date_second_half' />
            <label
              htmlFor='start_date_second_half'
              className='text-sm text-elephant-900 cursor-pointer'
            >
              Second Half
            </label>
          </div>
        </RadioGroup>
      </div>
      <div className='flex gap-[40px] w-full'>
        <div className='grow'>
          <DatePicker
            mode='single'
            label='End date'
            placeholder='Please choose the end date'
            hintText='Please choose the end date'
            required={true}
          />
        </div>
        <RadioGroup className='!flex grow items-center justify-center gap-[40px]'>
          <div className='flex items-center gap-[5px]'>
            <RadioGroupItem value='first_half' id='end_date_first_half' />
            <label
              htmlFor='end_date_first_half'
              className='text-sm text-elephant-900 cursor-pointer'
            >
              First Half
            </label>
          </div>
          <div className='flex items-center gap-[5px]'>
            <RadioGroupItem value='second_half' id='end_date_second_half' />
            <label
              htmlFor='end_date_second_half'
              className='text-sm text-elephant-900 cursor-pointer'
            >
              Second Half
            </label>
          </div>
        </RadioGroup>
      </div>
      <div className='flex gap-[30px] w-full'>
        <div className='grow block'>
          <div className='text-left'>
            <label className='text-xs font-semibold text-elephant-900 capitalize required'>
              Leave Type
            </label>
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder='Please select the leave type' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='Paid Leave'>Paid Leave</SelectItem>
                <SelectItem value='Loss Of Pay'>Loss Of Pay</SelectItem>
                <SelectItem value='Compensatory'>Compensatory</SelectItem>
                <SelectItem value='Maternity'>Maternity</SelectItem>
                <SelectItem value='Paternity'>Paternity</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <HelpText hintText='Please choose the leave type' />
        </div>
        <div className='grow block'>
          <div className='text-left'>
            <label className='text-xs font-semibold text-elephant-900 capitalize required'>
              Reviewer
            </label>
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder='Please select the reviewer' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup></SelectGroup>
            </SelectContent>
          </Select>
          <HelpText hintText='Please choose the reviewer' />
        </div>
      </div>
      <div className='flex w-full'>
        <TextField
          className='w-full'
          label='Send Copy to'
          placeholder='Please enter the email address'
          hintText='Enter the email addresses to whom you wish to send the copy.'
          startIcon={<MailIcon />}
        />
      </div>
      <div className='flex w-full'>
        <TextArea
          className='w-full'
          label='Comments'
          placeholder='Please enter the comments'
          hintText='Request for vacation will be approved or rejected by your Manager depending on task deadlines and vacation days you have earned. Apply for vacation in advance so that it does not impact your project.
          Please read our Vacation policy in Workplace for more details.'
        />
      </div>
      <div className='flex items-center justify-center w-full relative top-[20px]'>
        <Button color='primary' type='submit' className='w-[100px]'>
          Submit
        </Button>
      </div>
    </form>
  )
}

export default RequestForm
