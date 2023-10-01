import { Link, useParams } from "react-router-dom";



const Edit = ({items, editPost, setEditPost, handleEdit}) => {

    const {id} = useParams();
    const item = items.find(item => (item.id).toString() === id)

    
    return (
        <main className="Edit">
            <form onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor="postTitle">Edit Post</label>
                <input 
                    id="postTitle"
                    placeholder="enter new name"
                    type="text"
                    value={editPost}
                    onChange={(e)=>setEditPost(e.target.value)}
                    required
                    autoFocus
                />
                <button 
                    type="submit"
                    aria-label="edit-item"
                    onClick={()=>handleEdit(item.id)}
                >
                    Submit
                </button>
            </form>
            <Link to="/"><button className="cancel">Cancel</button></Link>
        </main>
    );
}
 
export default Edit;