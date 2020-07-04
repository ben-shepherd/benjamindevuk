import React, { useEffect } from 'react'
import SiteWrapperSidebar from '../../../../components/SiteWrapperSidebar'
import { collections } from '../../../../apis/cockpit'

const PostPageContainer = (props) => {

    const fetchData = async () => {
        try {
            const post = await collections.get('posts', {
                filter: {
                    route: {
                        display: props.location.pathname
                    }
                }
            })

            console.log('PostPage fetch response', {post})
            // setPost(posts.entries)
        }
        catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        console.log('PostPage mounted')
        fetchData()
    }, [props.location.pathname])

    return (
        <SiteWrapperSidebar content={(
            <div className="PostPageContainer">
                <PostPage {...props} />
            </div>
        )} />
    )
}
const PostPage = (props) => {
    return (
        <div className="PostPage">

        </div>
    )
}

export default PostPageContainer