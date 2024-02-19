import { useState, useEffect } from 'react'
// import Nav from './components/Nav/Nav'
// import styles from './App.module.scss'
// import Bookmark from '../models/bookmarks'
// import { application } from 'express'


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
    const create = async () => {
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
    const destory= async (id) => {
            try {
                const response = await fetch(`/api/bookmarks/${id}`, { 
                    method: 'DELETE',
                    headers:{ 
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json()
                const bookmarkarksCopy = [...bookmark]
                const index = bookmarkarksCopy.findIndex(bookmark => id === bookmark.id)
                bookmarkarksCopy.splice(index, 1 )
                setBookmark(bookmarkarksCopy)
            } catch (error) {
                console.error(error)
            }
        }

    //updateBookmark
    const update = async (id, updatedData) => {
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
            const index = bookmarkarksCopy.findIndex(bookmark => id === bookmark.id)
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
        <h2>Create Bookmark</h2>
        <form>

            <input type ="text" value={bookmark.title} name="title" onChange={handleChange}placeholder='Title'></input>
            <input type ="text" value={bookmark.url} name="url" onChange={handleChange}placeholder='URL'></input>
            <input type ="submit" value="Create Bookmark"/>

        </form>

		{bookmarks.length ? bookmarks.map(item => (
            <li key ={item._id}>
                <h4>{item.title}</h4>
                <a href = {item.url} target="_blank"> {item.url}</a>
            </li>
        )): <>No BookMarks</>}	
          
        </>
    )
}