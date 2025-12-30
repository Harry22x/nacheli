import { NavLink,useNavigate } from "react-router-dom"

function Navbar(){

return(
     <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#0F1B31"}}>
        <div className="container-fluid"><img src="src\Components\Screenshot 2025-12-30 134559.png" width="200px"></img></div>
        
        <div className="container-fluid">
            <NavLink to="/">
            <span className="navbar-brand mb-0 h1">Home</span>
            </NavLink>
        </div>
    
     </nav>
)

}



export default Navbar