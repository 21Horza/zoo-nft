import React from 'react'
import thank from '../assets/thank.png'
import { logout } from '../utils'

const Completed = () => {
  return (
    <div>
        <img style={{position: 'relative', left: '50%', textAlign: 'center', transform: 'translate(-50%, 0)'}}
             height={250} width={250} src={thank}/>
        
        <div style={{textAlign: 'center'}}>
            <h1>Wow! You just saved the whole Zoo!</h1>
            <p style={{marginTop: '1rem'}}>Now all the animals will be save and sound</p>
            <button onClick={logout} style={{backgroundColor: 'crimson', marginTop: '2rem'}}>Sign out</button>
        </div>
    </div>
  )
}

export default Completed