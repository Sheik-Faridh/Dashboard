import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { styled } from 'styled-components'
import classNames from 'classnames'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error: string
  warning: string
  startIcon: ReactNode
  endIcon: ReactNode
  hintText: string
}

const TextFieldControl = styled.div`
  & label.required {
    &:after {
      content: '*';
      color: #f00;
      padding: 0 2px;
    }
  }
  & .container {
    background-color: rgb(255, 255, 255);
    transition: border 0.3s ease 0s;
    border-width: 1px;
    border-style: solid;
    &.normal {
      border-color: rgb(207, 215, 223);
      &:focus-within {
        outline: none;
        background: rgb(255, 255, 255);
        border: 1px solid transparent;
        z-index: 2;
        box-shadow: rgb(44, 92, 197) 0px 0px 0px 2px;
      }
    }
    & .input-prefix,
    & .input-suffix {
      & svg {
        color: #12344d;
        width: 12px;
        height: 12px;
      }
    }
    & input {
      color: rgb(24, 50, 71);
      font-family: inherit;
    }
  }
`

const TextField = forwardRef<HTMLInputElement, Partial<TextFieldProps>>(
  (props, ref) => {
    const {
      label,
      error,
      warning,
      type = 'text',
      hintText,
      startIcon = null,
      endIcon = null,
      required = false,
      className,
      ...inputProps
    } = props
    const isNormal = !!error || !!warning ? false : true
    return (
      <TextFieldControl className={classNames('text-field-control', className)}>
        {!!label && (
          <div className='text-left'>
            <label
              className={classNames(
                'text-xs font-semibold text-slate-600 capitalize',
                {
                  required,
                },
              )}
            >
              {label}
            </label>
          </div>
        )}
        <div
          className={classNames(
            'container flex items-center w-full relative rounded',
            {
              'border-orange-600': !!warning,
              'border-red-600': !!error,
              normal: isNormal,
            },
          )}
        >
          <div className='flex w-full mx-2'>
            <div className='flex grow'>
              <div className='flex items-center input-prefix'>{startIcon}</div>
              <div className='flex items-center grow ms-2'>
                <input
                  className='w-full text-sm h-6 leading-5 shadow-none tracking-normal font-medium cursor-text outline-0 resize-none'
                  type={type}
                  ref={ref}
                  {...inputProps}
                />
              </div>
            </div>
            <div className='flex items-center ms-2'>{endIcon}</div>
          </div>
        </div>
        <div className='text-left mt-0.5'>
          {isNormal && !!hintText && (
            <span className='text-xs ps-0.5 text-slate-400'>{hintText}</span>
          )}
          {!!error && (
            <span className='text-xs ps-0.5 text-red-600'>{error}</span>
          )}
          {!!warning && (
            <span className='text-xs ps-0.5 text-orange-600'>{warning}</span>
          )}
        </div>
      </TextFieldControl>
    )
  },
)

TextField.displayName = 'TextField'

export default TextField
