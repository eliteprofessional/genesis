import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';



const Header = () => {    

  return (
    <>

{/* header */}
  <div className="menu">
  <ul>
    <li>
      Sign Up
      <ul>
        <li className="link">
         <Link to="/client_with_individual">Client with individual</Link>
        </li>
        <li className="link">
         <Link to="/client_with_company">Client with Company</Link>
        </li>
        <li className="link">
        <Link to="/freelance">Freelancer</Link>
        </li>
        <li className="link">
        <Link to="/talentmanager">Talent Manager</Link>
        </li>
        
      </ul>
    </li>
    
    <li className="link">
    <Link to="/operations">Operations</Link>
      </li>
    <li className="link">Recent Data</li>
    <li className="link">Help</li>
  </ul>
</div>
{/* end header */}



    </>
  )
}

export default Header