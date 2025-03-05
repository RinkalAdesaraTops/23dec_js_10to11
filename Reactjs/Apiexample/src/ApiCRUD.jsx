import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ApiCRUD = () => {
    let [data,setData] = useState({
        name:"",
        age:""
    })
    let [id,setId] =useState('')
    const [alldata,setAllData] = useState([])
    const disp = ()=>{
        axios.get("http://localhost:5000/users")
        .then((res)=>setAllData(res.data))
    }
    useEffect(()=>{
        disp()
    },[])
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = (e)=>{
        e.preventDefault()
        if(id!=''){
            axios.put("http://localhost:5000/users/"+id,data)
            .then(()=>console.log("updated...."))
        } else {
            axios.post("http://localhost:5000/users",data)
            .then(()=>console.log("Inserted...."))
        }
       setData({
        name:"",
        age:""
       })
       setId('')
        disp()
    }
    const delData = (id)=>{
        axios.delete("http://localhost:5000/users/"+id)
        .then(()=>console.log("Deleted.."))
        disp()
    }
    const editData = (id)=>{
        axios.patch("http://localhost:5000/users/"+id)
        .then((res)=>{
            setData(res.data)
            setId(res.data.id)
        })
        
    }
  return (
    <div>
        <form action="#" method='post' onSubmit={saveData}>
            <label htmlFor="">Name:</label>
            <input type="text" name="name" id="name" value={data.name} onChange={handleChange}/><br /><br />
            <label htmlFor="">Age:</label>
            <input type="number" name="age" id="age"  value={data.age} onChange={handleChange}/><br /><br />
            <input type="submit" value='Save' /><br /><br />
        </form>
        <br /><br />
      <table border={'2'}>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Action</td>         
        </tr>
        {
            alldata.map((i)=>{
                return (
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>
                        <button onClick={()=>editData(i.id)}>Edit</button>
                            <button onClick={()=>delData(i.id)}>Delete</button>
                        </td>
                    </tr>
                )
            })
        }
      </table>
    </div>
  )
}

export default ApiCRUD
