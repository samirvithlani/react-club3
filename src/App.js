import logo from './logo.svg';
import './App.css';
import { First } from './First';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { Users } from './components/Users';
import { AddBugs } from './bug/AddBugs';
import { RegisterBug } from './bug/RegisterBug';
import { BugForm } from './bug/BugForm';
import { StudentRegistration } from './components/StudentRegistration';
import { Navbar } from './components/Navbar';
//jsx
import {Route, Routers, Routes} from 'react-router-dom';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { Blog } from './components/Blog';
import { ContactDetail } from './components/ContactDetail';
import { SubBlog } from './components/SubBlog';
import { Products } from './components/Products';
import { ProductDetail } from './components/ProductDetail';
import { UserApiDemo } from './api/UserApiDemo';

function App() {

var name = "Royal TechnoSoft Pvt. Ltd.";
var age = 20;
var isMarried = false;

var address = {
  country:"India",
  city: "Pune",
  state: "Maharashtra",
  area:"Kharadi",
  pin:411045
}

var userName = "Raj"
  return ( 
     
    <div className="App">
      {/* <Header uName = {userName}/> 
      
      <StudentRegistration/>
      <Footer address = {address}/> */}
      {/* <Navbar/> */}
      <UserApiDemo/>
      <Routes>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/contactus' element={<ContactUs/>}></Route>
        <Route path ="/blog" element={<Blog/>}></Route>
        <Route path = "/contactdetail/:id" element={<ContactDetail/>}></Route>
        <Route path='/subblog' element={<SubBlog/>}></Route>
        <Route path = "/products" element = {<Products/>}></Route>
        <Route path = "/productdetail/:id" element = {<ProductDetail/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
