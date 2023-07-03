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
