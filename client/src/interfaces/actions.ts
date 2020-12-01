export interface IUserBeforeLoginAction {
  type: string;
  payload: {
    email: string
  };
}

export interface IUserLoginAction {
  type: string;
  payload: {
    name: string, 
    email: string, 
    id: number | string, 
    isAuthenticated: boolean
  };
}