import React from 'react'

export default function About(props) {
  return (
      <div className='container my-4' style={{marginLeft:"45%"}}>
          <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>About US</h2>
      <h6 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>- Text based utilities-</h6>
    </div>
  )
}
