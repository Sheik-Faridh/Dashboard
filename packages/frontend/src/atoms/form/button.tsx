import { ButtonHTMLAttributes, forwardRef } from 'react'
import { css, styled } from 'styled-components'
import { Loader2Icon } from 'lucide-react'
import classNames from 'classnames'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean
  color: 'primary' | 'secondary' | 'danger' | 'link'
}

const StyledButton = styled.button`
  border-style: solid;
  font-family: inherit;
  text-decoration: none;
  height: 32px;
  ${(props) =>
    props.color === 'primary' &&
    css`
      background-color: rgb(38, 73, 102);
      color: rgb(255, 255, 255);
      border-color: rgb(18, 52, 77);
      background-image: linear-gradient(rgb(38, 73, 102), rgb(18, 52, 77));
      &:hover:not(:disabled) {
        background-color: rgb(18, 52, 77);
        background-image: none;
      }
    `}

  ${(props) =>
    props.color === 'secondary' &&
    css`
      background-color: rgb(245, 247, 249);
      color: rgb(18, 52, 77);
      border-color: rgb(207, 215, 223);
      background-image: linear-gradient(rgb(255, 255, 255), rgb(245, 247, 249));
      &:hover:not(:disabled) {
        background-color: rgb(245, 247, 249);
        background-image: none;
      }
    `}

    ${(props) =>
    props.color === 'danger' &&
    css`
      color: rgb(255, 255, 255);
      background-color: rgb(215, 45, 48);
      border-color: rgb(200, 33, 36);
      background-image: linear-gradient(rgb(215, 45, 48), rgb(200, 33, 36));
      &:hover:not(:disabled) {
        background-color: rgb(200, 33, 36);
        background-image: none;
      }
    `}

    ${(props) =>
    props.color === 'link' &&
    css`
      background-color: transparent;
      background-image: none;
      border: 1px solid transparent;
      color: rgb(44, 92, 197);
      &:hover:not(:disabled) {
        background-color: rgb(235, 239, 243);
      }
    `}

    &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const Button = forwardRef<HTMLButtonElement, Partial<ButtonProps>>(
  (props, ref) => {
    const {
      color = 'primary',
      type = 'button',
      className,
      loading = false,
      disabled = loading,
      children,
      ...rest
    } = props
    return (
      <StyledButton
        className={classNames(
          'inline-flex justify-center items-center w-full p-0 whitespace-nowrap text-semibold rounded border outline-none tracking-normal	cursor-pointer select-none',
          className,
        )}
        color={color}
        type={type}
        ref={ref}
        disabled={disabled}
        {...rest}
      >
        {loading ? (
          <Loader2Icon className='animate-spin w-[14px] h-[14px]' />
        ) : (
          children
        )}
      </StyledButton>
    )
  },
)

Button.displayName = 'Button'

export default Button
