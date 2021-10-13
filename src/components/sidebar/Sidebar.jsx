import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'
import aboutme from '../../images/aboutme.jpg'
import axios from 'axios'
import { useLocation } from 'react-router';
export default function Sidebar(){
    const [cats, setCats] = useState([]);
  
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
    return(
        <div className="sidebar">
              <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
          src={aboutme}
          alt=""
        />
                <p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in sapien arcu. Donec quis condimentum erat. Nulla facilisi. Cras sollicitudin massa eu lectus gravida, vel consectetur urna congue. Vestibulum auctor lorem ac arcu tempus, vel ultricies nulla sodales. In egestas aliquet turpis non placerat. Aenean auctor sollicitudin consectetur.</p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
          {cats.map((c) => (
           <Link to={`/?cat=${c.name}`} className="link">
             <li className="sidebarListItem">{c.name}</li> 
             </Link>
          
        
          ))}
        </ul>
            </div>

            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            </div>
            </div>
        </div>
    )
}