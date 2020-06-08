import React, { ComponentType, FC } from 'react'
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { AppStateType } from '../redux/redux-store';

type MapPropsType = {
    isAuth: boolean
}
type DispatchPropsType = {

}

let mapStateForRedirect = (state: AppStateType) =>{
    return {
        isAuth: state.auth.isAuth,
    }
}

export function withAuthRedirect<WCP> (WrappedComponent: ComponentType<WCP>) {
    const RedirectComponent: FC<MapPropsType & DispatchPropsType> = (props) => {
        let {isAuth, ...restProps} = props
            if (!isAuth) {
                return <Redirect to="/login" />;
            }
            return <WrappedComponent {...restProps as WCP} />
        }

        let connectedAuthRedirect = connect<MapPropsType, DispatchPropsType, WCP, AppStateType>(mapStateForRedirect, {})(RedirectComponent);
        return connectedAuthRedirect    
}
