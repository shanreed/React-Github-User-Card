import React from 'react';



function Followers(props) {
    console.log(props)



    return(
        <div>
           {props.user.name}
        </div>
    )
}

export default Followers;