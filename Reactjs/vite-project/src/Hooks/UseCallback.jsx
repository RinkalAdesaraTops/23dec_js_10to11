import React, { useCallback, useState } from 'react'
import { data } from 'react-router'
import Display from './Display'

const UseCallback = () => {
    const[data,setData] = useState({
    name: "",
    age : ""
})
    //name,age field
    //display
    //insert
    
    const [alldata, setAlldata]  = useState([])
    const handleChange = (e) =>{
        const{name,value} = e.target;
        setData({
            ...data,
            [name] : value
        })
       
    }
    const saveData = useCallback((e) =>{
        e.preventDefault();
        // console.log(data);
        
        setAlldata([...alldata,data])
        // console.log(alldata);
        
    },[data])
    //memoized function
      return (
    <div>
        <form onSubmit={saveData} method='post'>
            <label>Name:</label>
            <input type="text" name="name" id="name" value={data.name} onChange={handleChange}/>
            <br />
            <label>Age:</label>
            <input type="text" name="age" id="age" value={data.age} onChange={handleChange}/>
            <br />
            <input type="submit" value="SaveData" />
            <br />           
        </form>
        <Display alldata={alldata}/>
    </div>
  )
}

export default UseCallback
