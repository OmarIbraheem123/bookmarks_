import { useState, useEffect } from 'react'
import CreateBookmark from './components/CreateBookmark/CreateBookmark'
import BookmarkList from './components/BookmarkList/BookmarkList'
// import styles from './App.module.scss'



export default function App(){

    const handleChange = (event) => {
        setbookmark({ ...bookmark, [event.target.name]: event.target.value})
    }

    const [bookmark, setbookmark] = useState({
     title: '',
     url: ''
})
    const [bookmarks, setbookmarks] = useState([])
      

    //createBookmark
    const createBookmark = async () => {
        try {
            const response = await fetch('/api/bookmarks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({bookmark})
            })
            const data = await response.json()
            setBookmarks([data, ...bookmarks])
        } catch (error) {   
            console.error(error)
        } finally {
            setBookmark({
                title: '',
                url: ''
            })
        }
    }
    //listbookmarkbyuser
    const listBookmarksByUser = async () => {
        try {
            const response = await fetch('/api/bookmarks', {
                method:'GET',
                headers:{
                    'Content-Type': 'application/json',
                }
               
            })
            const data = await response.json()
            setBookmarks(data)
        } catch (error) {
            // console.error(error)
        }
    }




    //deleteBookmark
    const deleteBookmark = async (id) => {
            try {
                const response = await fetch(`/api/bookmarks/${id}`, { 
                    method: 'DELETE',
                    headers:{ 
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json()
                const bookmarkarksCopy = [...bookmark]
                const index = bookmarkarksCopy.findIndex(bookmark => id === bookmark._id)
                bookmarkarksCopy.splice(index, 1 )
                setBookmark(bookmarkarksCopy)
            } catch (error) {
                console.error(error)
            }
        }

    //updateBookmark
    const updateBookmark = async (id, updatedData) => {
        try {
            const response = await fetch(`/api/bookmarks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            })
            const data = await response.json()
            const bookmarkarksCopy = [...bookmark]
            const index = bookmarkarksCopy.findIndex(bookmark => id === bookmark._idid)
            bookmarkarksCopy[index] = {...bookmarkarksCopy[index], ...updatedData} 
            setBookmark(bookmarkarksCopy)
        } catch (error) {
            console.error(error)
        }
    }
 
 

    useEffect(() => {
        listBookmarksByUser()
    }, [])
    
    return(
        <>
        <CreateBookmark
        createBookmark ={createBookmark}
        bookmark ={bookmark}
        handleChange ={handleChange}
        />
    
        <ul>
            <BookmarkList
            bookmark={bookmark}
            deleteBookmark={deleteBookmark}
            updateBookmark={updateBookmark}
            />
	
        </ul>
        </>
    )
}