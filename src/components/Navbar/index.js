import {Link} from 'react-router-dom'

import './index.css'

const Navbar = () => {

    return(
       <nav className='nav-container'>
        
        <ul className='nav-list'>
           <Link to="/" className='nav-link'> <li className='nav-item'>Home</li></Link>
            <Link to="/form" className='nav-link'> <li className='nav-item'>ProductEnquiry</li></Link>
        </ul>
       </nav>
    )
}

export default Navbar
