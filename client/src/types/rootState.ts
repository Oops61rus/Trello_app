import { RouterState } from 'connected-react-router';
import { IUserDataForLogin } from 'interfaces';
import { CombinedState } from 'redux';

export type RootState = CombinedState<{router: RouterState<unknown>; authReducer: IUserDataForLogin;}>