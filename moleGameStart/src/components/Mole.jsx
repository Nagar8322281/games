import React, { useEffect, useState } from 'react'
import moleSvg from '../assets/mole-svg.svg'
import { use } from 'react'

const Mole = ({props}) => {
    const[visibel,setVisibel] = useState(true)
    useEffect(() => {
        let random = Math.floor(Math.random()*2000)+200
        const intervalId = setInterval(() => {
            setVisibel((perv) => !perv)
        }, random);

        return () => {
            clearInterval(intervalId)
        }
    },[])
  return (
    <div className='size-36 relative overflow-hidden'>
     <img onClick={()=> {props(prevScore => prevScore + 1)
     setVisibel(false)}}
        className={`mole w-[80%] transition-all mx-auto ${
            visibel ? 'translate-y-0' : 'translate-y-[120%]'
         }`}
         src={moleSvg} 
     />
        <div className='bg-orange-950 w-full -z-10 h-10 rounded-full absolute 
        bottom-0'></div>
    </div>
    
   )
}


  


export default Mole