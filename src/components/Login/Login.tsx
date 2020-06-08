import React, { FC } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/reducers/auth-reducer";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";
import {LoginReduxForm} from './LoginForm'

type LoginMapStatePropsType = {
    isAuth: boolean
}

type LoginMapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type LoginPropsType = LoginMapStatePropsType & LoginMapDispatchPropsType;

let Login: FC<LoginPropsType> = (props) => {
  const onSubmit = (formData: any) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div>
      <h1>Please, sign in for using network</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state: AppStateType): LoginMapStatePropsType => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, { login })(Login);
