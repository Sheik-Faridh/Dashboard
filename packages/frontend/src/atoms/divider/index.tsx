import { PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'

enum Orientation {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

type DividerProps = {
  orientation: Orientation
}

type DividerStyledProps = {
  $orientation: Orientation
}

const Container = styled.div<DividerStyledProps>`
  width: 100%;
  gap: 10px;
  margin: 15px 0 10px;
  &:after,
  &:before {
    content: '';
    flex-grow: 1;
    align-self: center;
    border-top: thin solid #c7d7dc;
  }
  ${(props) =>
    props.$orientation === Orientation.horizontal
      ? css`
          flex-flow: row;
        `
      : css`
          flex-flow: column;
        `};
`

const Divider = (props: PropsWithChildren<Partial<DividerProps>>) => {
  const { children, orientation = Orientation.horizontal } = props
  return (
    <Container className='fw-flex' $orientation={orientation}>
      <span className='wrapper fw-color-elephant-800 fw-type-h6'>
        {children}
      </span>
    </Container>
  )
}

export default Divider
