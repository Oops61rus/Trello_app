export interface IUserDataForLogin {
  name: string, 
  email: string, 
  id: number | string, 
  isAuthenticated: boolean
}

export interface IUserLoginAction {
  type: string,
  payload: IUserDataForLogin
}