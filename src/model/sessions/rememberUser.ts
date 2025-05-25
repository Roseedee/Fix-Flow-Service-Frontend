export interface RememberUser {
  userId: string
  username: string
  name: string
  token?: string
  last: Date
  autoLogin: boolean
}
