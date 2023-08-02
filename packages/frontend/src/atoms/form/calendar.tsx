import { ComponentProps } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'
import classNamesFn from 'classnames'

export type CalendarProps = ComponentProps<typeof DayPicker>

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={classNamesFn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-semibold text-elephant-900',
        nav: 'space-x-1 flex items-center',
        nav_button:
          'text-elephant-800 h-7 w-7 bg-transparent text-sm p-0 opacity-50 hover:opacity-100',
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-elephant-800 rounded-md w-9 font-bold text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'text-center text-sm p-0 relative [&:has([aria-selected])]:bg-smoke-25 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: 'h-9 w-9 p-0 font-normal text-elephant-900 aria-selected:opacity-100 hover:bg-smoke-25',
        day_selected:
          'bg-smoke-50 !text-azure-800 hover:bg-smoke-25 hover:text-azure-800 focus:bg-smoke-50 focus:text-azure-800',
        day_today: 'bg-smoke-50',
        day_outside: 'opacity-50',
        day_disabled: 'opacity-50',
        day_range_middle:
          'aria-selected:bg-smoke-25 aria-selected:text-elephant-900',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...iconProps }) => (
          <ChevronLeft size='18px' {...iconProps} />
        ),
        IconRight: ({ ...iconProps }) => (
          <ChevronRight size='18px' {...iconProps} />
        ),
      }}
      {...props}
    />
  )
}

export default Calendar
