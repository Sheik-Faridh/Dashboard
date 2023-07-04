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
    <Provider delayDuration={0}>
      <Root delayDuration={0}>
        <Trigger asChild>{children}</Trigger>
        <Portal>
          <Content
            sideOffset={10}
            side={placement}
            className='border-elephant-800 bg-smoke-25 text-elephant-900 text-xs z-[30] font-semibold shadow-lg p-[3px] rounded data-[side=top]:animate-slideDownAndFade'
          >
            {content}
          </Content>
        </Portal>
      </Root>
    </Provider>
  )
}

export default Tooltip
