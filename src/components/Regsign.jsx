import React from 'react'


const Regsign = () => {
  return (
    <div className='bg-[#e9e9e9] p-2 h-[150px] md:h-[300px] md:grid grid-cols-2'>
        {/* // its cols not col wated my 20mins*/}
    <div className=' col-span-1 flex  justify-center'>
        <div className=' m-1 flex flex-col  justify-center py-[20px]'>
            <h1 className=' font-bold text-[15px] md:text-5xl text-center'>Unlock Exclusive Offer!</h1>
            <span className='font-bold text-[9px] md:text-[20px]'>Sign up to our newsletter and stay up to data.</span>            
        </div>

          {/* <h1>hello</h1> */}
          </div>

        <div className=' col-span-1 text-center md:items-center flex justify-center flex-col'>
          <div>

          <input type="text" className='w-[170px] p-[2px] h-[30px] md:w-[250px] md:h-[50px] md:text-[15px] text-[10px] me-2 rounded' placeholder='example@gmail.com' name="" id="" />
            <button className='text-center w-[70px] h-[30px] md:w-[110px] text-[12px] md:text-[15px] bg-black text-white rounded md:h-[50px] '>Register</button>
           
          {/* <h1>hello</h1> */}

          <p className='hidden md:block md:mt-2 md:text-[14px] text-start'>We care about the protection of your data. </p>

          </div>



        </div>
           


            </div>

  )
}

export default Regsign;