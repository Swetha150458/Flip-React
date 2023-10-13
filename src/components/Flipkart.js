import React from 'react'
import offer from './offer.png'
import phn from './phn.png'
import ele from './ele.png'
import app from './app.png'
import fas from './fas.png'
import bea from './bea.png'
import home from './home.png'
import fur from './fur.png'

export default function Flipkart() {
  return (
    <>
            <div className='col-md-1'>
        </div>
        <div className='col-md-1'>
            <img src={offer} width='100%'/>
            <p>Offers</p>
        </div>
        <div className='col-md-1'>
            <img src={phn} width='100%'/>
            <p>mobiles</p>
        </div>
        <div className='col-md-1'>
            <img src={ele} width='100%' />
            <p>Electronics</p>
        </div>
        <div className='col-md-1'>
            <img src={app} width='100%'/>
            <p>appliances</p>
        </div>
        <div className='col-md-1'>
            <img src={fas} width='100%'/>
            <p>fashion&dresses</p>
        </div>
        <div className='col-md-1'>
            <img src={bea} width='100%'/>
            <p>beauty</p>
        </div>
        <div className='col-md-1'>
            <img src={home} width='100%'/>
            <p>home&kitchen</p>
        </div>
        <div className='col-md-1'>
            <img src={fur} width='100%' />
            <p>furniture</p>
        </div>
        

        
        
        </>

  )
}