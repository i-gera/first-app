import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/reducers/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import { PropsType, MapStatePropsType, MapDispatchPropsType, OwnPropsType } from "./HeaderTypes";

class HeaderContainer extends React.Component<PropsType> {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, { logout })(HeaderContainer);
