import {useState,useEffect} from 'react'

import {Link} from 'react-router-dom'

import Navbar from '../Navbar'

import './index.css'

const Home = () => {
    const [response,setResponse] = useState([])
    const [searchInput,setSearchInput] = useState("")

    useEffect(() => {
      async function fecthData(){
        const res = await fetch(`https://gvcc-backend-1.onrender.com/api/products?search=${searchInput}`)
        const data = await res.json()
        console.log(data)
        if(res.ok){
           setResponse(data.products)
        }else{
            console.log(data.message)
        }
      }
      fecthData()
    },[searchInput])

    return(
      <>
      <Navbar />
        <div className='home-container'>
            <h1 className='home-heading'>Products List</h1>
            <input className='search-box' placeholder='Search here...' type="search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <ul className='list-container'>
               { response.length !==0 && response.map(each => (
                <Link className='nav-link' to={`/${each.id}`}><li className='list-item' key={each.id}> 
                <img className='product-image' src={each.image_url} alt={each.name} />
                </li></Link>
               ))
               }
            </ul>
            
        </div>
        </>
    )
}

export default Home