import './App.css';
import Content from './Components/Content';
import Edit from './Components/Edit';
import { useState } from "react";
import {Route, Routes, useNavigate} from 'react-router-dom';
import Layout from './Layout';
import Missing from './Components/Missing';



function App() {

  //States
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('dataStore')) || []);
  const [newItem, setnewItem] = useState('');
  const [search, setSearch] = useState('');
  const [editPost, setEditPost] = useState('');


  const navigate = useNavigate();



  //Functions
const addItem = (data)=>{
  const id = items.length ? items[items.length -1].id + 1 : 1;
  const myNewItem = {id, checked:false, data};
  const listItems = [...items, myNewItem];
  setItems(listItems);
  localStorage.setItem('dataStore', JSON.stringify(listItems));
}


const handleEdit = (id) => {
  const updatedPost = {id, checked:false, data:editPost}
  setItems(items.map(item => item.id === id ? {...updatedPost} : item));
  
  navigate('/')
  setEditPost('')
}


const handleCheck = (id) => {
    const listItem = items.map((item) =>
        item.id === id ? {...item, checked: !item.checked} : item
    );
    setItems(listItem);
    localStorage.setItem('dataStore', JSON.stringify(listItem));
}

const handleDelete = (id) => {
    const listItem = items.filter((item) => item.id !== id);
    setItems(listItem)
    localStorage.setItem('dataStore', JSON.stringify(listItem));
}



const handleSubmit = (e) => {
  e.preventDefault();
  if(!newItem) return;
  addItem(newItem);
  setnewItem('')
}



//JSX
  return (
    <Routes>
        <Route path="/" element={<Layout items={items}/>}>
          <Route index element={<Content 
            items={items.filter(item => ((item.data).toLowerCase()).includes(search.toLowerCase()))}
            setItems={setItems}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            newItem={newItem}
            setnewItem={setnewItem}
            handleSubmit={handleSubmit}
            search={search}
            setSearch = {setSearch} />}/>
          <Route path="edit" element={<Edit items={items} editPost={editPost} setEditPost={setEditPost} handleEdit={handleEdit}/>}/>
          <Route path=":id" element={<Edit items={items} editPost={editPost} setEditPost={setEditPost} handleEdit={handleEdit}/>}/>
          <Route path="*" element={<Missing />}/>
        </Route>
    </Routes>
  );
}

export default App;
