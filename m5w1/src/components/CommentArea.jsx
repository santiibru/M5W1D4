import { useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'


const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([])


  useEffect(() => {
    const getComments = async () => {
      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' +asin,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ODAyNjljNDM3MDAwMTkzYzM1OGIiLCJpYXQiOjE3MTEwMTE5NDIsImV4cCI6MTcxMjIyMTU0Mn0.3CI3fecU7sgeJcNyMCkIegSGfxdQEqGNa9wFz5P4gRg',
            },
          }
        )
        console.log(response)
        if (response.ok) {
          let comments = await response.json()
          setComments(comments)
    
        } else {
          console.log('error')

        }
      } catch (error) {
        console.log(error)

      }
    }
    if (asin) {
      getComments()
    }
  }, [asin])

  return (
    <div className="text-center">
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  )
}

export default CommentArea
