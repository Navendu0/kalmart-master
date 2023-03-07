import React from 'react'
import { Color } from '../Color'
import { useNavigate } from "react-router-dom";

import logo from '../Data/images/msmaitilogo.png'

const headerStyle = { backgroundColor:"#e1e2dc", color: "black", display: 'flex', justifyContent: "space-between", marginBottom:'10px',  alignItems: "center",borderRadius:'5px'}

function Hader() {
    let navigate = useNavigate();

    return (
        <>
            <div style={headerStyle}>
                <div className='click' 
                style={{display:"flex", alignItems: "center",}}
                onClick={()=>navigate('/')}>
                 {/* onclick  goto home page*/}
                    <img src={logo} alt="" style={{height:"40px",width:'40px',marginTop:"5px"}} />

             <p style={{fontWeight:'600',left:"-30px"}}>       M/s Maiti Mercantile</p>

                </div>
                <div className='click' onClick={()=>navigate('/About')}>
                    {/* onclick  goto login page*/}
                    <p style={{fontWeight:'400',marginRight:"10px"}}>   about us </p>           
                         </div>
            </div>
        </>
    )
}

export default Hader