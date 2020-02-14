import React, { useState, useEffect } from 'react';

import Post from './post';


const App = ({initialCount}) => {

  let [state, setState] = useState({
    count: initialCount,
    name:'Tracy'
  });

  let [posts,setPosts] = useState([
    {
      name:'Super awesome hooks',
      body:'Everything is awesome when your are part of a team'
    }
  ])

  // useEffect(()=>{
  //   console.log(state.count)
  // },[state])

  useEffect(()=>{
    console.log(posts)
    return () => {
      console.log('RUNNING')
    }
  },[posts])

  useEffect(()=>{
    console.log('mounted')
  },[])


  const restOne = () => {
    setState( prevState =>{
      return {...prevState, count:state.count - 1 }
    })
  }

  const addOnePost = () => {

    let newPost = {
      name:'Super awesome hooks 2',
      body:'Everything is awesome when your are part of a team 2'
    }

    setPosts([
      ...posts,
      newPost
    ])

  }

  const removePosts = () => {
    setPosts([])
  }


  return(
    <>
      <h1>{state.name}</h1>
      <h3>Count: {state.count}</h3>
      <button onClick={ () => setState({...state, count: state.count + 1})}> ADD ONE</button>
      <button onClick={ restOne }> REST ONE</button>
      <button onClick={ () => setState({...state, count: initialCount}) }> RESET</button>
      <br/>
      <hr/>
      { posts.map((post,i)=>(
        <Post item={post} key={i}/>
      ))
      }
      <button onClick={addOnePost}>Add one post</button>
      <button onClick={removePosts}>Remove posts</button>

    </>
  )
}


export default App;
