import React from 'react'
import { Redirect, Route } from 'react-router'

const ProtectRoute = ({ isAuth: Auth, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (Auth) {
                    return <Component />
                } else {
                    <Redirect to={{ pathname: '/LogIn', state: { from: props.location } }} />
                }
            }}
        />
    )
}

export default ProtectRoute
