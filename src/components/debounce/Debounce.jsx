import { useState, useMemo } from 'react'

function DebounceValue(fn,delay){
  let timer;
  return function(...arg){
    clearTimeout(timer)
    timer = setTimeout(()=>{
        fn(...arg)
    },delay)
  }
}

function Debounce(){
const [text ,setText] = useState("")

function getData(){
 console.log("Api has run")
}
const handleChange = useMemo(() => {
    return DebounceValue(getData, 2000);
  }, []);

const onChange = (e) => {
    const value = e.target.value;
    setText(value);
    handleChange()
  };


return(
    <>
     <input type="text" placeholder="Search The Data" id="input" value={text}
    onChange={onChange}
     />
    </>
)
}

export default Debounce