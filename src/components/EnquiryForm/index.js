import {useState}   from 'react'

import Navbar from '../Navbar'

import './index.css'

const EnquiryForm = () => {
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const [fromMsg,setFormMsg] = useState("")
    const [isSucess,setIsSucess] = useState(false)
    const [product_id,setProduct_id] = useState(0)

    const onSubmitForm = async(e) => {
        e.preventDefault()
      try{
        if( !name || !email || !product_id || !phone || !message){
            setFormMsg("All feilds are required.")
        }else{ 
             const formDetails = {name,phone,email,message,product_id}
       const res = await fetch('https://gvcc-backend-1.onrender.com/api/enquiries',{
        method: "POST",
        body: JSON.stringify(formDetails),
        headers: {
    "Content-Type": "application/json"
  },
       })
       const data = await res.json()
       console.log(data)
       if (res.ok){
        setIsSucess(true)
          setFormMsg("Form Submitted Successfully!!")
          setEmail("")
          setMessage("")
          setName("")
          setPhone("")
          setProduct_id("")
       }
       else{
        setIsSucess(false)
        setFormMsg("Error",data.message)
       }
         }
        
      }catch(err){
        console.log('Error: ',err)
      }
    }
    const style = isSucess === true ? 'green' : 'red'

    return(
      <>
      <Navbar />
        <div className='enqyiry-form'>
        <h1 className='form-heading'>Enquiry Form</h1>
        <form className='form-container' onSubmit={onSubmitForm}>
            <div className='input-container'>
                <label htmlFor='productId'>Product Id:</label>
                <input type="number" id="productId" value={product_id} onChange={(e) => setProduct_id(e.target.value)} className='input-box' />
            </div>
            <div className='input-container'>
                <label htmlFor='name'>Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className='input-box' />
            </div>
              <div className='input-container'>
                <label htmlFor='email'>Email:</label>
                <input id="email" type="email" value={email} onChange={(e) =>setEmail(e.target.value)}   className='input-box' />
            </div>
              <div className='input-container'>
                <label htmlFor='phone'>Phone:</label>
                <input id="phone" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className='input-box' />
            </div>
              <div className='input-container'>
                <label htmlFor='message'>Message:</label>
                <input id="message" value={message} onChange={(e) => setMessage(e.target.value)} type="text" className='input-box' />
            </div>
            <button type="submit" className='submit-btn'>Submit</button>
        </form>
        <p className={style}>{fromMsg}</p>
        </div>
        </>
    )
}

export default EnquiryForm