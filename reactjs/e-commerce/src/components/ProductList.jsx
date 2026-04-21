import React, { useEffect, useState } from 'react'

const ProductList = () => {
    const [products,setProducts] = useState([])
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(true)


    async function fetchProducts(){
        await fetch('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/zeptoproducts')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        .catch(err=>{
            console.log(err)
            setError(true)
        })
        setLoading(false)
    }

    useEffect(()=>{
        fetchProducts()

    }, [])



if(loading) return <p>Loading....</p>
if(error) return <p>404 Page</p>
  return (
    <>
    <div>ProductList</div>
    <div className="container-fluid">
        <div className="row">
        {
            products.map((prod,i)=>(
                <div className='col border' key={i}>{prod.name}</div>
            ))
        }
        </div>
        </div>
    </>
  )
}

export default ProductList