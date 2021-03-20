import React, {useState} from 'react';
import './TweetBox.css';
import {Avatar, Button } from '@material-ui/core'
import pfp from './pfp4.png';
import db from './firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Berat Raci',
            username: 'Beraci',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://cdnb.artstation.com/p/assets/images/images/023/541/587/original/janaeither-t-profile-gif.gif?1579549292",

        });

        setTweetMessage("");
        setTweetImage("");
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={pfp}></Avatar>  
                    <input 
                        onChange={e => setTweetMessage(e.target.value)} 
                        value={tweetMessage} 
                        placeholder="What's happening?" 
                        type="text">
                    </input>       
                </div>
                <input onChange={e => setTweetImage(e.target.value)} value={tweetImage} className="tweetBox__imageInput" placeholder="Enter image URL" type="text"></input>       

                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>

            </form>
        </div>
    )
}

export default TweetBox
