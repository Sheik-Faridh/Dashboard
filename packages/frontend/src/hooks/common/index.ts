import { useEffect } from 'react'
import {
  Path,
  FieldValues,
  UseFormTrigger,
  UseFormSetValue,
  PathValue,
} from 'react-hook-form'
import { CustomEvent, FieldType, CrayonsEventType } from '@/types/common'

export type CustomFormFields<T> = {
  name: Path<T>
  selector: string
  type: FieldType
  event: CrayonsEventType
}

type FormSubmit = {
  selector: string
  callback: () => void
}

type UseRegisterCrayonsFormFields<T extends FieldValues> = {
  fields: CustomFormFields<T>[]
  formSubmit: FormSubmit
  trigger: UseFormTrigger<T>
  setValue: UseFormSetValue<T>
}

const getChangeValue = (type: FieldType, event: CustomEvent) => {
  if (type === FieldType.Input) return event.detail.value
  if (type === FieldType.Checkbox) return event.detail.meta.checked
  return ''
}

export const useRegisterCrayonsFormFields = <T extends FieldValues>({
  fields,
  formSubmit,
  setValue,
  trigger,
}: UseRegisterCrayonsFormFields<T>) => {
  useEffect(() => {
    let formSubmitted = false
    const submitBtn = document.querySelector(formSubmit.selector)
    for (const field of fields) {
      const element = document.querySelector(field.selector)

      element?.addEventListener(field.event, function (evt: Event) {
        const customEvent = evt as CustomEvent
        const value = getChangeValue(field.type, customEvent) as PathValue<
          T,
          Path<T>
        >
        setValue(field.name, value)
        formSubmitted && trigger()
      })
    }

    submitBtn?.addEventListener('fwClick', function () {
      formSubmit.callback()
      formSubmitted = true
    })
  }, [fields, formSubmit, setValue, trigger])
}
