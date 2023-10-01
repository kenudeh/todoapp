import {AiOutlineEdit} from 'react-icons/ai'
import {MdDeleteForever} from 'react-icons/md'
import AddItem from './AddItem';
import Search from './Search';
import { Link } from 'react-router-dom';



const Content = ({items, handleCheck, handleDelete, newItem, setnewItem, handleSubmit, search, setSearch}) => {

   

    return (
        <main className="Content">
            <Search 
                search={search}
                setSearch={setSearch}
            />
            <AddItem 
                newItem={newItem}
                setnewItem={setnewItem}
                handleSubmit={handleSubmit}
            />
            {items.length ?
            (<ul>
                {items.map(
                    (item) => (
                        <li className="list" key={item.id}> 
                            <input 
                                type="checkbox" 
                                checked = {item.checked}
                                onChange={()=>handleCheck(item.id)}
                            />
                            <label 
                                className='listInput'
                                onDoubleClick={()=>handleCheck(item.id)}
                                style={(item.checked) ? {textDecoration:'line-through'} : null}
                            >{item.data}
                            </label>
                            <div className='buttons'>
                                <button className="edit"><Link to="edit"><AiOutlineEdit/></Link></button>
                                <button 
                                    className="delete"
                                    onClick={()=>handleDelete(item.id)}>
                                    <MdDeleteForever/>
                                </button>
                            </div>
                        </li>
                    )
                )}
            </ul>) : <p style={{marginTop:'20vh', fontWeight:'bold'}}>Your list is empty!</p>}
        </main>
    );
}
 
export default Content;