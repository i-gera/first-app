import React, { ComponentType } from "react";
import { connect } from "react-redux";
import {
  getUsersThunk,
  unfollowThunk,
  followThunk,
} from "../../redux/reducers/friends-reducer";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowInProgress,
} from "../../redux/selectors/friends-selectors";
import Friends from "./Friends";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";
import { PropsType, MapStatePropsType, MapDispatchPropsType, OwnPropsType } from "./FriendsTypes";


class FriendsContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber:number) => {
    this.props.getUsersThunk(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        <div>{this.props.pageTitle}</div>
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

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followInProgress: getFollowInProgress(state),
  };
};

export default compose<ComponentType>(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    getUsersThunk,
    unfollowThunk,
    followThunk,
  }),
  withAuthRedirect
)(FriendsContainer);
