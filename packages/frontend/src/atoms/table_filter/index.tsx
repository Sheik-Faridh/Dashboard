import { ComponentType, FC } from 'react'
import { CheckIcon } from 'lucide-react'
import classNames from 'classnames'
import Button from '@/atoms/form/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/atoms/command'

type Option = {
  label: string
  value: string
  icon?: ComponentType<{ className: string }>
}

export interface TableFilterProps {
  options: Option[]
  selectedOptions: string[]
  onSelect: (val: string, selected: boolean) => void
  clearFilter: () => void
  title?: string
}

const TableFilter: FC<TableFilterProps> = ({
  options,
  selectedOptions,
  onSelect,
  clearFilter,
  title = 'Search',
}) => {
  return (
    <Command>
      <CommandInput placeholder={title} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {options.map((option) => {
            const isSelected = selectedOptions.includes(option.value)
            return (
              <CommandItem
                key={option.value}
                onSelect={() => {
                  onSelect(option.value, !isSelected)
                }}
              >
                <div
                  className={classNames(
                    'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-elephant-800',
                    isSelected
                      ? 'bg-smoke-25 text-azure-800'
                      : 'opacity-50 [&_svg]:invisible',
                  )}
                >
                  <CheckIcon className={classNames('h-4 w-4')} />
                </div>
                {option.icon && (
                  <option.icon className='mr-2 h-4 w-4 text-elephant-800' />
                )}
                <span
                  className={classNames('text-elephant-900 text-[13px]', {
                    'font-[550]': isSelected,
                  })}
                >
                  {option.label}
                </span>
              </CommandItem>
            )
          })}
        </CommandGroup>
        {selectedOptions.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem
                onSelect={clearFilter}
                className='justify-center text-center aria-selected:bg-white'
              >
                <Button color='secondary' className='text-[13px]'>
                  Clear filters
                </Button>
              </CommandItem>
            </CommandGroup>
          </>
        )}
      </CommandList>
    </Command>
  )
}

export default TableFilter
