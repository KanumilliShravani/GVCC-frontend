import { useEffect,useState} from 'react'

import {useParams,Link} from 'react-router-dom'

import Navbar from '../Navbar'

import './index.css'

const ProductDetails = () => {
    const [response,setResponse] = useState([])
    let params = useParams()

    useEffect(() => {
      async function fetchData() {
          const res  = await fetch(`https://gvcc-backend-1.onrender.com/api/products/${params.id}`)
          const data = await res.json()
          console.log(data)
       if (res.ok){
        setResponse(data)
       }else{
        console.log("Error: ",data.message)
       }
      }
      fetchData()
    })
      const {image_url,name,long_desc,short_desc,price,category} = response

    return(
      <>
      <Navbar />
        <div className='product-details'>
         <div className='product-card'>
            <img className='product-img' src={image_url} alt={name} />
            <div>
             <h1 className='product-name'>{name}</h1>
             <p className='product-desc'>{short_desc}</p>
             <p className='product-desc'>{long_desc}</p>
             <p>Rs: {price}</p>
             <p>Category: {category}</p>
            </div>
         </div>
         <div className='enquiry-card'>
         <p>Submit Your Product Enquiry by clicking button below:</p>
         <Link to="/form" className='nav-link'><button type='button' className='enquiry-btn'>Enquiry</button></Link>
         </div>
        </div>
        </>
    )
}

export default ProductDetails