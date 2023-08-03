import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/atoms/form'
import VacationList from './vacationlist'

const TrackVacation = () => {
  return (
    <div className='p-[20px] space-y-[30px] w-full'>
      <div className='flex w-full items-center justify-between'>
        <h4 className='font-bold text-elephant-800'>Track Vacation</h4>
        <div className='flex w-[60%] gap-[15px]'>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder='Choose Status' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='Pending'>Pending</SelectItem>
                <SelectItem value='Approved'>Approved</SelectItem>
                <SelectItem value='Declined'>Declined</SelectItem>
                <SelectItem value='Cancel Pending'>Cancel Pending</SelectItem>
                <SelectItem value='Cancel Approved'>Cancel Approved</SelectItem>
                <SelectItem value='Cancel Declined'>Cancel Declined</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder='Choose Year' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='2023'>2023</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className='w-full'>
        <VacationList />
      </div>
    </div>
  )
}

export default TrackVacation
