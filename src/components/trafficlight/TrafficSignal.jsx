import {useState,useEffect} from 'react'

function TrafficSignal(){
const[light,setLight] = useState('green')
const [time, setTime] = useState(45)
useEffect(()=>{ 
  let interVal = setInterval(()=>{
    setTime((pre)=>pre-1)
  },1000)
  if(time===0){
    if(light === 'green'){
        setLight('orange')
        setTime(5)
    } else if(light === 'orange'){
        setLight('red')
        setTime(40)
    } else{
        setLight('green')
        setTime(45)
    }
  }
return ()=> clearInterval(interVal)
},[light,time])
return(
    <>
    <div style={{
     height: 80,
     width: 80,
     borderRadius: '50%',
     backgroundColor: light,
     margin: '20px auto',
    }}/>
    </>
)
}
export default TrafficSignal