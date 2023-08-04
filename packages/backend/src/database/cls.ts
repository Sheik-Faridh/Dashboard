import { createNamespace } from 'cls-hooked'

const namespace = createNamespace('spacedesk-namespace')

export const setUserIdToSession = (userId: number) => {
  return namespace.set('userId', userId)
}

export const getUserIdFromSession = () => {
  return namespace.get('userId')
}

export default namespace
