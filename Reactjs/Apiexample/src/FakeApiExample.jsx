import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const FakeApiExample = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        //get post put patch delete
        axios.get("https://fakestoreapi.com/products")
        .then(rs => setData(rs.data))
        // fetch('https://fakestoreapi.com/products')
        //     .then(response => response.json())
        //     .then(rs => setData(rs));
    },[])
  return (
    <div>
      <table border={'2'}>
        <tr>
            <td>Id</td>
            <td>Image</td>
            <td>Product</td>
            <td>Category</td>
            <td>Price</td>
        </tr>
        {
            data.map((i)=>{
                return (
                    <tr>
                        <td>{i.id}</td>
                        <td><img src={i.image} height={'50px'} width={'50px'}/></td>
                        <td>{i.title}</td>
                        <td>{i.category}</td>
                        <td>{i.price}</td>
                    </tr>
                )
            })
        }
      </table>
    </div>
  )
}

export default FakeApiExample
