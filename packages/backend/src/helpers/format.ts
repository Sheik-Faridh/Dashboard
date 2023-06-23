import { UserCreationAttributes } from '@/models/user'

export const formatUserData = (user: UserCreationAttributes) => {
  const { id, name, email, active, createdAt, updatedAt } = user
  return { id, name, email, active, createdAt, updatedAt }
}
