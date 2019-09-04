import React from 'react';

import './followers.css';

function Followers(props) {
    console.log(props)



    return(
        <div className = 'followers-container'>
            <div className = 'followers-info'>
            <img  className = 'user-img' src = {props.user.avatar_url}  alt = 'user' />
           {props.user.name}
           {props.user.bio}
           <img src={`http://ghchart.rshah.org/${props.user.login}`} alt = 'chart' />
           </div>
        </div>
    )
}

export default Followers;