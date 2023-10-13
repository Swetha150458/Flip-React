import React from 'react'
import flipkartlogo from './flipkartlogo.png';
export default function Fsearch()
{
    return(
        <>
         <div className='col-md-2 '>
         <img src={flipkartlogo} width='100' />
         </div>
         <div className='col-md-6 float-end'>
               <button class="float-start button1">
               <i class="fa-solid fa-magnifying-glass"></i>
               </button>
            <input type='text' className='searchbox float-end' placeholder='Search..'/>
            </div>     
            <div className='col-md-4 log'>
                <ul>
                    <li><i class="fa-solid fa-store">Become a seller</i></li>
                    <li><i class="fa-regular fa-user">sign in</i></li>
                    <li><i class="fa-solid fa-cart-shopping">cart</i></li>
                    <li><i class="fa-solid fa-ellipsis-vertical"></i></li>
                </ul>


            </div>
        </>
    )
}