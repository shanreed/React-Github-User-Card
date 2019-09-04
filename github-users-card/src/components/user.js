import React from 'react';


import './user.css';

function User(props) {
console.log(props)

    return (
        <div className = 'user-container'>
            <div className = 'user-info'>
            <div className = 'bio'>
            <h1>{props.data.user.name}</h1>
            <h4>{props.data.user.company}</h4>
            <h6>{props.data.user.bio}</h6>
            </div>

            <div className = 'img'>
            <img  className = 'user-img' src = {props.data.user.avatar_url}  alt = 'user' />
            </div>
            
            <div className = 'chart-followers'>
            <img className = 'chart' src={`http://ghchart.rshah.org/${props.data.user.login}`} alt = 'chart' />
            {props.data.user.followers} followers
            Following{props.data.user.following}
            </div>
            </div>
            
        </div>
    )
}

export default User;