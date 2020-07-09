import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../../redux/auth";

const Login: React.FC = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();

    const isValid = (): boolean => {
        return true;
    }

    const onLogin = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        if (isValid()) {
            history.push('/');
            dispatch(login());
        }
    }

    return (
        <div>
            <div>Login</div>
            <form onSubmit={onLogin}>
                <input onChange={event => setEmail(event.target.value)} value={email} type="email"/>
                <input onChange={event => setPassword(event.target.value)} value={password} type="password"/>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;