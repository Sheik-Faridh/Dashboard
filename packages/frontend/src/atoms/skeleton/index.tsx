import { HTMLAttributes } from 'react'
import classNames from 'classnames'

const Skeleton = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={classNames('animate-pulse rounded-md bg-smoke-100', className)}
      {...props}
    />
  )
}

export default Skeleton
