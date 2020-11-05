import React from 'react'

const User = ({login,url})=> {
    return (
        <div>
           <h1>{login}</h1>
           <h1>{url}</h1>

        </div>
    )
}

export default User
