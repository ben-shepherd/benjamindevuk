import React from 'react'
import YoutubeBackground from 'react-youtube-background'
import ReactPlayer from 'react-player'
import './index.scss'
import YouTube from 'react-youtube';

const Article = () => {
    const videoOptions = {
        playerVars: { 
            width: window.innerWidth,
            autoplay: 1,
            controls: 0,
            rel: 0,
            showinfo: 0,
            mute:1,
            start: 262,
            autohide: 2,
            modestbranding: 1,
            fs: 0,
            showinfo: 0,
            playsinline: 1,
        },
        //host: this.props.nocookie ? 'https://www.youtube-nocookie.com' : 'https://www.youtube.com'
        host: 'https://www.youtube.com'
    };

    // return (
    //     <YoutubeBackground
    //         videoId="wnhvanMdx4s">
    //     </YoutubeBackground>
    // )
    return (
        <div className="ArticleOne">
            <div className="YouTube">
                <YouTube
                    videoId="wnhvanMdx4s"
                    opts={videoOptions}>

                </YouTube>
            </div>
        </div>
    )
}

export default Article;