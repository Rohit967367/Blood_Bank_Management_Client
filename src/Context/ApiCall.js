import axios from "axios";
import { loginFailure, loginSuccess, loginStart } from "./AuthAction";

export const Login = async (user , dispatch) => {
    dispatch(loginStart());

    try {
        const res = await axios.post("http://localhost:8800/api/auth/login", user);
        const { firstName, confirmPassword, createdAt, lastName, phoneNumber, updatedAt, _id, __v, accessToken, isAdmin, ...info } = res.data
            dispatch(loginSuccess(info));
            window.alert(`Welcome Back ${res.data.firstName} to our Website`);
    } catch (error) {
        dispatch(loginFailure());
        // console.log(error)
        window.alert("Invalid Email ID or Password");
    }
}
