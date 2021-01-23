import React from 'react';
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";
import Login from "./Login";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
};

const dispatchToProps = {
    loginThunkCreator
}

export default connect(mapStateToProps, dispatchToProps)(Login);