import React from "react";
import { reduxForm } from "redux-form";
import { Input, fieldCreator } from "../common/FormControls/FormControls";
import { required, maxLengthCreator } from "../../utils/validators/validator";
import { connect } from "react-redux";
import { login } from "../../redux/reducers/auth-reducer";
import { Redirect } from "react-router-dom";
import style from "./../common/FormControls/FormControls.module.css";

const maxLength15 = maxLengthCreator(15);
const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {fieldCreator(Input, "email", "Email", [required, maxLength20])}
      {fieldCreator(Input, "password", "Password", [required, maxLength15], {
        type: "password",
      })}
      {fieldCreator(
        Input,
        "rememberMe",
        null,
        null,
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

let LoginReduxForm = reduxForm({
  // a unique name for the form
  form: "login",
})(LoginForm);

let Login = (props) => {
  const onSubmit = (formData) => {
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

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, { login })(Login);
