import React from 'react'
import { useNavigate } from "react-router-dom";

export default function AdminDashborad() {

    const navigate = useNavigate();

  return (
    <div>
    <div style={{backgroundColor:'blue', height:'50px',color:'white', fontSize:'20px', fontWeight:'bold'}}>Admin Dashborad</div>
    <button style={{marginTop:'30px',marginLeft:'30px'}} onClick={()=> navigate("/addcategories")}>Add Categories</button>
    <button style={{marginTop:'30px',marginLeft:'30px'}} onClick={()=> navigate("/changeuserrole")}>Change User Role</button>
    </div>

  )
}
