import { InputHTMLAttributes, useState } from 'react'
import { FwInput, FwIcon } from '@freshworks/crayons/react'
import { InputState } from '@/types/common'

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  iconLeft: string
  hintText: string
  state: InputState
  errorText: string
  clearInput: boolean
}

const PasswordInput = (props: Partial<PasswordInputProps>) => {
  const {
    iconLeft = 'password',
    placeholder = 'Enter password',
    ...rest
  } = props

  const [isPassword, setIsPassword] = useState(true)
  return (
    <FwInput
      {...rest}
      type={isPassword ? 'password' : 'text'}
      iconLeft={iconLeft}
      placeholder={placeholder}
    >
      <span
        className='pointer'
        slot='input-suffix'
        onClick={() => setIsPassword((prevState) => !prevState)}
      >
        <FwIcon name={isPassword ? 'visible' : 'hidden'} />
      </span>
    </FwInput>
  )
}

export default PasswordInput
