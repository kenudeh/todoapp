import { Link } from "react-router-dom";

const Missing = () => {
    return (
        <main className="Missing"> 
            <h3>Page does not exist</h3>
            <p><Link to="/">Go Home</Link></p>
        </main>
    );
}
 
export default Missing;