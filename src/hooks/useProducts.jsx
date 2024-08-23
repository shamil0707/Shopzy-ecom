import React, {useState, useEffect} from 'react'

const useProducts = (props) => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
      fetch('http://localhost:3000/api/v1/products')
      
      .then(res => res.json())
      .then(json=> setProducts(json))
    },[])


  return [products];
}

export default useProducts