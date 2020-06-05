import Posts from "./Posts";
import { actions } from "../../redux/reducers/posts-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";
import { MapStatePropsType, MapDispatchPropsType, OwnPropsType } from "./PostsTypes";

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    // newMessageBody: state.PostsPage.newMessageBody,
    Dialogs: state.PostsPage.Dialogs,
    Messages: state.PostsPage.Messages,
  }
};

const PostsContainer = compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {sendMessage: actions.sendMessage}),
  withAuthRedirect
)(Posts);

export default PostsContainer;
