import React, { FC } from "react";
import { reduxForm, InjectedFormProps } from "redux-form";
import { Input, fieldCreator } from "../common/FormControls/FormControls";
import { required, maxLengthCreator } from "../../utils/validators/validator";
import style from "./../common/FormControls/FormControls.module.css";

type LoginFormValuesType = {
    email: string 
    password: string 
    rememberMe: boolean
}

type LoginPropertiesTypeKeys  = Extract<keyof LoginFormValuesType, string>;

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

export let LoginReduxForm = reduxForm<LoginFormValuesType>({
  // a unique name for the form
  form: "login",
})(LoginForm);