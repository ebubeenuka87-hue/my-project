import React , {useRef}from 'react'

const UseRef = () => {

    const inputRef = useRef(0)
    useEffect(() => {
        inputRef.current.focus()
   } , []) 
   const changevalue = () => {
    inputRef.current.value = "Hello"
   }     
  return (
    <div>
        <input ref={inputRef} type="text" placeholder='Enter your name' />

        <>
         <input ref={inputRef} 
         />
            <button onClick={changevalue}>Change Value</button>
        </>
    </div>
    
  )
}

export default UseRef