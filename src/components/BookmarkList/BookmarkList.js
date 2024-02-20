import Bookmark from "../Bookmark/Bookmark";

export default function BookmarkList ({
    bookmark,
    updateBookmark,
    deleteBookmark
}
){
    return(
        <ul>
        {
            bookmark.length ? BookmarkList.map(bookmark => (
                <Bookmark
                key={bookmark._id}
                bookmark={bookmark}
                updateBookmark={updateBookmark}
                deleteBookmark={deleteBookmark}
                />
            )):
            <>
                <h2></h2>
            </>
        }
        </ul>
    )
}