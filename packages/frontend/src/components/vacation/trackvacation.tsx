import { useCallback, useState } from 'react'
import { FilterIcon } from 'lucide-react'
import {
  Button,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/atoms/form'
import VacationList from './vacationlist'
import { Popover, PopoverContent, PopoverTrigger } from '@/atoms/popover'
import TableFilter from '@/atoms/table_filter'

const leaveTypeFilter = [
  {
    label: 'Pending',
    value: 'Pending',
  },
  {
    label: 'Approved',
    value: 'Approved',
  },
  {
    label: 'Declined',
    value: 'Declined',
  },
  {
    label: 'Cancel Pending',
    value: 'Cancel Pending',
  },
  {
    label: 'Cancel Approved',
    value: 'Cancel Approved',
  },
  {
    label: 'Cancel Declined',
    value: 'Cancel Declined',
  },
]

const TrackVacation = () => {
  const [leaveTypes, setLeaveTypes] = useState<string[]>([])

  const handleLeaveTypeSelection = useCallback(
    (val: string, selected: boolean) => {
      if (!selected)
        setLeaveTypes((prevState) => prevState.filter((d) => d !== val))
      else setLeaveTypes((prevState) => [...prevState, val])
    },
    [],
  )

  const handleClearFilter = useCallback(() => {
    setLeaveTypes([])
  }, [])

  return (
    <div className='p-[20px] space-y-[30px] w-full'>
      <div className='flex w-full items-center justify-between'>
        <h4 className='font-bold text-elephant-800'>Track Vacation</h4>
        <div className='flex justify-end items-center w-[60%] gap-[15px]'>
          <Popover>
            <PopoverTrigger asChild>
              <Button color='secondary' className='!w-[30px]'>
                <FilterIcon className='h-4 w-4' />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[200px] !p-0' align='start'>
              <TableFilter
                options={leaveTypeFilter}
                selectedOptions={leaveTypes}
                clearFilter={handleClearFilter}
                onSelect={handleLeaveTypeSelection}
              />
            </PopoverContent>
          </Popover>
          <Select>
            <SelectTrigger className='!w-[140px]'>
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
