import * as actionTypes from "./actionTypes"
import axios from "axios"

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

// holding the Asynchron code & doing the authentication

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAxLVcRtoxaEZXCz4SApy2xVPhrqrCNPvo", authData)
            .then(response => {
                console.log(response)
                dispatch(authSuccess(response))
            })
            .catch(err => {
                console.log(err)
                dispatch(authFail(err))
            })
    }
}