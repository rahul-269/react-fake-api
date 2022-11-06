import React from 'react'

function Header({ setIsAdding }) {
  return (
      <header>
        <h1>User Management Software</h1>
        <div style={{ marginTop: '30px', marginBottom: '18px'}}>
            <button onClick={() => setIsAdding(true)}
             className='round-button'>Add User</button>
        
            <button onClick={() => setIsAdding(true)}
             className='round-button' style={{marginLeft:'30px'}}>Find User</button>
        </div>
      </header>
  )
}

export default Header