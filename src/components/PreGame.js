import React from 'react'
import { Link} from 'react-router-dom'

const PreGame = () => {




  return (
    <>

<div className="  fixed w-10 h-20 bg-red ok " ></div>

          <h1 className=' text-center text-9xl '  >  Aim Lab's</h1>
          <div className="  flex items-center justify-center  mt-72 ">
<Link className=" bg-slate-50  px-20  py-10 rounded-xl text-center justify-center text-lg "  to='/ingame' >  Start    </Link>
       
     </div>
    
    
    
    </>
    )
}

export default PreGame