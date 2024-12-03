import Counter from "./components/counter/Counter"
import Imagegallery from "./components/Imagegallery"
import { useState } from "react"
import TeamList from "./components/team/TeamList"
import AddTeamForm from "./components/addCar/AddTeamForm"
import NewCar from "./components/NewCar"
import Navigationbar from "./components/header/Navigationbar"
import Footer from "./components/footer/Footer"
import { Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Blog from "./components/blog/Blog"
import ContactUs from "./components/contact/ContactUs"
import Listing from "./components/listing/Listing"
import AddCar from "./components/addCar/AddCar"
import PageNotFound from "./components/notfound/PageNotFound"
import Register from "./components/authentication/Register"
import Login from "./components/authentication/Login"
import CarDetails from "./components/listing/CarDetails"


const App = () => {
  const [authToken, setAuthToken] = useState(null);
  const [loginUser, setLoginUser] = useState(null);
  
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {/* header section  */}
      <Navigationbar
      authToken={authToken}
      setAuthToken={setAuthToken}
      loginUser={loginUser}
      setLoginUser={setLoginUser}
      />

      {/* react router section  */}
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/listing" element={<NewCar/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/add-car" element={<AddCar/>}/>
          <Route path="/car-details/:id" element={<CarDetails/>}/>
          <Route path="*" element={<PageNotFound/>}/>
          <Route path= "/register" element={<Register/>}/>
          <Route path= "/login" element={<Login />}/>
          <Route path= "/add-car" element={<AddCar/>}/>

         
      </Routes>


      {/* footer section  */}
      <Footer/>
      
    </>
  )
}

export default App