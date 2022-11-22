import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}
from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
  
    const menuItem=[
        {
            path:"/account",
            name:"View Account Balance",
            icon:<FaTh/>
        },
        {
            path:"/transfer",
            name:"Transfer",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="box">
           <div style={{"200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{ "block" : "none"}} className="logo">Natwest Online Banking</h1>
                   <div style={{ "50px" : "0px"}} className="bars">
                     
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{"block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;