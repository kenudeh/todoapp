import Footer from './Components/Footer';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';


const Layout = ({items}) => {
    return (
        <div className="App">
            <Header title={"Todo App"} />
            <Outlet />
            <Footer items={items}/>
        </div>
    );
}
 
export default Layout;