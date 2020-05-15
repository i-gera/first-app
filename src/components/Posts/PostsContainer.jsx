import Posts from "./Posts";
import { sendMessage } from "./../../redux/reducers/posts-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    newMessageBody: state.PostsPage.newMessageBody,
    Dialogs: state.PostsPage.Dialogs,
    Messages: state.PostsPage.Messages,
  };
};

const PostsContainer = compose(
  connect(mapStateToProps, { sendMessage }),
  withAuthRedirect
)(Posts);

export default PostsContainer;
