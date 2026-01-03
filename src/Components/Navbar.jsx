import { NavLink,useNavigate } from "react-router-dom"

function Navbar(){

return(
     <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#0F1B31"}}>
        <NavLink to="/">
        <div className="container-fluid"><img src="https://res.cloudinary.com/dvgbwrvl1/image/upload/v1767443751/WhatsApp_Image_2025-12-18_at_23.24.52_qcafv5.jpg" width="100px" style={{borderRadius:"5px"}}>
        </img>
        </div>
        
        </NavLink>
       
    
     </nav>
)

}



export default Navbar