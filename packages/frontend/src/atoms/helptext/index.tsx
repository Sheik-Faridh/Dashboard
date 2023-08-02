export type HelptextProps = {
  error?: string
  warning?: string
  hintText?: string
}

const HelpText = ({ error, warning, hintText }: HelptextProps) => {
  const isNormal = !!error || !!warning ? false : true
  return (
    <div className='leading-none text-left mt-0.5'>
      {isNormal && !!hintText && (
        <span className='text-xs ps-0.5 text-smoke-300'>{hintText}</span>
      )}
      {!!error && (
        <span className='text-xs ps-0.5 text-permission-800'>{error}</span>
      )}
      {!!warning && (
        <span className='text-xs ps-0.5 text-casablanca-900'>{warning}</span>
      )}
    </div>
  )
}

export default HelpText
