import React from 'react'
import { login } from '../utils'
import zoo from '../assets/zoo.png'

const WellcomePage = () => {
  return (
    <div style={{textAlign: 'center', marginTop: '1rem'}}>
        <img height={400} width={600} src={zoo}/>
        <h2>Wellcome to the zoo!</h2>
        <p>Animals are in danger in Ukraine <sup>🇺🇦</sup></p>
        <p>Help them out and get your reward</p>
          <button onClick={login} style={{marginTop: '1rem'}}>Sign in</button>
    </div>
  )
}

export default WellcomePage