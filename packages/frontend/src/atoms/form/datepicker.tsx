import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import classNames from 'classnames'
import Button from './button'
import Calendar, { CalendarProps } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../popover'
import HelpText, { HelptextProps } from '@/atoms/helptext'

export type DatePickerProps = CalendarProps &
  HelptextProps & {
    label?: string
    required?: boolean
    placeholder?: string
  }

const DatePicker = ({
  label,
  required,
  error,
  warning,
  hintText,
  placeholder = 'Please select a date',
  ...props
}: DatePickerProps) => {
  const { selected: date, mode } = props

  return (
    <Popover>
      <div className='block'>
        {!!label && (
          <div className='text-left'>
            <label
              className={classNames(
                'text-xs font-semibold text-elephant-900 capitalize',
                {
                  required,
                },
              )}
            >
              {label}
            </label>
          </div>
        )}
        <PopoverTrigger asChild>
          <Button
            color='secondary'
            className={classNames(
              'min-w-[200px] justify-start text-left text-sm px-2',
              !date && 'text-smoke-100',
              error && '!border-permission-800',
              warning && '!border-casablanca-900',
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {mode === 'single' && date ? (
              format(date, 'PPP')
            ) : (
              <span className='text-smoke-300'>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <HelpText error={error} warning={warning} hintText={hintText} />
      </div>
      <PopoverContent className='w-auto p-0'>
        <Calendar initialFocus {...props} />
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker
