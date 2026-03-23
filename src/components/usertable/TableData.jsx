import {useState,useEffect} from 'react';


export const  TableData=()=>{
const[data,setData] = useState([])
const[loading,setLoading] = useState(false)
const[error,setError] = useState('')

async function getData(){
    setLoading(true)
     try{
       let res = await fetch('https://jsonplaceholder.typicode.com/posts')
       if(!res.ok){
        throw new Error("API has been Failed")
       }
       let result = await res.json()
       setData(result)
     }
     catch (err){
       setError(err.message)
     }
     finally{
      setLoading(false)
     }
    }
useEffect(()=>{
        getData()
       },[])
    return (
        <>
           {loading && <h5>Loading....</h5>}
      {error && <h5 style={{color:'red'}}>{error}</h5>}
      <table border="1">
      <thead>
        <tr>
      <th>User ID</th>
      <th> ID</th>
      <th> Title</th>
      </tr>
      </thead>
     <tbody>
      {data.filter((val)=> val.userId > 5).map((val)=>(
        <tr key={val.id}>
        <td>{val.userId}</td>
        <td>{val.id}</td>
        <td>{val.title}</td>
        </tr>
      ))}
   </tbody>
  </table>
        </>
    )

}

