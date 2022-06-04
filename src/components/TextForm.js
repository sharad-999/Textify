import React,{useState} from 'react'
export default function TextForm(props) {
    const [Text,setText] =useState('')
    const handleUpClick= ()=>{
        const uppercase=Text.toUpperCase()
        setText(uppercase);
    }
    const handleLoClick= ()=>{
        const lowercase=Text.toLowerCase()
        setText(lowercase);
    }
    const handleOnChange= (event)=>{
        setText(event.target.value);
    }
    const handleClear= ()=>{
        setText('');
    }
    const copyText=()=>{
        navigator.clipboard.writeText(Text)
    }
    return (
        <>
            <div className="container">
                <div>
                    <h3 className='my-3' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h3>
                    <div className="container">
                        <textarea className="form-control my-3" id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange} value={Text} style={{ backgroundColor: props.mode === 'dark' ? '#dee4e7' : 'white' }}></textarea>
                        <button onClick={copyText} className={`btn ${props.mode === 'dark' ? 'btn btn-info' : 'btn-outline-success'}`}>Copy 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard mx-1" viewBox="0 0 16 16">
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                        </svg>
                        </button>
                  </div >
                  <button className="btn btn-primary my-3" onClick={handleUpClick}>Upper Case</button>
                  <button className="btn btn-primary mx-3" onClick={handleLoClick}>Lower case</button>
                  <button className="btn btn-primary" onClick={handleClear}>Clear</button>
              </div>
      </div>
            <div className="container my-2" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
          <h2>Your Text Summary</h2>
                <p>{Text.split(' ').length} Words and {Text.length} character</p>
      </div>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
          <h2>Preview Text</h2>
          <p>{Text.length>0?Text:'Enter Text to Preview'}</p>
      </div>
          
      </>
  )
}
