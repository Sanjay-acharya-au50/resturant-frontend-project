import React from 'react'
import pizzaOffer from '../imgages/pizzaOffer.jpg'

const Offers = () => {
  return (
    <div className='max-w-[1240px]   p-2 mx-auto md:grid grid-cols-3'>
    {/* <div className='col-span-1  border border-black '>helo</div>
    <div className='col-span-2 border border-black '>world</div> */}
            <div className='col-span-1 flex items-center justify-center'>
                <img src={pizzaOffer} alt='' className='h-[250px] w-[350px] rounded'></img>
            </div>
            <div className='col-span-2 items-center flex flex-col md:items-start justify-center sm:p-2 md:p-5'>

                <p className='font-bold text-[#0009]'>Domino's Pizza: Delivering Happiness</p>
                <p className='mt-2 '>With Domino's it is always “Rishton ka time”. Whether it's a treat for your promotion, a kid topping his class or winning the heart of your wife who is too tired to cook after a long day at work! A cheesy slice of the best pizza is all one needs to put things into perspective and start any celebration.</p>
                <button className='bg-black text-white p-3 w-full md:w-[20%] rounded mt-2'>Order Now!</button>
            </div>
    </div>
  )
}

export default Offers