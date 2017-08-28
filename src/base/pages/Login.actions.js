import { auth } from "../database/firebase";

export const login = data => (
    {
        type: 'LOGGED',
        payload: auth
                  .signInWithEmailAndPassword(data.email, data.password)
                  .catch(error => console.error(error.code, error.message))
    }
);

export const logout = () => (
    {
        type: 'LOGGED',
        payload: auth
                  .signOut()
    }
);

export const register = data => (
    {
        type: 'LOGGED',
        payload: auth
                  .createUserWithEmailAndPassword(data.email, data.password)
                  .catch(error => console.error(error.code, error.message))
    }
);

export const setLogged = user => ({ type: 'LOGGED', payload: user });
