import Posts from "./Posts";
import { actions } from "../../redux/reducers/posts-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";
import { InitialStateType } from "../../redux/reducers/posts-reducer"
import { ComponentType } from "react";

type MapStatePropsType = {
    postsPage: InitialStateType
}
type MapDispatchPropsType = {
    sendMessage: (newMessageBody: string) => void
}
type OwnPropsType = {
    
}

export type PostsPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    postsPage: state.PostsPage,
  }
};

const PostsContainer = compose<ComponentType>(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {sendMessage: actions.sendMessage}),
  withAuthRedirect
)(Posts);

export default PostsContainer;
