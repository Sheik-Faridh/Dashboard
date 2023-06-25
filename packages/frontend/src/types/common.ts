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

export type LoginFormData = {
  email: string
  password: string
  rememberMe: boolean
}

export type SignupFormData = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export type APIErrorResponse = {
  status: number
  data: {
    message: string
  }
}

export enum InputState {
  Normal = 'normal',
  Error = 'error',
  Warning = 'warning',
}
