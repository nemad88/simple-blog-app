import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectIsLoggedIn} from "../../redux/auth";

const Header: React.FC = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();

    return (<div>
        {isLoggedIn ? <button onClick={() => dispatch(logout())}>LOGOUT</button> : <Link to={'/login'}>LOGIN</Link>}
    </div>)
}

export default Header;