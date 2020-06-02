import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUsersProfile,
  getUsersStatus,
  updateUsersStatus,
  savePhoto,
} from "../../redux/reducers/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { AppStateType } from "../../redux/redux-store";
import { PropsType, MapStatePropsType, MapDispatchPropsType, OwnPropsType } from "./ProfileTypes";

class ProfileContainer extends React.Component<PropsType> {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }

    this.props.getUsersProfile(userId);
    this.props.getUsersStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        savePhoto={this.props.savePhoto}
        isOwner={!this.props.match.params.userId}
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateUsersStatus}
      />
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let withRouterPC = withRouter(ProfileContainer);
// export default connect(mapStateToProps, {getUsersProfile})(withRouterPC);

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    getUsersProfile,
    getUsersStatus,
    updateUsersStatus,
    savePhoto,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
