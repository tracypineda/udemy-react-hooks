import React, { useEffect } from 'react';

const Post = ({item}) => {

    useEffect(()=>{
        console.log('POST CREATED')

        return () => {
            console.log('Component exit')
        }
    },[])

    return(
        <div >
          <div>Name:{item.name}</div>
          <div>Body:{item.body}</div>
          <hr/>
        </div>
    )
}

export default Post;