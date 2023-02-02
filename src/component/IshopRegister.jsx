
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import $ from 'jquery'
export default function IShopRegister()
{
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            UserName:'',
            Email:'',
            Password:'',
           
        },
        onSubmit : values => {
               $.ajax({
                    method:"Post",
                    url:"http://localhost:9001/registerusers",
                    data:values
                })
                alert("Registered Successfully");
                navigate("/login");

            // axios.post("http://localhost:9001/registeruser",values);
            // alert("Registered Successfully");
            // navigate("/login"); 
        }
    })
    
    return(
        <div>
            <h2>Register New User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" value={formik.values.UserName} onChange={formik.handleChange} name="UserName" /></dd>
                    <dt>Email</dt>
                    <dd><input type="text" value={formik.values.Email} onChange={formik.handleChange} name="Email"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" value={formik.values.Password} onChange={formik.handleChange} name="Password"/></dd>
                    
                </dl>
                <button className="btn btn-primary">Register</button>
                <br />
                <Link to="/login">Already have account?</Link>
            </form>
        </div>
    )
}













// import {Link,  useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import axios from "axios";
// import $ from 'jquery';




// const IshopRegister = () =>{
//     let navigate = useNavigate();
//     const formik = useFormik({
//         initialValues:{
//             UserId:"",
//             UserName:"",
//             Mobile:"",
//             Password:"",
//             Age:0,
//             Subscribed:true
//         },
//         onSubmit:values =>{
//                 // $.ajax({
//                 //     method:"Post",
//                 //     url:"http://localhost:9001/registerusers",
//                 //     data:values
//                 // })

               
//                     // axios.post("http://localhost:9001/registeruser",values);
//                     // alert("Registered Successfully");
//                     // navigate("/login");
                

//                 axios.post("http://localhost:9001/registerusers", values)
//                 alert("Register SuccessFully..")
//                  navigate("/login");
//           }
//     })
    
//     return(
//         <>
//          <h2>Register New Users</h2>
//          <form onSubmit={formik.handleSubmit}>
//                 <dl>
//                     <dt>User Id</dt>
//                     <dd><input type="text"  value={formik.values.UserId} onChange={formik.handleChange} name='UserId' /></dd>
//                     <dt>User Name</dt>
//                     <dd><input type="text" value={formik.values.UserName} onChange={formik.handleChange} name='UserName' /></dd>
//                     <dt>Password</dt>
//                     <dd><input type="password"  value={formik.values.Password} onChange={formik.handleChange} name="Password" /></dd>
//                     <dt>Age</dt>
//                     <dd><input type="number"  value={formik.values.Age} onChange={formik.handleChange} name='Age' /></dd>
//                     <dt>Mobile</dt>
//                     <dd><input type="text"  value={formik.values.Mobile} onChange={formik.handleChange} name='Mobile' /></dd>
//                     <dt>Subscribed</dt>
//                     <dd className="form-switch"><input className="form-check-input" type="checkbox" checked={formik.values.Subscribed} onChange={formik.handleChange}  name="Subscribed"/> Yes </dd>
//                 </dl>
//                 <button className='btn btn-primary'>Register</button>
//                 <br/>
//                 <Link to="/login">Already Have Account</Link>
//       </form>
         
//         </>
//     )
// }
// export default IshopRegister;