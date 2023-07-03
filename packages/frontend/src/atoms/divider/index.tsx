import { Root, SeparatorProps } from '@radix-ui/react-separator'

enum Orientation {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

const Divider = (props: SeparatorProps) => {
  const { orientation = Orientation.horizontal } = props
  return <Root className={`data=[orientation=${orientation}] w-full`} />
}

export default Divider
