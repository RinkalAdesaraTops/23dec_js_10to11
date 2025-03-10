import React,{useEffect, useState} from 'react'

const useApi = (url) => {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(json=>setData(json))
  },[])
  return [data]
}

export default useApi
