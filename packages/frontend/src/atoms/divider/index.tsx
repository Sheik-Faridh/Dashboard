import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Root } from '@radix-ui/react-separator'
import classNames from 'classnames'

enum Orientation {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

const Divider = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(
  (
    {
      className,
      orientation = Orientation.horizontal,
      decorative = true,
      children = null,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={classNames(
          'flex justify-center items-center my-4',
          orientation === Orientation.horizontal ? 'flex-row' : 'flex-col',
        )}
      >
        <Root
          ref={ref}
          decorative={decorative}
          orientation={orientation}
          className={classNames(
            'bg-slate-300',
            orientation === Orientation.horizontal
              ? 'h-[1px] w-full'
              : 'h-full w-[1px]',
            className,
          )}
          {...props}
        />
        {children && (
          <div
            className={classNames(
              'text-sm font-semibold text-slate-600',
              orientation === Orientation.horizontal ? 'px-2' : 'py-2',
            )}
          >
            {children}
          </div>
        )}
        {children && (
          <Root
            ref={ref}
            decorative={decorative}
            orientation={orientation}
            className={classNames(
              'bg-slate-300',
              orientation === Orientation.horizontal
                ? 'h-[1px] w-full'
                : 'h-full w-[1px]',
              className,
            )}
            {...props}
          />
        )}
      </div>
    )
  },
)

Divider.displayName = Root.displayName

export default Divider
