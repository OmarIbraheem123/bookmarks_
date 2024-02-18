import { useState, useEffect } from 'react'
import Nav from './components/Nav/Nav'
import styles from './App.module.scss'
import Bookmark from '../models/bookmarks'
import { application } from 'express'


export default function App(){
    const [bookmark, setbookmark] = useState([])
    const [bookmarks, setbookmarks] = useState([])
    const [newTodo, setNewTodo] = useState({
        title: '',
        url: ''
    })

    //createBookmark
    const createBookmark = async () => {
        try {
            const response = await fetch('/api/bookmarks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...bookmark})
            })
            const data = await response.json()
            setBookmarks([data,...bookmarks])
            setBookmark({
                title: '',
                url: ''
            })
        } catch (error) {   
            console.error(error)
        }
    }
    //listbookmarkbyuser
    const listBookmarksByUser = async () => {
        try {
            const response = await fetch('/api/users/bookmarks')
            const data = await response.json()
            setBookmarks(data)
        } catch (error) {
            console.error(error)
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
                const index = bookmarkarksCopy.findIndex(bookmark => id === bookmark.id)
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
            const index = bookmarkarksCopy.findIndex(bookmark => id === bookmark.id)
            bookmarkarksCopy[index] = {...bookmarkarksCopy[index], ...updatedData} 
            setBookmark(bookmarkarksCopy)
        } catch (error) {
            console.error(error)
        }
    }
 
 

    useEffect(() => {
        getTodos()
    }, [])
    return(
        <>
			
            <div className={styles.banner}>
                <h1>The World Famous Big Poppa Code React Starter Kit</h1>
              <img src='https://i.imgur.com/5WXigZL.jpg'/>
            </div>
            <TodoList
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            createTodo={createTodo}
            todos={todos}
            moveToCompleted={moveToCompleted}
            completedTodos={completedTodos}
            deleteTodo={deleteTodo}
            />
        </>
    )
}