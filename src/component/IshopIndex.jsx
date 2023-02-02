import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import IshopDashboard from "./IshopDashboard";
import IshopHome from "./IshopHmoe"; 
import IshopLogin from "./IshopLogin";
import IshopRegister from "./IshopRegister";
import ThankYou from "./ThankYou";
 
const IshopIndex = () =>{ 
    return( 
        <>
         <header className="bg-primary text-white text-center mt-2 p-2">
            <h1>Ishop-Online Store</h1>
         </header>
         <section className="mt-2 ms-3 row">
           <BrowserRouter>
           <nav className="col-3"> 
                <div className="mb-2">
                    <Link className="btn btn-primary w-100" to="/home">Home</Link>
                </div>
                <div className="mb-2">
                    <Link className="btn btn-primary w-100" to="/register">Register</Link>
                </div>
                <div className="mb-2">
                    <Link className="btn btn-primary w-100" to="/login">Login</Link>
                </div>
                <div className="mb-2">
                    <Link className="btn btn-primary w-100" to="/dashboard">Menu</Link>
                </div>
                <div className="mb-2">
                    <Link className="btn btn-primary w-100" to="/thankyou">Thank You</Link>
                </div>
            </nav>
            <main className="col-9">
                <Routes>
                    <Route path="/" element={<IshopHome/>}/>
                    <Route path="home" element={<IshopHome/>}/>
                    <Route path="login" element={<IshopLogin/>}/>
                    <Route path="register" element={<IshopRegister/>} />
                    <Route path="dashboard" element={<IshopDashboard/>}/>
                    <Route path="thankyou" element={<ThankYou/>}/>
                    <Route path="errorpage" element={
                        <div>
                            <h2 className="text-danger">Invalid Credentials</h2>
                            <Link to ="/login">Try Again</Link>
                        </div>
                    }/>
                </Routes>
            </main>
           </BrowserRouter>
         </section>
        </>
    )
}
export default IshopIndex;