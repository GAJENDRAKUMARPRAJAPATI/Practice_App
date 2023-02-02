import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";


export default function IShopLogin()
{
    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const formik = useFormik({
        initialValues: {
            Email:'',
            Password:'' 
        },
        onSubmit : values => {
            for(var user of users) {
                if(user.Email==values.Email && user.Password==values.Password){
                   
                    navigate("/dashboard");
                    break;
                } else {
                    navigate("/errorpage");
                }
            } 
        }
    })

    useEffect(()=>{
        axios.get("http://localhost:9001/getusers")
            .then(response=> {
                setUsers(response.data);
            })
    },[]);

    return(
        <div>
            <h2>User Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Email</dt>
                    <dd><input value={formik.values.Email} name="Email" onChange={formik.handleChange} type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input  value={formik.values.Password} name="Password" onChange={formik.handleChange} type="password"/></dd>
                </dl>
                <button className="btn btn-primary">Login</button>
            </form>
            <br />
            <Link to="/register">New User?</Link>
        </div>
    )
}