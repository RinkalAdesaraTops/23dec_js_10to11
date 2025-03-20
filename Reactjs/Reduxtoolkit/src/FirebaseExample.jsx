import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { db } from '../firebase'
import { addDoc,collection,query,onSnapshot, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore'

const FirebaseExample = () => {
    const [data,setData] = useState({
        name:'',
        age:''
    })
    const [id,setId] = useState('')
    const [alldata,setAllData] = useState([])
    useEffect(()=>{
        const q = query(collection(db, "users"));
        const unsub = onSnapshot(q, (querySnapshot) => {
          let todosArray = [];
          querySnapshot.forEach((doc) => {
            todosArray.push({ ...doc.data(), id: doc.id });
          });
          setAllData(todosArray);
        });
        return () => unsub();
    },[])
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = async(e)=>{
        e.preventDefault()
        if(id != ''){
            await updateDoc(doc(db,"users",id),data)
        } else {
            await addDoc(collection(db,"users"),data)
        }
        setData({
            name:'',
            age:''
        })
        setId('')
    }
    const editData = async(id)=>{
        let res = await getDoc(doc(db,"users",id))
        console.log(res.data());
        
         setData(res.data())
         setId(id)
    }
    const delData = async(id)=>{
        let res = await deleteDoc(doc(db,"users",id))
    }
  return (
    <div>
      <form action="#" method='post' onSubmit={saveData}>
      Name: <input type="text" name="name" id="name" value={data.name} onChange={handleChange} />
      <br /><br />
      Age: <input type="text" name="age" id="age" value={data.age} onChange={handleChange} />
      <br /><br />
      <input type="submit" value='Save'/>
      </form>
      <br /><br />
      <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            {
                alldata.map((i,index)=>{
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
        </tbody>
      </table>
    </div>
  )
}

export default FirebaseExample
