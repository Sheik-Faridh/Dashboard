import { UserAttributes } from '@/models/user'

declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface User extends UserAttributes {}
  }
}
