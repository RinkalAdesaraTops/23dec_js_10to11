import React, { useState } from 'react'

const Crud = () => {
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [id,setId] = useState("")
    const [gender,setGender] = useState("")
    const [data,setData] = useState([])
    const saveData = (e)=>{
        e.preventDefault()
        if(id!=''){
            //update
            let res = data.map((i,index)=>{
                if(index==id){
                    i.name = name
                    i.age = age
                    i.gender = gender
                }
                return i
            })
            setData(res)
        } else {
            //insert
            setData([
                ...data,
                {
                    name:name,
                    age:age,
                    gender:gender
                }
            ])
        }
       
        setName('')
        setAge('')
        setGender('')
        setId('')
    }
    const delData = (id)=>{
        //1 2  4 5 = 3
        let res = data.filter((i,index)=>{
                return index!=id
        })
        setData(res)
    }
    const editData = (id)=>{
        let res = data.find((i,index)=>{
            return index==id
        })
        setName(res.name)
        setAge(res.age)
        setGender(res.gender)
        setId(id)
    }
  return (
    <div>
      <form action="#" method='post' onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/><br /><br />
        <label htmlFor="">Age:</label>
        <input type="number" name="age" id="age" value={age} onChange={(e)=>setAge(e.target.value)}/><br /><br />
        <label htmlFor="">Gender:</label>
        <input type="radio" name="gender" id="gender" value='male' onChange={(e)=>setGender('male')} checked={gender=='male'?'checked':''}/>Male
        <input type="radio" name="gender" id="gender" value='female' onChange={(e)=>setGender('female')} checked={gender=='female'?'checked':''}/>Female
        <br /><br />
        <input type="submit" value="Save Data" />
      </form>
      <br />
      <table border={'2'}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((i,index)=>{
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>{i.gender}</td>
                            <td>
                                <button onClick={()=>editData(index)}>Edit</button>
                                <button onClick={()=>delData(index)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Crud
