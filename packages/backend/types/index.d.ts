import { User as UserModel } from '../src/models/init-models'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface User
      extends Pick<
        UserModel,
        | 'id'
        | 'name'
        | 'email'
        | 'active'
        | 'userType'
        | 'organizationId'
        | 'createdAt'
        | 'updatedAt'
      > {
      active: boolean
    }
  }
}
