interface Detail {
  name: string
  value: string
  meta: {
    checked: boolean
  }
}

export interface CustomEvent extends Event {
  detail: Detail
}

export enum FieldType {
  Input = 'input',
  Checkbox = 'checkbox',
}

export enum CrayonsEventType {
  InputChange = 'fwInput',
  CheckboxChange = 'fwChange',
}
