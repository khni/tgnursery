import type { AccessArgs } from 'payload'

import type { User } from '@/payload-types'

type isAuthenticated = (args: AccessArgs<User>) => boolean

export const editor: isAuthenticated = ({ req: { user } }) => {
  return Boolean(user?.role === 'editor' || user?.role === 'admin' || user?.role === 'developer')
}
