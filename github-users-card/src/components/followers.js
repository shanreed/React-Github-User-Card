import React from 'react';

import './followers.css';

function Followers(props) {
    console.log(props)



    return(
        <div className = 'follower'>
            <div className = 'follower-info'>
                <div className = 'img-container'>
            <img  className = 'follower-img' src = {props.user.avatar_url}  alt = 'user' />
            </div>
            <div className = 'info-container'>
           <h1>{props.user.name}</h1>
           <h5>{props.user.bio}</h5>
           </div>
           <div className = 'chart-container'>
           <img className = 'follower-chart' src={`http://ghchart.rshah.org/${props.user.login}`} alt = 'chart' />
           </div>
           </div>
        </div>
    )
}

export default Followers;