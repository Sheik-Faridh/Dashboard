import { User } from '@/models/user'

export const formatUserData = (user: User) => {
  const {
    id,
    name,
    email,
    active,
    userType,
    organizationId,
    createdAt,
    updatedAt,
  } = user
  return {
    id,
    name,
    email,
    active: !!active,
    userType,
    organizationId,
    createdAt,
    updatedAt,
  }
}
