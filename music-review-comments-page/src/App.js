//show all the comments
//sort the comments by which one is recently updated?
//have a link that shows the rest of the information
//either a link or expand and shrink

import { useState, useEffect } from 'react'
import { render } from 'react-dom';
import { useParams } from 'react-router-dom'
import GalleryItem from './components/GalleryItem';
import InputComment from './components/InputComments'

function App() {
    const [ allCommentData, setAllCommentData ] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:5000/comments`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            console.log(resData)
            setAllCommentData(resData)
        }
        fetchData()
    },[])
    
    const renderComments = allCommentData.map((comment,i)=>{
      return (
        <GalleryItem item = {comment} key = {i}/>
      )
    })

    return(
      <div style={{'textAlign':'center'}}>
        <h1>Navbar</h1>
        <InputComment/>
        {renderComments}

      </div>
    )

}

export default App;