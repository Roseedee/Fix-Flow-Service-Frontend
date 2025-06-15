export default interface RememberUser {
  id: string
  name: string
  img?: string
  username: string
  token?: string
  last: Date
  autoLogin: boolean
}
