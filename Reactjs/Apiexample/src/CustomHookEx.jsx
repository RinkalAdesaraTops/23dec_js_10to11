import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import useApi from './useApi'

const CustomHookEx = () => {
    const [data] = useApi("https://fakestoreapi.com/products")
    const [catdata] = useApi("https://fakestoreapi.com/products/categories")
    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=>setData(json))
    //     fetch('https://fakestoreapi.com/products/categories')
    //         .then(res=>res.json())
    //         .then(json=>setCatData(json))
            
    // },[])
  return (
    <div>
      <h3>Custom Hooks Example</h3>
        <select name="" id="">
            {
                catdata.map((i)=>{
                    return <option>{i}</option>
                })
            }
        </select>
        <br /><br />
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

export default CustomHookEx
