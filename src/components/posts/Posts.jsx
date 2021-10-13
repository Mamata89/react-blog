import React from 'react'
import './posts.css'
import Post from '../post/Post'

export default function Posts({posts}){
    console.log("Posts are",posts)
    return(
        <div className="posts">
               {posts.map((p) => (
                   <Post post={p}/>
               ))}
           
        </div>
    )
}