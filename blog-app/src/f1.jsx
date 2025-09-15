import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

function F1(){
    return(<BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>)
}
export default F1;