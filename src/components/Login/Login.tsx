import React, { FC } from "react";
import { reduxForm, InjectedFormProps } from "redux-form";
import { Input, fieldCreator } from "../common/FormControls/FormControls";
import { required, maxLengthCreator } from "../../utils/validators/validator";
import { connect } from "react-redux";
import { login } from "../../redux/reducers/auth-reducer";
import { Redirect } from "react-router-dom";
import style from "./../common/FormControls/FormControls.module.css";
import { AppStateType } from "../../redux/redux-store";

const maxLength15 = maxLengthCreator(15);
const maxLength20 = maxLengthCreator(20);

const LoginForm: FC<InjectedFormProps<LoginFormValuesType> > = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {fieldCreator<LoginPropertiesTypeKeys>(Input, "email", "Email", [required, maxLength20])}
      {fieldCreator<LoginPropertiesTypeKeys>(Input, "password", "Password", [required, maxLength15], {
        type: "password",
      })}
      {fieldCreator<LoginPropertiesTypeKeys>(
        Input,
        "rememberMe",
        undefined,
        [],
        {
          type: "checkbox",
        },
        "remember me"
      )}
      {props.error && <div className={style.borderError}>{props.error}</div>}
      <div>
        <button type="submit">sign in</button>
      </div>
    </form>
  );
};

let LoginReduxForm = reduxForm<LoginFormValuesType>({
  // a unique name for the form
  form: "login",
})(LoginForm);

type LoginMapStatePropsType = {
    isAuth: boolean
}

type LoginMapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type LoginPropsType = LoginMapStatePropsType & LoginMapDispatchPropsType;

export type LoginFormValuesType = {
    email: string 
    password: string 
    rememberMe: boolean
}

type LoginPropertiesTypeKeys  = Extract<keyof LoginFormValuesType, string>;

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
