import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const ThankYou =() =>{
    let navigate = useNavigate();

    const [userid, setUserId] = useState();
    useEffect(() => {
        if (["userid"] == undefined) {
          navigate("/login");
        } else {
          setUserId(["userid"]);
        }
      }, []);
    function handleSingout() {
        navigate("/login");
      }

    return(
        <>
         <h2>Thank You...</h2>
         <button onClick={handleSingout} className="btn btn-link">  Signout </button>
        </>
    )
}
export default ThankYou;