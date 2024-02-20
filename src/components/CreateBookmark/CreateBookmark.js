// import './CreateBookmark.module.scss'
export default function CreateBookmark ({
    createBookmark,
    bookmark,
    handleChange
}){
    return(
        <>
          <h2>Bookmark</h2>
          <h4>Add a new bookmark</h4>
        <form onSubmit={(e) =>{
            e.preventDefault()
            createBookmark()
        }}>

            <input type ="text" value={bookmark.title} name="title" onChange={handleChange}placeholder='Website'></input>
            <input type ="text" value={bookmark.url} name="url" onChange={handleChange}placeholder='http://'></input>
            <input type ="submit" value="Add!"/>

        </form>
        
        </>
    )
}