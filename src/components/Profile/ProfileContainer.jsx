import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUsersProfile,
  getUsersStatus,
  updateUsersStatus,
} from "../../redux/reducers/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
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

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateUsersStatus}
      />
    );
  }
}

let mapStateToProps = (state) => {
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
  connect(mapStateToProps, {
    getUsersProfile,
    getUsersStatus,
    updateUsersStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
