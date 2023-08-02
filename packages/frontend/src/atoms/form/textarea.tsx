import { TextareaHTMLAttributes, forwardRef } from 'react'
import { styled } from 'styled-components'
import HelpText, { HelptextProps } from '@/atoms/helptext'
import classNames from 'classnames'

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    HelptextProps {
  label: string
}

const TextAreaControl = styled.div`
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
    & textarea {
      color: rgb(24, 50, 71);
      font-family: inherit;
    }
  }
`

const TextArea = forwardRef<HTMLTextAreaElement, Partial<TextAreaProps>>(
  (props, ref) => {
    const {
      label,
      error,
      warning,
      hintText,
      className,
      required = false,
      ...textAreaProps
    } = props
    const isNormal = !!error || !!warning ? false : true
    return (
      <TextAreaControl className={classNames('text-area-control', className)}>
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
        <div
          className={classNames(
            'container flex items-center w-full relative rounded',
            {
              'border-casablanca-900': !!warning,
              'border-permission-800': !!error,
              normal: isNormal,
            },
          )}
        >
          <div className='flex w-full items-center mx-[8px]'>
            <div className='flex grow items-center'>
              <div className='flex items-center grow ms-2'>
                <textarea
                  className='w-full text-sm min-h-[80px] leading-5 shadow-none tracking-normal font-medium cursor-text outline-0 resize-none'
                  ref={ref}
                  {...textAreaProps}
                />
              </div>
            </div>
          </div>
        </div>
        <HelpText error={error} warning={warning} hintText={hintText} />
      </TextAreaControl>
    )
  },
)

TextArea.displayName = 'TextArea'

export default TextArea
