import { Dispatch, SetStateAction, forwardRef, useState } from 'react'
import { KeyRoundIcon, EyeIcon, EyeOffIcon } from 'lucide-react'
import TextField, { TextFieldProps } from './textfield'

const EndIcon = ({
  isPassword,
  setIsPassword,
}: {
  isPassword: boolean
  setIsPassword: Dispatch<SetStateAction<boolean>>
}) => {
  return isPassword ? (
    <EyeIcon
      className='cursor-pointer'
      onClick={() => setIsPassword((prevState) => !prevState)}
    />
  ) : (
    <EyeOffIcon
      className='cursor-pointer'
      onClick={() => setIsPassword((prevState) => !prevState)}
    />
  )
}

const PasswordInput = forwardRef<HTMLInputElement, Partial<TextFieldProps>>(
  (props, ref) => {
    const { placeholder = 'Enter password', ...rest } = props

    const [isPassword, setIsPassword] = useState(true)
    return (
      <TextField
        ref={ref}
        {...rest}
        type={isPassword ? 'password' : 'text'}
        placeholder={placeholder}
        startIcon={<KeyRoundIcon />}
        endIcon={
          <EndIcon isPassword={isPassword} setIsPassword={setIsPassword} />
        }
      />
    )
  },
)

export default PasswordInput
