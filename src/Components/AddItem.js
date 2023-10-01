import { FaPlus } from 'react-icons/fa';
import {useRef} from 'react';


const AddItem = ({newItem, setnewItem, handleSubmit}) => {

    const inputRef = useRef();

    return (
        <main className='addItem'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="add">Add Item</label>
                <input 
                    maxLength="100"
                    id="add"
                    type="text"
                    placeholder="add item"
                    autoFocus
                    ref={inputRef}
                    required
                    value={newItem}
                    onChange={(e)=>setnewItem(e.target.value)}
                />
                <button 
                    type="submit" 
                    aria-label="add-item"
                    onClick={()=>inputRef.current.focus()}>
                    <FaPlus />
                </button>
            </form>
        </main>
    );
}
 
export default AddItem;