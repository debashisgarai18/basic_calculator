import { useRef } from 'react'

interface prop{
    val : string
    display : (e : string) => void
    getResult : () => void
    textForArray : (elem : string) => void
}
const Buttons = ({val, display, getResult, textForArray} : prop) => {
  // useRef is used to create a refernce and get the innerHTML from the button
  const butRef = useRef<HTMLButtonElement>(null);
  const handleClick = () => {
    if(butRef.current){
      if(butRef.current.innerHTML === '=') getResult();
      else{
        display(butRef.current.innerHTML);
        textForArray(butRef.current.innerHTML);
      }
    }
  }
  return (
    <button className='text-4xl font-semibold w-full h-full' 
    ref={butRef}
    onClick={() => handleClick()}>{val}</button>
  )
}

export default Buttons