import React, { useEffect, useState }from 'react'
import pizzaImg from "../assets/pizzaImg.png"
import onionImg from "../assets/onionImg.png"
import eggImg from "../assets/eggImg.png"
import vegetableImg from "../assets/vegetableImg.png"
import breadImg from "../assets/breadImg.png"
import heartImg from "../assets/heartImg.jpg"
import "../styles/Fetch.css"


const Fetch = () => {
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] =useState(false)
    const fetchRequest =async ()=>{
        try {
            setIsLoading(true)
            const req = await fetch('https://jazzy-mern.onrender.com/api/products');
            const res = await req.json();
            console.log(res.products);
            setData(res.products)  
        } catch (error) {
            console.log(error.message);
        }finally{
            setIsLoading(false)
        }

    }
    console.log(data);

    useEffect(()=>{
        fetchRequest()
    },[])
    
  return (
   <>
   <main className=' d-flex flex-wrap justify-content-center  justify-items-center  gap-3'>
    {isLoading && ( <div>  ,<h2 className='text-center'> loading...</h2></div> )}
    {data.map((datum)=>{
        const {_id,title,image,price} = datum
        return(
            <div className='border  p-3 position-relative card-inner' key={_id}>
               
                <img src={image} alt="" className='img-fluid w-100' />
                <img src={heartImg} alt="" className='position-absolute top-0  end-0 rounded-pill p-3 w-25'/>

                <h6>{title}</h6>
                <p className='mt-4'>Total price</p>
                <h4> N{price} </h4>
                <div className='d-flex justify-content-around align-items-center mb-2'>
                    <img src={pizzaImg} alt="" />
                    <img src={onionImg} alt="" />
                    <img src={vegetableImg} alt="" />
                    <img src={breadImg} alt="" />
                    <img src={eggImg} alt="" />
                </div>
                <button className='btn btn-danger w-100'> Add to Cart</button>


            </div>
        )
    })}
   </main>
   </>
  )
}

export default Fetch