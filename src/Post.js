import React, {forwardRef} from 'react';
import './Post.css';
import pfp from './pfp4.png';
import xd from './xd.png';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import {Avatar} from '@material-ui/core'

const Post = forwardRef(({
    displayName,
    username,
    verified,
    timestamp, 
    image,
    text,
    avatar
}, ref) => {
    return(
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={pfp}></Avatar>
            </div>
            <div className="post__body">
                <div className="post__headerText">
                    <h3>
                        {displayName}{" "}
                        <span>
                            {verified && <VerifiedUserIcon className="post__badge"></VerifiedUserIcon>} @{username}
                        </span>

                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>{text}</p>
                </div>
                <img 
                    src={image}
                    alt=""
                >

                </img>
                <div>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon/>
                    <RepeatIcon/>
                    <FavoriteBorderIcon/>
                    <PublishIcon/>
                </div>
            </div>
            </div>
           
            </div>
    )
});

export default Post
