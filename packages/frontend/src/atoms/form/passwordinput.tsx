import { Dispatch, SetStateAction, forwardRef, useState } from 'react'
import { LockClosedIcon, EyeOpenIcon, EyeNoneIcon } from '@radix-ui/react-icons'
import TextField, { TextFieldProps } from './textfield'

const EndIcon = ({
  isPassword,
  setIsPassword,
}: {
  isPassword: boolean
  setIsPassword: Dispatch<SetStateAction<boolean>>
}) => {
  return isPassword ? (
    <EyeOpenIcon
      className='cursor-pointer'
      onClick={() => setIsPassword((prevState) => !prevState)}
    />
  ) : (
    <EyeNoneIcon
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
        startIcon={<LockClosedIcon />}
        endIcon={
          <EndIcon isPassword={isPassword} setIsPassword={setIsPassword} />
        }
      />
    )
  },
)

export default PasswordInput
