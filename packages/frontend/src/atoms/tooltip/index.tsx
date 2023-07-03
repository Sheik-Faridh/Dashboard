import { ReactNode } from 'react'
import {
  Provider,
  Trigger,
  Content,
  Portal,
  Root,
  TooltipProps,
} from '@radix-ui/react-tooltip'

export interface CustomTooltipProps extends TooltipProps {
  content: ReactNode
  placement: 'top' | 'right' | 'bottom' | 'left'
}

const Tooltip = (props: Partial<CustomTooltipProps>) => {
  const { children, content, placement = 'top' } = props
  return (
    <Provider>
      <Root>
        <Trigger asChild>{children}</Trigger>
        <Portal>
          <Content
            side={placement}
            className='data-[side=top]:animate-slideDownAndFade'
          >
            {content}
          </Content>
        </Portal>
      </Root>
    </Provider>
  )
}

export default Tooltip
