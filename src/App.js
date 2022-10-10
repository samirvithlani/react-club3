import logo from "./logo.svg";
import "./App.css";
import { First } from "./First";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Users } from "./components/Users";
import { AddBugs } from "./bug/AddBugs";
import { RegisterBug } from "./bug/RegisterBug";
import { BugForm } from "./bug/BugForm";
import { StudentRegistration } from "./components/StudentRegistration";
import { Navbar } from "./crud/Navbar";
//jsx
import { Route, Routers, Routes } from "react-router-dom";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import { Blog } from "./components/Blog";
import { ContactDetail } from "./components/ContactDetail";
import { SubBlog } from "./components/SubBlog";
import { Products } from "./components/Products";
import { ProductDetail } from "./components/ProductDetail";
import { UserApiDemo } from "./api/UserApiDemo";
import { RecipeAPi } from "./api/RecipeAPi";
import { ViewTutorials } from "./crud/ViewTutorials";
import { UpdateTutorail } from "./crud/UpdateTutorail";
import { AddTutorial } from "./crud/AddTutorial";
import { StorageDemo } from "./storage/StorageDemo";
import { GetStoreData } from "./storage/GetStoreData";
import { Json } from "./context/Json";
import ProtectedRoutes from "./ProtectedRoutes";
import { MaterialDemo1 } from "./material/MaterialDemo1";
import Login from "./material/Login";
import { Task } from "./material/Task";
import { SliderDemo } from "./material/SliderDemo";
import { MuiTable } from "./material/MuiTable";
import { DataGrid } from '@mui/x-data-grid';
import { UserComponent } from "./query/UserComponent";

function App() {
  var name = "Royal TechnoSoft Pvt. Ltd.";
  var age = 20;
  var isMarried = false;

  var address = {
    country: "India",
    city: "Pune",
    state: "Maharashtra",
    area: "Kharadi",
    pin: 411045,
  };

  var userName = "Raj";
  return (
    <div className="App">
      {/* <Header uName = {userName}/> 
      
      <StudentRegistration/>
      <Footer address = {address}/> */}
      {/* <Navbar/> */}
      {/* <UserApiDemo/> */}

      {/* <StorageDemo/>
      <GetStoreData/> */}
      <UserComponent/>

      {/* <Json/> */}
      <Routes>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contactdetail/:id" element={<ContactDetail />}></Route>
        <Route path="/subblog" element={<SubBlog />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/productdetail/:id" element={<ProductDetail />}></Route>
        <Route path="/updatutorial/:id" element={<UpdateTutorail />}></Route>
        <Route path = "/material1" element = {<MaterialDemo1/>}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/viewtutorials" element={<ViewTutorials />}></Route>
          <Route path="/addtutorial" element={<AddTutorial />}></Route>
        </Route>

        <Route path="/login" element={<StorageDemo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
