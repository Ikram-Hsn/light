import { useState } from 'react'
import img1 from './assets/l1.jpg'
import img2 from './assets/l2.jpg'
const Light =() =>{

    const [index, setIndex] = useState()
    const handleRed = () =>{
        setIndex(true)
    }
    const handleBlue = () =>{
        setIndex(false)
    }
    return <div className='mt-[200px] ml-[40px] sm:mt-24 sm:ml-[450px]'>
         <img style={{display : index === false ?  "block":"none"}} className='w-[250px] h-[250px] ml-7 ' src={img1} alt="" />
         <img  style={{display : index === true ?  "block":"none"}}className='w-[250px] h-[250px] ml-7  ' src={img2} alt="" />

         <div>
         <button onClick = {handleRed}className='bg-red-600 text-white font-bold px-10 py-2 rounded-lg mt-5 ml-12'>on</button>
         <button onClick= {handleBlue} className='bg-blue-600 text-white font-bold px-10 py-2 rounded-lg ml-2'>off</button>
         </div>
    </div>
}
export default Light