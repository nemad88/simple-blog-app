import React, {useEffect} from 'react'
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../../redux/store";
import {loadPosts, selectPostsArray} from '../../redux/posts'

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
                    <div key={post.id}>
                        <h2> {post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default connector(PostList);