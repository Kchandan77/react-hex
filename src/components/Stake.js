import React from 'react'
//import Main from './Main'
function Stake() {

  return (
    <div className='flex-container'>
      <h1>Stake</h1>
      <div><p>Stake Amount in HEX (52,652 HEX available)</p>
        <span>52,652.02543536</span>
        <button className='max-btn'>Max</button>
        <div className='hex-h1'><h1>Hex</h1></div>
      </div>
      <div className='flex-container1'>
        <div>
          <h6>Stake Length in Days</h6>
          <p>162</p>
        </div>
        <h3>Days</h3>
        <div><button className='stake-btn'>Stake</button></div>
        <div className='list-container'>
          <ul>
            <li>Start Day:     193</li>
            <li>Last Full Day: 354</li>
            <li>End Day:       355</li>
          </ul>
        </div>
        <h4 className='active-stake'>Active Stakes</h4>
        <div className='active-stakes'>
          <ul>
            <li><a href="#">Start</a></li>
            <li><a href="#">End</a></li>
            <li><a href="#">Progress</a></li>
            <li><a href="#">Principal</a></li>
            <li><a href="#">Shares</a></li>
            <li><a href="#">BigPayDay</a></li>
            <li><a href="#">Intrest</a></li>
            <li><a href="#">Current Value</a></li>
          </ul>
        </div>
        <div >
          <button className='button'>None</button>
        </div>
        <h4 className='stake-history'>Stake History</h4>
        <div className='active-stakes'>
          <ul>
            <li><a href="#">Start</a></li>
            <li><a href="#">End</a></li>
            <li><a href="#">Progress</a></li>
            <li><a href="#">Principal</a></li>
            <li><a href="#">Shares</a></li>
            <li><a href="#">BigPayDay</a></li>
            <li><a href="#">Intrest</a></li>
            <li><a href="#">Current Value</a></li>
          </ul>
        </div>
        <div >
          <button className='button'>None</button>
        </div>
        
      </div>
  
      
    </div>



  )
}


export default Stake
