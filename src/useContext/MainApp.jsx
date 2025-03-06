import { Routes,Route } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { HomePage } from "./HomePage"
import { NavBar } from "./NabVar"
import { Navigate } from "react-router-dom"
//import { Link } from "react-router-dom"
export const MainApp = () => {

  
    return (
   <>
   <h1>Main App</h1>
   <hr/>
    <NavBar/>


   <Routes>

    <Route path="/" element={ <HomePage/>}/>
    <Route path="About" element={ <AboutPage/>}/>
    <Route path="Login" element={ <LoginPage/>}/>

    <Route path="/*" element={<Navigate to="/About"/> } />

   </Routes>

   </>
  )
}
 