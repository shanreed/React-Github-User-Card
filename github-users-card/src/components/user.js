import React from 'react';


import './user.css';

function User(props) {
console.log(props)

    return (
        <div className = 'user-container'>
            <img  className = 'user-img' src = {props.data.user.avatar_url}  alt = 'user' />
            <div className = 'user-info'>
            {props.data.user.name}
            {props.data.user.company}
            {props.data.user.bio}
            <img src={`http://ghchart.rshah.org/${props.data.user.login}`} alt = 'chart' />
            {props.data.user.followers} followers
            Following{props.data.user.following}
            </div>
        </div>
    )
}

export default User;