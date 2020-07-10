import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login} from "../../redux/auth";
import './Login.scss'

const Login: React.FC = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [warning, setWarning] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const isValid = (): boolean => {
        if (password !== dummyPassword && email !== dummyEmail) {
            setWarning("Not valid email or password")
            return false;
        }

        return true;

    }

    const dummyEmail = 'dummy@email.com';
    const dummyPassword = 'secret'

    const onLogin = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        if (isValid()) {
            history.push('/');
            dispatch(login());
        }
    }

    return (
        <div className="login-box">
            <form className="login-form" onSubmit={onLogin}>
                <label>Email:</label>

                <input onChange={event => setEmail(event.target.value)} onFocusCapture={() => setWarning('')}
                       value={email} type="email"/>
                <label>Password:</label>
                <input onChange={event => setPassword(event.target.value)} onFocusCapture={() => setWarning('')}
                       value={password} type="password"/>
                <div className={`warning ${warning ? "visible" : null}`}>{warning}</div>
                <button type='submit'>Login</button>
            </form>
            <div className="password">
                email: dummy@email.com password: secret
            </div>
        </div>
    )
}

export default Login;