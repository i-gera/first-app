import React from "react";
import { connect } from "react-redux";
import {
  setCurrentPage,
  getUsersThunk,
  unfollowThunk,
  followThunk,
} from "./../../redux/reducers/FriendsPage-reducer";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowInProgress,
} from "./../../redux/selectors/friends-selectors";
import Friends from "./Friends";
import Preloader from "../common/Preloader";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsersThunk(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Friends
          totalCount={this.props.totalCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          followInProgress={this.props.followInProgress}
          unfollowThunk={this.props.unfollowThunk}
          followThunk={this.props.followThunk}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followInProgress: getFollowInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    getUsersThunk,
    unfollowThunk,
    followThunk,
  }),
  withAuthRedirect
)(FriendsContainer);
