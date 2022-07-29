import logo from './logo.svg';
import './App.css';
import { First } from './First';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { Users } from './components/Users';
//jsx

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
      <Header uName = {userName}/> 
      <Users/>     
      <Footer address = {address}/>
    </div>
  );
}

export default App;
