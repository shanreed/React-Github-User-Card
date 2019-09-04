import React from 'react';


import './user.css';

function User(props) {
console.log(props)

    return (
        <div className = 'user-container'>
            <img  className = 'user-img' src = {props.data.user.avatar_url}  alt = 'user' />
            <div className = 'user-info'>
            {props.data.user.name}
            <img src={`http://ghchart.rshah.org/${props.data.user.login}`} alt = 'chart' />
            </div>
        </div>
    )
}

export default User;