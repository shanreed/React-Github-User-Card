import React from 'react';


function User(props) {
console.log(props)

    return (
        <div>
            <img src = {props.data.user.avatar_url} />
            {props.data.user.name}
            <img src={`http://ghchart.rshah.org/${props.data.user.login}`} />
        </div>
    )
}

export default User;