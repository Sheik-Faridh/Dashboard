import {
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
} from 'react'
import { Root, Indicator } from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'

export interface CustomCheckboxProps
  extends ComponentPropsWithoutRef<typeof Root> {
  label: ReactNode
}

const Checkbox = forwardRef<
  ElementRef<typeof Root>,
  Partial<CustomCheckboxProps>
>((props, ref) => {
  const { label, ...rest } = props
  return (
    <div className='flex items-center relative'>
      <Root
        className='flex h-[20px] w-[20px] appearance-none cursor-pointer border items-center justify-center rounded-[4px] border-slate-400 bg-white outline-none'
        {...rest}
        ref={ref}
      >
        <Indicator className='text-azure-800'>
          <CheckIcon />
        </Indicator>
      </Root>
      {!!label && (
        <label className='pl-[10px] text-xs font-semibold text-elephant-900'>
          {label}
        </label>
      )}
    </div>
  )
})

Checkbox.displayName = 'Checkbox'

export default Checkbox
