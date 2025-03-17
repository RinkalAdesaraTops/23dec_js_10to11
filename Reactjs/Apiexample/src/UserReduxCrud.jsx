import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delFunc, insFunc, updFunc } from './reduxcrud/UserAction'

const UserReduxCrud = () => {
    const [data,setData] = useState({
        name:"",
        age:""
    })
    const [id,setId] = useState('')
    const allData = useSelector((state)=>state.data)
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = (e)=>{
        e.preventDefault()
        if(id!=null){
            dispatch(updFunc(id,data))
        } else {
            dispatch(insFunc(data))

        }
        setData({
            name:'',
            age:""
        })
        setId('')
    }
    const editFunc = (id)=>{
        let res = allData.find((i,index)=> index==id)
        setData(res)
        setId(id)
    }
  return (
    <div>
      <form action="#" method='post' onSubmit={saveData}>
        Name:
            <input type="text" name="name" id="name" onChange={handleChange} 
            value={data.name}
            /> <br /><br />
        Age:
            <input type="number" name="age" id="age" onChange={handleChange} 
            value={data.age}
            /> <br /><br />
        <input type="submit" value="Save" />
      </form>
      <br /><br />
      <table>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
        </tr>
        <tbody>
            {
                allData.map((i,index)=>{
                    return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>
                            <button onClick={()=>editFunc(index)}>Edit</button>
                                <button onClick={()=>dispatch(delFunc(index))}>Delete</button>
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

export default UserReduxCrud
