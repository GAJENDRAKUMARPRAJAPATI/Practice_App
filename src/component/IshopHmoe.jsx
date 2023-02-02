import { Link } from "react-router-dom";

const IshopHome = () =>{
    return( 
        <>
         <h2>Shopping Home</h2>
         <Link to="/register">New Register</Link>
         <span> | </span>
         <Link to="/login">Existing</Link>
        </>
    ) 
}
export default IshopHome;