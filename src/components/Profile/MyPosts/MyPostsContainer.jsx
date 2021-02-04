import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addNewPost: () => {
//             dispatch(addPostActionCreator())
//         },
//         updateNewPostText: (text) => {
//             dispatch(updatePostActionCreator(text));
//         }
//     }
// }

let DispatchToProps = {
    addPost
};

const MyPostsContainer = connect(mapStateToProps, DispatchToProps)(MyPosts);

export default MyPostsContainer;