import { Link, Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import FurtherReading from "./Pages/FurtherReading"
import Contact from "./Pages/Contact"
import Profile from "./Pages/Profile"
import Dashboard from "./Issues_Project/Pages/Dashboard"

function App() {


  return (
    <>
      {/* React Routing  */}
      {/* steps are 
setup your router: app should be rapped in BrowserRouter which is in main.jsx
Define your routes: import routes and define routes in routes tags 
Handling navigation: define all route */}
      {/* step 2: */}
      <nav>
        <ul>
          {/* if we use a tag then page will refresh to avoid that use Link tag   */}
          <a href="/"><li>Homepage</li></a>
          <li><Link to="furtherreading">FurtherReads</Link></li>
          <li><Link to="contact">Contact</Link></li>




          {/* Dinamic Routes: think about instagram user with link  */}
          <li><Link to="/users/:user">User Profile</Link></li>
        </ul>
      </nav>
      <Routes>
        {/* step 3: define path and element */}
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/furtherreading" element={<FurtherReading></FurtherReading>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/users/:handle" element={<Profile></Profile>}></Route>

      </Routes>


    </>
  )
}

export default App
