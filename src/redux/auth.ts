import {Action} from "redux";
import {RootState} from './store';
import {createSelector} from "reselect";

// AUTH STATE INTERFACE
interface AuthState {
    loggedIn: boolean
}

// LOAD POSTS INTERFACES
const LOGIN = 'auth/login';

interface LoginAction extends Action<typeof LOGIN> {
}

const LOGOUT = 'auth/logout';

interface LogoutAction extends Action<typeof LOGOUT> {

}

// LOGIN/LOGOUT ACTION
export const login = (): LoginAction => ({
    type: LOGIN
})

export const logout = (): LogoutAction => ({
    type: LOGOUT
})

//SELECTORS

export const selectAuthState = (state: RootState): AuthState => state.auth;

export const selectIsLoggedIn = createSelector(
    selectAuthState,
    authState => authState.loggedIn
)

// INITIAL STATE
const initialState: AuthState = {
    loggedIn: false
}

// REDUCER
const authReducer = (state: AuthState = initialState, action: | LoginAction | LogoutAction) => {
    switch (action.type) {
        case LOGIN:
            return {
                loggedIn: true
            }
        case LOGOUT:
            return {
                loggedIn: false
            };
        default:
            return state;
    }
}

export default authReducer;