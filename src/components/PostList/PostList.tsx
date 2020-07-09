import React, {useEffect} from 'react'
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../../redux/store";
import {loadPosts, selectPostsArray} from '../../redux/posts'
import PostItem from "../PostItem/PostItem";

const mapStateToProps = (state: RootState) => ({
    posts: selectPostsArray(state)
})

const mapDispatchToProps = {
    loadPosts
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
}

const PostList: React.FC<Props> = ({posts, loadPosts}) => {

    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <div>
            PostList
            {posts.map(post => {
                return (
                   <PostItem key={post.id} post={post}/>
                )
            })}
        </div>
    )
}

export default connector(PostList);