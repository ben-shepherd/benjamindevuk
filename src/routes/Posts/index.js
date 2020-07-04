import React, { useState, useEffect } from 'react'
import SiteWrapperSidebar from '../../components/SiteWrapperSidebar'
import { collections } from '../../apis/cockpit'

const PostsContainer = (props) => {

    const [posts, setPosts] = useState(null)
    
    const fetchData = async () => {
        try {
            const posts = await collections.get('posts')
            console.log('PostContainer fetch response', {posts})
            setPosts(posts.entries)
        }
        catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        console.log('PostsContainer mounted')
        fetchData()
    }, [])

    useEffect(() => {
        console.log('PostsContainer new posts', {posts})
    }, [posts])

    if(!posts) {
        return null
    }

    return (
        <SiteWrapperSidebar content={(
            <div className="PostsContainer">
                <Posts {...props} />
            </div>
        )} />
    )
}
const Posts = (props) => {
    return (
        <div className="Posts">

        </div>
    )
}

export default PostsContainer