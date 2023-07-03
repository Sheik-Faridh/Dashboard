import { ReactNode, forwardRef } from 'react'
import { Root, Indicator, CheckboxProps } from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

export interface CustomCheckboxProps extends CheckboxProps {
  label: ReactNode
}

const Checkbox = forwardRef<HTMLButtonElement, Partial<CustomCheckboxProps>>(
  (props, ref) => {
    const { label, ...rest } = props
    return (
      <div className='flex items-center relative'>
        <Root
          className='flex h-[25px] w-[25px] appearance-none cursor-pointer border items-center justify-center rounded-[4px] border-slate-400 bg-white outline-none'
          {...rest}
          ref={ref}
        >
          <Indicator className='text-blue-600'>
            <CheckIcon />
          </Indicator>
        </Root>
        {!!label && (
          <label className='pl-[15px] text-xs font-semibold text-slate-600'>
            {label}
          </label>
        )}
      </div>
    )
  },
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
